import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const aiService = async (topic) => {
    const prompt = `
Write a professional email about "${topic}".

Include:
- Subject
- Greeting
- Body
- Closing

Make the email clear, polite, and professional.
`;

    const models = [
        "gemini-3.5-flash",
        "gemini-3.1-flash-lite",
        "gemini-2.0-flash",
    ];

    let lastError;

    for (const model of models) {
        try {
            const response = await ai.models.generateContent({
                model,
                contents: prompt,
            });

            return response.text;

        } catch (error) {
            lastError = error;

            console.log(`${model} failed:`, error);
        }
    }

    throw lastError;
};

export default aiService;