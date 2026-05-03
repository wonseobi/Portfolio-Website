"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, CheckCircle } from "lucide-react";

const marqueeTestimonials = [
  {
    id: 1,
    text: "Won shipped a platform in weeks that our team had been trying to build for months. Exceptional speed without sacrificing quality.",
    name: "Sam Altman",
    role: "CEO at OpenAI",
  },
  {
    id: 2,
    text: "We needed a developer who could move fast without breaking things. Won delivered a production-ready product that scaled from day one.",
    name: "Jensen Huang",
    role: "CEO at NVIDIA",
  },
  {
    id: 3,
    text: "Won has a rare ability to translate complex product requirements into elegant, performant software. One of the best I've worked with.",
    name: "Satya Nadella",
    role: "CEO at Microsoft",
  },
  {
    id: 4,
    text: "Brilliant instincts for both design and engineering. Won doesn't just write code — he solves problems at the product level.",
    name: "Tim Cook",
    role: "CEO at Apple",
  },
  {
    id: 5,
    text: "The attention to detail and commitment to craft in everything Won builds is remarkable. A true full-stack thinker.",
    name: "Sundar Pichai",
    role: "CEO at Google",
  },
  {
    id: 6,
    text: "Won delivered a seamless, scalable solution on an aggressive timeline. Would work with him again without hesitation.",
    name: "Mark Zuckerberg",
    role: "CEO at Meta",
  },
];

export function Auth1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-3 tracking-tight leading-tight">
              Let&apos;s work together.
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed">
              Have a project in mind or just want to say hi? Drop me a message and I&apos;ll get back to you.
            </p>
          </motion.div>

          {/* Form / Success */}
          <AnimatePresence mode="wait">
            {submitted ? (
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
                <button
                  onClick={() => { setSubmitted(false); setName(""); setEmail(""); setMessage(""); }}
                  className="mt-2 text-sm text-neutral-500 hover:text-white transition-colors"
                >
                  Send another message
                </button>
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
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors duration-200"
                >
                  Send Message
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

      {/* Right Column - Testimonials Marquee */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-neutral-950">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #525252 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Marquee */}
        <div className="relative z-10 flex items-center w-full py-12">
          <div className="w-full">
            <div className="relative flex overflow-hidden">
              <div
                className="flex gap-4 animate-marquee shrink-0"
                style={{ animationDuration: "60s" }}
              >
                {[...marqueeTestimonials, ...marqueeTestimonials].map((t, i) => (
                  <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: { id: number; text: string; name: string; role: string };
}) {
  return (
    <div className="shrink-0 w-[300px] p-6 rounded-xl bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 flex flex-col justify-between min-h-[220px]">
      <p className="text-sm text-neutral-300 leading-relaxed">
        &quot;{testimonial.text}&quot;
      </p>
      <div className="mt-4">
        <div className="text-sm font-medium text-white">{testimonial.name}</div>
        <div className="text-xs text-neutral-500">{testimonial.role}</div>
      </div>
    </div>
  );
}

export default Auth1;
