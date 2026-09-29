"use client";
import { useEffect, useId, useRef, useState } from "react";
import { X, CheckCircle2, Loader2, AlertTriangle, Phone } from "lucide-react";
import { PHONE } from "@/lib/data";
import { services } from "@/lib/data";
import {
  ContactMethod,
  normalizeMobile,
  submitEnquiry,
} from "@/lib/enquiry-client";

export type EnquiryTarget = { product?: string; category?: string };

type Form = {
  name: string;
  mobile: string;
  email: string;
  company: string;
  product: string;
  quantity: string;
  message: string;
  contactMethod: ContactMethod;
  website: string; // honeypot
};

type Errors = Partial<Record<"name" | "mobile" | "email", string>>;
type Status = "idle" | "submitting" | "success" | "fallback";

const GENERAL = "General Enquiry";

const emptyForm = (product: string): Form => ({
  name: "",
  mobile: "",
  email: "",
  company: "",
  product,
  quantity: "",
  message: "",
  contactMethod: "Phone Call",
  website: "",
});

const inputCls =
  "w-full mt-1.5 px-4 py-3 rounded-xl border border-black/15 bg-white text-sm placeholder:text-neutral-400 focus:outline-none focus:border-black focus:ring-4 focus:ring-brand/40 aria-[invalid=true]:border-red-500";

