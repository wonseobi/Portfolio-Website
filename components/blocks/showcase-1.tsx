"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Job {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

const tagColors: Record<string, string> = {
  "React":        "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
  "React Native": "border-teal-500/40 bg-teal-500/10 text-teal-400",
  "TypeScript":   "border-blue-400/40 bg-blue-400/10 text-blue-400",
  "JavaScript":   "border-yellow-400/40 bg-yellow-400/10 text-yellow-400",
  "Node.js":      "border-green-500/40 bg-green-500/10 text-green-400",
  "PHP":          "border-indigo-500/40 bg-indigo-500/10 text-indigo-400",
  "Figma":        "border-pink-500/40 bg-pink-500/10 text-pink-400",
  "GoHighLevel":  "border-orange-500/40 bg-orange-500/10 text-orange-400",
  "REST APIs":    "border-slate-400/40 bg-slate-400/10 text-slate-400",
  "iOS":          "border-gray-400/40 bg-gray-400/10 text-gray-300",
  "Android":      "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
};

const jobs: Job[] = [
  {
    id: 1,
    company: "DDS Marketing",
    role: "FullStack Software Engineer",
    period: "Oct 2024 — Present",
    location: "Miami, FL · United States",
    bullets: [
      "Delivered high-impact web solutions for an international client base, building 40+ projects across dental, legal, crypto, and real estate industries.",
      "Contributed to a marketing ecosystem backed by $130M+ in ad spend, supporting 100+ campaigns and 450+ active websites.",
      "Developed conversion-optimized platforms that increased lead generation by 40–70%.",
      "Owned end-to-end development: React frontends, UI/UX in Figma, and PHP backends routing thousands of monthly leads into CRMs like GoHighLevel.",
    ],
    tags: ["React", "PHP", "Figma", "GoHighLevel", "REST APIs"],
  },
  {
    id: 2,
    company: "Certerus",
    role: "FullStack Software Engineer",
    period: "Jan 2023 — Oct 2024",
    location: "Monterrey · Mexico",
    bullets: [
      "Progressed from Frontend Developer → Mobile Developer → FullStack Developer over the course of the role.",
      "Built dynamic, responsive web platforms and 10+ mobile projects across iOS and Android using React Native.",
      "Worked on 3+ cross-platform apps, owning the full development lifecycle from architecture to deployment.",
    ],
    tags: ["React", "React Native", "JavaScript", "Node.js", "iOS", "Android"],
  },
  {
    id: 3,
    company: "Cash App",
    role: "Frontend Software Developer",
    period: "Jun 2022 — Jan 2023",
    location: "Oakland, CA · United States",
    bullets: [
      "Started as a Technical Support Intern, resolving 50+ weekly UI/UX issues across the platform.",
      "Transitioned into a full Frontend Developer role within ~3 months based on performance.",
      "Contributed to frontend features and UI improvements for one of the world's leading fintech products.",
    ],
    tags: ["React", "JavaScript", "UI/UX", "Figma"],
  },
];

export function Showcase1() {
  const [activeId, setActiveId] = useState(1);
  const activeJob = jobs.find((j) => j.id === activeId)!;

  return (
    <section
      id="works"
      className="w-full min-h-screen flex items-start lg:items-center py-24 px-8 sm:px-12 lg:px-20 bg-transparent"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-12"
        >
          Experience
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Left — Job list */}
          <div className="flex flex-col">
            {jobs.map((job, index) => (
              <motion.button
                key={job.id}
                onClick={() => setActiveId(job.id)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative w-full text-left py-6 sm:py-8"
              >
                {activeId === job.id && (
                  <motion.div
                    layoutId="active-bg"
                    className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`relative px-4 sm:px-6 flex items-center justify-between gap-4 ${
                    activeId === job.id
                      ? ""
                      : "transition-opacity duration-300 hover:opacity-60"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <h2
                      className={`text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-1 truncate ${
                        activeId === job.id
                          ? "text-white dark:text-neutral-900"
                          : "text-neutral-900 dark:text-white"
                      }`}
                    >
                      {job.company}
                    </h2>
                    <p
                      className={`text-sm ${
                        activeId === job.id
                          ? "text-neutral-300 dark:text-neutral-600"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {job.role} · {job.period}
                    </p>
                  </div>
                  {activeId === job.id && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white dark:bg-neutral-900"
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right — Role detail */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center min-h-[360px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="w-full"
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {activeJob.role}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {activeJob.company} · {activeJob.location}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1 tracking-wide">
                    {activeJob.period}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {activeJob.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-neutral-300 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {activeJob.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border ${tagColors[tag] ?? "border-neutral-700 bg-transparent text-neutral-400"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
