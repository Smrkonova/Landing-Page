import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    const name = data.name || 'Unknown';
    const email = data.email || 'Unknown';
    const phone = data.phone || 'Not provided';
    const message = data.message || '';

    const htmlBody = `
<div style='font-family: sans-serif; padding: 20px;'>
    <h2>New Lead from Contact Drawer</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
</div>
`;

    const url = "https://api.zeptomail.in/v1.1/email";
    const token = "Zoho-enczapikey PHtE6r0KQL/o3TEo8BNU5aPtQ8T3PYorr+xmfwREtopEW/BXS01Qoo8vkTCyok98AKFARvfPmo1rtLzK4uKMd2rkNTsaXGqyqK3sx/VYSPOZsbq6x00YuFUddkTeUYLse99i0yLSvNnYNA==";

    const sendZeptoMail = async (postData) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(postData)
      });

      const responseData = await response.json();
      return {
        success: response.ok,
        httpCode: response.status,
        response: responseData
      };
    };

    // 1. Send notification to Design team
    const adminPostData = {
      from: { address: "noreply@smrkonova.com" },
      to: [
        { email_address: { address: "design@smrkonova.com", name: "Design" } }
      ],
      subject: `New Lead from ${name} - Contact Drawer`,
      htmlbody: htmlBody
    };

    const adminResult = await sendZeptoMail(adminPostData);

    if (!adminResult.success) {
      return NextResponse.json({ success: false, error: "Failed to send notification email", details: adminResult }, { status: 500 });
    }

    // 2. Send auto-reply to the user (only if email is valid)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      const userHtmlBody = `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>We've Received Your Enquiry</title>
    </head>
    <body style='margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; -webkit-font-smoothing: antialiased;'>
        <table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: #000000; width: 100%; margin: 0 auto; padding: 40px 20px;'>
            <tr>
                <td align='center'>
                    <table border='0' cellpadding='0' cellspacing='0' width='100%' style='width: 100%; max-width: 600px; background-color: #111111; border: 1px solid #222222; border-radius: 12px; overflow: hidden;'>
                        <!-- Header -->
                        <tr>
                            <td align='center' style='padding: 40px 20px; border-bottom: 1px solid #222222; background-color: #000000;'>
                                <img src='https://www.smrkonova.com/images/white-logo.svg' alt='Smrkonova' width='180' style='display: block; width: 180px; max-width: 100%; height: auto;'>
                            </td>
                        </tr>
                        <!-- Body -->
                        <tr>
                            <td style='padding: 40px; color: #a3a3a3; font-size: 15px; line-height: 1.6;'>
                                <p style='margin-top: 0; color: #ffffff; font-size: 18px; font-weight: 600;'>Hi ${name},</p>
                                <p>Thank you for reaching out to Smrkonova.</p>
                                <p>We're excited to learn more about your idea.</p>
                                <p>If you've contacted us, there's a good chance you're ready to build something extraordinary—and that's exactly what we love helping businesses do.</p>
                                <p>Our team has received your enquiry and will review the details carefully. One of our team members will get back to you as soon as possible to discuss your requirements and the best way forward.</p>
                                <p>Whether you're planning a website, mobile app, custom software, branding, or a complete digital transformation, we're excited to explore the possibilities with you.</p>
                                <p style='margin-bottom: 30px;'>Thank you for considering Smrkonova. We look forward to building something remarkable together.</p>
                                
                                <p style='margin: 0; color: #ffffff; font-weight: 500;'>Best regards,<br>Smrkonova</p>
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td align='center' style='padding: 20px 40px 40px; color: #666666; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;'>
                                &copy; 2026 Smrkonova. All rights reserved.
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;

      const userPostData = {
        from: { address: "noreply@smrkonova.com" },
        to: [
          { email_address: { address: email, name: name } }
        ],
        subject: "We've Received Your Enquiry 🚀",
        htmlbody: userHtmlBody
      };

      // We don't block if auto-reply fails
      await sendZeptoMail(userPostData).catch(e => console.error(e));
    }

    return NextResponse.json({ success: true, message: "Emails processed successfully" }, { status: 200 });

  } catch (error) {
    console.error('ZeptoMail Error:', error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
