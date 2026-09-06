export const PHONE = "919133910782"; // WhatsApp & call number — replace before launch

export const waLink = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export type Service = {
  id: string;
  name: string;
  desc: string;
  img: string; // cover image (cards, thumbnails)
  images: string[]; // 5 images for the service card gallery/slider
  price: number;
  unit: string;
};

export type Product = {
  name: string;
  price: number;
  img?: string; // cover image — optional, lekapothe category image vastundi
  images?: string[]; // 5 gallery images, auto-derived from img
};

// ─────────────────────────────────────────────────────────────
// SERVICES — Mediaspot handbook lo unna 15 core services matrame.
// Images: /public/services-hub/ lo webp (handbook PDF nunchi crop chesinavi)
// ─────────────────────────────────────────────────────────────
// Prathi service ki 5 images — cover img + services-hub/<id>/1..5.webp gallery
const gallery = (id: string) => Array.from({ length: 5 }, (_, i) => `/services-hub/${id}/${i + 1}.webp`);

export const services: Service[] = [
  { id: "sign-board", name: "Sign Boards", desc: "Durable flex & board signage that gets your shop noticed.", img: "/services/sign-board.webp", images: gallery("sign-board"), price: 3500, unit: "from ₹3,500" },
  { id: "name-boards", name: "Name Boards", desc: "Custom name boards for homes, offices & shops — wood, acrylic & metal finishes.", img: "/services/name-boards.webp", images: gallery("name-boards"), price: 0, unit: "Get Quote" },
  { id: "inshop-branding", name: "In-Shop Branding", desc: "Complete interior branding — walls, counters & displays.", img: "/services/inshop-branding.webp", images: gallery("inshop-branding"), price: 0, unit: "Get Quote" },
  { id: "vehicle-wraps", name: "Vehicle Wrapping", desc: "Custom vinyl wraps for vans, trucks & fleet vehicles.", img: "/services/vehicle-wraps.webp", images: gallery("vehicle-wraps"), price: 4999, unit: "from ₹4,999" },
  { id: "ss-letters", name: "SS Letters", desc: "Stainless steel letters — mirror & matte finish.", img: "/services/ss-letters.webp", images: gallery("ss-letters"), price: 550, unit: "₹550 / letter" },
  { id: "pvc-letters", name: "PVC Letters", desc: "Lightweight PVC letters for indoor & outdoor signage.", img: "/services/pvc-letters.webp", images: gallery("pvc-letters"), price: 0, unit: "Get Quote" },
  { id: "road-show-vehicles", name: "Road Show Vehicle Branding", desc: "Full branding for promotional & road show vehicles.", img: "/services/road-show-vehicles.webp", images: gallery("road-show-vehicles"), price: 0, unit: "Get Quote" },
  { id: "frames", name: "Photo Frames", desc: "Customized photo frames for gifts & décor.", img: "/services/frames.webp", images: gallery("frames"), price: 499, unit: "from ₹499" },
  { id: "flex-printing", name: "Flex Printing", desc: "High-quality flex printing for banners & hoardings.", img: "/services/flex-printing.webp", images: gallery("flex-printing"), price: 0, unit: "Get Quote" },
  { id: "laser-cnc-cutting", name: "Laser & CNC Cutting", desc: "Precision laser & CNC cutting for signage components.", img: "/services/laser-cnc-cutting.webp", images: gallery("laser-cnc-cutting"), price: 0, unit: "Get Quote" },
  { id: "rollup-standee", name: "Roll-Up Standee", desc: "Portable roll-up standees for events & promotions.", img: "/services/rollup-standee.webp", images: gallery("rollup-standee"), price: 0, unit: "Get Quote" },
  { id: "exhibition-signage", name: "Exhibition & Event Signage", desc: "Complete signage solutions for exhibitions & events.", img: "/services/exhibition-signage.webp", images: gallery("exhibition-signage"), price: 0, unit: "Get Quote" },
  { id: "customized-gifts", name: "Customized Gifts", desc: "Personalized corporate & festival gifting solutions.", img: "/services/customized-gifts.webp", images: gallery("customized-gifts"), price: 0, unit: "Get Quote" },
  { id: "arch-gates", name: "Arch Gates", desc: "Decorative arch gates for events & inaugurations.", img: "/services/arch-gates.webp", images: gallery("arch-gates"), price: 0, unit: "Get Quote" },
];

// ─────────────────────────────────────────────────────────────
// PRODUCTS — real photos unna categories ki matrame.
// Kotha services (Get Quote unnavi) ki products ledu — category image fallback avthundi.
// ─────────────────────────────────────────────────────────────
// P("name", price, "/products/cat/base.webp") ->
// img: base.webp (cover), images: base-1.webp .. base-5.webp (gallery, 5 files)
const P = (name: string, price: number, img?: string): Product => {
  if (!img) return { name, price };
  const dot = img.lastIndexOf(".");
  const base = img.slice(0, dot);
  const ext = img.slice(dot);
  const images = Array.from({ length: 5 }, (_, i) => `${base}-${i + 1}${ext}`);
  return { name, price, img, images };
};

