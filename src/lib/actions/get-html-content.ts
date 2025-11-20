import type { EmailData } from "@/lib/utils/resend";

function getHTMLContent(data: EmailData) {
  return `
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
      
        <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: white; border: 1px solid #e0e0e0; max-width: 600px;">
                  <tr>
                    <td style="padding: 30px;">

                      <!-- Logo -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px;">
                        <tr>
                          <td>
                            <img src="cid:logo" alt="${data.brandName}" style="height: 40px; display: block;" />
                          </td>
                        </tr>
                      </table>

                      <!-- Check Circle -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0;">
                        <tr>
                          <td align="center">
                            <div style="width: 80px; height: 80px; background-color: #5eb39b; border-radius: 50%; display: inline-block; text-align: center; line-height: 80px; font-size: 40px; color: white;">
                              ✓
                            </div>
                          </td>
                        </tr>
                      </table>

                      <!-- Header Text -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td align="center" style="font-size: 18px; padding-bottom: 5px;">
                            Thank you for your payment, ${data.name}.
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="font-size: 16px; color: #555; padding-bottom: 20px;">
                            Your order has been successfully received.
                          </td>
                        </tr>
                      </table>

                      <!-- Order Summary -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0; margin: 20px 0; padding: 20px 0;">
                        <tr>
                          <td style="font-size: 18px; font-weight: 600; padding: 8px 0;">Total</td>
                          <td align="right" style="font-size: 18px; font-weight: 600; padding: 8px 0;">₹${data.amount}</td>
                        </tr>
                        <tr>
                          <td style="font-size: 14px; color: #666; padding: 8px 0;">Package</td>
                          <td align="right" style="font-size: 14px; font-weight: 500; padding: 8px 0;">${data.plan}</td>
                        </tr>
                        <tr>
                          <td style="font-size: 14px; color: #666; padding: 8px 0;">Transaction ID</td>
                          <td align="right" style="font-size: 14px; font-weight: 500; padding: 8px 0;">${data.paymentId}</td>
                        </tr>
                        <tr>
                          <td style="font-size: 14px; color: #666; padding: 8px 0;">Date</td>
                          <td align="right" style="font-size: 14px; font-weight: 500; padding: 8px 0;">${data.paymentDate}</td>
                        </tr>
                      </table>

                      <!-- Body Text -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="padding: 10px 0; font-size: 14px; line-height: 1.5;">
                            To proceed with your company registration, click the button below:
                          </td>
                        </tr>
                      </table>

                      <!-- CTA Button -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 20px 0;">
                        <tr>
                          <td>
                            <a href="${data.formLink}" style="display: block; background-color: #f5b042; padding: 15px; border-radius: 8px; color: black; font-weight: 600; text-align: center; text-decoration: none; font-size: 16px;">Complete Form</a>
                          </td>
                        </tr>
                      </table>

                      <!-- Footer Text -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="padding: 10px 0 40px 0; font-size: 14px; line-height: 1.5;">
                            Our team will review your submission and contact you if more details are needed.
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size: 14px; line-height: 1.6; padding-top: 20px;">
                            Thanks,<br><strong>Team ${data.brandName}</strong>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
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

export { getHTMLContent, getTextFallback };
