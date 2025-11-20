import { GoogleGenAI } from "@google/genai";

// Safely check for API key availability
let apiKey = '';
try {
  // @ts-ignore
  apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) ? process.env.API_KEY : '';
} catch (e) {
  console.warn("Environment variables not available, skipping AI initialization.");
}

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
} else {
  console.warn("Gemini API Key is missing. AI features will be disabled.");
}

export const generateResponse = async (prompt: string, language: 'en' | 'ti'): Promise<string> => {
  if (!ai) {
    return "AI service is currently unavailable. Please configure the API KEY.";
  }

  try {
    const systemInstruction = language === 'ti' 
      ? "You are a helpful Christian spiritual assistant for a Tigrinya speaking church. Answer briefly and warmly in Tigrinya."
      : "You are a helpful Christian spiritual assistant. Answer briefly and warmly in English.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};