export const createResetPasswordTemplate = (resetPin: string) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #333; text-align: center;">Reset your password</h2>
    <p style="color: #666; font-size: 16px;">You requested a password reset. Use the PIN code below to reset your password:</p>
    
    <div style="text-align: center; margin: 30px 0;">
      <div style="display: inline-block; padding: 20px 30px; background-color: #f8f9fa; border: 2px dashed #4f46e5; border-radius: 10px;">
        <span style="font-size: 32px; font-weight: bold; color: #4f46e5; letter-spacing: 8px; font-family: 'Courier New', monospace;">
          ${resetPin}
        </span>
      </div>
    </div>
    
    <p style="color: #666; font-size: 14px; text-align: center;">
      This PIN will expire in 15 minutes for security reasons.
    </p>
    
    <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px; padding: 15px; margin: 20px 0;">
      <p style="color: #856404; margin: 0; font-size: 14px;">
        <strong>Security tip:</strong> If you didn't request this password reset, please ignore this email and consider changing your password if you suspect unauthorized access.
      </p>
    </div>
    
    <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
      This is an automated message from Worksy. Please do not reply to this email.
    </p>
  </div>
`;
