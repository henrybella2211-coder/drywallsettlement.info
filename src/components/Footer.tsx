import Link from "next/link";
import { siteConfig } from "@/lib/site";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/start-here", label: "Start Here" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms", label: "Terms & Disclaimer" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/age-notice", label: "Age Notice" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#F1ECE0]">
      <div className="mx-auto grid max-w-4xl gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-sage-dark">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-charcoal/70">
            {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Explore">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-charcoal/50">
            Explore
          </h2>
          <ul className="space-y-2 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sage">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-charcoal/50">
            Legal
          </h2>
          <ul className="space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sage">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="bg-sage-dark px-6 py-4 text-center text-xs leading-relaxed text-white/90">
        <p className="mx-auto max-w-3xl">
          PodPath is intended for adults aged 18 and over who already smoke or vape, or
          who are seeking factual information for that purpose. It is not intended to
          encourage anyone under 18, or anyone who does not currently smoke or vape, to
          start.{" "}
          <Link href="/age-notice" className="underline hover:text-coral">
            Read our age notice
          </Link>
          .
        </p>
        <p className="mt-2 text-white/60">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Independent UK vaping
          information website.
        </p>
      </div>
    </footer>
  );
}
