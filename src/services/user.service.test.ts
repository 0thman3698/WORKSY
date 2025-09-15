import { userService } from "../services/user.service";
import prisma from "../config/db";
import { ApiError } from "../utils/apiError";
import { Role } from "@prisma/client";

jest.mock("../config/db");

describe("UserService", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getCurrentUser", () => {
        it("should return user if found", async () => {
            const mockUser = { id: "1", name: "max", role: Role.MEMBER };
            (prisma.user.findFirst as jest.Mock).mockResolvedValue(mockUser);

            const result = await userService.getCurrentUser("1");
            expect(result).toEqual(mockUser);
        });

        it("should throw if user not found", async () => {
            (prisma.user.findFirst as jest.Mock).mockResolvedValue(null);

            await expect(userService.getCurrentUser("1")).rejects.toThrow(
                ApiError.notFound("User not found")
            );
        });
    });

    describe("updateMe", () => {
        it("should update allowed fields", async () => {
            const mockUser = { id: "1", name: "max", avatar: "old.png" };
            (prisma.user.findFirst as jest.Mock).mockResolvedValue(mockUser);
            (prisma.user.update as jest.Mock).mockResolvedValue({
                ...mockUser,
                name: "Jane Doe",
            });

            const result = await userService.updateMe("1", { name: "Jane Doe" });
            expect(result.name).toBe("Jane Doe");
        });

        it("should throw if disallowed fields are passed", async () => {
            const mockUser = { id: "1", name: "max" };
            (prisma.user.findFirst as jest.Mock).mockResolvedValue(mockUser);

            await expect(
                userService.updateMe("1", { email: "hack@example.com" } as any)
            ).rejects.toThrow(
                ApiError.badRequest("You are not allowed to update: email")
            );
        });
    });

    describe("softDeleteUser", () => {
        it("should soft delete a user", async () => {
            const mockUser = { id: "1", name: "max" };
            (prisma.user.findFirst as jest.Mock).mockResolvedValue(mockUser);
            (prisma.user.update as jest.Mock).mockResolvedValue({
                ...mockUser,
                deletedAt: new Date(),
            });

            const result = await userService.softDeleteUser("1");
            expect(result.deletedAt).toBeInstanceOf(Date);
        });
    });

    describe("updateUserRole", () => {
        it("should allow APP_OWNER to update role", async () => {
            const owner = { id: "1", role: Role.APP_OWNER };
            const target = { id: "2", role: Role.MEMBER };

            (prisma.user.findFirst as jest.Mock)
                .mockResolvedValueOnce(owner) // currentUser
                .mockResolvedValueOnce(target); // targetUser

            (prisma.user.update as jest.Mock).mockResolvedValue({
                ...target,
                role: Role.APP_ADMIN,
            });

            const result = await userService.updateUserRole("1", "2", Role.APP_ADMIN);
            expect(result.role).toBe(Role.APP_ADMIN);
        });

        it("should forbid non-APP_OWNER", async () => {
            const currentUser = { id: "1", role: Role.MEMBER };
            (prisma.user.findFirst as jest.Mock).mockResolvedValue(currentUser);

            await expect(
                userService.updateUserRole("1", "2", Role.APP_ADMIN)
            ).rejects.toThrow(
                ApiError.forbidden("Only APP_OWNER can modify global user roles")
            );
        });

        it("should not allow APP_OWNER to change their own role", async () => {
            const currentUser = { id: "1", role: Role.APP_OWNER };
            (prisma.user.findFirst as jest.Mock).mockResolvedValue(currentUser);

            await expect(
                userService.updateUserRole("1", "1", Role.APP_ADMIN)
            ).rejects.toThrow(ApiError.badRequest("You cannot change your own role"));
        });
    });
});
