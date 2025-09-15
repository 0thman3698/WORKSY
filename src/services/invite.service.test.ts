import prisma from "../config/db";
import { inviteService } from "./invite.service";
import { sendInviteEmail } from "../constants/sendInviteEmail";
import { WorkspaceRole } from "@prisma/client";

jest.mock("../config/db");
jest.mock("../constants/sendInviteEmail", () => ({
    sendInviteEmail: jest.fn(),
}));
jest.mock("uuid", () => ({
    v4: jest.fn(() => "mocked-token"),
}));

describe("InviteService", () => {
    const workspaceId = "ws-1";
    const inviteData = { email: "test@example.com", role: WorkspaceRole.MEMBER };
    const invitedById = "user-123";

    beforeEach(() => {
        jest.clearAllMocks();
    });

    ////// createInvite ///////
    describe("createInvite", () => {
        it("should throw if invite already exists", async () => {
            (prisma.invite.findFirst as jest.Mock).mockResolvedValue({ id: "123" });

            await expect(
                inviteService.createInvite(inviteData, workspaceId, invitedById)
            ).rejects.toThrow(
                "An active invite for this email already exists for this workspace."
            );
        });

        it("should throw if inviter not found", async () => {
            (prisma.invite.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                inviteService.createInvite(inviteData, workspaceId, invitedById)
            ).rejects.toThrow("Inviter not found");
        });

        it("should throw if workspace not found", async () => {
            (prisma.invite.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.user.findUnique as jest.Mock).mockResolvedValueOnce(null); // user by email
            (prisma.user.findUnique as jest.Mock).mockResolvedValueOnce({
                name: "Owner",
            }); // inviter
            (prisma.workspace.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(
                inviteService.createInvite(inviteData, workspaceId, invitedById)
            ).rejects.toThrow("Workspace not found");
        });

        it("should create invite and send email", async () => {
            (prisma.invite.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.user.findUnique as jest.Mock).mockResolvedValueOnce(null); // user by email → null
            (prisma.user.findUnique as jest.Mock).mockResolvedValueOnce({
                name: "Owner",
            }); // inviter
            (prisma.workspace.findUnique as jest.Mock).mockResolvedValue({
                name: "My WS",
            });

            const createdInvite = {
                id: "invite-1",
                email: inviteData.email,
                workspaceId,
                token: "mocked-token",
                role: "MEMBER",
                status: "PENDING",
            };
            (prisma.invite.create as jest.Mock).mockResolvedValue(createdInvite);

            const result = await inviteService.createInvite(
                inviteData,
                workspaceId,
                invitedById
            );

            expect(result).toEqual(createdInvite);
            expect(prisma.invite.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    data: expect.objectContaining({
                        email: inviteData.email,
                        workspaceId,
                        token: "mocked-token",
                    }),
                })
            );
            expect(sendInviteEmail).toHaveBeenCalledWith(
                inviteData.email,
                "Owner",
                "My WS",
                "mocked-token"
            );
        });
    });

    ////// acceptInvite ///////
    describe("acceptInvite", () => {
        const token = "invite-token";
        const userId = "user-123";

        it("should throw if invite not found", async () => {
            (prisma.invite.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(inviteService.acceptInvite(token, userId)).rejects.toThrow(
                "Invite not found or no longer active."
            );
        });

        it("should expire and throw if invite status not PENDING", async () => {
            const expiredInvite = {
                id: "i1",
                token,
                status: "ACCEPTED",
                expiresAt: new Date(Date.now() - 1000),
                deletedAt: null,
            };
            (prisma.invite.findUnique as jest.Mock).mockResolvedValue(expiredInvite);

            await expect(inviteService.acceptInvite(token, userId)).rejects.toThrow(
                "Invite is no longer valid (status is not PENDING)."
            );

            expect(prisma.invite.update).toHaveBeenCalledWith({
                where: { id: expiredInvite.id },
                data: { status: "EXPIRED", deletedAt: expect.any(Date) },
            });
        });

        it("should expire and throw if invite is expired", async () => {
            const pendingExpiredInvite = {
                id: "i2",
                token,
                status: "PENDING",
                expiresAt: new Date(Date.now() - 1000),
                deletedAt: null,
            };
            (prisma.invite.findUnique as jest.Mock).mockResolvedValue(
                pendingExpiredInvite
            );

            await expect(inviteService.acceptInvite(token, userId)).rejects.toThrow(
                "Invite has expired."
            );

            expect(prisma.invite.update).toHaveBeenCalledWith({
                where: { id: pendingExpiredInvite.id },
                data: { status: "EXPIRED", deletedAt: expect.any(Date) },
            });
        });

        it("should throw if user not found", async () => {
            const validInvite = {
                id: "i3",
                token,
                status: "PENDING",
                expiresAt: new Date(Date.now() + 1000),
                email: "test@example.com",
                workspaceId: "ws-1",
                deletedAt: null,
            };
            (prisma.invite.findUnique as jest.Mock).mockResolvedValue(validInvite);

            (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(inviteService.acceptInvite(token, userId)).rejects.toThrow(
                "Authenticated user not found or is inactive."
            );
        });

        it("should throw if email mismatch", async () => {
            const validInvite = {
                id: "i4",
                token,
                status: "PENDING",
                expiresAt: new Date(Date.now() + 1000),
                email: "test@example.com",
                workspaceId: "ws-1",
                deletedAt: null,
            };
            (prisma.invite.findUnique as jest.Mock).mockResolvedValue(validInvite);

            (prisma.user.findUnique as jest.Mock).mockResolvedValue({
                email: "other@example.com",
            });

            await expect(inviteService.acceptInvite(token, userId)).rejects.toThrow(
                "You are not authorized to accept this invite, email mismatch."
            );
        });

        it("should throw if user already member", async () => {
            const validInvite = {
                id: "i5",
                token,
                status: "PENDING",
                expiresAt: new Date(Date.now() + 1000),
                email: "test@example.com",
                workspaceId: "ws-1",
                role: WorkspaceRole.MEMBER,
                deletedAt: null,
            };
            (prisma.invite.findUnique as jest.Mock).mockResolvedValue(validInvite);

            (prisma.user.findUnique as jest.Mock).mockResolvedValue({
                email: "test@example.com",
            });

            (prisma.userOnWorkspace.findUnique as jest.Mock).mockResolvedValue({
                id: "u1-ws",
            });

            await expect(inviteService.acceptInvite(token, userId)).rejects.toThrow(
                "You are already an active member of this workspace."
            );
        });

        it("should accept invite successfully", async () => {
            const validInvite = {
                id: "i6",
                token,
                status: "PENDING",
                expiresAt: new Date(Date.now() + 1000),
                email: "test@example.com",
                workspaceId: "ws-1",
                role: WorkspaceRole.MEMBER,
                deletedAt: null,
            };
            (prisma.invite.findUnique as jest.Mock).mockResolvedValue(validInvite);

            (prisma.user.findUnique as jest.Mock).mockResolvedValue({
                email: "test@example.com",
            });

            (prisma.userOnWorkspace.findUnique as jest.Mock).mockResolvedValue(null);

            (prisma.userOnWorkspace.create as jest.Mock).mockResolvedValue({
                id: "u1-ws",
            });

            (prisma.invite.update as jest.Mock).mockResolvedValue({
                ...validInvite,
                status: "ACCEPTED",
                deletedAt: new Date(),
            });

            await expect(inviteService.acceptInvite(token, userId)).resolves.toBe(
                undefined
            );

            expect(prisma.userOnWorkspace.create).toHaveBeenCalledWith({
                data: {
                    userId,
                    workspaceId: validInvite.workspaceId,
                    role: validInvite.role,
                },
            });

            expect(prisma.invite.update).toHaveBeenCalledWith({
                where: { id: validInvite.id },
                data: {
                    status: "ACCEPTED",
                    deletedAt: expect.any(Date),
                },
            });
        });
    });
});
