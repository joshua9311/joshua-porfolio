"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/skills";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay: number;
}

function SkillBar({ name, level, color, delay }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className={cn("h-full rounded-full bg-gradient-to-r", color)}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="// expertise"
          title="Skills & "
          titleGradient="Capabilities"
          description="A comprehensive toolkit built across years of hands-on experience in development, design, and technology."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.id} delay={catIndex * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass rounded-2xl p-8 border border-white/[0.07] h-full"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center text-xl",
                      `bg-gradient-to-br ${category.color} opacity-80`
                    )}
                    style={{ background: undefined }}
                  >
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br", category.color)}>
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">
                      {category.title}
                    </h3>
                    <span className="text-slate-500 text-xs font-mono">
                      {category.skills.length} skills
                    </span>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={catIndex * 0.1 + skillIndex * 0.08}
                    />
                  ))}
                </div>

                {/* Average indicator */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs font-mono">Average proficiency</span>
                    <span
                      className={cn(
                        "font-display font-bold text-lg gradient-text"
                      )}
                    >
                      {Math.round(
                        category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length
                      )}%
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional tools row */}
        <AnimatedSection delay={0.5} className="mt-12">
          <div className="glass rounded-2xl p-6 border border-white/[0.07]">
            <p className="text-center text-slate-500 text-sm font-mono mb-6">
              // tools & technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "VS Code", "Git", "GitHub", "Vercel", "Netlify", "Figma",
                "Adobe CC", "Postman", "Linux", "Docker", "Supabase", "MongoDB",
              ].map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass px-4 py-2 rounded-xl text-sm text-slate-300 border border-white/[0.07] cursor-default hover:border-blue-500/30 hover:text-blue-300 transition-colors"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
