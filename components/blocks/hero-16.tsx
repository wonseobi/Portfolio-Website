"use client";

import { motion } from "motion/react";

export function Hero16() {
  return (
    <section className="relative w-full min-h-screen flex flex-col py-12 px-8 sm:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col flex-1">
        {/* Top — Logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white text-sm font-medium tracking-[0.15em] uppercase"
        >
          Won Lee
        </motion.div>

        {/* Middle — Large Headline */}
        <div className="flex-1 flex items-start pt-12 sm:pt-16 md:pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-neutral-900 dark:text-white leading-[1.05] tracking-[-0.02em] max-w-4xl"
          >
            Building products
            <br />
            people love
            <br className="hidden sm:block" /> to use.
          </motion.h1>
        </div>

        {/* Bottom — Subtitle Left + CTA Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 sm:gap-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal flex-1 min-w-0 max-w-md"
          >
            Software engineer focused on crafting clean, impactful
            digital experiences from front to back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-2.5 w-full sm:w-auto shrink-0"
          >
            <motion.a
              href="#works"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center flex-1 sm:flex-none px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-neutral-800 border border-neutral-700 text-white text-[11px] sm:text-xs font-medium tracking-[0.12em] uppercase cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="shrink-0 inline-flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-xl bg-white text-neutral-900 text-[11px] sm:text-xs font-medium tracking-[0.12em] uppercase cursor-pointer hover:bg-neutral-200 transition-colors duration-200 whitespace-nowrap"
            >
              Work With Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
