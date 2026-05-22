"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";

export function HeroBlock() {
  return (
    <section
      id="hero"
      className="relative min-h-screen"
      style={{ background: "var(--tpl-ink)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/templates/borst-landscape-design/hero.jpg"
        alt="Modern home with landscaped garden"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(5,31,25,0.0) 0%, rgba(5,31,25,0.55) 60%, rgba(5,31,25,0.85) 100%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-5 pb-20 pt-8 md:px-8 md:pb-28">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-accent-soft)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              {content.hero.eyebrow}
            </p>
            <h1
              className="mt-5 text-5xl leading-[1.05] md:text-7xl"
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              {content.hero.headline}
            </h1>
            <p
              className="mt-7 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--tpl-font-body)" }}
            >
              {content.hero.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={theme.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
                style={{
                  background: "var(--tpl-accent)",
                  color: "var(--tpl-accent-ink)",
                  borderRadius: 999,
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 600,
                }}
              >
                {theme.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {content.hero.secondaryLink && (
                <Link
                  href={content.hero.secondaryLink.href}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm transition hover:opacity-90"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.4)",
                    borderRadius: 999,
                    fontFamily: "var(--tpl-font-body)",
                    fontWeight: 500,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {content.hero.secondaryLink.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
          <div className="md:col-span-5">
            <NewsletterCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterCard() {
  return (
    <div
      className="p-6 md:p-7"
      style={{
        background: "rgba(255,255,255,0.96)",
        borderRadius: 16,
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
      }}
    >
      <p
        className="text-xl leading-snug md:text-2xl"
        style={{
          color: "var(--tpl-ink)",
          fontFamily: "var(--tpl-font-display)",
          fontWeight: 700,
          letterSpacing: "-0.01em",
        }}
      >
        Book your service today
      </p>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
        Drop your email - a designer will reach out the same business day.
      </p>
      <form className="mt-5 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          className="w-full flex-1 px-4 py-3 text-sm focus:outline-none"
          style={{
            background: "var(--tpl-card)",
            color: "var(--tpl-ink)",
            border: "1px solid var(--tpl-line)",
            borderRadius: 999,
            fontFamily: "var(--tpl-font-body)",
          }}
        />
        <button
          type="submit"
          className="shrink-0 px-5 py-3 text-sm transition hover:opacity-90"
          style={{
            background: "var(--tpl-accent)",
            color: "var(--tpl-accent-ink)",
            borderRadius: 999,
            fontFamily: "var(--tpl-font-body)",
            fontWeight: 600,
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
