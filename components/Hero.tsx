"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { PHONE, waLink } from "@/lib/data";

const TRADES = [
  "Sign Boards",
  "LED Light Frames",
  "3D Letters",
  "SS Letters",
  "Caricature Standees",
  "Gold Letters",
  "Key Chains",
  "Photo Frames",
  "Awards",
  "Vinyl Pasting",
  "Corporate Gifts",
];

const STATS = [
  { v: "15", l: "Service lines" },
  { v: "10+", l: "Years in Vizag" },
  { v: "All India", l: "Delivery" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-black/12" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.6) 0%, rgba(0,0,0,.2) 50%, rgba(0,0,0,.05) 100%)",
        }}
      />
      <div className="pointer-events-none absolute -top-28 -right-24 w-[420px] h-[420px] rounded-full bg-brand blur-[110px] opacity-10 z-[1]" />
      <div className="pointer-events-none absolute -bottom-32 -left-28 w-[340px] h-[340px] rounded-full bg-brand blur-[110px] opacity-10 z-[1]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ── left ───────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5"
              style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,.7))" }}
            >
              <span className="h-px w-8 bg-brand" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">
                Advertising Hub · Visakhapatnam
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 font-heading text-[17vw] font-extrabold leading-[0.82] tracking-[-0.045em] sm:text-[10vw] lg:text-[7rem]"
              style={{ filter: "drop-shadow(0 4px 18px rgba(0,0,0,.75))" }}
            >
              <span className="block text-white">MEDIA</span>
              <span className="block text-brand" style={{ textShadow: "0 0 42px rgba(255,213,0,.35)" }}>
                SPOT
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-9 max-w-md border-l-2 border-brand pl-5 text-lg leading-relaxed text-white/90"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,.8))" }}
            >
              We design, fabricate and install the signage your shopfront is judged by —
              one LED nameboard or a full highway hoarding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href={waLink("Hi MEDIASPOT! I need a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-brand px-8 py-4 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(255,213,0,.4)]"
              >
                <MessageCircle size={17} />
                Get a quote
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:+${PHONE}`}
                className="inline-flex items-center gap-2.5 border border-white/25 px-8 py-4 text-sm font-bold text-white transition hover:border-brand hover:text-brand"
              >
                <Phone size={16} /> Call now
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-14 flex flex-wrap border-t border-white/10 pt-8"
            >
              {STATS.map((s, i) => (
                <div
                  key={s.l}
                  className={`pr-8 mr-8 mb-4 ${i !== STATS.length - 1 ? "border-r border-white/10" : ""}`}
                >
                  <dt className="font-heading text-3xl font-extrabold leading-none text-brand">
                    {s.v}
                  </dt>
                  <dd className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45 whitespace-nowrap">
                    {s.l}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── right: logo card ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 0.9, 0.28, 1] }}
            className="bg-brand rounded-2xl p-6 grid place-items-center"
          >
            <Image
              src="/logo-mark.jpg"
              alt="MEDIASPOT logo"
              width={420}
              height={155}
              className="rounded-xl w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* ── trades ticker, like an LED display ───────────── */}
      <div className="relative z-10 overflow-hidden border-y border-white/10 bg-black py-4">
        <div className="flex w-max animate-[ms-ticker_38s_linear_infinite] gap-10 whitespace-nowrap">
          {[...TRADES, ...TRADES].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.22em] text-white/40"
            >
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes ms-ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}