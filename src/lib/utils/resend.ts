import { Resend } from "resend";
import { env } from "@/env";

async function sendEmail(data: {
  to: string;
  name: string;
  plan: string;
  amount: number;
  paymentId: string;
  orderId: string;
}) {
  try {
    const resend = new Resend(env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // TODO: replace with proper email before production `noreply@domain.com`
      to: data.to,
      subject: "Payment Confirmation - PVT LTD Registration",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #4CAF50; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background: #f9f9f9; }
              .details { background: white; padding: 15px; margin: 20px 0; border-radius: 5px; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✓ Payment Successful!</h1>
              </div>
              <div class="content">
                <p>Hi ${data.name},</p>
                <p>Thank you for your payment. Your order has been confirmed successfully.</p>
                
                <div class="details">
                  <h3>Order Details:</h3>
                  <p><strong>Plan:</strong> ${data.plan}</p>
                  <p><strong>Amount:</strong> ₹${data.amount.toLocaleString()}</p>
                  <p><strong>Payment ID:</strong> ${data.paymentId}</p>
                  <p><strong>Order ID:</strong> ${data.orderId}</p>
                </div>

                <p>Our team will contact you within 24-48 hours to begin the registration process.</p>
                
                <p>If you have any questions, feel free to reach out to us.</p>
              </div>
              <div class="footer">
                <p>© 2025 Your Company Name. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    console.log("Email sent successfully:", result);
    return { success: true, result };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
}

async function sendPaymentConfirmationEmail({
  name,
  email,
  plan,
  amount,
  paymentId,
  orderId,
}: {
  email: string;
  name: string;
  plan: string;
  amount: number;
  paymentId: string;
  orderId: string;
}) {
  await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: email,
      name,
      plan,
      amount,
      paymentId,
      orderId,
    }),
  });
}

export { sendPaymentConfirmationEmail, sendEmail };
