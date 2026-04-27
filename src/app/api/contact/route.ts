import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_ADDRESS = "paul.dennis.harrington@gmail.com";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, service, message } = body as Record<string, unknown>;

  // Server-side validation
  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !email.trim() ||
    typeof message !== "string" || !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // Sanitise (strip HTML tags from user inputs)
  const clean = (s: unknown) =>
    typeof s === "string" ? s.replace(/<[^>]*>/g, "").trim() : "";

  const safeName = clean(name);
  const safeEmail = clean(email);
  const safeCompany = clean(company);
  const safeService = clean(service);
  const safeMessage = clean(message);

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
      <div style="background:#0B1729;padding:24px 32px;border-radius:8px 8px 0 0">
        <p style="color:#C9A84C;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px">New Enquiry</p>
        <h1 style="color:#F0EDE4;font-size:22px;margin:0">Harrington Technologies</h1>
      </div>
      <div style="background:#f9f7f3;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e0d8">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;font-size:13px;width:120px">Name</td><td style="padding:8px 0;font-size:13px;font-weight:600">${safeName}</td></tr>
          <tr><td style="padding:8px 0;color:#666;font-size:13px">Email</td><td style="padding:8px 0;font-size:13px"><a href="mailto:${safeEmail}" style="color:#0B1729">${safeEmail}</a></td></tr>
          ${safeCompany ? `<tr><td style="padding:8px 0;color:#666;font-size:13px">Company</td><td style="padding:8px 0;font-size:13px">${safeCompany}</td></tr>` : ""}
          ${safeService ? `<tr><td style="padding:8px 0;color:#666;font-size:13px">Service</td><td style="padding:8px 0;font-size:13px">${safeService}</td></tr>` : ""}
        </table>
        <hr style="border:none;border-top:1px solid #e5e0d8;margin:20px 0" />
        <p style="font-size:13px;color:#666;margin:0 0 8px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em">Message</p>
        <p style="font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0">${safeMessage}</p>
      </div>
      <p style="font-size:11px;color:#aaa;padding:16px 0;text-align:center">
        Sent from the Harrington Technologies contact form. Reply directly to respond to ${safeName}.
      </p>
    </div>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM_ADDRESS ?? "onboarding@resend.dev",
      to: TO_ADDRESS,
      replyTo: safeEmail,
      subject: `New enquiry from ${safeName}${safeCompany ? ` (${safeCompany})` : ""}`,
      html,
    });
  } catch (err) {
    console.error("[contact/route] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
