"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

// ── Real project images spread across industries ──────────────────────────────
const row1Images = [
  "/images/projects/blocquant.jpg",
  "/images/projects/daytona_liberty.jpg",
  "/images/projects/praxis_ai.jpg",
  "/images/projects/injury_counsel_fl.jpg",
  "/images/projects/syngery.jpg",
  "/images/projects/flowme.jpg",
  "/images/projects/streakify.jpg",
  "/images/projects/royal_smiles.jpg",
];

const row2Images = [
  "/images/projects/certerus_lp.jpg",
  "/images/projects/rooftop_geovana.jpg",
  "/images/projects/inmotrev_real_estate.jpg",
  "/images/projects/boom_smiles.jpg",
  "/images/projects/dds_marketing_recruitment.jpg",
  "/images/projects/nearby.jpg",
  "/images/projects/daytona_cup.jpg",
  "/images/projects/xponent_marketing.jpg",
];

const row3Images = [
  "/images/projects/weatherly.jpg",
  "/images/projects/plaforama.jpg",
  "/images/projects/connection_dentistry.jpg",
  "/images/projects/securlife.jpg",
  "/images/projects/certerus_app.jpg",
  "/images/projects/alfonso_emanuel.jpg",
  "/images/projects/sonrisa_dental_specialists.jpg",
  "/images/projects/aox_billing_solutions.jpg",
];

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
          className="relative flex-shrink-0 w-72 h-44 rounded-2xl overflow-hidden bg-neutral-800"
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="288px"
            className="object-cover"
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

  const imagesRow1 = repeat(row1Images, 5);
  const imagesRow2 = repeat(row2Images, 5);
  const imagesRow3 = repeat(row3Images, 5);

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
