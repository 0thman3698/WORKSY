import { extractMentions } from './extractMention';

describe('extractMentions', () => {
    describe('Basic functionality', () => {
        it('should extract single mention', () => {
            const content = 'Hello @john!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john']);
        });

        it('should extract multiple mentions', () => {
            const content = 'Hello @john and @jane!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john', '@jane']);
        });

        it('should extract mentions with different separators', () => {
            const content = 'Hey @alice, @bob, and @charlie!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@alice', '@bob', '@charlie']);
        });

        it('should return empty array when no mentions', () => {
            const content = 'Hello world!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual([]);
        });

        it('should return empty array for empty string', () => {
            const content = '';
            const mentions = extractMentions(content);

            expect(mentions).toEqual([]);
        });
    });

    describe('Username patterns', () => {
        it('should extract usernames with letters', () => {
            const content = 'Hey @username!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@username']);
        });

        it('should extract usernames with numbers', () => {
            const content = 'Hey @user123!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@user123']);
        });

        it('should extract usernames with dots', () => {
            const content = 'Hey @user.name!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@user.name']);
        });

        it('should extract usernames with hyphens', () => {
            const content = 'Hey @user-name!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@user-name']);
        });

        it('should extract usernames with underscores', () => {
            const content = 'Hey @user_name!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@user_name']);
        });

        it('should extract complex usernames', () => {
            const content = 'Hey @user.name-123_test!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@user.name-123_test']);
        });
    });

    describe('Edge cases', () => {
        it('should handle mentions at the beginning', () => {
            const content = '@john hello!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john']);
        });

        it('should handle mentions at the end', () => {
            const content = 'Hello @john';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john']);
        });

        it('should handle mentions in the middle', () => {
            const content = 'Hello @john, how are you?';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john']);
        });

        it('should handle mentions with spaces', () => {
            const content = '@john @jane hello!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john', '@jane']);
        });

        it('should handle mentions with newlines', () => {
            const content = 'Hello\n@john\nand @jane!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john', '@jane']);
        });

        it('should handle mentions with tabs', () => {
            const content = 'Hello\t@john\tand @jane!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john', '@jane']);
        });
    });

    describe('Invalid patterns', () => {
        it('should not extract @ without username', () => {
            const content = 'Hello @!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual([]);
        });

        it('should not extract @ with spaces', () => {
            const content = 'Hello @ john!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual([]);
        });

        it('should not extract @ with parentheses', () => {
            const content = 'Hello @user(name)!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@user']);
        });

        it('should not extract @ with brackets', () => {
            const content = 'Hello @user[name]!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@user']);
        });
    });

    describe('Case sensitivity', () => {
        it('should extract mentions with uppercase', () => {
            const content = 'Hello @JOHN!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@JOHN']);
        });

        it('should extract mentions with lowercase', () => {
            const content = 'Hello @john!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john']);
        });

        it('should extract mentions with mixed case', () => {
            const content = 'Hello @JohnDoe!';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@JohnDoe']);
        });
    });

    describe('Real-world scenarios', () => {
        it('should handle typical chat message', () => {
            const content = 'Hey @alice, can you review the PR? @bob is waiting for feedback.';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@alice', '@bob']);
        });

        it('should handle message with multiple sentences', () => {
            const content = 'Good morning @team! @john, please check the logs. @jane, the deployment is ready.';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@team', '@john', '@jane']);
        });

        it('should handle message with URLs and mentions', () => {
            const content = 'Check this out: https://example.com @alice and @bob should see this.';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@alice', '@bob']);
        });

        // it('should handle message with code and mentions', () => {
        //     const content = 'The function `@user` is deprecated. Please use `@newUser` instead.';
        //     const mentions = extractMentions(content);

        //     expect(mentions).toEqual(['@user', '@newUser']);
        // });
    });

    describe('Performance', () => {
        it('should handle long content efficiently', () => {
            const longContent = 'Hello '.repeat(1000) + '@user' + ' world! '.repeat(1000);
            const mentions = extractMentions(longContent);

            expect(mentions).toEqual(['@user']);
        });

        it('should handle many mentions efficiently', () => {
            const manyMentions = Array.from({ length: 100 }, (_, i) => `@user${i}`).join(' ');
            const mentions = extractMentions(manyMentions);

            expect(mentions).toHaveLength(100);
            expect(mentions[0]).toBe('@user0');
            expect(mentions[99]).toBe('@user99');
        });
    });

    describe('Additional Slack-style cases', () => {
        it('should stop mention before email-like patterns', () => {
            const content = 'Contact me @user@domain.com';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@user']);
        });

        // it('should handle consecutive mentions without space', () => {
        //     const content = '@john@jane hello!';
        //     const mentions = extractMentions(content);

        //     expect(mentions).toEqual(['@john', '@jane']);
        // });

        it('should stop mention before punctuation', () => {
            const content = 'Hello @john, how are you?';
            const mentions = extractMentions(content);

            expect(mentions).toEqual(['@john']);
        });

        it('should not extract standalone @', () => {
            const content = '@';
            const mentions = extractMentions(content);

            expect(mentions).toEqual([]);
        });
    });
});
