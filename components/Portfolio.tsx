"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { portfolio, portfolioCats } from "@/lib/data";
import { X, ArrowUpRight, ImageOff } from "lucide-react";

type Item = { img: string; title: string; cat: string };

function Thumb({ item, className }: { item: Item; className: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div className={`${className} overflow-hidden bg-black/10 grid place-items-center`}>
        <ImageOff size={16} className="text-black/30" />
      </div>
    );
  }
  return (
    <div className={`${className} overflow-hidden bg-black/5`}>
      <Image
        src={item.img}
        alt={item.title}
        fill
        sizes="(max-width:1024px) 100vw, 780px"
        className="object-cover"
        onError={() => setBroken(true)}
      />
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<null | Item>(null);
  const items = portfolio.filter((p) => filter === "All" || p.cat === filter);
  const current = items[Math.min(active, items.length - 1)] ?? items[0];

  const handleFilter = (c: string) => {
    setFilter(c);
    setActive(0);
  };

  return (
    <section id="portfolio" className="pt-20 pb-20 bg-[#FFF9DB]">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead eyebrow="Portfolio" title="Recent Work" sub="A glimpse of projects delivered across India." />

        <div className="flex flex-wrap gap-2.5 mb-10">
          {portfolioCats.map((c) => (
            <button key={c} onClick={() => handleFilter(c)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm border transition ${
                filter === c ? "bg-brand border-brand" : "bg-white border-black/10 hover:bg-brand hover:border-brand"
              }`}>
              {c}
            </button>
          ))}
        </div>

        {current && (
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* featured preview */}
            <button
              onClick={() => setLightbox(current)}
              className="group relative rounded-3xl overflow-hidden shadow-soft aspect-[16/11] max-h-[380px] text-left"
            >
              <Thumb key={current.title} item={current} className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between text-white gap-4">
                <div className="min-w-0">
                  <small className="block text-brand font-semibold text-[0.7rem] tracking-widest uppercase mb-1">
                    {current.cat}
                  </small>
                  <span className="font-heading font-bold text-2xl block truncate">{current.title}</span>
                </div>
                <span className="w-11 h-11 shrink-0 rounded-full bg-brand grid place-items-center group-hover:rotate-45 transition">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </button>

            {/* project list / selector */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:max-h-[380px] lg:pr-1 lg:overflow-y-auto">
              {items.map((p, i) => {
                const isActive = current.title === p.title;
                return (
                  <button
                    key={p.title}
                    onClick={() => setActive(i)}
                    className={`shrink-0 w-[220px] lg:w-full flex items-center gap-3 rounded-xl p-2.5 text-left border transition ${
                      isActive ? "bg-white border-brand shadow-soft" : "border-transparent hover:bg-white/60"
                    }`}
                  >
                    <Thumb item={p} className="relative w-14 h-14 rounded-lg shrink-0" />
                    <div className="min-w-0">
                      <small className="block text-black/40 font-semibold text-[0.65rem] tracking-widest uppercase truncate">
                        {p.cat}
                      </small>
                      <span className="font-heading font-bold text-sm truncate block">{p.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-[5%]"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-5 right-6 w-11 h-11 rounded-full bg-brand grid place-items-center"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="relative w-full max-w-3xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Thumb key={lightbox.title} item={lightbox} className="absolute inset-0 rounded-xl" />
          </div>
        </div>
      )}
    </section>
  );
}