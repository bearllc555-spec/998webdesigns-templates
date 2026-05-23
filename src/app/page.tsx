import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { MARKETING_SITE_URL } from "@/lib/marketing-site";
import { SITE_VERSION } from "@/lib/version";
import { ALL_TEMPLATES } from "@/templates/registry";

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-500";

export const metadata = {
  title: "Template library | 998 web designs",
  description:
    "A library of handcrafted templates. Pick a starting point. We hand customize every design and deliver to your business in 5 to 7 days.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-4">
          <Link href="/" className="inline-flex items-baseline gap-2">
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
            >
              <span className="text-blue-600">998</span>
              <span className="text-neutral-900">webdesigns</span>
              <span className="ml-2 text-neutral-500">/ templates</span>
            </span>
            <span
              aria-hidden="true"
              className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium tracking-wider text-neutral-500"
            >
              {SITE_VERSION}
            </span>
          </Link>
          <Link
            href={MARKETING_SITE_URL}
            className="hidden text-sm text-neutral-700 hover:opacity-70 md:inline-block"
          >
            Back to 998webdesigns.com
          </Link>
        </div>
      </header>
      <main>
        <section className="border-b border-neutral-200">
          <div
            className="mx-auto max-w-6xl px-5 pt-8 pb-0 md:px-8 md:pt-10"
            style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
              Template library
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-4xl md:mt-4 md:text-5xl md:leading-[1.05] lg:text-6xl">
              <span className="block sm:whitespace-nowrap">
                A library of handcrafted templates.
              </span>
              <span className="block sm:whitespace-nowrap">Pick a starting point.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              We hand customize every design and deliver to your business in 5 to 7 days.
            </p>
          </div>
        </section>
        <section id="templates">
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
              aria-live="polite"
            >
              {ALL_TEMPLATES.length} handcrafted {ALL_TEMPLATES.length === 1 ? "template" : "templates"}
            </p>
            <div className="mt-6">
              <GalleryGrid />
            </div>
          </div>
        </section>
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">Fonts</p>
            <h2
              className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
              style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
            >
              16 typeface options
            </h2>
            <p className="mt-2 text-sm text-neutral-500">Same headline, sixteen fonts. Pick a letter.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { letter: "a", name: "Newsreader",            cat: "Editorial serif",  weight: 500, var: "--font-newsreader" },
                { letter: "b", name: "Cormorant Garamond",    cat: "Editorial serif",  weight: 500, var: "--font-cormorant-garamond" },
                { letter: "c", name: "DM Serif Display",      cat: "Editorial serif",  weight: 400, var: "--font-dm-serif-display" },
                { letter: "d", name: "Playfair Display",      cat: "Editorial serif",  weight: 600, var: "--font-playfair-display" },
                { letter: "e", name: "Lora",                  cat: "Editorial serif",  weight: 600, var: "--font-lora" },
                { letter: "f", name: "Spectral",              cat: "Editorial serif",  weight: 500, var: "--font-spectral" },
                { letter: "g", name: "Manrope",               cat: "Modern sans",      weight: 700, var: "--font-manrope" },
                { letter: "h", name: "Plus Jakarta Sans",     cat: "Modern sans",      weight: 700, var: "--font-plus-jakarta-sans" },
                { letter: "i", name: "DM Sans",               cat: "Modern sans",      weight: 700, var: "--font-dm-sans" },
                { letter: "j", name: "Outfit",                cat: "Modern sans",      weight: 700, var: "--font-outfit" },
                { letter: "k", name: "Bricolage Grotesque",   cat: "Modern sans",      weight: 700, var: "--font-bricolage-grotesque" },
                { letter: "l", name: "Familjen Grotesk",      cat: "Modern sans",      weight: 700, var: "--font-familjen-grotesk" },
                { letter: "m", name: "Instrument Serif",      cat: "Previously tried", weight: 400, var: "--font-instrument-serif" },
                { letter: "n", name: "Fraunces",              cat: "Previously tried", weight: 500, var: "--font-fraunces" },
                { letter: "o", name: "Geist",                 cat: "Previously tried (current)", weight: 700, var: "--font-geist-sans" },
                { letter: "p", name: "Inter Black 900",       cat: "Previously tried", weight: 900, var: "--font-inter" },
              ].map(({ letter, name, cat, weight, var: fontVar }) => (
                <div
                  key={letter}
                  className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-[11px] font-bold text-white">{letter}</span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        background: cat === "Editorial serif" ? "#EFF6FF" : cat === "Modern sans" ? "#F0FDF4" : "#FEF9C3",
                        color: cat === "Editorial serif" ? "#1D4ED8" : cat === "Modern sans" ? "#15803D" : "#92400E",
                      }}
                    >
                      {cat}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">{name} · {weight}</p>
                  <p
                    className="text-[1.65rem] leading-[1.1] text-neutral-900"
                    style={{ fontFamily: `var(${fontVar}), system-ui, sans-serif`, fontWeight: weight }}
                  >
                    A handcrafted website for $998. Delivered in 5–7 days.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">Google Maps</p>
            <h2
              className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
              style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
            >
              Nine layout options
            </h2>
            <p className="mt-2 text-sm text-neutral-500">24 Newark Pompton Turnpike, Little Falls Township, NJ 07424</p>

            <div className="mt-10 flex flex-col gap-12">

              {/* Layout A — Full-width banner */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Google Map Layout A · Full-width banner</p>
                <div className="overflow-hidden rounded-xl border border-neutral-200">
                  <iframe
                    title="Map Layout A"
                    src="https://maps.google.com/maps?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424&output=embed&z=15"
                    width="100%"
                    height="320"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Layout B — Map left, info card right */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Google Map Layout B · Map + info card</p>
                <div className="overflow-hidden rounded-xl border border-neutral-200">
                  <div className="grid md:grid-cols-[1fr_320px]">
                    <iframe
                      title="Map Layout B"
                      src="https://maps.google.com/maps?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424&output=embed&z=15"
                      width="100%"
                      height="360"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="flex flex-col justify-center gap-5 border-t border-neutral-200 bg-white p-8 md:border-l md:border-t-0">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Location</p>
                        <p className="mt-2 text-lg font-semibold leading-snug text-neutral-900" style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}>24 Newark Pompton Turnpike</p>
                        <p className="text-sm text-neutral-500">Little Falls Township, NJ 07424</p>
                      </div>
                      <div className="space-y-2 border-t border-neutral-100 pt-5">
                        <p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Hours:</span> Mon – Fri 9am – 5pm</p>
                        <p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Phone:</span> (973) 000-0000</p>
                      </div>
                      <a
                        href="https://maps.google.com/?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-700 transition hover:border-neutral-400"
                      >
                        Get directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layout C — Location strip above full map */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Google Map Layout C · Strip + full map</p>
                <div className="overflow-hidden rounded-xl border border-neutral-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 bg-white px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">24 Newark Pompton Turnpike</p>
                        <p className="text-xs text-neutral-500">Little Falls Township, NJ 07424</p>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-blue-600 hover:underline"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                  <iframe
                    title="Map Layout C"
                    src="https://maps.google.com/maps?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424&output=embed&z=15"
                    width="100%"
                    height="300"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Layout E — Silver: full-width with gradient header bar */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Google Map Layout E · Silver — banner + header</p>
                <div className="overflow-hidden rounded-xl border border-neutral-200">
                  <div
                    className="flex flex-wrap items-center justify-between gap-3 px-6 py-4"
                    style={{ background: "linear-gradient(135deg, #e8eaed 0%, #c9cdd4 50%, #d8dbe1 100%)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                        style={{ background: "linear-gradient(135deg, #b0b8c4 0%, #8d97a5 100%)" }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "#3a3f47" }}>24 Newark Pompton Turnpike</p>
                        <p className="text-xs" style={{ color: "#6b7280" }}>Little Falls Township, NJ 07424</p>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full px-3 py-1.5 text-xs font-medium transition"
                      style={{ background: "rgba(255,255,255,0.55)", color: "#3a3f47", border: "1px solid rgba(180,185,195,0.8)" }}
                    >
                      Get directions ↗
                    </a>
                  </div>
                  <iframe
                    title="Map Layout E"
                    src="https://maps.google.com/maps?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424&output=embed&z=15"
                    width="100%"
                    height="300"
                    style={{ border: 0, display: "block", filter: "grayscale(100%) contrast(1.05)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Layout F — Silver: map right, frosted info panel left */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Google Map Layout F · Silver — frosted panel</p>
                <div
                  className="overflow-hidden rounded-xl"
                  style={{ border: "1px solid #c9cdd4" }}
                >
                  <div className="grid md:grid-cols-[300px_1fr]">
                    <div
                      className="flex flex-col justify-between gap-6 p-7"
                      style={{ background: "linear-gradient(160deg, #f0f2f5 0%, #dde1e8 100%)", borderRight: "1px solid #c9cdd4" }}
                    >
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "#8d97a5" }}>Our location</p>
                        <p className="mt-2 text-xl font-semibold leading-snug" style={{ color: "#2d3340" }}>24 Newark Pompton Turnpike</p>
                        <p className="mt-0.5 text-sm" style={{ color: "#6b7280" }}>Little Falls Township, NJ 07424</p>
                      </div>
                      <div className="space-y-2 border-t pt-5" style={{ borderColor: "#c9cdd4" }}>
                        <p className="text-xs" style={{ color: "#4b5563" }}><span className="font-semibold" style={{ color: "#2d3340" }}>Hours</span> &nbsp; Mon–Fri 9am–5pm</p>
                        <p className="text-xs" style={{ color: "#4b5563" }}><span className="font-semibold" style={{ color: "#2d3340" }}>Phone</span> &nbsp; (973) 000-0000</p>
                      </div>
                      <a
                        href="https://maps.google.com/?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-xs font-medium"
                        style={{ background: "rgba(255,255,255,0.7)", color: "#3a3f47", border: "1px solid #b0b8c4" }}
                      >
                        Open in Maps ↗
                      </a>
                    </div>
                    <iframe
                      title="Map Layout F"
                      src="https://maps.google.com/maps?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424&output=embed&z=15"
                      width="100%"
                      height="360"
                      style={{ border: 0, display: "block", filter: "grayscale(100%) contrast(1.05)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Layout I — Silver bare */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Google Map Layout I · Silver — bare</p>
                <div className="overflow-hidden rounded-xl border border-neutral-200">
                  <iframe
                    title="Map Layout I"
                    src="https://maps.google.com/maps?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424&output=embed&z=15"
                    width="100%"
                    height="360"
                    style={{ border: 0, display: "block", filter: "grayscale(100%) contrast(1.05)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Layout G — Night: deep navy wrap, full-width map below */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Google Map Layout G · Night — navy wrap</p>
                <div className="overflow-hidden rounded-xl" style={{ background: "#0d1117", border: "1px solid #1f2937" }}>
                  <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5" style={{ borderBottom: "1px solid #1f2937" }}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: "#1e3a5f" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">24 Newark Pompton Turnpike</p>
                        <p className="text-xs" style={{ color: "#6b7280" }}>Little Falls Township, NJ 07424</p>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full px-4 py-1.5 text-xs font-medium text-white transition"
                      style={{ background: "#1d4ed8", border: "1px solid #2563eb" }}
                    >
                      Directions
                    </a>
                  </div>
                  <div className="overflow-hidden">
                    <iframe
                      title="Map Layout G"
                      src="https://maps.google.com/maps?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424&output=embed&z=15"
                      width="100%"
                      height="300"
                      style={{ border: 0, display: "block", filter: "invert(93%) hue-rotate(180deg) brightness(0.85) saturate(0.9)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Layout H — Night: midnight split with glowing accent */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Google Map Layout H · Night — midnight split</p>
                <div className="overflow-hidden rounded-xl" style={{ background: "#060810", border: "1px solid #1a1f2e" }}>
                  <div className="grid md:grid-cols-[1fr_280px]">
                    <iframe
                      title="Map Layout H"
                      src="https://maps.google.com/maps?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424&output=embed&z=15"
                      width="100%"
                      height="340"
                      style={{ border: 0, display: "block", filter: "invert(93%) hue-rotate(180deg) brightness(0.85) saturate(0.9)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div
                      className="flex flex-col justify-between gap-6 p-7"
                      style={{ borderLeft: "1px solid #1a1f2e" }}
                    >
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#3b82f6" }}>Find us</p>
                        <p className="mt-3 text-lg font-semibold leading-snug text-white">24 Newark Pompton Turnpike</p>
                        <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>Little Falls, NJ 07424</p>
                      </div>
                      <div className="space-y-3" style={{ borderTop: "1px solid #1a1f2e", paddingTop: "1.25rem" }}>
                        <p className="text-xs" style={{ color: "#9ca3af" }}>Mon – Fri &nbsp;<span className="text-white">9am – 5pm</span></p>
                        <p className="text-xs" style={{ color: "#9ca3af" }}>Phone &nbsp;<span className="text-white">(973) 000-0000</span></p>
                      </div>
                      <a
                        href="https://maps.google.com/?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-xs font-medium text-white"
                        style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)", boxShadow: "0 0 16px rgba(59,130,246,0.35)" }}
                      >
                        Open in Maps ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layout J — Night bare */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Google Map Layout J · Night — bare</p>
                <div className="overflow-hidden rounded-xl" style={{ border: "1px solid #1f2937" }}>
                  <iframe
                    title="Map Layout J"
                    src="https://maps.google.com/maps?q=24+Newark+Pompton+Turnpike,+Little+Falls+Township,+NJ+07424&output=embed&z=15"
                    width="100%"
                    height="360"
                    style={{ border: 0, display: "block", filter: "invert(93%) hue-rotate(180deg) brightness(0.85) saturate(0.9)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p
                className="text-2xl leading-tight text-neutral-900 md:text-3xl"
                style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif", fontWeight: 600 }}
              >
                None of these quite right? We design from scratch too.
              </p>
              <p className="mt-2 text-sm text-neutral-600">Same $998. Same 5 to 7 day build window.</p>
            </div>
            <Link href={`${MARKETING_SITE_URL}/#start`} className={`${ctaButtonClass} shrink-0`}>
              Start from scratch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-neutral-500 md:px-8">
          <p>
            <span className="font-semibold text-blue-600">998</span>
            <span className="font-semibold text-neutral-900">webdesigns</span> / templates &middot; a Bear LLC digital property
          </p>
        </div>
      </footer>
    </div>
  );
}
