"use client";

import Link from "next/link";
import { theme } from "../theme";
import { content } from "../content";
import { BorstArrow, borstPrimaryBtn } from "../borst-ui";
import { IMAGE_GEOMETRY } from "../image-geometry";

export function HeroBlock() {
  return (
    <section id="hero" style={{ background: "var(--tpl-bg)" }} className="px-0 pb-10 pt-0 md:pb-14">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: IMAGE_GEOMETRY.heroAspect }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/templates/borst-landscape-design/slot-001.jpg"
            alt="Modern home with landscaped garden"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,31,25,0.06) 0%, rgba(5,31,25,0.38) 72%, rgba(5,31,25,0.84) 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12 pt-10 md:px-9 md:pb-14"
            style={{ fontFamily: "var(--tpl-font-display)" }}
          >
            <div className="grid items-end gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <h1
                  className="max-w-xl text-5xl leading-[1.03] md:text-[68px]"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: 700,
                    letterSpacing: "-0.022em",
                  }}
                >
                  {content.hero.headline}
                </h1>
                <p
                  className="mt-4 max-w-lg text-base leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.84)", fontFamily: "var(--tpl-font-body)" }}
                >
                  {content.hero.sub}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <Link
                    href={theme.primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
                    style={borstPrimaryBtn}
                  >
                    Get in touch
                  </Link>
                  {content.hero.secondaryLink && (
                    <Link
                      href={content.hero.secondaryLink.href}
                      className="inline-flex items-center gap-2 text-sm transition hover:opacity-80"
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "var(--tpl-font-body)",
                        fontWeight: 600,
                      }}
                    >
                      Browse services
                      <BorstArrow />
                    </Link>
                  )}
                </div>
              </div>
              <div className="md:col-span-5">
                <NewsletterCard />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

function NewsletterCard() {
  return (
    <div
      className="p-8 md:p-9"
      style={{
        background: "rgba(255,255,255,0.97)",
        borderRadius: 18,
        boxShadow: "0 20px 48px rgba(0,0,0,0.18)",
      }}
    >
      <p
        className="text-[34px] leading-[1.06] md:text-[40px]"
        style={{
          color: "var(--tpl-ink)",
          fontFamily: "var(--tpl-font-display)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        Book your service today
      </p>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
        Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit phasellus mollis sit.
      </p>
      <form className="mt-6 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          className="w-full flex-1 px-5 py-3 text-sm focus:outline-none"
          style={{
            background: "#FFFFFF",
            color: "var(--tpl-ink)",
            border: "1px solid var(--tpl-line)",
            borderRadius: 999,
            fontFamily: "var(--tpl-font-body)",
          }}
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full px-4 py-3 text-sm transition hover:opacity-90"
          style={borstPrimaryBtn}
          aria-label="Sign up"
        >
          Sign up
          <BorstArrow className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}
