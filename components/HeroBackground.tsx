"use client";

import dynamic from "next/dynamic";

const SoftAurora = dynamic(() => import("@/components/SoftAurora"), { ssr: false });

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <SoftAurora
        color1="#6c63ff"
        color2="#a78bfa"
        speed={0.5}
        scale={1.5}
        brightness={1}
        noiseFrequency={2.5}
        noiseAmplitude={0.5}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
      />
    </div>
  );
}
