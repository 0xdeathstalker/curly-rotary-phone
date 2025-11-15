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

async function verifyPayment(response: any) {
  const _response = await fetch("/api/verify-payment", {
    method: "POST",
    body: JSON.stringify({
      orderId: response.razorpay_order_id,
      razorpayPaymentId: response.razorpay_payment_id,
      razorpaySignature: response.razorpay_signature,
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
}: {
  name: string | null;
  phone: string | null;
  email: string | null;
  plan: string | null;
  amount: number | null;
  description?: string | null;
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
      const data = await verifyPayment(response);

      if (data.isOk) {
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
        });

        // clearing session data after successful payment
        deleteCookie("form_completed");
        localStorage.removeItem("user_data");

        alert("Payment successful");
      } else {
        alert("Payment failed");
      }
    },
  };

  const payment = new (window as any).Razorpay(paymentData);
  payment.open();
}

export { purchase };
