import { theme } from "../theme";

const attorneys = [
  {
    name: "Charles W. Haldwell",
    role: "Founding partner",
    bar: "NH, ME",
    photo: "/mockups/haldwell-law/attorney-1.jpg",
    bio: "Estate planning, succession, and the kind of trust litigation that keeps a family at the same table.",
  },
  {
    name: "Helena M. Carr",
    role: "Managing partner",
    bar: "NH, MA",
    photo: "/mockups/haldwell-law/attorney-2.jpg",
    bio: "Mergers and owner-led sales for closely held New England businesses since 2001.",
  },
  {
    name: "Margaret L. Eddy",
    role: "Partner",
    bar: "NH, ME, MA",
    photo: "/mockups/haldwell-law/attorney-3.jpg",
    bio: "Real estate, conservation easements, and land use across northern New England.",
  },
  {
    name: "Andrew R. Lin",
    role: "Partner",
    bar: "NH",
    photo: "/mockups/haldwell-law/attorney-4.jpg",
    bio: "Business counsel for founders, plus the routine governance that keeps a company answerable to itself.",
  },
];

export function SignatureBlock() {
  return (
    <section style={{ background: "var(--tpl-card)" }} className="border-b">
      <div
        className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
        style={{ borderColor: "var(--tpl-line)" }}
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2
            className="text-3xl leading-tight md:text-5xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            The bench
          </h2>
          <p
            className="text-xs uppercase"
            style={{
              color: "var(--tpl-muted)",
              letterSpacing: "0.22em",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            Four partners
          </p>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {attorneys.map((a) => (
            <article
              key={a.name}
              className="grid grid-cols-[auto_1fr] gap-6 border-t pt-8 md:gap-10"
              style={{ borderColor: "var(--tpl-line)" }}
            >
              <div className="w-28 md:w-40">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.photo}
                    alt={a.name}
                    loading="lazy"
                    decoding="async"
                    className="block h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3
                  className="text-xl md:text-2xl"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: theme.type.displayWeight,
                    letterSpacing: theme.type.displayTracking,
                  }}
                >
                  {a.name}
                </h3>
                <p
                  className="mt-1 text-xs uppercase"
                  style={{
                    color: "var(--tpl-accent)",
                    letterSpacing: "0.22em",
                    fontFamily: "var(--tpl-font-body)",
                    fontWeight: 600,
                  }}
                >
                  {a.role} &middot; {a.bar}
                </p>
                <p
                  className="mt-4 text-base leading-relaxed"
                  style={{
                    color: "var(--tpl-muted)",
                    fontFamily: "var(--tpl-font-body)",
                  }}
                >
                  {a.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
