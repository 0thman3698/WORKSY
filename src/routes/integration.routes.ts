import { Router } from 'express';
import MeetingControllers from '../controllers/meeting.controller';
import { protect } from '../middlewares/protect'; 

const router = Router();

router.get('/google-calendar/auth-url', protect, MeetingControllers.getGoogleAuthUrl);
router.get('/google-calendar/callback', MeetingControllers.handleGoogleCalendarCallback);

export default router;
