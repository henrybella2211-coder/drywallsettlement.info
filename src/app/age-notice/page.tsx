import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Age Notice",
  description: "PodPath is intended for UK adults aged 18 and over. Read our age notice.",
  alternates: { canonical: "/age-notice" },
};

export default function AgeNoticePage() {
  return (
    <InfoPage
      title="Age Notice"
      breadcrumbLabel="Age Notice"
      breadcrumbHref="/age-notice"
    >
      <p>
        {siteConfig.name} is intended for adults in the UK aged 18 and over who
        already smoke or vape, or who are seeking factual information for that
        purpose. It is not intended to encourage anyone under the age of 18, or
        anyone who does not currently smoke, to start vaping.
      </p>

      <h2>UK age of sale law</h2>
      <p>
        UK law sets the minimum age to buy vaping and tobacco products at 18, under
        the Children and Young Persons Act. This is enforced through retailer ID
        checks at the point of sale, and many shops apply a &quot;Challenge 25&quot; policy,
        asking for ID from anyone who appears under 25, as standard retailer practice
        rather than a separate legal requirement.
      </p>

      <h2>If you are under 18</h2>
      <p>
        Please leave this site. It is not written for you, and it is illegal for a
        retailer to sell you a vaping product in the UK.
      </p>

      <h2>If you have never smoked or vaped</h2>
      <p>
        This site is not intended for you either. According to the NHS, vaping is not
        risk-free, and it is not recommended for anyone who does not already smoke.
      </p>

      <h2>Why we show this notice</h2>
      <p>
        We display this notice in the footer of every page, and as its own page here,
        so the intended audience for this site is always clear. We have deliberately
        not built a full-screen age gate that blocks access, since a clear, permanent
        notice like this one is more accessible and does not prevent adults from
        reading factual information.
      </p>
    </InfoPage>
  );
}
