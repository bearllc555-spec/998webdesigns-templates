import Link from "next/link";
import { theme } from "../theme";
import { portfolio } from "../content";
import {
  BORST_CONTAINER,
  BORST_SECTION_PY,
  borstPrimaryBtn,
} from "../borst-ui";
import { IMAGE_GEOMETRY } from "../image-geometry";

export function PortfolioBlock() {
  const layout = [
    { aspect: IMAGE_GEOMETRY.portfolioSquareAspect, span: "lg:col-span-3" },
    { aspect: IMAGE_GEOMETRY.portfolioSquareAspect, span: "lg:col-span-3" },
    { aspect: IMAGE_GEOMETRY.portfolioWideAspect, span: "lg:col-span-6" },
    { aspect: IMAGE_GEOMETRY.portfolioWideAspect, span: "lg:col-span-6" },
    { aspect: IMAGE_GEOMETRY.portfolioSquareAspect, span: "lg:col-span-3" },
    { aspect: IMAGE_GEOMETRY.portfolioSquareAspect, span: "lg:col-span-3" },
  ] as const;

  return (
    <section className="overflow-visible" style={{ background: "var(--tpl-bg)" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-center text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.03]"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: "-0.02em",
            }}
          >
            Our past projects of landscaping work
          </h2>
        </div>
        <ul className="mt-10 grid grid-cols-2 items-start gap-4 lg:grid-cols-12 lg:gap-4">
          {portfolio.map((p, index) => (
            <li
              key={p.title}
              className={`min-h-0 min-w-0 col-span-1 ${layout[index]?.span ?? "lg:col-span-3"}`}
            >
              <figure
                className="group relative m-0 w-full overflow-hidden"
                style={{
                  borderRadius: 20,
                  aspectRatio: layout[index]?.aspect ?? IMAGE_GEOMETRY.portfolioSquareAspect,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: index === 3 ? "center 38%" : "center" }}
                />
              </figure>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link
            href={theme.primaryCta.href}
            className="inline-flex items-center justify-center px-8 py-3 text-sm transition hover:opacity-90"
            style={borstPrimaryBtn}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
