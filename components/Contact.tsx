"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SectionHead from "./SectionHead";
import { PHONE, waLink } from "@/lib/data";

const info = [
  { icon: MapPin, t: "Address", d: "MEDIASPOT – Advertising Hub, Main Road, Visakhapatnam, Andhra Pradesh" },
  { icon: Phone, t: "Phone", d: "+91 9133910782" },
  { icon: Mail, t: "Email", d: "mediaspot.ads@gmail.com" },
  { icon: Clock, t: "Working Hours", d: "Mon – Sat · 9:30 AM – 8:30 PM" },
];

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", service: "Sign Board", msg: "" });

  const send = () => {
    if (!f.name.trim() || !f.phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }
    const msg = `Hi MEDIASPOT! 👋\n\n*Name:* ${f.name}\n*Phone:* ${f.phone}\n*Service:* ${f.service}\n*Message:* ${f.msg || "—"}`;
    window.open(waLink(msg), "_blank");
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
                src="https://www.google.com/maps?q=Visakhapatnam,Andhra+Pradesh&output=embed"
              />
            </div>
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
            <button onClick={send}
              className="inline-flex items-center justify-center gap-2 bg-brand text-black font-heading font-bold py-3.5 rounded-full hover:bg-black hover:text-brand transition">
              <Send size={16} /> Send via WhatsApp
            </button>
            <p className="text-xs text-neutral-400 -mt-2">Opens WhatsApp with your details pre-filled — nothing is stored on the site.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
