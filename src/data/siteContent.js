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
  "Store & social promotion",
];

export const heroSliderImages = [
  {
    title: "Streetwear Campaign",
    alt: "Wide-format fashion campaign image with streetwear styling",
    image: editorialImage("photo-1496747611176-843222e1e57c", { w: 1800, h: 1120 }),
  },
  {
    title: "Neutral Studio Edit",
    alt: "Landscape editorial fashion portrait in a neutral studio tone",
    image: editorialImage("photo-1524504388940-b1c1722653e1", { w: 1800, h: 1120 }),
  },
  {
    title: "Modern Street Line",
    alt: "Landscape fashion image with modern clothing and clean background",
    image: editorialImage("photo-1515886657613-9f3515b0c78f", { w: 1800, h: 1120 }),
  },
  {
    title: "Lifestyle Story",
    alt: "Wide editorial lifestyle shot with premium wardrobe styling",
    image: editorialImage("photo-1504609813442-a8924e83f76e", { w: 1800, h: 1120 }),
  },
  {
    title: "Clean Editorial Motion",
    alt: "Landscape street-style fashion image with editorial mood",
    image: editorialImage("photo-1515886657613-9f3515b0c78f", { w: 1800, h: 1120 }),
  },
];

export const collectionCards = [
  {
    title: "Streetwear Identity",
    description: "Clean silhouettes and bold layering presented with business-ready polish.",
    image: editorialImage("photo-1487412720507-e7ab37603c6f", { w: 1100, h: 1400 }),
  },
  {
    title: "Premium Casuals",
    description: "Soft neutrals, balanced tailoring, and elevated everyday brand language.",
    image: editorialImage("photo-1494790108377-be9c29b29330", { w: 1100, h: 1400 }),
  },
  {
    title: "Seasonal Drops",
    description: "Curated capsule presentations that keep the collection narrative consistent.",
    image: editorialImage("photo-1517836357463-d25dfeac3438", { w: 1100, h: 1400 }),
  },
];

export const lookbookPreview = [
  {
    title: "Lead Frame",
    image: editorialImage("photo-1483985988355-763728e1935b", { w: 1000, h: 1500 }),
    className: "md:row-span-2",
  },
  {
    title: "Modern Motion",
    image: editorialImage("photo-1509631179647-0177331693ae", { w: 1700, h: 1020 }),
    className: "md:col-span-2",
  },
  {
    title: "Quiet Texture",
    image: editorialImage("photo-1529139574466-a303027c1d8b", { w: 1000, h: 1300 }),
    className: "",
  },
  {
    title: "Everyday Statement",
    image: editorialImage("photo-1483985988355-763728e1935b", { w: 1000, h: 1300 }),
    className: "",
  },
];

export const services = [
  {
    title: "Clothing Brand Identity",
    text: "Visual language, collection positioning, and cohesive digital presentation.",
  },
  {
    title: "Collection Presentation",
    text: "Editorial layouts that turn collections into brand stories instead of product lists.",
  },
  {
    title: "Photoshoot Direction",
    text: "Campaign framing, styling tone, and image hierarchy designed for fashion business trust.",
  },
  {
    title: "Social Media Campaign Visuals",
    text: "Launch-ready assets built to carry a premium identity across channels.",
  },
  {
    title: "Store Promotion Website",
    text: "Professional web presence that supports store visits, inquiries, and long-term recognition.",
  },
];

export const shopProducts = [
  {
    name: "Noir Signature Blazer",
    category: "Formals",
    price: "₹7,990",
    details: "Structured tailoring, soft shoulder line, and premium finish for evening and occasion wear.",
    image: "https://i.pinimg.com/originals/93/3d/0f/933d0f684cb2153dd99968b5b8a4648b.jpg",
  },
  {
    name: "Studio Pleat Trousers",
    category: "Formals",
    price: "₹4,850",
    details: "Straight-leg formal trousers designed for a sharper silhouette and all-day comfort.",
    image: "https://i.pinimg.com/originals/9e/81/69/9e8169908f3759f7dc060ebf80ca5a22.jpg",
  },
  {
    name: "Streetline Overshirt",
    category: "Streetwear",
    price: "₹3,990",
    details: "Layer-friendly overshirt with elevated street styling and clean branded detailing.",
    image: "https://i.pinimg.com/originals/5f/c4/b1/5fc4b1e9c7caeea23f232a88a80a72aa.jpg",
  },
  {
    name: "Classic Casual Co-ord",
    category: "Casual",
    price: "₹5,490",
    details: "Relaxed premium set with warm neutral styling made for everyday polished dressing.",
    image: "https://i.pinimg.com/originals/54/9b/5d/549b5de639b955634f66e25b4f676620.jpg",
  },
  {
    name: "Seasonal Edit Dress",
    category: "Seasonal",
    price: "₹6,250",
    details: "A statement seasonal piece with lighter structure, modern movement, and editorial finish.",
    image: "https://i.pinimg.com/originals/47/16/24/47162415eeec0e5e7c5cf8c4c59bbab0.jpg",
  },
  {
    name: "Evening Luxe Outerwear",
    category: "Formals",
    price: "₹8,750",
    details: "Premium outerwear layer built for standout presentation with refined luxury appeal.",
    image: "https://i.pinimg.com/originals/fc/00/36/fc00364d79d124f34f8edb372b5a9fb6.png",
  },
];

