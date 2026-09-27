import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("nicotine-salts-for-beginners")!;

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
        If you have started looking at e-liquid bottles, you have probably noticed
        that most of them say &quot;nic salt&quot; somewhere on the label, alongside a
        strength such as 5mg, 10mg or 20mg. Nic salts are now the default e-liquid
        format for most beginner pod kits, so understanding what they are, and why
        so many new vapers are pointed towards a lower strength like 5mg, is worth
        five minutes before you buy your first bottle.
      </p>

      <h2>What is a nicotine salt, in plain English?</h2>
      <p>
        Nicotine occurs naturally in a form called freebase nicotine, which is the
        type used in older or more traditional e-liquids. Nicotine salt (usually
        shortened to &quot;nic salt&quot;) is the same nicotine combined with an acid, which
        changes how it behaves in the vape and in your body. The practical result,
        widely described by manufacturers and vapers alike, is a smoother throat
        hit at higher strengths than freebase nicotine tends to give, plus nicotine
        that is absorbed a little faster. That is a formulation characteristic, not
        a claim that one form is safer than the other.
      </p>
      <p>
        Because nic salts feel gentler even at higher strengths, they became the
        standard choice for the small, simple pod kits most beginners buy, the kind
        covered in our{" "}
        <Link href="/guides/your-first-vape-kit">first vape kit guide</Link>. Almost
        every 10ml bottle sold specifically for a pod kit today is a nic salt, while
        freebase e-liquid has become more of a niche choice for larger tank devices.
      </p>

      <h2>How nic salts differ from freebase e-liquid</h2>
      <p>
        The clearest difference shows up at the higher end of the strength range.
        A 20mg freebase e-liquid would feel harsh to most people, which is why
        freebase bottles are usually sold at 3mg or 6mg. Nic salts are formulated to
        stay smooth at 10mg or 20mg, which is exactly the range most ex-smokers need
        to feel satisfied. We go into this in more detail, including the regulatory
        limits that apply in the UK, in our{" "}
        <Link href="/guides/nicotine-strength-explained">
          nicotine strength guide
        </Link>
        , but the short version is: nic salts let manufacturers offer strong
        nicotine without the harsh hit that used to put people off vaping.
      </p>

      <h2>So why would a beginner start at 5mg?</h2>
      <p>
        It sounds counterintuitive at first. If nic salts feel smooth even at
        20mg, why would anyone choose the lowest strength on the shelf? The answer
        is that &quot;smooth&quot; is about throat feel, not about how much nicotine you are
        actually taking in. A 20mg nic salt still delivers roughly four times as
        much nicotine per puff as a 5mg one. For someone who smoked lightly, vaped
        before at a lower strength, or is simply cautious about starting high, 5mg
        gives a genuinely gentler introduction without the guesswork of a strength
        that might feel too intense on day one.
      </p>
      <p>
        Most nic salt ranges are sold across the same handful of strengths, so a
        beginner is not limited to only the stronger options. As an example, if
        you are looking at where to buy a lower-strength bottle,{" "}
        <a
          href="https://localsupplies.co.uk/collections/elux-nic-salts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elux vape liquid 5mg
        </a>{" "}
        is a common lower-strength starting point stocked alongside the same
        range&apos;s 10mg and 20mg bottles, which makes it easy to step up later
        without switching brands or flavours if you decide you need more.
      </p>

      <h2>5mg vs 10mg vs 20mg: what actually changes</h2>
      <table>
        <thead>
          <tr>
            <th>Strength</th>
            <th>Roughly suits</th>
            <th>What to expect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5mg</td>
            <td>Light or occasional smokers, or anyone easing in cautiously</td>
            <td>Gentle, low risk of feeling overwhelmed, but may feel weak for a heavier ex-smoker</td>
          </tr>
          <tr>
            <td>10mg</td>
            <td>Moderate smokers, a common middle-ground choice</td>
            <td>Noticeably more satisfying per puff while still feeling smooth as a nic salt</td>
          </tr>
          <tr>
            <td>20mg</td>
            <td>Heavier smokers, the UK legal maximum</td>
            <td>Strongest available strength, usually paired with a low-powered MTL pod</td>
          </tr>
        </tbody>
      </table>
      <p>
        The bottle size and VG/PG ratio typically stay the same across the range,
        usually a 10ml bottle at a 50/50 PG/VG mix designed for small pod coils. It
        is really only the nicotine concentration that changes from one strength to
        the next, which is why trying a different strength in the same flavour is
        such a low-effort way to test what suits you.
      </p>

      <h2>The honest answer: it depends on you</h2>
      <p>
        There is no strength that is universally &quot;right&quot; for beginners, and we would
        be doing you a disservice by pretending otherwise. Nicotine needs vary a lot
        from person to person, and the strength that suits you mostly comes down to
        your own smoking or vaping history rather than anything about the e-liquid
        itself. Many vapers who smoked 15 to 20 cigarettes a day find 5mg leaves
        them still craving something, while many who smoked occasionally, or who
        have vaped before at a low strength, find 5mg is genuinely enough. Our{" "}
        <Link href="/guides/nicotine-strength-explained">
          nicotine strength guide
        </Link>{" "}
        has a fuller table matched to typical smoking habits if you want a more
        detailed starting estimate.
      </p>

      <h2>A practical way to try a lower strength first</h2>
      <p>
        Because 10ml bottles are inexpensive, usually somewhere around £2.49 each,
        there is little downside to buying a single 5mg bottle before committing to
        a larger stock of anything stronger. Use it for a few days and pay attention
        to how you feel:
      </p>
      <ul>
        <li>
          <strong>Feels about right:</strong> satisfied after a normal session,
          without reaching for the pod constantly between vapes.
        </li>
        <li>
          <strong>Feels too weak:</strong> you are still thinking about cigarettes,
          vaping far more often than feels normal, or never quite feel satisfied.
          That is a sign to step up to 10mg, and then 20mg only if 10mg still is not
          enough.
        </li>
      </ul>
      <p>
        Stepping up is easy and cheap since it just means buying the next bottle up
        in the same flavour and range. There is no need to guess your way straight
        to 20mg out of caution about running out of nicotine, nor any need to force
        yourself to stay on 5mg if it clearly is not cutting it. Most people find
        their settled strength within the first couple of weeks, and moving between
        5mg, 10mg and 20mg costs you nothing but the price of a new bottle.
      </p>
    </ArticleLayout>
  );
}
