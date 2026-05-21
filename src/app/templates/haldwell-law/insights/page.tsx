import Link from "next/link";
import { templateModule } from "@/templates/01-haldwell-law";

const insights = [
  {
    date: "May 12, 2026",
    category: "Estate planning",
    title: "When the operating agreement is the estate plan",
    summary:
      "For closely held businesses, the document that governs the company at the founder's desk is often the one that governs the family at the lawyer's desk.",
  },
  {
    date: "April 03, 2026",
    category: "Succession",
    title: "Three conversations to have before the deal letter arrives",
    summary:
      "Owner-led sales fail at the kitchen table more often than at the negotiating table. Here is the order we suggest.",
  },
  {
    date: "March 18, 2026",
    category: "Land use",
    title: "Conservation easements as a multi-generational tool",
    summary:
      "An easement is not a tax strategy. Treated as one, it tends to disappoint. Treated as stewardship, it tends to hold.",
  },
  {
    date: "February 02, 2026",
    category: "Fiduciary",
    title: "The trustee's first ninety days",
    summary:
      "A note for the cousin, the friend, or the small bank that has just been named to a role they did not particularly want.",
  },
];

export const metadata = {
  title: "Insights | Haldwell & Carr",
  description:
    "Field notes from a small firm in northern New England on the documents that decide the next decade.",
};

export default function InsightsPage() {
  const { theme } = templateModule;
  return (
    <>
      <section style={{ background: "var(--tpl-card)" }} className="border-b">
        <div
          className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
          style={{ borderColor: "var(--tpl-line)" }}
        >
          <p
            className="text-xs uppercase"
            style={{
              color: "var(--tpl-accent)",
              letterSpacing: "0.22em",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            Insights
          </p>
          <h1
            className="mt-6 max-w-3xl text-5xl leading-[1.05] md:text-7xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            Field notes from a small firm.
          </h1>
        </div>
      </section>
      <section style={{ background: "var(--tpl-bg)" }} className="border-b">
        <div
          className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-16"
          style={{ borderColor: "var(--tpl-line)" }}
        >
          <ul>
            {insights.map((p) => (
              <li
                key={p.title}
                className="grid gap-6 border-t py-10 md:grid-cols-12 md:gap-12"
                style={{ borderColor: "var(--tpl-line)" }}
              >
                <div className="md:col-span-3">
                  <p
                    className="text-xs uppercase"
                    style={{
                      color: "var(--tpl-muted)",
                      letterSpacing: "0.22em",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {p.date}
                  </p>
                  <p
                    className="mt-2 text-xs uppercase"
                    style={{
                      color: "var(--tpl-accent)",
                      letterSpacing: "0.22em",
                      fontFamily: "var(--tpl-font-body)",
                      fontWeight: 600,
                    }}
                  >
                    {p.category}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h2
                    className="text-2xl leading-snug md:text-3xl"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: theme.type.displayWeight,
                      letterSpacing: theme.type.displayTracking,
                    }}
                  >
                    <Link href="#" className="hover:opacity-70">
                      {p.title}
                    </Link>
                  </h2>
                  <p
                    className="mt-4 max-w-3xl text-base leading-relaxed"
                    style={{
                      color: "var(--tpl-muted)",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {p.summary}
                  </p>
                </div>
              </li>
            ))}
            <li className="border-t" style={{ borderColor: "var(--tpl-line)" }} aria-hidden="true" />
          </ul>
        </div>
      </section>
    </>
  );
}
