import type { TemplateTheme } from "../types";

type SvgProps = {
  seed?: number;
  theme: TemplateTheme;
  className?: string;
};

const idFor = (slug: string, kind: string, seed: number) => `svg-${slug}-${kind}-${seed}`;

export function Hero({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "hero", seed);
  return (
    <svg viewBox="0 0 800 800" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A clean abstract tooth-arc composition with a soft blue accent dot</title>
      <rect width="800" height="800" fill={theme.palette.card} />
      <circle cx="400" cy="380" r="240" fill={theme.palette.accentSoft} />
      <path
        d="M 240 380 Q 240 220 400 220 Q 560 220 560 380 Q 560 540 480 600 Q 460 620 440 600 Q 420 580 420 540 Q 420 500 380 500 Q 340 500 340 540 Q 340 580 320 600 Q 300 620 280 600 Q 240 540 240 380 Z"
        fill={theme.palette.bg}
        stroke={theme.palette.line}
        strokeWidth="1"
      />
      <circle cx="560" cy="220" r="20" fill={theme.palette.accent} />
      <line x1="120" y1="700" x2="680" y2="700" stroke={theme.palette.line} strokeWidth="1" />
      <text
        x="120"
        y="740"
        fontFamily="sans-serif"
        fontSize="18"
        fill={theme.palette.mutedInk}
        style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}
      >
        Calm care, on time
      </text>
    </svg>
  );
}

export function Tile({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "tile", seed);
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A small clinical-style abstract tile</title>
      <rect width="400" height="400" fill={theme.palette.accentSoft} />
      <circle cx="200" cy="200" r="80" fill={theme.palette.bg} stroke={theme.palette.accent} strokeWidth="2" />
      <circle cx="200" cy="200" r="14" fill={theme.palette.accent} />
    </svg>
  );
}

export function Portrait({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "portrait", seed);
  return (
    <svg viewBox="0 0 600 800" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A calm portrait illustration using soft Scandinavian-style abstract shapes</title>
      <rect width="600" height="800" fill={theme.palette.card} />
      <rect x="40" y="40" width="520" height="720" rx="24" fill={theme.palette.accentSoft} />
      <circle cx="300" cy="340" r="120" fill={theme.palette.bg} />
      <path
        d="M 180 540 Q 300 460 420 540 L 420 720 L 180 720 Z"
        fill={theme.palette.bg}
      />
      <circle cx="430" cy="220" r="32" fill={theme.palette.accent} />
    </svg>
  );
}

export function Wide({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "wide", seed);
  return (
    <svg viewBox="0 0 1600 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A wide composition of three soft circles representing calm and routine</title>
      <rect width="1600" height="400" fill={theme.palette.card} />
      <circle cx="400" cy="200" r="120" fill={theme.palette.accentSoft} />
      <circle cx="800" cy="200" r="140" fill={theme.palette.accentSoft} />
      <circle cx="1200" cy="200" r="120" fill={theme.palette.accentSoft} />
      <circle cx="400" cy="200" r="10" fill={theme.palette.accent} />
      <circle cx="800" cy="200" r="14" fill={theme.palette.accent} />
      <circle cx="1200" cy="200" r="10" fill={theme.palette.accent} />
    </svg>
  );
}

export function Thumb({ theme, className }: { theme: TemplateTheme; className?: string }) {
  const id = idFor(theme.meta.slug, "thumb", 0);
  return (
    <svg
      viewBox="0 0 1280 800"
      className={className}
      role="img"
      aria-labelledby={`${id}-t`}
      preserveAspectRatio="xMidYMid slice"
    >
      <title id={`${id}-t`}>Northwind Dental template preview</title>
      <desc id={`${id}-d`}>White background, soft blue tooth-arc abstract, calm modern grid</desc>
      <rect width="1280" height="800" fill={theme.palette.bg} />
      <rect x="60" y="60" width="1160" height="680" rx="24" fill={theme.palette.card} />
      <circle cx="640" cy="380" r="220" fill={theme.palette.accentSoft} />
      <path
        d="M 480 380 Q 480 220 640 220 Q 800 220 800 380 Q 800 540 720 600 Q 700 620 680 600 Q 660 580 660 540 Q 660 500 640 500 Q 620 500 620 540 Q 620 580 600 600 Q 580 620 560 600 Q 480 540 480 380 Z"
        fill={theme.palette.bg}
        stroke={theme.palette.line}
        strokeWidth="2"
      />
      <circle cx="800" cy="220" r="22" fill={theme.palette.accent} />
      <text
        x="640"
        y="700"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="700"
        fontSize="56"
        fill={theme.palette.ink}
        style={{ letterSpacing: "-0.022em" }}
      >
        Northwind Dental
      </text>
      <text
        x="640"
        y="740"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="18"
        fill={theme.palette.mutedInk}
        style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
      >
        Calm care &middot; On time
      </text>
    </svg>
  );
}
