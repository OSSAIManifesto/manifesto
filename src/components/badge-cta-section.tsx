"use client";

import { useState } from "react";
import { motion } from "motion/react";

const SITE_URL = "https://human-oss.dev";

const snippets = {
  dark: `[![Open Source AI Manifesto](${SITE_URL}/badge.svg)](${SITE_URL})`,
  light: `[![Open Source AI Manifesto](${SITE_URL}/badge-light.svg)](${SITE_URL})`,
};

export function BadgeCtaSection() {
  const [copied, setCopied] = useState(false);
  const [variant, setVariant] = useState<"dark" | "light">("dark");

  const snippet = snippets[variant];

  function handleCopy() {
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <motion.section
      className="px-6 py-24 md:py-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight"
        >
          Carry the signal
        </h2>
        <p
          className="mt-4 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed"
        >
          Add the badge to your README and let contributors know your project
          stands behind responsible AI use in open source.
        </p>

        {/* Badge showcase — clickable to select variant */}
        <div
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          {/* Dark badge */}
          <button
            onClick={() => setVariant("dark")}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div
              className={`flex items-center justify-center px-10 py-8 rounded-2xl border transition-all duration-300 bg-white/[0.02] ${
                variant === "dark"
                  ? "border-accent/30 ring-1 ring-accent/20"
                  : "border-surface-border hover:border-surface-border/60"
              }`}
            >
              <img
                src="/badge.svg"
                alt="Open Source AI Manifesto badge — dark variant"
                width={120}
                height={28}
              />
            </div>
            <span
              className={`text-xs transition-colors duration-200 ${
                variant === "dark" ? "text-foreground" : "text-muted"
              }`}
            >
              Dark
            </span>
          </button>

          {/* Light badge */}
          <button
            onClick={() => setVariant("light")}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div
              className={`flex items-center justify-center px-10 py-8 rounded-2xl border transition-all duration-300 bg-white/90 ${
                variant === "light"
                  ? "border-accent/30 ring-1 ring-accent/20"
                  : "border-surface-border hover:border-surface-border/60"
              }`}
            >
              <img
                src="/badge-light.svg"
                alt="Open Source AI Manifesto badge — light variant"
                width={120}
                height={28}
              />
            </div>
            <span
              className={`text-xs transition-colors duration-200 ${
                variant === "light" ? "text-foreground" : "text-muted"
              }`}
            >
              Light
            </span>
          </button>
        </div>

        {/* Quick copy snippet — updates with selected variant */}
        <div className="mt-10">
          <button
            onClick={handleCopy}
            className="group relative w-full max-w-2xl mx-auto block text-left"
          >
            <pre className="p-4 rounded-xl border border-surface-border bg-surface text-sm overflow-x-auto transition-colors duration-200 group-hover:border-accent/30">
              <code className="text-accent-light break-all whitespace-pre-wrap">
                {snippet}
              </code>
            </pre>
            <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-md bg-white/5 text-muted transition-colors duration-200 group-hover:text-foreground">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>

        {/* Link to full badge page */}
        <div className="mt-8">
          <a
            href="/badge"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors duration-200"
          >
            <span>HTML, RST & more formats</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
