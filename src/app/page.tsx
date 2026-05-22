import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { MARKETING_SITE_URL } from "@/lib/marketing-site";
import { SITE_VERSION } from "@/lib/version";

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-500";

export const metadata = {
  title: "Template library | 998 web designs",
  description:
    "A library of handcrafted templates. Pick a starting point. We customize it to your business in 5 to 7 days. $998, once.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
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
            className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
            style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
              Template library
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl md:text-6xl md:leading-[1.05] lg:text-7xl">
              <span className="block sm:whitespace-nowrap">
                A library of handcrafted templates.
              </span>
              <span className="block sm:whitespace-nowrap">Pick a starting point.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Every template is a fully built site. We customize it to your business in 5 to 7 days. $998, once.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href={`${MARKETING_SITE_URL}/#start`} className={ctaButtonClass}>
                Start my $998 site
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="#templates" className={ctaButtonClass}>
                Browse the six
              </Link>
            </div>
          </div>
        </section>
        <section id="templates">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <GalleryGrid />
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
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            <span className="font-semibold text-blue-600">998</span>
            <span className="font-semibold text-neutral-900">webdesigns</span> / templates &middot; a Bear LLC digital property
          </p>
          <p className="text-xs">Six handcrafted templates, tailored per client for $998.</p>
        </div>
      </footer>
    </div>
  );
}
