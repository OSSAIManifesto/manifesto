"use client";

import { motion } from "motion/react";

export function GradientDivider() {
  return (
    <motion.div
      className="gradient-divider mx-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 1.0 }}
    />
  );
}
