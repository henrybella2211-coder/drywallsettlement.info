import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/start-here", label: "Start Here" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-black/5 bg-cream">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-6 pt-8 pb-5">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-tight text-sage-dark"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="w-full">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 border-t border-black/5 pt-3 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-charcoal/80 transition-colors hover:text-sage"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
