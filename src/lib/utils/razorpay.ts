import { env } from "@/env";
import { deleteCookie } from "./cookies";
import { sendPaymentConfirmationEmail } from "./resend";
import { updateTeleCRMLead } from "./telecrm";

async function createOrder(amount: number) {
  const response = await fetch("/api/create-order", {
    method: "POST",
    body: JSON.stringify({ amount }),
  });

  return await response.json();
}

async function verifyPayment(
  response: any,
  amount: number,
  plan: string,
  paymentDate: string
) {
  const _response = await fetch("/api/verify-payment", {
    method: "POST",
    body: JSON.stringify({
      orderId: response.razorpay_order_id,
      razorpayPaymentId: response.razorpay_payment_id,
      razorpaySignature: response.razorpay_signature,
      amount: amount.toString(),
      plan,
      paymentDate,
    }),
  });
  return await _response.json();
}

async function purchase({
  name,
  phone,
  email,
  plan,
  description,
  amount,
  onPaymentStart,
}: {
  name: string | null;
  phone: string | null;
  email: string | null;
  plan: string | null;
  amount: number | null;
  description?: string | null;
  onPaymentStart?: () => void;
}) {
  if (!name || !phone || !email || !plan || !description || !amount) {
    throw new Error("Values passed to purchase function can't be null");
  }

  const order = await createOrder(amount);

  const paymentData = {
    key: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: "INR",
    order_id: order.id,
    name: "Taxocity",
    plan: `Private Limited Company - ${plan}`,
    description,
    handler: async (response: any) => {
      const paymentDate = new Date().toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const data = await verifyPayment(
        response,
        order.amount,
        plan,
        paymentDate
      );

      if (data.isOk) {
        // triggering loading overlay
        onPaymentStart?.();

        await updateTeleCRMLead({
          phone,
          email,
          order_id: response.razorpay_order_id,
          payment_amount: order.amount / 100,
          payment_id: response.razorpay_payment_id,
          payment_status: "completed",
        });

        await sendPaymentConfirmationEmail({
          name,
          email,
          plan,
          amount: order.amount,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          paymentDate,
        });

        // clearing data after successful payment
        deleteCookie("form_completed");
        localStorage.removeItem("user_data");

        // redirecting to payment success page with token
        window.location.href = `/payment-success?token=${data.token}`;
      } else {
        alert("Payment failed");
      }
    },
  };

  const payment = new (window as any).Razorpay(paymentData);
  payment.open();
}

export { purchase };
