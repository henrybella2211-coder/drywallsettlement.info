import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("nicotine-strength-explained")!;

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
        E-liquid bottles are labelled with a number followed by &quot;mg&quot;, such as 3mg,
        6mg, 10mg or 20mg. This is the nicotine strength, measured in milligrams of
        nicotine per millilitre of e-liquid. Picking a sensible strength is one of the
        biggest factors in whether vaping feels satisfying enough to stick with, so it
        is worth understanding before you buy.
      </p>

      <h2>The UK strength options</h2>
      <p>
        Under the Tobacco and Related Products Regulations (TRPR), nicotine e-liquid
        sold in the UK is capped at 20mg/ml, and you will not legally find anything
        stronger on a shop shelf. Within that cap, the common strengths are:
      </p>
      <ul>
        <li><strong>0mg:</strong> no nicotine, flavour only.</li>
        <li><strong>3mg:</strong> very light, suited to occasional or light smokers.</li>
        <li><strong>6mg:</strong> light to moderate.</li>
        <li><strong>10mg:</strong> moderate to fairly strong, a common starting point for regular smokers.</li>
        <li><strong>20mg:</strong> the legal maximum, aimed at heavier smokers.</li>
      </ul>
      <p>
        The same regulations also limit bottle and tank sizes for nicotine-containing
        e-liquid: refillable bottles are capped at 10ml, and pre-filled pods or
        cartridges are capped at 2ml. This is a safety measure to limit how much
        nicotine e-liquid is available in a single container, and you can read the
        detail on{" "}
        <a
          href="https://www.gov.uk/guidance/notify-a-tobacco-or-e-cigarette-product"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOV.UK&apos;s e-cigarette regulation guidance
        </a>
        .
      </p>

      <h2>Nic salts vs freebase: does it change the strength you need?</h2>
      <p>
        Yes, in a meaningful way. Freebase nicotine, the older, more traditional form,
        can feel harsh on the throat at higher strengths, which is why freebase
        e-liquid is usually sold at 3mg, 6mg or occasionally higher. Nicotine salts (nic
        salts) are formulated to feel smoother even at 10mg or 20mg, which is why most
        strong e-liquids on sale today are nic salts rather than freebase.
      </p>
      <p>
        In practice, this means two bottles both labelled 10mg will not necessarily
        feel the same. A 10mg nic salt tends to feel gentler on the throat than a 10mg
        freebase liquid, while delivering nicotine into the bloodstream at a broadly
        similar rate. Our{" "}
        <Link href="/guides/your-first-vape-kit">first vape kit guide</Link> explains
        how this affects which device and coil you will need.
      </p>

      <h2>What if you remember disposables feeling stronger?</h2>
      <p>
        Some people who tried a disposable vape in the past remember it feeling
        stronger than 20mg. In reality, disposable vapes sold legally in the UK were
        always subject to the same 20mg/ml cap as any other e-liquid. Any stronger
        feeling usually came from the device itself, such as a looser draw or a coil
        designed to deliver nicotine quickly, rather than an illegal strength. Since
        1 June 2025, single-use disposable vapes can no longer be legally sold in the
        UK under the Environmental Protection (Single-use Vapes) Regulations, so
        current options are rechargeable, refillable pod kits and tanks, which is what
        this guide focuses on.
      </p>

      <h2>A simple starting point based on how much you used to smoke</h2>
      <p>
        This is general guidance, not medical advice, and everyone is different. As a
        rough starting point, many people base their nicotine strength on how many
        cigarettes a day they smoked:
      </p>
      <table>
        <thead>
          <tr>
            <th>Roughly how much you smoked</th>
            <th>A common starting strength</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Occasional or social smoker</td>
            <td>3mg to 6mg</td>
          </tr>
          <tr>
            <td>Around 10 cigarettes a day</td>
            <td>6mg to 10mg</td>
          </tr>
          <tr>
            <td>Around 15 to 20 cigarettes a day</td>
            <td>10mg to 20mg (often as nic salts)</td>
          </tr>
          <tr>
            <td>20 or more cigarettes a day, or roll-ups throughout the day</td>
            <td>20mg nic salts</td>
          </tr>
        </tbody>
      </table>
      <p>
        If you are not sure, it is sensible to start slightly higher rather than lower.
        In our view, a strength that feels a little too strong is far easier to adjust
        than giving up on vaping altogether because 3mg never felt like enough.
      </p>

      <h2>Signs your strength might be wrong</h2>
      <ul>
        <li>
          <strong>Too low:</strong> you feel restless, still crave cigarettes, or find
          yourself vaping constantly without feeling satisfied.
        </li>
        <li>
          <strong>Too high:</strong> a harsh, scratchy throat hit, mild headaches, or a
          slightly light-headed feeling, particularly if you are also drawing too hard
          (see our{" "}
          <Link href="/guides/mtl-vs-dtl-vaping">MTL vs DTL guide</Link> for more on
          draw style).
        </li>
      </ul>
      <p>
        Moving up or down a strength is normal and inexpensive. Most people settle on
        their preferred strength within the first two to four weeks.
      </p>

      <h2>Still smoking sometimes as well as vaping?</h2>
      <p>
        Many people go through a period of vaping and smoking a reduced number of
        cigarettes at the same time, often called dual use, before stopping cigarettes
        completely. If that sounds like you, it is worth being honest with yourself
        about how many cigarettes you are still having, since a low vape strength
        combined with occasional smoking can leave you underdosed on nicotine overall,
        which makes it harder to reduce cigarettes further. A slightly higher strength,
        reviewed after a couple of weeks, is often more effective than a very low one.
      </p>

      <h2>Does nicotine strength change how a vape tastes?</h2>
      <p>
        Slightly, yes. Higher strengths, particularly in freebase e-liquid, tend to
        mute flavour a little and add a sharper throat hit, which is one reason many
        vapers describe strong freebase liquids as harsher rather than more flavourful.
        Nic salts largely avoid this trade-off, which is part of why they have become
        the default choice for higher-strength e-liquid in the UK. If a strength feels
        right for your nicotine needs but the flavour feels flat or harsh, it is worth
        trying the same strength in nic salt form, or trying a different flavour
        profile, before assuming the strength itself is wrong.
      </p>

      <h2>If you want extra support to quit smoking</h2>
      <p>
        According to the NHS and Cancer Research UK&apos;s OHID, vaping is substantially
        less harmful than smoking and can help smokers switch away from cigarettes,
        although it is not risk-free and is not recommended for people who have never
        smoked. If you would like free, professional support alongside switching to
        vaping, the NHS Better Health: Quit Smoking service and NHS Smokefree offer
        tools and local stop smoking services across the UK at{" "}
        <a
          href="https://www.nhs.uk/better-health/quit-smoking/"
          target="_blank"
          rel="noopener noreferrer"
        >
          nhs.uk/better-health/quit-smoking
        </a>
        .
      </p>
    </ArticleLayout>
  );
}
