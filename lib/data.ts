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
{ id: "caricature", name: "Caricature Standees", desc: "Personalized cartoon-style photo standees & gifts.", img: "/products/caricature/couple-love-caricature.webp", price: 599, unit: "from ₹599" },  { id: "vinyl", name: "Vinyl Pasting", desc: "High-quality vinyl prints for walls, glass & vehicles.", img: "/services/vinyl.webp", price: 45, unit: "₹45 / sq.ft" },
{ id: "led-frames", name: "LED Light Frames", desc: "Personalized acrylic LED photo frames & night lamps.", img: "/products/led-frames/led-couple-portrait-frame.webp", price: 999, unit: "from ₹999" },  { id: "glass", name: "Glass Branding", desc: "Frosted & printed glass films for offices.", img: "/services/glass.webp", price: 55, unit: "₹55 / sq.ft" },
  { id: "wall-graphics", name: "Wall Graphics", desc: "Custom wall wraps that transform your space.", img: "/services/wall-graphics.webp", price: 60, unit: "₹60 / sq.ft" },
{ id: "frames", name: "Photo Frames", desc: "Customized photo frames for gifts & décor.", img: "/services/frames.webp", price: 499, unit: "from ₹499" },  { id: "corp-gifts", name: "Corporate Gifts", desc: "Branded gifts your clients will remember.", img: "/services/corp-gifts.webp", price: 299, unit: "from ₹299" },
{ id: "keychains", name: "Key Chains", desc: "Custom photo & branded keychains.", img: "/products/keychains/heart-couple-photo-keychain.webp", price: 99, unit: "from ₹99" },  { id: "biz-cards", name: "Business Cards", desc: "Premium visiting cards with modern finishes.", img: "/services/biz-cards.webp", price: 350, unit: "₹350 / 100 pcs" },
{ id: "invitations", name: "Customized Invitations", desc: "Designer invitations for every occasion.", img: "/products/invitations/floral-photo-invitation.webp", price: 25, unit: "from ₹25 / pc" },  { id: "awards", name: "Awards & Trophies", desc: "Acrylic, crystal & metal awards, engraved.", img: "/services/awards.webp", price: 650, unit: "from ₹650" },
  { id: "clocks", name: "Acrylic Clocks", desc: "Personalized acrylic wall clocks.", img: "/services/clocks.webp", price: 899, unit: "from ₹899" },
  { id: "bottles", name: "Corporate Bottles", desc: "Custom-branded bottles & drinkware.", img: "/services/bottles.webp", price: 349, unit: "from ₹349" },
  { id: "wedding-gifts", name: "Wedding Gifts", desc: "Memorable customized wedding return gifts.", img: "/services/wedding-gifts.webp", price: 199, unit: "from ₹199" },
  { id: "biz-cards", name: "Business Cards", desc: "Premium visiting cards with modern finishes.", img: "/products/biz-cards/car-shape-card-closed.webp", price: 350, unit: "₹350 / 100 pcs" },
  { id: "id-cards", name: "ID Cards", desc: "Corporate, school & event ID cards with lanyards.", img: "/services/id-cards.webp", price: 99, unit: "from ₹99" },
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
     P("Acrylic Photo Frame", 899, "/products/frames/acrylic-photo-frame.webp"),
    P("Family Photo Frame", 999, "/products/frames/family-photo-frame.webp"),
    P("Classic Photo Frame", 699, "/products/frames/classic-photo-frame.webp"),
    P("Wedding Frame", 1499, "/products/frames/wedding-frame.webp"),
    P("Collage Frame", 1199, "/products/frames/collage-frame.webp"),
    P("Mosaic Photo Frame", 1299, "/products/frames/mosaic-photo-frame.webp"),
  ],
  "ss-letters": [
    P("SS Mirror Letters", 550, "/products/ss-letters/ss-mirror-letter.webp"),
  P("SS Backlit Halo Letters", 850, "/products/ss-letters/ss-backlit-letter.webp"),
  P("SS Mirror Letters (Curved)", 580, "/products/ss-letters/ss-mirror-letter-alt.webp"),
  ],
  "gold-letters": [
    P("Gold Mirror Letters", 700), P("Gold Matte Letters", 700), P("Gold Backlit Letters", 900),
    P("Gold PVD Coated Letters", 850), P("Champagne Gold Letters", 800), P("Gold Logo Emblem", 2500),
    P("Brushed Gold Letters", 780), P("Gold + Black Combo Letters", 820), P("Gold Reception Sign", 5000),
    P("Gold Solid Cast Letters", 1200),
  ],
  caricature: [
    P("Valentine Proposal Caricature", 799, "/products/caricature/valentine-proposal-caricature.webp"),
    P("Best Sister Caricature", 699, "/products/caricature/best-sister-caricature.webp"),
    P("Best Brother Caricature", 699, "/products/caricature/best-brother-caricature.webp"),
    P("Supermom Multi-Task Caricature", 899, "/products/caricature/supermom-caricature.webp"),
    P("Mother's Day Mom & Son Caricature", 999, "/products/caricature/mothers-day-caricature.webp"),
    P("Couple Love Caricature", 799, "/products/caricature/couple-love-caricature.webp"),
    P("Superhero Mother Caricature", 799, "/products/caricature/superhero-mother-caricature.webp"),
    P("Karwachauth Couple Caricature", 899, "/products/caricature/karwachauth-couple-caricature.webp"),
    P("Named Couple Caricature", 999, "/products/caricature/named-couple-caricature.webp"),
    P("Biker Rider Caricature", 899, "/products/caricature/biker-caricature.webp"),
  ],
  vinyl: [
    P("Glass Vinyl Pasting", 45), P("Wall Vinyl Print", 50), P("Vehicle Branding Vinyl", 60),
    P("Floor Graphics Vinyl", 70), P("One-Way Vision Film", 65), P("Frosted Vinyl", 55),
    P("Radium Cutting", 40), P("Eco Solvent Print", 45), P("Reflective Vinyl", 80),
    P("Removable Vinyl", 50),
  ],
  "led-frames": [
    P("Anniversary Calendar LED Frame", 1599, "/products/frames/led-frames/led-anniversary-calendar-frame.webp"),
    P("Couple Portrait LED Frame", 1799, "/products/frames/led-frames/led-couple-portrait-frame.webp"),
    P("Spotify Song LED Frame", 1299, "/products/frames/led-frames/led-spotify-song-frame.webp"),
    P("Birthday Photo LED Frame", 1499, "/products/frames/led-frames/led-birthday-photo-frame.webp"),
    P("Achievement LED Frame", 1699, "/products/frames/led-frames/led-white-coat-ceremony-frame.webp"),
    P("Love Story Collage LED Frame", 1899, "/products/frames/led-frames/led-love-story-collage-frame.webp"),
    P("Heart Name LED Frame", 999, "/products/frames/led-frames/led-heart-name-frame.webp"),
    P("Couple Hands LED Frame", 1199, "/products/frames/led-frames/led-couple-hands-frame.webp"),
    P("First Date Heart LED Frame", 1299, "/products/frames/led-frames/led-first-date-heart-frame.webp"),
    P("Custom Shape LED Sign", 1599, "/products/frames/led-frames/led-custom-shape-frame.webp"),
    P("Love Timeline LED Frame", 1799, "/products/frames/led-frames/led-love-timeline-frame.webp"),
    P("Family Circle LED Frame", 1999, "/products/frames/led-frames/led-family-circle-frame.webp"),
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
  "corp-gifts": [
    P("Corporate Combo Kit", 999), P("Diary + Pen Set", 449), P("Branded Drinkware Set", 599),
    P("Desk Organizer", 699), P("Tech Gift Set", 1499), P("Eco Gift Kit", 799),
    P("Premium Gift Box", 1999), P("Employee Welcome Kit", 1299), P("Festival Hamper", 899),
    P("Custom Keychains (50 pcs)", 2500),
  ],
   keychains: [
    P("Heart Photo Keychain", 199, "/products/keychains/heart-couple-photo-keychain.webp"),
    P("Heart Family Photo Keychain", 199, "/products/keychains/heart-family-pet-keychain.webp"),
    P("Custom Shape Keychain", 249, "/products/keychains/jersey-shape-keychain.webp"),
    P("Printed Strap Keychain", 99, "/products/keychains/wanderlust-strap-keychain.webp"),
    P("Motivational Strap Keychain", 99, "/products/keychains/motivational-strap-keychain.webp"),
  ],
 
  "biz-cards": [
    P("Car Shape Fold Card", 15, "/products/biz-cards/car-shape-card-closed.webp"),
    P("Phone Shape Fold Card", 15, "/products/biz-cards/phone-shape-card-orange.webp"),
    P("Phone Shape Premium Card", 18, "/products/biz-cards/phone-shape-card-blue.webp"),
    P("Rounded Die-Cut Card", 12, "/products/biz-cards/rounded-die-cut-card.webp"),
    P("Custom Shape Fold Card", 16, "/products/biz-cards/phone-back-shape-card.webp"),
    P("Dumbbell Shape Card (Gym/Fitness)", 14, "/products/biz-cards/dumbbell-shape-card.webp"),
    P("Camera Shape Card (Photography)", 14, "/products/biz-cards/camera-shape-card.webp"),
    
  ],
  invitations: [
    P("Save the Date Card", 22, "/products/invitations/save-the-date-green.webp"),
    P("Typography Wedding Card", 25, "/products/invitations/wedding-typography-invitation.webp"),
    P("Save the Date Tag Invite", 28, "/products/invitations/save-the-date-teal-tag.webp"),
    P("Floral Wedding Invitation", 25, "/products/invitations/floral-yellow-invitation.webp"),
  ],
  awards: [
    P("Acrylic Awards", 650), P("Crystal Trophies", 1200), P("Wooden Plaques", 850),
    P("Metal Trophies", 1500), P("Star Trophies", 950), P("Custom Shape Awards", 1100),
    P("Employee Awards", 900), P("Sports Trophies", 750), P("Appreciation Plaques", 800),
    P("Glass Mementos", 1000),
  ],
 clocks: [
    P("Acrylic Photo Clock", 899, "/products/clocks/geometric-photo-clock.webp"),
    P("Round Wall Clock", 799, "/products/clocks/round-couple-photo-clock.webp"),
    P("Numberless Modern Clock", 949, "/products/clocks/geometric-square-clock.webp"),
    P("Kids Theme Clock", 899, "/products/clocks/kids-photo-clock.webp"),
    P("Office Logo Clock", 999, "/products/clocks/corporate-logo-clock-1.webp"),
    P("Custom Brand Clock", 999, "/products/clocks/corporate-logo-clock-2.webp"),
    P("Custom Shape Clock", 1099, "/products/clocks/tooth-shape-clock.webp")
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
  "id-cards": [
  P("Corporate ID Card", 149, "/products/id-cards/id-card-corporate-red.webp"),
  P("Employee ID Card", 149, "/products/id-cards/id-card-corporate-green.webp"),
  P("Medical Support ID Card", 179, "/products/id-cards/id-card-medical-purple.webp"),
  P("Branded ID Card", 149, "/products/id-cards/id-card-corporate-blue.webp"),
  P("Bulk School ID Cards (Set)", 1499, "/products/id-cards/id-card-lanyard-bundle-school.webp"),
  P("Student ID Card", 99, "/products/id-cards/id-card-school-student.webp"),
  P("Premium School ID Card", 129, "/products/id-cards/id-card-school-intelli.webp"),
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