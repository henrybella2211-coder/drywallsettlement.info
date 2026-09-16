export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  lastUpdatedDisplay: string;
  lastUpdatedISO: string;
  image: string;
  imageAlt: string;
};

export const guides: Guide[] = [
  {
    slug: "your-first-vape-kit",
    title: "Your first vape kit: a beginner's guide to getting started",
    excerpt:
      "What a pod kit actually is, what you need to buy, and how to charge and fill it for the first time without the jargon overload.",
    category: "Getting started",
    readTime: "8 min read",
    lastUpdatedDisplay: "Last updated 10 September 2026",
    lastUpdatedISO: "2026-09-10",
    image: "/images/pod-kit-device-close-up.jpg",
    imageAlt: "Close-up of a small purple and pink pod vape kit resting on a table",
  },
  {
    slug: "mtl-vs-dtl-vaping",
    title: "MTL vs DTL vaping: which style suits a beginner?",
    excerpt:
      "Mouth-to-lung and direct-to-lung vaping feel completely different. Here's a plain-English look at which one most new vapers find easier.",
    category: "Getting started",
    readTime: "7 min read",
    lastUpdatedDisplay: "Last updated 12 September 2026",
    lastUpdatedISO: "2026-09-12",
    image: "/images/two-vape-devices-comparison.jpg",
    imageAlt: "Two different vape devices placed side by side on a table for comparison",
  },
  {
    slug: "nicotine-strength-explained",
    title: "Nicotine strength explained: choosing the right mg for you",
    excerpt:
      "3mg, 6mg, 10mg, 20mg. A simple walkthrough of what these numbers mean and how to pick a sensible starting point.",
    category: "E-liquid basics",
    readTime: "8 min read",
    lastUpdatedDisplay: "Last updated 14 September 2026",
    lastUpdatedISO: "2026-09-14",
    image: "/images/e-liquid-bottles-on-table.jpg",
    imageAlt: "Several small e-liquid bottles lined up together on a table",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
