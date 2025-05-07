"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refreshToken = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_js_1 = require("../config/prisma.js");
const jwt_js_1 = require("../utils/jwt.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await prisma_js_1.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        return void res.status(400).json({ message: 'Email already in use' });
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = await prisma_js_1.prisma.user.create({
        data: { name, email, password: hashedPassword },
    });
    res.status(201).json({ message: 'User registered successfully', user: { id: user.id, name: user.name, email: user.email } });
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma_js_1.prisma.user.findUnique({ where: { email } });
    if (!user)
        return void res.status(401).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (!isMatch)
        return void res.status(401).json({ message: 'Invalid credentials' });
    const accessToken = (0, jwt_js_1.generateAccessToken)(user.id);
    const refreshToken = (0, jwt_js_1.generateRefreshToken)(user.id);
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ accessToken });
};
exports.login = login;
const refreshToken = (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token)
        return void res.status(401).json({ message: 'No refresh token' });
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.REFRESH_TOKEN_SECRET);
        const newAccessToken = (0, jwt_js_1.generateAccessToken)(payload.userId);
        res.status(200).json({ accessToken: newAccessToken });
    }
    catch (err) {
        res.status(403).json({ message: 'Invalid refresh token' });
    }
};
exports.refreshToken = refreshToken;
const logout = (req, res) => {
    res.clearCookie('refreshToken');
    res.status(200).json({ message: 'Logged out' });
};
exports.logout = logout;
