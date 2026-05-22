import Link from "next/link";
import { theme } from "../theme";
import { content } from "../content";
import { extendedPalette } from "../theme";
import { BORST_CONTAINER, BORST_SECTION_PY, BorstArrow, borstPrimaryBtn } from "../borst-ui";

export function CtaDarkBlock() {
  return (
    <section style={{ background: extendedPalette.darkSection }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY} text-center`}>
        <h2
          className="mx-auto max-w-3xl text-4xl leading-tight md:text-5xl lg:text-6xl"
          style={{
            color: "#FFFFFF",
            fontFamily: "var(--tpl-font-display)",
            fontWeight: theme.type.displayWeight,
            letterSpacing: theme.type.displayTracking,
          }}
        >
          {content.ctaBanner.sub}
        </h2>
        <div className="mt-9 flex justify-center">
          <Link
            href={content.ctaBanner.cta.href}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm transition hover:opacity-90"
            style={borstPrimaryBtn}
          >
            {content.ctaBanner.cta.label}
            <BorstArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
