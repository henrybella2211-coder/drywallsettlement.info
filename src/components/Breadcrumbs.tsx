import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

type Crumb = {
  label: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-charcoal/60">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span className="text-charcoal/80" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-sage">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
