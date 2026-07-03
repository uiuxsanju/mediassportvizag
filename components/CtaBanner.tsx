import { Phone, MessageCircle } from "lucide-react";
import { PHONE, waLink } from "@/lib/data";

export default function CtaBanner() {
  return (
    <section className="bg-black text-center pt-20 pb-20 relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-brand blur-[100px] opacity-25" />
      <div className="mx-auto w-[92%] max-w-[1180px] relative">
        <h2 className="font-heading font-black text-brand text-[clamp(1.7rem,4.5vw,3rem)] max-w-[820px] mx-auto mb-7">
          Need Branding for Your Business?<br />Let&apos;s Build Your Brand Together.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:+${PHONE}`} className="inline-flex items-center gap-2 bg-brand text-black font-heading font-bold px-7 py-3.5 rounded-full hover:bg-white transition">
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
