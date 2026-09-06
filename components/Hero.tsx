"use client";

import { motion } from "framer-motion";
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

/* Swap these for your best four photos. */
const WORK = [
  { src: "/products/sign-board/signboard-led-travel-agency.webp", label: "LED Storefront", tall: true },
  { src: "/products/pvc-letters/pvc-cutout-letters.webp", label: "Cut Letters" },
  { src: "/products/exhibition-signage/exhibition-standee-lightbox.webp", label: "Lightbox" },
  { src: "/products/arch-gates/archgate-sports-event.webp", label: "Arch Gates" },
];

const STATS = [
  { v: "15", l: "Service lines" },
  { v: "10+", l: "Years in Vizag" },
  { v: "All India", l: "Delivery" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* background video — delete this block if you don't want it */}
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
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-black/60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.55) 50%, rgba(0,0,0,.2) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ── left ───────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5"
            >
              <span className="h-px w-8 bg-brand" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">
                Advertising Hub · Visakhapatnam
              </span>
            </motion.div>

            {/* MEDIA reads as cut letters, SPOT as backlit — the two things
                this shop actually sells, said in the wordmark itself. */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 font-heading text-[17vw] font-extrabold leading-[0.82] tracking-[-0.045em] sm:text-[10vw] lg:text-[7rem]"
            >
              <span
                className="block text-transparent"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,.85)" }}
              >
                MEDIA
              </span>
              <span className="block text-brand" style={{ textShadow: "0 0 42px rgba(255,213,0,.35)" }}>
                SPOT
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-9 max-w-md border-l-2 border-brand pl-5 text-lg leading-relaxed text-white/75"
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
              className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8"
            >
              {STATS.map((s) => (
                <div key={s.l}>
                  <dt className="font-heading text-3xl font-extrabold leading-none text-brand">
                    {s.v}
                  </dt>
                  <dd className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
                    {s.l}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── right: proof ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 0.9, 0.28, 1] }}
            className="grid grid-cols-2 gap-2.5"
          >
            {WORK.map((w, i) => (
              <figure
                key={w.src}
                className={`group relative overflow-hidden border border-white/10 transition hover:border-brand/50 ${
                  w.tall ? "row-span-2 h-[300px] lg:h-[420px]" : "h-[145px] lg:h-[205px]"
                }`}
              >
                {/* plain img keeps this independent of the Next image optimizer */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.src}
                  alt={w.label}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.06] group-hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <figcaption className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
                  {w.label}
                </figcaption>
              </figure>
            ))}
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