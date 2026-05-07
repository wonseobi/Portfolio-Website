"use client";

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle } from "lucide-react";
import TextType from "@/components/TextType";
import { useForm, ValidationError } from "@formspree/react";
import CenterFlow from "@/components/react-bits/center-flow";
import type { NodeItem } from "@/components/react-bits/center-flow";

const nodeItems: NodeItem[] = [
  {
    content: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-neutral-400">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    content: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-neutral-400">
        <path d="M6.5 10C7.5 6.5 9.5 5 12 5c4 0 4.5 3 6.5 3.5C20 9 21 8 21 8c-1 3.5-3 5-5.5 5-4 0-4.5-3-6.5-3.5C7.5 9 6.5 10 6.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 15c1-3.5 3-5 5.5-5 4 0 4.5 3 6.5 3.5C16.5 14 17.5 13 17.5 13c-1 3.5-3 5-5.5 5-4 0-4.5-3-6.5-3.5C4 14 3 15 3 15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    content: (
      <svg viewBox="0 0 24 24" fill="#ffffff" className="w-6 h-6 opacity-50">
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
      </svg>
    ),
  },
  {
    content: (
      <svg viewBox="0 0 24 24" fill="#ffffff" className="w-6 h-6 opacity-50">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
  {
    content: (
      <span className="text-neutral-400 text-[13px] font-bold font-mono tracking-tight">TS</span>
    ),
  },
  {
    content: (
      <svg viewBox="0 0 24 24" fill="#ffffff" className="w-6 h-6 opacity-50">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    ),
  },
  {
    content: (
      <svg viewBox="0 0 24 24" fill="#ffffff" className="w-6 h-6 opacity-50">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
      </svg>
    ),
  },
  {
    content: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-neutral-400">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" fill="currentColor" />
      </svg>
    ),
  },
];

export function Auth1() {
  const [state, handleSubmit] = useForm("mkoyzvvr");

  return (
    <section id="contact" className="min-h-screen w-full flex">
      {/* Left Column - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-8 lg:p-14 bg-neutral-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Contact
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 tracking-tight leading-[1.05]">
              <TextType
                text="Let's work together."
                loop={false}
                showCursor={true}
                hideCursorOnComplete={true}
                startOnVisible={true}
                typingSpeed={50}
              />
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed">
              Have a project in mind or just want to say hi? Drop me a message and I&apos;ll get back to you.
            </p>
          </motion.div>

          {/* Form / Success */}
          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-start gap-4 py-8"
              >
                <CheckCircle className="w-10 h-10 text-white" />
                <h2 className="text-2xl font-semibold text-white">Message sent!</h2>
                <p className="text-neutral-400 text-base leading-relaxed">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 transition-all duration-200"
                  />
                  <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 transition-all duration-200"
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 transition-all duration-200 resize-none"
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-3 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors duration-200 mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="mailto:wonseob2207@gmail.com" className="hover:text-white transition-colors">wonseob2207@gmail.com</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </motion.div>
      </div>

      {/* Right Column - CenterFlow */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-neutral-950">
        <CenterFlow
          nodeItems={nodeItems}
          centerContent={
            <span className="text-neutral-300 font-mono font-bold text-2xl tracking-tighter select-none">&lt;/&gt;</span>
          }
          centerSize={110}
          nodeSize={56}
          lineColor="#2a2a2a"
          lineColorLight="#e0e0e0"
          pulseColor="#ffffff"
          pulseColorLight="#555555"
          glowColor="#ffffff"
          glowColorLight="#555555"
          maxGlowIntensity={15}
          pulseDuration={4}
          pulseInterval={8}
          borderRadius={20}
          nodeDistance={0.8}
        />
      </div>
    </section>
  );
}

export default Auth1;
