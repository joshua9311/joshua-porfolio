# Joshua Mwenda Portfolio

<div align="center">
  <img src="public/og-image.png" alt="Joshua Mwenda Portfolio" width="100%" />

  <br />
  <br />

  [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)](https://www.framer.com/motion/)
  [![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

  **A premium, world-class personal portfolio for Joshua Mwenda — Web Developer, Graphic Designer & ICT Enthusiast**

  [🌐 Live Demo](https://joshuamwenda.dev) · [📧 Contact](mailto:hello@joshuamwenda.dev) · [🐛 Report Bug](https://github.com/joshuamwenda/portfolio/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [✨ Features](#features)
- [🛠 Tech Stack](#tech-stack)
- [📁 Project Structure](#project-structure)
- [🚀 Getting Started](#getting-started)
- [⚙️ Configuration](#configuration)
- [🚢 Deployment Guide (Vercel)](#deployment-guide)
- [🎨 Customization Guide](#customization-guide)
- [📧 Contact Form Setup](#contact-form-setup)
- [🔍 SEO Configuration](#seo-configuration)
- [📊 Performance](#performance)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

---

## Overview

A top-tier personal portfolio website built with modern web technologies. Designed to showcase Joshua Mwenda's expertise as a Web Developer, Graphic Designer, and ICT Enthusiast with a visually stunning, performance-optimized, and fully accessible experience.

The portfolio features a dark-mode-first aesthetic with blue/purple gradient accents, glassmorphism UI components, smooth Framer Motion animations, and a fully data-driven projects system.

---

## ✨ Features

### 🎨 Design & UI
- **Dark mode default** — Rich `#050816` background with blue/purple gradient accents
- **Glassmorphism cards** — Frosted glass effect with subtle borders and backdrop blur
- **Animated background** — Floating radial orbs and subtle grid overlay on the hero section
- **Typing animation** — Dynamic role switcher in the hero (Web Developer → Graphic Designer → ICT Enthusiast)
- **Gradient text** — Blue-to-purple-to-cyan gradient on key headings
- **Smooth scroll** — Native CSS smooth scroll with `scroll-padding-top` for sticky nav

### 🧭 Navigation
- **Sticky navbar** — Transparent → glassmorphism on scroll
- **Active section highlighting** — Animated pill indicator tracks the current section
- **Mobile responsive menu** — Animated hamburger with full-screen overlay
- **Smooth scroll CTA** — All nav links scroll to sections without page reload

### 📄 Sections
| Section | Description |
|---------|-------------|
| **Hero** | Full-screen with animated orbs, typing role animation, stats row |
| **About** | Professional bio, career vision, tech stack tags, highlight cards |
| **Skills** | Animated skill bars by category (Web Dev / Design / ICT) + tools grid |
| **Projects** | Data-driven from `/data/projects.ts`, filterable by category |
| **Services** | 6 service cards with hover gradient backgrounds |
| **Testimonials** | Auto-advancing carousel with manual controls and star ratings |
| **Contact** | Form (name/email/subject/message), social links, availability badge |
| **Footer** | Copyright, tech stack credits, back-to-top button |

### ⚡ Performance
- Next.js App Router with React Server Components
- `next/image` for automatic WebP/AVIF optimization and lazy loading
- Minimal client-side JS with strategic `"use client"` boundaries
- Framer Motion animations with `useInView` for scroll-triggered reveals
- Code-split by section via dynamic imports (optional)

### 🔍 SEO
- `metadata` API with full Open Graph and Twitter Cards
- `sitemap.ts` — Auto-generated XML sitemap
- `robots.ts` — Search engine crawl configuration
- Semantic HTML5 structure throughout
- Canonical URL configuration

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | 14.x | React framework with App Router & SSR |
| [TypeScript](https://www.typescriptlang.org/) | 5.4 | Static typing (strict mode) |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | 11.x | Animation library |
| [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) | 9.x | Scroll-triggered animations |
| [React Hot Toast](https://react-hot-toast.com/) | 2.4 | Notification toasts |
| [clsx](https://github.com/lukeed/clsx) | 2.x | Conditional classnames |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 2.x | Merge Tailwind classes safely |

---

## 📁 Project Structure

```
joshua-mwenda-portfolio/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles, CSS variables, utility classes
│   ├── layout.tsx                # Root layout with SEO metadata
│   ├── page.tsx                  # Home page — assembles all sections
│   ├── sitemap.ts                # Auto-generated XML sitemap
│   └── robots.ts                 # robots.txt configuration
│
├── components/
│   ├── Navbar.tsx                # Sticky responsive navigation
│   ├── Footer.tsx                # Footer with back-to-top
│   ├── ui/
│   │   ├── AnimatedSection.tsx   # Reusable scroll-reveal wrapper
│   │   └── SectionHeader.tsx     # Consistent section headers with gradient text
│   └── sections/
│       ├── HeroSection.tsx       # Hero with typing animation & orbs
│       ├── AboutSection.tsx      # About me with highlight cards
│       ├── SkillsSection.tsx     # Skill bars by category
│       ├── ProjectsSection.tsx   # Filterable project grid
│       ├── ServicesSection.tsx   # Services cards + CTA banner
│       ├── TestimonialsSection.tsx # Auto-advancing testimonial carousel
│       └── ContactSection.tsx    # Contact form + social links
│
├── data/                         # ⭐ All content data lives here
│   ├── projects.ts               # Projects array (add your own!)
│   ├── skills.ts                 # Skills by category
│   ├── services.ts               # Services offered
│   └── testimonials.ts           # Client testimonials
│
├── lib/
│   └── utils.ts                  # Utility functions (cn, slugify, truncate)
│
├── public/                       # Static assets
│   ├── favicon.ico
│   ├── og-image.png              # Open Graph image (create 1200×630)
│   ├── resume.pdf                # Your CV/resume
│   └── site.webmanifest
│
├── types/
│   └── index.ts                  # TypeScript interfaces (Project, Skill, etc.)
│
├── .env.example                  # Environment variables template
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18.17+ ([Download](https://nodejs.org/))
- **npm** 9+ or **yarn** 1.22+ or **pnpm** 8+
- **Git** ([Download](https://git-scm.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/joshuamwenda/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates on file changes.

### 5. Build for Production (Local Test)

```bash
npm run build
npm start
```

### 6. Type Check

```bash
npm run type-check
```

### 7. Lint

```bash
npm run lint
```

---

## ⚙️ Configuration

### Adding/Editing Projects

Open `data/projects.ts` and modify the `projects` array:

```typescript
{
  id: "07",                        // Unique ID
  title: "My New Project",
  description: "Short description shown on the card.",
  longDescription: "Optional longer description.",
  image: "https://...",            // Unsplash URL or local /public/projects/...
  tags: ["React", "TypeScript"],   // Tech tags (max 4 shown, rest hidden)
  category: "web",                 // "web" | "design" | "hybrid"
  liveUrl: "https://...",          // Optional live demo URL
  githubUrl: "https://...",        // Optional GitHub repo URL
  featured: true,                  // Shows "Featured" badge
  year: 2025,
}
```

### Updating Skills

Edit `data/skills.ts` — modify skill names and proficiency levels (0-100):

```typescript
{ name: "My Skill", level: 85 }
```

### Updating Testimonials

Edit `data/testimonials.ts` — replace placeholder content with real client testimonials.

### Updating Personal Info

Search for `joshuamwenda` and `Joshua Mwenda` across the codebase to update personal information, social links, and email addresses.

---

## 🚢 Deployment Guide (Vercel)

### Method 1: Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Joshua Mwenda Portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click **"Add New Project"**
   - Import your GitHub repository
   - Vercel auto-detects Next.js — no configuration needed

3. **Set Environment Variables**
   - In Vercel Dashboard → Project Settings → Environment Variables
   - Add `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - Add any email service keys

4. **Deploy**
   - Click **"Deploy"** — your site goes live in ~60 seconds
   - Every push to `main` auto-deploys

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Custom Domain

In Vercel Dashboard → Domains → Add your domain → Follow DNS instructions.

---

## 🎨 Customization Guide

### Colors & Theme

In `app/globals.css`:

```css
:root {
  --background: #050816;       /* Main background */
  --accent-blue: #3B82F6;      /* Primary accent */
  --accent-purple: #8B5CF6;    /* Secondary accent */
  --accent-cyan: #06B6D4;      /* Tertiary accent */
}
```

### Fonts

The portfolio uses **Syne** (display/headings) + **DM Sans** (body) + **JetBrains Mono** (code/labels).

To change fonts, update the Google Fonts import in `globals.css` and the `font-family` variables.

### Animations

Animations are controlled via Framer Motion variants in each section component. Adjust `duration`, `delay`, and `ease` values to change feel.

---

## 📧 Contact Form Setup

The contact form is wired up and ready. Connect one of these services:

### Option A: Formspree (Easiest, Free)
1. Go to [formspree.io](https://formspree.io) → Create free account
2. Create a new form → Copy your endpoint URL
3. Add to `.env.local`: `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID`
4. Update the `handleSubmit` in `ContactSection.tsx` to `fetch` that endpoint

### Option B: EmailJS (No Backend)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a service + template
3. Add keys to `.env.local`
4. Install: `npm install @emailjs/browser`
5. Use `emailjs.send()` in `handleSubmit`

### Option C: Resend API (Most Professional)
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Create `app/api/contact/route.ts` with a POST handler
4. Call it from the form

---

## 🔍 SEO Configuration

Update these in `app/layout.tsx`:

```typescript
const siteUrl = "https://your-actual-domain.com";

export const metadata: Metadata = {
  title: "Your Name — Your Roles",
  description: "Your professional description...",
  // Update openGraph, twitter sections too
};
```

**Create the OG image**: Design a 1200×630px image and save as `public/og-image.png`.

---

## 📊 Performance

Target Lighthouse scores:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

Key optimizations:
- All images use `next/image` with lazy loading and WebP/AVIF
- Framer Motion's `useInView` prevents off-screen animation calculations
- CSS custom properties instead of JavaScript for theming
- Minimal `"use client"` usage — most rendering is server-side

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">
  <strong>Built with passion by Joshua Mwenda 🇰🇪</strong>
  <br />
  <a href="mailto:hello@joshuamwenda.dev">hello@joshuamwenda.dev</a>
</div>
