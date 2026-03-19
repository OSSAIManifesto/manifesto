"use client";

import { motion } from "motion/react";
import { AsciiRain } from "./ascii-rain";
import { BrandSlider } from "./brand-slider";

const titleWords = "The Open Source AI Manifesto".split(" ");

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center min-h-screen px-6 text-center">
      {/* ASCII Rain */}
      <AsciiRain />

      {/* Spacer to push content to center */}
      <div className="flex-1" />

      {/* Glow */}
      <motion.div
        className="hero-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Title */}
      <motion.h1
        className="relative z-10 font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight max-w-5xl flex flex-wrap justify-center gap-x-[0.3em]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block bg-gradient-to-b from-foreground to-muted bg-clip-text text-transparent"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="relative z-10 mt-6 text-lg md:text-xl text-muted max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Principles for sustaining open source in the age of generative AI
      </motion.p>

      {/* Arrow */}
      <motion.div
        className="relative z-10 mt-16 text-muted"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: { delay: 1.8, duration: 0.5 },
          y: {
            delay: 1.8,
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>

      {/* Spacer to push slider to bottom */}
      <div className="flex-1" />

      {/* Brand slider at bottom */}
      <div className="relative z-10 w-screen">
        <BrandSlider />
      </div>
    </section>
  );
}
