import HeroBackground from "@/components/HeroBackground";
import { Hero16 } from "@/components/blocks/hero-16";
import { Navigation4 } from "@/components/blocks/navigation-4";
import { Showcase1 } from "@/components/blocks/showcase-1";
import { Showcase4 } from "@/components/blocks/showcase-4";
import { About5 } from "@/components/blocks/about-5";
import { Stats7 } from "@/components/blocks/stats-7";
import { SocialProof8 } from "@/components/blocks/social-proof-8";
import { Faq4 } from "@/components/blocks/faq-4";
import { Cta6 } from "@/components/blocks/cta-6";
import { Auth1 } from "@/components/blocks/auth-1";
import { Footer8 } from "@/components/blocks/footer-8";

export default function Home() {
  return (
    <>
      <Navigation4 />
      <section id="home" className="relative min-h-screen overflow-hidden">
        <HeroBackground />
        <Hero16 />
      </section>
      <div className="md:pl-14">
        <Showcase1 />
        <Showcase4 />
        <Stats7 />
        <SocialProof8 />
        <About5 />
        <Cta6 />
        <Faq4 />
        <Auth1 />
        <Footer8 />
      </div>
    </>
  );
}
