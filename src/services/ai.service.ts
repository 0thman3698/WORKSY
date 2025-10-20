import prisma from "../config/db";
import { ai } from "../config/ai";


export class AIService {
    async summarizeMessages(targetId: string,
        type: "channel" | "dm") {
        // 1️⃣ Fetch last 50 messages

        const messages = await prisma.message.findMany({
            where: { channelId: targetId, deletedAt: null, }
        });
        console.log(messages)


        if (!messages.length) return 'No messages found to summarize.';

        const text = messages
            .reverse()
            .map((m) => `${m.user?.name || "Unknown"}: ${m.content}`)
            .join("\n");

        const prompt = `
You are an assistant helping summarize a conversation between users.
Summarize the following chat in clear, short English (max 150 words). 
Focus on main points, decisions, and actions:

${text}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        // هنا التعديل
        const summary = response.text ?? "لم أتمكن من إنشاء ملخص.";

        // (اختياري) لو حابب تخزن في قاعدة البيانات
        // await prisma.summary.create({ data: { content: summary } });

        return summary;
    }
}

export const aiService = new AIService();
