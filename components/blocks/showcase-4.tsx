"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { BorderGlow } from "@/components/BorderGlow";
import Image from "next/image";
import TextType from "@/components/TextType";

const filters = ["All", "Web", "Mobile", "UI/UX"] as const;
type Filter = (typeof filters)[number];

interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  tags: Filter[];
  href?: string;
  image?: string;
  featured?: boolean;
}

const projects: Project[] = [
  // ── DDS Marketing (2024–2025) ──────────────────────────────────────
  {
    id: 1,
    title: "Daytona Liberty",
    description: "High-performance digital platform for a crypto hedge fund focused on credibility, investor trust, and premium brand positioning. Conversion-focused user flows designed for high-value financial audiences.",
    year: "2025",
    tags: ["Web", "UI/UX"],
    href: "https://daytonaliberty.com/",
    image: "/images/projects/daytona_liberty.jpg",
  },
  {
    id: 2,
    title: "Xponent Marketing",
    description: "Scalable marketing platform built to showcase services, generate qualified leads, and strengthen brand authority through modern UI systems and high-conversion user experiences.",
    year: "2025",
    tags: ["Web"],
    href: "https://www.xponentmarketing.com/",
    image: "/images/projects/xponent_marketing.jpg",
  },
  {
    id: 3,
    title: "Delray Floss Botox",
    description: "Conversion-optimized landing experience for paid advertising traffic in the Florida medical aesthetics market. Mobile-first UX and streamlined lead capture funnels to maximize appointment bookings.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    image: "/images/projects/floss_botox.jpg",
  },
  {
    id: 4,
    title: "Delray Floss Semaglutide",
    description: "High-converting healthcare acquisition funnel targeting weight-loss and semaglutide campaigns. Responsive frontend systems and strategic CTA flows designed to improve lead generation performance.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    image: "/images/projects/floss_semaglutide.jpg",
  },
  {
    id: 5,
    title: "Arvada Dental",
    description: "Modern healthcare platform for a Colorado-based practice focused on usability, accessibility, and patient trust. Scalable frontend architecture optimized for long-term growth.",
    year: "2024",
    tags: ["Web"],
    href: "https://arvadadentalcenter.com/",
    image: "/images/projects/arvada_dental.jpg",
  },
  {
    id: 6,
    title: "AOX Billing Solutions",
    description: "Streamlined business platform for a medical billing company operating in a highly competitive industry. Clean UX simplifying complex service communication with scalable frontend systems.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    href: "https://aoxmedicalbilling.com/",
    image: "/images/projects/aox_billing_solutions.jpg",
  },
  {
    id: 7,
    title: "Elk Grove Village",
    description: "Responsive digital experience for an Illinois-based healthcare brand emphasizing credibility, accessibility, and performance. Optimized frontend interactions to support stronger patient acquisition.",
    year: "2024",
    tags: ["Web"],
    image: "/images/projects/elkgrove.jpg",
  },
  {
    id: 8,
    title: "Forever Smiles",
    description: "Polished healthcare experience focused on branding, responsiveness, and conversion-focused design systems. Scalable UI components and modern frontend architecture for long-term scalability.",
    year: "2024",
    tags: ["Web"],
    image: "/images/projects/forever_smiles.jpg",
  },
  {
    id: 9,
    title: "Mordentalimplants",
    description: "Specialized healthcare platform for a Pennsylvania-based implant provider with a strong focus on trust-building and consultation conversion. Responsive systems optimized for high-intent patient traffic.",
    year: "2024",
    tags: ["Web"],
    href: "https://mordentalimplantcenter.com/",
    image: "/images/projects/mordentalimplants.jpg",
  },
  {
    id: 10,
    title: "Delray Floss Invisalign",
    description: "Campaign-focused lead generation experience targeting Invisalign traffic in Florida. Fast-loading pages, responsive UI patterns, and conversion-driven flows optimized for paid media performance.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    image: "/images/projects/floss_invisalign.jpg",
  },
  {
    id: 11,
    title: "HVCO",
    description: "High-performance insurance landing platform designed to support lead acquisition and improve conversion rates. Responsive UX, optimized load speed, and scalable frontend architecture.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    image: "/images/projects/HVCO.jpg",
  },
  {
    id: 12,
    title: "Orcutt Hills",
    description: "Modern California healthcare platform engineered around accessibility, responsive design, and streamlined patient experiences. Improved usability through scalable UI systems and optimized frontend performance.",
    year: "2024",
    tags: ["Web"],
    href: "https://orcutthillsdental.com/",
    image: "/images/projects/orcutt_hills.jpg",
  },
  {
    id: 13,
    title: "Pena Adobe",
    description: "Scalable digital experience for a California-based healthcare brand focused on clean UX and modern visual systems. Responsive interfaces designed to improve engagement and trust.",
    year: "2024",
    tags: ["Web"],
    href: "https://penaadobedental.com/",
    image: "/images/projects/pena_adobe.jpg",
  },
  {
    id: 14,
    title: "Daytona Cup",
    description: "Dynamic motorsports-focused platform built around high-energy branding and immersive visual experiences. Responsive interactions, modern frontend animation systems, and audience engagement.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    image: "/images/projects/daytona_cup.jpg",
  },
  {
    id: 15,
    title: "Connection Dentistry",
    description: "Modern healthcare platform balancing premium branding with conversion-focused functionality. Responsive frontend systems optimized for scalability and usability.",
    year: "2024",
    tags: ["Web"],
    href: "https://www.connectiondentistryraleigh.com/",
    image: "/images/projects/connection_dentistry.jpg",
  },
  {
    id: 16,
    title: "Boom Smiles",
    description: "High-performance healthcare experience for a North Carolina-based brand focused on patient acquisition and strong visual identity. Responsive UI systems and scalable frontend architecture.",
    year: "2024",
    tags: ["Web"],
    href: "https://boomsmilesgroup.com/",
    image: "/images/projects/boom_smiles.jpg",
  },
  {
    id: 17,
    title: "Royal Smiles",
    description: "Premium digital experience for a Pennsylvania-based healthcare provider with a strong emphasis on trust, branding, and usability. Clean frontend implementation and optimized performance.",
    year: "2024",
    tags: ["Web"],
    href: "https://paroyalsmiles.vdsupport.com/",
    image: "/images/projects/royal_smiles.jpg",
  },
  {
    id: 18,
    title: "Westwind Integrated Health",
    description: "Scalable healthcare platform for an Arizona-based integrated health provider. Accessibility, responsive architecture, and modern UI systems designed to improve engagement and conversion.",
    year: "2024",
    tags: ["Web"],
    href: "https://westwindintegratedhealth.com/",
    image: "/images/projects/westwind.jpg",
  },
  {
    id: 19,
    title: "Injury Counsel of Florida",
    description: "Legal services platform engineered around authority, accessibility, and lead generation for the Florida market. Responsive frontend systems optimized for high-conversion user journeys.",
    year: "2024",
    tags: ["Web"],
    featured: true,
    href: "https://injurycounselfl.com/",
    image: "/images/projects/injury_counsel_fl.jpg",
  },
  {
    id: 20,
    title: "One DMI+",
    description: "Conversion-focused medical acquisition platform targeting high-intent healthcare traffic in Arizona. Modern frontend systems and optimized CTA structures for stronger lead performance.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    href: "https://onedmiplus.ai/4",
    image: "/images/projects/onedmi.jpg",
  },
  {
    id: 21,
    title: "Monroe Dental Implants",
    description: "Specialized healthcare platform for a New Jersey implant provider focused on premium branding and consultation generation. Scalable frontend systems and streamlined patient experiences.",
    year: "2024",
    tags: ["Web"],
    href: "https://monroedentalandimplants.com/",
    image: "/images/projects/monroe_dental.jpg",
  },
  {
    id: 22,
    title: "BonDDS",
    description: "Modern healthcare-focused digital experience designed around usability, performance, and responsive design systems. Scalable frontend architecture and conversion-oriented UX.",
    year: "2024",
    tags: ["Web"],
    image: "/images/projects/bondds.jpg",
  },
  {
    id: 23,
    title: "San Antonio Dental",
    description: "Scalable healthcare platform for a Texas-based provider with strong emphasis on accessibility and user engagement. Responsive systems optimized for performance and patient acquisition.",
    year: "2024",
    tags: ["Web"],
    image: "/images/projects/san_antonio_dental.jpg",
  },
  {
    id: 24,
    title: "Sonrisa Dental Implants",
    description: "Premium implant-focused platform for the Florida market engineered to improve trust, branding, and lead generation. Responsive UX and high-conversion frontend implementation.",
    year: "2024",
    tags: ["Web"],
    href: "https://sonrisaflorida.com/",
    image: "/images/projects/sonrisa_dental_specialists.jpg",
  },
  {
    id: 25,
    title: "Julia DDS",
    description: "Modern healthcare experience focused on intuitive navigation, responsive systems, and premium visual presentation. Optimized frontend performance and engagement across all devices.",
    year: "2024",
    tags: ["Web"],
    image: "/images/projects/juliadds.jpg",
  },
  {
    id: 26,
    title: "Manteca Dental",
    description: "Scalable California healthcare platform designed around clean UX, responsive frontend systems, and modern branding. Performance optimization and seamless user interaction.",
    year: "2024",
    tags: ["Web"],
    image: "/images/projects/manteca_dental.jpg",
  },
  {
    id: 27,
    title: "Surgical Marketing",
    description: "Marketing-focused platform tailored for surgical and healthcare advertising campaigns. Scalable frontend architecture optimized for performance, branding, and lead generation.",
    year: "2025",
    tags: ["Web"],
    image: "/images/projects/surgical_marketing.jpg",
  },
  {
    id: 28,
    title: "Injury Counsel of Florida LP",
    description: "High-conversion legal landing experience engineered for aggressive lead acquisition campaigns in Florida. Responsive UX, fast load performance, and optimized user flows.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    href: "https://injurycounselfl.com/consultation/",
    image: "/images/projects/injury_counsel_fl_lp.jpg",
  },
  {
    id: 29,
    title: "Praxis AI",
    description: "Digital presence for an internal AI-focused initiative combining modern branding with scalable frontend systems. Sleek, future-oriented experience focused on innovation and AI-driven marketing solutions.",
    year: "2025",
    tags: ["Web", "UI/UX"],
    featured: true,
    href: "https://itspraxis.ai/",
    image: "/images/projects/praxis_ai.jpg",
  },
  // ── Certerus (2023–2024) ───────────────────────────────────────────
  {
    id: 30,
    title: "Rooftop Geovana House",
    description: "Hospitality booking platform focused on seamless reservation flows, responsive UX, and premium visual presentation. Frontend systems designed to improve usability and customer conversion.",
    year: "2024",
    tags: ["Web"],
    image: "/images/projects/rooftop_geovana.jpg",
  },
  {
    id: 31,
    title: "Securlife",
    description: "Professional security-focused platform emphasizing credibility, authority, and modern frontend architecture. Responsive systems optimized for service inquiries and lead generation.",
    year: "2023",
    tags: ["Web"],
    href: "https://securlife.com.mx/",
    image: "/images/projects/securlife.jpg",
  },
  {
    id: 32,
    title: "Plaforama",
    description: "Scalable e-commerce experiences for a building materials platform handling large product catalogs and customer interactions. Responsive UI systems, performance optimization, and intuitive shopping flows.",
    year: "2023",
    tags: ["Web"],
    href: "https://www.plaforama.com/",
    image: "/images/projects/plaforama.jpg",
  },
  {
    id: 33,
    title: "Aztec Plumbing",
    description: "High-conversion service acquisition platform designed to support local advertising campaigns and lead generation. Responsive UX and streamlined frontend interactions.",
    year: "2023",
    tags: ["Web", "UI/UX"],
    image: "/images/projects/aztec_plumbing_lp.jpg",
  },
  {
    id: 34,
    title: "Flowme",
    description: "Collaborative productivity platform designed for managing teams, workflows, and internal operations. Scalable frontend architecture and clean, intuitive user experiences.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    image: "/images/projects/flowme.jpg",
  },
  {
    id: 35,
    title: "Nearby",
    description: "Modern event discovery platform enabling users to explore local experiences through responsive and user-friendly interfaces. Scalable frontend systems optimized for engagement.",
    year: "2023",
    tags: ["Web"],
    image: "/images/projects/nearby.jpg",
  },
  {
    id: 36,
    title: "Lights and Novelties",
    description: "E-commerce-focused digital experience centered around seasonal branding and product presentation. Responsive interactions and visually engaging frontend systems.",
    year: "2023",
    tags: ["Web"],
    href: "https://lucesynovedades.com.mx/",
    image: "/images/projects/lights_and_novelties.jpg",
  },
  {
    id: 37,
    title: "Immotrev Real Estate",
    description: "Modern real estate platform engineered around property discovery, responsive UX, and premium presentation. Scalable frontend systems and intuitive browsing experiences.",
    year: "2023",
    tags: ["Web"],
    href: "https://inmotrev.com/",
    image: "/images/projects/inmotrev_real_estate.jpg",
  },
  {
    id: 38,
    title: "Certerus",
    description: "Primary digital acquisition platform focused on branding, service presentation, and lead conversion. Scalable UI systems optimized for performance and growth.",
    year: "2023",
    tags: ["Web", "UI/UX"],
    featured: true,
    href: "https://www.certerus.com/aula-empresarial/",
    image: "/images/projects/certerus_lp.webp",
  },
  {
    id: 39,
    title: "Certerus App",
    description: "Cross-platform mobile applications for managing domains, websites, and digital services across iOS and Android. Scalable React Native architecture and seamless user experiences.",
    year: "2024",
    tags: ["Mobile"],
    image: "/images/projects/certerus_app.jpg",
  },
  {
    id: 40,
    title: "Mentor E-Learning",
    description: "Educational platform focused on delivering structured learning experiences through modern responsive systems. Scalable frontend architecture optimized for accessibility and usability.",
    year: "2023",
    tags: ["Web"],
    image: "/images/projects/mentor_e_learning.jpg",
  },
  // ── Personal Projects ──────────────────────────────────────────────
  {
    id: 41,
    title: "Streakify",
    description: "Productivity-focused habit tracking application centered around consistency, motivation, and clean UX. Scalable mobile systems with a strong emphasis on user engagement and retention.",
    year: "2024",
    tags: ["Mobile"],
    href: "https://www.figma.com/proto/Zir0qUqmCDvtwRIZcx379V/Streakify-App?node-id=22-423&starting-point-node-id=22%3A423&t=BXvZSAh8b5hGqLVc-1",
    image: "/images/projects/streakify.jpg",
  },
  {
    id: 42,
    title: "Weatherly",
    description: "Modern weather application focused on real-time data visualization and responsive mobile experiences. Intuitive UI systems designed for speed, clarity, and usability.",
    year: "2023",
    tags: ["Mobile"],
    href: "https://www.figma.com/proto/PM560bWw6spRbLvQWWkckA/Weatherly-App?node-id=2002-211&starting-point-node-id=2002%3A211&t=K7tgylJugD9YIIbx-1",
    image: "/images/projects/weatherly.jpg",
  },
  {
    id: 43,
    title: "BLOCQUANT",
    description: "Modern crypto investing platform focused on premium branding, market credibility, and high-performance frontend systems. Responsive user experiences and sleek UI interactions designed to communicate trust and innovation.",
    year: "2026",
    tags: ["Web", "UI/UX"],
    featured: true,
    href: "https://blocquant.com/",
    image: "/images/projects/blocquant.jpg",
  },
  {
    id: 44,
    title: "Synergy Capital Partners",
    description: "Professional real estate investment platform centered around authority, premium presentation, and seamless user experience. Scalable frontend architecture showcasing investment opportunities with clarity and sophistication.",
    year: "2025",
    tags: ["Web", "UI/UX"],
    href: "https://synergy.blocquant.com/",
    image: "/images/projects/syngery.jpg",
  },
  {
    id: 46,
    title: "DDS Marketing Recruitment",
    description: "Official recruitment platform for DDS Marketing focused on attracting top-tier talent through modern branding and streamlined candidate experiences. Conversion-focused user flows designed to support hiring growth and improve applicant engagement.",
    year: "2026",
    tags: ["Web"],
    featured: true,
    href: "https://ddsmarketing.io/recruitment/",
    image: "/images/projects/dds_marketing_recruitment.jpg",
  },
  {
    id: 45,
    title: "Alfonso Emanuel Portfolio",
    description: "Visually immersive portfolio experience for a digital artist and animation specialist. Modern UI/UX, fluid interactions, and cinematic presentation systems highlighting creative work. Responsive frontend architecture optimized for performance, storytelling, and visual impact.",
    year: "2024",
    tags: ["Web", "UI/UX"],
    href: "https://www.figma.com/proto/lpfSykBVYm94IOaC9Anird/Alfonso-Emanuel-Portfolio-Website?page-id=0%3A1&node-id=2002-2&p=f&viewport=2238%2C74%2C0.4&t=ojVCmnlmo1VRVAkT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2002%3A2",
    image: "/images/projects/alfonso_emanuel.jpg",
  },
];

