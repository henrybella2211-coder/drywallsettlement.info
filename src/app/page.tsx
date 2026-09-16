import Image from "next/image";
import Button from "@/components/Button";
import NumberedStep from "@/components/NumberedStep";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/lib/guides";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-14 pt-10 text-center sm:pt-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-coral">
          A plain-English guide for new vapers
        </p>
        <h1 className="font-heading text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
          Vaping, explained simply for UK beginners.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-charcoal/75">
          If you have just switched from smoking, or you are thinking about it, PodPath
          walks you through your first vape kit one small step at a time. No jargon,
          no confusing forums, no assumed knowledge.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/start-here">Start Here</Button>
          <Button href="/guides" variant="secondary">
            Browse all guides
          </Button>
        </div>
      </section>

      {/* Hero image */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-[0_8px_24px_-12px_rgba(35,35,35,0.25)] sm:h-80">
          <Image
            src="/images/pod-kit-on-wooden-table.jpg"
            alt="A small black pod vape kit resting on a wooden table"
            fill
            sizes="(min-width: 768px) 896px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* 3 steps */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-heading text-3xl font-semibold text-charcoal">
            3 steps to your first vape
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-charcoal/70">
            You do not need to understand everything on day one. These three decisions
            are the only ones that really matter to start with.
          </p>

          <div className="mt-12 space-y-10">
            <NumberedStep
              number={1}
              title="Pick a simple starter kit"
              href="/guides/your-first-vape-kit"
              linkLabel="Read the full kit-buying guide"
            >
              A pod kit is a small, rechargeable device that heats e-liquid into vapour
              you inhale. Most beginners do well with a simple pod kit costing roughly
              £15 to £35, rather than a more complex device aimed at hobbyists.
            </NumberedStep>

            <NumberedStep
              number={2}
              title="Choose your vaping style"
              href="/guides/mtl-vs-dtl-vaping"
              linkLabel="Compare MTL and DTL vaping"
            >
              MTL (mouth-to-lung) feels closer to drawing on a cigarette and suits most
              people switching from smoking. DTL (direct-to-lung) gives a bigger cloud
              and a looser draw, and usually suits more experienced vapers.
            </NumberedStep>

            <NumberedStep
              number={3}
              title="Pick a sensible nicotine strength"
              href="/guides/nicotine-strength-explained"
              linkLabel="See the nicotine strength guide"
            >
              UK e-liquid comes in set strengths, up to a legal cap of 20mg/ml. Picking
              a strength that roughly matches how much you used to smoke makes those
              first few weeks far more comfortable.
            </NumberedStep>
          </div>
        </div>
      </section>

      {/* Latest guides */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-3xl font-semibold text-charcoal">
            Latest guides
          </h2>
          <p className="max-w-lg text-charcoal/70">
            Short, specific guides written for people buying and using their first
            vape, not for hobbyists chasing bigger clouds.
          </p>
        </div>
        <div className="grid gap-8 pt-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* Who this site is for */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-charcoal">
            Who this site is for
          </h2>
          <p className="mt-5 text-charcoal/75">
            PodPath is written for UK adults, 18 and over, who already smoke or vape
            and want plain, practical help getting started or buying their first kit.
            Many readers are smokers who have decided to try switching, or people who
            bought a vape a few weeks ago and still feel a bit lost.
          </p>
          <p className="mt-4 text-charcoal/75">
            This is an independent information website, not a shop. We do not sell
            devices or e-liquid, and we are not affiliated with any particular
            manufacturer. According to the NHS, vaping is not risk-free, but it is
            considered substantially less harmful than smoking and can support people
            trying to quit cigarettes. PodPath is not aimed at anyone under 18 or
            anyone who does not currently smoke.
          </p>
        </div>
      </section>
    </>
  );
}
