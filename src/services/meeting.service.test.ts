import { meetingService } from './meeting.service';
import prisma from '../config/db';
import { ApiError } from '../utils/apiError';
import { google } from 'googleapis';

jest.mock('../config/db');

jest.mock('googleapis', () => {
    const eventsMock = {
        insert: jest.fn().mockResolvedValue({ data: { id: 'googleEvent123', htmlLink: 'http://calendar' } }),
        patch: jest.fn().mockResolvedValue({}),
        delete: jest.fn().mockResolvedValue({}),
    };

    return {
        google: {
            auth: {
                OAuth2: jest.fn().mockImplementation(() => ({
                    generateAuthUrl: jest.fn().mockReturnValue('https://fake-auth-url'),
                    getToken: jest.fn().mockResolvedValue({ tokens: { access_token: 'access', refresh_token: 'refresh' } }),
                    setCredentials: jest.fn(),
                    refreshAccessToken: jest.fn().mockResolvedValue({ credentials: { access_token: 'new-access' } }),
                })),
            },
            people: jest.fn().mockReturnValue({
                people: {
                    get: jest.fn().mockResolvedValue({
                        data: { emailAddresses: [{ value: 'test@gmail.com' }] },
                    }),
                },
            }),
            calendar: jest.fn().mockReturnValue({ events: eventsMock }),
        },
    };
});

describe('MeetingService', () => {
    const userId = 'user1';
    const channelId = 'channel1';

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getGoogleAuthUrl', () => {
        it('should return auth url', async () => {
            const url = await meetingService.getGoogleAuthUrl(userId);
            expect(url).toContain('https://fake-auth-url');
        });
    });

    describe('handleGoogleCalendarCallback', () => {
        it('should update user with tokens', async () => {
            (prisma.user.update as jest.Mock).mockResolvedValue({ id: userId });

            const res = await meetingService.handleGoogleCalendarCallback('authCode', userId);

            expect(prisma.user.update).toHaveBeenCalledWith({
                where: { id: userId },
                data: { googleAccessToken: 'access', googleRefreshToken: 'refresh' },
            });
            expect(res).toEqual({ message: 'Google Calendar linked successfully!', user: { id: userId } });
        });

        it('should throw if email not found', async () => {
            // Override people.get
            (google.people as any).mockReturnValue({
                people: { get: jest.fn().mockResolvedValue({ data: {} }) },
            });

            await expect(meetingService.handleGoogleCalendarCallback('authCode', userId))
                .rejects
                .toThrow(ApiError.badRequest('Could not retrieve user email from Google profile.'));
        });
    });

    describe('refreshGoogleAccessToken', () => {
        it('should refresh token and update user', async () => {
            (prisma.user.findUnique as jest.Mock).mockResolvedValue({ googleRefreshToken: 'refresh' });
            (prisma.user.update as jest.Mock).mockResolvedValue({});

            const token = await meetingService.refreshGoogleAccessToken(userId);
            expect(token).toBe('new-access');
            expect(prisma.user.update).toHaveBeenCalled();
        });

        it('should throw if no refresh token', async () => {
            (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
            await expect(meetingService.refreshGoogleAccessToken(userId))
                .rejects.toThrow(ApiError.unauthorized('Google Calendar not linked or refresh token missing. Please link your Google Calendar.'));
        });
    });

    describe('scheduleMeeting', () => {
        it('should create meeting and sync to google calendar', async () => {
            (prisma.channel.findUnique as jest.Mock).mockResolvedValue({ id: channelId, name: 'TestChannel' });
            (prisma.user.findUnique as jest.Mock).mockResolvedValue({
                id: userId,
                email: 'test@gmail.com',
                googleAccessToken: 'access',
                googleRefreshToken: 'refresh',
                googleCalendarId: 'primary',
            });
            (prisma.userOnChannel.findUnique as jest.Mock).mockResolvedValue({ userId, channelId });
            (prisma.meeting.create as jest.Mock).mockResolvedValue({ id: 'meeting1' });
            (prisma.userOnChannel.findMany as jest.Mock).mockResolvedValue([{ user: { email: 'member@test.com' } }]);
            (prisma.meeting.update as jest.Mock).mockResolvedValue({ id: 'meeting1', googleCalendarEventId: 'googleEvent123' });

            const meeting = await meetingService.scheduleMeeting(channelId, userId, {
                title: 'Team Meeting',
                description: 'Discuss updates',
                startTime: new Date(),
                endTime: new Date(),
                location: 'Zoom',
            });

            expect(prisma.meeting.create).toHaveBeenCalled();
            expect(prisma.meeting.update).toHaveBeenCalled();
            expect(meeting.googleCalendarEventId).toBe('googleEvent123');
        });
    });
});
