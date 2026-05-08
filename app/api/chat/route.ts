import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are Genie, the official AI assistant for Global Workgate, a professional immigration consultancy.
Your goal is to provide helpful, welcoming, and accurate information about our services:
- Work Permits & Visas
- Permanent Residency
- Commercial Investment Programs
- Conference & Event Visas

Style Guide:
- Be professional, warm, and concise.
- Use emojis like 🌍, ✈️, or 💼 to make responses friendly.
- Clarify that your advice is for informational purposes and not official legal counsel.
- If unsure, suggest the user contact Global Workgate via the website contact form.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "Please provide a message." }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || "google/gemma-2-9b-it:free";

    if (!apiKey) {
      return NextResponse.json({ 
        reply: "Genie's AI core is waiting for an OpenRouter API key. Please add it to your .env.local file to activate full support! 🚀" 
      });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "X-Title": "Global Workgate AI"
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return NextResponse.json(
      { reply: "Genie is experiencing some technical turbulence. Please try again in a moment! ✈️" },
      { status: 500 }
    );
  }
}
