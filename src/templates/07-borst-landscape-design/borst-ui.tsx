import type { CSSProperties, ReactNode } from "react";

export const BORST_CONTAINER = "mx-auto max-w-7xl px-5 md:px-8";
export const BORST_SECTION_PY = "py-16 md:py-24";

export function BorstArrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 8h9M9 4.5L12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BorstEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-xs"
      style={{
        color: "var(--tpl-accent)",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        fontFamily: "var(--tpl-font-body)",
        fontWeight: 600,
      }}
    >
      {children}
    </p>
  );
}

export function BorstEyebrowOnDark({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-xs"
      style={{
        color: "var(--tpl-accent-soft)",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        fontFamily: "var(--tpl-font-body)",
        fontWeight: 600,
      }}
    >
      {children}
    </p>
  );
}

export const borstPrimaryBtn: CSSProperties = {
  background: "var(--tpl-accent)",
  color: "var(--tpl-accent-ink)",
  borderRadius: 999,
  fontFamily: "var(--tpl-font-body)",
  fontWeight: 600,
};

export const borstOutlineBtn: CSSProperties = {
  background: "var(--tpl-bg)",
  color: "var(--tpl-ink)",
  border: "1px solid var(--tpl-line)",
  borderRadius: 999,
  fontFamily: "var(--tpl-font-body)",
  fontWeight: 500,
};
