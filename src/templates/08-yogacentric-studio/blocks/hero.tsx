"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme, extendedPalette } from "../theme";
import { content, heroStats } from "../content";

function TypewriterHeadline({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    setDisplayed(0);
    let i = 0;
    // small initial delay so the video has a moment to start
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i += 1;
        setDisplayed(i);
        if (i >= text.length) clearInterval(interval);
      }, 62);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(start);
  }, [text]);

  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            opacity: i < displayed ? 1 : 0,
            transition: "opacity 0.06s",
            whiteSpace: char === " " ? "pre" : undefined,
          }}
          aria-hidden={i >= displayed}
        >
          {char}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </>
  );
}

export function HeroBlock() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = () => {
      void video.play().catch(() => {
        /* autoplay blocked — poster frame remains visible */
      });
    };
    play();
    video.addEventListener("loadeddata", play);
    return () => video.removeEventListener("loadeddata", play);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-svh min-h-[640px] overflow-hidden"
      style={{ background: "var(--tpl-ink)" }}
    >
      {/* Poster fallback — visible on mobile where source hides the video */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/templates/yogacentric-studio/hero.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <video
        ref={videoRef}
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/templates/yogacentric-studio/hero.webp"
      >
        <source src="/templates/yogacentric-studio/hero.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-5 py-12 text-center md:px-8 md:py-16">
        <div className="flex w-full translate-y-8 flex-col items-center md:translate-y-12">
        <div className="mx-auto max-w-2xl">
          {content.hero.eyebrow && (
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: extendedPalette.lime, letterSpacing: "0.18em" }}
            >
              {content.hero.eyebrow}
            </p>
          )}
          <h1
            className="mt-4 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            <TypewriterHeadline text={content.hero.headline} />
          </h1>
          <p
            className="mx-auto mt-5 max-w-lg text-sm leading-relaxed md:text-base"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            {content.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={theme.primaryCta.href}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition hover:opacity-90"
              style={{
                background: "var(--tpl-accent)",
                color: "var(--tpl-accent-ink)",
                border: "1px solid rgba(19,19,19,0.12)",
                borderRadius: 999,
              }}
            >
              {theme.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {content.hero.secondaryLink && (
              <Link
                href={content.hero.secondaryLink.href}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition hover:opacity-90"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: 999,
                  backdropFilter: "blur(8px)",
                }}
              >
                {content.hero.secondaryLink.label}
              </Link>
            )}
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 md:mt-12 md:gap-6">
          {heroStats.map((s) => (
            <div key={s.label}>
              <p
                className="text-2xl font-bold md:text-3xl"
                style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
              >
                {s.value}
              </p>
              <p className="mt-1 text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