export const products: Record<string, Product[]> = {
  "sign-board": [
    P("LED Storefront Sign", 4500, "/products/sign-board/signboard-led-travel-agency.webp"),
    P("LED Shop Nameboard", 3500, "/products/sign-board/signboard-led-tea-shop.webp"),
    P("Backlit Wall Signage", 6500, "/products/sign-board/signboard-backlit-hospital.webp"),
    P("Multi-Brand LED Facade", 9999, "/products/sign-board/signboard-led-brand-facade.webp"),
  ],
 "inshop-branding": [
    P("Interior Wall Graphics", 3500, "/products/inshop-branding/inshop.webp"),
    P("Backlit Menu Board", 4500, "/products/inshop-branding/inshop-reception.webp"),
    P("Shelf Strips & Danglers", 1500, "/products/inshop-branding/inshop-shelf-strips-danglers.webp"),
    P("Window Vinyl Branding", 2500, "/products/inshop-branding/inshop-wall-graphics.webp"),
],
"pvc-letters": [
    P("PVC Cutout Letters", 2500, "/products/pvc-letters/pvc-cutout-letters.webp"),
    P("Colored PVC Nameboard", 3500, "/products/pvc-letters/pvc-colored-nameboard.webp"),
    P("PVC Foam Board Signage", 4500, "/products/pvc-letters/pvc-foam-board-signage.webp"),
],
"flex-printing": [
    P("Highway Unipole Hoarding", 25000, "/products/flex-printing/flex-highway-unipole.webp"),
    P("Hoarding Flex Print", 18000, "/products/flex-printing/flex-hoarding-billboard.webp"),
    P("Pole Kiosk Branding", 2500, "/products/flex-printing/flex-pole-kiosk-branding.webp"),
],
"laser-cnc-cutting": [
    P("Metal Sheet Laser Cutting", 4500, "/products/laser-cnc-cutting/lasercnc-metal-sheet-cutting.webp"),
    P("Metal Cutout Key Holder", 850, "/products/laser-cnc-cutting/lasercnc-metal-key-holder.webp"),
    P("Golden Acrylic Laser Cutting", 3500, "/products/laser-cnc-cutting/lasercnc-gold-sheet-cutting.webp"),
    P("3D Layered Wood Art", 1800, "/products/laser-cnc-cutting/lasercnc-3d-layered-art.webp"),
    P("Wood Engraved Gift Items", 450, "/products/laser-cnc-cutting/lasercnc-wood-engraved-items.webp"),
],
"rollup-standee": [
    P("Standard Roll-Up Standee", 1200, "/products/rollup-standee/rollup-standard-standee.webp"),
    P("Premium Roll-Up Standee", 2200, "/products/rollup-standee/rollup-premium-standee.webp"),
    P("Roll-Up Standee Set of 3", 3500, "/products/rollup-standee/rollup-multi-standee-set.webp"),
    P("Exhibition Standee Setup", 12000, "/products/rollup-standee/rollup-exhibition-standee-setup.webp"),
],
"road-show-vehicles": [
    P("Road Show Van Branding", 15000, "/products/road-show-vehicles/roadshow-van-branding.webp"),
    P("LED Display Vehicle", 25000, "/products/road-show-vehicles/roadshow-display.webp"),
    P("Auto Rickshaw Hood Branding", 3500, "/products/road-show-vehicles/roadshow-auto-hood.webp"),
    P("Mobile Canter Campaign Setup", 35000, "/products/road-show-vehicles/roadshow-canter-campaign.webp"),
],
"arch-gates": [
    P("Event Entrance Arch Gate", 12000, "/products/arch-gates/archgate-sports-event.webp"),
    P("Marathon Start Arch Gate", 15000, "/products/arch-gates/archgate-marathon-run.webp"),
    P("Kids Event Arch Gate", 9500, "/products/arch-gates/archgate-kids-event.webp"),
    P("Welcome Arch with Sponsor Panels", 18000, "/products/arch-gates/archgate-summit-welcome.webp"),
    P("Decorative Photo Arch", 8500, "/products/arch-gates/archgate-rainbow-photo-arch.webp"),
],
"customized-gifts": [
    P("Customised Photo Mugs", 350, "/products/customized-gifts/Customisedmugs.webp"),
    P("Corporate Gift Hampers", 1500, "/products/customized-gifts/corperative_gifts.webp"),
    P("Award Trophies", 850, "/products/customized-gifts/awards.webp"),
    P("Printed Water Bottles", 450, "/products/customized-gifts/botteles.webp"),
    P("Custom Printed Caps", 250, "/products/customized-gifts/capss.webp"),
    P("Personalized Wall Clocks", 650, "/products/customized-gifts/clocks1.webp"),
    P("Customised Invitations", 120, "/products/customized-gifts/Customised%20invitations.webp"),
    P("Heart Couple Photo Keychain", 199, "/products/customized-gifts/heart-couple-photo-keychain.webp"),
    P("Motivational Strap Keychain", 149, "/products/customized-gifts/motivational-strap-keychain.webp"),
    P("Table Top Photo Stand", 399, "/products/customized-gifts/tabletop.webp"),
    P("Assorted Gift Items", 299, "/products/customized-gifts/gits.webp"),
],
"exhibition-signage": [
    P("Exhibition Standee Lightbox", 15000, "/products/exhibition-signage/exhibition-standee-lightbox.webp"),
    P("Backlit Lightbox Wall Display", 8500, "/products/exhibition-signage/exhibition-backlit-lightbox-wall.webp"),
    P("Backlit Poster Box", 6500, "/products/exhibition-signage/exhibition-backlit-poster-box.webp"),
    P("Poster Lightbox Frames", 4500, "/products/exhibition-signage/exhibition-poster-lightbox-frames.webp"),
    P("Backlit Menu Board", 12000, "/products/exhibition-signage/exhibition-menu-board-backlit.webp"),
    P("Event Selfie Booth Frame", 6500, "/products/exhibition-signage/exhibition-selfie-booth-frame.webp"),
],
  "vehicle-wraps": [
    P("Delivery Van Full Wrap", 12999, "/products/vehicle-wraps/vanwrap-navy-mamma8.webp"),
    P("Business Van Wrap", 9999, "/products/vehicle-wraps/vanwrap-purple-petshop.webp"),
    P("Tourist Van Branding", 11999, "/products/vehicle-wraps/vanwrap-blue-komfortour.webp"),
    P("Food Truck Full Wrap", 14999, "/products/vehicle-wraps/vanwrap-green-mito-chips.webp"),
    P("Delivery Truck Wrap", 13999, "/products/vehicle-wraps/vanwrap-pink-bakery.webp"),
    P("Fleet Truck Branding (Set)", 24999, "/products/vehicle-wraps/vanwrap-green-dairy-sangare.webp"),
    P("Brand Van Wrap", 10999, "/products/vehicle-wraps/vanwrap-yellow-lays.webp"),
    P("Travel Van Branding", 11499, "/products/vehicle-wraps/vanwrap-green-fittravel.webp"),
    P("Logistics Van Wrap", 10999, "/products/vehicle-wraps/vanwrap-orange-bold-logistics.webp"),
    P("Food Industry Van Wrap", 12499, "/products/vehicle-wraps/vanwrap-red-giovanni-food.webp"),
    P("Clinic Fleet Wrap (Pair)", 15999, "/products/vehicle-wraps/vanwrap-white-goodwill-clinic.webp"),
    P("Pet Shop Van Wrap", 9499, "/products/vehicle-wraps/vanwrap-white-petshop-brown.webp"),
    P("Restaurant Van Wrap", 10999, "/products/vehicle-wraps/vanwrap-red-sabanero.webp"),
  ],

  "ss-letters": [
    P("SS Mirror Letters", 550, "/products/ss-letters/ss-mirror-letter.webp"),
    P("SS Backlit Halo Letters", 850, "/products/ss-letters/ss-backlit-letter.webp"),
    P("SS Mirror Letters (Curved)", 580, "/products/ss-letters/ss-mirror-letter-alt.webp"),
  ],
  frames: [
    P("Classic Photo Frame", 499, "/products/frames/classic-photo-frame-couple.webp"),
    P("Collage Frame", 799, "/products/frames/collage-frame-couple.webp"),
    P("Acrylic Photo Frame", 899, "/products/frames/wedding-frame-rings.webp"),
    P("Wooden Frame", 699, "/products/frames/family-photo-frame.webp"),
    P("Floating Frame", 999, "/products/frames/mini-heart-frame.webp"),
    P("LED Photo Frame", 1299, "/products/frames/birthday-message-frame.webp"),
    P("Family Tree Frame", 1499, "/products/frames/love-story-timeline-frame.webp"),
    P("Baby Photo Frame", 599, "/products/frames/baby-milestone-frame-avyukth.webp"),
    P("Wedding Frame", 899, "/products/frames/engagement-announcement-frame.webp"),
    P("Mosaic Photo Frame", 1199, "/products/frames/mosaic-photo-frame.webp"),
  ],
};

export const portfolioCats = [
  "All", "Sign Boards", "Branding", "Office Branding", "Retail Branding",
  "Corporate Gifts", "Acrylic Works", "3D Letters",
] as const;

export const testimonials = [
  { name: "Ramesh Kumar", role: "Textile Showroom Owner", quote: "Excellent glow sign board! Quality is premium and the installation team was very professional." },
  { name: "Priya Sharma", role: "Café Owner", quote: "Our café wall graphics and 3D letters look stunning. Customers keep complimenting the branding!" },
  { name: "Venkat Rao", role: "Corporate HR Manager", quote: "Ordered 200+ customized gifts for our annual event. On-time delivery and beautiful packaging." },
  { name: "Anil Reddy", role: "Jewellery Store", quote: "LED bords look rich and elegant — exactly what our showroom needed. Great pricing too." },
  { name: "Sneha Patel", role: "Boutique Owner", quote: "Complete inshop branding done in just one week. Creative team, smooth process, superb finish." },
];