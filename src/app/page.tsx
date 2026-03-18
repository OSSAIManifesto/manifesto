import { HeroSection } from "@/components/hero-section";
import { GradientDivider } from "@/components/gradient-divider";
import { PreambleSection } from "@/components/preamble-section";
import { PrinciplesSection } from "@/components/principles-section";
import { BadgeCtaSection } from "@/components/badge-cta-section";
import { FooterSection } from "@/components/footer-section";

const principles = [
  {
    title: "Own Your Commit",
    description:
      "Every contribution carries your name. Take the time to understand the intent, verify the correctness, and stand behind the outcome of what you submit. Accountability for the codebase is a human responsibility that cannot be delegated to a model.",
  },
  {
    title: "Prove Your Work",
    description:
      "Code that merely compiles is not code that is proven safe. Every change requires evidence proportional to its risk. Whether AI helped you write it or not, always provide tests, reproduction steps, and security checks.",
  },
  {
    title: "Respect Reviewer Time",
    description:
      "Every pull request costs human attention, which is the scarcest resource in open source. Just because AI allows you to generate code quickly does not mean you should submit it all at once. Prioritize quality over quantity to make every submission worth a maintainer\u2019s time.",
  },
  {
    title: "Document the Intent",
    description:
      "Because AI can scale code output faster than human attention can process it, you need to compensate with clear artifacts. Write meaningful commit messages, provide architecture notes, and map out your logic. The more code you generate, the more context you owe the community.",
  },
  {
    title: "Speak Authentically",
    description:
      "While AI is a great tool for drafting code, every issue, comment, and code review should be written in your own voice. Do not let a model handle your community interactions. Trust, collaboration, and resolving disputes require real human connection.",
  },
  {
    title: "Honor the Ecosystem",
    description:
      "AI models are built on the historical work of the open-source community. Be mindful of licensing boundaries and avoid blindly copying large, opaque blocks of generated code that might infringe on the rights of others. Respect the origins of the code you contribute.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GradientDivider />
      <PreambleSection />
      <GradientDivider />
      <PrinciplesSection principles={principles} />
      <GradientDivider />
      <BadgeCtaSection />
      <GradientDivider />
      <FooterSection />
    </main>
  );
}
