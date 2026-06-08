"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="// testimonials"
          title="What Clients "
          titleGradient="Say"
          description="Real feedback from real clients I've had the privilege of working with."
        />

        <AnimatedSection delay={0.2}>
          <div className="relative glass rounded-3xl p-8 md:p-14 border border-white/[0.07] overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-6 right-8 text-8xl text-white/[0.03] font-display font-bold leading-none select-none">
              &ldquo;
            </div>

            {/* Carousel */}
            <div className="overflow-hidden min-h-[220px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="mb-6">
                    <StarRating rating={testimonials[current].rating} />
                  </div>
                  <blockquote className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 font-light">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                      <Image
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white">
                        {testimonials[current].name}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {testimonials[current].role} · {testimonials[current].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className="transition-all duration-300"
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-8 h-2 bg-gradient-to-r from-blue-500 to-purple-500"
                          : "w-2 h-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
