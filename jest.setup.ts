// jest.setup.ts
jest.mock("./src/config/firebase/firebase", () => {
    return {
        messaging: {
            send: jest.fn().mockResolvedValue("mocked-message-id"),
        },
    };
});
