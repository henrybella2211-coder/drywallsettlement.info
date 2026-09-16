import Image from "next/image";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import type { Guide } from "@/lib/guides";

type ArticleLayoutProps = {
  guide: Guide;
  children: ReactNode;
};

export default function ArticleLayout({ guide, children }: ArticleLayoutProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.lastUpdatedISO,
    dateModified: guide.lastUpdatedISO,
    author: {
      "@type": "Organization",
      name: `${siteConfig.name} editorial team`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    image: `${siteConfig.url}${guide.image}`,
    mainEntityOfPage: `${siteConfig.url}/guides/${guide.slug}`,
  };

  return (
    <article className="mx-auto max-w-2xl px-6 py-12">
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: guide.title, href: `/guides/${guide.slug}` },
        ]}
      />

      <span className="text-xs font-semibold uppercase tracking-wide text-coral">
        {guide.category}
      </span>
      <h1 className="mt-2 font-heading text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
        {guide.title}
      </h1>
      <p className="mt-3 text-sm text-charcoal/50">
        {guide.readTime} &middot; {guide.lastUpdatedDisplay}
      </p>

      <div className="relative mt-8 h-56 w-full overflow-hidden rounded-xl sm:h-72">
        <Image
          src={guide.image}
          alt={guide.imageAlt}
          fill
          sizes="(min-width: 768px) 672px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="prose-podpath mt-10 text-charcoal/85">{children}</div>
    </article>
  );
}
