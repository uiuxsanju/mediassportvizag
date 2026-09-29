"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { services, products, Product } from "@/lib/data";
import { categoryFeatures } from "@/lib/catalog-meta";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { enquiryWhatsAppLink } from "@/lib/enquiry-client";
import ProductCard, { slugify } from "@/components/ProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";
import { FeatureChips } from "@/components/CardParts";

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const category = services.find((s) => s.id === slug);
  const list = products[slug] ?? [];
  const [viewing, setViewing] = useState<Product | null>(null);

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
    <main className="pt-28 pb-20 bg-neutral-50">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black mb-6"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <header className="mb-10 bg-white rounded-3xl border border-black/[0.06] shadow-soft p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-[620px]">
            <h1 className="font-heading font-bold text-3xl md:text-4xl">{category.name}</h1>
            <p className="text-neutral-500 mt-2">{category.desc}</p>
            <FeatureChips keys={categoryFeatures(category.id)} className="mt-4" />
            <p className="mt-3 text-sm">
              <span className="text-neutral-500">Pricing: </span>
              <b>Price on enquiry</b>
            </p>
          </div>
          <div className="grid gap-3 md:min-w-[230px]">
            <a
              href={enquiryWhatsAppLink({ product: category.name })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand text-black font-heading font-bold text-[15px] px-8 py-3.5 shadow-sm hover:bg-black hover:text-brand transition"
            >
              <WhatsAppIcon size={19} /> Enquire on WhatsApp
            </a>
          </div>
        </header>

        {list.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-black/20 p-10 text-center grid gap-3 justify-items-center">
            <p className="font-heading font-bold text-lg">Custom {category.name} made to your requirement</p>
            <p className="text-neutral-500 max-w-[460px] text-sm">
              Tell us what you need — size, design and quantity — and we&apos;ll share the details and a quotation.
            </p>
            <a
              href={enquiryWhatsAppLink({ product: category.name })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand text-black font-heading font-bold text-[15px] px-8 py-3.5 shadow-sm hover:bg-black hover:text-brand transition"
            >
              <WhatsAppIcon size={19} /> Enquire on WhatsApp
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {list.map((p) => (
              <ProductCard
                key={`${category.id}-${slugify(p.name)}`}
                p={p}
                category={category}
                onView={() => setViewing(p)}
              />
            ))}
          </div>
        )}
      </div>

      <ProductDetailModal product={viewing} category={category} onClose={() => setViewing(null)} />
    </main>
  );
}
