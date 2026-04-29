const editorialImage = (id, { w = 1600, h, q = 80 } = {}) => {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: String(q),
    w: String(w),
  });

  if (h) params.set("h", String(h));

  return `https://images.unsplash.com/${id}?${params.toString()}`;
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const trustPoints = [
  "Custom clothing identity",
  "Seasonal collection showcase",
  "Store and social promotion",
];

export const heroSliderImages = [
  {
    title: "Noir Campaign",
    alt: "Landscape fashion campaign image with tailored clothing and cinematic light",
    image: editorialImage("photo-1515886657613-9f3515b0c78f", { w: 1800, h: 1120 }),
  },
  {
    title: "Studio Narrative",
    alt: "Landscape editorial fashion shoot in a neutral studio",
    image: editorialImage("photo-1529139574466-a303027c1d8b", { w: 1800, h: 1120 }),
  },
  {
    title: "Modern Silhouette",
    alt: "Landscape luxury fashion image with modern silhouette and clean background",
    image: editorialImage("photo-1500917293891-ef795e70e1f6", { w: 1800, h: 1120 }),
  },
  {
    title: "Atelier Movement",
    alt: "Landscape editorial image showing fashion movement with premium styling",
    image: editorialImage("photo-1483985988355-763728e1935b", { w: 1800, h: 1120 }),
  },
  {
    title: "Quiet Confidence",
    alt: "Landscape fashion campaign frame with warm editorial tone",
    image: editorialImage("photo-1496747611176-843222e1e57c", { w: 1800, h: 1120 }),
  },
];

export const identitySpotlight = {
  eyebrow: "Identity",
  title: "Not made for everyone. Built for those who stand apart.",
  text: "NOIR ATELIER frames clothing brands through mood, hierarchy, and visual restraint so the label feels memorable before anyone reads the product line.",
  image: editorialImage("photo-1494790108377-be9c29b29330", { w: 1400, h: 1700 }),
};

export const collectionCards = [
  {
    title: "Streetwear Identity",
    description: "Bold layering, sharp silhouettes, and a campaign-led point of view for labels that lead with attitude.",
    image: editorialImage("photo-1487412720507-e7ab37603c6f", { w: 1100, h: 1400 }),
  },
  {
    title: "Premium Casuals",
    description: "Soft structure, refined neutrals, and a calmer narrative built for elevated everyday dressing.",
    image: editorialImage("photo-1483985988355-763728e1935b", { w: 1100, h: 1400 }),
  },
  {
    title: "Seasonal Drops",
    description: "Editorial capsule framing that gives each release its own pace, tone, and visual memory.",
    image: editorialImage("photo-1529139574466-a303027c1d8b", { w: 1100, h: 1400 }),
  },
];

export const lookbookPreview = [
  {
    title: "Lead Frame",
    category: "Streetwear",
    image: editorialImage("photo-1496747611176-843222e1e57c", { w: 980, h: 1500 }),
    className: "md:row-span-2",
  },
  {
    title: "Modern Motion",
    category: "Casual",
    image: editorialImage("photo-1509631179647-0177331693ae", { w: 1600, h: 980 }),
    className: "md:col-span-2",
  },
  {
    title: "Quiet Texture",
    category: "Formals",
    image: editorialImage("photo-1515886657613-9f3515b0c78f", { w: 980, h: 1200 }),
    className: "",
  },
  {
    title: "Everyday Statement",
    category: "Seasonal",
    image: editorialImage("photo-1524504388940-b1c1722653e1", { w: 980, h: 1200 }),
    className: "",
  },
];

export const businessValues = [
  {
    title: "Visual Identity",
    text: "Sharper first impressions through cohesive art direction, layout rhythm, and image hierarchy.",
  },
  {
    title: "Collection Presentation",
    text: "Every drop reads like a point of view rather than a stack of products on a grid.",
  },
  {
    title: "Social Media Ready Assets",
    text: "Campaign-ready imagery and structure that translate naturally into launch and content formats.",
  },
  {
    title: "Store Visit Conversion",
    text: "A stronger digital presence that makes the brand easier to trust, remember, and contact.",
  },
];

export const services = [
  {
    title: "Clothing Brand Identity",
    text: "Build a consistent visual language for your label across site, imagery, and rollout moments.",
  },
  {
    title: "Collection Presentation",
    text: "Shape drops into editorial stories with clearer positioning, sharper sequencing, and stronger mood.",
  },
  {
    title: "Photoshoot Direction",
    text: "Guide framing, styling, crop logic, and tone so every image works harder for the brand.",
  },
  {
    title: "Social Media Campaign Visuals",
    text: "Create a launch-ready visual system that feels premium across reels, posts, stories, and lookbooks.",
  },
  {
    title: "Store Promotion Website",
    text: "Deliver a polished brand site that supports inquiries, studio credibility, and store conversion.",
  },
];

