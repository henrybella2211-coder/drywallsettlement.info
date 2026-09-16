import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "New to vaping? Start here for a simple, three-step route through choosing your first pod kit, your vaping style and your nicotine strength.",
  alternates: { canonical: "/start-here" },
};

const faqs = [
  {
    question: "Is vaping safe?",
    answer:
      "No product that involves inhaling anything is completely risk-free, and PodPath will not tell you vaping is safe or harmless. According to the NHS, vaping carries a fraction of the risk of smoking and can help smokers switch away from cigarettes, but it is not intended for people who have never smoked, and it is not intended for under-18s.",
  },
  {
    question: "Do I need to know anything technical before I buy a vape?",
    answer:
      "No. A simple pod kit is designed to be picked up and used straight away. Our first vape kit guide covers exactly what you need to know before your first purchase, in plain English.",
  },
  {
    question: "How much does it cost to start vaping?",
    answer:
      "A beginner-friendly pod kit typically costs around £15 to £35, and a bottle of e-liquid is usually £3 to £6. Running costs after that depend on how often you replace coils and top up e-liquid.",
  },
  {
    question: "What if I pick the wrong nicotine strength or style at first?",
    answer:
      "It is common to adjust after the first week or two. Coils, e-liquid and even devices are inexpensive enough that most beginners treat their first kit as a starting point rather than a permanent choice.",
  },
];

export default function StartHerePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Start Here", href: "/start-here" }]} />
      <JsonLd data={faqJsonLd} />

      <h1 className="font-heading text-4xl font-semibold text-charcoal">Start here</h1>
      <p className="mt-4 text-lg text-charcoal/75">
        Welcome. If you are new to vaping, or you bought a kit recently and still feel
        unsure about it, this page is your starting point. Read the three guides below
        in order, and you will have covered everything you need for your first few
        weeks.
      </p>

      <ol className="mt-10 space-y-8">
        <li className="rounded-xl bg-white p-6 shadow-[0_8px_24px_-12px_rgba(35,35,35,0.2)]">
          <span className="text-xs font-semibold uppercase tracking-wide text-coral">
            Step 1
          </span>
          <h2 className="mt-1 font-heading text-xl font-semibold">
            <Link href="/guides/your-first-vape-kit" className="hover:text-sage-dark">
              Your first vape kit
            </Link>
          </h2>
          <p className="mt-2 text-charcoal/70">
            What a pod kit is, what to buy, and how to charge and fill it for the first
            time without making the common day-one mistakes.
          </p>
        </li>

        <li className="rounded-xl bg-white p-6 shadow-[0_8px_24px_-12px_rgba(35,35,35,0.2)]">
          <span className="text-xs font-semibold uppercase tracking-wide text-coral">
            Step 2
          </span>
          <h2 className="mt-1 font-heading text-xl font-semibold">
            <Link href="/guides/mtl-vs-dtl-vaping" className="hover:text-sage-dark">
              MTL vs DTL vaping
            </Link>
          </h2>
          <p className="mt-2 text-charcoal/70">
            The two main ways of drawing on a vape, explained simply, so you know which
            one is likely to suit you.
          </p>
        </li>

        <li className="rounded-xl bg-white p-6 shadow-[0_8px_24px_-12px_rgba(35,35,35,0.2)]">
          <span className="text-xs font-semibold uppercase tracking-wide text-coral">
            Step 3
          </span>
          <h2 className="mt-1 font-heading text-xl font-semibold">
            <Link href="/guides/nicotine-strength-explained" className="hover:text-sage-dark">
              Nicotine strength explained
            </Link>
          </h2>
          <p className="mt-2 text-charcoal/70">
            A simple way to choose between 3mg, 6mg, 10mg and 20mg e-liquid based on
            how much you used to smoke.
          </p>
        </li>
      </ol>

      <section className="mt-14">
        <h2 className="font-heading text-2xl font-semibold text-charcoal">
          Common questions
        </h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-heading text-lg font-semibold text-charcoal">
                {faq.question}
              </h3>
              <p className="mt-2 text-charcoal/75">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm text-charcoal/60">
        Looking to stop smoking with professional support alongside switching to
        vaping? The NHS Better Health: Quit Smoking service offers free tools and
        advice at{" "}
        <a
          href="https://www.nhs.uk/better-health/quit-smoking/"
          className="text-sage-dark underline hover:text-coral"
          target="_blank"
          rel="noopener noreferrer"
        >
          nhs.uk/better-health/quit-smoking
        </a>
        .
      </p>
    </div>
  );
}
