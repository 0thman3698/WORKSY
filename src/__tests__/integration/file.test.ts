import prisma from "../../config/db";
import { fileService } from "../../services/file.service";
import { ApiError } from "../../utils/apiError";
import { v2 as cloudinary } from "cloudinary";
import { cleanupDb } from "../../utils/cleanup";
import request from "supertest";
import { app, server } from "../../server";
import { generateAccessToken } from "../../utils/jwt";
import { token } from "morgan";

// Mock Cloudinary upload/destroy
jest.mock("cloudinary", () => {
    const mCloudinary = {
        uploader: {
            upload: jest.fn().mockResolvedValue({
                secure_url: "https://cloudinary.com/fake/test.png",
                public_id: "fake_public_id",
            }),
            destroy: jest.fn().mockResolvedValue({ result: "ok" }),
        },
        config: jest.fn(),
    };
    return { v2: mCloudinary };
});

describe("FileService Integration", () => {
    let user: any;
    let message: any;
    let token: string;
    let workspace: any;
    let channel: any;

    beforeAll(async () => {
        await prisma.$connect();
        await cleanupDb();

        // Create owner user
        user = await prisma.user.create({
            data: {
                name: "Owner User",
                email: "owner@test.com",
                password: "@Test1234",
            },
        });
        token = "Bearer " + generateAccessToken(user.id, user.role);


        workspace = await prisma.workspace.create({
            data: {
                name: "Default Workspace",
                slug: `default-ws-${Date.now()}`,
                ownerId: user.id,
                members: { create: [{ userId: user.id, role: "OWNER" }] },
            },
        });

        channel = await prisma.channel.create({
            data: {
                name: "general",
                workspaceId: workspace.id,
                ownerId: user.id,
                isPublic: true,
            },
        });



        message = await prisma.message.create({
            data: {
                content: "Hello file",
                userId: user.id,
                channelId: channel.id,
            },
        });
    });

    afterAll(async () => {
        await cleanupDb();
        await prisma.$disconnect();
    });

    it("should upload file and create record in DB", async () => {
        const file: Express.Multer.File = {
            fieldname: "files",
            originalname: "test.png",
            encoding: "7bit",
            mimetype: "image/png",
            size: 123,
            buffer: Buffer.from("fake image buffer"),
            destination: "",
            filename: "",
            path: "",
            stream: null as any,
        };

        const saved = await fileService.uploadFile(file, user.id, message.id);

        expect(saved).toHaveProperty("id");
        expect(saved.url).toBe("https://cloudinary.com/fake/test.png");
        expect(cloudinary.uploader.upload).toHaveBeenCalled();
    });

    it("should retrieve file metadata for uploader", async () => {
        const file = await prisma.file.findFirst({ where: { uploadedById: user.id } });
        const metadata = await fileService.getFileMetadata(file!.id, user.id);

        expect(metadata).toHaveProperty("id", file!.id);
        expect(metadata.uploadedById).toBe(user.id);
    });

    it("should not allow unauthorized user to access file metadata", async () => {
        const otherUser = await prisma.user.create({
            data: {
                name: "Other User",
                email: "other@test.com",
                password: "@Test1234",
            },
        });

        const file = await prisma.file.findFirst({ where: { uploadedById: user.id } });

        await expect(fileService.getFileMetadata(file!.id, otherUser.id))
            .rejects.toThrow(ApiError);
    });

    it("should delete file (soft delete + cloudinary destroy)", async () => {
        const file = await prisma.file.findFirst({ where: { uploadedById: user.id } });
        const deleted = await fileService.deleteFile(file!.id, user.id);

        expect(deleted.deletedAt).not.toBeNull();
        expect(cloudinary.uploader.destroy).toHaveBeenCalledWith(file!.path);
    });
});
