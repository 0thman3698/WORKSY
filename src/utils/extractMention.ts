export const extractMentions = (content: string): string[] => {
    const results: string[] = [];
    const words = content.split(/\s+/); // نقسم النص على spaces

    for (const word of words) {
        if (word.startsWith("@")) {
            // لو الكلمة @ وبعدين أي حروف/أرقام/نقطة/underscore/-
            const match = word.match(/^@([A-Za-z0-9._-]+)/);
            if (match) {
                const mention = match[0];

                // استبعاد mentions اللي شكلها ايميل (فيها @ بعد نقطة)
                if (!/^[^@]+@[^@]+\.[^@]+$/.test(mention)) {
                    results.push(mention);
                }
            }
        }
    }

    return results;
};
