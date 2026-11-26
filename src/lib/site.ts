export const site = {
  name: "Mitravani",
  tagline: "The Voice of Farmers",
  description:
    "A farmer-first initiative building meaningful connections with crop growers, dairy farmers and aquaculture communities.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our approach", href: "/our-approach" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "Dairy", href: "/dairy" },
  { label: "Aquaculture", href: "/aquaculture" },
];
