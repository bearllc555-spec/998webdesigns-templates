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
import { IMAGE_GEOMETRY } from "../image-geometry";

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
            <li key={p.title}>
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: IMAGE_GEOMETRY.blogAspect,
                  borderRadius: IMAGE_GEOMETRY.mediaRadius,
                }}
              >
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
              <h3
                className="mt-4 text-[2.8rem] leading-[1.08]"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: 700,
                  letterSpacing: "-0.012em",
                }}
              >
                {p.title}
              </h3>
              <div
                className="mt-4 flex items-center justify-between border-t pt-4"
                style={{ borderColor: "var(--tpl-line)" }}
              >
                <p
                  className="text-base"
                  style={{
                    color: "var(--tpl-muted)",
                    fontWeight: 500,
                  }}
                >
                  {p.date}
                </p>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 text-[1.75rem] transition hover:opacity-80"
                  style={{ color: "var(--tpl-ink)", fontWeight: 600 }}
                >
                  Learn more
                  <BorstArrow className="h-3.5 w-3.5" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-end">
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
