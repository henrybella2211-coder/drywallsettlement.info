import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("where-can-you-vape-in-the-uk")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.excerpt,
  alternates: { canonical: `/guides/${guide.slug}` },
  openGraph: {
    title: guide.title,
    description: guide.excerpt,
    images: [guide.image],
  },
};

export default function Page() {
  return (
    <ArticleLayout guide={guide}>
      <p>
        A lot of new vapers assume vaping is covered by the same smoking ban that
        stops people lighting up in pubs, offices and shopping centres. It is a
        reasonable assumption, but it is not quite right. This guide explains what
        the law actually says, why it comes down to individual venue and workplace
        policy far more than most people expect, and how to handle that with a bit of
        common courtesy. This is general guidance, not legal advice, and it is always
        worth checking the specific policy of wherever you are.
      </p>

      <h2>What the law actually says</h2>
      <p>
        The indoor smoking ban that most people are thinking of comes from the{" "}
        <a
          href="https://www.legislation.gov.uk/ukpga/2006/28/part/1/chapter/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Health Act 2006
        </a>
        , which made enclosed and substantially enclosed public places and
        workplaces across England smoke-free by law. Smoking, for the purposes of
        that law, means smoking tobacco or anything else that involves burning it.
        Vaping does not involve combustion; a coil heats e-liquid into vapour rather
        than burning anything. Because of that, e-cigarettes fall outside the
        statutory definition of smoking, and there is currently no equivalent
        nationwide law that bans vaping indoors the way the Health Act 2006 bans
        smoking.
      </p>
      <p>
        That is genuinely the current legal position, but it is worth knowing this is
        an area that has been under review. Earlier in 2026, the government
        consulted on proposals that would extend smoke-free style restrictions to
        vaping in enclosed workplaces and public places, on public transport, and in
        vehicles carrying under-18s, along with outdoor children&apos;s playgrounds
        and education settings. That consultation was a proposal, not a change to
        the law itself, and any new restrictions would need to go through further
        parliamentary process before taking effect. Because rules in this area can
        move, it is worth checking the current position on GOV.UK rather than
        assuming today&apos;s guidance will stay accurate indefinitely.
      </p>

      <h2>So who actually decides?</h2>
      <p>
        With no blanket ban in place, whether you can vape somewhere is almost
        always down to the policy of whoever runs that space, not a criminal law
        equivalent to the smoking ban. In practice, that means:
      </p>
      <ul>
        <li>
          <strong>Private venues</strong> such as pubs, restaurants, shops and cinemas
          can set their own rules and ask you to stop vaping or step outside, in the
          same way they could ask you to leave for any other reason.
        </li>
        <li>
          <strong>Employers</strong> can set workplace vaping policies. Many simply
          extend their existing smoking policy to cover vaping for consistency, but
          this is a choice they make, not something the Health Act 2006 requires of
          them.
        </li>
        <li>
          <strong>Transport operators</strong> generally do ban vaping on board,
          through their own conditions of carriage rather than national law. Transport
          for London&apos;s conditions prohibit vaping on the Tube, buses and at
          stations, and most National Rail operators ban it on trains and platforms
          too, partly because vapour can set off sensitive smoke alarms and cause
          real delays.
        </li>
        <li>
          <strong>Landlords and housing providers</strong> can restrict vaping in
          shared or rented indoor spaces through tenancy agreements, separately from
          any national law.
        </li>
      </ul>
      <p>
        The upshot is that &quot;is vaping allowed here&quot; is really a question about
        that specific venue&apos;s policy, not a single UK-wide legal answer. Signage,
        staff, or a venue&apos;s website are the most reliable way to check.
      </p>

      <h2>Practical vaping etiquette</h2>
      <p>
        Even where vaping is technically permitted, a bit of courtesy goes a long
        way, particularly since vaping is still relatively new and not everyone
        around you will be comfortable with it. A few habits worth building:
      </p>
      <ul>
        <li>
          <strong>Ask before you vape indoors or in someone else&apos;s space,</strong>{" "}
          even somewhere you think might be fine, such as a friend&apos;s house, a
          car, or a small shared office. It takes seconds and avoids any awkwardness.
        </li>
        <li>
          <strong>Avoid vaping around children,</strong> including outdoors, even
          though it is legal to do so in most places. Many parents find it
          uncomfortable regardless of the law, and it keeps things simple.
        </li>
        <li>
          <strong>Check your workplace policy</strong> rather than assuming, since
          policies vary a lot between employers and some treat designated smoking
          areas as vaping areas too, while others do not allow vaping anywhere on
          site.
        </li>
        <li>
          <strong>Assume public transport means no,</strong> since the major
          operators generally prohibit it, and being asked to stop or leave a bus or
          train is not a great start to a journey.
        </li>
        <li>
          <strong>Be mindful of your cloud.</strong> A DTL device produces
          noticeably more visible vapour than a tight MTL pod kit, covered in our{" "}
          <Link href="/guides/mtl-vs-dtl-vaping">MTL vs DTL guide</Link>, so in busy
          or enclosed spaces a smaller, more discreet device and a gentler draw tends
          to draw far less attention.
        </li>
        <li>
          <strong>Step outside or away from doorways</strong> when in doubt, in the
          same way many smokers do, rather than testing whether vaping indoors will
          be noticed or minded.
        </li>
      </ul>

      <h2>A quick way to think about it</h2>
      <p>
        Rather than trying to memorise a list of exact rules, it helps to think of
        vaping as unregulated by national law in most everyday settings, but
        regulated everywhere by whoever owns or runs that space. Treat any venue,
        vehicle or workplace as vaping-unfriendly by default until you know
        otherwise, and you will rarely get it wrong. If cost, as well as courtesy, is
        part of why you are weighing up vaping, our{" "}
        <Link href="/guides/vaping-cost-vs-smoking">
          guide to vaping costs compared with smoking
        </Link>{" "}
        covers what to budget for.
      </p>
      <p>
        None of this is legal advice, and rules in this area can change, particularly
        given the consultation mentioned above. If you are ever unsure about a
        specific venue, workplace or transport service, the simplest and most
        reliable approach is to check its own published policy or ask a member of
        staff directly.
      </p>
    </ArticleLayout>
  );
}
