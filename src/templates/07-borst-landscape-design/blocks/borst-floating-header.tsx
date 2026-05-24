"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SITE_VERSION } from "@/lib/version";
import { theme } from "../theme";

export function BorstFloatingHeader() {
  const slug = theme.meta.slug;
  const pathname = usePathname();
  const homePath = `/templates/${slug}`;
  const isHome = pathname === homePath || pathname === `${homePath}/`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setPastHero(true);
      return;
    }

    setPastHero(false);
    setMenuOpen(false);

    const hero = document.getElementById("hero");
    if (!hero) {
      setPastHero(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  useEffect(() => {
    if (!pastHero) setMenuOpen(false);
  }, [pastHero]);

  const showBar = pastHero;
  const headerPosition = isHome ? "fixed" : "sticky";

  return (
    <header
      className={`${headerPosition} inset-x-0 top-0 z-50 transition-[transform,opacity] duration-300 ease-out`}
      style={{
        pointerEvents: showBar ? "auto" : "none",
        transform: showBar ? "translateY(0)" : "translateY(-100%)",
        opacity: showBar ? 1 : 0,
      }}
      aria-hidden={!showBar}
    >
      <div
        className="border-b"
        style={{
          background: "var(--tpl-bg)",
          borderColor: "var(--tpl-line)",
          boxShadow: showBar ? "0 4px 18px rgba(5,31,25,0.06)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            href={homePath}
            className="inline-flex shrink-0 items-center gap-2"
            aria-label={`${theme.meta.name} home`}
            tabIndex={showBar ? 0 : -1}
          >
            <span
              className="text-base font-bold tracking-tight md:text-lg"
              style={{
                color: "var(--tpl-accent)",
                fontFamily: "var(--tpl-font-display)",
                letterSpacing: theme.type.displayTracking,
              }}
            >
              {theme.meta.name}
            </span>
            <span
              aria-hidden="true"
              className="rounded-full px-1.5 py-0.5 text-[10px] font-medium tracking-wider"
              style={{
                background: "var(--tpl-card)",
                color: "var(--tpl-muted)",
              }}
            >
              {SITE_VERSION}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {theme.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm transition hover:opacity-70"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: theme.type.bodyWeight,
                }}
                tabIndex={showBar ? 0 : -1}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={theme.primaryCta.href}
              className="hidden shrink-0 px-5 py-2.5 text-sm font-semibold transition hover:opacity-90 sm:inline-flex"
              style={{
                background: "var(--tpl-accent)",
                color: "var(--tpl-accent-ink)",
                borderRadius: 999,
                fontFamily: "var(--tpl-font-body)",
              }}
              tabIndex={showBar ? 0 : -1}
            >
              Get in touch
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center md:hidden"
              style={{
                background: "var(--tpl-card)",
                borderRadius: 999,
                color: "var(--tpl-ink)",
                border: "1px solid var(--tpl-line)",
              }}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              tabIndex={showBar ? 0 : -1}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && showBar && (
          <nav
            className="border-t px-5 py-3 md:hidden"
            style={{ borderColor: "var(--tpl-line)", background: "var(--tpl-bg)" }}
            aria-label="Mobile"
          >
            <ul className="space-y-1">
              {theme.nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="block rounded-lg px-3 py-2.5 text-sm transition hover:opacity-70"
                    style={{ color: "var(--tpl-ink)", fontFamily: "var(--tpl-font-body)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href={theme.primaryCta.href}
                  className="flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold"
                  style={{
                    background: "var(--tpl-accent)",
                    color: "var(--tpl-accent-ink)",
                    borderRadius: 999,
                    fontFamily: "var(--tpl-font-body)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
