# MEDIASPOT – Advertising Hub (Next.js)

Next.js 15 + React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons.

## Setup
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Before launch — replace these
1. **Phone number** → `lib/data.ts` → `PHONE = "919XXXXXXXXX"` (drives ALL call buttons, WhatsApp links & cart checkout)
2. **Address / email** → `components/Contact.tsx` and `components/Footer.tsx`
3. **Map** → `components/Contact.tsx` iframe `src` (paste real Google Maps embed link)
4. **Prices** → `lib/data.ts` services array (indicative starting prices shown in cart)
5. **Images** → currently Unsplash CDN placeholders in `lib/data.ts`. Replace `img` URLs with real shop photos (put in `/public/photos/` and use `/photos/name.jpg`)
6. **Social links** → `components/Footer.tsx`

## Cart + WhatsApp orders
- "Add to Cart" on every service card → cart drawer (top-right cart icon)
- Quantity +/- , remove, estimated total in ₹
- "Order on WhatsApp" opens WhatsApp with the full itemised order pre-filled
- No backend needed — perfect for Hostinger/Vercel

## Deploy
- **Vercel**: import repo → auto-detects Next.js → done
- **Hostinger static**: add `output: "export"` in `next.config.mjs`, set `images: { unoptimized: true }`, run `npm run build`, upload the `out/` folder
# mediassportvizag
