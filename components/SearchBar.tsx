"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { services, products } from "@/lib/data";
import { Search, X, ImageOff } from "lucide-react";

type Result = {
  type: "category" | "product";
  name: string;
  img?: string;
  categoryId: string;
  categoryName: string;
};

function ResultThumb({ src, alt }: { src?: string; alt: string }) {
  const [error, setError] = useState(false);
  if (!src || error) {
    return (
      <div className="w-10 h-10 rounded-lg bg-neutral-100 grid place-items-center shrink-0">
        <ImageOff size={14} className="text-neutral-400" />
      </div>
    );
  }
  return (
    <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-neutral-100">
      <Image src={src} alt={alt} fill sizes="40px" className="object-cover" onError={() => setError(true)} />
    </div>
  );
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);

  const allItems: Result[] = useMemo(() => {
    const catResults: Result[] = services.map((s) => ({
      type: "category",
      name: s.name,
      img: s.img,
      categoryId: s.id,
      categoryName: s.name,
    }));

    const productResults: Result[] = Object.entries(products).flatMap(([catId, list]) => {
      const cat = services.find((s) => s.id === catId);
      return list.map((p) => ({
        type: "product" as const,
        name: p.name,
        img: p.img ?? cat?.img,
        categoryId: catId,
        categoryName: cat?.name ?? catId,
      }));
    });

    return [...catResults, ...productResults];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allItems
      .filter((item) => item.name.toLowerCase().includes(q) || item.categoryName.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, allItems]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const goToCategory = (categoryId: string) => {
    setOpen(false);
    setQuery("");
    router.push(`/services/${categoryId}`);
  };

  return (
    <div ref={boxRef} className="relative w-full max-w-[280px]">
      <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 border border-transparent focus-within:border-brand transition">
        <Search size={16} className="text-neutral-500 shrink-0" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search products..."
          className="bg-transparent outline-none text-sm w-full placeholder:text-neutral-400"
        />
        {query && (
          <button onClick={() => setQuery("")} aria-label="Clear search">
            <X size={14} className="text-neutral-400 hover:text-black" />
          </button>
        )}
      </div>

      {open && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-black/5 max-h-96 overflow-y-auto z-50">
          {results.length === 0 ? (
            <p className="text-sm text-neutral-400 px-4 py-3">No results found.</p>
          ) : (
            results.map((r, i) => (
              <button
                key={`${r.categoryId}-${r.name}-${i}`}
                onClick={() => goToCategory(r.categoryId)}
                className="w-full text-left px-3 py-2.5 hover:bg-neutral-50 flex items-center gap-3 border-b border-black/5 last:border-0"
              >
                <ResultThumb src={r.img} alt={r.name} />
                <div className="min-w-0">
                  <span className="text-sm font-medium block truncate">{r.name}</span>
                  <span className="text-xs text-neutral-400">{r.categoryName}</span>
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}