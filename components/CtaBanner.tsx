"use client";
import { Phone, MessageCircle, Send } from "lucide-react";
import { useEnquiry } from "@/lib/enquiry";
import { PHONE, waLink } from "@/lib/data";

export default function CtaBanner() {
  const { openEnquiry } = useEnquiry();
  return (
    <section className="bg-black text-center pt-20 pb-20 relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-brand blur-[100px] opacity-25" />
      <div className="mx-auto w-[92%] max-w-[1180px] relative">
        <h2 className="font-heading font-black text-brand text-[clamp(1.7rem,4.5vw,3rem)] max-w-[820px] mx-auto mb-7">
          Need Branding for Your Business?<br />Let&apos;s Build Your Brand Together.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button type="button" onClick={() => openEnquiry()}
            className="inline-flex items-center gap-2 bg-brand text-black font-heading font-bold px-7 py-3.5 rounded-full hover:bg-white transition">
            <Send size={16} /> Send Enquiry
          </button>
          <a href={`tel:+${PHONE}`} className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-heading font-bold px-7 py-3.5 rounded-full hover:bg-white hover:text-black transition">
            <Phone size={16} /> Call Now
          </a>
          <a href={waLink("Hi MEDIASPOT! I need branding for my business.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-brand text-brand font-heading font-bold px-7 py-3.5 rounded-full hover:bg-brand hover:text-black transition">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
