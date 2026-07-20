import {GoogleGenAI} from "@google/genai";
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,

});
const generateEmail = async (topic) => {
    const prompt =`
    write a professional email about "${topic}".
    Include:
    -Subject
    _Greeting
    _Body
    _closing
    `;


const response =await ai.models.generateContent({
    model:"gemini-2.5-flash",
    contents:prompt,
});
return response.text;

};
export default generateEmail;