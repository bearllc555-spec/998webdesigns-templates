import { featuredTestimonial } from "../content";
import { BORST_CONTAINER } from "../borst-ui";

export function FeaturedTestimonial() {
  return (
    <section className="relative min-h-[380px] md:min-h-[480px]">
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
            "linear-gradient(90deg, rgba(5,31,25,0.75) 0%, rgba(5,31,25,0.35) 55%, rgba(5,31,25,0.15) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className={`relative flex min-h-[380px] items-center md:min-h-[480px] ${BORST_CONTAINER}`}
      >
        <div className="flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-center">
          <div
            className="relative shrink-0 overflow-hidden"
            style={{ borderRadius: 999, width: 88, height: 88 }}
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
              className="text-2xl leading-snug md:text-3xl"
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
              className="mt-4 text-sm"
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
