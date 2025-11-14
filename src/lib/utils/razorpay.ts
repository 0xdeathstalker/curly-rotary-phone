import { env } from "@/env";
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
  phone,
  email,
  plan,
  description,
  amount,
}: {
  phone: string;
  email: string;
  plan: string;
  description?: string;
  amount: number;
}) {
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
          payment_amount: order.amount,
          payment_id: response.razorpay_payment_id,
          payment_status: "completed",
        });
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
