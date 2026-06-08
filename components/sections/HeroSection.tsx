"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const roles = ["Web Developer", "Graphic Designer", "ICT Enthusiast"];

function TypingText() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = roles[roleIndex];
      const el = ref.current;
      if (!el) return;

      if (!isDeleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timer = setTimeout(type, isDeleting ? 60 : 90);
    };

    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, []);

  return <span ref={ref} className="gradient-text" />;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.22, 1, 0.36, 1], duration: 0.7 },
  },
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="orb w-[600px] h-[600px] bg-blue-600 -top-32 -left-32"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="orb w-[500px] h-[500px] bg-purple-600 top-1/2 -right-40"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="orb w-[400px] h-[400px] bg-cyan-600 bottom-0 left-1/3"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">

          {/* Left — Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Available badge */}
            <motion.div variants={item} className="flex mb-8">
              <span className="glass px-4 py-2 rounded-full text-sm text-slate-300 border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for freelance work
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={item} className="mb-4">
              <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.92] tracking-tight"
            >
              Joshua
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Mwenda
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              variants={item}
              className="font-display text-2xl md:text-3xl text-slate-300 mb-6 h-10 flex items-center gap-2"
            >
              <TypingText />
              <span className="w-0.5 h-8 bg-blue-400 animate-pulse" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed"
            >
              I build premium digital experiences — from pixel-perfect websites
              to compelling brand identities that make lasting impressions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary group flex items-center gap-2"
              >
                View Projects
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-secondary group flex items-center gap-2"
              >
                Contact Me
                <svg
                  className="w-4 h-4 group-hover:rotate-12 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-14 flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: "30+", label: "Projects Completed" },
                { value: "20+", label: "Happy Clients" },
                { value: "3+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="font-display text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Joshua's Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow rings behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl scale-110" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-blue-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-purple-500/15"
              />

              {/* Photo container */}
              <div className="relative w-[380px] h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent z-10 pointer-events-none" />

                <Image
                  src="/joshua-mwenda.png"
                  alt="Joshua Mwenda"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="380px"
                />

                {/* Name tag overlay */}
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <div className="glass rounded-xl px-4 py-3 border border-white/10">
                    <div className="font-display font-bold text-white text-base">
                      Joshua Mwenda
                    </div>
                    <div className="text-blue-400 text-xs font-mono">
                      Web Dev · Designer · ICT
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 border border-white/10 shadow-xl"
              >
                <div className="text-2xl mb-1">🚀</div>
                <div className="text-white text-xs font-display font-bold">Open to Work</div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 border border-white/10 shadow-xl"
              >
                <div className="text-2xl mb-1">🇰🇪</div>
                <div className="text-white text-xs font-display font-bold">Nairobi, Kenya</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
