"use client";
import type { Product, Service } from "@/lib/data";
import { categoryFeatures, productBadge, productBlurb } from "@/lib/catalog-meta";
import { useEnquiry } from "@/lib/enquiry";
import { BadgePill, CardImage, FeatureChips, WishButton, primaryBtn, secondaryBtn } from "./CardParts";

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
  const { openEnquiry, isWished, toggleWish } = useEnquiry();
  const key = `${category.id}-${slugify(p.name)}`;
  const badge = productBadge(p);

  return (
    <article className="group flex flex-col bg-white rounded-3xl border border-black/[0.06] shadow-soft overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-within:shadow-lift">
      <div className="relative aspect-square bg-neutral-50 overflow-hidden">
        {badge && <BadgePill badge={badge} />}
        <WishButton active={isWished(key)} onToggle={() => toggleWish(key)} label={p.name} />
        <button
          type="button"
          onClick={onView}
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full cursor-pointer"
        >
          <CardImage src={p.img || category.img} alt="" />
        </button>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading font-bold text-[1rem] leading-snug min-h-[2.6em]">{p.name}</h3>
        <p className="mt-1.5 text-sm text-neutral-500 line-clamp-2 min-h-[2.6em]">{productBlurb(p, category)}</p>
        <FeatureChips keys={categoryFeatures(category.id)} className="mt-3" />

        <div className="mt-auto pt-5 flex gap-2">
          <button
            type="button"
            className={primaryBtn}
            onClick={() => openEnquiry({ product: p.name, category: category.name })}
          >
            Send Enquiry
          </button>
          <button type="button" className={secondaryBtn} onClick={onView}>
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
