"use client";
import Link from "next/link";
import type { Service } from "@/lib/data";
import { categoryFeatures, categoryMeta } from "@/lib/catalog-meta";
import { useEnquiry } from "@/lib/enquiry";
import { BadgePill, CardImage, FeatureChips, WishButton, primaryBtn, secondaryBtn } from "./CardParts";

export default function ServiceCard({ s, priority = false }: { s: Service; priority?: boolean }) {
  const { openEnquiry, isWished, toggleWish } = useEnquiry();
  const badge = categoryMeta(s.id).badge;
  const key = `svc-${s.id}`;

  return (
    <article className="group flex flex-col bg-white rounded-3xl border border-black/[0.06] shadow-soft overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-within:shadow-lift">
      <div className="relative aspect-[4/3] bg-neutral-50 overflow-hidden">
        {badge && <BadgePill badge={badge} />}
        <WishButton active={isWished(key)} onToggle={() => toggleWish(key)} label={s.name} />
        <Link href={`/services/${s.id}`} tabIndex={-1} aria-hidden="true" className="absolute inset-0">
          <CardImage src={s.img} alt="" fit="contain" priority={priority} />
        </Link>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading font-bold text-[1.05rem] leading-snug">
          <Link href={`/services/${s.id}`} className="hover:underline underline-offset-4">
            {s.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm text-neutral-500 line-clamp-2 min-h-[2.6em]">{s.desc}</p>
        <FeatureChips keys={categoryFeatures(s.id)} className="mt-3" />

        <div className="mt-auto pt-5 flex gap-2">
          <button
            type="button"
            className={primaryBtn}
            onClick={() => openEnquiry({ product: s.name, category: s.name })}
          >
            Send Enquiry
          </button>
          <Link href={`/services/${s.id}`} className={secondaryBtn}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
