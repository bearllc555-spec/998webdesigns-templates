import Link from "next/link";
import { blogPosts } from "../content";
import { theme } from "../theme";
import {
  BORST_CONTAINER,
  BORST_SECTION_PY,
  BorstArrow,
  BorstEyebrow,
  borstOutlineBtn,
} from "../borst-ui";

export function BlogPreviewBlock() {
  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="max-w-3xl">
          <BorstEyebrow>Our blog</BorstEyebrow>
          <h2
            className="mt-4 text-4xl leading-tight md:text-5xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            Our latest articles.
          </h2>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {blogPosts.map((p) => (
            <li
              key={p.title}
              className="overflow-hidden"
              style={{ background: "var(--tpl-bg)", borderRadius: 20 }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} className="block h-full w-full object-cover" />
                <span
                  className="absolute left-4 top-4 px-3 py-1 text-xs"
                  style={{
                    background: "var(--tpl-bg)",
                    color: "var(--tpl-ink)",
                    borderRadius: 999,
                    fontWeight: 600,
                  }}
                >
                  {p.category}
                </span>
              </div>
              <div className="p-7">
                <p
                  className="text-xs"
                  style={{
                    color: "var(--tpl-muted)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {p.date}
                </p>
                <h3
                  className="mt-3 text-xl leading-snug"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: 700,
                  }}
                >
                  {p.title}
                </h3>
                <Link
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm transition hover:opacity-80"
                  style={{ color: "var(--tpl-accent)", fontWeight: 600 }}
                >
                  Learn more
                  <BorstArrow className="h-3.5 w-3.5" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-80"
            style={borstOutlineBtn}
          >
            Browse all articles
            <BorstArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
