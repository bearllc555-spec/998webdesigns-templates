"use client";

import { useRef, useState, type PointerEvent } from "react";
import { theme } from "../theme";

const PROJECTS = [
  {
    title: "1947 craftsman, Sequoyah Hills",
    note: "Three-tab to architectural asphalt. Twelve squares. One day.",
  },
  {
    title: "Standing seam, Strawberry Plains",
    note: "Charcoal 24-gauge metal over a leaking ridge. Six day install.",
  },
  {
    title: "Tornado rebuild, Powell",
    note: "Full tear-off after hail-and-wind event. Insurance approved in 48 hours.",
  },
];

export function BeforeAfter() {
  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p
          className="text-xs"
          style={{
            color: "var(--tpl-accent)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontFamily: "var(--tpl-font-body)",
            fontWeight: 700,
          }}
        >
          Recent work
        </p>
        <h2
          className="mt-5 text-4xl leading-[0.95] md:text-6xl"
          style={{
            color: "var(--tpl-ink)",
            fontFamily: "var(--tpl-font-display)",
            fontWeight: theme.type.displayWeight,
            textTransform: "uppercase",
          }}
        >
          DRAG TO SEE THE BEFORE.
        </h2>
        <span
          className="mt-5 inline-block h-1 w-16"
          style={{ background: "var(--tpl-accent)" }}
          aria-hidden="true"
        />
        <div className="mt-12 space-y-16">
          {PROJECTS.map((p, i) => (
            <ProjectSlider key={p.title} title={p.title} note={p.note} seed={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSlider({ title, note, seed }: { title: string; note: string; seed: number }) {
  const [pct, setPct] = useState(50);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  function setFromEvent(clientX: number) {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.max(2, Math.min(98, next)));
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
    setFromEvent(e.clientX);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    setFromEvent(e.clientX);
  }

  function onPointerUp() {
    dragging.current = false;
  }

  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3
          className="text-xl md:text-2xl"
          style={{
            color: "var(--tpl-ink)",
            fontFamily: "var(--tpl-font-display)",
            fontWeight: theme.type.displayWeight,
            textTransform: "uppercase",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm"
          style={{
            color: "var(--tpl-muted)",
            fontFamily: "var(--tpl-font-body)",
          }}
        >
          {note}
        </p>
      </div>
      <div
        ref={wrapRef}
        className="relative mt-5 select-none overflow-hidden"
        style={{
          aspectRatio: "16 / 9",
          border: `2px solid var(--tpl-line)`,
          background: theme.palette.bg,
        }}
        role="region"
        aria-label="Before and after comparison, drag the divider"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <After seed={seed} />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pct}%` }}
        >
          <div className="absolute inset-0">
            <Before seed={seed} />
          </div>
        </div>
        <div
          className="absolute inset-y-0 z-10 -ml-px w-0.5"
          style={{
            left: `${pct}%`,
            background: theme.palette.accent,
          }}
        >
          <button
            type="button"
            aria-label={`Drag handle, currently at ${Math.round(pct)} percent before`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center"
            style={{
              background: theme.palette.accent,
              color: theme.palette.accentInk,
              fontFamily: theme.type.body,
              fontWeight: 800,
              letterSpacing: "0.04em",
              cursor: "ew-resize",
              pointerEvents: "auto",
              borderRadius: 999,
            }}
          >
            <span aria-hidden="true">&lt; &gt;</span>
          </button>
        </div>
        <p
          className="absolute left-3 top-3 px-2 py-0.5 text-xs"
          style={{
            background: theme.palette.bg,
            color: theme.palette.mutedInk,
            border: `1px solid ${theme.palette.line}`,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Before
        </p>
        <p
          className="absolute right-3 top-3 px-2 py-0.5 text-xs"
          style={{
            background: theme.palette.accent,
            color: theme.palette.accentInk,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          After
        </p>
      </div>
    </article>
  );
}

function Before({ seed }: { seed: number }) {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/templates/ironclad-roofing/before.jpg"
        alt=""
        className="block h-full w-full object-cover"
        style={{ filter: "saturate(0.55) brightness(0.85)" }}
      />
    </div>
  );
}

function After({ seed }: { seed: number }) {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/templates/ironclad-roofing/after.jpg"
        alt=""
        className="block h-full w-full object-cover"
      />
    </div>
  );
}
