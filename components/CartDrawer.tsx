"use client";
import Image from "next/image";
import { X, Trash2, Minus, Plus, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function CartDrawer() {
  const { items, open, setOpen, remove, setQty, clear, checkoutUrl } = useCart();

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/50 z-[60]" onClick={() => setOpen(false)} />}
      <aside className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[70] shadow-lift flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}>
        <div className="flex items-center justify-between p-5 bg-black text-brand">
          <h3 className="font-heading font-bold text-lg">Your Enquiry ({items.length})</h3>
          <button onClick={() => setOpen(false)} aria-label="Close cart"
            className="w-9 h-9 rounded-full bg-brand text-black grid place-items-center">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 grid gap-3 content-start">
          {items.length === 0 && (
            <p className="text-neutral-400 text-sm text-center mt-10">
              Cart is empty. Add services from the Services section to send a WhatsApp enquiry.
            </p>
          )}
          {items.map((i) => (
            <div key={i.service.id} className="flex gap-3 border border-black/10 rounded-xl p-3 items-center">
              <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-black">
                <Image src={i.service.img} alt={i.service.name} fill sizes="64px" className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <b className="font-heading text-sm block truncate">{i.service.name}</b>

                <div className="flex items-center gap-2 mt-1.5">
                  <button onClick={() => setQty(i.service.id, i.qty - 1)} aria-label="Decrease"
                    className="w-6 h-6 rounded-full bg-black/5 grid place-items-center"><Minus size={12} /></button>
                  <span className="font-bold text-sm w-5 text-center">{i.qty}</span>
                  <button onClick={() => setQty(i.service.id, i.qty + 1)} aria-label="Increase"
                    className="w-6 h-6 rounded-full bg-brand grid place-items-center"><Plus size={12} /></button>
                </div>
              </div>
              <div className="text-right">
                <button onClick={() => remove(i.service.id)} aria-label={`Remove ${i.service.name}`}
                  className="text-red-500"><Trash2 size={15} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 border-t border-black/10 grid gap-3">
          <p className="text-[0.7rem] text-neutral-400">
            * Pricing shared on WhatsApp based on size, material & design.
          </p>
          <a href={items.length ? checkoutUrl() : undefined} target="_blank" rel="noopener noreferrer"
            onClick={(e) => { if (!items.length) e.preventDefault(); }}
            className={`inline-flex items-center justify-center gap-2 font-heading font-bold py-3.5 rounded-full transition ${
              items.length ? "bg-[#25D366] text-white hover:brightness-110" : "bg-black/10 text-black/30 cursor-not-allowed"
            }`}>
            <MessageCircle size={18} /> Enquire on WhatsApp
          </a>
          {items.length > 0 && (
            <button onClick={clear} className="text-sm text-neutral-400 hover:text-red-500 transition">Clear cart</button>
          )}
        </div>
      </aside>
    </>
  );
}