import { resend } from "@/integration/ResendConfig";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

























const footerContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(req: NextRequest) {
  try {
      console.log(process.env.RESEND_API_KEY, "new")
    const body = await req.json();
    const parsed = footerContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const data = await resend.emails.send({
      from: "Global WorkGate <onboarding@resend.dev>",
      to: ["versiononeinvestment@gmail.com"],
      replyTo: email,
      subject: `Quick Message from ${name} — Global Workgate`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <div style="background: #111827; padding: 20px 28px; border-radius: 8px; margin-bottom: 20px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 17px; font-weight: 800;">New Footer Message</h1>
            <p style="color: #6b7280; margin: 4px 0 0; font-size: 12px;">Sent via the Global Workgate website footer</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
            <p style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 4px;">From</p>
            <p style="font-size: 15px; font-weight: 700; color: #111827; margin: 0 0 4px;">${name}</p>
            <p style="font-size: 13px; color: #2563eb; margin: 0;">${email}</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px;">Message</p>
            <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
          <p style="font-size: 11px; color: #9ca3af; text-align: center; margin: 0;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    console.log("data", data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[footer-contact/route] Error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
