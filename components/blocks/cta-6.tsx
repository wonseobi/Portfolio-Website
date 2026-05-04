"use client";

import { motion } from "motion/react";
import TextType from "@/components/TextType";

type Cell = { r: number; c: number; icon: React.ReactNode };

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 16V8l8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 8v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 9.5h4.5M9.25 9.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13.5 13.5c.3 1 1.2 1.5 2.1 1.5s1.9-.7 1.9-1.6c0-.8-.5-1.2-1.5-1.5l-.5-.2c-.9-.3-1.5-.6-1.5-1.4 0-.8.7-1.3 1.6-1.3.7 0 1.4.3 1.7.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <path d="M12 2L3 7v10l9 5 9-5V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 2v20M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <path d="M6.5 10C7.5 6.5 9.5 5 12 5c4 0 4.5 3 6.5 3.5C20 9 21 8 21 8c-1 3.5-3 5-5.5 5-4 0-4.5-3-6.5-3.5C7.5 9 6.5 10 6.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 15c1-3.5 3-5 5.5-5 4 0 4.5 3 6.5 3.5C16.5 14 17.5 13 17.5 13c-1 3.5-3 5-5.5 5-4 0-4.5-3-6.5-3.5C4 14 3 15 3 15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <path d="M8 2h8a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 6h6v4H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 6h0a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 10h6v4H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 14h6v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 8v8M8 6h4a4 4 0 0 1 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <rect x="2" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="7" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="12" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="7" y="5" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="12" y="5" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 16c0 2.5 2 4 5 4h8c3.5 0 5-2 5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 14c1-1 2-1 2-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <path d="M12 3L22 21H2L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PHPIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 15V9l2 0a2 2 0 0 1 0 4H7M13 15V9h2a2 2 0 0 1 0 4h-2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ReactNativeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="17" r="1.5" fill="currentColor" />
    <path d="M9 6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <path d="M4 16.5C2.5 15.5 2 14 2 12.5c0-2 1.5-3.5 3.5-4C6 6 8 4.5 10.5 4.5S15 6 15.5 8.5c2 .5 3.5 2 3.5 4s-1.5 3-3.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 20l4-6 4 6M9.5 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <path d="M12 2C9 6 7 9 7 13a5 5 0 0 0 10 0c0-4-2-7-5-11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 13v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ReduxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-neutral-300">
    <path d="M16 4.5A7.5 7.5 0 0 1 20 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 4.5A7.5 7.5 0 0 0 4 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 19.5a7.5 7.5 0 0 0 6.5-3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="4" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const logoCells: Cell[] = [
  { r: 0, c: 1, icon: <ReactIcon /> },
  { r: 0, c: 5, icon: <TypeScriptIcon /> },
  { r: 0, c: 8, icon: <NextIcon /> },
  { r: 1, c: 0, icon: <NodeIcon /> },
  { r: 1, c: 6, icon: <TailwindIcon /> },
  { r: 1, c: 9, icon: <FigmaIcon /> },
  { r: 2, c: 1, icon: <GitIcon /> },
  { r: 2, c: 9, icon: <PostgresIcon /> },
  { r: 3, c: 0, icon: <ReactNativeIcon /> },
  { r: 3, c: 10, icon: <DockerIcon /> },
  { r: 4, c: 2, icon: <VercelIcon /> },
  { r: 4, c: 5, icon: <GitHubIcon /> },
  { r: 4, c: 8, icon: <AWSIcon /> },
  { r: 5, c: 1, icon: <PHPIcon /> },
  { r: 5, c: 6, icon: <MongoIcon /> },
  { r: 5, c: 9, icon: <ReduxIcon /> },
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
