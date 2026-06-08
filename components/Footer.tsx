"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-white text-lg">
            JM<span className="text-blue-400">.</span>
          </span>
          <span className="text-slate-600 text-sm">
            © {year} Joshua Mwenda. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-1 text-slate-600 text-sm">
          Built with
          <span className="text-slate-400 mx-1">Next.js</span>+
          <span className="text-slate-400 mx-1">Tailwind</span>+
          <span className="text-slate-400 mx-1">Framer Motion</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="ml-1"
          >
            ❤️
          </motion.span>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-white/[0.07] hover:border-white/20 transition-all group"
          aria-label="Back to top"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
