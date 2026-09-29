import { NextResponse } from "next/server";

export const runtime = "nodejs";

const METHODS = ["WhatsApp", "Phone Call", "Email"];

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

/**
 * Receives an enquiry and forwards it to ENQUIRY_WEBHOOK_URL
 * (e.g. a Google Apps Script web app that appends a row to a Google Sheet —
 * see ENQUIRY_SETUP.md). Every record gets status "New" and a createdAt timestamp.
 *
 * If ENQUIRY_WEBHOOK_URL is not set the route answers 503 so the form can
 * offer the WhatsApp fallback instead of pretending the enquiry was saved.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, store nothing.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  let mobile = clean(body.mobile, 20).replace(/\D/g, "");
  if (mobile.length === 12 && mobile.startsWith("91")) mobile = mobile.slice(2);
  if (mobile.length === 11 && mobile.startsWith("0")) mobile = mobile.slice(1);

  const name = clean(body.name, 100);
  const email = clean(body.email, 120);

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid mobile number." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const contactMethod = clean(body.contactMethod, 20);

  const record = {
    name,
    mobile,
    email,
    company: clean(body.company, 120),
    product: clean(body.product, 200) || "General Enquiry",
    category: clean(body.category, 120),
    quantity: clean(body.quantity, 60),
    message: clean(body.message, 2000),
    contactMethod: METHODS.includes(contactMethod) ? contactMethod : "WhatsApp",
    pageUrl: clean(body.pageUrl, 300),
    status: "New",
    createdAt: new Date().toISOString(),
  };

  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) {
    console.warn("[enquiry] ENQUIRY_WEBHOOK_URL is not set — enquiry was NOT stored.", record.product);
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const r = await fetch(url, {
      method: "POST",
      // text/plain keeps Google Apps Script happy (no CORS preflight needed server-side)
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(record),
      redirect: "follow",
    });
    if (!r.ok) throw new Error(`Webhook responded ${r.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] webhook failed", err);
    return NextResponse.json({ ok: false, error: "upstream_failed" }, { status: 502 });
  }
}
