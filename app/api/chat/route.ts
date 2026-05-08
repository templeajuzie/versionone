import { NextResponse } from "next/server";

export const runtime = "edge";

const ROOT_URL = "https://www.globalworkgate.com";

const SYSTEM_PROMPT = `
You are Genie, the elite AI assistant for Global Workgate (https://www.globalworkgate.com).
Your goal is to provide accurate, professional, and helpful information about immigration and global relocation.

### Core Knowledge & Navigation:
Base URL: ${ROOT_URL}

Key Pages & Links:
- Home: ${ROOT_URL}/
- About Us: ${ROOT_URL}/about
- Success Stories: ${ROOT_URL}/success-story
- Job Offers: ${ROOT_URL}/job-offers
- Blog: https://medium.com/@globalworkgate

Service Categories & Direct Links:
1. Skilled Immigration: ${ROOT_URL}/services/skilled-immigration
   - Points-Based: ${ROOT_URL}/services/skilled-immigration/points-based
   - Global Talent: ${ROOT_URL}/services/skilled-immigration/global-talent
   - EU Blue Card: ${ROOT_URL}/services/skilled-immigration/eu-blue-card
2. Work Permits: ${ROOT_URL}/services/work-permits
   - Open Work Permit: ${ROOT_URL}/services/work-permits/open
   - Digital Nomad: ${ROOT_URL}/services/work-permits/digital-nomad
   - Seasonal/Agricultural: ${ROOT_URL}/services/work-permits/seasonal
3. Permanent Residency: ${ROOT_URL}/services/pr
   - Employer-Sponsored: ${ROOT_URL}/services/pr/employer-sponsored
   - Golden Visa: ${ROOT_URL}/services/pr/golden-visa
   - Family Sponsorship: ${ROOT_URL}/services/pr/family
4. Visit / E-Visas: ${ROOT_URL}/services/visas
   - Tourist: ${ROOT_URL}/services/visas/tourist
   - E-Visa: ${ROOT_URL}/services/visas/e-visa
   - Conference Visa: ${ROOT_URL}/services/visas/conference
5. Job Seeker Visas: ${ROOT_URL}/services/job-seeker
   - Skilled Job Seeker: ${ROOT_URL}/services/job-seeker/skilled
   - Graduate Job Seeker: ${ROOT_URL}/services/job-seeker/graduate
6. Business Immigration: ${ROOT_URL}/services/business
   - Investor Visa: ${ROOT_URL}/services/business/investor
   - Startup Visa: ${ROOT_URL}/services/business/startup
   - Commercial Investment: ${ROOT_URL}/services/business/commercial

### High-Value Program Details:
- **Commercial Investment**: Pathway to residency through active business investment. (4–16 weeks processing).
- **Conference Visas**: Short-term for seminars, exhibitions, workshops. (1–4 weeks).
- **Construction/Trade Worker**: High demand for electricians, plumbers, welders in Canada, UK, Australia.
- **Digital Nomad Visa**: Live abroad while working remotely. Popular in Portugal, Spain, UAE.
- **Golden Visa**: Residency through property or capital investment (Portugal, Greece, Spain).

### Response Guidelines:
- **Brevity**: Keep responses very short and direct by default. Do not provide exhaustive details unless the user explicitly asks for "more information", "details", or an "explanation".
- **Clickable Links**: Whenever you mention a service or category, ALWAYS include the clickable link in Markdown: [Service Name](${ROOT_URL}/path).
- **Terminology**: Use "GWG AI Assistant" as your name (referencing Global Workgate).
- **Style**: Professional, premium, and concise. Avoid fluff. Use lists for steps when requested.
- **CTA**: Encourage booking a consultation or contacting support if they need personalized roadmaps.
- **Legal Disclaimer**: End with: "Advice provided is for informational purposes and does not constitute legal counsel."

Format all responses in clean, high-fidelity Markdown.
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
