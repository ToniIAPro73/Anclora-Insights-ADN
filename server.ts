import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

interface EditorialAssistantRequest {
  prompt?: string;
  type?: "rewrite" | "generate" | "book-summary";
  textToAdapt?: string;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client lazily to avoid crashing on startup if key is missing
  let ai: GoogleGenAI | null = null;
  function getGeminiClient() {
    if (!ai) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is missing. Please configure it in your Secrets panel.");
      }
      ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return ai;
  }

  // API endpoint for AI brand companion
  app.post("/api/editorial-assistant", async (req, res) => {
    try {
      const { prompt = "", type, textToAdapt = "" } = req.body as EditorialAssistantRequest;
      const client = getGeminiClient();

      const systemInstruction = `
You are the AI Editorial Director for Anclora Insights, a premium imprint of Anclora Group.
Anclora Insights focuses on deep, curated knowledge, high intellectual authority, and tactile, timeless aesthetics.

Our style guidelines are:
- VOICE & TONE: Authoritative, intellectual, warm, direct, precise, clear, and unhurried. No corporate fluff or sensational hype. No exclamation marks, no superficial sales pitches. Speak with humble confidence.
- STYLE: Short, direct paragraphs. High-level language that remains accessible. Every word must feel deliberate and valuable.
- FOCUS: Synthesizing complexity into crystal-clear insights. High-end editorial curation.

When responding:
- Keep the language in SPANISH (unless asked otherwise).
- Match the brand manifesto: "La verdadera sofisticación reside en la eliminación de lo innecesario hasta que solo queda lo esencial."
- Align with the theme of "Tactile Minimalism" and "Intellectual Authority".
`;

      let promptText = "";
      if (type === "rewrite") {
        promptText = `Por favor, reescribe el siguiente texto para que se adapte perfectamente al tono y la voz editorial de Anclora Insights (sofisticado, intelectualmente riguroso, directo, cálido pero formal, sin rodeos ni exageraciones publicitarias):\n\n"${textToAdapt}"`;
      } else if (type === "generate") {
        promptText = `Genera una propuesta de artículo o ensayo basada en el siguiente tema, aplicando la voz editorial de Anclora Insights:\n\n"${prompt}"`;
      } else if (type === "book-summary") {
        promptText = `Genera un resumen ejecutivo de libro para el sello Anclora Insights basado en la siguiente idea de libro:\n\n"${prompt}"`;
      } else {
        promptText = prompt;
      }

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: promptText,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Internal Server Error";
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
