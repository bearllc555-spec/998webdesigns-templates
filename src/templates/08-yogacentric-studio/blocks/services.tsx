import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { theme } from "../theme";
import { content, serviceImages } from "../content";

export function ServicesBlock() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2
            className="text-4xl leading-tight md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
              color: "var(--tpl-ink)",
            }}
          >
            {content.services.sectionHeadline}
          </h2>
          <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "var(--tpl-muted)" }}>
            {content.services.sectionSub}
          </p>
          <Link
            href="/templates/yogacentric-studio/services"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline"
            style={{ color: "var(--tpl-ink)" }}
          >
            {content.services.sectionLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {content.services.items.map((item, i) => (
            <li
              key={item.name}
              className="overflow-hidden"
              style={{
                background: "var(--tpl-card)",
                borderRadius: "var(--tpl-radius)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={serviceImages[i]}
                alt={item.name}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6 md:p-7">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--tpl-ink)", letterSpacing: "-0.02em" }}
                >
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
