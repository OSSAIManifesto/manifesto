"use client";

import { motion } from "motion/react";

type Segment = { text: string; highlight: boolean };

const segments: Segment[] = [
  { text: "AI has changed how we write code, but open source remains a human system built on ", highlight: false },
  { text: "trust", highlight: true },
  { text: ", ", highlight: false },
  { text: "accountability", highlight: true },
  { text: ", and ", highlight: false },
  { text: "shared stewardship", highlight: true },
  { text: ". These principles guide the responsible use of AI in open source communities.", highlight: false },
];

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.4, delay: 0.2, ease: "easeOut" as const },
  },
};

export function PreambleSection() {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-muted font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {segments.map((seg, i) =>
            seg.highlight ? (
              <motion.span
                key={i}
                className="relative inline-block text-foreground"
              >
                {seg.text}
                <motion.span
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-accent origin-left"
                  style={{ bottom: "-4px" }}
                  variants={underlineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </motion.span>
            ) : (
              <span key={i} className="inline">
                {seg.text}
              </span>
            )
          )}
        </motion.p>
      </div>
    </section>
  );
}
