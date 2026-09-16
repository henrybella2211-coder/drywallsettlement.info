import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How PodPath researches, writes and updates its vaping guides.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <InfoPage
      title="Editorial Policy"
      breadcrumbLabel="Editorial Policy"
      breadcrumbHref="/editorial-policy"
      intro="How we research, write and maintain the guides on this site."
    >
      <p>Last updated 10 September 2026.</p>

      <h2>Our approach</h2>
      <p>
        {siteConfig.name} is written for people who are new to vaping and want clear,
        practical guidance without unnecessary jargon. Every guide is written in
        plain English, with technical terms explained the first time they appear.
      </p>

      <h2>How we research content</h2>
      <p>
        For factual and regulatory claims, such as legal nicotine strength limits, age
        of sale rules, or health positioning, we refer to official UK sources
        including GOV.UK, the MHRA, the NHS, Trading Standards and the Department of
        Health and Social Care. Where we describe a health position, such as how
        vaping compares to smoking, we attribute it clearly to the relevant body (for
        example, &quot;according to the NHS&quot;) rather than stating it as our own claim.
      </p>
      <p>
        General practical guidance, such as how to fill a pod or which draw style
        suits beginners, reflects common, widely understood practice among UK vape
        shops and the editorial team&apos;s own research, rather than a single named
        product test. We do not claim to have personally tested specific devices, and
        we do not publish star ratings, review scores or invented user statistics.
      </p>

      <h2>Independence</h2>
      <p>
        We do not accept payment, free products or any other incentive in exchange
        for favourable coverage of a brand or device. Where we mention a specific
        product by name, it is to illustrate a general point, not as a paid
        placement.
      </p>

      <h2>Keeping content up to date</h2>
      <p>
        UK vaping regulation changes periodically, for example the ban on disposable
        vapes that took effect on 1 June 2025. Every guide displays a &quot;last updated&quot;
        date, and we review published guides when we become aware of a relevant
        regulatory or factual change.
      </p>

      <h2>Corrections</h2>
      <p>
        If you spot something inaccurate or out of date, please tell us via our{" "}
        <Link href="/contact">contact page</Link>. We will review the guide and correct it
        promptly where a correction is warranted, updating the &quot;last updated&quot; date
        accordingly.
      </p>
    </InfoPage>
  );
}
