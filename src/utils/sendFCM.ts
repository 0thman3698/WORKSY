// utils/sendFCM.ts
import admin from './firebase';

export const sendPushNotification = async (fcmToken: string, payload: any) => {
    try {
        const message = {
            token: fcmToken,
            notification: {
                title: payload.title,
                body: payload.body,
            },
            data: payload.data || {},
        };

        const response = await admin.messaging().send(message);
        console.log('✅ FCM sent:', response);
    } catch (err) {
        console.error('❌ FCM error:', err);
    }
};
