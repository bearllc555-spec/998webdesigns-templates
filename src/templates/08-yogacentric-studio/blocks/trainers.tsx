import Link from "next/link";
import { theme } from "../theme";
import { trainers } from "../content";

export function TrainersBlock() {
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
            Guided by passion, driven by purpose
          </h2>
          <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "var(--tpl-muted)" }}>
            Explore our team of instructors dedicated to helping you find balance, flexibility, and peace of mind.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {trainers.map((t) => (
            <li key={`${t.name}-${t.specialty}`}>
              <Link
                href="/templates/yogacentric-studio/trainers"
                className="group block"
              >
                <div
                  className="overflow-hidden"
                  style={{ borderRadius: "var(--tpl-radius)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="aspect-[3/4] w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="pt-4">
                  <span className="inline-block rounded-lg px-2.5 py-1.5 transition-colors duration-300 group-hover:bg-[#C8D8C8]">
                    <p className="text-sm font-semibold" style={{ color: "var(--tpl-ink)" }}>
                      {t.name}
                    </p>
                  </span>
                  <p className="mt-0.5 text-xs leading-snug" style={{ color: "var(--tpl-muted)" }}>
                    {t.specialty}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
