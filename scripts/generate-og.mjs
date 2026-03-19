import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

async function fetchFont(weight) {
  // Use Google Fonts CSS API to get the actual font file URL
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" } }
  ).then((r) => r.text());
  const match = css.match(/src:\s*url\(([^)]+)\)/);
  if (!match) throw new Error(`Could not find font URL for weight ${weight}`);
  const res = await fetch(match[1]);
  return await res.arrayBuffer();
}

async function generate() {
  const [interRegular, interBold] = await Promise.all([
    fetchFont(400),
    fetchFont(700),
  ]);

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0a0a0a",
          fontFamily: "Inter",
          position: "relative",
          overflow: "hidden",
        },
        children: [
          // Dot pattern overlay
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              },
            },
          },
          // Glow effect
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "500px",
                height: "500px",
                background:
                  "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
                filter: "blur(60px)",
              },
            },
          },
          // Diamond icon
          {
            type: "div",
            props: {
              style: {
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, #fbbf24, #ea580c)",
                borderRadius: "8px",
                transform: "rotate(45deg)",
                marginBottom: "32px",
              },
            },
          },
          // Title
          {
            type: "div",
            props: {
              style: {
                fontSize: "56px",
                fontWeight: 700,
                color: "#ededed",
                textAlign: "center",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              },
              children: "The Open Source AI Manifesto",
            },
          },
          // Gradient divider
          {
            type: "div",
            props: {
              style: {
                width: "200px",
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, #fbbf24, #ea580c, transparent)",
                marginTop: "28px",
                marginBottom: "28px",
              },
            },
          },
          // Subtitle
          {
            type: "div",
            props: {
              style: {
                fontSize: "24px",
                color: "#a3a3a3",
                textAlign: "center",
              },
              children:
                "Principles for sustaining open source in the age of generative AI",
            },
          },
          // URL
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "32px",
                fontSize: "18px",
                color: "#fbbf24",
                letterSpacing: "0.05em",
              },
              children: "human-oss.dev",
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  });
  const png = resvg.render().asPng();

  writeFileSync(join(publicDir, "og-image.png"), png);
  console.log("Generated public/og-image.png (1200×630)");
}

generate().catch((err) => {
  console.error("Failed to generate OG image:", err);
  process.exit(1);
});
