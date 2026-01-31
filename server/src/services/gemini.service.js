import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config({ path: new URL("../../.env", import.meta.url) });

let client;
function getClient() {
  if (client) return client;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY in environment.");
  }
  client = new GoogleGenAI({ apiKey });
  return client;
}

export async function generateJson(model, prompt) {
  const ai = getClient();
  const result = await ai.models.generateContent({
    model,
    contents: prompt,
  });

  // result.text is a convenience string in the SDK
  return result.text;
}
