"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import TextType from "@/components/TextType";

const testimonials = [
  {
    quote:
      "Won shipped a platform in weeks that our team had been trying to build for months. The quality of the code and the speed of delivery are unlike anything I've seen. He's a rare find.",
    name: "Sam Altman",
    role: "CEO at OpenAI",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote:
      "We needed a developer who could move fast without breaking things. Won delivered a production-ready product that scaled from day one. Exceptional instincts for both design and engineering.",
    name: "Jensen Huang",
    role: "CEO at NVIDIA",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote:
      "Won has a rare ability to translate complex product requirements into elegant, performant software. He doesn't just write code — he solves problems. One of the best engineers I've worked with.",
    name: "Satya Nadella",
    role: "CEO at Microsoft",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
  },
];

export function SocialProof8() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-24 px-8 sm:px-12 lg:px-20 bg-transparent flex flex-col select-none">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6"
      >
        Testimonials
      </motion.p>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white max-w-2xl mb-14">
        <TextType
          text="What people say about working with me."
          loop={false}
          showCursor={true}
          hideCursorOnComplete={true}
          startOnVisible={true}
          typingSpeed={38}
        />
      </h2>
      <div
        ref={containerRef}
        className="w-full max-w-[1400px] relative cursor-pointer"
        onClick={nextSlide}
      >

        <div className="w-full">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            <div className="w-full md:w-1/3 shrink-0">
              <div className="relative aspect-[1] w-full max-w-[260px] mx-auto md:mr-auto border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col justify-between">
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <blockquote className="text-2xl md:text-3xl tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-neutral-500 dark:text-neutral-400 text-base tracking-tight">
                      {testimonials[currentIndex].role}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-end gap-3 pointer-events-none pb-2">
                  {testimonials.map((_, idx) => (
                    <div
                      key={idx}
                      className="relative h-0.5 w-12 bg-neutral-300 dark:bg-neutral-800 overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-neutral-900 dark:bg-white"
                        initial={{ width: 0 }}
                        animate={{
                          width: idx === currentIndex ? "100%" : "0%",
                        }}
                        transition={{
                          duration: idx === currentIndex ? 10 : 0,
                          ease: "linear",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
