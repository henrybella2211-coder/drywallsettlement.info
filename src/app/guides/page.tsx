import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Every PodPath guide in one place: plain-English help with your first vape kit, MTL vs DTL vaping and choosing a nicotine strength.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }]} />

      <h1 className="font-heading text-4xl font-semibold text-charcoal">Guides</h1>
      <p className="mt-4 max-w-xl text-lg text-charcoal/75">
        A short reading list for anyone new to vaping. Start at the top if you have
        not bought a kit yet, or jump straight to whichever question you have.
      </p>

      <ul className="mt-10 divide-y divide-black/5">
        {guides.map((guide) => (
          <li key={guide.slug} className="py-6 first:pt-0">
            <Link
              href={`/guides/${guide.slug}`}
              className="group flex gap-5 rounded-xl p-3 transition-colors hover:bg-white"
            >
              <div className="relative h-20 w-28 flex-none overflow-hidden rounded-lg sm:h-24 sm:w-32">
                <Image
                  src={guide.image}
                  alt={guide.imageAlt}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-coral">
                  {guide.category}
                </span>
                <h2 className="mt-1 font-heading text-lg font-semibold text-charcoal group-hover:text-sage-dark sm:text-xl">
                  {guide.title}
                </h2>
                <p className="mt-1 text-sm text-charcoal/70">{guide.excerpt}</p>
                <p className="mt-2 text-xs text-charcoal/50">
                  {guide.readTime} &middot; {guide.lastUpdatedDisplay}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
