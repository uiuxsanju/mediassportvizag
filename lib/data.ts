export const PHONE = "919133910782"; // WhatsApp & call number — replace before launch

export const waLink = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export type Service = {
  id: string;
  name: string;
  desc: string;
  img: string;
  price: number;
  unit: string;
};

export type Product = {
  name: string;
  price: number;
  img?: string; // optional — lekapothe category image vastundi
};

// ─────────────────────────────────────────────────────────────
// SERVICES (Categories) — /public/services/ lo webp images
// ─────────────────────────────────────────────────────────────
export const services: Service[] = [
  { id: "sign-board", name: "Sign Boards", desc: "Durable flex & board signage that gets your shop noticed.", img: "/services/sign-board.webp", price: 3500, unit: "from ₹3,500" },
  { id: "acp-board", name: "ACP Boards", desc: "Premium aluminium composite boards for modern storefronts.", img: "/services/acp-board.webp", price: 8000, unit: "from ₹8,000" },
  { id: "glow-board", name: "Glow Sign Boards", desc: "Bright backlit boards visible day & night.", img: "/services/glow-board.webp", price: 6500, unit: "from ₹6,500" },
  { id: "led-board", name: "LED Boards", desc: "Energy-efficient LED displays with high visibility.", img: "/services/led-board.webp", price: 9000, unit: "from ₹9,000" },
  { id: "3d-acrylic", name: "3D Acrylic Letters", desc: "Elegant raised acrylic lettering with LED options.", img: "/services/3d-acrylic.webp", price: 450, unit: "₹450 / letter" },
  { id: "ss-letters", name: "SS Letters", desc: "Stainless steel letters — mirror & matte finish.", img: "/services/ss-letters.webp", price: 550, unit: "₹550 / letter" },
  { id: "gold-letters", name: "Gold Letters", desc: "Luxury gold-finish lettering for high-end brands.", img: "/services/gold-letters.webp", price: 700, unit: "₹700 / letter" },
  { id: "pvc-letters", name: "PVC Letters", desc: "Budget-friendly PVC lettering, crisp & lightweight.", img: "/services/pvc-letters.webp", price: 200, unit: "₹200 / letter" },
  { id: "vinyl", name: "Vinyl Pasting", desc: "High-quality vinyl prints for walls, glass & vehicles.", img: "/services/vinyl.webp", price: 45, unit: "₹45 / sq.ft" },
  { id: "inshop", name: "Inshop Branding", desc: "Complete interior branding for retail spaces.", img: "/services/inshop.webp", price: 15000, unit: "from ₹15,000" },
  { id: "glass", name: "Glass Branding", desc: "Frosted & printed glass films for offices.", img: "/services/glass.webp", price: 55, unit: "₹55 / sq.ft" },
  { id: "wall-graphics", name: "Wall Graphics", desc: "Custom wall wraps that transform your space.", img: "/services/wall-graphics.webp", price: 60, unit: "₹60 / sq.ft" },
  { id: "frames", name: "Photo Frames", desc: "Customized photo frames for gifts & décor.", img: "/services/frames.webp", price: 499, unit: "from ₹499" },
  { id: "corp-gifts", name: "Corporate Gifts", desc: "Branded gifts your clients will remember.", img: "/services/corp-gifts.webp", price: 299, unit: "from ₹299" },
  { id: "mini-albums", name: "Mini Albums", desc: "Compact personalized photo albums.", img: "/services/mini-albums.webp", price: 799, unit: "from ₹799" },
  { id: "biz-cards", name: "Business Cards", desc: "Premium visiting cards with modern finishes.", img: "/services/biz-cards.webp", price: 350, unit: "₹350 / 100 pcs" },
  { id: "invitations", name: "Customized Invitations", desc: "Designer invitations for every occasion.", img: "/services/invitations.webp", price: 25, unit: "from ₹25 / pc" },
  { id: "awards", name: "Awards & Trophies", desc: "Acrylic, crystal & metal awards, engraved.", img: "/services/awards.webp", price: 650, unit: "from ₹650" },
  { id: "clocks", name: "Acrylic Clocks", desc: "Personalized acrylic wall clocks.", img: "/services/clocks.webp", price: 899, unit: "from ₹899" },
  { id: "bottles", name: "Corporate Bottles", desc: "Custom-branded bottles & drinkware.", img: "/services/bottles.webp", price: 349, unit: "from ₹349" },
  { id: "wedding-gifts", name: "Wedding Gifts", desc: "Memorable customized wedding return gifts.", img: "/services/wedding-gifts.webp", price: 199, unit: "from ₹199" },
];

// ─────────────────────────────────────────────────────────────
// PRODUCTS — prathi category ki 10 products.
// img ivvakapothe category image chupistundi.
// Real product photo pettali ante:
//   { name: "...", price: ..., img: "/products/sign-board/flex.webp" }
// ─────────────────────────────────────────────────────────────
const P = (name: string, price: number, img?: string): Product => ({ name, price, img });

