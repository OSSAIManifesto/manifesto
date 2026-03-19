import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

const SITE_URL = "https://human-oss.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Open Source AI Manifesto",
  description:
    "Principles for sustaining open source in the age of generative AI",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Open Source AI Manifesto",
    description:
      "Principles for sustaining open source in the age of generative AI",
    url: SITE_URL,
    siteName: "The Open Source AI Manifesto",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Open Source AI Manifesto — Principles for sustaining open source in the age of generative AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Open Source AI Manifesto",
    description:
      "Principles for sustaining open source in the age of generative AI",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Open Source AI Manifesto",
  url: SITE_URL,
  description:
    "Principles for sustaining open source in the age of generative AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <noscript>
          <style>{'[style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }'}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
