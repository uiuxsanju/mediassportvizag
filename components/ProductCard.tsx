"use client";
import type { Product, Service } from "@/lib/data";
import { categoryFeatures, productBadge } from "@/lib/catalog-meta";
import { useEnquiry } from "@/lib/enquiry";
import { BadgePill, CardImage, FeatureChips, WishButton, cardShell, secondaryBtn } from "./CardParts";

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
    <article className={cardShell}>
      <div className="relative m-2.5 mb-0 aspect-square rounded-[18px] bg-white ring-1 ring-black/[0.05] overflow-hidden">
        {badge && <BadgePill badge={badge} />}
        <WishButton active={isWished(key)} onToggle={() => toggleWish(key)} label={p.name} />
        <button
          type="button"
          onClick={onView}
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full cursor-pointer"
        >
          <CardImage src={p.img || category.img} alt="" fit="contain" />
        </button>
      </div>

      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
        <h3 className="font-heading font-bold text-[1rem] leading-snug line-clamp-2">{p.name}</h3>
        <FeatureChips keys={categoryFeatures(category.id)} className="mt-3" max={2} />

        <div className="mt-auto pt-4">
          <div className="border-t border-black/[0.06] pt-4 flex gap-2">
            <button type="button" className={`${secondaryBtn} w-full`} onClick={onView}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
