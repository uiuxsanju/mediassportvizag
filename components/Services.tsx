"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import SectionHead from "./SectionHead";
import { services, waLink } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function Services() {
  const { add } = useCart();
  return (
    <section id="services" className="py-22 pt-20 pb-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead eyebrow="Our Services" title="Everything Your Brand Needs"
          sub="From signboards to corporate gifts — add to cart and order directly on WhatsApp." />
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(255px,1fr))]">
          {services.map((s, i) => (
            <motion.article key={s.id}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: (i % 4) * 0.06 }}
              className="group bg-white border border-black/10 rounded-2xl overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition relative">
              <div className="relative aspect-[16/10] bg-black overflow-hidden">
                <Image src={s.img} alt={s.name} fill sizes="(max-width:768px) 100vw, 280px"
                  className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading font-bold">{s.name}</h3>
                  <span className="text-xs font-bold bg-brand/25 px-2 py-1 rounded-full whitespace-nowrap">{s.unit}</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1 mb-3">{s.desc}</p>
                <div className="flex gap-2">
                  <button onClick={() => add(s)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-black text-brand font-heading font-bold text-sm py-2.5 rounded-full hover:bg-hoverink transition">
                    <Plus size={15} /> Add to Cart
                  </button>
                  <a href={waLink(`Hi MEDIASPOT! I want details about: ${s.name}`)} target="_blank" rel="noopener noreferrer"
                    aria-label={`Ask about ${s.name} on WhatsApp`}
                    className="w-10 h-10 rounded-full bg-brand grid place-items-center hover:scale-105 transition">
                    <MessageCircle size={17} />
                  </a>
                </div>
              </div>
              <span className="absolute bottom-0 inset-x-0 h-1 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
