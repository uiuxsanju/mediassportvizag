"use client";
import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="pt-20 pb-20 bg-[#FFF9DB]">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead eyebrow="Testimonials" title="What Clients Say" />
        <div className="max-w-[760px] mx-auto">
          <div key={i} className="bg-white border border-black/10 rounded-2xl p-9 shadow-soft text-center animate-[fadeUp_.5s]">
            <div className="flex justify-center gap-1 text-brand mb-4" aria-label="5 star rating">
              {[...Array(5)].map((_, s) => <Star key={s} size={20} fill="currentColor" />)}
            </div>
            <p className="text-[1.02rem] mb-4">&ldquo;{t.quote}&rdquo;</p>
            <b className="font-heading">{t.name}</b>
            <small className="block text-neutral-500">{t.role}</small>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, x) => (
              <button key={x} onClick={() => setI(x)} aria-label={`Testimonial ${x + 1}`}
                className={`w-3 h-3 rounded-full transition ${x === i ? "bg-brand scale-125" : "bg-black/15"}`} />
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}
