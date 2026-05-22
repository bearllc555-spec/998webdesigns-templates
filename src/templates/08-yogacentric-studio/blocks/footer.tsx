"use client";

import { useState } from "react";
import Link from "next/link";
import { theme } from "../theme";
import { content, footerLinks } from "../content";

const SAGE = "#C8D8C8";
const SAGE_INK = "#131313";

export function YogaCentricFooter() {
  const year = new Date().getFullYear();
  const [subHovered, setSubHovered] = useState(false);
  return (
    <footer style={{ background: "var(--tpl-ink)", color: "#FFFFFF" }}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Join our newsletter to stay up to date on classes and workshops.
            </p>
            <form className="mt-5 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="w-full flex-1 px-4 py-3 text-sm focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 999,
                }}
              />
              <button
                type="submit"
                onMouseEnter={() => setSubHovered(true)}
                onMouseLeave={() => setSubHovered(false)}
                className="shrink-0 px-5 py-3 text-sm font-semibold"
                style={{
                  background: subHovered ? SAGE : "var(--tpl-accent)",
                  color: subHovered ? SAGE_INK : "var(--tpl-accent-ink)",
                  borderRadius: 999,
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
          <nav className="md:col-span-6 md:justify-self-end">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className="mt-14 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <p
            className="text-lg font-bold"
            style={{ letterSpacing: "-0.02em" }}
          >
            {theme.meta.name}
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            &copy; {year} {content.business.legalName}. {content.business.address.split("\n")[1]}
          </p>
        </div>
      </div>
    </footer>
  );
}
