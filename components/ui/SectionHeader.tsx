"use client";

import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleGradient,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  const parts = titleGradient
    ? title.split(titleGradient)
    : [title];

  return (
    <div className={cn(centered && "text-center", "mb-16", className)}>
      {eyebrow && (
        <AnimatedSection delay={0}>
          <span className="font-mono text-sm text-blue-400 tracking-widest uppercase mb-4 block">
            {eyebrow}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          {parts[0]}
          {titleGradient && (
            <span className="gradient-text">{titleGradient}</span>
          )}
          {parts[1]}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2}>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
