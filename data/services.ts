import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description:
      "High-performance, SEO-optimized websites and web applications built with modern frameworks.",
    icon: "🚀",
    features: [
      "Next.js & React applications",
      "Responsive mobile-first design",
      "Performance optimization",
      "CMS integration",
      "E-commerce solutions",
    ],
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Intuitive, beautiful user interfaces designed with user psychology and conversion in mind.",
    icon: "✦",
    features: [
      "User research & wireframing",
      "Interactive prototypes",
      "Design systems",
      "Usability testing",
      "Figma delivery",
    ],
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    id: "logo",
    title: "Logo Design",
    description:
      "Memorable, versatile logos that capture your brand essence and stand the test of time.",
    icon: "◈",
    features: [
      "Multiple concept exploration",
      "Vector formats (SVG, AI, EPS)",
      "Light & dark variants",
      "Usage guidelines",
      "Unlimited revisions",
    ],
    gradient: "from-amber-600/20 to-orange-600/20",
  },
  {
    id: "branding",
    title: "Brand Identity",
    description:
      "Complete visual brand systems that communicate your values across every touchpoint.",
    icon: "◐",
    features: [
      "Brand strategy",
      "Color palette & typography",
      "Brand guidelines book",
      "Business card & stationery",
      "Social media kit",
    ],
    gradient: "from-rose-600/20 to-purple-600/20",
  },
  {
    id: "landing",
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages designed to turn visitors into customers with compelling UX.",
    icon: "⬡",
    features: [
      "A/B testing ready",
      "Analytics integration",
      "Lead capture forms",
      "Fast load times",
      "Mobile optimized",
    ],
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    id: "poster",
    title: "Poster & Print Design",
    description:
      "Eye-catching print and digital materials that make your brand impossible to ignore.",
    icon: "▣",
    features: [
      "Event posters",
      "Marketing flyers",
      "Social media graphics",
      "Print-ready files",
      "Digital adaptations",
    ],
    gradient: "from-indigo-600/20 to-blue-600/20",
  },
];
