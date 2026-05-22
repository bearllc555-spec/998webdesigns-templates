"use client";

import { useState } from "react";
import Link from "next/link";

const SAGE = "#C8D8C8";
const SAGE_INK = "#131313";

interface YcBtnProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** dark variant (ink bg + white text, e.g. inside featured card) */
  dark?: boolean;
  /** ghost variant (translucent bg, e.g. hero secondary CTA) */
  ghost?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function YcBtn({ href, children, className = "", dark = false, ghost = false, onClick }: YcBtnProps) {
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = ghost
    ? {
        background: hovered ? SAGE : "rgba(255,255,255,0.12)",
        color: hovered ? SAGE_INK : "#FFFFFF",
        border: hovered ? `1px solid ${SAGE}` : "1px solid rgba(255,255,255,0.35)",
        backdropFilter: hovered ? undefined : "blur(8px)",
      }
    : dark
    ? {
        background: hovered ? SAGE : "var(--tpl-ink)",
        color: hovered ? SAGE_INK : "#FFFFFF",
        border: "none",
      }
    : {
        background: hovered ? SAGE : "var(--tpl-accent)",
        color: hovered ? SAGE_INK : "var(--tpl-accent-ink)",
        border: hovered ? `1px solid ${SAGE}` : "1px solid rgba(19,19,19,0.12)",
      };

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold ${className}`}
      style={{
        ...base,
        borderRadius: 999,
        transition: "background 0.2s, color 0.2s, border-color 0.2s",
      }}
    >
      {children}
    </Link>
  );
}
