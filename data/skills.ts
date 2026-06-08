import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "web",
    title: "Web Development",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 78 },
      { name: "API Integration", level: 82 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    id: "design",
    title: "Graphic Design",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "UI/UX Design", level: 88 },
      { name: "Figma", level: 90 },
      { name: "Adobe Illustrator", level: 85 },
      { name: "Brand Identity", level: 87 },
      { name: "Logo Design", level: 90 },
      { name: "Poster Design", level: 85 },
      { name: "Motion Design", level: 75 },
      { name: "Typography", level: 88 },
    ],
  },
  {
    id: "ict",
    title: "ICT Knowledge",
    icon: "🔧",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Computer Systems", level: 85 },
      { name: "Networking Basics", level: 80 },
      { name: "Tech Troubleshooting", level: 88 },
      { name: "Linux / CLI", level: 78 },
      { name: "Git & GitHub", level: 90 },
      { name: "Database Design", level: 80 },
      { name: "Cloud (Vercel/AWS)", level: 75 },
      { name: "Cybersecurity Basics", level: 70 },
    ],
  },
];
