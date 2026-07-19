"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone, Lightbulb, Type, Gift, Sparkles } from "lucide-react";
import { PHONE } from "@/lib/data";

const cards = [
  { icon: Lightbulb, title: "Premium Sign Boards", sub: "ACP · Glow · LED · Flex" },
  { icon: Type, title: "3D Acrylic & SS Letters", sub: "Gold · PVC · Backlit" },
  { icon: Gift, title: "Corporate Gifts & Awards", sub: "Frames · Trophies · Clocks" },
  { icon: Sparkles, title: "Printing & Gifting & Advertising", sub: "Photo Frames · Keychains" },
];

export default function Hero() {
  return (
    <header id="home" className="min-h-screen bg-black text-white flex items-center relative overflow-hidden pt-28 pb-16">
      <div className="absolute -top-28 -right-24 w-[420px] h-[420px] rounded-full bg-brand blur-[90px] opacity-35" />
      <div className="absolute -bottom-32 -left-28 w-[340px] h-[340px] rounded-full bg-brand blur-[90px] opacity-20" />

      <div className="mx-auto w-[92%] max-w-[1180px] grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block bg-brand text-black font-heading font-extrabold text-xs tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
            ADVERTISING HUB
          </span>
          <h1 className="font-heading font-black text-[clamp(3rem,8vw,5.4rem)] leading-none">
            MEDIA<span className="text-brand">SPOT</span>
          </h1>
          <h2 className="font-heading font-bold text-brand text-[clamp(1.1rem,2.4vw,1.6rem)] mt-3 mb-4">
            Creative Branding & Advertising Solutions
          </h2>
          <p className="text-neutral-300 max-w-[560px] text-[0.97rem]">
            Sign Boards | LED Light Frames | 3D Letters | SS Letters | Caricature Standees | Gold
            Letters | Key Chains | Photo Frames | Awards | Vinyl Pasting | Corporate
            Gifts — Delivering All Over India.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#contact" className="inline-flex items-center gap-2 bg-brand text-black font-heading font-bold px-7 py-3.5 rounded-full hover:bg-white transition hover:-translate-y-0.5">
              Get Quote <ArrowRight size={16} />
            </a>
            <a href={`tel:+${PHONE}`} className="inline-flex items-center gap-2 border-2 border-white font-heading font-bold px-7 py-3.5 rounded-full hover:bg-white hover:text-black transition hover:-translate-y-0.5">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </motion.div>

        <div className="grid gap-4 max-w-[460px]">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="bg-brand rounded-2xl p-4 grid place-items-center">
            <Image src="/logo.jpeg" alt="MEDIASPOT – Advertising Hub logo" width={380} height={280} className="rounded-xl" priority />
          </motion.div>
          {cards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.15 }}
              className="bg-white/5 border border-brand/40 rounded-2xl p-4 backdrop-blur flex items-center gap-4">
              <span className="w-13 h-13 p-3 rounded-xl bg-brand text-black grid place-items-center shrink-0">
                <c.icon size={24} />
              </span>
              <div>
                <b className="font-heading block">{c.title}</b>
                <small className="text-neutral-400">{c.sub}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
}