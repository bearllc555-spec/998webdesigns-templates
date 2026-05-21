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
    <svg viewBox="0 0 1000 700" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A serene horizon line with a single sage-colored sun</title>
      <rect width="1000" height="700" fill={theme.palette.bg} />
      <line x1="0" y1="460" x2="1000" y2="460" stroke={theme.palette.line} strokeWidth="1" />
      <line x1="0" y1="480" x2="1000" y2="480" stroke={theme.palette.line} strokeWidth="1" />
      <circle cx="620" cy="380" r="120" fill={theme.palette.accentSoft} />
      <circle cx="620" cy="380" r="80" fill={theme.palette.accent} opacity="0.85" />
      <line x1="0" y1="600" x2="1000" y2="600" stroke={theme.palette.line} strokeWidth="1" />
      <line x1="0" y1="640" x2="1000" y2="640" stroke={theme.palette.line} strokeWidth="1" />
    </svg>
  );
}

export function Tile({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "tile", seed);
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A small lotus shape composed of three ovals</title>
      <rect width="400" height="400" fill={theme.palette.card} />
      <g fill="none" stroke={theme.palette.accent} strokeWidth="2" opacity="0.85">
        <ellipse cx="200" cy="240" rx="60" ry="32" />
        <ellipse
          cx="200"
          cy="220"
          rx="60"
          ry="32"
          transform="rotate(-32 200 220)"
        />
        <ellipse
          cx="200"
          cy="220"
          rx="60"
          ry="32"
          transform="rotate(32 200 220)"
        />
      </g>
      <line x1="80" y1="290" x2="320" y2="290" stroke={theme.palette.line} />
    </svg>
  );
}

export function Portrait({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "portrait", seed);
  return (
    <svg viewBox="0 0 500 700" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A centered circle on a linen background suggesting a teacher's portrait</title>
      <rect width="500" height="700" fill={theme.palette.card} />
      <line x1="40" y1="120" x2="460" y2="120" stroke={theme.palette.line} />
      <line x1="40" y1="580" x2="460" y2="580" stroke={theme.palette.line} />
      <circle cx="250" cy="350" r="150" fill={theme.palette.accentSoft} />
      <circle cx="250" cy="350" r="110" fill={theme.palette.accent} opacity="0.75" />
    </svg>
  );
}

export function Wide({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "wide", seed);
  return (
    <svg viewBox="0 0 1600 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A long horizon line and the sun rising over the river</title>
      <rect width="1600" height="400" fill={theme.palette.bg} />
      <line x1="0" y1="250" x2="1600" y2="250" stroke={theme.palette.line} />
      <line x1="0" y1="270" x2="1600" y2="270" stroke={theme.palette.line} />
      <circle cx="1100" cy="210" r="80" fill={theme.palette.accentSoft} />
      <circle cx="1100" cy="210" r="50" fill={theme.palette.accent} opacity="0.8" />
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
      <title id={`${id}-t`}>Quietfield template preview</title>
      <desc id={`${id}-d`}>Linen background, sage-colored sun, two horizon lines, single typographic word centered</desc>
      <rect width="1280" height="800" fill={theme.palette.bg} />
      <line x1="80" y1="240" x2="1200" y2="240" stroke={theme.palette.line} strokeWidth="1" />
      <line x1="80" y1="260" x2="1200" y2="260" stroke={theme.palette.line} strokeWidth="1" />
      <circle cx="900" cy="380" r="160" fill={theme.palette.accentSoft} />
      <circle cx="900" cy="380" r="110" fill={theme.palette.accent} opacity="0.8" />
      <line x1="80" y1="540" x2="1200" y2="540" stroke={theme.palette.line} strokeWidth="1" />
      <line x1="80" y1="560" x2="1200" y2="560" stroke={theme.palette.line} strokeWidth="1" />
      <text
        x="640"
        y="680"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="80"
        fill={theme.palette.ink}
        style={{ letterSpacing: "0.005em" }}
      >
        Quietfield
      </text>
      <text
        x="640"
        y="730"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="14"
        fill={theme.palette.mutedInk}
        style={{ letterSpacing: "0.4em", textTransform: "uppercase" }}
      >
        A quieter way to begin
      </text>
    </svg>
  );
}
