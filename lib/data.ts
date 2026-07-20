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
// ────────────────────────────────────────────────────────
export const services: Service[] = [
  { id: "sign-board", name: "Sign Boards", desc: "Durable flex & board signage that gets your shop noticed.", img: "/services/sign-board.webp", price: 3500, unit: "from ₹3,500" },
  { id: "acp-board", name: "ACP Boards", desc: "Premium aluminium composite boards for modern storefronts.", img: "/services/acp-board.webp", price: 8000, unit: "from ₹8,000" },
  { id: "vehicle-wraps", name: "Vehicle Branding", desc: "Custom vinyl wraps for vans, trucks & fleet vehicles.", img: "/services/vehicle-wraps.webp", price: 4999, unit: "from ₹4,999" },
  { id: "3d-acrylic", name: "3D Acrylic Letters", desc: "Elegant raised acrylic lettering with LED options.", img: "/services/3d-acrylic.webp", price: 450, unit: "₹450 / letter" },
  { id: "ss-letters", name: "SS Letters", desc: "Stainless steel letters — mirror & matte finish.", img: "/services/ss-letters.webp", price: 550, unit: "₹550 / letter" },
  { id: "glow-board", name: "Glow Sign Boards", desc: "Bright backlit boards visible day & night.", img: "/services/glow-board.webp", price: 6500, unit: "from ₹6,500" },
  { id: "trophies", name: "Trophies & Awards", desc: "Custom engraved trophies & recognition awards.", img: "/services/trophies.webp", price: 499, unit: "from ₹499" },
  { id: "caricature", name: "Caricature Standees", desc: "Personalized cartoon-style photo standees & gifts.", img: "/services/caricature.webp", price: 599, unit: "from ₹599" },
  { id: "led-frames", name: "LED Light Frames", desc: "Personalized acrylic LED photo frames & night lamps.", img: "/services/led.webp", price: 999, unit: "from ₹999" },
  { id: "frames", name: "Photo Frames", desc: "Customized photo frames for gifts & décor.", img: "/services/frames.webp", price: 499, unit: "from ₹499" },
  { id: "keychains", name: "Key Chains", desc: "Custom photo & branded keychains.", img: "/services/heart-couple-photo-keychain.webp", price: 99, unit: "from ₹99" },
  { id: "biz-cards", name: "Business Cards", desc: "Custom shape business cards — unique & memorable.", img: "/services/biz-cards.webp", price: 349, unit: "from ₹349" },
  { id: "visiting-cards", name: "Visiting Cards", desc: "Premium printed & designed visiting cards.", img: "/services/visiting-cards.webp", price: 299, unit: "from ₹299" },
  { id: "invitations", name: "Customized Invitations", desc: "Designer invitations for every occasion.", img: "/services/invitations.webp", price: 25, unit: "from ₹25 / pc" },
  { id: "caps", name: "Caps", desc: "Custom embroidered & printed branded caps.", img: "/services/caps.webp", price: 149, unit: "from ₹149" },
  { id: "mugs", name: "Custom Mugs", desc: "Branded & personalized printed mugs for corporate gifting.", img: "/services/mugs.webp", price: 149, unit: "from ₹149" },
  { id: "id-cards", name: "ID Cards", desc: "Co  rporate, school & event ID cards with lanyards.", img: "/services/id-cards.webp", price: 99, unit: "from ₹99" },
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
  P("LED Storefront Sign", 4500, "/products/sign-board/signboard-led-travel-agency.webp"),
  P("LED Shop Nameboard", 3500, "/products/sign-board/signboard-led-tea-shop.webp"),
  P("Backlit Wall Signage", 6500, "/products/sign-board/signboard-backlit-hospital.webp"),
  P("Multi-Brand LED Facade", 9999, "/products/sign-board/signboard-led-brand-facade.webp"),
],
  "acp-board": [
  P("ACP Storefront Cladding", 8000, "/products/acp-board/acp-storefront-orange-smartbox.webp"),
  P("Two-Storey ACP Facade", 15999, "/products/acp-board/acp-storefront-orange-container.webp"),
  P("3D Letter Signboard on ACP", 9999, "/products/acp-board/acp-facade-black-guptasweets.webp"),
  P("Backlit ACP Brand Facade", 11999, "/products/acp-board/acp-facade-black-timhortons.webp"),
  P("Printed ACP Storefront Panel", 8500, "/products/acp-board/acp-facade-yellow-burgerstore.webp"),
  P("Backlit Circular Logo ACP", 9500, "/products/acp-board/acp-facade-grey-bcoffee.webp"),
  P("Premium Marble-Finish ACP", 13999, "/products/acp-board/acp-facade-marble-bottega.webp"),
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
  "visiting-cards": [
  P("Minimal Logo Card", 299, "/products/visiting-cards/bizcard-green-geometric-logo.webp"),
  P("Bold Color Card", 349, "/products/visiting-cards/bizcard-orange-blue-algor.webp"),
  P("Gradient Brand Card", 349, "/products/visiting-cards/bizcard-purple-poddit.webp"),
  P("Dual-Tone Premium Card", 399, "/products/visiting-cards/bizcard-yellow-green-milaq.webp"),
  P("Matte Finish QR Card", 449, "/products/visiting-cards/bizcard-neon-black-forterunners.webp"),
  P("Neon Edge Card", 399, "/products/visiting-cards/bizcard-yellow-black-suntwin.webp"),
  P("Corporate Two-Sided Card", 349, "/products/visiting-cards/bizcard-blue-white-kretos.webp"),
],
  mugs: [
  P("Corporate Logo Mug", 199, "/products/mugs/mug-corporate-black-logo.webp"),
  P("Branded Color Mug", 179, "/products/mugs/mug-branded-pink-gofans.webp"),
  P("Anniversary Special Mug", 249, "/products/mugs/mug-anniversary-blue-inusa.webp"),
  P("Business Logo Mug", 199, "/products/mugs/mug-branded-pink-joelmasilva.webp"),
  P("Corporate Mug (Pair)", 349, "/products/mugs/mug-corporate-orange-edrok-pair.webp"),
  P("Premium Logo Mug (Pair)", 399, "/products/mugs/mug-corporate-white-anna-pair.webp"),
  P("Consulting Brand Mug (Pair)", 399, "/products/mugs/mug-corporate-navy-roem-pair.webp"),
  P("Bulk Event Mugs (Set of 50)", 5999, "/products/mugs/mug-bulk-white-itau.webp"),
],
  "ss-letters": [
    P("SS Mirror Letters", 550, "/products/ss-letters/ss-mirror-letter.webp"),
  P("SS Backlit Halo Letters", 850, "/products/ss-letters/ss-backlit-letter.webp"),
  P("SS Mirror Letters (Curved)", 580, "/products/ss-letters/ss-mirror-letter-alt.webp"),
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
    P("Anniversary Calendar LED Frame", 1599, "/products/led-frames/led-anniversary-calendar-frame.webp"),
    P("Couple Portrait LED Frame", 1799, "/products/led-frames/led-couple-portrait-frame.webp"),
    P("Spotify Song LED Frame", 1299, "/products/led-frames/led-spotify-song-frame.webp"),
    P("Birthday Photo LED Frame", 1499, "/products/led-frames/led-birthday-photo-frame.webp"),
    P("Achievement LED Frame", 1699, "/products/led-frames/led-white-coat-ceremony-frame.webp"),
    P("Love Story Collage LED Frame", 1899, "/products/led-frames/led-love-story-collage-frame.webp"),
    P("Heart Name LED Frame", 999, "/products/led-frames/led-heart-name-frame.webp"),
    P("Couple Hands LED Frame", 1199, "/products/led-frames/led-couple-hands-frame.webp"),
    P("First Date Heart LED Frame", 1299, "/products/led-frames/led-first-date-heart-frame.webp"),
    P("Custom Shape LED Sign", 1599, "/products/led-frames/led-custom-shape-frame.webp"),
    P("Love Timeline LED Frame", 1799, "/products/led-frames/led-love-timeline-frame.webp"),
    P("Family Circle LED Frame", 1999, "/products/led-frames/led-family-circle-frame.webp"),
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
  "glow-board": [
  P("Circular Logo Glow Sign", 6500, "/products/glow-board/glowboard-backlit-lumen-cafe.webp"),
  P("Backlit Business Sign", 5999, "/products/glow-board/glowboard-yellow-realestate.webp"),
  P("Large Storefront Glow Board", 8999, "/products/glow-board/glowboard-white-restaurant.webp"),
  P("Multi-Panel Glow Signage", 9499, "/products/glow-board/glowboard-red-bistro.webp"),
  P("Script Logo Glow Sign", 6999, "/products/glow-board/glowboard-script-thebark.webp"),
  P("Outdoor Icon Glow Sign", 6500, "/products/glow-board/glowboard-outdoor-halo-cafe.webp"),
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
 trophies: [
  P("Ring Award Trophy", 1499, "/products/trophies/trophy-ring-billboard-award.webp"),
  P("Gold Star Trophy", 899, "/products/trophies/trophy-excellence-set-three copy.webp"),
  P("Gold Leaf Twist Trophy", 999, "/products/trophies/trophy-gold-leaf-twist.webp"),
  P("Olympic Figure Trophy", 1299, "/products/trophies/trophy-olympic-figure-gold.webp"),
  P("Excellence Award (Set of 3)", 2499, "/products/trophies/trophy-excellence-set-three.webp"),
  P("Certificate of Achievement", 599, "/products/trophies/trophy-gold-star-swirl copy.webp"),
   P("Olympic Figure Trophy", 1299, "/products/trophies/trophy-olympic-figure-gold.webp"),
  P("Excellence Award (Set of 3)", 2499, "/products/trophies/trophy-ring-billboard-award copy.webp"),
  P("Certificate of Achievement", 599, "/products/trophies/trophy-olympic-figure-gold copy.webp"),
  P("Olympic Figure Trophy", 1299, "/products/trophies/trophy-olympic-figure-gold.webp"),
  P("Excellence Award (Set of 3)", 2499, "/products/trophies/trophy-excellence-set-three.webp"),
  P("Certificate of Achievement", 599, "/products/trophies/trophy-certificate-achievement.webp"),
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
 
  caps: [
  P("Corporate Logo Cap", 199, "/products/caps/cap-corporate-white-magno.webp"),
  P("Event Branded Cap", 179, "/products/caps/cap-branded-blue-balloon-station.webp"),
  P("Embroidered Text Cap", 249, "/products/caps/cap-branded-blue-creative-department.webp"),
  P("Printed Slogan Cap (Set of 3)", 499, "/products/caps/cap-motivational-tricolor.webp"),
  P("Gradient Print Cap", 229, "/products/caps/cap-gradient-yellow-logo.webp"),
  P("Corporate Embroidered Cap", 199, "/products/caps/cap-corporate-green-dwc.webp"),
  P("Brand Colour Cap", 149, "/products/caps/cap-branded-green-renewa.webp"),
  P("Bulk Corporate Caps (Set of 50)", 6999, "/products/caps/cap-bulk-green-collection.webp"),
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
  { name: "Anil Reddy", role: "Jewellery Store", quote: "LED bords look rich and elegant — exactly what our showroom needed. Great pricing too." },
  { name: "Sneha Patel", role: "Boutique Owner", quote: "Complete inshop branding done in just one week. Creative team, smooth process, superb finish." },
];