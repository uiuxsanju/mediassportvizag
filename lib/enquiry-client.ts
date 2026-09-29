import { waLink } from "./data";

export type ContactMethod = "WhatsApp" | "Phone Call" | "Email";
export const CONTACT_METHODS: ContactMethod[] = ["WhatsApp", "Phone Call", "Email"];

export type EnquiryPayload = {
  name: string;
  mobile: string;
  email?: string;
  company?: string;
  product: string;
  category?: string;
  quantity?: string;
  message?: string;
  contactMethod: ContactMethod;
  pageUrl?: string;
  website?: string; // honeypot — must stay empty
};

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "invalid" | "network"; message?: string };

/** Normalises an Indian mobile number to its 10 digits. Returns "" if invalid. */
export function normalizeMobile(raw: string): string {
  let d = raw.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return /^[6-9]\d{9}$/.test(d) ? d : "";
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      }),
    });
    if (res.ok) return { ok: true };
    const data = await res.json().catch(() => ({}));
    if (res.status === 503) return { ok: false, reason: "not_configured" };
    if (res.status === 400) return { ok: false, reason: "invalid", message: data?.error };
    return { ok: false, reason: "network" };
  } catch {
    return { ok: false, reason: "network" };
  }
}

export function enquiryWhatsAppMessage(p: {
  product: string;
  name?: string;
  quantity?: string;
  message?: string;
}): string {
  const lines = [`Hi, I am interested in ${p.product}.`];
  if (p.name?.trim()) lines.push(`Name: ${p.name.trim()}`);
  if (p.quantity?.trim()) lines.push(`Quantity: ${p.quantity.trim()}`);
  if (p.message?.trim()) lines.push(`Requirement: ${p.message.trim()}`);
  lines.push("Please share the details and quotation.");
  return lines.join("\n");
}

export const enquiryWhatsAppLink = (p: Parameters<typeof enquiryWhatsAppMessage>[0]) =>
  waLink(enquiryWhatsAppMessage(p));
