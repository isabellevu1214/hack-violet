import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateJson(model, prompt) {
  const result = await ai.models.generateContent({
    model,
    contents: prompt,
  });

  // result.text is a convenience string in the SDK
  return result.text;
}
