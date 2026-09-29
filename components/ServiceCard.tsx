"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { categoryFeatures, categoryMeta } from "@/lib/catalog-meta";
import { useEnquiry } from "@/lib/enquiry";
import { BadgePill, CardImage, FeatureChips, WishButton, cardShell, secondaryBtn } from "./CardParts";

export default function ServiceCard({ s, priority = false }: { s: Service; priority?: boolean }) {
  const { isWished, toggleWish } = useEnquiry();
  const badge = categoryMeta(s.id).badge;
  const key = `svc-${s.id}`;
  const href = `/services/${s.id}`;

  return (
    <article className={cardShell}>
      <div className="relative m-2.5 mb-0 aspect-[4/3] rounded-[18px] bg-white ring-1 ring-black/[0.05] overflow-hidden">
        {badge && <BadgePill badge={badge} />}
        <WishButton active={isWished(key)} onToggle={() => toggleWish(key)} label={s.name} />
        <Link href={href} tabIndex={-1} aria-hidden="true" className="absolute inset-0">
          <CardImage src={s.img} alt="" fit="contain" priority={priority} />
                  </Link>
      </div>

      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
        <h3 className="font-heading font-bold text-[1.05rem] leading-snug">
          <Link href={href} className="flex items-start justify-between gap-3">
            <span className="line-clamp-2">{s.name}</span>
            <ArrowUpRight
              size={18}
              className="shrink-0 mt-0.5 text-neutral-400 transition duration-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </h3>
        <FeatureChips keys={categoryFeatures(s.id)} className="mt-3" max={2} />

        <div className="mt-auto pt-4">
          <div className="border-t border-black/[0.06] pt-4 flex gap-2">
            <Link href={href} className={`${secondaryBtn} w-full`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
