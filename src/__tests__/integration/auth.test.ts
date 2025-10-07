import request from "supertest";
import { app, server } from "../../server";
import prisma from "../../config/db";
import { cleanupDb } from '../../utils/cleanup'

const userEmail = "testuser@example.com";
const password = "@Test1234";

let token: string;
let refreshToken: string;
let otp: string;
let sessionToken: string;
let sessionResetToken: string;
let resetPin: string;

describe("Auth Integration", () => {
    beforeAll(async () => {
        await cleanupDb();
        await prisma.$connect();
    });

    afterAll(async () => {
        await cleanupDb()
        await prisma.$disconnect();
    });

    it("should register a new user", async () => {
        const res = await request(app)
            .post("/api/v1/auth/register")
            .send({
                name: "Test User",
                email: userEmail,
                password,
            });
        console.log('Nodyyaya', res.body)

        expect(res.status).toBe(201);
        expect(res.body.data).toEqual(
            expect.objectContaining({ email: userEmail })
        );
    });
    /// 429 error
    // it("should not register with duplicate email", async () => {
    //     await request(app).post("/api/v1/auth/register").send({
    //         name: "Test User",
    //         email: userEmail,
    //         password,
    //     });

    //     const res = await request(app).post("/api/v1/auth/register").send({
    //         name: "Another User",
    //         email: userEmail,
    //         password,
    //     });

    //     expect(res.status).toBe(400);
    //     expect(res.body).toHaveProperty("message");
    // });

    it("should verify email", async () => {

        const user = await prisma.user.findUnique({ where: { email: userEmail } });
        expect(user?.emailVerificationToken).toBeTruthy();

        const token = user?.emailVerificationToken!;
        const res = await request(app).post(`/api/v1/auth/verify-email/${token}`);

        expect(res.status).toBe(200);
        expect(res.body.data.isVerified).toBe(true);
    });

    it("should login and return OTP + sessionToken", async () => {
        const res = await request(app).post("/api/v1/auth/login").send({
            email: userEmail,
            password,
        });

        expect(res.status).toBe(200);
        expect(res.body.data).toHaveProperty("sessionToken");
        expect(res.body.data).toHaveProperty("otp");

        otp = res.body.data.otp;
        sessionToken = res.body.data.sessionToken;
    });
    //ERROR 429
    // it("should not login with wrong password", async () => {
    //     const res = await request(app).post("/api/v1/auth/login").send({
    //         email: userEmail,
    //         password: "WrongPass123",
    //     });

    //     expect(res.status).toBe(401);
    //     expect(res.body).toHaveProperty("message");
    // });

    it("should verify login OTP and return tokens", async () => {
        const res = await request(app)
            .post("/api/v1/auth/login/verify-otp")
            .send({
                email: userEmail,
                otp,
                sessionToken,
            });

        expect(res.status).toBe(200);
        expect(res.body.data).toHaveProperty("accessToken");

        const cookies = res.headers["set-cookie"] as unknown as string[];
        expect(cookies.some((c) => c.startsWith("refreshToken="))).toBe(true);

        token = res.body.data.accessToken;
        refreshToken = cookies
            .find((c) => c.startsWith("refreshToken="))!
            .split(";")[0]
            .split("=")[1];
    });

    it("should refresh tokens", async () => {
        const res = await request(app)
            .post("/api/v1/auth/refresh-token")
            .set("Cookie", `refreshToken=${refreshToken}`);

        expect(res.status).toBe(200);
        expect(res.body.data).toHaveProperty("accessToken");
    });

    it("should logout user", async () => {
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
        });

        const res = await request(app)
            .post("/api/v1/auth/logout")
            .send({ userId: user?.id });

        expect(res.status).toBe(200);
    });

    it("should send forgot password PIN", async () => {
        const res = await request(app)
            .post("/api/v1/auth/forgot-password/request-pin")
            .send({ email: userEmail });

        expect(res.status).toBe(200);
        resetPin = res.body.data.resetPin;
        sessionResetToken = res.body.data.resetToken;
    });

    it("should not verify wrong reset PIN", async () => {
        const res = await request(app)
            .post("/api/v1/auth/forgot-password/verify-pin")
            .send({ email: userEmail, pin: "999999" });

        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("message");
    });

    it("should verify reset PIN", async () => {
        const res = await request(app)
            .post("/api/v1/auth/forgot-password/verify-pin")
            .send({ email: userEmail, pin: resetPin });

        expect(res.status).toBe(200);
        sessionResetToken = res.body.data.resetToken;
    });

    it("should reset password successfully", async () => {
        const newPassword = "@NewPass123";

        const res = await request(app)
            .post("/api/v1/auth/forgot-password/reset")
            .send({
                email: userEmail,
                resetToken: sessionResetToken,
                newPassword,
                confirmPassword: newPassword,
            });

        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Password reset successfully");
    });

    it("should change password", async () => {
        const res = await request(app)
            .patch("/api/v1/auth/change-password")
            .send({
                email: userEmail,
                oldPassword: "@NewPass123",
                newPassword: "@Changed123",
                confirmPassword: "@Changed123",
            });

        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Password changed successfully");
    });

    it("should throw if already verified", async () => {
        const res = await request(app)
            .post("/api/v1/auth/resend-verification")
            .send({ email: userEmail });

        expect(res.status).toBe(400);
        expect(res.body.message).toBe("Email is already verified");
    });
});
