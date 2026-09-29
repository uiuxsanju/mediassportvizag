"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import EnquiryModal, { EnquiryTarget } from "@/components/EnquiryModal";

type Ctx = {
  /** Opens the enquiry form. Pass a product/service to pre-fill it (read-only in the form). */
  openEnquiry: (target?: EnquiryTarget) => void;
  isWished: (key: string) => boolean;
  toggleWish: (key: string) => void;
};

const EnquiryCtx = createContext<Ctx | null>(null);
const WISH_KEY = "mediaspot-wishlist";

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState<EnquiryTarget>({});
  const [wish, setWish] = useState<Set<string>>(new Set());

  // Wishlist is a per-visitor convenience only — safe to fail silently.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(WISH_KEY);
      if (raw) setWish(new Set(JSON.parse(raw) as string[]));
    } catch {}
  }, []);

  const toggleWish = useCallback((key: string) => {
    setWish((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      try {
        localStorage.setItem(WISH_KEY, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }, []);

  const openEnquiry = useCallback((t?: EnquiryTarget) => {
    setTarget(t ?? {});
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const value = useMemo<Ctx>(
    () => ({ openEnquiry, isWished: (k) => wish.has(k), toggleWish }),
    [openEnquiry, wish, toggleWish]
  );

  return (
    <EnquiryCtx.Provider value={value}>
      {children}
      <EnquiryModal open={open} target={target} onClose={close} />
    </EnquiryCtx.Provider>
  );
}

export const useEnquiry = () => {
  const c = useContext(EnquiryCtx);
  if (!c) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return c;
};
