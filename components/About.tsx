import Image from "next/image";
import SectionHead from "./SectionHead";

const chips = ["Premium Materials", "In-house Production", "Custom Designs", "Pan-India Delivery"];

export default function About() {
  return (
    <section id="about" className="pt-20 pb-20">
      <div className="mx-auto w-[92%] max-w-[1180px] grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead eyebrow="About Us" title="Your Complete Branding Partner" />
          <p className="text-neutral-500 mb-4 -mt-6">
            MEDIASPOT is a complete branding and advertising solutions company specializing in
            premium signboards, in-shop branding, customized gifts, acrylic products, corporate
            branding, photo frames, awards and promotional materials.
          </p>
          <p className="text-neutral-500 mb-5">
            With an experienced team and modern production, we deliver creative, high-quality
            branding that makes businesses stand out — shipping all over India.
          </p>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="bg-[#FFF9DB] border border-black/10 px-3.5 py-1.5 rounded-full text-sm font-semibold">
                ✔ {c}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-brand rounded-2xl p-8 grid place-items-center">
          <Image src="/logo.jpeg" alt="MEDIASPOT – Advertising Hub" width={440} height={330} className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
