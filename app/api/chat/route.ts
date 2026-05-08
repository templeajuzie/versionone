import { NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPT = `
You are Genie, the AI assistant for Global Workgate.
Provide professional information about immigration:
- Work Permits & Visas
- Permanent Residency
- Investment Programs
- Conference Visas

Style: Professional, concise, and helpful. Use Markdown for formatting (bold, lists, etc.). 
Mention that advice is informational and not legal counsel.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ 
        reply: "OpenRouter API Key is missing. Please add it to your .env.local file! 🚀" 
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
        model: process.env.OPENROUTER_MODEL || "google/gemma-2-9b-it:free",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
        stream: true
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenRouter Error Body:", errorData);
      throw new Error(`OpenRouter error: ${response.status}`);
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      }
    });

  } catch (error) {
    console.error("Chat Error:", error);
    return NextResponse.json({ reply: "Connection failed. Check server logs." }, { status: 500 });
  }
}
