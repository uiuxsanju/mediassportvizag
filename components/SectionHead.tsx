export default function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <>
      <span className="inline-flex items-center font-bold text-xs tracking-[0.14em] uppercase bg-brand text-black px-3.5 py-1.5 rounded-full mb-4">
        {eyebrow}
      </span>
      <h2 className="font-heading font-extrabold text-[clamp(1.8rem,4vw,2.7rem)] mb-3">{title}</h2>
      {sub && <p className="text-neutral-500 max-w-[640px] mb-11">{sub}</p>}
    </>
  );
}
