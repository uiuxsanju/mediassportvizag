export const PHONE = "919133910782"; // WhatsApp & call number — replace before launch

export const waLink = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export type Service = {
  id: string;
  name: string;
  desc: string;
  img: string;
  price: number; // starting price ₹ (indicative)
  unit: string;
};

export const services: Service[] = [
  { id: "sign-board", name: "Sign Boards", desc: "Durable flex & board signage that gets your shop noticed.", img: u("photo-1563900079-4b7ba82f9d5c"), price: 3500, unit: "from ₹3,500" },
  { id: "acp-board", name: "ACP Boards", desc: "Premium aluminium composite boards for modern storefronts.", img: u("photo-1497366216548-37526070297c"), price: 8000, unit: "from ₹8,000" },
  { id: "glow-board", name: "Glow Sign Boards", desc: "Bright backlit boards visible day & night.", img: u("photo-1519608487953-e999c86e7455"), price: 6500, unit: "from ₹6,500" },
  { id: "led-board", name: "LED Boards", desc: "Energy-efficient LED displays with high visibility.", img: u("photo-1519501025264-65ba15a82390"), price: 9000, unit: "from ₹9,000" },
  { id: "3d-acrylic", name: "3D Acrylic Letters", desc: "Elegant raised acrylic lettering with LED options.", img: u("photo-1497366811353-6870744d04b2"), price: 450, unit: "₹450 / letter" },
  { id: "ss-letters", name: "SS Letters", desc: "Stainless steel letters — mirror & matte finish.", img: u("photo-1486406146926-c627a92ad1ab"), price: 550, unit: "₹550 / letter" },
  { id: "gold-letters", name: "Gold Letters", desc: "Luxury gold-finish lettering for high-end brands.", img: u("photo-1541873676-a18131494184"), price: 700, unit: "₹700 / letter" },
  { id: "pvc-letters", name: "PVC Letters", desc: "Budget-friendly PVC lettering, crisp & lightweight.", img: u("photo-1567443024551-f3e3cc2be870"), price: 200, unit: "₹200 / letter" },
  { id: "vinyl", name: "Vinyl Pasting", desc: "High-quality vinyl prints for walls, glass & vehicles.", img: u("photo-1558618666-fcd25c85cd64"), price: 45, unit: "₹45 / sq.ft" },
  { id: "inshop", name: "Inshop Branding", desc: "Complete interior branding for retail spaces.", img: u("photo-1441986300917-64674bd600d8"), price: 15000, unit: "from ₹15,000" },
  { id: "glass", name: "Glass Branding", desc: "Frosted & printed glass films for offices.", img: u("photo-1497215842964-222b430dc094"), price: 55, unit: "₹55 / sq.ft" },
  { id: "wall-graphics", name: "Wall Graphics", desc: "Custom wall wraps that transform your space.", img: u("photo-1513519245088-0e12902e5a38"), price: 60, unit: "₹60 / sq.ft" },
  { id: "frames", name: "Photo Frames", desc: "Customized photo frames for gifts & décor.", img: u("photo-1513519245088-0e12902e5a38"), price: 499, unit: "from ₹499" },
  { id: "corp-gifts", name: "Corporate Gifts", desc: "Branded gifts your clients will remember.", img: u("photo-1549465220-1a8b9238cd48"), price: 299, unit: "from ₹299" },
  { id: "mini-albums", name: "Mini Albums", desc: "Compact personalized photo albums.", img: u("photo-1544716278-ca5e3f4abd8c"), price: 799, unit: "from ₹799" },
  { id: "biz-cards", name: "Business Cards", desc: "Premium visiting cards with modern finishes.", img: u("photo-1589041127168-9b1915731dc3"), price: 350, unit: "₹350 / 100 pcs" },
  { id: "invitations", name: "Customized Invitations", desc: "Designer invitations for every occasion.", img: u("photo-1607823489283-1deb240f9e27"), price: 25, unit: "from ₹25 / pc" },
  { id: "awards", name: "Awards & Trophies", desc: "Acrylic, crystal & metal awards, engraved.", img: u("photo-1567427017947-545c5f8d16ad"), price: 650, unit: "from ₹650" },
  { id: "clocks", name: "Acrylic Clocks", desc: "Personalized acrylic wall clocks.", img: u("photo-1563861826100-9cb868fdbe1c"), price: 899, unit: "from ₹899" },
  { id: "bottles", name: "Corporate Bottles", desc: "Custom-branded bottles & drinkware.", img: u("photo-1602143407151-7111542de6e8"), price: 349, unit: "from ₹349" },
  { id: "wedding-gifts", name: "Wedding Gifts", desc: "Memorable customized wedding return gifts.", img: u("photo-1549488344-1f9b8d2bd1f3"), price: 199, unit: "from ₹199" },
];

export const portfolioCats = [
  "All", "Sign Boards", "Branding", "Office Branding", "Retail Branding",
  "Corporate Gifts", "Acrylic Works", "3D Letters",
] as const;

export const portfolio = [
  { title: "Textile Showroom Glow Board", cat: "Sign Boards", img: u("photo-1563900079-4b7ba82f9d5c") },
  { title: "Restaurant ACP + 3D Letters", cat: "3D Letters", img: u("photo-1517248135467-4c7edcad34c4") },
  { title: "Hospital Reception Branding", cat: "Office Branding", img: u("photo-1519494026892-80bbd2d6fd0d") },
  { title: "Jewellery Store Gold Letters", cat: "Sign Boards", img: u("photo-1541873676-a18131494184") },
  { title: "Supermarket Inshop Branding", cat: "Retail Branding", img: u("photo-1441986300917-64674bd600d8") },
  { title: "IT Office Glass Frosting", cat: "Office Branding", img: u("photo-1497366216548-37526070297c") },
  { title: "Diwali Corporate Gift Set", cat: "Corporate Gifts", img: u("photo-1549465220-1a8b9238cd48") },
  { title: "Acrylic Wall Clock Series", cat: "Acrylic Works", img: u("photo-1563861826100-9cb868fdbe1c") },
  { title: "Café Wall Graphics", cat: "Branding", img: u("photo-1513519245088-0e12902e5a38") },
  { title: "Showroom SS Backlit Letters", cat: "3D Letters", img: u("photo-1486406146926-c627a92ad1ab") },
  { title: "Crystal Awards — Annual Meet", cat: "Corporate Gifts", img: u("photo-1567427017947-545c5f8d16ad") },
  { title: "Boutique Retail Makeover", cat: "Retail Branding", img: u("photo-1558769132-cb1aea458c5e") },
];

export const testimonials = [
  { name: "Ramesh Kumar", role: "Textile Showroom Owner", quote: "Excellent glow sign board! Quality is premium and the installation team was very professional." },
  { name: "Priya Sharma", role: "Café Owner", quote: "Our café wall graphics and 3D letters look stunning. Customers keep complimenting the branding!" },
  { name: "Venkat Rao", role: "Corporate HR Manager", quote: "Ordered 200+ customized gifts for our annual event. On-time delivery and beautiful packaging." },
  { name: "Anil Reddy", role: "Jewellery Store", quote: "Gold letters look rich and elegant — exactly what our showroom needed. Great pricing too." },
  { name: "Sneha Patel", role: "Boutique Owner", quote: "Complete inshop branding done in just one week. Creative team, smooth process, superb finish." },
];