export const businessValues = [
  {
    title: "Visual Identity",
    text: "Sharper first impressions through consistent styling, layout, and photography direction.",
  },
  {
    title: "Collection Presentation",
    text: "Every drop framed with a clear business story and polished showcase structure.",
  },
  {
    title: "Social Media Ready Assets",
    text: "Editorial content blocks that translate smoothly into Instagram and promotional formats.",
  },
  {
    title: "Store Visit Conversion",
    text: "A cleaner web experience that builds confidence and moves people toward contact or visit.",
  },
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Streetwear Label Founder",
    quote:
      "The presentation made our brand feel established. It gave the collection structure and made the store experience far more premium.",
  },
  {
    name: "Sana Kapoor",
    role: "Fashion Studio Director",
    quote:
      "The balance between editorial visuals and business clarity is exactly what we needed. Clean, credible, and easy to present to partners.",
  },
  {
    name: "Dev Malhotra",
    role: "Campaign Photographer",
    quote:
      "Everything feels intentional. The website supports the clothing instead of competing with it, which makes the brand stronger.",
  },
];

export const stats = [
  { label: "Collection launches supported", value: "45+" },
  { label: "Brand identity projects", value: "18" },
  { label: "Retail and studio clients", value: "12+" },
];

export const lookbookFilters = ["All", "Streetwear", "Casual", "Formals", "Seasonal"];

export const lookbookGallery = [
  {
    title: "Streetwear Lead",
    category: "Streetwear",
    image: "https://i.pinimg.com/originals/5f/c4/b1/5fc4b1e9c7caeea23f232a88a80a72aa.jpg",
    span: "md:row-span-2",
  },
  {
    title: "Streetwear Layering",
    category: "Streetwear",
    image: "https://i.pinimg.com/originals/d7/ef/7b/d7ef7b5cfcfd5bfc545c307613021ea0.jpg",
    span: "",
  },
  {
    title: "Streetwear Portrait",
    category: "Streetwear",
    image: "https://i.pinimg.com/originals/99/84/dc/9984dc2393bac97d6d9581dfdf9c3ed1.jpg",
    span: "",
  },
  {
    title: "Streetwear Motion",
    category: "Streetwear",
    image: "https://i.pinimg.com/originals/51/7f/fd/517ffdbc33620528524824c768da0933.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Casual Frame",
    category: "Casual",
    image: "https://i.pinimg.com/originals/54/9b/5d/549b5de639b955634f66e25b4f676620.jpg",
    span: "",
  },
  {
    title: "Casual Structure",
    category: "Casual",
    image: "https://i.pinimg.com/originals/a3/ed/88/a3ed8848f0852b0b92fc6378dfd40dec.jpg",
    span: "",
  },
  {
    title: "Casual Ease",
    category: "Casual",
    image: "https://i.pinimg.com/originals/a6/06/42/a60642d4335633db035331f1634cdae7.webp",
    span: "md:row-span-2",
  },
  {
    title: "Casual Studio",
    category: "Casual",
    image: "https://i.pinimg.com/originals/5f/15/80/5f15804b8229ee779eecc4a702a35d15.jpg",
    span: "",
  },
  {
    title: "Formal Edit",
    category: "Formals",
    image: "https://i.pinimg.com/webp85/736x/df/7f/51/df7f51baf5d6c7e5ec3d83afcca89e7f.webp",
    span: "md:col-span-2",
  },
  {
    title: "Formal Portrait",
    category: "Formals",
    image: "https://i.pinimg.com/originals/f3/26/99/f32699769eeb32b71030c5e1353f0603.png",
    span: "",
  },
  {
    title: "Formal Statement",
    category: "Formals",
    image: "https://i.pinimg.com/originals/9e/81/69/9e8169908f3759f7dc060ebf80ca5a22.jpg",
    span: "",
  },
  {
    title: "Formal Campaign",
    category: "Formals",
    image: "https://i.pinimg.com/originals/94/a9/e2/94a9e2721f6468292a58fb76d40ec7b0.jpg",
    span: "md:row-span-2",
  },
  {
    title: "Formal Tailoring",
    category: "Formals",
    image: "https://i.pinimg.com/originals/93/3d/0f/933d0f684cb2153dd99968b5b8a4648b.jpg",
    span: "",
  },
  {
    title: "Formal Luxe",
    category: "Formals",
    image: "https://i.pinimg.com/originals/fc/00/36/fc00364d79d124f34f8edb372b5a9fb6.png",
    span: "",
  },
  {
    title: "Seasonal Texture",
    category: "Seasonal",
    image: "https://i.pinimg.com/originals/47/16/24/47162415eeec0e5e7c5cf8c4c59bbab0.jpg",
    span: "",
  },
  {
    title: "Seasonal Layering",
    category: "Seasonal",
    image: "https://i.pinimg.com/originals/35/53/29/355329d85b4acb46c857a98350a20576.jpg",
    span: "",
  },
  {
    title: "Seasonal Direction",
    category: "Seasonal",
    image: "https://i.pinimg.com/originals/eb/92/11/eb92119da306eb5d5dd9dafba2a5f59c.png",
    span: "",
  },
];
