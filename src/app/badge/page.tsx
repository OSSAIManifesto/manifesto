import type { Metadata } from "next";
import { BadgePreview } from "@/components/badge-preview";

export const metadata: Metadata = {
  title: "Badge — The Open Source AI Manifesto",
  description:
    "Add the Open Source AI Manifesto badge to your repository to signal your commitment to responsible AI use in open source.",
};

const SITE_URL = "https://human-oss.dev";

const snippets = {
  markdown: {
    label: "Markdown",
    dark: `[![Open Source AI Manifesto](${SITE_URL}/badge.svg)](${SITE_URL})`,
    light: `[![Open Source AI Manifesto](${SITE_URL}/badge-light.svg)](${SITE_URL})`,
  },
  html: {
    label: "HTML",
    dark: `<a href="${SITE_URL}"><img src="${SITE_URL}/badge.svg" alt="Open Source AI Manifesto" /></a>`,
    light: `<a href="${SITE_URL}"><img src="${SITE_URL}/badge-light.svg" alt="Open Source AI Manifesto" /></a>`,
  },
  rst: {
    label: "reStructuredText",
    dark: `.. image:: ${SITE_URL}/badge.svg\n   :target: ${SITE_URL}\n   :alt: Open Source AI Manifesto`,
    light: `.. image:: ${SITE_URL}/badge-light.svg\n   :target: ${SITE_URL}\n   :alt: Open Source AI Manifesto`,
  },
};

export default function BadgePage() {
  return (
    <main className="min-h-screen px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-b from-foreground to-muted bg-clip-text text-transparent">
          Badge
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
          Add the manifesto badge to your repository README to signal your
          commitment to responsible AI use in open source. You can also
          reference it in your{" "}
          <a
            href="https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-light hover:underline"
          >
            pull request template
          </a>{" "}
          so every contributor sees it at review time.
        </p>

        {/* Preview & Snippets — variant toggle controls both */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">
            Preview & Embed
          </h2>
          <p className="text-muted mb-8">
            Toggle between dark and light variants. Use the dark variant for
            light READMEs and the light variant for dark READMEs.
          </p>
          <BadgePreview siteUrl={SITE_URL} snippets={snippets} />
        </section>

        {/* Back link */}
        <div className="mt-20 pt-8 border-t border-surface-border">
          <a
            href="/"
            className="text-muted hover:text-foreground transition-colors duration-200"
          >
            &larr; Back to manifesto
          </a>
        </div>
      </div>
    </main>
  );
}
