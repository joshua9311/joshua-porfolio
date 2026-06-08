"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="// what I offer"
          title="Services & "
          titleGradient="Solutions"
          description="From concept to launch — I deliver end-to-end digital services that help businesses stand out and scale up."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "relative glass rounded-2xl p-8 border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 overflow-hidden h-full group"
                )}
              >
                {/* Background gradient */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    service.gradient
                  )}
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {service.icon}
                  </div>

                  <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:gradient-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                        <svg
                          className="w-4 h-4 text-blue-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimatedSection delay={0.4} className="mt-16">
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative glass rounded-3xl p-10 md:p-14 border border-white/[0.07] overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-600/20 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to build something{" "}
                <span className="gradient-text">extraordinary</span>?
              </h3>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Let&apos;s collaborate on your next project. I&apos;m available for freelance
                work, full-time roles, and creative partnerships.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                >
                  Start a Project
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
