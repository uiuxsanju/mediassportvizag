"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHead from "./SectionHead";
import { services } from "@/lib/data";
import { ImageOff } from "lucide-react";

function CatImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-neutral-100 text-neutral-400">
        <ImageOff size={22} />
        <span className="text-[10px] font-medium">Image coming soon</span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width:768px) 100vw, 280px"
      className="object-cover group-hover:scale-105 transition duration-500"
      onError={() => setError(true)}
    />
  );
}

export default function Services() {
  return (
    <section id="services" className="pt-20 pb-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead
          eyebrow="Services"
          title="Everything Your Brand Needs"
          sub="Pick a category to explore products and add to cart."
        />

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
          {services.map((s) => (
            <Link
              key={s.id}
              href={`/services/${s.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft text-left border border-black/5 hover:-translate-y-1 hover:shadow-lg transition block"
            >
              <div className="relative aspect-[4/3]">
                <CatImage src={s.img} alt={s.name} />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-base">{s.name}</h3>
                <p className="text-neutral-500 text-sm mt-1 line-clamp-2">{s.desc}</p>
                <div className="flex justify-end mt-3">
                  <span className="text-xs font-bold text-brand bg-black rounded-full px-3 py-1.5 group-hover:bg-brand group-hover:text-black transition">
                    View Products →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}