import prisma from "../config/db";
import { ai } from "../config/ai";

export class AIService {
    async summarizeChannelMessages(channelId: string) {
        // 1️⃣ Fetch last 50 messages in the channel
        const messages = await prisma.message.findMany({
            where: {
                channelId,
                deletedAt: null,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 50,
            include: {
                user: {
                    select: { name: true },
                },
            },
        });

        if (!messages.length) return "No messages found to summarize.";

        // 2️⃣ Convert messages to readable text
        const text = messages
            .reverse()
            .map((m) => `${m.user?.name || "Unknown"}: ${m.content}`)
            .join("\n");

        // 3️⃣ AI prompt
        const prompt = `
You are an assistant helping summarize a chat conversation in a channel.
Summarize the following chat in clear, concise English (max 150 words).
Focus on main topics, decisions, and action points:

${text}
`;

        // 4️⃣ Send to Gemini
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        const summary = response.text ?? "I couldn't generate a summary.";


        return summary;
    }

    async summarizeDMMessages(conversationId: string) {
        const messages = await prisma.message.findMany({
            where: {
                conversationId,
                deletedAt: null,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 50,
            include: {
                user: {
                    select: { name: true },
                },
            },
        });

        if (!messages.length) return "No messages found to summarize.";

        const text = messages
            .reverse()
            .map((m) => `${m.user?.name || "Unknown"}: ${m.content}`)
            .join("\n");

        const prompt = `
You are an assistant helping summarize a direct message conversation.
Summarize the following chat in clear, concise English (max 150 words).
Focus on main topics, decisions, and action points:

${text}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        const summary = response.text ?? "I couldn't generate a summary.";

        return summary;
    }
}

export const aiService = new AIService();
