"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { services, products } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { ArrowLeft, Heart, Plus, Check, ImageOff } from "lucide-react";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function ProductImage({ src, alt }: { src: string; alt: string }) {
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
      sizes="(max-width:768px) 50vw, 240px"
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const category = services.find((s) => s.id === slug);
  const list = products[slug] ?? [];
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [addedKeys, setAddedKeys] = useState<Set<string>>(new Set());
  const { add } = useCart();

  const toggleWish = (key: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const handleAdd = (key: string, item: Parameters<typeof add>[0]) => {
    add(item);
    setAddedKeys((prev) => new Set(prev).add(key));
    setTimeout(() => {
      setAddedKeys((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }, 1200);
  };

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-500">Category not found.</p>
        <Link href="/#services" className="font-semibold text-brand underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black mb-6"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl">{category.name}</h1>
          <p className="text-neutral-500 mt-2">{category.desc}</p>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
          {list.map((p) => {
            const key = `${category.id}-${slugify(p.name)}`;
            const isWished = wishlist.has(key);
            return (
              <div key={key} className="bg-white rounded-xl overflow-hidden shadow-soft border border-black/5">
                <div className="relative aspect-square">
                  <ProductImage src={p.img || category.img} alt={p.name} />
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
                  <h3 className="font-semibold text-sm leading-snug min-h-[2.4em]">{p.name}</h3>
                  <button
                    onClick={() =>
                      handleAdd(key, {
                        id: key,
                        name: p.name,
                        desc: category.name,
                        img: p.img || category.img,
                        images: [p.img || category.img],
                        price: p.price,
                        unit: "",
                      })
                    }
                    disabled={addedKeys.has(key)}
                    className={`w-full mt-2.5 flex items-center justify-center gap-1.5 text-xs font-semibold rounded-full px-3 py-2 transition ${
                      addedKeys.has(key)
                        ? "bg-green-600 text-white"
                        : "bg-black text-brand hover:bg-brand hover:text-black"
                    }`}
                  >
                    {addedKeys.has(key) ? (
                      <>
                        <Check size={13} /> Added
                      </>
                    ) : (
                      <>
                        <Plus size={13} /> Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}