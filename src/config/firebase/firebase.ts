import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';
import serviceAccount from './firebase-service-account.json';
import { ServiceAccount } from 'firebase-admin';

if (!getApps().length) {
    initializeApp({
        credential: cert(serviceAccount as ServiceAccount),
    });
}

export const messaging = getMessaging();
