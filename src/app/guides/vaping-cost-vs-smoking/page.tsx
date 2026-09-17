import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("vaping-cost-vs-smoking")!;

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
        &quot;Vaping is cheaper than smoking&quot; gets said a lot, but it is rarely
        explained in actual numbers. This guide sets out roughly what UK smokers
        typically spend, roughly what starting and running a vape kit costs, and a
        worked example so you can judge it for yourself rather than take a slogan on
        trust. None of the figures below are exact, since prices vary by brand,
        retailer and how much you actually smoke or vape, but the ranges give a
        realistic picture.
      </p>

      <h2>What smoking typically costs</h2>
      <p>
        Cigarette prices in the UK have climbed steadily due to regular tobacco duty
        increases, and a standard pack of 20 now commonly costs somewhere in the
        region of <strong>£13 to £18</strong>, depending on the brand and where you
        buy it. Budget brands sit towards the bottom of that range, premium brands
        towards the top.
      </p>
      <p>
        Roughly translated into everyday spend, that works out something like this,
        though your own habits may differ a lot:
      </p>
      <table>
        <thead>
          <tr>
            <th>Roughly how much you smoke</th>
            <th>Rough weekly spend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Around 10 a day</td>
            <td>Roughly £45 to £65</td>
          </tr>
          <tr>
            <td>Around 20 a day (a pack a day)</td>
            <td>Roughly £90 to £125</td>
          </tr>
        </tbody>
      </table>
      <p>
        Broken down by day rather than week, a 10-a-day habit works out at roughly
        £6.50 to £9 a day, and a 20-a-day habit at roughly £13 to £18 a day, based on
        the same pack price range. Those figures assume you smoke a full pack&apos;s
        worth relative to your daily count, which will not match everyone exactly,
        but it gives a rough everyday sense of the spend rather than only a weekly
        total that can feel more abstract.
      </p>
      <p>
        Treat that table as a rough steer, not an invoice. It does not account for
        roll-your-own tobacco, which is generally cheaper per cigarette, or for
        duty-free or cross-border purchases. Tobacco duty rates are set by HMRC and
        reviewed at each Budget, so prices tend to rise over time rather than stay
        still.
      </p>

      <h2>What starting to vape typically costs</h2>
      <p>
        Getting set up with a beginner pod kit is a one-off cost, followed by smaller
        ongoing costs. As covered in our{" "}
        <Link href="/guides/your-first-vape-kit">first vape kit guide</Link>, a
        sensible beginner setup typically breaks down like this:
      </p>
      <ul>
        <li>
          <strong>A beginner pod kit:</strong> roughly £15 to £35, as a one-off
          purchase.
        </li>
        <li>
          <strong>Replacement coils:</strong> a pack of two or three usually costs
          around £8 to £12, and most people replace a coil every one to three weeks
          depending on how much they vape.
        </li>
        <li>
          <strong>E-liquid:</strong> a 10ml bottle of nic salt e-liquid typically costs
          around £3.50 to £5.50, and how many bottles you get through in a week
          depends heavily on how much you vape and your device&apos;s draw style,
          which our{" "}
          <Link href="/guides/mtl-vs-dtl-vaping">MTL vs DTL guide</Link> covers in
          more detail.
        </li>
      </ul>
      <p>
        One cost worth flagging ahead of time: a new Vaping Products Duty comes into
        effect in the UK on 1 October 2026, charged at a flat rate of £2.20 per 10ml
        of vaping liquid, whether or not it contains nicotine, with VAT applied on
        top. That will push e-liquid prices up from that date, and it is worth
        checking current prices rather than relying on older figures once the duty is
        in place. HMRC has published{" "}
        <a
          href="https://www.gov.uk/guidance/how-to-pay-vaping-products-duty"
          target="_blank"
          rel="noopener noreferrer"
        >
          guidance on Vaping Products Duty
        </a>{" "}
        with the detail.
      </p>

      <h2>A worked example</h2>
      <p>
        Here is one honest, rough comparison rather than a single invented number.
        Say someone previously smoked around 15 cigarettes a day, spending roughly
        £75 to £95 a week on packs of 20. Switching to a simple MTL pod kit, using
        maybe three 10ml bottles of 10mg or 20mg nic salt e-liquid a week and one
        pack of coils a fortnight, could look something like this after the initial
        kit purchase:
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Rough weekly cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Smoking roughly 15 a day</td>
            <td>Roughly £75 to £95</td>
          </tr>
          <tr>
            <td>Vaping (e-liquid + coils, after buying the kit)</td>
            <td>Roughly £15 to £22</td>
          </tr>
        </tbody>
      </table>
      <p>
        On numbers like that, the pod kit itself is typically paid off within the
        first week or two, and the ongoing running cost is noticeably lower. That
        said, this is one illustrative example, not a promise of what you personally
        will spend. Heavier vaping, a habit of replacing devices often, or buying
        premium e-liquid can close the gap considerably.
      </p>

      <h2>Why the real difference varies so much</h2>
      <p>
        A few things can make actual vaping costs higher or lower than the example
        above:
      </p>
      <ul>
        <li>
          <strong>How much you vape.</strong> Someone using a DTL device with looser
          airflow tends to get through e-liquid noticeably faster than someone on a
          tight MTL draw.
        </li>
        <li>
          <strong>Coil habits.</strong> Changing coils earlier than needed, out of
          habit rather than necessity, adds unnecessary cost.
        </li>
        <li>
          <strong>Device choice.</strong> Cheaper kits cost less upfront but may need
          replacing sooner, while a slightly pricier kit can sometimes last longer.
        </li>
        <li>
          <strong>E-liquid brand.</strong> Prices for 10ml bottles vary across
          retailers and brands, and shopping around can make a real difference over a
          year.
        </li>
      </ul>

      <h2>A note on quitting altogether</h2>
      <p>
        This guide is about cost, not health advice, and it is not making any promise
        that vaping will help anyone quit nicotine altogether. According to the NHS,
        vaping is considered substantially less harmful than smoking and many smokers
        use it as a step to switch away from cigarettes, but individual results vary
        and vaping is not risk-free. If you want free, professional support with
        quitting or switching, the NHS Better Health: Quit Smoking service and NHS
        Smokefree offer local stop smoking services across the UK at{" "}
        <a
          href="https://www.nhs.uk/better-health/quit-smoking/"
          target="_blank"
          rel="noopener noreferrer"
        >
          nhs.uk/better-health/quit-smoking
        </a>
        , as a support resource rather than a guaranteed outcome.
      </p>
      <p>
        In plain terms: for most people who smoke a meaningful amount daily, vaping
        works out cheaper week to week once the initial kit is paid for, often
        considerably so. But the honest answer to &quot;how much will I save&quot; is
        that it depends on your own habits, so treat any of the figures here as a
        starting point for your own rough sums rather than a fixed number.
      </p>
    </ArticleLayout>
  );
}
