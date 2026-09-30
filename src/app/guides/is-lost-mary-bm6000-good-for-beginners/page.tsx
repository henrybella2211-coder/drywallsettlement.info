import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("is-lost-mary-bm6000-good-for-beginners")!;

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
        The Lost Mary BM6000 is one of the more visible rechargeable pod kits on UK
        shop counters at the moment, largely because it looks and feels a lot like
        the disposables it replaced. If you have never vaped before and are trying
        to work out whether it is a sensible way to start, here is a plain-English
        look at what it actually is, how little there genuinely is to learn, and how
        it stacks up against a standard beginner pod kit.
      </p>

      <h2>What the Lost Mary BM6000 actually is</h2>
      <p>
        Despite the disposable-style shape, the BM6000 is a rechargeable pod system,
        not a single-use device. It pairs a small battery unit with separate,
        prefilled pods that slot into the top. Each pod has its own mesh coil built
        in, so when a pod runs out you swap in a new one rather than refilling
        e-liquid yourself or fitting a coil by hand. Online it is usually listed as
        the{" "}
        <a
          href="https://localsupplies.co.uk/collections/lost-mary-bm6000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lost Mary BM6000
        </a>{" "}
        kit, sold with nicotine at the UK&apos;s regulatory maximum of 20mg/ml across
        its flavour range, which spans roughly 48 options from ice and menthol
        flavours such as Banana Ice and Fresh Mint, through fruit flavours like
        Blueberry and Triple Berry, to cola and soft-drink styles including Cola and
        Pink Lemonade.
      </p>

      <h2>Why no buttons matters for a first-timer</h2>
      <p>
        Like most disposables, the BM6000 is draw-activated: you put it to your lips
        and inhale, and it fires automatically. There is no power button to find, no
        mode to select, and nothing to accidentally lock or unlock in your pocket.
        For someone who has never used a vape before, that single design choice
        removes most of the early confusion people run into with more feature-heavy
        devices, where a mislabelled button press can leave you wondering why
        nothing is happening. You cannot really use the BM6000 wrong, which is worth
        a lot in the first few days.
      </p>
      <p>
        The trade-off is the same one you get with any draw-activated, sealed pod
        system: there is nothing to adjust. No airflow ring, no wattage setting, and
        no way to fine-tune the draw beyond choosing a different pod. For a
        beginner, that is usually a benefit rather than a limitation, since there is
        nothing to get wrong. For someone who later wants more control, it can start
        to feel restrictive, which is worth knowing even if it is not a day-one
        concern.
      </p>

      <h2>Charging basics: what USB-C actually means day to day</h2>
      <p>
        The BM6000 charges over USB-C, the same reversible connector used by most
        recent phones and a lot of other small electronics, which makes it more
        likely you already own a compatible cable. The retailer listing states a
        full charge takes roughly 45 to 60 minutes, and does not include a cable in
        the box, so it is worth having a spare USB-C cable to hand before your
        battery runs flat rather than after. Beyond plugging it in and waiting, there
        is nothing else to manage. There is no separate charging dock, and no need
        to remove a pod before charging.
      </p>

      <h2>How it compares with a standard beginner pod kit</h2>
      <p>
        A typical beginner pod kit, the kind we point new vapers towards in our{" "}
        <Link href="/guides/your-first-vape-kit">first vape kit guide</Link>, keeps
        the device, the coil and the e-liquid as three separate things you manage
        yourself. The BM6000 collapses that into one replaceable, prefilled pod.
      </p>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Lost Mary BM6000</th>
            <th>Standard refillable pod kit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Day-to-day steps</td>
            <td>Charge, clip in a prefilled pod, draw to vape</td>
            <td>Charge, refill pod with e-liquid, replace coil every 1 to 3 weeks</td>
          </tr>
          <tr>
            <td>Activation</td>
            <td>Draw-activated, no buttons</td>
            <td>Usually button or draw-activated, varies by model</td>
          </tr>
          <tr>
            <td>What you buy to keep going</td>
            <td>Replacement pods only (coil included)</td>
            <td>E-liquid bottles and spare coils separately</td>
          </tr>
          <tr>
            <td>Fiddliness</td>
            <td>Very low</td>
            <td>Low, but involves some manual filling</td>
          </tr>
        </tbody>
      </table>
      <p>
        In other words, the BM6000 is aimed at people who want the ease of a
        disposable without binning the whole device each time. It is a similar
        trade-off to the one we cover in our look at the{" "}
        <Link href="/guides/is-al-fakher-hypermax-prime-50k-good-for-beginners">
          Al Fakher HyperMax Prime 50K
        </Link>
        , another snap-pod style kit that removes filling and coil-swapping in
        exchange for a higher running cost.
      </p>

      <h2>What it costs to run</h2>
      <p>
        Kits are typically priced around £7.49, and replacement pods around £4.99
        each, though both figures move between retailers and promotions, so treat
        them as a rough guide rather than a fixed price. Because each pod already
        includes its coil, there is nothing extra to budget for beyond buying the
        next pod when the current one runs dry. That convenience generally costs
        more per ml than filling a standard pod kit from a 10ml bottle yourself, in
        the same way it does with other prefilled snap-pod systems.
      </p>

      <h2>About that &quot;6000 puffs&quot; figure</h2>
      <p>
        The number in the name refers to the manufacturer&apos;s estimate of up to
        6,000 puffs per pod, not the device as a whole and not an independently
        verified figure. It is also a different kind of number to the puff count
        printed on a disposable, which covers the entire device rather than a single
        replaceable pod, so the two are not directly comparable even when they look
        similar on a box. Your own total will vary with puff length and how often
        you vape.
      </p>
      <p>
        It is worth knowing why kits built this way exist at all. Since 1 June 2025,
        single-use disposable vapes can no longer be legally sold in the UK. Because
        the BM6000 is rechargeable with a replaceable pod rather than single-use, it
        falls outside that ban, which is a large part of why disposable-shaped kits
        like this one remain common on UK shop shelves.
      </p>

      <h2>Is it a good first kit, honestly?</h2>
      <p>
        For a genuine beginner, the honest answer is that it works well if
        simplicity is what you value most. There is barely anything to learn: charge
        it, clip in a pod, and draw. That is a lower bar than almost any refillable
        kit can offer, and the lack of buttons in particular makes it hard to use
        wrong on day one. Choosing a sensible{" "}
        <Link href="/guides/nicotine-strength-explained">nicotine strength</Link> will
        still matter more to how comfortable your first weeks feel than which kit
        format you pick.
      </p>
      <p>
        Against that, a standard basic pod kit and a couple of 10ml bottles of
        e-liquid will usually cost less to run over your first month, for the price
        of a small amount of manual filling and occasional coil changes. Neither
        choice is wrong. If the idea of squeezing e-liquid into a pod puts you off
        entirely, the BM6000&apos;s prefilled, no-buttons design removes that step
        completely. If you do not mind a little hands-on setup in exchange for lower
        running costs, a standard starter kit is worth trying first.
      </p>
    </ArticleLayout>
  );
}
