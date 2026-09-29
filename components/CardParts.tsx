"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  ImageOff,
  Palette,
  BadgeCheck,
  Truck,
  Ruler,
  Package,
  ShieldCheck,
  Gift,
  type LucideIcon,
} from "lucide-react";
import { FEATURE_LABEL, FeatureKey, Badge, badgeClass } from "@/lib/catalog-meta";

const ICONS: Record<FeatureKey, LucideIcon> = {
  custom: Palette,
  quality: BadgeCheck,
  delivery: Truck,
  size: Ruler,
  bulk: Package,
  durable: ShieldCheck,
  gift: Gift,
};

export function FeatureChips({
  keys,
  className = "",
  max,
}: {
  keys: FeatureKey[];
  className?: string;
  max?: number;
}) {
  const list = max ? keys.slice(0, max) : keys;
  return (
    <ul className={`flex gap-1.5 ${max ? "flex-nowrap overflow-hidden" : "flex-wrap"} ${className}`}>
      {list.map((k) => {
        const Icon = ICONS[k];
        return (
          <li key={k} className="flex items-center gap-1 shrink-0 whitespace-nowrap rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700">
            <Icon size={12} className="text-black shrink-0" aria-hidden="true" />
            {FEATURE_LABEL[k]}
          </li>
        );
      })}
    </ul>
  );
}

export function BadgePill({ badge }: { badge: Badge }) {
  return (
    <span
      className={`absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider shadow-sm ${badgeClass(
        badge
      )}`}
    >
      {badge}
    </span>
  );
}

export function WishButton({
  active,
  onToggle,
  label,
}: {
  active: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      aria-label={active ? `Remove ${label} from favourites` : `Add ${label} to favourites`}
      className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center shadow-sm hover:scale-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
    >
      <Heart size={16} className={active ? "fill-red-500 text-red-500" : "text-neutral-500"} />
    </button>
  );
}

export function CardImage({
  src,
  alt,
  fit = "cover",
  sizes = "(max-width:640px) 92vw, (max-width:1024px) 45vw, 280px",
  priority = false,
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  sizes?: string;
  priority?: boolean;
}) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-neutral-100 text-neutral-400">
        <ImageOff size={24} />
        <span className="text-[11px] font-medium">Image coming soon</span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`${fit === "contain" ? "object-contain p-2" : "object-cover"} transition duration-500 group-hover:scale-[1.04]`}
      onError={() => setError(true)}
    />
  );
}

export const cardShell =
  "group flex flex-col h-full bg-white rounded-[24px] ring-1 ring-black/[0.06] shadow-[0_2px_14px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_-14px_rgba(0,0,0,0.22)] focus-within:shadow-[0_20px_44px_-14px_rgba(0,0,0,0.22)]";

export const primaryBtn =
  "flex-1 whitespace-nowrap rounded-full bg-black text-brand text-[13px] font-heading font-bold px-3 py-2.5 text-center shadow-sm hover:bg-brand hover:text-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";
export const secondaryBtn =
  "flex-1 whitespace-nowrap rounded-full border border-black/20 bg-white text-black text-[13px] font-heading font-semibold px-3 py-2.5 text-center hover:border-black hover:bg-neutral-50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";
