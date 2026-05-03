"use client";

import { motion } from "motion/react";
import { User } from "lucide-react";

const skills = [
  { label: "React",        percentage: 95, color: "bg-cyan-500" },
  { label: "JavaScript",   percentage: 92, color: "bg-yellow-400" },
  { label: "TypeScript",   percentage: 82, color: "bg-blue-400" },
  { label: "React Native", percentage: 85, color: "bg-teal-500" },
  { label: "Node.js",      percentage: 78, color: "bg-green-500" },
  { label: "PHP",          percentage: 72, color: "bg-indigo-500" },
  { label: "Next.js",      percentage: 80, color: "bg-neutral-100" },
  { label: "Figma",        percentage: 75, color: "bg-pink-500" },
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
              className="w-48 h-48 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center overflow-hidden"
            >
              <User className="w-20 h-20 text-neutral-500" />
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
              Full-stack software engineer with 3+ years building production web and mobile
              products. I&apos;ve worked across dental, legal, real estate, fintech, and crypto
              industries — shipping conversion-optimized platforms backed by $130M+ in ad spend.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-neutral-400 leading-relaxed max-w-md"
            >
              I care about the details — clean code, fast interfaces, and experiences people
              actually enjoy using. Currently based between Miami and Monterrey.
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
                { value: "3+", label: "Years experience" },
                { value: "40+", label: "Projects shipped" },
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
                Proficiency · 2023–2025
              </motion.p>
            </div>

            <div className="flex flex-col gap-5">
              {skills.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: 0.3 + index * 0.05 }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center">
                    <span className="text-sm text-white">{item.label}</span>
                  </div>
                  <div className="relative w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.05, ease: "easeOut" }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats7;
