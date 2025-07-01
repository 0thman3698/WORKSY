import { sendEmail } from "../utils/sendEmail";

export const sendEmailVerificationEmail = async (email: string, name: string, token: string) => {
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

  const mailOptions = {
    to: email,
    subject: 'Verify Your Email Address',
    html: `
      <div>
        <h2>Hello ${name},</h2>
        <p>Thank you for registering with us. Please verify your email address by clicking the link below:</p>
        <a href="${verificationUrl}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Verify Email</a>
        <p>If you didn't create an account, you can safely ignore this email.</p>
        <p>Best regards,<br>Your App Team</p>
      </div>
    `,
  };

  await sendEmail({...mailOptions})
};