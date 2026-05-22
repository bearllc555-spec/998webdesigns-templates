"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { theme } from "../theme";
import type { TrainerProfile } from "../content";

export function TrainerDetailTestimonials({
  items,
}: {
  items: TrainerProfile["testimonials"];
}) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div
      className="mt-10 p-8 md:p-10"
      style={{
        background: "var(--tpl-bg)",
        borderRadius: "var(--tpl-radius)",
        border: "1px solid var(--tpl-line)",
      }}
    >
      <blockquote>
        <p
          className="text-lg leading-relaxed md:text-xl"
          style={{
            color: "var(--tpl-ink)",
            fontFamily: "var(--tpl-font-display)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          &ldquo;{items[index].quote}&rdquo;
        </p>
        <footer className="mt-6">
          <p className="text-sm font-semibold" style={{ color: "var(--tpl-ink)" }}>
            {items[index].name}
          </p>
          <p className="text-sm" style={{ color: "var(--tpl-muted)" }}>
            {items[index].role}
          </p>
        </footer>
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="inline-flex h-10 w-10 items-center justify-center transition hover:opacity-70"
          style={{
            background: "var(--tpl-card)",
            border: "1px solid var(--tpl-line)",
            borderRadius: 999,
            color: "var(--tpl-ink)",
          }}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="inline-flex h-10 w-10 items-center justify-center transition hover:opacity-70"
          style={{
            background: "var(--tpl-accent)",
            border: "1px solid rgba(19,19,19,0.12)",
            borderRadius: 999,
            color: "var(--tpl-accent-ink)",
          }}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