// Curated order for default "All" view (first 4 rows / 16 cards)
// IDs: BLOCQUANT=43, DDS Recruitment=46, Praxis AI=29, Certerus=38,
//      Xponent=2, Injury Counsel FL=19, Royal Smiles=17, Daytona Liberty=1,
//      Orcutt Hills=12, Sonrisa=24, Synergy=44, AOX=6,
//      Rooftop Geovana=30, Mentor E-Learning=40, Certerus App=39, Connection Dentistry=15
const DEFAULT_ORDER_IDS = [43, 46, 29, 38, 2, 19, 17, 1, 12, 24, 44, 6, 30, 40, 39, 15];

const projectMap = new Map(projects.map((p) => [p.id, p]));

export function Showcase4() {
  const [active, setActive] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  const sortedByYear = [...filtered].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  let visibleProjects: Project[];
  let hasMore: boolean;

  if (showAll) {
    // View all: newest first
    visibleProjects = sortedByYear;
    hasMore = false;
  } else if (active === "All") {
    // Default: curated 16-card order
    visibleProjects = DEFAULT_ORDER_IDS.map((id) => projectMap.get(id)!).filter(Boolean);
    hasMore = true; // always show "View All" since 46 total
  } else {
    // Filtered: sort by year desc, slice to 16
    visibleProjects = sortedByYear.slice(0, 16);
    hasMore = filtered.length > 16 && !showAll;
  }

  // Reset "show all" when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [active]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-start py-24 px-8 sm:px-12 lg:px-20 bg-transparent"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 mb-10 sm:mb-14"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-medium">
            Projects · 2023–2026 · {projects.length} Projects
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white max-w-3xl">
            <TextType
              text="Things I have built that I'm proud of."
              loop={false}
              showCursor={true}
              hideCursorOnComplete={true}
              startOnVisible={true}
              typingSpeed={40}
            />
          </h2>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-neutral-800 mb-10"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-medium shrink-0">
            Filter
          </span>
          <div className="relative flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative isolate px-4 py-1.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium transition-colors cursor-pointer ${
                  active === f
                    ? "text-neutral-900"
                    : "text-neutral-400 hover:text-white bg-neutral-900"
                }`}
              >
                {active === f && (
                  <motion.span
                    layoutId="showcase4-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-white -z-10"
                  />
                )}
                {f}
              </button>
            ))}
          </div>
          <span className="text-xs tracking-[0.15em] uppercase text-neutral-500 sm:ml-auto">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.22 },
                  y: { duration: 0.35, delay: i * 0.05 },
                }}
                onClick={() => setSelected(p)}
                className="group cursor-pointer flex flex-col gap-3"
              >
                <BorderGlow className="aspect-video w-full" borderRadius={16}>
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover opacity-95 group-hover:scale-105 transition-all duration-500"
                    />
                  )}
                  {/* Featured badge */}
                  {p.featured && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="px-2 py-0.5 rounded-full bg-yellow-400/90 backdrop-blur-sm text-[9px] tracking-[0.15em] uppercase text-yellow-900 font-bold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 flex flex-wrap gap-1 z-10">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[9px] tracking-[0.15em] uppercase text-white font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </BorderGlow>
                <div className="flex items-baseline justify-between px-1">
                  <h3 className="text-sm font-semibold text-white group-hover:text-neutral-300 transition-colors truncate">
                    {p.title}
                  </h3>
                  <span className="text-[11px] text-neutral-600 shrink-0 ml-2">{p.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full border border-neutral-700 text-sm text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors cursor-pointer tracking-[0.1em] uppercase font-medium"
            >
              View all projects
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* Modal card */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-50 inset-0 flex items-center justify-center p-6 pointer-events-none"
            >
              <div
                className="pointer-events-auto w-full max-w-2xl rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
                  {selected.image && (
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                      className="object-cover"
                    />
                  )}
                  {/* Close button */}
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                    {selected.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase text-white font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-semibold text-white">{selected.title}</h3>
                    <span className="text-sm text-neutral-500 mt-1 shrink-0">{selected.year}</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {selected.description}
                  </p>
                  {!!selected.href && (
                    <a
                      href={selected.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-colors"
                    >
                      Visit site <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Showcase4;
