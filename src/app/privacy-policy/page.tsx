import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PodPath handles personal data, in plain English.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      breadcrumbLabel="Privacy Policy"
      breadcrumbHref="/privacy-policy"
      intro="This policy explains what happens to your data when you use PodPath, written in plain English rather than dense legal wording."
    >
      <p>Last updated 10 September 2026.</p>

      <h2>Who we are</h2>
      <p>
        {siteConfig.name} is an independent UK vaping information website. This
        privacy policy applies to {siteConfig.url}. For any questions about your data,
        see the contact details below.
      </p>

      <h2>What data we collect</h2>
      <p>
        This website does not currently use any analytics, tracking or advertising
        tools. We do not collect browsing data, build visitor profiles, or use
        cookies for tracking purposes. The only personal data we handle is:
      </p>
      <ul>
        <li>
          <strong>Contact requests.</strong> If you email us using the address on our
          contact page, we will hold your email address and message for as long as
          needed to respond to you and to keep a reasonable record of correspondence.
        </li>
        <li>
          <strong>Standard server logs.</strong> Like most websites, our hosting
          provider may automatically record basic technical information, such as IP
          address and browser type, for security and reliability purposes. We do not
          access this data to identify individual visitors.
        </li>
      </ul>
      <p>
        We do not currently run user accounts, comment sections, newsletters, or
        advertising on this site. If that changes, this policy will be updated to
        reflect it honestly.
      </p>

      <h2>How we use your data</h2>
      <p>
        Any data we hold is used solely to operate and improve this website and to
        respond to messages sent to us. We do not sell personal data, and we do not
        share it with third parties for marketing purposes.
      </p>

      <h2>Legal basis and your rights</h2>
      <p>
        We handle personal data in line with UK GDPR and the Data Protection Act 2018.
        Depending on the data involved, you have rights that may include access to
        the data we hold about you, correction of inaccurate data, and deletion of
        data we no longer need to keep. To exercise any of these rights, contact us
        using the details on our <Link href="/contact">contact page</Link>.
      </p>

      <h2>Cookies</h2>
      <p>
        Details of any cookies used on this site are set out in our{" "}
        <Link href="/cookie-policy">cookie policy</Link>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time, for example if we add a new
        feature to the site. Any changes will be reflected on this page with an
        updated date.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this policy or how your data is handled,
        please get in touch via our <Link href="/contact">contact page</Link>.
      </p>
    </InfoPage>
  );
}
