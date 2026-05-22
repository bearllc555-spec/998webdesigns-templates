import { featuredTestimonial } from "../content";
import { BORST_CONTAINER } from "../borst-ui";

/** GardenView Home V1: full-bleed band directly under hero */
export function FeaturedTestimonial() {
  return (
    <section className="relative">
      <div className="relative h-[240px] sm:h-[280px] md:h-[300px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={featuredTestimonial.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,31,25,0.1) 0%, rgba(5,31,25,0.5) 55%, rgba(5,31,25,0.9) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 flex items-end ${BORST_CONTAINER} pb-8 pt-12 md:pb-10`}
        >
          <div className="flex w-full max-w-3xl flex-col gap-5 sm:flex-row sm:items-center">
            <div
              className="relative shrink-0 overflow-hidden"
              style={{ borderRadius: 999, width: 80, height: 80 }}
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
                className="text-xl leading-snug md:text-2xl lg:text-[1.75rem]"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: 600,
                  letterSpacing: "-0.012em",
                }}
              >
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </p>
              <p
                className="mt-3 text-sm md:text-base"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                <span style={{ fontWeight: 700 }}>{featuredTestimonial.name}</span>
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--tpl-font-body)" }}
              >
                {featuredTestimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
