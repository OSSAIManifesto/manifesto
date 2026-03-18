"use client";

import { useEffect, useState } from "react";

const SYMBOLS = ["{", "}", "[", "]", "<", ">", "/", "*", "#", "~", "|", "$", "@"];

interface Drop {
  id: number;
  char: string;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
  fontSize: number;
}

function generateDrops(count: number): Drop[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    left: Math.random() * 100,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 10,
    opacity: 0.008 + Math.random() * 0.012,
    fontSize: 14 + Math.random() * 10,
  }));
}

export function AsciiRain() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    setDrops(generateDrops(45));
  }, []);

  if (drops.length === 0) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="absolute font-mono ascii-drop"
          style={{
            left: `${drop.left}%`,
            color: "#555",
            opacity: drop.opacity,
            fontSize: `${drop.fontSize}px`,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {drop.char}
        </span>
      ))}
    </div>
  );
}
