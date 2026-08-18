import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function toSafeText(input: string): string {
  return input.replace(/[<>]/g, "").trim();
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = toSafeText(payload.name || "");
  const email = toSafeText(payload.email || "");
  const company = toSafeText(payload.company || "");
  const message = toSafeText(payload.message || "");

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, work email, and project goals are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
  }

  try {
    const host = getRequiredEnv("SMTP_HOST");
    const port = Number.parseInt(getRequiredEnv("SMTP_PORT"), 10);
    const user = getRequiredEnv("SMTP_USER");
    const pass = getRequiredEnv("SMTP_PASS");
    const fromEmail = process.env.CONTACT_FROM_EMAIL || user;
    const toEmail = process.env.CONTACT_TO_EMAIL || "contact@delibrix.com";

    if (!Number.isFinite(port)) {
      throw new Error("SMTP_PORT must be a valid number.");
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: `DELiBRiX Contact Form <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Project goals:",
        message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Project goals:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    await transporter.sendMail({
      from: `DELiBRiX <${fromEmail}>`,
      to: email,
      replyTo: toEmail,
      subject: "We received your inquiry | DELiBRiX",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for reaching out to DELiBRiX.",
        "We received your inquiry and our team will get back to you shortly.",
        "",
        "Here is a copy of your submission:",
        `Company: ${company || "Not provided"}`,
        "Project goals:",
        message,
        "",
        "DELiBRiX",
        "Building intelligent solutions. Delivering impact.",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#112420;line-height:1.6;max-width:620px;">
          <h2 style="margin:0 0 14px;">Hi ${safeName},</h2>
          <p style="margin:0 0 12px;">Thanks for reaching out to DELiBRiX.</p>
          <p style="margin:0 0 20px;">We received your inquiry and our team will get back to you shortly.</p>
          <div style="border:1px solid #d0dcd8;border-radius:12px;padding:14px 16px;background:#f8fbfa;">
            <p style="margin:0 0 8px;"><strong>Company:</strong> ${safeCompany}</p>
            <p style="margin:0 0 4px;"><strong>Project goals:</strong></p>
            <p style="margin:0;">${safeMessage}</p>
          </div>
          <p style="margin:20px 0 0;">DELiBRiX<br/>Building intelligent solutions. Delivering impact.</p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        message:
          "Thanks, your inquiry has been sent and a confirmation email is on its way to your inbox.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form email send failed", error);
    return NextResponse.json(
      {
        message:
          "We could not send your message right now. Please try again shortly or email contact@delibrix.com.",
      },
      { status: 500 },
    );
  }
}
