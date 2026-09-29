"use client";
import type { Product, Service } from "@/lib/data";
import { productBadge } from "@/lib/catalog-meta";
import { useEnquiry } from "@/lib/enquiry";
import { BadgePill, CardImage, WishButton, cardShell } from "./CardParts";

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function ProductCard({
  p,
  category,
  onView,
}: {
  p: Product;
  category: Service;
  onView: () => void;
}) {
  const { isWished, toggleWish } = useEnquiry();
  const key = `${category.id}-${slugify(p.name)}`;
  const badge = productBadge(p);

  return (
    <article className={`${cardShell} relative`}>
      <div className="pointer-events-none absolute inset-x-2.5 top-2.5 h-16 z-10 [&>*]:pointer-events-auto">
        {badge && <BadgePill badge={badge} />}
        <WishButton active={isWished(key)} onToggle={() => toggleWish(key)} label={p.name} />
      </div>
      <button
        type="button"
        onClick={onView}
        aria-label={`View ${p.name} details`}
        className="flex flex-col flex-1 text-left rounded-[24px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
      >
        <div className="relative w-full aspect-square">
          <div className="absolute inset-2.5 bottom-0 rounded-[18px] bg-white ring-1 ring-black/[0.05] overflow-hidden">
            <CardImage src={p.img || category.img} alt="" fit="contain" />
          </div>
        </div>
        <h3 className="px-5 pt-4 pb-5 font-cond font-medium text-[1.1rem] text-neutral-800 leading-snug line-clamp-2">{p.name}</h3>
      </button>
    </article>
  );
}
