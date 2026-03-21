"use client";

import { motion } from "motion/react";
import brands from "@/data/brands.json";

function BrandLogo({ brand }: { brand: (typeof brands)[number] }) {
  const content = brand.logo ? (
    <img
      src={`/brands/${brand.logo}`}
      alt={brand.name}
      className="h-8 max-w-[150px] object-contain grayscale"
    />
  ) : (
    <span className="font-mono text-lg text-foreground">
      {brand.name}
    </span>
  );

  const className = "flex items-center select-none whitespace-nowrap px-3 opacity-60 hover:opacity-100 transition-opacity";

  if (brand.url) {
    return (
      <a href={brand.url} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
}

export function BrandSlider() {
  return (
    <motion.section
      className="relative pb-16 pt-2 overflow-hidden"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <p className="text-center font-mono text-sm text-muted mb-6 tracking-widest uppercase">
        <span className="text-accent">//</span> supported by
        <a
          href="https://github.com/OSSAIManifesto/manifesto/edit/main/src/data/brands.json"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 inline-block text-sm text-background bg-accent px-3 py-0.5 rounded-full hover:bg-accent-light transition-colors normal-case tracking-normal font-semibold"
        >
          + Add yours
        </a>
      </p>

      {brands.length <= 2 ? (
        <div className="flex items-center justify-center gap-4">
          {brands.map((brand, i) => (
            <BrandLogo key={i} brand={brand} />
          ))}
        </div>
      ) : (
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

          <div className="flex items-center w-max gap-4 marquee-scroll hover:[animation-play-state:paused]">
            {brands.map((brand, i) => (
              <BrandLogo key={`a-${i}`} brand={brand} />
            ))}
            {brands.map((brand, i) => (
              <BrandLogo key={`b-${i}`} brand={brand} />
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
}
