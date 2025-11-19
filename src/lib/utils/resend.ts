import { Resend } from "resend";
import { env } from "@/env";

type EmailData = {
  to: string;
  name: string;
  plan: string;
  amount: number;
  paymentId: string;
  orderId: string;
  brandName: string;
  paymentDate: string;
  formLink: string;
  // paymentMode: string
};

function getHTMLContent(data: EmailData) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; }
    .email-container { max-width: 600px; margin: auto; background: white; border: 1px solid #e0e0e0; }
    .brand-name { font-size: 24px; font-weight: 600; color: #000; }
    .receipt-label { text-align: right; font-size: 14px; color: #666; }
    .checkmark { width: 60px; height: 60px; background-color: #5eb39b; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 20px auto; }
    .checkmark svg { width: 30px; height: 30px; fill: white; }
    .header-title { text-align: center; font-size: 18px; margin-bottom: 5px; }
    .header-subtitle { text-align: center; font-size: 16px; color: #555; }
    .content { padding: 30px; }
    .order-summary { border-top: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0; padding: 20px 0; margin: 20px 0; }
    .total-row { display: flex; justify-content: space-between; font-size: 18px; font-weight: 600; }
    .detail-row { display: flex; justify-content: space-between; margin: 8px 0; font-size: 14px; }
    .cta-button { display: block; background-color: #f5b042; padding: 15px; border-radius: 8px; color: black; font-weight: 600; text-align: center; text-decoration: none; margin: 20px 0; }
    @media (max-width: 480px) {
      .content { padding: 15px; }
      .total-row, .detail-row { flex-direction: column; text-align: left; gap: 4px; }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="content">

      <div style="display:flex; justify-content:space-between; margin-bottom:30px;">
        <div class="brand-name">${data.brandName}</div>
        <div class="receipt-label">Receipt</div>
      </div>

      <div class="checkmark">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
      </div>

      <div class="header-title">Thank you for your payment, ${data.name}.</div>
      <div class="header-subtitle">Your order has been successfully received.</div>

      <div class="order-summary">
        <div class="total-row"><span>Total</span><span>${data.amount}</span></div>
        <div class="detail-row"><span>Package</span><span>${data.plan}</span></div>
        <div class="detail-row"><span>Transaction ID</span><span>${data.paymentId}</span></div>
        <div class="detail-row"><span>Date</span><span>${data.paymentDate}</span></div>
      </div>

      <p>To proceed with your company registration, click the button below:</p>

      <a href="${data.formLink}" class="cta-button">Complete the Form</a>

      <p>Our team will review your submission and contact you if more details are needed.</p>

      <p>Thanks,<br><strong>Team ${data.brandName}</strong></p>
    </div>
  </div>
</body>
</html>
`;
}

function getTextFallback(data: EmailData) {
  return `
    Payment Successful – ${data.brandName}

    Thank you ${data.name}!

    Amount: ${data.amount}
    Package: ${data.plan}
    Transaction ID: ${data.paymentId}
    Date: ${data.paymentDate}

    Next Step → Complete your registration form:
    ${data.formLink}

    Team ${data.brandName}
  `;
}

async function sendEmail(data: EmailData) {
  try {
    const resend = new Resend(env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: `${data.brandName} <onboarding@resend.dev>`, // TODO: replace with company email
      to: data.to,
      subject: "Payment Received Successfully – Next Steps",
      html: getHTMLContent(data),
      text: getTextFallback(data),
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
  paymentDate,
}: {
  email: string;
  name: string;
  plan: string;
  amount: number;
  paymentId: string;
  orderId: string;
  paymentDate: string;
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
      paymentDate,
    }),
  });
}

export { sendPaymentConfirmationEmail, sendEmail };
