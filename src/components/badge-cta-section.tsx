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
          stands behind responsible AI use in open source. You can also add a
          checklist item to your{" "}
          <a
            href="https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-light hover:underline"
          >
            PR template
          </a>{" "}
          to remind contributors at review time.
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
                width={94}
                height={20}
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
                width={94}
                height={20}
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
            className="group relative w-full max-w-2xl mx-auto block text-left cursor-pointer"
          >
            <pre className="p-4 pr-20 rounded-xl border border-surface-border bg-surface text-sm overflow-x-auto transition-colors duration-200 group-hover:border-accent/30">
              <code className="text-accent-light break-all whitespace-pre-wrap">
                {snippet}
              </code>
            </pre>
            <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-md bg-surface border border-surface-border text-muted transition-all duration-200 group-hover:text-foreground group-hover:brightness-125 group-active:scale-95">
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

        {/* Share buttons */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="text-sm text-muted">Share the manifesto</span>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent("The Open Source AI Manifesto — Principles for sustaining open source in the age of generative AI")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-surface-border bg-surface text-muted hover:text-foreground hover:border-accent/30 transition-all duration-200"
            aria-label="Share on X"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-surface-border bg-surface text-muted hover:text-foreground hover:border-accent/30 transition-all duration-200"
            aria-label="Share on LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
