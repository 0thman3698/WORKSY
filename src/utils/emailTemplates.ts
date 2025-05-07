export const createResetPasswordTemplate = (resetURL: string) => `
  <div style="font-family: Arial, sans-serif;">
    <h2>Reset your password</h2>
    <p>You requested a password reset. Click the button below to reset it:</p>
    <a href="${resetURL}" style="padding: 10px 20px; background-color: #4f46e5; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
    <p>If you didn't request this, please ignore this email.</p>
  </div>
`;
