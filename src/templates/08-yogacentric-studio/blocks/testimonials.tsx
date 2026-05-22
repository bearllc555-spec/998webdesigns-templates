"use client";

import { theme } from "../theme";
import { content } from "../content";
import { TrainerDetailTestimonials } from "./trainer-detail-testimonials";

export function TestimonialsBlock() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--tpl-card)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2
            className="text-4xl leading-tight md:text-5xl"
            style={{
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
              color: "var(--tpl-ink)",
            }}
          >
            What our members are saying
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
            Their stories reflect the growth, healing, and joy that comes from consistent practice in our studio.
          </p>
        </div>
        <TrainerDetailTestimonials items={content.testimonials} />
      </div>
    </section>
  );
}
