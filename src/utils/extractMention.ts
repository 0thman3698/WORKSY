export const extractMentions = (content: string) => {
    const mentionRegex = /@[\w.-]+/g;
    return content.match(mentionRegex) || [];
};