export const shopProducts = [
  {
    name: "Noir Signature Blazer",
    category: "Premium",
    details: "Structured tailoring, soft shoulder line, and premium finish for evening and occasion wear.",
    image: editorialImage("photo-1503341455253-b2e723bb3dbb", { w: 980, h: 1400 }),
  },
  {
    name: "Studio Pleat Trousers",
    category: "Premium",
    details: "Straight-leg tailoring designed for a cleaner silhouette and all-day composure.",
    image: editorialImage("photo-1512436991641-6745cdb1723f", { w: 980, h: 1400 }),
  },
  {
    name: "Streetline Overshirt",
    category: "Streetwear",
    details: "Layer-friendly outer piece with elevated street styling and a sharper campaign tone.",
    image: editorialImage("photo-1487412720507-e7ab37603c6f", { w: 980, h: 1400 }),
  },
  {
    name: "Classic Casual Co-ord",
    category: "Casual",
    details: "Relaxed premium set shaped for polished everyday dressing and easier visual continuity.",
    image: editorialImage("photo-1483985988355-763728e1935b", { w: 980, h: 1400 }),
  },
  {
    name: "Seasonal Edit Dress",
    category: "Seasonal",
    details: "A seasonal statement with lighter structure, softer movement, and editorial finish.",
    image: editorialImage("photo-1496747611176-843222e1e57c", { w: 980, h: 1400 }),
  },
  {
    name: "Evening Luxe Outerwear",
    category: "Premium",
    details: "A refined outerwear layer built for stronger presentation and quieter luxury impact.",
    image: editorialImage("photo-1494790108377-be9c29b29330", { w: 980, h: 1400 }),
  },
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Streetwear Label Founder",
    quote:
      "The site finally made our brand feel like it had a point of view. It looked less like a product page and more like a campaign.",
  },
  {
    name: "Sana Kapoor",
    role: "Fashion Studio Director",
    quote:
      "What stood out was the restraint. It felt premium, clear, and business-ready without losing the fashion energy.",
  },
  {
    name: "Dev Malhotra",
    role: "Campaign Photographer",
    quote:
      "Everything supported the clothing instead of crowding it. That balance made the brand feel much more established.",
  },
];

export const stats = [
  { label: "Collection concepts", value: "50+" },
  { label: "Brand visuals shaped", value: "20+" },
  { label: "Responsive experience", value: "100%" },
];

export const lookbookFilters = ["All", "Streetwear", "Casual", "Premium", "Seasonal"];

export const lookbookGallery = [
  {
    title: "Streetwear Lead",
    category: "Streetwear",
    image: editorialImage("photo-1487412720507-e7ab37603c6f", { w: 980, h: 1500 }),
    span: "md:row-span-2",
  },
  {
    title: "Streetwear Layering",
    category: "Streetwear",
    image: editorialImage("photo-1500917293891-ef795e70e1f6", { w: 980, h: 1200 }),
    span: "",
  },
  {
    title: "Streetwear Motion",
    category: "Streetwear",
    image: editorialImage("photo-1529139574466-a303027c1d8b", { w: 1600, h: 980 }),
    span: "md:col-span-2",
  },
  {
    title: "Casual Frame",
    category: "Casual",
    image: editorialImage("photo-1483985988355-763728e1935b", { w: 980, h: 1250 }),
    span: "",
  },
  {
    title: "Casual Studio",
    category: "Casual",
    image: editorialImage("photo-1524504388940-b1c1722653e1", { w: 980, h: 1500 }),
    span: "md:row-span-2",
  },
  {
    title: "Quiet Ease",
    category: "Casual",
    image: editorialImage("photo-1515886657613-9f3515b0c78f", { w: 980, h: 1200 }),
    span: "",
  },
  {
    title: "Formal Edit",
    category: "Premium",
    image: editorialImage("photo-1503341455253-b2e723bb3dbb", { w: 1600, h: 980 }),
    span: "md:col-span-2",
  },
  {
    title: "Formal Portrait",
    category: "Premium",
    image: editorialImage("photo-1494790108377-be9c29b29330", { w: 980, h: 1400 }),
    span: "",
  },
  {
    title: "Tailored Still",
    category: "Premium",
    image: editorialImage("photo-1512436991641-6745cdb1723f", { w: 980, h: 1500 }),
    span: "md:row-span-2",
  },
  {
    title: "Seasonal Texture",
    category: "Seasonal",
    image: editorialImage("photo-1515886657613-9f3515b0c78f", { w: 980, h: 1250 }),
    span: "",
  },
  {
    title: "Seasonal Direction",
    category: "Seasonal",
    image: editorialImage("photo-1496747611176-843222e1e57c", { w: 980, h: 1500 }),
    span: "",
  },
  {
    title: "Soft Horizon",
    category: "Seasonal",
    image: editorialImage("photo-1509631179647-0177331693ae", { w: 1600, h: 980 }),
    span: "md:col-span-2",
  },
];

export const aboutBlocks = [
  {
    title: "Brand Story",
    text: "NOIR ATELIER was shaped for labels that need more than a working website. It exists for brands that want a stronger emotional first impression and a cleaner business presence.",
  },
  {
    title: "Mission",
    text: "Create fashion websites that feel editorial, credible, and commercially useful without collapsing into generic retail templates.",
  },
  {
    title: "Vision",
    text: "Build digital fashion identities where presentation feels as intentional as the collection itself.",
  },
  {
    title: "Why Choose Us",
    text: "Because good clothing can still feel forgettable online without hierarchy, restraint, and a point of view. We build the missing layer.",
  },
  {
    title: "Founder Note",
    text: "Use this space for the personal story, creative discipline, and long-view ambition behind the label or studio.",
  },
];

export const featuredMentions = ["Featured Mention", "Studio Partner", "Retail Collaboration"];

export const editorialShowcase = [
  {
    title: "Collection Philosophy",
    text: "Each category is shaped as a campaign mood rather than a product shelf, keeping the label readable and emotionally distinctive.",
  },
  {
    title: "Campaign Pacing",
    text: "The site gives every release room to breathe through stronger image sequencing, visual contrast, and cleaner spacing.",
  },
];
