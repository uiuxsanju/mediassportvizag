import type { Product, Service } from "./data";

/**
 * Presentation metadata for service/product cards.
 * Edit freely — badges, feature chips and option lists are display-only.
 */

export type FeatureKey =
  | "custom"
  | "quality"
  | "delivery"
  | "size"
  | "bulk"
  | "durable"
  | "gift";

export const FEATURE_LABEL: Record<FeatureKey, string> = {
  custom: "Custom Design",
  quality: "Premium Quality",
  delivery: "PAN India Delivery",
  size: "Custom Sizes",
  bulk: "Bulk Orders",
  durable: "Durable Finish",
  gift: "Gifting Ready",
};

export type Badge = "Popular" | "Best Seller" | "New" | "Bulk Order";

type Meta = {
  badge?: Badge;
  features: FeatureKey[];
  options?: string[];
  blurb?: string; // one-line description used on product cards
};

const DEFAULT_FEATURES: FeatureKey[] = ["custom", "quality", "delivery"];

const META: Record<string, Meta> = {
  "sign-board": { badge: "Popular", features: ["durable", "custom", "delivery"], options: ["Flex", "Board signage"], blurb: "Durable signage made to your size and branding." },
  "name-boards": { badge: "Popular", features: ["custom", "size", "delivery"], options: ["Wood", "Acrylic", "Metal finishes"], blurb: "Made-to-order name board with your name, logo and details." },
  "customized-mementos": { badge: "Popular", features: ["custom", "bulk", "delivery"], blurb: "Personalised award with your name, logo and message." },
  "mini-me": { features: ["custom", "gift", "delivery"], blurb: "Personalised caricature made from your photo." },
  "pvc-letters": { features: ["size", "durable", "delivery"], options: ["Indoor", "Outdoor"] },
  "customized-invitations": { badge: "New", features: ["custom", "bulk", "delivery"], options: ["Wedding", "Event"], blurb: "Personalised invitation designed around your event details." },
  "inshop-branding": { features: ["custom", "quality", "delivery"] },
  "table-tops": { badge: "New", features: ["custom", "gift", "delivery"], options: ["Names", "Hearts", "Personalised plaques"], blurb: "Personalised desk piece with your name, logo or message." },
  "3d-letters": { features: ["custom", "quality", "size"], options: ["Glossy", "Gold-edge"] },
  "ss-letters": { features: ["quality", "size", "delivery"], options: ["Mirror finish", "Matte finish"] },
  clocks: { features: ["custom", "gift", "delivery"], options: ["Wall", "Wooden", "Tabletop"], blurb: "Custom clock printed with your photo, logo or design." },
  "vehicle-wraps": { features: ["custom", "durable", "size"] },
  "road-show-vehicles": { features: ["custom", "size", "quality"] },
  "flex-printing": { features: ["size", "durable", "bulk"] },
  "laser-cnc-cutting": { features: ["quality", "custom", "size"] },
  "rollup-standee": { features: ["custom", "quality", "delivery"] },
  "arch-gates": { features: ["custom", "size", "quality"] },
  "id-cards": { badge: "Bulk Order", features: ["bulk", "custom", "quality"], options: ["Corporate", "Medical", "Institutional (with lanyards)"] },
  frames: { features: ["custom", "gift", "quality"] },
  "exhibition-signage": { features: ["size", "custom", "quality"] },
  "customized-gifts": { badge: "Bulk Order", features: ["custom", "gift", "bulk"] },
  caps: { badge: "Bulk Order", features: ["custom", "bulk", "quality"], options: ["Embroidered", "Printed"] },
  keychains: { badge: "Bulk Order", features: ["custom", "bulk", "gift"], options: ["Photo", "Printed strap", "Branded"] },
  "photo-mug": { badge: "Bulk Order", features: ["custom", "gift", "bulk"] },
};

export const categoryMeta = (id: string): Meta => META[id] ?? { features: DEFAULT_FEATURES };

export const categoryFeatures = (id: string) => categoryMeta(id).features;

export const categoryOptions = (id: string): string[] =>
  categoryMeta(id).options ?? [];

/** Short (1–2 line) description for a product card. */
export const productBlurb = (_p: Product, category: Service) =>
  categoryMeta(category.id).blurb ?? category.desc;

/** Photos added most recently are flagged "New". */
const NEW_RE = /memento-custom-|\/invite-|tabletop-(cardio|md-leaf|caduceus|interiors|tooth)/;
export const productBadge = (p: Product): Badge | undefined =>
  p.img && NEW_RE.test(p.img) ? "New" : undefined;

export const CUSTOMIZATION_OPTIONS = [
  "Your name / text",
  "Logo & brand colours",
  "Size & material",
];

export const badgeClass = (b: Badge) =>
  b === "New"
    ? "bg-brand text-black"
    : b === "Bulk Order"
    ? "bg-white text-black border border-black/15"
    : "bg-black text-brand";
