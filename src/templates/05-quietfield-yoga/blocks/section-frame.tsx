import type { ReactNode } from "react";

export function SectionFrame({
  label,
  children,
  tight = false,
}: {
  label: string;
  children: ReactNode;
  tight?: boolean;
}) {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className={`mx-auto max-w-3xl px-5 md:px-6 ${tight ? "py-20 md:py-24" : "py-28 md:py-40"}`}>
        <div className="text-center">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-muted)",
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            {label}
          </p>
          <div
            className="mx-auto mt-5 h-px w-32"
            style={{ background: "var(--tpl-line)" }}
            aria-hidden="true"
          />
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
