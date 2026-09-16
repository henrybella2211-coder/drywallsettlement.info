import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("mtl-vs-dtl-vaping")!;

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
        Two letters you will run into almost immediately when buying a vape are MTL
        and DTL. They describe how you draw vapour into your lungs, and the difference
        between them affects which device suits you, which coil it needs, and even
        which e-liquid works best. Neither is right or wrong. They are simply
        different ways of vaping.
      </p>

      <h2>What does MTL mean?</h2>
      <p>
        MTL stands for mouth-to-lung. You draw vapour into your mouth first, hold it
        there for a moment, then breathe it into your lungs, in two separate steps.
        This is the same basic motion most people use when smoking a cigarette, which
        is why so many ex-smokers find it the more natural starting point.
      </p>
      <p>
        MTL devices, including most beginner pod kits, are built around a tighter
        draw. Air is restricted, similar to drawing on a straw, and the coils used
        inside them are higher in resistance, which means they use less power and
        suit smaller, simpler devices.
      </p>

      <h2>What does DTL mean?</h2>
      <p>
        DTL stands for direct-to-lung. Instead of two steps, you draw vapour straight
        into your lungs in one motion, closer to how you might take a deep breath.
        This produces noticeably more vapour and a looser, airier draw.
      </p>
      <p>
        DTL devices need lower-resistance coils that can handle higher power, and they
        typically use larger tanks with an adjustable airflow control. Because they
        produce more vapour per puff, they also tend to use e-liquid faster.
      </p>

      <h2>Which one should a beginner choose?</h2>
      <p>
        In our experience, most people switching from smoking find MTL easier to
        adjust to, largely because the drawing motion already feels familiar. It also
        pairs naturally with the higher nicotine strengths, such as 10mg or 20mg nic
        salts, that many ex-smokers rely on in the first few weeks. Our{" "}
        <Link href="/guides/your-first-vape-kit">first vape kit guide</Link> covers
        exactly this kind of simple MTL pod kit.
      </p>
      <p>
        That said, this is guidance rather than a strict rule. Some new vapers,
        particularly those who found cigarettes harsh on the throat, prefer the softer,
        airier feel of DTL vaping from the start. If you are unsure, an MTL pod kit is
        the lower-risk, lower-cost way to try vaping, and you can always try a DTL
        device later once you know what you enjoy.
      </p>

      <h2>MTL vs DTL at a glance</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>MTL (mouth-to-lung)</th>
            <th>DTL (direct-to-lung)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Draw feel</td>
            <td>Tight, like drawing on a straw</td>
            <td>Loose and airy, like a deep breath</td>
          </tr>
          <tr>
            <td>Vapour produced</td>
            <td>Lower</td>
            <td>Higher</td>
          </tr>
          <tr>
            <td>Typical coil resistance</td>
            <td>Above 1.0 ohm</td>
            <td>Below 1.0 ohm</td>
          </tr>
          <tr>
            <td>Common nicotine strengths</td>
            <td>10mg and 20mg nic salts</td>
            <td>3mg and 6mg freebase</td>
          </tr>
          <tr>
            <td>Typical device type</td>
            <td>Simple pod kit</td>
            <td>Larger tank or sub-ohm kit</td>
          </tr>
          <tr>
            <td>E-liquid use</td>
            <td>Slower</td>
            <td>Faster</td>
          </tr>
        </tbody>
      </table>

      <h2>How your choice affects coils and e-liquid</h2>
      <p>
        The style you choose is not just about comfort. It determines almost
        everything else about your setup:
      </p>
      <ul>
        <li>
          <strong>Coil resistance.</strong> MTL coils are usually rated above 1.0 ohm,
          which restricts airflow and power. DTL coils sit below 1.0 ohm, sometimes
          well below, and are described as sub-ohm coils.
        </li>
        <li>
          <strong>Nicotine strength.</strong> Because DTL vaping produces more vapour
          per puff, high nicotine strengths can feel harsh. That is why DTL vapers
          typically use lower strengths, often 3mg or 6mg freebase e-liquid, while MTL
          vapers can comfortably use stronger nic salts. See our{" "}
          <Link href="/guides/nicotine-strength-explained">
            nicotine strength guide
          </Link>{" "}
          for a fuller breakdown.
        </li>
        <li>
          <strong>Battery and running costs.</strong> DTL devices draw more power and
          use more e-liquid, so they generally cost a little more to run day to day.
        </li>
      </ul>

      <h2>How to spot which style a device uses before you buy</h2>
      <p>
        Product listings do not always say &quot;MTL&quot; or &quot;DTL&quot; in plain letters, but a
        few clues make it easy to work out:
      </p>
      <ul>
        <li>
          <strong>Size and shape.</strong> Small, slim, pocket-sized pod kits are almost
          always MTL. Larger box-shaped devices with a visible tank are usually built
          for DTL.
        </li>
        <li>
          <strong>Airflow control.</strong> An adjustable airflow ring or slider,
          letting you open or close air holes, points strongly towards a DTL device.
          Simple MTL pod kits rarely have this, since the airflow is fixed and already
          tight.
        </li>
        <li>
          <strong>Coil resistance printed on the coil or box.</strong> Anything marked
          1.0 ohm or higher is built for MTL. Anything marked below 1.0 ohm, such as
          0.6 ohm or 0.4 ohm, is a DTL, sub-ohm coil.
        </li>
        <li>
          <strong>How it is marketed.</strong> Words like &quot;beginner&quot;, &quot;starter&quot; or
          &quot;discreet&quot; usually signal MTL. Words like &quot;cloud&quot;, &quot;sub-ohm&quot; or
          &quot;performance&quot; usually signal DTL.
        </li>
      </ul>

      <h2>Can you switch between the two styles?</h2>
      <p>
        Yes, and it is common to do so as your preferences settle. Some pod kits are
        designed with swappable coils that let you move between a tighter MTL coil and
        a looser DTL-style coil in the same device, which is a useful way to try both
        without buying two separate kits. Just remember that changing coil type
        usually means changing e-liquid strength too, since a strong nic salt that
        feels fine on a tight MTL draw can feel unpleasantly harsh through a looser DTL
        coil.
      </p>

      <h2>A simple way to decide</h2>
      <p>
        If you smoked regularly before switching, start with an MTL pod kit and a nic
        salt e-liquid around 10mg or 20mg, depending on how much you used to smoke.
        Give it a fortnight. If you find yourself wanting bigger clouds or a looser
        draw once you are comfortable with the basics, that is a reasonable time to
        look at DTL devices with lower-strength e-liquid.
      </p>
      <p>
        There is no prize for jumping straight to a more advanced setup. Plenty of
        long-term vapers stay on MTL pod kits indefinitely simply because it suits
        them, and switching later, if you want to, is straightforward and inexpensive.
      </p>
    </ArticleLayout>
  );
}
