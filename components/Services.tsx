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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-neutral-400">
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
      sizes="(max-width:768px) 50vw, 280px"
      className="object-contain p-3 group-hover:scale-105 transition duration-500"
      onError={() => setError(true)}
    />
  );
}

export default function Services() {
  return (
    <section id="services" className="pt-20 pb-24 bg-white">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead
          eyebrow="Services"
          title="Everything Your Brand Needs"
          sub="Pick a category to explore products and add to cart."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-16 sm:gap-y-20">
          {services.map((s) => (
            <Link key={s.id} href={`/services/${s.id}`} className="group block">
              <div className="relative">
                <div className="relative aspect-square bg-white rounded-[28px] overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <CatImage src={s.img} alt={s.name} />
                </div>
                <div className="absolute left-1/2 bottom-0 w-full -translate-x-1/2 translate-y-1/2 flex justify-center px-2">
                  <span className="bg-white shadow-soft rounded-full px-5 py-3 font-heading font-bold text-sm text-center leading-tight group-hover:bg-brand transition">
                    {s.name}
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