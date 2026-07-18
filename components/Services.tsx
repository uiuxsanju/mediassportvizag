"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { services, products, type Service } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { X, Heart, Plus } from "lucide-react";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Services() {
  const [openCat, setOpenCat] = useState<Service | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const { add } = useCart();
  const catProducts = openCat ? products[openCat.id] ?? [] : [];

  const toggleWish = (key: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <section id="services" className="pt-20 pb-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead
          eyebrow="Services"
          title="Everything Your Brand Needs"
          sub="Pick a category to explore products and add to cart."
        />

        {/* Category grid */}
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setOpenCat(s)}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft text-left border border-black/5 hover:-translate-y-1 hover:shadow-lg transition"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  sizes="(max-width:768px) 100vw, 280px"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-base">{s.name}</h3>
                <p className="text-neutral-500 text-sm mt-1 line-clamp-2">{s.desc}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs font-semibold text-neutral-600">{s.unit}</span>
                  <span className="text-xs font-bold text-brand bg-black rounded-full px-3 py-1.5 group-hover:bg-brand group-hover:text-black transition">
                    View Products →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Products modal */}
      {openCat && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpenCat(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#FFF9DB] w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 bg-black text-white shrink-0">
              <div>
                <h3 className="font-heading font-bold text-lg text-brand">{openCat.name}</h3>
                <p className="text-white/60 text-xs">{openCat.desc}</p>
              </div>
              <button
                onClick={() => setOpenCat(null)}
                className="w-10 h-10 rounded-full bg-brand text-black grid place-items-center shrink-0"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Products grid */}
            <div className="overflow-y-auto p-5 grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]">
              {catProducts.map((p) => {
                const key = `${openCat.id}-${slugify(p.name)}`;
                const isWished = wishlist.has(key);
                return (
                  <div key={key} className="bg-white rounded-xl overflow-hidden shadow-soft border border-black/5 relative">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.img || openCat.img}
                        alt={p.name}
                        fill
                        sizes="220px"
                        className="object-cover"
                      />
                      {/* Wishlist heart */}
                      <button
                        onClick={() => toggleWish(key)}
                        aria-label="Wishlist"
                        className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 grid place-items-center shadow"
                      >
                        <Heart
                          size={16}
                          className={isWished ? "fill-red-500 text-red-500" : "text-neutral-500"}
                        />
                      </button>
                    </div>
                    <div className="p-3">
                      <h4 className="font-semibold text-sm leading-tight min-h-[2.2em]">{p.name}</h4>
                      <div className="flex items-center justify-between mt-2.5 gap-2">
                        <span className="font-bold text-sm">₹{p.price.toLocaleString("en-IN")}</span>
                        <button
                          onClick={() =>
                            add({
                              id: key,
                              name: p.name,
                              desc: openCat.name,
                              img: p.img || openCat.img,
                              price: p.price,
                              unit: "",
                            })
                          }
                          className="flex items-center gap-1 bg-black text-brand text-xs font-semibold rounded-full px-3 py-1.5 hover:bg-brand hover:text-black transition"
                        >
                          <Plus size={13} /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}