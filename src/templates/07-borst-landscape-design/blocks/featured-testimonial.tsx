import { featuredTestimonial } from "../content";
import { BORST_CONTAINER } from "../borst-ui";

/** GardenView: quote under hero without a second full-width photo */
export function FeaturedTestimonial() {
  return (
    <section
      className="border-b"
      style={{ background: "var(--tpl-bg)", borderColor: "var(--tpl-line)" }}
    >
      <div className={`${BORST_CONTAINER} py-10 md:py-12`}>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
          <div
            className="relative shrink-0 overflow-hidden"
            style={{ borderRadius: 999, width: 72, height: 72 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featuredTestimonial.avatar}
              alt={featuredTestimonial.name}
              className="block h-full w-full object-cover"
            />
          </div>
          <div>
            <p
              className="text-xl leading-snug md:text-2xl"
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
              className="mt-3 text-sm"
              style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
            >
              <span style={{ color: "var(--tpl-ink)", fontWeight: 700 }}>
                {featuredTestimonial.name}
              </span>
              {" — "}
              {featuredTestimonial.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
