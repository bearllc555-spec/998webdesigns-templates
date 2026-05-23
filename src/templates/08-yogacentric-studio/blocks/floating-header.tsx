"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SITE_VERSION } from "@/lib/version";
import { theme } from "../theme";
import { YcBtn } from "./yc-btn";

const SAGE = "#C8D8C8";
const SAGE_INK = "#131313";

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true" className="shrink-0">
      <path d="M12 2.75 3.5 10v10.25c0 .41.34.75.75.75H10v-6.5h4V21h5.75c.41 0 .75-.34.75-.75V10L12 2.75Zm-1.25 18.5v-5.5h2.5v5.5h-2.5Z" />
    </svg>
  );
}

export function YogaCentricHeader() {
  const slug = theme.meta.slug;
  const pathname = usePathname();
  const homePath = `/templates/${slug}`;
  const isHomeWithHero = pathname === homePath || pathname === `${homePath}/`;

  const [show, setShow] = useState(!isHomeWithHero);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);
  const mobileNav = [
    { label: "Home", href: homePath },
    { label: "Services", href: `/templates/${slug}/services` },
    ...theme.nav.filter((n) => n.label !== "Services"),
  ];

  useEffect(() => {
    if (!isHomeWithHero) {
      setShow(true);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) {
      setShow(true);
      return;
    }

    const getThreshold = () => hero.offsetHeight - 24;

    const onScroll = () => {
      const isPastHero = window.scrollY >= getThreshold();
      setShow(isPastHero);
      if (!isPastHero) setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHomeWithHero]);

  return (
    <>
      <header
        className="fixed left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-300 ease-out md:w-[calc(100%-3rem)]"
        style={{
          top: 16,
          transform: `translate(-50%, ${show ? "0" : "-160%"})`,
          opacity: show ? 1 : 0,
          pointerEvents: show ? "auto" : "none",
        }}
        aria-hidden={!show}
      >
        <div
          className="flex items-center justify-between gap-3 px-4 py-2.5 shadow-lg md:gap-4 md:px-6 md:py-3"
          style={{
            background: "#2D2D2D",
            borderRadius: 9999,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          <Link
            href={`/templates/${slug}`}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold tracking-tight md:text-base"
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--tpl-font-display)",
              letterSpacing: theme.type.displayTracking,
            }}
            aria-label={`${theme.meta.name} home`}
          >
            {theme.meta.name}
            <span
              aria-hidden="true"
              className="rounded-full px-1.5 py-0.5 text-[10px] font-semibold tracking-wider"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(255,255,255,0.16)",
              }}
            >
              {SITE_VERSION}
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {theme.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm transition hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={theme.primaryCta.href}
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
              className="hidden shrink-0 px-4 py-2 text-sm font-semibold sm:inline-flex"
              style={{
                background: ctaHovered ? SAGE : "var(--tpl-accent)",
                color: ctaHovered ? SAGE_INK : "var(--tpl-accent-ink)",
                borderRadius: 9999,
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {theme.primaryCta.label}
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center md:hidden"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: 9999,
                color: "#FFFFFF",
              }}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="mt-2 px-4 py-3 md:hidden"
            style={{
              background: "#2D2D2D",
              borderRadius: 24,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
          >
            <Link
              href={homePath}
              className="mb-3 flex items-center gap-2.5 border-b border-white/10 px-4 pb-3 text-base font-bold tracking-tight transition hover:opacity-80"
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--tpl-font-display)",
                letterSpacing: theme.type.displayTracking,
              }}
              onClick={() => setMenuOpen(false)}
            >
              <HomeIcon />
              {theme.meta.name}
            </Link>
            <ul className="space-y-1">
              {mobileNav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="block rounded-full px-4 py-2.5 text-sm transition hover:bg-white/10"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <YcBtn
                  href={theme.primaryCta.href}
                  className="w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {theme.primaryCta.label}
                </YcBtn>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
