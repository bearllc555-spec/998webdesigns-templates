"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { theme, extendedPalette } from "../theme";
import { content, heroStats } from "../content";
import { YcBtn } from "./yc-btn";

function TypewriterHeadline({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    setDisplayed(0);
    let i = 0;
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
        /* autoplay blocked — poster remains visible */
      });
    };
    play();
    video.addEventListener("loadeddata", play);
    return () => video.removeEventListener("loadeddata", play);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden md:min-h-[640px] md:h-svh"
      style={{ background: "var(--tpl-ink)" }}
    >
      {/* Mobile: video + content stack. Desktop: full-bleed video with centered overlay. */}
      <div className="relative md:absolute md:inset-0 md:h-full">
        <video
          ref={videoRef}
          className="block h-auto max-h-[58dvh] w-full object-contain object-top md:absolute md:inset-0 md:h-full md:max-h-none md:object-cover md:object-[50%_42%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/templates/yogacentric-studio/hero.webp"
        >
          <source src="/templates/yogacentric-studio/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 md:hidden"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--tpl-ink))",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, rgba(19,19,19,0.25) 0%, rgba(19,19,19,0.45) 42%, rgba(19,19,19,0.82) 78%, rgba(19,19,19,0.94) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-10 pt-3 text-center md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center md:px-8 md:py-16">
        <div className="mx-auto w-full max-w-2xl">
          {content.hero.eyebrow && (
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: extendedPalette.lime, letterSpacing: "0.18em" }}
            >
              {content.hero.eyebrow}
            </p>
          )}
          <h1
            className="mt-3 text-4xl leading-[1.05] md:mt-4 md:text-5xl lg:text-6xl"
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
            <YcBtn href={theme.primaryCta.href}>
              {theme.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </YcBtn>
            {content.hero.secondaryLink && (
              <YcBtn href={content.hero.secondaryLink.href} ghost>
                {content.hero.secondaryLink.label}
              </YcBtn>
            )}
          </div>
        </div>
        <div className="mx-auto mt-8 grid w-full max-w-md grid-cols-3 gap-4 md:mt-12 md:gap-6">
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
    </section>
  );
}
