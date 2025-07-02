import { Router } from 'express';
import MeetingControllers from '../controllers/meeting.controller';
import { validate } from '../middlewares/validation.middleware';
import { createMeetingSchema, updateMeetingSchema } from '../validators/meeting.validators';
import { asyncHandler } from '../middlewares/asyncHandler';
import { checkChannelRole } from '../middlewares/authorization.middleware';
import { ChannelRole } from '../generated/prisma';

const router = Router({ mergeParams: true });

router.post(
    '/',
    checkChannelRole(ChannelRole.MEMBER),
    validate(createMeetingSchema),
    asyncHandler(MeetingControllers.scheduleMeeting)
);

router.get(
    '/',
    checkChannelRole(ChannelRole.MEMBER),
    asyncHandler(MeetingControllers.getMeetings)
);

router.get(
    '/:meetingId',
    checkChannelRole(ChannelRole.MEMBER),
    asyncHandler(MeetingControllers.getMeetingById)
);

router.put(
    '/:meetingId',
    checkChannelRole(ChannelRole.MEMBER),
    validate(updateMeetingSchema),
    asyncHandler(MeetingControllers.updateMeeting)
);

router.delete(
    '/:meetingId',
    checkChannelRole(ChannelRole.ADMIN),
    asyncHandler(MeetingControllers.deleteMeeting)
);

export default router;