import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/02-maple-street-bakery";

const bakers = [
  {
    name: "Hannah Reilly",
    role: "Owner and head baker",
    photo: "/templates/maple-street-bakery/baker-1.jpg",
    bio: "Started Maple Street out of a borrowed kitchen in 2014. Mixes the levain by 9pm most nights and has not regretted it.",
  },
  {
    name: "Marcus Diaz",
    role: "Pastry baker",
    photo: "/templates/maple-street-bakery/baker-2.jpg",
    bio: "Came over from a bakery in Montreal in 2019. Responsible for the laminated dough most mornings, plus the morning bun cardamom level.",
  },
  {
    name: "Jess Sutton",
    role: "Counter and coffee",
    photo: "/templates/maple-street-bakery/baker-3.jpg",
    bio: "Pulls espresso, plates pastry, remembers your usual after the second visit. The chair by the window is unofficially hers.",
  },
];

export const metadata = {
  title: "Our bakers | Maple Street Bakery",
  description: "Three people, one small kitchen, the same starter since 2014.",
};

export default function OurBakersPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section
        className="border-b"
        style={{ background: "var(--tpl-bg)", borderColor: "var(--tpl-line)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-accent)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            The kitchen
          </p>
          <h1
            className="mt-5 text-5xl leading-tight md:text-7xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
              fontStyle: "italic",
            }}
          >
            Three people. One small kitchen.
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{
              color: "var(--tpl-muted)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            We work close. The bench is six feet long. You can hear the espresso machine from the oven.
          </p>
        </div>
      </section>
      <section style={{ background: "var(--tpl-card)" }} className="border-b" >
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {bakers.map((b) => (
              <article key={b.name}>
                <div
                  className="relative overflow-hidden"
                  style={{ borderRadius: `var(--tpl-radius)`, aspectRatio: "4 / 5" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.photo}
                    alt={b.name}
                    loading="lazy"
                    decoding="async"
                    className="block h-full w-full object-cover"
                  />
                </div>
                <h2
                  className="mt-6 text-2xl leading-snug"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: theme.type.displayWeight,
                  }}
                >
                  {b.name}
                </h2>
                <p
                  className="mt-1 text-xs"
                  style={{
                    color: "var(--tpl-accent)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontFamily: "var(--tpl-font-body)",
                    fontWeight: 600,
                  }}
                >
                  {b.role}
                </p>
                <p
                  className="mt-4 text-base leading-relaxed"
                  style={{
                    color: "var(--tpl-muted)",
                    fontFamily: "var(--tpl-font-body)",
                  }}
                >
                  {b.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
