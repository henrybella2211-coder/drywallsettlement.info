import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("your-first-vape-kit")!;

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
        Buying your first vape can feel more complicated than it needs to be. Shop
        shelves are full of unfamiliar words and dozens of devices that all look
        slightly different. This guide strips that back to what actually matters: what
        a pod kit is, what you need to buy alongside it, and how to get it working on
        day one without wasting money on the wrong thing.
      </p>

      <h2>What is a pod kit?</h2>
      <p>
        A pod kit is a small, rechargeable vaping device made up of two parts: a
        battery section and a pod. The pod is a small, usually clear or coloured
        cartridge that you fill with e-liquid, and it clips or screws onto the battery.
        Inside the pod sits a coil, a tiny heating element that turns e-liquid into the
        vapour you inhale.
      </p>
      <p>
        Most beginner pod kits are designed to be simple. You charge them, fill the
        pod, and press a button (or just inhale, on some devices) to use them. There
        are no settings to adjust and nothing complicated to learn, which is exactly
        why they suit someone buying their first vape.
      </p>

      <h2>What you actually need to buy</h2>
      <p>
        Walking into a vape shop or browsing online for the first time, it helps to
        know you only need three things:
      </p>
      <ul>
        <li>
          <strong>A pod kit device.</strong> Look for one described as a &quot;beginner&quot;
          or &quot;starter&quot; kit rather than a hobbyist or sub-ohm device.
        </li>
        <li>
          <strong>Spare coils.</strong> Coils wear out with regular use, usually after
          one to three weeks depending on how much you vape. Most kits come with one
          coil already fitted, so buy at least one or two spares at the same time.
        </li>
        <li>
          <strong>E-liquid.</strong> This is the flavoured liquid, usually containing
          nicotine, that the coil heats into vapour. UK e-liquid is regulated and comes
          in bottles no larger than 10ml when it contains nicotine.
        </li>
      </ul>
      <p>
        A member of staff in a vape shop will usually match a device to the coils and
        e-liquid it needs, since not every pod fits every bottle of e-liquid in the
        same way. If you are buying online, check the product listing states which
        coils are compatible with your specific kit.
      </p>

      <h2>Nic salts vs freebase e-liquid</h2>
      <p>
        You will see two types of nicotine used in e-liquid: nicotine salts (usually
        shortened to &quot;nic salts&quot;) and freebase nicotine. Both are legal, regulated
        forms of nicotine, but they behave differently in the body and usually come in
        different strengths.
      </p>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Feel on the throat</th>
            <th>Typical strengths</th>
            <th>Best suited to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nic salts</td>
            <td>Smoother, even at higher strengths</td>
            <td>10mg and 20mg</td>
            <td>Simple pod kits, beginners, heavier ex-smokers</td>
          </tr>
          <tr>
            <td>Freebase</td>
            <td>Stronger hit on the throat at higher strengths</td>
            <td>3mg and 6mg (occasionally up to 20mg)</td>
            <td>Lower-strength vaping, more experienced users</td>
          </tr>
        </tbody>
      </table>
      <p>
        As a simple rule, most beginner pod kits are designed around nic salt
        e-liquid, because it delivers nicotine quickly and feels smooth even at 20mg,
        the legal maximum strength for UK e-liquid. Our{" "}
        <Link href="/guides/nicotine-strength-explained">
          nicotine strength guide
        </Link>{" "}
        goes into far more detail on picking the right mg for you.
      </p>

      <h2>What to budget for</h2>
      <p>
        Prices vary between retailers, but as a general guide:
      </p>
      <ul>
        <li>A beginner pod kit typically costs <strong>£15 to £35</strong>.</li>
        <li>A pack of two or three replacement coils is usually <strong>£8 to £12</strong>.</li>
        <li>A 10ml bottle of nic salt e-liquid is typically <strong>£3.50 to £5.50</strong>.</li>
      </ul>
      <p>
        In our view, it is worth buying two bottles of e-liquid in different flavours
        when you start, since taste preference is hard to predict before you have
        actually tried vaping.
      </p>

      <h2>Charging and filling your kit for the first time</h2>
      <p>
        Most pod kits use a USB-C cable, though some cheaper devices still use micro
        USB. Before you use a new device, it is worth giving it a full charge, which
        usually takes 45 minutes to an hour. A light on the device, often at the
        charging port, will normally change colour or turn off once charging is
        complete.
      </p>
      <p>To fill the pod for the first time:</p>
      <ol>
        <li>Remove the pod from the battery section.</li>
        <li>
          Find the fill port, usually a small rubber bung on the side or bottom of the
          pod.
        </li>
        <li>
          Squeeze e-liquid slowly into the fill port until it is nearly full, avoiding
          the central tube if the pod has one.
        </li>
        <li>Replace the bung and leave the pod to sit for five minutes.</li>
        <li>
          This short wait lets the coil absorb e-liquid fully, which helps prevent a
          burnt taste on your first few puffs.
        </li>
      </ol>

      <h2>Common day-one mistakes</h2>
      <p>
        A handful of small mistakes account for most of the bad first impressions new
        vapers get, and all of them are easy to avoid:
      </p>
      <ul>
        <li>
          <strong>Vaping immediately after filling.</strong> Give a new coil five
          minutes to soak up e-liquid before your first puff.
        </li>
        <li>
          <strong>Drawing too hard, too fast.</strong> A gentler, slower draw than you
          might expect works better with most beginner pod kits, particularly MTL
          devices covered in our{" "}
          <Link href="/guides/mtl-vs-dtl-vaping">MTL vs DTL guide</Link>.
        </li>
        <li>
          <strong>Choosing a nicotine strength that is too low.</strong> Many former
          smokers give up on vaping in the first week because the strength felt too
          weak, not because the device was faulty.
        </li>
        <li>
          <strong>Leaving the pod empty for long periods.</strong> A coil left dry, even
          briefly, can burn out and produce an unpleasant, scorched taste.
        </li>
        <li>
          <strong>Overtightening or forcing the pod.</strong> Pods are designed to
          click or twist into place gently. Forcing a pod that does not seem to fit
          usually means it is the wrong one for that device.
        </li>
      </ul>
      <p>
        Getting the first day right mostly comes down to patience: charge fully, fill
        properly, wait for the coil to soak, and draw gently. From there, most people
        find a beginner pod kit is genuinely simple to live with day to day.
      </p>
    </ArticleLayout>
  );
}
