import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

type InfoPageProps = {
  title: string;
  intro?: string;
  breadcrumbLabel: string;
  breadcrumbHref: string;
  children: ReactNode;
};

export default function InfoPage({
  title,
  intro,
  breadcrumbLabel,
  breadcrumbHref,
  children,
}: InfoPageProps) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: breadcrumbLabel, href: breadcrumbHref }]}
      />
      <h1 className="font-heading text-4xl font-semibold text-charcoal">{title}</h1>
      {intro && <p className="mt-4 text-lg text-charcoal/75">{intro}</p>}
      <div className="prose-podpath mt-8 text-charcoal/85">{children}</div>
    </div>
  );
}
