"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { portfolio, portfolioCats } from "@/lib/data";
import { X } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<null | { img: string; title: string }>(null);
  const items = portfolio.filter((p) => filter === "All" || p.cat === filter);

  return (
    <section id="portfolio" className="pt-20 pb-20 bg-[#FFF9DB]">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead eyebrow="Portfolio" title="Recent Work" sub="A glimpse of projects delivered across India." />
        <div className="flex flex-wrap gap-2.5 mb-8">
          {portfolioCats.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm border transition ${
                filter === c ? "bg-brand border-brand" : "bg-white border-black/10 hover:bg-brand hover:border-brand"
              }`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {items.map((p) => (
            <button key={p.title} onClick={() => setLightbox(p)}
              className="group relative rounded-2xl overflow-hidden shadow-soft text-left">
              <div className="relative aspect-[4/3]">
                <Image src={p.img} alt={p.title} fill sizes="(max-width:768px) 100vw, 300px"
                  className="object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 pt-8 bg-gradient-to-t from-black/85 to-transparent text-white">
                <small className="block text-brand font-semibold text-[0.7rem] tracking-widest uppercase">{p.cat}</small>
                <span className="font-heading font-bold text-sm">{p.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-[5%]"
          onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="absolute top-5 right-6 w-11 h-11 rounded-full bg-brand grid place-items-center" aria-label="Close">
            <X size={20} />
          </button>
          <div className="relative w-full max-w-3xl aspect-[4/3]">
            <Image src={lightbox.img} alt={lightbox.title} fill className="object-contain rounded-xl" />
          </div>
        </div>
      )}
    </section>
  );
}
