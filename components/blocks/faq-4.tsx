"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import TextType from "@/components/TextType";

const faqs = [
  {
    q: "Are you available for freelance or contract work?",
    a: "Yes — I take on select freelance and contract projects alongside my full-time work. If you have something interesting in mind, reach out and we can figure out if the timing and scope work.",
  },
  {
    q: "What does your typical process look like?",
    a: "I start with a short discovery call to understand your goals, then move into wireframes or a technical spec depending on the project. From there it's iterative builds with regular check-ins — no black-box development.",
  },
  {
    q: "What technologies do you work with?",
    a: "My primary stack is React, Next.js, TypeScript, and Node.js on the backend. I'm comfortable with React Native for mobile, and I've shipped production apps using PHP, PostgreSQL, and various cloud platforms.",
  },
  {
    q: "How long does a typical project take?",
    a: "A focused feature or landing page can ship in a week or two. A full product — design to deployment — usually runs 4–12 weeks depending on scope. I'll give you an honest estimate upfront.",
  },
  {
    q: "How do you handle revisions and feedback?",
    a: "I build in feedback rounds at key milestones so nothing is a surprise at the end. For ongoing projects I use a simple async process — you drop comments, I address them in the next cycle.",
  },
  {
    q: "Can you work with an existing team or codebase?",
    a: "Absolutely. I've jumped into legacy codebases, collaborated with design and product teams, and contributed to open-source projects. I adapt to whatever workflow and tools your team already uses.",
  },
];

export function Faq4() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative w-full min-h-screen py-16 sm:py-20 px-8 sm:px-12 lg:px-20 bg-transparent overflow-hidden">

      <div className="relative max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-20">
          <div className="relative flex flex-col gap-6 pl-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500"
            >
              FAQ
            </motion.span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-[1.05]">
              <TextType
                text="Questions I get asked a lot."
                loop={false}
                showCursor={true}
                startOnVisible={true}
                typingSpeed={40}
              />
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm"
            >
              Answers to the most common questions. Still have something on your mind? I&apos;m a message away.
            </motion.p>
          </div>

          <div className="relative">
            <div className="flex flex-col">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    className={`relative py-7 sm:py-9 pl-6 pr-4 ${
                      i !== faqs.length - 1
                        ? "border-b border-neutral-200 dark:border-neutral-800"
                        : ""
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-start gap-4 sm:gap-6 text-left cursor-pointer"
                    >
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-500 mt-1.5 tabular-nums tracking-wider">
                        Q{i + 1}
                      </span>
                      <span className="flex-1 text-base sm:text-lg font-medium text-neutral-900 dark:text-white">
                        {faq.q}
                      </span>
                      <span className="w-9 h-9 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-neutral-900 dark:text-white" />
                        ) : (
                          <Plus className="w-4 h-4 text-neutral-900 dark:text-white" />
                        )}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-start gap-4 sm:gap-6 pt-4">
                            <span aria-hidden className="text-[11px] mt-1.5 tabular-nums tracking-wider invisible">
                              Q{i + 1}
                            </span>
                            <p className="flex-1 pr-12 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
