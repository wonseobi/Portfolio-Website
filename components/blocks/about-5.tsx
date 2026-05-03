"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const projectImages = [
  "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
];

// Three rows with shuffled order
const row1 = [0, 3, 6, 1, 4, 7, 2, 5].map((i) => projectImages[i]);
const row2 = [2, 5, 0, 7, 3, 6, 1, 4].map((i) => projectImages[i]);
const row3 = [4, 1, 7, 2, 5, 0, 6, 3].map((i) => projectImages[i]);

function repeat(arr: string[], times = 5) {
  return Array.from({ length: times }, () => arr).flat();
}

function ImageStrip({
  images,
  x,
}: {
  images: string[];
  x: ReturnType<typeof useSpring>;
}) {
  return (
    <motion.div className="flex gap-4 shrink-0" style={{ x }}>
      {images.map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-72 h-44 rounded-2xl overflow-hidden bg-neutral-800"
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      ))}
    </motion.div>
  );
}

export function About5() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawX1 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const rawX2 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const rawX3 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  const springConfig = { mass: 0.8, stiffness: 50, damping: 25 };
  const x1 = useSpring(rawX1, springConfig);
  const x2 = useSpring(rawX2, springConfig);
  const x3 = useSpring(rawX3, springConfig);

  const imagesRow1 = repeat(row1, 5);
  const imagesRow2 = repeat(row2, 5);
  const imagesRow3 = repeat(row3, 5);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-transparent overflow-hidden flex flex-col gap-4 md:-ml-14"
    >
      <div className="overflow-hidden">
        <ImageStrip images={imagesRow1} x={x1} />
      </div>
      <div className="overflow-hidden">
        <ImageStrip images={imagesRow2} x={x2} />
      </div>
      <div className="overflow-hidden">
        <ImageStrip images={imagesRow3} x={x3} />
      </div>
    </section>
  );
}

export default About5;
