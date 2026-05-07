"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

function SkillBar({ item, index }: { item: { label: string; percentage: number; color: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: 0.3 + index * 0.05 }}
      className="flex flex-col gap-1.5"
    >
      <span className="text-sm text-white">{item.label}</span>
      <div ref={ref} className="relative w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            backgroundColor: item.color,
            width: isInView ? `${item.percentage}%` : "0%",
            transition: `width 1s ${0.4 + index * 0.05}s ease-out`,
          }}
        />
      </div>
    </motion.div>
  );
}

const skills = [
  { label: "React",        percentage: 95,   color: "#06b6d4" },
  { label: "JavaScript",   percentage: 92,   color: "#facc15" },
  { label: "React Native", percentage: 90,   color: "#14b8a6" },
  { label: "TypeScript",   percentage: 87.5, color: "#60a5fa" },
  { label: "Figma",        percentage: 85,   color: "#ec4899" },
  { label: "AWS",          percentage: 85,   color: "#fb923c" },
  { label: "Node.js",      percentage: 78,   color: "#22c55e" },
  { label: "PHP",          percentage: 72,   color: "#6366f1" },
];

export function Stats7() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center py-24 px-8 sm:px-12 lg:px-20 bg-transparent"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-center">

          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Profile image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 rounded-full bg-neutral-800 border-2 border-neutral-700 overflow-hidden relative"
            >
              <Image src="/headshot.png" alt="Won Lee" fill className="object-cover" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white max-w-sm"
            >
              Won Lee
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base text-neutral-400 leading-relaxed max-w-md"
            >
              Full stack software engineer with 4+ years building production web and mobile
              products. I&apos;ve worked across dental, legal, real estate, fintech, and crypto
              industries — shipping conversion optimized platforms backed by $130M+ in ad spend.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-neutral-400 leading-relaxed max-w-md"
            >
              I care about the details — clean code, fast interfaces, and experiences people
              actually enjoy using.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex gap-8 pt-2"
            >
              {[
                { value: "4+", label: "Years experience" },
                { value: "45+", label: "Projects shipped" },
                { value: "450+", label: "Sites supported" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-2xl font-semibold text-white">{s.value}</span>
                  <span className="text-xs text-neutral-500 tracking-wide">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Tech stack bars */}
          <div className="flex flex-col gap-8">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-white"
              >
                Tech stack
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-sm text-neutral-500 mt-1"
              >
                Proficiency · 2022–Present
              </motion.p>
            </div>

            <div className="flex flex-col gap-5">
              {skills.map((item, index) => (
                <SkillBar key={item.label} item={item} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats7;
