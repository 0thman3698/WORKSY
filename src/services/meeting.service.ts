import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { CreateMeetingSchemaType, UpdateMeetingSchemaType } from '../validators/meeting.validators';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();


const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID2,
    process.env.GOOGLE_CLIENT_SECRET2,
    process.env.GOOGLE_REDIRECT_URI2
);

export class MeetingService {
    async getGoogleAuthUrl(userId: string): Promise<string> {
        const scopes = [
            'https://www.googleapis.com/auth/calendar.events',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
        ];

        const authUrl = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes,
            prompt: 'consent',
            state: userId
        });
        return authUrl;
    }

    async handleGoogleCalendarCallback(code: string, userId: string): Promise<any> {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        const plus = google.people({ version: 'v1', auth: oauth2Client });
        const profile = await plus.people.get({
            resourceName: 'people/me',
            personFields: 'emailAddresses,names',
        });
        const userEmail = profile.data.emailAddresses?.[0]?.value;

        if (!userEmail) {
            throw ApiError.badRequest('Could not retrieve user email from Google profile.');
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                googleAccessToken: tokens.access_token,
                googleRefreshToken: tokens.refresh_token,
            },
        });

        return { message: 'Google Calendar linked successfully!', user: updatedUser };
    }

    async refreshGoogleAccessToken(userId: string): Promise<string> {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { googleRefreshToken: true }
        });

        if (!user?.googleRefreshToken) {
            throw ApiError.unauthorized('Google Calendar not linked or refresh token missing. Please link your Google Calendar.');
        }

        oauth2Client.setCredentials({ refresh_token: user.googleRefreshToken });
        const { credentials } = await oauth2Client.refreshAccessToken();

        await prisma.user.update({
            where: { id: userId },
            data: { googleAccessToken: credentials.access_token }
        });

        if (!credentials.access_token) {
            throw ApiError.internal('Failed to refresh Google access token.');
        }
        return credentials.access_token;
    }

    async getGoogleCalendarClient(userId: string) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { googleAccessToken: true, googleRefreshToken: true }
        });

        if (!user?.googleAccessToken) {
            if (user?.googleRefreshToken) {
                const newAccessToken = await this.refreshGoogleAccessToken(userId);
                oauth2Client.setCredentials({ access_token: newAccessToken, refresh_token: user.googleRefreshToken });
            } else {
                throw ApiError.unauthorized('Google Calendar not linked. Please link your Google Calendar first.');
            }
        } else {
            oauth2Client.setCredentials({ access_token: user.googleAccessToken, refresh_token: user.googleRefreshToken });
        }

        return google.calendar({ version: 'v3', auth: oauth2Client });
    }

    async scheduleMeeting(channelId: string, organizerId: string, meetingData: CreateMeetingSchemaType) {
        const channel = await prisma.channel.findUnique({
            where: { id: channelId, deletedAt: null },
        });
        if (!channel) {
            throw ApiError.notFound('Channel not found or is inactive.');
        }

        const organizer = await prisma.user.findUnique({
            where: { id: organizerId, deletedAt: null },
            select: { id: true, email: true, name: true, googleAccessToken: true, googleRefreshToken: true, googleCalendarId: true }
        });
        if (!organizer) {
            throw ApiError.notFound('Organizer not found or is inactive.');
        }

        const memberInChannel = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: { userId: organizerId, channelId: channelId },
                deletedAt: null
            }
        });
        if (!memberInChannel) {
            throw ApiError.forbidden('You must be a member of this channel to schedule a meeting.');
        }

        const newMeeting = await prisma.meeting.create({
            data: {
                title: meetingData.title,
                description: meetingData.description,
                startTime: meetingData.startTime,
                endTime: meetingData.endTime,
                location: meetingData.location,
                channelId: channelId,
                organizerId: organizerId,
            },
        });

        // Integrate with Google Calendar (if user has linked it)
        if (organizer.googleAccessToken) {
            try {
                const calendar = await this.getGoogleCalendarClient(organizerId);

                const channelMembers = await prisma.userOnChannel.findMany({
                    where: {
                        channelId: channelId,
                        deletedAt: null,
                        user: {
                            deletedAt: null
                        }
                    },
                    include: {
                        user: {
                            select: { email: true }
                        }
                    }
                });

                const attendees = channelMembers
                    .map(member => member.user?.email)
                    .filter((email): email is string => email !== null && email !== undefined)
                    .map(email => ({ email: email }));

                const event = {
                    summary: meetingData.title,
                    description: `Scheduled from WorkSy channel "${channel.name}". ${meetingData.description || ''}`,
                    start: {
                        dateTime: meetingData.startTime.toISOString(),
                        timeZone: 'UTC',
                    },
                    end: {
                        dateTime: meetingData.endTime.toISOString(),
                        timeZone: 'UTC',
                    },
                    location: meetingData.location,
                    attendees: attendees,
                    conferenceData: {
                        createRequest: {
                            requestId: `worksy-${newMeeting.id}`,
                            conferenceSolutionKey: {
                                type: 'hangoutsMeet'
                            }
                        }
                    }
                };

                const response = await calendar.events.insert({
                    calendarId: organizer.googleCalendarId || 'primary',
                    requestBody: event,
                    conferenceDataVersion: 1,
                    sendUpdates: 'all'
                });

                await prisma.meeting.update({
                    where: { id: newMeeting.id },
                    data: {
                        googleCalendarEventId: response.data.id,
                        googleCalendarHtmlLink: response.data.htmlLink,
                        location: response.data.hangoutLink || meetingData.location
                    },
                });

                return { ...newMeeting, googleCalendarEventId: response.data.id, googleCalendarHtmlLink: response.data.htmlLink, location: response.data.hangoutLink || meetingData.location };

            } catch (error: any) {
                console.error('Failed to create Google Calendar event:', error.message, error.response?.data?.error);
                return newMeeting;
            }
        }

        return newMeeting;
    }

    async getMeetings(channelId: string, userId: string, includePast: boolean = false) {
        const channel = await prisma.channel.findUnique({
            where: { id: channelId, deletedAt: null },
        });
        if (!channel) {
            throw ApiError.notFound('Channel not found or is inactive.');
        }

        const member = await prisma.userOnChannel.findUnique({
            where: {
                userId_channelId: { userId, channelId },
                deletedAt: null,
            },
        });
        if (!member) {
            throw ApiError.forbidden('You are not an active member of this channel.');
        }

        const whereClause: any = {
            channelId: channelId,
            deletedAt: null,
        };

        if (!includePast) {
            whereClause.endTime = {
                gte: new Date(),
            };
        }

        const meetings = await prisma.meeting.findMany({
            where: whereClause,
            orderBy: { startTime: 'asc' },
            include: {
                organizer: {
                    select: { id: true, name: true, email: true }
                },
                channel: {
                    select: { id: true, name: true }
                }
            }
        });
        return meetings;
    }

    async getMeetingById(meetingId: string, channelId: string, userId: string) {
        await this.getMeetings(channelId, userId, true);

        const meeting = await prisma.meeting.findUnique({
            where: {
                id: meetingId,
                channelId: channelId,
                deletedAt: null,
            },
            include: {
                organizer: {
                    select: { id: true, name: true, email: true, googleCalendarId: true }
                },
                channel: {
                    select: { id: true, name: true }
                }
            }
        });

        if (!meeting) {
            throw ApiError.notFound('Meeting not found or is inactive in this channel.');
        }
        return meeting;
    }

    async updateMeeting(meetingId: string, channelId: string, userId: string, updateData: UpdateMeetingSchemaType) {
        const existingMeeting = await this.getMeetingById(meetingId, channelId, userId);

        const userRoleInChannel = await prisma.userOnChannel.findUnique({
            where: { userId_channelId: { userId, channelId } },
            select: { role: true }
        });

        if (existingMeeting.organizerId !== userId && userRoleInChannel?.role !== 'ADMIN' && userRoleInChannel?.role !== 'OWNER') {
            throw ApiError.forbidden('You do not have permission to update this meeting.');
        }

        const updatedMeeting = await prisma.meeting.update({
            where: { id: meetingId },
            data: updateData,
        });

        if (updatedMeeting.googleCalendarEventId && existingMeeting.organizerId === userId) {
            try {
                const calendar = await this.getGoogleCalendarClient(userId);
                const eventUpdates: any = {
                    summary: updateData.title,
                    description: updateData.description,
                    start: updateData.startTime ? { dateTime: updateData.startTime.toISOString(), timeZone: 'UTC' } : undefined,
                    end: updateData.endTime ? { dateTime: updateData.endTime.toISOString(), timeZone: 'UTC' } : undefined,
                    location: updateData.location,
                };

                await calendar.events.patch({
                    calendarId: existingMeeting.organizer.googleCalendarId || 'primary',
                    eventId: updatedMeeting.googleCalendarEventId,
                    requestBody: eventUpdates,
                    sendUpdates: 'all'
                });
            } catch (error: any) {
                console.error('Failed to update Google Calendar event:', error.message, error.response?.data?.error);
            }
        }

        return updatedMeeting;
    }

    async deleteMeeting(meetingId: string, channelId: string, userId: string) {
        const existingMeeting = await this.getMeetingById(meetingId, channelId, userId);

        const userRoleInChannel = await prisma.userOnChannel.findUnique({
            where: { userId_channelId: { userId, channelId } },
            select: { role: true }
        });

        if (existingMeeting.organizerId !== userId && userRoleInChannel?.role !== 'ADMIN' && userRoleInChannel?.role !== 'OWNER') {
            throw ApiError.forbidden('You do not have permission to delete this meeting.');
        }

        const deletedMeeting = await prisma.meeting.update({
            where: { id: meetingId },
            data: { deletedAt: new Date() },
        });

        if (deletedMeeting.googleCalendarEventId && existingMeeting.organizerId === userId) {
            try {
                const calendar = await this.getGoogleCalendarClient(userId);
                await calendar.events.delete({
                    calendarId: existingMeeting.organizer.googleCalendarId || 'primary',
                    eventId: deletedMeeting.googleCalendarEventId,
                    sendUpdates: 'all'
                });
            } catch (error: any) {
                console.error('Failed to delete Google Calendar event:', error.message, error.response?.data?.error);
            }
        }

        return deletedMeeting;
    }
}

export const meetingService = new MeetingService();