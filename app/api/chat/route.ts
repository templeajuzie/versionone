import { NextResponse } from "next/server";

// ── Knowledge base for Global Workgate ──────────────────────────────────────
const knowledgeBase: { patterns: string[]; response: string }[] = [
  {
    patterns: ["hello", "hi", "hey", "good morning", "good afternoon", "greetings", "start"],
    response:
      "Hello! Welcome to Global Workgate 👋\n\nI'm Genie, your personal immigration assistant. I can help you with:\n\n• Work permits & employment visas\n• Permanent residency pathways\n• Business & investor programs\n• Conference & tourist visas\n• Document preparation guidance\n\nWhat would you like to explore today?",
  },
  {
    patterns: ["visa", "visas", "tourist visa", "business visa", "student visa", "visit visa"],
    response:
      "We offer a comprehensive range of visa services:\n\n✈️ Work Visas – For skilled professionals seeking overseas employment\n🎓 Student Visas – Study at top international institutions\n💼 Business Visas – For entrepreneurs, meetings & corporate travel\n🌴 Tourist Visas – Leisure and short-stay travel\n👨‍👩‍👧 Family Reunification – Bringing loved ones together\n🎤 Conference & Event Visas – For professional events abroad\n\nWhich visa type would you like to learn more about?",
  },
  {
    patterns: ["work permit", "work permission", "employment permit", "working abroad", "work authorization"],
    response:
      "Our work permit services span the most sought-after destinations:\n\n🇨🇦 Canada – Express Entry, LMIA, and Provincial programs\n🇬🇧 United Kingdom – Skilled Worker Visa, ICT\n🇩🇪 Germany – EU Blue Card, Job Seeker Visa\n🇦🇺 Australia – TSS 482, Employer Nomination\n🇳🇿 New Zealand – Accredited Employer Work Visa\n🇸🇬 Singapore – Employment Pass, S Pass\n\nWe manage everything from document prep to submission and tracking. Would you like to check your eligibility?",
  },
  {
    patterns: ["permanent residency", "pr application", "permanent residence", "green card", "settle", "itr", "ilr", "citizenship"],
    response:
      "Permanent Residency is the path to long-term security abroad. We specialise in:\n\n🍁 Canada PR – Express Entry (CRS scoring), PNP, Family Sponsorship\n🇬🇧 UK – Indefinite Leave to Remain (ILR)\n🇩🇪 Germany – Settlement Permit (Niederlassungserlaubnis)\n🇦🇺 Australia – Employer Nomination Scheme, 189/190 visas\n🇵🇹 Portugal – Golden Visa & D7 Passive Income Visa\n\nOur PR success rate exceeds 95%. Book a free consultation to get your personalised pathway!",
  },
  {
    patterns: ["investment", "investor", "business investment", "commercial", "commercial investment", "entrepreneur"],
    response:
      "Our Commercial Investment Programs are designed for entrepreneurs and high-net-worth individuals seeking residency through business:\n\n💼 Business Creation Routes – Create jobs for locals to qualify\n🏗️ Capital Investment Visas – Minimum investment thresholds by country\n🌍 Franchise & Acquisition Programs – Buy into established businesses\n🍀 Startup Entrepreneur Visas – For innovative business founders\n\nTop destinations: 🇵🇹 Portugal • 🇬🇧 UK • 🇩🇪 Germany • 🇲🇹 Malta • 🇧🇧 Caribbean nations\n\nReady to explore your investment route?",
  },
  {
    patterns: ["conference", "event visa", "conference visa", "short stay", "short-term", "professional event"],
    response:
      "Conference & Event Visas grant temporary access to attend professional events internationally.\n\nWe assist with:\n📋 Invitation & acceptance letter verification\n📝 Application preparation & submission\n⚡ Fast-track processing where available\n📦 Full documentation support pack\n\nThese are typically processed faster than standard visas – often within 5–15 working days. Let us know your event country and date to get started!",
  },
  {
    patterns: ["immigration", "migrate", "relocation", "relocate", "move abroad", "moving to", "emigrate"],
    response:
      "Global Workgate provides end-to-end immigration support so you never navigate the process alone:\n\n✅ Eligibility assessment & pathway planning\n✅ Document preparation & verification\n✅ Application submission & government liaison\n✅ Real-time tracking & status updates\n✅ Pre-departure orientation\n✅ Post-arrival settlement support\n\nWe've successfully relocated thousands of clients to 50+ countries worldwide. Where are you looking to move?",
  },
  {
    patterns: ["cost", "fee", "price", "how much", "pricing", "charge", "rates", "affordable"],
    response:
      "Our fees are tailored to the complexity of your case and destination country – we believe in complete transparency with no hidden charges.\n\n💡 We offer a FREE initial consultation where our experts will:\n• Assess your eligibility\n• Outline the full process\n• Provide a clear cost breakdown\n\n📞 Book your free consultation via our Contact page or chat with us to schedule a call. Would you like to proceed?",
  },
  {
    patterns: ["contact", "reach", "phone", "email", "office", "speak to", "call", "talk to"],
    response:
      "You can reach our team through multiple channels:\n\n📧 Email – Available on our Contact page\n📞 Phone – Listed on our Contact page\n💬 Live Chat – You're already using it!\n📅 Book a Consultation – Via our Contact form\n\nOur team typically responds within 24 business hours. For urgent matters, our live chat and phone line are the fastest routes.",
  },
  {
    patterns: ["how long", "processing time", "duration", "timeline", "when will", "how fast", "time frame"],
    response:
      "Processing times vary by country, visa type, and application volume:\n\n⚡ Conference/Short-stay visas: 5–15 working days\n📋 Work permits: 4–12 weeks\n🏠 Permanent residency: 3–18 months\n💼 Investment programs: 6–24 months\n\nWe proactively chase your application and keep you updated at every milestone. Want a specific timeline for a particular country?",
  },
  {
    patterns: ["document", "documents", "paperwork", "requirements", "what do i need", "checklist"],
    response:
      "While requirements vary by destination, common documents include:\n\n📘 Valid passport (6+ months remaining validity)\n🎓 Educational certificates & notarised transcripts\n💼 Employment letters & reference letters\n🏦 Bank statements & financial proof\n🩺 Medical examination results\n🔍 Police clearance certificate\n📷 Passport-size photographs\n\nOur team will provide you with a precise personalised checklist based on your specific visa category and destination.",
  },
  {
    patterns: ["about", "who are you", "what is global workgate", "your company", "your services", "what do you do"],
    response:
      "Global Workgate is a premium immigration consultancy dedicated to making global mobility accessible to everyone.\n\n🌍 50+ destination countries covered\n✅ 95%+ visa success rate\n👥 Thousands of satisfied clients\n🏆 Licensed & accredited consultants\n📋 End-to-end case management\n\nWhether you're an individual, a family, or a business, we have a tailored solution for your immigration journey. How can we help you today?",
  },
  {
    patterns: ["thank", "thanks", "thank you", "appreciate", "helpful", "great"],
    response:
      "You're very welcome! 😊 It's our pleasure to assist you. Global Workgate is committed to making your immigration journey as smooth as possible.\n\nIs there anything else I can help you with today?",
  },
  {
    patterns: ["bye", "goodbye", "see you", "later", "that's all", "no more"],
    response:
      "Goodbye! 👋 It was a pleasure chatting with you. Best of luck on your global journey!\n\nRemember, Global Workgate is always here whenever you need expert immigration guidance. Safe travels! ✈️",
  },
];

const FALLBACK =
  "That's a great question! For the most accurate guidance on this, I'd recommend:\n\n1. 📅 Book a free consultation with one of our immigration experts\n2. 📧 Email us via our Contact page\n3. 📋 Browse our Services section for detailed information\n\nIs there a specific topic I can help clarify — like visas, work permits, permanent residency, or costs?";

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "I didn't catch that. Could you please rephrase?" },
        { status: 400 },
      );
    }

    const lower = message.toLowerCase();
    const match = knowledgeBase.find(({ patterns }) =>
      patterns.some((p) => lower.includes(p)),
    );

    const reply = match ? match.response : FALLBACK;

    // Simulate a natural thinking delay (600–1100ms)
    await new Promise((r) =>
      setTimeout(r, 600 + Math.floor(Math.random() * 500)),
    );

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      {
        reply:
          "Sorry, something went wrong on my end. Please try again or contact us directly.",
      },
      { status: 500 },
    );
  }
}
