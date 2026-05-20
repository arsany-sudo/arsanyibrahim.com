import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PERSON } from "@/lib/site";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { name, email, message, honeypot } = payload as Record<string, unknown>;

  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const cleanName = name.trim().slice(0, 120);
  const cleanEmail = email.trim().slice(0, 200);
  const cleanMessage = message.trim().slice(0, 4000);

  if (!cleanName || !cleanMessage) {
    return NextResponse.json(
      { error: "Name and message are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(cleanEmail)) {
    return NextResponse.json(
      { error: "Please use a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY is not configured. Logging submission.",
      { name: cleanName, email: cleanEmail, message: cleanMessage },
    );
    return NextResponse.json(
      {
        error:
          "Contact form is not configured yet. Email arsany@elitecreatif.com directly.",
      },
      { status: 503 },
    );
  }

  const fromAddress = process.env.RESEND_FROM ?? "site@arsanyibrahim.com";
  const toAddress = process.env.CONTACT_TO ?? PERSON.email;

  try {
    const resend = new Resend(apiKey);
    const html = `
      <h2>New message from arsanyibrahim.com</h2>
      <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-line;">${escapeHtml(cleanMessage)}</p>
    `;
    const text = `New message from arsanyibrahim.com\n\nName: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`;

    const { error } = await resend.emails.send({
      from: `Arsany Ibrahim Site <${fromAddress}>`,
      to: [toAddress],
      replyTo: cleanEmail,
      subject: `New contact form message from ${cleanName}`,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send message. Try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Could not send message. Try again." },
      { status: 500 },
    );
  }
}
