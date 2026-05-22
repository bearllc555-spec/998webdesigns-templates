"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import type { TrainerProfile } from "../content";

const SCROLL_PX_PER_FRAME = 0.4;

function TestimonialCard({
  quote,
  name,
  role,
}: TrainerProfile["testimonials"][number]) {
  return (
    <article
      data-testimonial-card
      className="flex h-full shrink-0 flex-col justify-between p-4 md:p-5"
      style={{
        background: "var(--tpl-bg)",
        border: "1px solid var(--tpl-line)",
        borderRadius: "var(--tpl-radius)",
      }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "var(--tpl-ink)" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4 border-t pt-3" style={{ borderColor: "var(--tpl-line)" }}>
        <p className="text-xs font-semibold" style={{ color: "var(--tpl-ink)" }}>
          {name}
        </p>
        <p className="mt-0.5 text-xs" style={{ color: "var(--tpl-muted)" }}>
          {role}
        </p>
      </footer>
    </article>
  );
}

export function TrainerDetailTestimonials({
  items,
}: {
  items: TrainerProfile["testimonials"];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [nudging, setNudging] = useState(false);

  const loopItems = [...items, ...items];

  const getStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 260;
    const card = track.querySelector<HTMLElement>("[data-testimonial-card]");
    if (!card) return 260;
    const gap = 12;
    return card.offsetWidth + gap;
  }, []);

  const getLoopWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / 2;
  }, []);

  const applyTransform = useCallback((animate: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
    track.style.transition = animate ? "transform 0.4s ease" : "none";
  }, []);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const tick = () => {
      const loopWidth = getLoopWidth();
      offsetRef.current += SCROLL_PX_PER_FRAME;
      if (loopWidth > 0 && offsetRef.current >= loopWidth) {
        offsetRef.current -= loopWidth;
      }
      applyTransform(false);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, getLoopWidth, applyTransform]);

  const normalizeOffset = useCallback(() => {
    const loopWidth = getLoopWidth();
    if (loopWidth <= 0) return;
    while (offsetRef.current < 0) offsetRef.current += loopWidth;
    while (offsetRef.current >= loopWidth) offsetRef.current -= loopWidth;
  }, [getLoopWidth]);

  const nudge = (dir: -1 | 1) => {
    setPaused(true);
    setNudging(true);
    offsetRef.current += dir * getStep();
    normalizeOffset();
    applyTransform(true);
    window.setTimeout(() => setNudging(false), 400);
  };

  const togglePause = () => setPaused((p) => !p);

  return (
    <div className="mt-10">
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-3 will-change-transform [&_[data-testimonial-card]]:min-w-[calc((100%-0.75rem)/1.15)] [&_[data-testimonial-card]]:flex-[0_0_calc((100%-0.75rem)/1.15)] sm:[&_[data-testimonial-card]]:min-w-[calc((100%-0.75rem)/2)] sm:[&_[data-testimonial-card]]:flex-[0_0_calc((100%-0.75rem)/2)] md:[&_[data-testimonial-card]]:min-w-[calc((100%-1.5rem)/3)] md:[&_[data-testimonial-card]]:flex-[0_0_calc((100%-1.5rem)/3)] lg:[&_[data-testimonial-card]]:min-w-[calc((100%-2.25rem)/4)] lg:[&_[data-testimonial-card]]:flex-[0_0_calc((100%-2.25rem)/4)] xl:[&_[data-testimonial-card]]:min-w-[calc((100%-3rem)/5)] xl:[&_[data-testimonial-card]]:flex-[0_0_calc((100%-3rem)/5)]"
          style={{ transition: nudging ? undefined : "none" }}
        >
          {loopItems.map((item, i) => (
            <TestimonialCard key={`${item.name}-${item.role}-${i}`} {...item} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Previous feedback"
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
          onClick={togglePause}
          aria-label={paused ? "Resume auto-scroll" : "Pause auto-scroll"}
          className="inline-flex h-10 w-10 items-center justify-center transition hover:opacity-70"
          style={{
            background: "var(--tpl-bg)",
            border: "1px solid var(--tpl-line)",
            borderRadius: 999,
            color: "var(--tpl-ink)",
          }}
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Next feedback"
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
        <p className="text-xs" style={{ color: "var(--tpl-muted)" }}>
          {paused ? "Paused — use arrows to browse" : "Scrolling — pause to browse"}
        </p>
      </div>
    </div>
  );
}
