import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    title: "NexaShop E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard built with Next.js and TypeScript.",
    longDescription:
      "Built a scalable e-commerce solution featuring product management, cart functionality, secure payment processing, and a comprehensive admin panel with analytics.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "web",
    liveUrl: "https://nexashop.vercel.app",
    githubUrl: "https://github.com/joshuamwenda/nexashop",
    featured: true,
    year: 2024,
  },
  {
    id: "02",
    title: "Lumina Brand Identity",
    description:
      "Complete visual identity design for a luxury skincare startup — including logo, brand guide, packaging, and marketing collateral.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    tags: ["Adobe Illustrator", "Figma", "Branding", "Logo Design", "Typography"],
    category: "design",
    liveUrl: "https://behance.net/joshuamwenda/lumina",
    featured: true,
    year: 2024,
  },
  {
    id: "03",
    title: "DevCollab Task Manager",
    description:
      "A real-time collaborative project management tool with WebSocket sync, Kanban boards, and team analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Framer Motion"],
    category: "web",
    liveUrl: "https://devcollab.app",
    githubUrl: "https://github.com/joshuamwenda/devcollab",
    featured: true,
    year: 2024,
  },
  {
    id: "04",
    title: "Pulse Health Dashboard",
    description:
      "A health-tech dashboard UI/UX design with interactive data visualizations, patient management, and appointment scheduling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Figma", "UI/UX", "Data Visualization", "Prototyping", "User Research"],
    category: "hybrid",
    liveUrl: "https://figma.com/community/pulse-health",
    featured: true,
    year: 2023,
  },
  {
    id: "05",
    title: "Atlas Travel Blog",
    description:
      "A beautifully crafted travel blog with CMS integration, image optimization, and interactive maps built on Next.js.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    tags: ["Next.js", "Contentful CMS", "Mapbox", "Tailwind CSS", "TypeScript"],
    category: "web",
    liveUrl: "https://atlas-travel.vercel.app",
    githubUrl: "https://github.com/joshuamwenda/atlas-blog",
    year: 2023,
  },
  {
    id: "06",
    title: "Kazi Startup Pitch Deck",
    description:
      "A stunning pitch deck and brand identity for a Kenyan fintech startup, combining modern UI with compelling visual storytelling.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    tags: ["Adobe XD", "Illustrator", "Motion Design", "Branding", "Presentation"],
    category: "hybrid",
    liveUrl: "https://behance.net/joshuamwenda/kazi",
    year: 2023,
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Graphic Design" },
  { id: "hybrid", label: "Hybrid Projects" },
] as const;
