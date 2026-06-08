"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

const highlights = [
  { icon: "💻", label: "Full-Stack Dev", desc: "Next.js, React, Node.js" },
  { icon: "🎨", label: "Visual Design", desc: "UI/UX, Brand Identity" },
  { icon: "🔧", label: "ICT Expert", desc: "Systems & Networking" },
  { icon: "🚀", label: "Performance", desc: "Fast, SEO-optimized" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="// about me"
          title="Crafting Digital "
          titleGradient="Excellence"
          description=""
          centered={false}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <AnimatedSection delay={0.1}>
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;m <span className="text-white font-semibold">Joshua Mwenda</span>, a
                multi-disciplinary creative and developer from{" "}
                <span className="text-blue-400">Nairobi, Kenya</span> — where I blend
                technical precision with visual artistry to deliver world-class digital
                products.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-slate-400 leading-relaxed">
                My journey started with a deep fascination for how technology and aesthetics
                intersect. Today, I specialize in building full-stack web applications,
                designing compelling brand identities, and solving complex ICT challenges —
                all under one roof.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-slate-400 leading-relaxed">
                I believe great software is as much about how it <em className="text-slate-300">feels</em> to
                use as how it <em className="text-slate-300">works</em>. Every line of code and every
                design decision is made with the end user in mind — crafting experiences that
                are fast, intuitive, and memorable.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="pt-2 space-y-3">
                <h3 className="font-display font-semibold text-white">Career Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  My goal is to build a globally recognized creative studio that helps
                  African businesses compete on the world stage — through exceptional
                  technology and design. I&apos;m actively growing toward that vision, one
                  project at a time.
                </p>
              </div>
            </AnimatedSection>

            {/* Quick facts */}
            <AnimatedSection delay={0.5}>
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { label: "Location", value: "Nairobi, Kenya 🇰🇪" },
                  { label: "Status", value: "Open to opportunities" },
                  { label: "Languages", value: "English, Swahili" },
                ].map((fact) => (
                  <div key={fact.label} className="glass px-4 py-2 rounded-xl">
                    <span className="text-slate-500 text-xs font-mono">{fact.label}: </span>
                    <span className="text-slate-300 text-sm">{fact.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Card grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.label} delay={0.15 * i} direction="left">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass rounded-2xl p-6 glass-hover cursor-default border border-white/[0.07] group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white mb-1 text-base">
                    {item.label}
                  </h3>
                  <p className="text-slate-500 text-sm font-mono">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}

            {/* Wide card */}
            <AnimatedSection delay={0.6} direction="left" className="col-span-2">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass rounded-2xl p-6 border border-white/[0.07] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="font-mono text-blue-400 text-xs mb-3 tracking-wider">
                    // currently focused on
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js 14",
                      "TypeScript",
                      "Framer Motion",
                      "Tailwind CSS",
                      "Figma",
                      "Node.js",
                    ].map((tech) => (
                      <span key={tech} className="tag-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
