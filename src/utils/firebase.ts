// utils/firebase.ts
import admin from 'firebase-admin';
import serviceAccount from '../config/firebase/firebase-service-account.json'; // من Firebase Console

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;
