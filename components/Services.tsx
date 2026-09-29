"use client";
import SectionHead from "./SectionHead";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="pt-20 pb-24 bg-white">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead
          eyebrow="Services"
          title="Everything Your Brand Needs"
          sub="Explore our services and send an enquiry — we'll share details and a quotation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} priority={i < 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
