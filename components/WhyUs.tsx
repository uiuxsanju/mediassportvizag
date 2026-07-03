"use client";
import { motion } from "framer-motion";
import { Star, Palette, IndianRupee, Zap, HardHat, Truck, Handshake } from "lucide-react";
import SectionHead from "./SectionHead";

const items = [
  { icon: Star, t: "Premium Quality", d: "Top-grade materials & finishing on every job." },
  { icon: Palette, t: "Creative Designs", d: "In-house designers craft unique brand looks." },
  { icon: IndianRupee, t: "Affordable Pricing", d: "Honest quotes with no hidden costs." },
  { icon: Zap, t: "Quick Delivery", d: "Fast production & on-time installation." },
  { icon: HardHat, t: "Experienced Team", d: "12+ years of hands-on branding expertise." },
  { icon: Truck, t: "All India Shipping", d: "Safe packing, doorstep delivery anywhere." },
  { icon: Handshake, t: "100% Satisfaction", d: "We don't stop until you're happy." },
];

export default function WhyUs() {
  return (
    <section id="why" className="pt-20 pb-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead eyebrow="Why MEDIASPOT" title="Built On Quality & Trust" />
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(230px,1fr))]">
          {items.map((w, i) => (
            <motion.div key={w.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: (i % 4) * 0.07 }}
              className="bg-white border border-black/10 rounded-2xl p-6 shadow-soft hover:shadow-lift hover:-translate-y-1 transition">
              <span className="w-13 h-13 p-3.5 rounded-2xl bg-brand inline-grid place-items-center mb-4">
                <w.icon size={24} />
              </span>
              <h3 className="font-heading font-bold">{w.t}</h3>
              <p className="text-sm text-neutral-500 mt-1">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
