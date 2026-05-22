"use client";

import Link from "next/link";
import { theme } from "../theme";
import { content, testimonialAvatars } from "../content";
import {
  BORST_CONTAINER,
  BORST_SECTION_PY,
  BorstArrow,
  BorstEyebrow,
  borstPrimaryBtn,
} from "../borst-ui";
import { BorstMarqueeStyles } from "./borst-marquee-styles";

function TestimonialCard({ index }: { index: number }) {
  const t = content.testimonials[index % content.testimonials.length];
  const avatar = testimonialAvatars[index % testimonialAvatars.length];

  return (
    <li
      className="w-[280px] shrink-0 p-6 sm:w-[300px]"
      style={{
        background: "var(--tpl-bg)",
        border: "1px solid var(--tpl-line)",
        borderRadius: 20,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="relative shrink-0 overflow-hidden"
          style={{ borderRadius: 999, width: 44, height: 44 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatar} alt={t.name} className="block h-full w-full object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm leading-tight" style={{ color: "var(--tpl-ink)", fontWeight: 700 }}>
              {t.name}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/templates/borst-landscape-design/icon-verified.svg"
              alt="Verified"
              className="h-3.5 w-3.5 shrink-0"
            />
          </div>
          <p className="mt-0.5 truncate text-xs" style={{ color: "var(--tpl-muted)" }}>
            {t.role}
          </p>
        </div>
      </div>
      <p
        className="mt-4 text-sm leading-relaxed"
        style={{ color: "var(--tpl-ink)", fontFamily: "var(--tpl-font-body)" }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>
    </li>
  );
}

export function TestimonialsBlock() {
  const loopItems = [...content.testimonials, ...content.testimonials];

  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <BorstMarqueeStyles />
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="max-w-3xl">
          <BorstEyebrow>Testimonials</BorstEyebrow>
          <h2
            className="mt-4 text-4xl leading-tight md:text-5xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            What our clients say about our work.
          </h2>
        </div>

        <div className="borst-marquee-wrap mt-12 overflow-hidden">
          <ul className="borst-marquee-track gap-5 pr-5">
            {loopItems.map((_, i) => (
              <TestimonialCard key={`marquee-${i}`} index={i} />
            ))}
          </ul>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={theme.primaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
            style={borstPrimaryBtn}
          >
            Get in touch
            <BorstArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
