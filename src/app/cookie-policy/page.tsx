import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies PodPath actually uses, in plain English.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <InfoPage
      title="Cookie Policy"
      breadcrumbLabel="Cookie Policy"
      breadcrumbHref="/cookie-policy"
      intro="A short, honest explanation of cookies on this site."
    >
      <p>Last updated 10 September 2026.</p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files a website can store on your device to remember
        information, such as your preferences or login state, between visits.
      </p>

      <h2>What cookies does PodPath use?</h2>
      <p>
        This website does not currently use tracking or advertising cookies of any
        kind. We do not run analytics software, advertising networks, or social media
        embeds that set cookies. There is no cookie consent banner on this site
        because, at present, there is nothing that requires your consent.
      </p>
      <p>
        Your browser may still set strictly necessary technical data, such as basic
        session information, purely to allow the site to function correctly. This is
        not used to track you across visits or across other websites.
      </p>

      <h2>If this changes</h2>
      <p>
        If we add any feature in the future that sets cookies, for example privacy-
        conscious analytics, we will update this page to describe exactly what is
        used and why, and we will add a consent mechanism if one is legally required.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about this policy, please get in touch via our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </InfoPage>
  );
}
