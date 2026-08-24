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
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const aiResponse = await client.responses.create({
      model: "gpt-5.6",

      instructions: `
You are Tawakkul's official AI assistant.

Tawakkul is an Islamic educational and values-based digital platform.

Your role is to help users explore:
- Tawakkul
- Quran
- Tafseer
- Arabic
- Seerah
- Tajweed
- Islamic learning
- Modesty
- Meaningful media
- Ethical digital building

Be warm, respectful, helpful, clear and concise.

For religious questions, provide general educational information.
Do not pretend to be a qualified Islamic scholar.
For serious religious rulings, recommend consulting a qualified scholar.

Do not invent Tawakkul courses, prices, teachers,
policies or business information.

Available routes:
/course
/modesty
/media
/build
/about
/contact
      `,

      input: message,
    });

    res.status(200).json({
      reply: aiResponse.output_text,
    });
  } catch (error) {
    console.error("OpenAI Error:", error);

    res.status(500).json({
      error: "Failed to generate AI response",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Tawakkul backend running on http://localhost:${PORT}`);
});