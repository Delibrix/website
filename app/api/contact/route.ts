import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function safe(s: string) {
  return s.replace(/[<>]/g, "").trim();
}

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function env(key: string): string {
  const v = process.env[key];
  if (!v) throw new Error(`Missing env var: ${key}`);
  return v;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = safe(String(body.name ?? ""));
  const email = safe(String(body.email ?? ""));
  const company = safe(String(body.company ?? ""));
  const message = safe(String(body.message ?? ""));

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, work email, and project goals are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  try {
    const host = env("SMTP_HOST");
    const port = parseInt(env("SMTP_PORT"), 10);
    const user = env("SMTP_USER");
    const pass = env("SMTP_PASS");
    const from = process.env.CONTACT_FROM_EMAIL || user;
    const to = process.env.CONTACT_TO_EMAIL || "contact@delibrix.com";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const sName = esc(name);
    const sEmail = esc(email);
    const sCompany = esc(company || "Not provided");
    const sMessage = esc(message).replace(/\n/g, "<br />");

    // Notify team inbox
    await transporter.sendMail({
      from: `DELiBRiX Contact <${from}>`,
      to,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${sName}</p>
<p><strong>Email:</strong> ${sEmail}</p>
<p><strong>Company:</strong> ${sCompany}</p>
<p><strong>Message:</strong></p>
<p>${sMessage}</p>`,
    });

    // Auto-reply to sender — non-fatal if it fails
    try {
      await transporter.sendMail({
        from: `DELiBRiX <${from}>`,
        to: email,
        replyTo: to,
        subject: "We received your inquiry | DELiBRiX",
        text: `Hi ${name},\n\nThanks for reaching out to DELiBRiX. We received your inquiry and will get back to you shortly.\n\nCompany: ${company || "Not provided"}\nMessage:\n${message}\n\nBuilding intelligent solutions. Delivering impact.\nDELiBRiX`,
        html: `<div style="font-family:Arial,sans-serif;color:#112420;line-height:1.6;max-width:600px">
  <h2 style="margin:0 0 12px">Hi ${sName},</h2>
  <p>Thanks for reaching out to DELiBRiX. We received your inquiry and will get back to you shortly.</p>
  <div style="border:1px solid #d0dcd8;border-radius:10px;padding:14px 16px;background:#f8fbfa;margin:16px 0">
    <p style="margin:0 0 6px"><strong>Company:</strong> ${sCompany}</p>
    <p style="margin:0 0 4px"><strong>Message:</strong></p>
    <p style="margin:0">${sMessage}</p>
  </div>
  <p style="margin:16px 0 0">Building intelligent solutions. Delivering impact.<br/><strong>DELiBRiX</strong></p>
</div>`,
      });
    } catch (confirmErr) {
      console.warn("Auto-reply failed (non-fatal):", confirmErr);
    }

    return NextResponse.json(
      { message: "Your inquiry has been sent. We'll be in touch soon." },
      { status: 200 },
    );
  } catch (err) {
    console.error("Contact send failed:", err);
    return NextResponse.json(
      { message: "Could not send your message right now. Please email contact@delibrix.com directly." },
      { status: 500 },
    );
  }
}
