// src/config/jwt.config.ts
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { PrismaClient } from '../generated/prisma'; // Make sure this path is correct, or use '@prisma/client'

const prisma = new PrismaClient();

// --- ENSURE THIS DECLARATION IS HERE, AND IS NOT INSIDE THE 'if' BLOCK ---
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET!,
};
// --- END OF jwtOptions DECLARATION ---

    passport.use(
        new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
            // Your current workaround for 'sub' vs 'id'
            (jwt_payload as any).sub = (jwt_payload as any).id;

            try {
                console.log('JWT Strategy: Payload received:', jwt_payload);

                if (!jwt_payload.sub || typeof jwt_payload.sub !== 'string') {
                    console.warn('JWT Strategy: Payload missing or invalid "sub" (user ID).');
                    return done(null, false, { message: 'Invalid token payload' });
                }

                const user = await prisma.user.findUnique({
                    where: { id: jwt_payload.sub },
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        role: true,
                        avatar: true,
                        // Ensure all fields you need are selected
                        oauthProvider: true,
                        oauthId: true,
                        emailVerified: true,
                        lastLoginAt: true,
                    },
                });

                if (user) {
                    const userPublic: UserPublic = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        role: user.role,
                        avatar: user.avatar,
                        oauthProvider: user.oauthProvider,
                        oauthId: user.oauthId,
                        emailVerified: user.emailVerified,
                        lastLoginAt: user.lastLoginAt,
                    };
                    return done(null, userPublic);
                } else {
                    console.log('JWT Strategy: User not found in database for ID:', jwt_payload.sub);
                    return done(null, false, { message: 'User not found' });
                }
            } catch (error) {
                console.error('JWT authentication strategy error (caught by try-catch):', error);
                return done(error, false);
            }
        })
    );
    console.log('JWT Strategy configured successfully.');

export default passport;