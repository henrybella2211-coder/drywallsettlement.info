import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description: "Terms of use and editorial disclaimer for the PodPath website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms & Website Disclaimer"
      breadcrumbLabel="Terms & Disclaimer"
      breadcrumbHref="/terms"
      intro="Plain terms covering how you can use this site and what our content is (and is not)."
    >
      <p>Last updated 10 September 2026.</p>

      <h2>Using this website</h2>
      <p>
        {siteConfig.name} is a free-to-read information website. You are welcome to
        read and share links to our guides. You should not copy, republish or resell
        our content without permission, and you should not scrape the site for
        automated reuse of our text or images.
      </p>

      <h2>Informational content only</h2>
      <p>
        Everything on this site is provided for general information only. It is not
        medical, legal or professional advice, and it should not be treated as a
        substitute for advice from a doctor, pharmacist or other qualified
        professional. If you have questions about your health or about quitting
        smoking, speak to your GP or the NHS Smokefree service.
      </p>

      <h2>Age notice</h2>
      <p>
        This website and its content are intended for adults aged 18 and over who
        already smoke or vape, or who are seeking factual information for that
        purpose. Nothing on this site is intended to encourage anyone under 18, or
        anyone who does not currently smoke, to start vaping. See our full{" "}
        <Link href="/age-notice">age notice</Link> for more detail.
      </p>

      <h2>Product and brand references</h2>
      <p>
        Where we mention a specific device or brand by name, it is to help explain a
        general point clearly, not as a recommendation, endorsement or advertisement.
        We do not accept payment for favourable coverage. Product availability,
        pricing and specifications can change after publication, and you should
        confirm current details with the retailer or manufacturer before buying.
      </p>

      <h2>No liability for third-party claims</h2>
      <p>
        We are not responsible for claims made by manufacturers or retailers about
        their own products, and we do not test, certify or guarantee any third-party
        product mentioned on this site.
      </p>

      <h2>External links</h2>
      <p>
        This site links to official sources, such as GOV.UK and the NHS, and
        occasionally to manufacturer websites where naming a specific product is
        helpful. We are not responsible for the content, accuracy or availability of
        external websites, and a link does not imply our endorsement of everything on
        that site.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The text, design and original photography selection on this site belong to
        {" "}{siteConfig.name} unless stated otherwise. Photographs are sourced from
        Unsplash under the Unsplash License and belong to their respective
        photographers.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms occasionally. The date at the top of this page
        shows when it was last revised.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent via our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </InfoPage>
  );
}
