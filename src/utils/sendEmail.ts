import SMTPTransport from 'nodemailer/lib/smtp-transport';
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async ({ to, subject, html }: EmailOptions) => {
  // Check for undefined environment variables before creating transporter
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error("Missing SMTP environment variables. Email sending aborted.");
    // In a production app, you might throw a specific error or use a default error handler
    throw new Error("Email service configuration incomplete.");
  }

  // Nodemailer options for TLS on port 587 (most common for modern SMTP)
  const transporterOptions: SMTPTransport.Options = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // For port 587, 'secure' is false. Use 'true' for port 465 (SSL/TLS).
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    // requireTLS: true, // Often needed explicitly for port 587 (STARTTLS)/
  };

  // Add requireTLS based on typical port 587 usage
  if (transporterOptions.port === 587) {
    (transporterOptions as any).requireTLS = true;
  }

  const transporter = nodemailer.createTransport(transporterOptions);

  try {
    await transporter.sendMail({
      from: `"Worksy" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
    console.log(`Email sent successfully to ${to} for subject: "${subject}"`);
  } catch (error) {
    console.error(`Failed to send email to ${to} for subject: "${subject}". Error:`, error);
    throw new Error("Failed to send email.");
  }
};

export { sendEmail };
