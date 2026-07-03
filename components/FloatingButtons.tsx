import { Phone, MessageCircle } from "lucide-react";
import { PHONE, waLink } from "@/lib/data";

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-5 grid gap-3 z-40">
      <a href={waLink("Hi MEDIASPOT! I need a quote.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lift hover:scale-110 transition">
        <MessageCircle size={26} />
      </a>
      <a href={`tel:+${PHONE}`} aria-label="Call now"
        className="w-14 h-14 rounded-full bg-black text-brand grid place-items-center shadow-lift hover:scale-110 transition">
        <Phone size={22} />
      </a>
    </div>
  );
}
