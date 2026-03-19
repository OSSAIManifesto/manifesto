"use client";

import { motion } from "motion/react";

export function FooterSection() {
  return (
    <motion.footer
      className="px-6 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto flex justify-between items-center text-sm text-muted">
        <a href="https://github.com/OSSAIManifesto/manifesto" className="hover:text-foreground transition-colors">Open Source</a>
        <span>Made with intent by <a href="https://wundergraph.com" className="hover:text-foreground transition-colors underline decoration-muted/50">WunderGraph</a></span>
      </div>
    </motion.footer>
  );
}
