import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.json({
    message: "Tawakkul backend is running",
  });
});

app.post("/api/chat", async (req, res) => {
  console.log("POST /api/chat received");

  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    console.log("User message:", message);

    const aiResponse = await client.responses.create({
      model: "gpt-5.6",
      input: message,
      instructions: `
You are Tawakkul's official AI assistant.

Tawakkul is an Islamic educational and values-based digital platform.

Be warm, respectful, helpful, clear and concise.

Help users explore:
- Quran
- Tafseer
- Arabic
- Seerah
- Tajweed
- Islamic learning
- Modesty
- Meaningful media
- Ethical digital building

For religious questions, provide general educational information.
Do not pretend to be a qualified Islamic scholar.
For serious religious rulings, recommend consulting a qualified scholar.

Do not invent Tawakkul courses, prices, teachers,
policies or business information.
      `,
    });

    console.log("OpenAI response received");

    return res.json({
      reply: aiResponse.output_text,
    });
  } catch (error) {
    console.error("OPENAI ERROR:", error);

    return res.status(500).json({
      error: error.message || "Failed to generate AI response",
    });
  }
});

app.listen(PORT, "127.0.0.1", () => {
  console.log("");
  console.log("=================================");
  console.log("TAWAKKUL BACKEND IS RUNNING");
  console.log("http://127.0.0.1:5000");
  console.log("=================================");
  console.log("");
});