"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import SectionHead from "./SectionHead";
import { PHONE, waLink } from "@/lib/data";
import { enquiryWhatsAppLink, normalizeMobile, submitEnquiry } from "@/lib/enquiry-client";

const info = [
  { icon: MapPin, t: "Address", d: "MEDIASPOT – Day and night hospital road, Rama Talkies Rd, Srinagar, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016" },
  { icon: Phone, t: "Phone", d: "+91 9133910782" },
  { icon: Mail, t: "Email", d: "mediaspot.ads@gmail.com" },
  { icon: Clock, t: "Working Hours", d: "Mon – Sat · 9:30 AM – 8:30 PM" },
];

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", service: "Sign Board", msg: "" });
  const [state, setState] = useState<"idle" | "sending" | "done" | "fallback">("idle");
  const [err, setErr] = useState("");

  const waHref = enquiryWhatsAppLink({ product: f.service, name: f.name, message: f.msg });

  const valid = () => {
    if (f.name.trim().length < 2 || !normalizeMobile(f.phone)) {
      setErr("Please enter your name and a valid 10-digit mobile number.");
      return false;
    }
    setErr("");
    return true;
  };

  const submit = async () => {
    if (state === "sending" || !valid()) return;
    setState("sending");
    const r = await submitEnquiry({
      name: f.name.trim(),
      mobile: normalizeMobile(f.phone),
      product: f.service,
      category: "Contact form",
      message: f.msg.trim(),
      contactMethod: "WhatsApp",
    });
    setState(r.ok ? "done" : "fallback");
  };

  const inputCls = "w-full mt-1.5 px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/25";

  return (
    <section id="contact" className="pt-20 pb-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead eyebrow="Contact" title="Get Your Free Quote" />
        <div className="grid lg:grid-cols-2 gap-9">
          <div className="grid gap-4 content-start">
            {info.map((c) => (
              <div key={c.t} className="flex gap-4 items-start bg-white border border-black/10 rounded-xl p-4 shadow-soft">
                <span className="w-11 h-11 rounded-xl bg-brand grid place-items-center shrink-0">
                  <c.icon size={19} />
                </span>
                <div>
                  <b className="font-heading text-sm block">{c.t}</b>
                  <span className="text-sm text-neutral-500">{c.d}</span>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <iframe
                title="MEDIASPOT location map"
                loading="lazy"
                className="w-full h-[230px] border-0 block"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=17.7287507,83.3085606&z=16&output=embed"
              />
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=17.7287507,83.3085606"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block px-5 py-2.5 rounded-full font-semibold text-sm bg-brand border border-brand hover:opacity-90 transition"
            >
              Get Directions
            </a>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-7 shadow-soft grid gap-4 content-start">
            <div>
              <label htmlFor="name" className="font-semibold text-sm">Your Name *</label>
              <input id="name" className={inputCls} placeholder="Full name"
                value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="phone" className="font-semibold text-sm">Phone / WhatsApp *</label>
              <input id="phone" type="tel" className={inputCls} placeholder="+91 …"
                value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
            </div>
            <div>
              <label htmlFor="service" className="font-semibold text-sm">Service Needed</label>
              <select id="service" className={inputCls}
                value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })}>
                {["Sign Board", "3D Acrylic Letters", "SS / Gold Letters", "LED / Glow Sign Board",
                  "Inshop Branding", "Vinyl Pasting", "Corporate Gifts", "Photo Frames / Awards", "Other"]
                  .map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="msg" className="font-semibold text-sm">Message</label>
              <textarea id="msg" rows={4} className={inputCls} placeholder="Tell us about your requirement…"
                value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} />
            </div>
            {err && <p role="alert" className="text-sm text-red-600 -mb-1">{err}</p>}
            {state === "done" ? (
              <p role="status" className="flex items-start gap-2 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm p-4">
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                Thank you! Your enquiry has been submitted. Our team will contact you shortly.
              </p>
            ) : (
              <>
                {state === "fallback" && (
                  <p role="alert" className="rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm p-4">
                    We couldn&apos;t submit your enquiry online right now. Please send it on WhatsApp instead.
                  </p>
                )}
                <button type="button" onClick={submit} disabled={state === "sending"}
                  className="inline-flex items-center justify-center gap-2 bg-brand text-black font-heading font-bold py-3.5 rounded-full hover:bg-black hover:text-brand transition disabled:opacity-60">
                  {state === "sending" ? <><Loader2 size={16} className="animate-spin" /> Submitting…</> : <><Send size={16} /> Send Enquiry</>}
                </button>
                <a href={waHref} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => { if (!valid()) e.preventDefault(); }}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#128C4A] font-heading font-bold py-3 rounded-full hover:bg-[#25D366] hover:text-white transition">
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
