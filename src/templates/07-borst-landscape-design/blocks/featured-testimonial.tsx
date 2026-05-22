import { featuredTestimonial } from "../content";
import { BORST_CONTAINER } from "../borst-ui";

/** GardenView Home V1: white gap under hero, then work photo + quote overlay */
export function FeaturedTestimonial() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="pt-10 md:pt-14">
        <div className="relative h-[260px] sm:h-[300px] md:h-[340px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featuredTestimonial.image}
            alt="Reliable and meticulous landscape work"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,31,25,0.08) 0%, rgba(5,31,25,0.45) 50%, rgba(5,31,25,0.9) 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className={`absolute inset-x-0 bottom-0 flex items-end ${BORST_CONTAINER} pb-8 md:pb-10`}
          >
            <div className="flex w-full max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
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
                  className="text-xl leading-snug md:text-2xl"
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
      </div>
    </section>
  );
}
