import { sendEmail } from '../utils/sendEmail';

export const sendInviteEmail = async (
    email: string,
    inviterName: string,
    workspaceName: string,
    token: string
) => {
    const inviteUrl = `${process.env.CLIENT_URL}/invite/accept?token=${token}`; //need to edit

    const mailOptions = {
        to: email,
        subject: `You're invited to join ${workspaceName} on Worksy!`,
        html: `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9;">
        <h2>Hello there,</h2>
        <p><strong>${inviterName}</strong> has invited you to join the workspace <strong>${workspaceName}</strong> on <strong>Worksy</strong>.</p>
        <p>Click the button below to accept the invitation and get started:</p>
        <a href="${inviteUrl}" 
           style="display: inline-block; padding: 10px 20px; margin-top: 10px;
                  background-color: #4A90E2; color: white; text-decoration: none;
                  border-radius: 5px;">
          Accept Invitation
        </a>
        <p>If you weren’t expecting this, you can safely ignore this email.</p>
        <p>Cheers,<br>The Worksy Team</p>
      </div>
    `,
    };

    await sendEmail({ ...mailOptions });
};
