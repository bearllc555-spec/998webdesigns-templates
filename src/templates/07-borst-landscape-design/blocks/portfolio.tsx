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
  const [tile1, tile2, tile3, tile4, tile5, tile6] = portfolio;

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
        <ul className="mt-10 grid items-start gap-4 lg:grid-cols-12 lg:gap-4">
          <li className="min-h-0 min-w-0 lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <figure
                className="group relative m-0 w-full overflow-hidden"
                style={{
                  borderRadius: 20,
                  aspectRatio: IMAGE_GEOMETRY.portfolioSquareAspect,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tile1.image}
                  alt={tile1.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </figure>
              <figure
                className="group relative m-0 w-full overflow-hidden"
                style={{
                  borderRadius: 20,
                  aspectRatio: IMAGE_GEOMETRY.portfolioSquareAspect,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tile2.image}
                  alt={tile2.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </figure>
            </div>
            <figure
              className="group relative mt-4 m-0 w-full overflow-hidden"
              style={{
                borderRadius: 20,
                aspectRatio: IMAGE_GEOMETRY.portfolioWideAspect,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tile4.image}
                alt={tile4.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </figure>
          </li>
          <li className="min-h-0 min-w-0 lg:col-span-6">
            <figure
              className="group relative m-0 w-full overflow-hidden"
              style={{
                borderRadius: 20,
                aspectRatio: IMAGE_GEOMETRY.portfolioWideAspect,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tile3.image}
                alt={tile3.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </figure>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <figure
                className="group relative m-0 w-full overflow-hidden"
                style={{
                  borderRadius: 20,
                  aspectRatio: IMAGE_GEOMETRY.portfolioSquareAspect,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tile5.image}
                  alt={tile5.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </figure>
              <figure
                className="group relative m-0 w-full overflow-hidden"
                style={{
                  borderRadius: 20,
                  aspectRatio: IMAGE_GEOMETRY.portfolioSquareAspect,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tile6.image}
                  alt={tile6.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </figure>
            </div>
          </li>
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
