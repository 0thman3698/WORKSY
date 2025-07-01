// Add this function to your email templates file

export const createLoginOtpTemplate = (otp: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login OTP - Worksy</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #007bff; color: white; padding: 20px; text-align: center; }
            .content { padding: 30px; background: #f8f9fa; }
            .otp-box { 
                background: white; 
                border: 2px solid #007bff; 
                padding: 20px; 
                text-align: center; 
                margin: 20px 0;
                border-radius: 8px;
            }
            .otp-code { 
                font-size: 32px; 
                font-weight: bold; 
                color: #007bff; 
                letter-spacing: 4px;
                margin: 10px 0;
            }
            .warning { 
                background: #fff3cd; 
                border: 1px solid #ffeaa7; 
                padding: 15px; 
                border-radius: 4px; 
                margin: 20px 0;
                color: #856404;
            }
            .footer { 
                text-align: center; 
                padding: 20px; 
                color: #666; 
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Worksy Login Verification</h1>
            </div>
            
            <div class="content">
                <h2>Your Login OTP</h2>
                <p>Hello,</p>
                <p>You've requested to log in to your Worksy account. Please use the following OTP to complete your login:</p>
                
                <div class="otp-box">
                    <div class="otp-code">${otp}</div>
                    <p><strong>This OTP will expire in 5 minutes</strong></p>
                </div>
                
                <div class="warning">
                    <strong>Security Notice:</strong>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                        <li>Never share this OTP with anyone</li>
                        <li>Worksy will never ask for your OTP via phone or email</li>
                        <li>If you didn't request this login, please ignore this email</li>
                    </ul>
                </div>
                
                <p>If you're having trouble logging in, please contact our support team.</p>
                
                <p>Best regards,<br>The Worksy Team</p>
            </div>
            
            <div class="footer">
                <p>This is an automated email. Please do not reply to this message.</p>
                <p>&copy; 2024 Worksy. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};