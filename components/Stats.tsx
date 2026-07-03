"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { n: 5000, label: "Happy Clients" },
  { n: 12, label: "Years Experience" },
  { n: 10000, label: "Projects Completed" },
  { n: 0, label: "Delivery Network", text: "All India" },
];

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        ob.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / 1600, 1);
          setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [target]);
  return <b ref={ref}>{val.toLocaleString("en-IN")}+</b>;
}

export default function Stats() {
  return (
    <div className="bg-brand py-13 pt-12 pb-12">
      <div className="mx-auto w-[92%] max-w-[1180px] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="font-heading">
            <span className="font-black text-black text-[clamp(1.9rem,4vw,2.8rem)] block">
              {s.text ? <b>{s.text}</b> : <Counter target={s.n} />}
            </span>
            <span className="font-body font-semibold text-sm text-neutral-900">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