export const products: Record<string, Product[]> = {
  "sign-board": [
    P("Flex Sign Board", 3500), P("Vinyl Pasting Board", 4000), P("Non-Lit Box Board", 4500),
    P("Lollipop Stand Board", 5500), P("Backlit Flex Board", 6000), P("Retro Fit Board", 5000),
    P("Directional Sign Board", 2500), P("Hanging Shop Board", 3800), P("One-Way Vision Board", 4200),
    P("Clip-On Poster Frame", 1800),
  ],
  "acp-board": [
    P("ACP Front Elevation", 8000), P("ACP with 3D Letters", 12000), P("ACP Backlit Panel", 14000),
    P("ACP + LED Combo", 16000), P("ACP Reception Wall", 18000), P("ACP Pylon Board", 25000),
    P("ACP Canopy Fascia", 15000), P("Wooden-Finish ACP", 11000), P("ACP Punch Letters", 13000),
    P("ACP Full Storefront", 30000),
  ],
  "glow-board": [
    P("LED Glow Board", 6500), P("Flex Glow Board", 7000), P("Acrylic Glow Board", 9000),
    P("Double-Side Glow Board", 11000), P("Round Glow Lollipop", 8500), P("Edge-Lit Glow Board", 9500),
    P("Glow with 3D Letters", 12000), P("Backlit Fabric Board", 10000), P("Menu Glow Board", 5500),
    P("Slim Glow Light Box", 7500),
  ],
  "led-board": [
    P("LED Scrolling Display", 9000), P("P10 LED Board", 12000), P("RGB Pixel Board", 15000),
    P("LED Open Sign", 4500), P("LED Name Board", 8000), P("Neon Flex Sign", 7500),
    P("LED Strip Sign", 6500), P("LED Ticker Display", 14000), P("Outdoor LED Screen", 45000),
    P("LED Video Wall", 90000),
  ],
  "3d-acrylic": [
    P("3D Acrylic Front-Lit Letters", 450), P("3D Acrylic Back-Lit Letters", 550), P("Clear Acrylic Letters", 400),
    P("Black Acrylic Letters", 420), P("Golden Acrylic Letters", 500), P("Mirror Acrylic Letters", 520),
    P("Acrylic + LED Halo Letters", 600), P("Multicolour Acrylic Letters", 480), P("Acrylic Logo Cutout", 1500),
    P("Mini Acrylic Letters", 300),
  ],
  "ss-letters": [
    P("SS Mirror Letters", 550), P("SS Matte Letters", 550), P("SS Gold PVD Letters", 750),
    P("SS Rose Gold Letters", 780), P("SS Backlit Halo Letters", 850), P("SS Box Letters", 650),
    P("SS Solid Letters", 900), P("SS + Acrylic Combo Letters", 700), P("SS Logo Cutout", 2000),
    P("SS Etched Name Plate", 1200),
  ],
  "gold-letters": [
    P("Gold Mirror Letters", 700), P("Gold Matte Letters", 700), P("Gold Backlit Letters", 900),
    P("Gold PVD Coated Letters", 850), P("Champagne Gold Letters", 800), P("Gold Logo Emblem", 2500),
    P("Brushed Gold Letters", 780), P("Gold + Black Combo Letters", 820), P("Gold Reception Sign", 5000),
    P("Gold Solid Cast Letters", 1200),
  ],
  "pvc-letters": [
    P("PVC Plain Letters", 200), P("PVC Painted Letters", 250), P("PVC + Vinyl Wrap Letters", 280),
    P("PVC Foam Letters", 220), P("PVC 3D Cutout Letters", 300), P("PVC Logo Board", 1200),
    P("PVC Colour Letters", 260), P("PVC Mini Letters", 150), P("PVC Wall Quote", 1500),
    P("PVC Number Plates", 350),
  ],
  vinyl: [
    P("Glass Vinyl Pasting", 45), P("Wall Vinyl Print", 50), P("Vehicle Branding Vinyl", 60),
    P("Floor Graphics Vinyl", 70), P("One-Way Vision Film", 65), P("Frosted Vinyl", 55),
    P("Radium Cutting", 40), P("Eco Solvent Print", 45), P("Reflective Vinyl", 80),
    P("Removable Vinyl", 50),
  ],
  inshop: [
    P("Full Shop Interior Branding", 15000), P("Wall Panel Branding", 8000), P("Shelf Strip Branding", 3000),
    P("Danglers & Standees", 2000), P("Counter Branding", 4000), P("Pillar Branding", 3500),
    P("Ceiling Hangings", 2500), P("Window Graphics", 3000), P("In-Shop Display Units", 6000),
    P("Brand Wall Setup", 10000),
  ],
  glass: [
    P("Frosted Glass Film", 55), P("Printed Glass Film", 65), P("Logo Frosting", 800),
    P("Stripes Frosting", 50), P("Gradient Frost Film", 70), P("One-Way Privacy Film", 75),
    P("Stained Glass Print", 90), P("Office Cabin Frosting", 60), P("Door Glass Branding", 1200),
    P("Partition Film", 55),
  ],
  "wall-graphics": [
    P("Custom Wallpaper Print", 60), P("3D Wall Mural", 90), P("Office Motivation Wall", 70),
    P("Café Theme Wall", 80), P("Kids Room Graphics", 75), P("Brand Story Wall", 85),
    P("Textured Wall Wrap", 95), P("Canvas Wall Print", 1200), P("Vinyl Wall Quotes", 800),
    P("Reception Wall Art", 5000),
  ],
  frames: [
    P("Classic Photo Frame", 499), P("Collage Frame", 799), P("Acrylic Photo Frame", 899),
    P("Wooden Frame", 699), P("Floating Frame", 999), P("LED Photo Frame", 1299),
    P("Family Tree Frame", 1499), P("Baby Photo Frame", 599), P("Wedding Frame", 899),
    P("Mosaic Photo Frame", 1199),
  ],
  "corp-gifts": [
    P("Corporate Combo Kit", 999), P("Diary + Pen Set", 449), P("Branded Drinkware Set", 599),
    P("Desk Organizer", 699), P("Tech Gift Set", 1499), P("Eco Gift Kit", 799),
    P("Premium Gift Box", 1999), P("Employee Welcome Kit", 1299), P("Festival Hamper", 899),
    P("Custom Keychains (50 pcs)", 2500),
  ],
  "mini-albums": [
    P("Mini Photo Book", 799), P("Pocket Album", 599), P("Polaroid Album", 899),
    P("Wedding Mini Album", 1499), P("Baby Mini Album", 999), P("Travel Album", 1099),
    P("Scrapbook Album", 1299), P("Calendar Album", 899), P("Insta Square Album", 999),
    P("Memory Box Album", 1799),
  ],
  "biz-cards": [
    P("Matte Business Cards (100)", 350), P("Glossy Cards (100)", 300), P("Velvet Touch Cards (100)", 550),
    P("Spot UV Cards (100)", 650), P("Foil Stamped Cards (100)", 750), P("Rounded Corner Cards (100)", 400),
    P("Transparent Cards (100)", 1200), P("Textured Cards (100)", 600), P("NFC Smart Card (1 pc)", 999),
    P("Metal Card (1 pc)", 1499),
  ],
  invitations: [
    P("Wedding Invitations", 25), P("Birthday Invites", 20), P("Housewarming Cards", 22),
    P("Engagement Invites", 25), P("Digital Invite (Video)", 999), P("Acrylic Invitations", 150),
    P("Boxed Invitations", 200), P("Seed Paper Invites", 45), P("Scroll Invitations", 120),
    P("Save-the-Date Cards", 18),
  ],
  awards: [
    P("Acrylic Awards", 650), P("Crystal Trophies", 1200), P("Wooden Plaques", 850),
    P("Metal Trophies", 1500), P("Star Trophies", 950), P("Custom Shape Awards", 1100),
    P("Employee Awards", 900), P("Sports Trophies", 750), P("Appreciation Plaques", 800),
    P("Glass Mementos", 1000),
  ],
  clocks: [
    P("Acrylic Photo Clock", 899), P("Round Wall Clock", 799), P("Square Photo Clock", 849),
    P("LED Backlit Clock", 1499), P("Family Collage Clock", 1099), P("Office Logo Clock", 999),
    P("Kids Theme Clock", 899), P("Wooden Print Clock", 1199), P("Numberless Modern Clock", 949),
    P("Pendulum Photo Clock", 1599),
  ],
  bottles: [
    P("Steel Sipper Bottle", 349), P("Copper Bottle Engraved", 799), P("Temperature Bottle", 649),
    P("Sports Sipper", 399), P("Glass Bottle Printed", 449), P("Vacuum Flask", 699),
    P("Kids Bottle", 349), P("Bottle + Mug Combo", 749), P("Bamboo Lid Bottle", 549),
    P("Corporate Bulk Bottles (25+)", 299),
  ],
  "wedding-gifts": [
    P("Return Gift Combo", 199), P("Personalized Mugs", 249), P("Photo Keychains", 99),
    P("Mini Plant Pots", 149), P("Custom Chocolates Box", 299), P("Engraved Wooden Gifts", 349),
    P("Silver Coated Gifts", 499), P("Gift Hampers", 599), P("Name Printed Diaries", 199),
    P("Thank-You Cards Set (50)", 450),
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
  { name: "Anil Reddy", role: "Jewellery Store", quote: "Gold letters look rich and elegant — exactly what our showroom needed. Great pricing too." },
  { name: "Sneha Patel", role: "Boutique Owner", quote: "Complete inshop branding done in just one week. Creative team, smooth process, superb finish." },
];