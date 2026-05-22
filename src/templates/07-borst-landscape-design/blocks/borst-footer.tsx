"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { MARKETING_SITE_URL } from "@/lib/marketing-site";
import { theme } from "../theme";
import { content, instagramTiles, footerLinks } from "../content";
import { extendedPalette } from "../theme";

export function BorstFooter() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: extendedPalette.darkSection, color: "#FFFFFF" }}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p
              className="text-3xl leading-tight"
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              {theme.meta.name}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              {content.footer.blurb}
            </p>
            <form className="mt-7 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full flex-1 px-4 py-3 text-sm focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.2)",
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
          <div className="md:col-span-2">
            <p className="mb-4 text-xs uppercase" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em" }}>
              Main pages
            </p>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.mainPages.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition hover:opacity-70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="mb-4 text-xs uppercase" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em" }}>
              More
            </p>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.utility.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition hover:opacity-70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em" }}>
              Follow us
            </p>
            <div className="grid grid-cols-2 gap-2">
              {instagramTiles.map((src, i) => (
                <a
                  key={i}
                  href={content.business.socials.find((s) => s.icon === "instagram")?.href ?? "#"}
                  className="relative overflow-hidden block"
                  style={{ aspectRatio: "1 / 1", borderRadius: 8 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="block h-full w-full object-cover transition hover:scale-105" />
                </a>
              ))}
            </div>
            <a
              href={content.business.socials.find((s) => s.icon === "instagram")?.href ?? "#"}
              className="mt-5 inline-flex items-center gap-2 text-sm transition hover:opacity-80"
              style={{ color: "var(--tpl-accent-soft)", fontWeight: 600 }}
            >
              Follow on Instagram
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8 text-xs"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          <p>
            &copy; {year} {content.business.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>
              Built by{" "}
              <a
                href={MARKETING_SITE_URL}
                className="transition hover:opacity-80"
                style={{ color: "#FFFFFF" }}
              >
                998 web designs
              </a>
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>|</span>
            <a href={content.business.socials.find((s) => s.icon === "facebook")?.href ?? "#"} aria-label="Facebook" className="transition hover:opacity-70">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={content.business.socials.find((s) => s.icon === "instagram")?.href ?? "#"} aria-label="Instagram" className="transition hover:opacity-70">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={content.business.socials.find((s) => s.icon === "linkedin")?.href ?? "#"} aria-label="LinkedIn" className="transition hover:opacity-70">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
