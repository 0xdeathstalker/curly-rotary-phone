import { Resend } from "resend";
import { env } from "@/env";

// -----------------------------
// Types
// -----------------------------
interface PaymentEmailDetails {
  customerName: string;
  customerEmail: string;
  amount: string;
  packageName: string;
  transactionId: string;
  transactionDate: string;
  paymentMode: string;
  formLink: string;
  brandName: string;
}

// -----------------------------
// Main Email Sender
// -----------------------------
export async function sendPaymentSuccessEmail(details: PaymentEmailDetails) {
  try {
    const resend = new Resend(env.RESEND_API_KEY);

    const htmlContent = `
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
              <div class="brand-name">${details.brandName}</div>
              <div class="receipt-label">Receipt</div>
            </div>

            <div class="checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </div>

            <div class="header-title">Thank you for your payment, ${details.customerName}.</div>
            <div class="header-subtitle">Your order has been successfully received.</div>

            <div class="order-summary">
              <div class="total-row"><span>Total</span><span>${details.amount}</span></div>
              <div class="detail-row"><span>Package</span><span>${details.packageName}</span></div>
              <div class="detail-row"><span>Transaction ID</span><span>${details.transactionId}</span></div>
              <div class="detail-row"><span>Date</span><span>${details.transactionDate}</span></div>
              <div class="detail-row"><span>Payment Mode</span><span>${details.paymentMode}</span></div>
            </div>

            <p>To proceed with your company registration, click the button below:</p>

            <a href="${details.formLink}" class="cta-button">Complete the Form</a>

            <p>Our team will review your submission and contact you if more details are needed.</p>

            <p>Thanks,<br><strong>Team ${details.brandName}</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textFallback = `
Payment Successful – ${details.brandName}

Thank you ${details.customerName}!

Amount: ${details.amount}
Package: ${details.packageName}
Transaction ID: ${details.transactionId}
Date: ${details.transactionDate}
Mode: ${details.paymentMode}

Next Step → Complete your registration form:
${details.formLink}

Team ${details.brandName}
    `;

    const result = await resend.emails.send({
      from: `${details.brandName} <onboarding@resend.dev>`,
      to: details.customerEmail,
      subject: "Payment Received Successfully – Next Steps",
      html: htmlContent,
      text: textFallback,
    });

    return { success: true, result };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error };
  }
}

// -----------------------------
// Frontend Trigger
// -----------------------------
export async function sendPaymentConfirmationEmail({
  customerName,
  customerEmail,
  amount,
  packageName,
  transactionId,
  paymentMode,
}: any) {
  await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customerName,
      customerEmail,
      amount,
      packageName,
      transactionId,
      paymentMode,
    }),
  });
}
