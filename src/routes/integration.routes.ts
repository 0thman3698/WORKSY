import { Router } from 'express';
import MeetingControllers from '../controllers/meeting.controller';
import { protect } from '../middlewares/protect';
import { asyncHandler } from '../middlewares/asyncHandler';


const router = Router();

router.get('/google-calendar/auth-url', protect, asyncHandler(MeetingControllers.getGoogleAuthUrl));
router.get('/google-calendar/callback', asyncHandler(MeetingControllers.handleGoogleCalendarCallback));

export default router;