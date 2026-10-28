"use client";

import { motion } from "motion/react";
import TextType from "@/components/TextType";

export function Hero16() {
  return (
    <section className="relative w-full min-h-screen flex flex-col py-10 sm:py-12 px-6 sm:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col flex-1">
        {/* Top — Logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white text-sm font-medium tracking-[0.15em] uppercase"
        >
          <TextType
            text="Won Lee"
            loop={false}
            showCursor={false}
            typingSpeed={90}
            initialDelay={200}
          />
        </motion.div>

        {/* Content — centered vertically on mobile, spread on desktop */}
        <div className="flex-1 flex flex-col justify-center sm:justify-between sm:pt-16 md:pt-20 gap-8 sm:gap-0 py-10 sm:py-0">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-[1.05] tracking-[-0.02em] max-w-4xl"
          >
            <TextType
              text="Building products people love to use."
              loop={false}
              showCursor={false}
              typingSpeed={45}
              initialDelay={700}
            />
          </motion.h1>

          {/* Subtitle + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 sm:gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-normal flex-1 min-w-0 max-w-md"
            >
              Software engineer focused on crafting clean, impactful
              digital experiences from front to back.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto shrink-0"
            >
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 rounded-xl bg-white text-neutral-900 text-xs font-medium tracking-[0.1em] uppercase whitespace-nowrap cursor-pointer hover:bg-neutral-200 transition-colors duration-200"
              >
                Work With Me
              </motion.a>
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-[0.1em] uppercase whitespace-nowrap cursor-pointer hover:bg-white/10 hover:border-white/40 transition-colors duration-200"
              >
                View My Work
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
