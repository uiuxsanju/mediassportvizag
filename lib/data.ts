export const PHONE = "919133910782"; // WhatsApp & call number — replace before launch

export const waLink = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export type Service = {
  id: string;
  name: string;
  desc: string;
  img: string;
};

// NOTE: img paths match the ACTUAL filenames in /public/photo/
// (gold_bord.webp, botteles.webp, vinyl_paiting.webp — folder spellings)
export const services: Service[] = [
  { id: "sign-board", name: "Sign Boards", desc: "Durable flex & board signage that gets your shop noticed.", img: "/photo/media_visting.webp" },
  { id: "acp-board", name: "ACP Boards", desc: "Premium aluminium composite boards for modern storefronts.", img: "/photo/media_visting.webp" },
  { id: "glow-board", name: "Glow Sign Boards", desc: "Bright backlit boards visible day & night.", img: "/photo/media_visting.webp" },
  { id: "led-board", name: "LED Boards", desc: "Energy-efficient LED displays with high visibility.", img: "/photo/media_visting.webp" },
  { id: "3d-acrylic", name: "3D Acrylic Letters", desc: "Elegant raised acrylic lettering with LED options.", img: "/photo/3d.webp" },
  { id: "ss-letters", name: "SS Letters", desc: "Stainless steel letters — mirror & matte finish.", img: "/photo/media_visting.webp" },
  { id: "gold-letters", name: "Gold Letters", desc: "Luxury gold-finish lettering for high-end brands.", img: "/photo/gold_bord.webp" },
  { id: "pvc-letters", name: "PVC Letters", desc: "Budget-friendly PVC lettering, crisp & lightweight.", img: "/photo/pvcbord.webp" },
  { id: "vinyl", name: "Vinyl Pasting", desc: "High-quality vinyl prints for walls, glass & vehicles.", img: "/photo/vinyl_paiting.webp" },
  { id: "inshop", name: "Inshop Branding", desc: "Complete interior branding for retail spaces.", img: "/photo/download.webp" },
  { id: "glass", name: "Glass Branding", desc: "Frosted & printed glass films for offices.", img: "/photo/glassbrand.webp" },
  { id: "wall-graphics", name: "Wall Graphics", desc: "Custom wall wraps that transform your space.", img: "/photo/wall_grah.webp" },
  { id: "frames", name: "Photo Frames", desc: "Customized photo frames for gifts & décor.", img: "/photo/photo_frames.webp" },
  { id: "corp-gifts", name: "Corporate Gifts", desc: "Branded gifts your clients will remember.", img: "/photo/corperative_gifts.webp" },
  { id: "mini-albums", name: "Mini Albums", desc: "Compact personalized photo albums.", img: "/photo/Mini_Album.webp" },
  { id: "biz-cards", name: "Business Cards", desc: "Premium visiting cards with modern finishes.", img: "/photo/media_visting.webp" },
  { id: "invitations", name: "Customized Invitations", desc: "Designer invitations for every occasion.", img: "/photo/Wedding_cards.webp" },
  { id: "awards", name: "Awards & Trophies", desc: "Acrylic, crystal & metal awards, engraved.", img: "/photo/awards.webp" },
  { id: "clocks", name: "Acrylic Clocks", desc: "Personalized acrylic wall clocks.", img: "/photo/clocks.webp" },
  { id: "bottles", name: "Corporate Bottles", desc: "Custom-branded bottles & drinkware.", img: "/photo/botteles.webp" },
  { id: "wedding-gifts", name: "Wedding Gifts", desc: "Memorable customized wedding return gifts.", img: "/photo/wedding_gifts.webp" },
];

export const portfolioCats = [
  "All", "Sign Boards", "Branding", "Office Branding", "Retail Branding",
  "Corporate Gifts", "Acrylic Works", "3D Letters",
] as const;

// ─────────────────────────────────────────────────────────────
// PORTFOLIO — local .webp images from /public/portfolio/ folder
// Mee real project photos ni ee names tho public/portfolio/
// folder lo pettandi. Name exact ga match avvali.
// ─────────────────────────────────────────────────────────────
export const portfolio = [
  { title: "Textile Showroom Glow Board", cat: "Sign Boards", img: "/portfolio/media_visting.webp" },
  { title: "Restaurant ACP + 3D Letters", cat: "3D Letters", img: "/portfolio/restaurant-acp-3d.webp" },
  { title: "Hospital Reception Branding", cat: "Office Branding", img: "/portfolio/hospital-reception.webp" },
  { title: "Jewellery Store Gold Letters", cat: "Sign Boards", img: "/portfolio/jewellery-gold-letters.webp" },
  { title: "Supermarket Inshop Branding", cat: "Retail Branding", img: "/portfolio/supermarket-inshop.webp" },
  { title: "IT Office Glass Frosting", cat: "Office Branding", img: "/portfolio/office-glass-frosting.webp" },
  { title: "Diwali Corporate Gift Set", cat: "Corporate Gifts", img: "/portfolio/diwali-gift-set.webp" },
  { title: "Acrylic Wall Clock Series", cat: "Acrylic Works", img: "/portfolio/acrylic-wall-clock.webp" },
  { title: "Café Wall Graphics", cat: "Branding", img: "/portfolio/cafe-wall-graphics.webp" },
  { title: "Showroom SS Backlit Letters", cat: "3D Letters", img: "/portfolio/ss-backlit-letters.webp" },
  { title: "Crystal Awards — Annual Meet", cat: "Corporate Gifts", img: "/portfolio/crystal-awards.webp" },
  { title: "Boutique Retail Makeover", cat: "Retail Branding", img: "/portfolio/boutique-retail.webp" },
];

export const testimonials = [
  { name: "Ramesh Kumar", role: "Textile Showroom Owner", quote: "Excellent glow sign board! Quality is premium and the installation team was very professional." },
  { name: "Priya Sharma", role: "Café Owner", quote: "Our café wall graphics and 3D letters look stunning. Customers keep complimenting the branding!" },
  { name: "Venkat Rao", role: "Corporate HR Manager", quote: "Ordered 200+ customized gifts for our annual event. On-time delivery and beautiful packaging." },
  { name: "Anil Reddy", role: "Jewellery Store", quote: "Gold letters look rich and elegant — exactly what our showroom needed. Great pricing too." },
  { name: "Sneha Patel", role: "Boutique Owner", quote: "Complete inshop branding done in just one week. Creative team, smooth process, superb finish." },
];