export default function EnquiryModal({
  open,
  target,
  onClose,
}: {
  open: boolean;
  target: EnquiryTarget;
  onClose: () => void;
}) {
  const uid = useId();
  const id = (s: string) => `${uid}-${s}`;
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  const fixedProduct = !!target.product;
  const [form, setForm] = useState<Form>(emptyForm(target.product ?? GENERAL));
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  // Reset each time the modal opens (or the selected product changes)
  useEffect(() => {
    if (open) {
      setForm(emptyForm(target.product ?? GENERAL));
      setErrors({});
      setStatus("idle");
    }
  }, [open, target.product]);

  // Scroll lock, Esc to close, focus management + focus trap
  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("input:not([readonly]):not([tabindex='-1'])")?.focus();
    }, 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const f = dialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), input:not([disabled]):not([tabindex='-1']), select, textarea"
      );
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      restoreRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  const validate = (): boolean => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!normalizeMobile(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter a valid email address.";
    setErrors(e);
    if (e.name) document.getElementById(id("name"))?.focus();
    else if (e.mobile) document.getElementById(id("mobile"))?.focus();
    else if (e.email) document.getElementById(id("email"))?.focus();
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (status === "submitting" || !validate()) return;
    setStatus("submitting");
    const res = await submitEnquiry({
      name: form.name.trim(),
      mobile: normalizeMobile(form.mobile),
      email: form.email.trim(),
      company: form.company.trim(),
      product: form.product,
      category: target.category,
      quantity: form.quantity.trim(),
      message: form.message.trim(),
      contactMethod: form.contactMethod,
      website: form.website,
    });
    if (res.ok) setStatus("success");
    else if (res.reason === "invalid") {
      setStatus("idle");
      setErrors({ mobile: res.message || "Please check your details and try again." });
    } else setStatus("fallback");
  };


  return (
    <div
      className="fixed inset-0 z-[90] bg-black/60 flex items-end sm:items-center justify-center sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={id("title")}
        className="bg-white w-full sm:max-w-[560px] max-h-[94vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-lift"
      >
        <div className="sticky top-0 z-10 bg-black text-brand flex items-center justify-between px-6 py-4">
          <h2 id={id("title")} className="font-heading font-bold text-lg">
            {status === "success" ? "Enquiry Submitted" : "Send Enquiry"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="w-9 h-9 rounded-full bg-brand text-black grid place-items-center hover:scale-105 transition"
          >
            <X size={18} />
          </button>
        </div>

        {status === "success" ? (
          <div className="px-6 py-10 text-center grid gap-4 justify-items-center" role="status">
            <CheckCircle2 size={56} className="text-green-600" />
            <p className="font-heading font-bold text-xl">Thank you!</p>
            <p className="text-neutral-600 max-w-[380px]">
              Your enquiry has been submitted. Our team will contact you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 bg-black text-brand font-heading font-bold px-8 py-3 rounded-full hover:bg-brand hover:text-black transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="p-6 grid gap-4">
            {status === "fallback" && (
              <div
                role="alert"
                className="flex gap-3 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900"
              >
                <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                <div className="grid gap-2">
                  <p>
                    We couldn&apos;t submit your enquiry online right now. Please call us and we&apos;ll
                    take your enquiry directly.
                  </p>
                  <a
                    href={`tel:+${PHONE}`}
                    className="inline-flex w-fit items-center gap-2 bg-black text-brand font-semibold px-4 py-2 rounded-full hover:bg-brand hover:text-black transition"
                  >
                    <Phone size={16} /> Call +91 91339 10782
                  </a>
                </div>
              </div>
            )}

            <div>
              <label htmlFor={id("name")} className="font-semibold text-sm">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id={id("name")}
                className={inputCls}
                autoComplete="name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? id("name-err") : undefined}
                placeholder="Your full name"
              />
              {errors.name && (
                <p id={id("name-err")} className="text-xs text-red-600 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={id("mobile")} className="font-semibold text-sm">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id={id("mobile")}
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                className={inputCls}
                value={form.mobile}
                onChange={(e) => set("mobile", e.target.value)}
                aria-invalid={!!errors.mobile}
                aria-describedby={errors.mobile ? id("mobile-err") : undefined}
                placeholder="10-digit mobile number"
              />
              {errors.mobile && (
                <p id={id("mobile-err")} className="text-xs text-red-600 mt-1">
                  {errors.mobile}
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={id("email")} className="font-semibold text-sm">
                  Email
                </label>
                <input
                  id={id("email")}
                  type="email"
                  autoComplete="email"
                  className={inputCls}
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? id("email-err") : undefined}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id={id("email-err")} className="text-xs text-red-600 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor={id("company")} className="font-semibold text-sm">
                  Company / Business Name
                </label>
                <input
                  id={id("company")}
                  className={inputCls}
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Optional"
                />
              </div>
            </div>

            <div>
              <label htmlFor={id("product")} className="font-semibold text-sm">
                Product / Service Required
              </label>
              {fixedProduct ? (
                <input
                  id={id("product")}
                  className={`${inputCls} bg-neutral-100 font-semibold cursor-not-allowed`}
                  value={form.product}
                  readOnly
                  tabIndex={-1}
                />
              ) : (
                <select
                  id={id("product")}
                  className={inputCls}
                  value={form.product}
                  onChange={(e) => set("product", e.target.value)}
                >
                  <option>{GENERAL}</option>
                  {services.map((s) => (
                    <option key={s.id}>{s.name}</option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label htmlFor={id("qty")} className="font-semibold text-sm">
                Quantity
              </label>
              <input
                id={id("qty")}
                className={inputCls}
                inputMode="numeric"
                value={form.quantity}
                onChange={(e) => set("quantity", e.target.value)}
                placeholder="e.g. 1, 25, 100"
              />
            </div>

            <div>
              <label htmlFor={id("msg")} className="font-semibold text-sm">
                Message / Requirements
              </label>
              <textarea
                id={id("msg")}
                rows={4}
                className={inputCls}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Size, colours, text to print, deadline…"
              />
            </div>

            {/* Honeypot — hidden from people, bots fill it */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => set("website", e.target.value)}
                />
              </label>
            </div>

            <div className="grid gap-3 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 bg-black text-brand font-heading font-bold py-3.5 rounded-full hover:bg-brand hover:text-black transition disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={17} className="animate-spin" /> Submitting…
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-sm font-semibold text-neutral-500 hover:text-black py-1 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
