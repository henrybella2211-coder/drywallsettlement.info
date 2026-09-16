import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/lib/guides";

function CardIcon() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-4 left-5 flex h-9 w-9 items-center justify-center rounded-full bg-sage text-white shadow-sm"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C9 6 6 9.5 6 13a6 6 0 0 0 12 0c0-3.5-3-7-6-11Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_-12px_rgba(35,35,35,0.25)] transition-transform hover:-translate-y-1"
    >
      <CardIcon />
      <div className="relative h-40 w-full">
        <Image
          src={guide.image}
          alt={guide.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-coral">
          {guide.category}
        </span>
        <h3 className="font-heading text-lg font-semibold leading-snug text-charcoal group-hover:text-sage-dark">
          {guide.title}
        </h3>
        <p className="text-sm text-charcoal/70">{guide.excerpt}</p>
        <span className="mt-auto pt-2 text-xs text-charcoal/50">
          {guide.readTime} &middot; {guide.lastUpdatedDisplay}
        </span>
      </div>
    </Link>
  );
}
