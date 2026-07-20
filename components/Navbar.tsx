"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { useCart } from "@/lib/cart";
import { PHONE } from "@/lib/data";
import SearchBar from "./SearchBar";

const links = [
  ["Home", "#home"], ["Services", "#services"],
  ["About", "#about"], ["Why Us", "#why"], ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: openCart } = useCart();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white shadow-soft h-[72px]">
      <div className="mx-auto w-[92%] max-w-[1180px] h-full flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="bg-brand rounded-xl p-1.5">
            <Image src="/logo.jpeg" alt="MEDIASPOT logo" width={46} height={36} className="rounded-md object-cover" priority />
          </span>
          <span className="leading-none hidden sm:block">
            <b className="font-heading font-black text-[1.05rem] block">MEDIASPOT</b>
            <span className="text-[0.55rem] tracking-[0.32em] font-bold">ADVERTISING HUB</span>
          </span>
        </a>

        <ul className="hidden lg:flex gap-6 shrink-0">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="font-semibold text-sm relative py-1 group">
                {label}
                <span className="absolute left-0 -bottom-0.5 h-[3px] w-0 bg-brand rounded group-hover:w-full transition-all" />
              </a>
            </li>
          ))}
        </ul>

        {/* Search — desktop */}
        <div className="hidden md:block flex-1 max-w-[240px]">
          <SearchBar />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a href={`tel:+${PHONE}`} className="hidden sm:flex items-center gap-2 bg-black text-brand font-heading font-bold text-sm px-4 py-2.5 rounded-full hover:bg-hoverink transition">
            <Phone size={15} /> Call Now
          </a>
          <button onClick={() => openCart(true)} aria-label="Open cart"
            className="relative w-11 h-11 rounded-full bg-black text-brand grid place-items-center hover:scale-105 transition">
            <ShoppingCart size={18} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand text-black text-[0.65rem] font-black w-5 h-5 rounded-full grid place-items-center">
                {count}
              </span>
            )}
          </button>
          <button className="lg:hidden w-11 h-11 rounded-full bg-brand grid place-items-center" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white shadow-lift px-[6%] pb-5">
          {/* Search — mobile, shown inside the mobile menu */}
          <div className="md:hidden py-3">
            <SearchBar />
          </div>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="block py-3 font-semibold border-b border-black/5">{label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}