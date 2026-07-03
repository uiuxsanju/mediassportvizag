import Image from "next/image";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { PHONE, waLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-300 pt-16 pb-6">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-9 mb-10">
          <div>
            <span className="inline-flex bg-brand rounded-xl p-2">
              <Image src="/logo.jpeg" alt="MEDIASPOT logo" width={120} height={90} className="rounded-lg" />
            </span>
            <p className="text-sm mt-4">
              Creative branding & advertising solutions. Premium quality, delivered all over India.
            </p>
            <div className="flex gap-2.5 mt-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/mediaspot_vizag?igsh=d2lqcWVjYzZpYjl6", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: MessageCircle, href: waLink("Hi MEDIASPOT!"), label: "WhatsApp" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-brand text-black grid place-items-center hover:scale-105 transition">
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-brand mb-4">Quick Links</h4>
            {[["Home", "#home"], ["Services", "#services"], ["Portfolio", "#portfolio"], ["About Us", "#about"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={h} href={h} className="block py-1 text-sm hover:text-brand transition">{l}</a>
            ))}
          </div>
          <div>
            <h4 className="font-heading text-brand mb-4">Services</h4>
            {["Sign Boards", "3D Acrylic Letters", "SS & Gold Letters", "Inshop Branding", "Corporate Gifts"].map((l) => (
              <a key={l} href="#services" className="block py-1 text-sm hover:text-brand transition">{l}</a>
            ))}
          </div>
          <div>
            <h4 className="font-heading text-brand mb-4">Contact</h4>
            <a href={`tel:+${PHONE}`} className="block py-1 text-sm hover:text-brand transition">+91 9133910782</a>
            <a href="mailto:mediaspot.ads@gmail.com" className="block py-1 text-sm hover:text-brand transition">mediaspot.ads@gmail.com</a>
            <a href="#contact" className="block py-1 text-sm hover:text-brand transition">Visakhapatnam, AP</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 text-center text-xs">
          © {new Date().getFullYear()} MEDIASPOT – Advertising Hub. All rights reserved. · Website by{" "}
          <span className="text-brand">Sanju Tech · Vizag</span>
        </div>
      </div>
    </footer>
  );
}
