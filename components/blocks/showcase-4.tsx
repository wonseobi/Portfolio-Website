"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { BorderGlow } from "@/components/BorderGlow";

const filters = ["All", "Web", "Mobile", "UI/UX"] as const;
type Filter = (typeof filters)[number];

interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  tags: Filter[];
  href: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Blocquant",
    description: "Crypto trading digital platform with a conversion-driven web experience, real-time data, and modern UI/UX built for high-frequency traders.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    href: "https://blocquant.com",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Developer portfolio with optimized performance, project showcase, and smooth interactions — built with React and deployed on a custom domain.",
    year: "2024",
    tags: ["Web"],
    href: "https://wonlee.io",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    id: 3,
    title: "Dental Practice Platform",
    description: "Lead-generation platform for a U.S. dental chain. Conversion-optimized landing pages with CRM integration routing hundreds of monthly patient leads.",
    year: "2024",
    tags: ["Web"],
    href: "#",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },
  {
    id: 4,
    title: "Legal Firm Website",
    description: "High-converting website for a U.S. law firm with intake form automation, SEO optimization, and Meta Pixel tracking for paid ad campaigns.",
    year: "2024",
    tags: ["Web"],
    href: "#",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Property listing platform with dynamic search, lead capture, and GoHighLevel CRM integration — part of a $130M+ ad spend marketing ecosystem.",
    year: "2023",
    tags: ["Web"],
    href: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: 6,
    title: "Certerus Mobile App",
    description: "Cross-platform mobile application built with React Native for iOS and Android. Scalable architecture handling real-time data and offline support.",
    year: "2023",
    tags: ["Mobile"],
    href: "#",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    id: 7,
    title: "Crypto Exchange UI",
    description: "Dashboard UI for a crypto exchange platform with live price feeds, portfolio tracking, and a dark-mode-first design system.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    href: "#",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
  },
  {
    id: 8,
    title: "React Native Fintech App",
    description: "Mobile fintech application with biometric authentication, transaction history, and push notifications — shipped on both iOS and Android.",
    year: "2023",
    tags: ["Mobile"],
    href: "#",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
];

export function Showcase4() {
  const [active, setActive] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-start py-24 px-8 sm:px-12 lg:px-20 bg-transparent"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 mb-10 sm:mb-14"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-medium">
            Projects · 2023–2025
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white max-w-3xl">
            Things I've built that I'm proud of.
          </h2>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-neutral-800 mb-10"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-medium shrink-0">
            Filter
          </span>
          <div className="relative flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative isolate px-4 py-1.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium transition-colors cursor-pointer ${
                  active === f
                    ? "text-neutral-900"
                    : "text-neutral-400 hover:text-white bg-neutral-900"
                }`}
              >
                {active === f && (
                  <motion.span
                    layoutId="showcase4-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-white -z-10"
                  />
                )}
                {f}
              </button>
            ))}
          </div>
          <span className="text-xs tracking-[0.15em] uppercase text-neutral-500 sm:ml-auto">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.22 },
                  y: { duration: 0.35, delay: i * 0.05 },
                }}
                onClick={() => setSelected(p)}
                className="group cursor-pointer flex flex-col gap-3"
              >
                <BorderGlow className="aspect-video w-full" borderRadius={16}>
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[9px] tracking-[0.15em] uppercase text-white font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </BorderGlow>
                <div className="flex items-baseline justify-between px-1">
                  <h3 className="text-sm font-semibold text-white group-hover:text-neutral-300 transition-colors truncate">
                    {p.title}
                  </h3>
                  <span className="text-[11px] text-neutral-600 shrink-0 ml-2">{p.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* Modal card */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-50 inset-0 flex items-center justify-center p-6 pointer-events-none"
            >
              <div
                className="pointer-events-auto w-full max-w-2xl rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  {/* Close button */}
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                    {selected.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase text-white font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-semibold text-white">{selected.title}</h3>
                    <span className="text-sm text-neutral-500 mt-1 shrink-0">{selected.year}</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {selected.description}
                  </p>
                  {selected.href !== "#" && (
                    <a
                      href={selected.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-colors"
                    >
                      Visit site <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Showcase4;
