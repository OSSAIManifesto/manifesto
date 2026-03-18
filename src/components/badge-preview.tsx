"use client";

import { useState } from "react";

type Snippet = {
  label: string;
  dark: string;
  light: string;
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 text-xs px-2 py-1 rounded-md bg-white/5 text-muted hover:text-foreground transition-colors duration-200"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export function BadgePreview({
  siteUrl,
  snippets,
}: {
  siteUrl: string;
  snippets?: Record<string, Snippet>;
}) {
  const [variant, setVariant] = useState<"dark" | "light">("dark");

  return (
    <div className="space-y-6">
      {/* Variant toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setVariant("dark")}
          className={`px-4 py-2 rounded-lg text-sm cursor-pointer transition-colors duration-200 ${
            variant === "dark"
              ? "bg-white/10 text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setVariant("light")}
          className={`px-4 py-2 rounded-lg text-sm cursor-pointer transition-colors duration-200 ${
            variant === "light"
              ? "bg-white/10 text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          Light
        </button>
      </div>

      {/* Badge on contrasting background */}
      <div
        className={`flex items-center justify-center p-12 rounded-2xl border border-surface-border transition-colors duration-300 ${
          variant === "dark" ? "bg-white/[0.02]" : "bg-white/90"
        }`}
      >
        <img
          src={variant === "dark" ? "/badge.svg" : "/badge-light.svg"}
          alt="Open Source AI Manifesto badge"
          width={120}
          height={28}
        />
      </div>

      {/* Snippets — reactive to variant toggle */}
      {snippets && (
        <div className="space-y-6 pt-4">
          {Object.values(snippets).map((snippet) => (
            <div key={snippet.label} className="space-y-2">
              <h3 className="text-lg font-medium">{snippet.label}</h3>
              <div className="relative">
                <pre className="p-4 rounded-xl border border-surface-border bg-surface text-sm overflow-x-auto">
                  <code className="text-accent-light break-all whitespace-pre-wrap">
                    {variant === "dark" ? snippet.dark : snippet.light}
                  </code>
                </pre>
                <CopyButton
                  text={variant === "dark" ? snippet.dark : snippet.light}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
