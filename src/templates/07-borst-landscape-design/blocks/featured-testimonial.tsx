import { featuredTestimonial } from "../content";
import { BORST_CONTAINER } from "../borst-ui";

export function FeaturedTestimonial() {
  return (
    <section className="relative min-h-[220px] md:min-h-[260px]">
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
            "linear-gradient(90deg, rgba(5,31,25,0.78) 0%, rgba(5,31,25,0.4) 50%, rgba(5,31,25,0.2) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className={`relative flex min-h-[220px] items-center py-8 md:min-h-[260px] md:py-10 ${BORST_CONTAINER}`}
      >
        <div className="flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
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
                color: "rgba(255,255,255,0.85)",
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
    </section>
  );
}
