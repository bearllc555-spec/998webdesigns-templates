import { featuredTestimonial } from "../content";
import { BORST_CONTAINER } from "../borst-ui";

export function FeaturedTestimonial() {
  return (
    <section className="bg-[var(--tpl-bg)] py-10 md:py-14">
      <div className={`${BORST_CONTAINER}`}>
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: 24, minHeight: 280 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featuredTestimonial.image}
            alt=""
            className="block h-[280px] w-full object-cover md:h-[320px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,31,25,0.05) 0%, rgba(5,31,25,0.35) 45%, rgba(5,31,25,0.88) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 md:px-8 md:pb-8">
            <div className="flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-end sm:gap-5">
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
                    color: "#FFFFFF",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: 600,
                    letterSpacing: "-0.012em",
                  }}
                >
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>
                <p
                  className="mt-3 text-sm"
                  style={{
                    color: "rgba(255,255,255,0.88)",
                    fontFamily: "var(--tpl-font-body)",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{featuredTestimonial.name}</span>
                  {" — "}
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
