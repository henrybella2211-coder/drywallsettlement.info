import type { Metadata } from "next";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the PodPath editorial team by email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-12 text-center">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <h1 className="font-heading text-4xl font-semibold text-charcoal">Get in touch</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-charcoal/75">
        Spotted something wrong in a guide, have a question, or just want to say
        hello? Email us and we will get back to you.
      </p>

      <div className="mt-8 rounded-xl bg-white p-8 shadow-[0_8px_24px_-12px_rgba(35,35,35,0.2)]">
        <p className="text-sm text-charcoal/60">Write to us at</p>
        <p className="mt-1 font-heading text-2xl font-semibold text-sage-dark">
          {siteConfig.contactEmail}
        </p>
        <Button href={`mailto:${siteConfig.contactEmail}`} className="mt-6">
          Email PodPath
        </Button>
      </div>

      <p className="mx-auto mt-8 max-w-md text-sm text-charcoal/60">
        This button opens your own email app so you can send a message directly. We do
        not currently run a contact form on this site, and we do not publish a phone
        number or postal address.
      </p>
    </div>
  );
}
