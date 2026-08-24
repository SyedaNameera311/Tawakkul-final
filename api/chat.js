import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { message } = request.body;

    if (!message || !message.trim()) {
      return response.status(400).json({
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

Be:
- Warm
- Respectful
- Helpful
- Clear
- Concise

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

    return response.status(200).json({
      reply: aiResponse.output_text,
    });

  } catch (error) {
    console.error("OpenAI Error:", error);

    return response.status(500).json({
      error: "Failed to generate AI response",
    });
  }
}