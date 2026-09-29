"use client";
import { useEffect, useRef } from "react";
import { X, MessageCircle, Check } from "lucide-react";
import type { Product, Service } from "@/lib/data";
import {
  CUSTOMIZATION_OPTIONS,
  categoryFeatures,
  categoryOptions,
  productBadge,
  productBlurb,
} from "@/lib/catalog-meta";
import { enquiryWhatsAppLink } from "@/lib/enquiry-client";
import { useEnquiry } from "@/lib/enquiry";
import { BadgePill, CardImage, FeatureChips } from "./CardParts";

export default function ProductDetailModal({
  product,
  category,
  onClose,
}: {
  product: Product | null;
  category: Service;
  onClose: () => void;
}) {
  const { openEnquiry } = useEnquiry();
  const dialogRef = useRef<HTMLDivElement>(null);
  const open = !!product;

  useEffect(() => {
    if (!open) return;
    const restore = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => dialogRef.current?.querySelector<HTMLElement>("button")?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      // The enquiry form (z-90) sits above this dialog and handles its own Esc.
      if (e.key === "Escape" && !document.querySelector('[role="dialog"]:not([data-detail])')) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      restore?.focus?.();
    };
  }, [open, onClose]);

  if (!product) return null;

  const options = categoryOptions(category.id);
  const badge = productBadge(product);
  const price =
    product.price > 0
      ? `Starting from ₹${product.price.toLocaleString("en-IN")}`
      : category.price > 0
      ? category.unit.replace(/^from/i, "Starting from")
      : "Price on enquiry";

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/60 flex items-end sm:items-center justify-center sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        data-detail
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} details`}
        className="bg-white w-full sm:max-w-[960px] max-h-[94vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-lift grid md:grid-cols-2"
      >
        <div className="relative aspect-square md:aspect-auto md:min-h-[520px] bg-neutral-50 group">
          {badge && <BadgePill badge={badge} />}
          <CardImage
            src={product.img || category.img}
            alt={product.name}
            fit="contain"
            sizes="(max-width:768px) 100vw, 480px"
            priority
          />
        </div>

        <div className="p-6 md:p-8 grid gap-5 content-start relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black text-brand grid place-items-center hover:scale-105 transition"
          >
            <X size={18} />
          </button>

          <div className="pr-10">
            <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">{category.name}</p>
            <h2 className="font-heading font-bold text-2xl leading-tight mt-1">{product.name}</h2>
            <p className="text-neutral-600 mt-2 text-sm leading-relaxed">{productBlurb(product, category)}</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm mb-2">Features</h3>
            <FeatureChips keys={categoryFeatures(category.id)} />
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm mb-2">Available options</h3>
            {options.length ? (
              <ul className="flex flex-wrap gap-2">
                {options.map((o) => (
                  <li key={o} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold">
                    {o}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-neutral-600">Sizes, materials and finishes available — tell us your requirement.</p>
            )}
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm mb-2">Customization</h3>
            <ul className="grid gap-1.5">
              {CUSTOMIZATION_OPTIONS.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-neutral-700">
                  <Check size={14} className="text-green-600 shrink-0" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid grid-cols-2 gap-3 rounded-2xl bg-neutral-50 p-4 text-sm">
            <div>
              <dt className="text-neutral-500 text-xs">Pricing</dt>
              <dd className="font-bold mt-0.5">{price}</dd>
            </div>
            <div>
              <dt className="text-neutral-500 text-xs">Quantity</dt>
              <dd className="font-bold mt-0.5">As per your requirement</dd>
            </div>
          </dl>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => openEnquiry({ product: product.name, category: category.name })}
              className="rounded-full bg-black text-brand font-heading font-bold py-3.5 hover:bg-brand hover:text-black transition"
            >
              Send Enquiry
            </button>
            <a
              href={enquiryWhatsAppLink({ product: product.name })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] text-[#128C4A] font-heading font-bold py-3 hover:bg-[#25D366] hover:text-white transition"
            >
              <MessageCircle size={17} /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
