"use client";
import { Package } from "lucide-react";
import { useEnquiry } from "@/lib/enquiry";

export default function BulkOrder() {
  const { openEnquiry } = useEnquiry();
  return (
    <section id="bulk-orders" className="pb-24 bg-white">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div className="relative overflow-hidden rounded-3xl bg-black text-white px-6 py-12 md:px-14 md:py-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-brand blur-[110px] opacity-25 pointer-events-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand text-black text-xs font-bold px-3 py-1">
              <Package size={13} /> Bulk Orders
            </span>
            <h2 className="font-heading font-black text-brand text-[clamp(1.6rem,4vw,2.4rem)] leading-tight mt-4">
              Need awards, gifts, ID cards or signage in bulk?
            </h2>
            <p className="text-white/70 mt-3 max-w-[560px]">
              Schools, hospitals, offices and events — tell us what you need and how many, and we&apos;ll share the
              details and a quotation.
            </p>
          </div>
          <div className="relative grid gap-3 md:min-w-[240px]">
            <button
              type="button"
              onClick={() => openEnquiry({ product: "Bulk Order", category: "Bulk Order" })}
              className="rounded-full bg-brand text-black font-heading font-bold px-8 py-3.5 hover:bg-white transition"
            >
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
