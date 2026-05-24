import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/03-northwind-dental";

const people = [
  {
    name: "Dr Anna Park",
    role: "Dentist, co-founder",
    bio: "DDS, OHSU 2014. Comfort dentistry and pediatric care. Has the calmest voice in the operatory.",
    photo: "/mockups/northwind-dental/dentist-1.jpg",
  },
  {
    name: "Dr Marcus Webb",
    role: "Dentist, co-founder",
    bio: "DMD, Tufts 2012. Same-day crowns, Invisalign, cosmetic restoration. Won the office coffee taste test in 2024.",
    photo: "/mockups/northwind-dental/dentist-2.jpg",
  },
  {
    name: "Renee Calderon, RDH",
    role: "Hygienist",
    bio: "Six years at Northwind. Has cleaned more teeth than she can count and still gets thank-you notes every week.",
    photo: "/mockups/northwind-dental/hygienist.jpg",
  },
  {
    name: "Sam Iwata",
    role: "Practice manager",
    bio: "Runs the schedule. Answers the phone. Will probably remember your kid's name before you remember his.",
    photo: "/mockups/northwind-dental/smile.jpg",
  },
];

export const metadata = {
  title: "Our team | Northwind Dental",
  description: "Two dentists, one hygienist, one practice manager. Together they keep the schedule honest.",
};

export default function TeamPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section style={{ background: "var(--tpl-bg)" }}>
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-8 md:px-8 md:pt-24 md:pb-12">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-accent)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            Our team
          </p>
          <h1
            className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            Four people. One schedule. Run on time.
          </h1>
        </div>
      </section>
      <section style={{ background: "var(--tpl-card)" }}>
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {people.map((p) => (
              <li
                key={p.name}
                className="overflow-hidden"
                style={{
                  background: "var(--tpl-bg)",
                  border: `1px solid var(--tpl-line)`,
                  borderRadius: `var(--tpl-radius)`,
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="block h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2
                    className="text-xl leading-snug"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {p.name}
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
                    {p.role}
                  </p>
                  <p
                    className="mt-4 text-sm leading-relaxed"
                    style={{ color: "var(--tpl-muted)" }}
                  >
                    {p.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
