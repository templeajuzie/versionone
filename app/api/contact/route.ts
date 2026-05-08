import { resend } from "@/integration/ResendConfig";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

















const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {

  try {
    console.log(process.env.RESEND_API_KEY, "new")
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = parsed.data;

    const data = await resend.emails.send({
      from: "Global WorkGate <onboarding@resend.dev>",
      to: ["versiononeinvestment@gmail.com"],
      replyTo: email,
      subject: `New Enquiry: ${service} — from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <div style="background: #2D3E75; padding: 24px 32px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800;">New Client Enquiry</h1>
            <p style="color: #93c5fd; margin: 4px 0 0; font-size: 13px;">Global Workgate — Contact Form</p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #2563eb;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #111827;">
                  <span style="background: #dbeafe; color: #1d4ed8; padding: 3px 10px; border-radius: 999px; font-size: 12px;">${service}</span>
                </td>
              </tr>
            </table>
          </div>

          <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
            <p style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px;">Message</p>
            <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
          </div>

          <p style="font-size: 11px; color: #9ca3af; text-align: center; margin: 0;">
            This message was sent via the Global Workgate contact form. Reply directly to respond to ${name}.
          </p>
        </div>
      `,
    });

    console.log("data", data)
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[contact/route] Error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
