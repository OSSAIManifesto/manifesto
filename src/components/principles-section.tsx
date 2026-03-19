"use client";

import { motion } from "motion/react";

type Principle = {
  title: string;
  description: string;
};

function PrincipleCard({
  principle,
  index,
}: {
  principle: Principle;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className="principle-card group relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-8 md:p-12 lg:p-14 transition-colors duration-500 hover:border-accent/[0.12] hover:bg-white/5 will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3 }}
    >
      {/* Top accent line — visible on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Subtle corner glow on hover */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/[0.06] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Number row with fading rule */}
      <div className="flex items-center gap-5 mb-8 md:mb-10">
        <span className="font-serif text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-accent-light to-accent-deep bg-clip-text text-transparent leading-none select-none">
          {num}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-surface-border to-transparent" />
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.1]">
        {principle.title}
      </h2>

      <p className="mt-4 md:mt-5 text-base md:text-lg leading-[1.75] text-muted max-w-2xl">
        {principle.description}
      </p>
    </motion.article>
  );
}

export function PrinciplesSection({
  principles,
}: {
  principles: Principle[];
}) {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto space-y-14 md:space-y-20">
        {principles.map((principle, index) => (
          <PrincipleCard key={index} principle={principle} index={index} />
        ))}
        <div className="flex flex-col items-center gap-5 pt-4">
          <span className="text-2xl tracking-[0.4em] text-muted/60 select-none">
            &middot;&middot;&middot;
          </span>
          <p className="text-center text-muted text-sm md:text-base leading-relaxed">
            This list will evolve. The manifesto is open source and open
            for{" "}
            <a
              href="https://github.com/OSSAIManifesto/manifesto"
              className="underline underline-offset-4 decoration-accent/40 hover:decoration-accent hover:text-foreground transition-colors"
            >
              contributions
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
