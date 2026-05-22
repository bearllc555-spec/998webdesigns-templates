import { featuredTestimonial } from "../content";

export function FeaturedTestimonial() {
  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-3 flex md:justify-center">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: 999, width: 96, height: 96 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredTestimonial.avatar}
                alt={featuredTestimonial.name}
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-9">
            <p
              className="text-2xl leading-snug md:text-3xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: 600,
                letterSpacing: "-0.012em",
              }}
            >
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </p>
            <p
              className="mt-4 text-sm"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              <span style={{ color: "var(--tpl-ink)", fontWeight: 600 }}>{featuredTestimonial.name}</span>
              {" - "}
              {featuredTestimonial.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
