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
        model: process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
        stream: true
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `OpenRouter error: ${response.status}`;
      
      try {
        const errorJson = JSON.parse(errorText);
        if (errorJson.error && errorJson.error.message) {
          errorMessage = errorJson.error.message;
        }
      } catch (e) {
        // Fallback to response status if JSON parsing fails
      }
      
      console.error("OpenRouter Error Body:", errorText);
      return NextResponse.json({ reply: `⚠️ AI Error: ${errorMessage}` }, { status: response.status });
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
    return NextResponse.json({ 
      reply: "⚠️ I'm having trouble connecting to the AI brain. Please check your internet or try again in a moment." 
    }, { status: 500 });
  }
}
