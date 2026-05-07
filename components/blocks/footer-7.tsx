"use client";

import { motion } from "motion/react";

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.7h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.5c0-1.3-.02-3-1.83-3s-2.11 1.43-2.11 2.9V21h-4z" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer7() {
  return (
    <footer className="relative w-full px-8 sm:px-12 lg:px-20 py-12 sm:py-16 bg-neutral-950">
      <div className="relative max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 lg:gap-8"
        >
          {/* Name */}
          <div className="flex items-start">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-[1.05] tracking-tight uppercase">
              Won
              <br />
              Lee
            </h3>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xl sm:text-2xl text-white">
              {[
                { label: "Home", href: "#home" },
                { label: "Experience", href: "#works" },
                { label: "Projects", href: "#projects" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white/60 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About blurb */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60">
              Who I Am
            </h4>
            <p className="text-xl sm:text-2xl text-white leading-tight">
              Korean developer
              <br />
              working hard for
              <br />
              the future.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60">
              Socials
            </h4>
            <div className="flex items-center gap-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/60 transition-colors">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/60 transition-colors">
                <LinkedInIcon />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/60 transition-colors">
                <XIcon />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div className="flex flex-col gap-2 text-white/60 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} • Won Lee • Building things people love to use.</p>
            <div className="flex items-center gap-3">
              <a href="mailto:wonseob2207@gmail.com" className="hover:text-white transition-colors">
                wonseob2207@gmail.com
              </a>
              <span className="text-white/30">•</span>
              <a href="/cv.pdf" download className="hover:text-white transition-colors">
                Download CV
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-3">
              Get In Touch
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center rounded-full border border-white/20 bg-neutral-950 p-1.5"
            >
              <input
                type="email"
                placeholder="YOUR E-MAIL"
                className="flex-1 min-w-0 bg-transparent rounded-full px-5 py-2 text-white text-sm tracking-[0.15em] uppercase placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-white text-black px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-neutral-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                Say Hello
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer7;
