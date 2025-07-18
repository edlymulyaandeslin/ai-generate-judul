import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

export const geminiRequest = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);

        return result.response.text();
    } catch (error) {
        console.error("Error generating content with Gemini: ", error);
        throw error;
    }
};
