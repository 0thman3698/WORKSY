import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { meetingService } from '../services/meeting.service';
import { CreateMeetingSchemaType, UpdateMeetingSchemaType, createMeetingSchema, googleCalendarAuthCallbackSchema, updateMeetingSchema } from '../validators/meeting.validators';
import { ApiError } from '../utils/apiError';
import { z } from 'zod';

export default class MeetingControllers {
  static async getGoogleAuthUrl(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user.id;
      const authUrl = await meetingService.getGoogleAuthUrl(userId);
      return new ApiResponse(res).success({ authUrl }, 'Google Calendar authorization URL generated.');
    } catch (error) {
      next(error);
    }
  }

  static async handleGoogleCalendarCallback(req: Request, res: Response, next: NextFunction) {
    try {
      // Retrieve userId from the state query parameter
      const { code, state } = req.query;

      if (!code) {
        throw ApiError.badRequest('Authorization code not provided.');
      }
      if (!state || typeof state !== 'string') {
        throw ApiError.badRequest('State parameter (userId) is missing or invalid.');
      }

      const userId = state; // Use userId from state parameter

      try {
        googleCalendarAuthCallbackSchema.parse({ code });
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw ApiError.badRequest(`Validation failed: ${error.errors.map(e => e.message).join(', ')}`);
        }
        throw ApiError.badRequest('Invalid callback data.');
      }

      const result = await meetingService.handleGoogleCalendarCallback(code as string, userId);
      // as test y othman 📌 
      // Redirect to a frontend success page or return a response
      // For now(test), let's send a JSON response. In a real app, you'd redirect.
      return new ApiResponse(res).success(result, 'Google Calendar linked successfully');
    } catch (error) {
      next(error);
    }
  }

  static async scheduleMeeting(req: Request, res: Response, next: NextFunction) {
    try {
      const { channelId } = req.params;
      const organizerId = req.user.id;
      const meetingData: CreateMeetingSchemaType = req.body;

      createMeetingSchema.parse(meetingData);

      const meeting = await meetingService.scheduleMeeting(channelId, organizerId, meetingData);
      return new ApiResponse(res).created(meeting, 'Meeting scheduled successfully');
    } catch (error) {
      next(error);
    }
  }

  static async getMeetings(req: Request, res: Response, next: NextFunction) {
    try {
      const { channelId } = req.params;
      const userId = req.user.id;
      const includePast = req.query.includePast === 'true'; // Allow fetching past meetings

      const meetings = await meetingService.getMeetings(channelId, userId, includePast);
      return new ApiResponse(res).success(meetings, 'Meetings fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  static async getMeetingById(req: Request, res: Response, next: NextFunction) {
    try {
      const { channelId, meetingId } = req.params;
      const userId = req.user.id;

      const meeting = await meetingService.getMeetingById(meetingId, channelId, userId);
      return new ApiResponse(res).success(meeting, 'Meeting fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  static async updateMeeting(req: Request, res: Response, next: NextFunction) {
    try {
      const { channelId, meetingId } = req.params;
      const userId = req.user.id;
      const updateData: UpdateMeetingSchemaType = req.body;

      updateMeetingSchema.parse(updateData);

      const updatedMeeting = await meetingService.updateMeeting(meetingId, channelId, userId, updateData);
      return new ApiResponse(res).success(updatedMeeting, 'Meeting updated successfully');
    } catch (error) {
      next(error);
    }
  }

  static async deleteMeeting(req: Request, res: Response, next: NextFunction) {
    try {
      const { channelId, meetingId } = req.params;
      const userId = req.user.id;

      const deletedMeeting = await meetingService.deleteMeeting(meetingId, channelId, userId);
      return new ApiResponse(res).success(deletedMeeting, 'Meeting deleted successfully');
    } catch (error) {
      next(error);
    }
  }
}
