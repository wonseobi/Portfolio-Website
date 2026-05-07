"use client";

import { motion } from "motion/react";
import Image from "next/image";
import TextType from "@/components/TextType";

type Cell = { r: number; c: number; icon: React.ReactNode };

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-1/2 h-1/2">
    <Image src={src} alt={alt} fill className="object-contain" />
  </div>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <path d="M6.5 10C7.5 6.5 9.5 5 12 5c4 0 4.5 3 6.5 3.5C20 9 21 8 21 8c-1 3.5-3 5-5.5 5-4 0-4.5-3-6.5-3.5C7.5 9 6.5 10 6.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 15c1-3.5 3-5 5.5-5 4 0 4.5 3 6.5 3.5C16.5 14 17.5 13 17.5 13c-1 3.5-3 5-5.5 5-4 0-4.5-3-6.5-3.5C4 14 3 15 3 15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FigmaIcon = () => (
  <svg fill="#ffffff" viewBox="0 0 24 24" className="w-1/2 h-1/2 opacity-70">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
  </svg>
);

const logoCells: Cell[] = [
  { r: 0, c: 1,  icon: <ReactIcon /> },
  { r: 0, c: 9,  icon: <Img src="/icons/typescript.png" alt="TypeScript" /> },
  { r: 1, c: 2,  icon: <Img src="/icons/js.png" alt="JavaScript" /> },
  { r: 1, c: 8,  icon: <TailwindIcon /> },
  { r: 2, c: 0,  icon: <Img src="/icons/github.png" alt="GitHub" /> },
  { r: 2, c: 10, icon: <FigmaIcon /> },
  { r: 3, c: 1,  icon: <Img src="/icons/database.png" alt="Database" /> },
  { r: 3, c: 9,  icon: <Img src="/icons/docker.png" alt="Docker" /> },
  { r: 4, c: 4,  icon: <Img src="/icons/python.png" alt="Python" /> },
  { r: 5, c: 6,  icon: <Img src="/icons/cloud.png" alt="AWS" /> },
];

const COLS = 11;
const ROWS = 6;

const isTextZone = (r: number, c: number) =>
  r >= 2 && r <= 3 && c >= 3 && c <= 7;

const cellHash = (r: number, c: number) => {
  const h = Math.sin(r * 127.1 + c * 311.7) * 43758.5453;
  return h - Math.floor(h);
};

export function Cta6() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-16 sm:py-20 px-8 sm:px-12 lg:px-20 bg-transparent overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto w-full">
        <div
          className="grid gap-1.5 sm:gap-2 md:gap-3 lg:gap-4"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: ROWS * COLS }).map((_, idx) => {
            const r = Math.floor(idx / COLS);
            const c = idx % COLS;
            const logo = logoCells.find((l) => l.r === r && l.c === c);
            const inTextZone = isTextZone(r, c);
            const showEmpty = !inTextZone && cellHash(r, c) > 0.35;

            if (inTextZone) {
              return <div key={idx} className="aspect-square" aria-hidden />;
            }

            if (logo) {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: (r + c) * 0.03,
                    ease: "easeOut",
                  }}
                  className="aspect-square rounded-xl sm:rounded-2xl flex items-center justify-center bg-neutral-900 border border-neutral-800 shadow-sm"
                >
                  {logo.icon}
                </motion.div>
              );
            }

            if (!showEmpty) {
              return <div key={idx} className="aspect-square" aria-hidden />;
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: (r + c) * 0.03,
                  ease: "easeOut",
                }}
                className="aspect-square rounded-xl sm:rounded-2xl bg-neutral-900/60"
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.05] max-w-[22ch]">
            <TextType
              text="Let's build something great together."
              loop={false}
              showCursor={true}
              hideCursorOnComplete={true}
              startOnVisible={true}
              typingSpeed={40}
            />
          </h2>
          <div className="mt-6 flex items-center gap-3 flex-wrap justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl bg-white text-neutral-900 text-sm font-medium cursor-pointer hover:bg-neutral-200 transition-colors duration-200"
            >
              Work With Me
            </motion.a>
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl bg-transparent border border-neutral-600 text-white text-sm font-medium cursor-pointer hover:border-neutral-400 hover:bg-neutral-800/50 transition-colors duration-200"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Cta6;
