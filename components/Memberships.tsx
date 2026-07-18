import Image from "next/image";

const memberLogos = [
  { name: "Rotary International", src: "/memberships/rotary.webp" },
  { name: "Sign Printing Industries Association", src: "/memberships/spia.webp" },
  { name: "BNI", src: "/memberships/bni.webp" },
  { name: "Government e Marketplace (GeM)", src: "/memberships/gem.webp" },
  { name: "Make In India", src: "/memberships/make-in-india.webp" },
  { name: "KSSIA", src: "/memberships/kssia.webp" },
];

// Duplicate the list so the CSS animation loops seamlessly
const loop = [...memberLogos, ...memberLogos];

export default function Memberships() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="mx-auto w-[92%] max-w-[1180px] text-center mb-10">
        <h2 className="font-heading font-bold text-2xl md:text-3xl">
          Stronger Together: Our Memberships
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="mx-4 shrink-0 w-[220px] h-[130px] rounded-xl border border-black/10 bg-white grid place-items-center p-6"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="220px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}