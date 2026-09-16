import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "PodPath is an independent UK website offering plain-English vaping guides for adults who are new to vaping, often switching from smoking.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage title="About PodPath" breadcrumbLabel="About" breadcrumbHref="/about">
      <p>
        {siteConfig.name} is an independent UK vaping information website. We publish
        plain-English guides for adults who are new to vaping, particularly people who
        have recently switched, or are considering switching, from smoking.
      </p>

      <h2>What we do</h2>
      <p>
        Our guides focus on the practical, day-one questions that new vapers actually
        have: what to buy, how strong an e-liquid to pick, and how the different types
        of device and draw style work. We try to avoid hobbyist jargon and explain
        every term the first time it comes up.
      </p>

      <h2>Who writes PodPath</h2>
      <p>
        This site is written and edited by our UK-based editorial team. We are not
        affiliated with any vape manufacturer or retailer, we do not sell devices or
        e-liquid, and we do not accept payment in exchange for favourable coverage of
        any product. You can read more about how we research and update our content on
        our <Link href="/editorial-policy">editorial policy</Link> page.
      </p>

      <h2>Who this site is for</h2>
      <p>
        PodPath is written for adults in the UK aged 18 and over who already smoke or
        vape, or who are seeking factual information for that purpose. It is not
        intended to encourage anyone under 18, or anyone who does not currently smoke,
        to start vaping.
      </p>

      <h2>Not medical advice</h2>
      <p>
        Nothing on this site is medical advice. Where we reference health information,
        we point to official UK sources such as the NHS, and we encourage anyone
        wanting structured support to quit smoking to speak to their GP or use the NHS
        Better Health: Quit Smoking service.
      </p>

      <h2>Get in touch</h2>
      <p>
        If you have a question, a correction, or feedback on any guide, our{" "}
        <Link href="/contact">contact page</Link> has the details.
      </p>
    </InfoPage>
  );
}
