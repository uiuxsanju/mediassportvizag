"use client";
import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

const steps = [
  ["Requirement Discussion", "Understand your brand, size & budget."],
  ["Design Approval", "Digital mockup shared for confirmation."],
  ["Production", "Precision fabrication with premium materials."],
  ["Installation", "Professional on-site fitting team."],
  ["Delivery", "Safe shipping — all over India."],
];

export default function Process() {
  return (
    <section id="process" className="pt-20 pb-20 bg-black text-white">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead eyebrow="How We Work" title="Simple 5-Step Process" />
        <div className="relative grid md:grid-cols-5 gap-7 mt-4">
          <span className="hidden md:block absolute top-7 left-[8%] right-[8%] h-1 bg-brand rounded" />
          <span className="md:hidden absolute left-7 top-0 bottom-0 w-1 bg-brand rounded" />
          {steps.map(([t, d], i) => (
            <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="relative z-10 flex md:flex-col md:text-center gap-4 md:gap-0 items-start md:items-center">
              <span className="w-14 h-14 rounded-full bg-black border-4 border-brand text-brand font-heading font-extrabold grid place-items-center shrink-0 md:mb-4">
                {i + 1}
              </span>
              <div>
                <h3 className="font-heading font-bold text-[0.95rem]">{t}</h3>
                <p className="text-neutral-400 text-sm mt-1">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
