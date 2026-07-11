"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { Service, waLink } from "./data";

export type CartItem = { service: Service; qty: number };

type CartCtx = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (s: Service) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  checkoutUrl: () => string;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = (s: Service) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.service.id === s.id);
      if (ex)
        return prev.map((i) =>
          i.service.id === s.id ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { service: s, qty: 1 }];
    });
    setOpen(true);
  };

  const remove = (id: string) =>
    setItems((prev) => prev.filter((i) => i.service.id !== id));

  const setQty = (id: string, qty: number) =>
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.service.id !== id)
        : prev.map((i) => (i.service.id === id ? { ...i, qty } : i))
    );

  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  const checkoutUrl = () => {
    const lines = items
      .map((i, n) => `${n + 1}. ${i.service.name} × ${i.qty}`)
      .join("\n");
    const msg = `Hi MEDIASPOT! 👋 I would like an enquiry for:\n\n${lines}\n\nPlease share pricing & delivery details.`;
    return waLink(msg);
  };

  return (
    <Ctx.Provider
      value={{ items, open, setOpen, add, remove, setQty, clear, count, checkoutUrl }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};