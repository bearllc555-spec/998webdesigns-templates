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
      <title id={`${id}-t`}>A formal garden composition with a topiary sphere and a hedge silhouette</title>
      <rect width="800" height="800" fill={theme.palette.card} />
      <rect x="0" y="560" width="800" height="240" fill={theme.palette.accentSoft} />
      {/* horizon hedge */}
      <path
        d="M 0 560 Q 100 500 200 540 Q 300 580 400 520 Q 500 460 600 520 Q 700 580 800 540 L 800 800 L 0 800 Z"
        fill={theme.palette.accent}
        opacity="0.18"
      />
      {/* topiary sphere */}
      <circle cx="400" cy="380" r="180" fill={theme.palette.accent} opacity="0.92" />
      <circle cx="345" cy="335" r="20" fill={theme.palette.bg} opacity="0.18" />
      <rect x="392" y="540" width="16" height="40" fill={theme.palette.ink} opacity="0.55" />
      {/* terracotta planter */}
      <path
        d="M 340 580 L 460 580 L 445 660 L 355 660 Z"
        fill={theme.palette.ink}
        opacity="0.7"
      />
      <rect x="340" y="575" width="120" height="10" fill={theme.palette.ink} opacity="0.85" />
      {/* sun mark */}
      <circle cx="640" cy="180" r="42" fill={theme.palette.accent} opacity="0.85" />
    </svg>
  );
}

export function Tile({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "tile", seed);
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A simple leaf silhouette on a soft moss field</title>
      <rect width="400" height="400" fill={theme.palette.accentSoft} />
      <path
        d="M 200 100 Q 110 180 200 300 Q 290 180 200 100 Z"
        fill={theme.palette.accent}
      />
      <line x1="200" y1="100" x2="200" y2="320" stroke={theme.palette.bg} strokeWidth="3" />
    </svg>
  );
}

export function Portrait({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "portrait", seed);
  return (
    <svg viewBox="0 0 600 800" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A tall topiary in a stone urn against a cream background</title>
      <rect width="600" height="800" fill={theme.palette.card} />
      <rect x="0" y="640" width="600" height="160" fill={theme.palette.accentSoft} />
      {/* urn */}
      <path
        d="M 240 580 L 360 580 L 380 640 L 220 640 Z"
        fill={theme.palette.mutedInk}
        opacity="0.7"
      />
      <rect x="220" y="570" width="160" height="14" fill={theme.palette.mutedInk} opacity="0.85" />
      {/* topiary trunk */}
      <rect x="294" y="380" width="12" height="200" fill={theme.palette.ink} opacity="0.5" />
      {/* topiary tiers */}
      <circle cx="300" cy="380" r="80" fill={theme.palette.accent} />
      <circle cx="300" cy="260" r="65" fill={theme.palette.accent} />
      <circle cx="300" cy="170" r="50" fill={theme.palette.accent} />
    </svg>
  );
}

export function Wide({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "wide", seed);
  return (
    <svg viewBox="0 0 1600 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A wide row of clipped hedges set against a wash of cream and moss</title>
      <rect width="1600" height="400" fill={theme.palette.card} />
      <rect x="0" y="240" width="1600" height="160" fill={theme.palette.accentSoft} />
      {[120, 360, 600, 840, 1080, 1320].map((x, i) => (
        <g key={i}>
          <rect x={x - 70} y="160" width="140" height="120" fill={theme.palette.accent} rx="6" />
          <circle cx={x} cy="160" r="60" fill={theme.palette.accent} />
        </g>
      ))}
      <line x1="0" y1="280" x2="1600" y2="280" stroke={theme.palette.line} strokeWidth="2" />
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
      <title id={`${id}-t`}>Borst Landscape & Design template preview</title>
      <desc>Warm cream field with a deep boxwood-green topiary composition and serif wordmark</desc>
      <rect width="1280" height="800" fill={theme.palette.bg} />
      <rect x="60" y="60" width="1160" height="680" rx="6" fill={theme.palette.card} />
      <rect x="60" y="540" width="1160" height="200" fill={theme.palette.accentSoft} />
      {/* topiary */}
      <circle cx="640" cy="360" r="170" fill={theme.palette.accent} />
      <rect x="632" y="510" width="16" height="40" fill={theme.palette.ink} opacity="0.55" />
      <path d="M 580 550 L 700 550 L 685 620 L 595 620 Z" fill={theme.palette.ink} opacity="0.7" />
      <circle cx="900" cy="220" r="36" fill={theme.palette.accent} opacity="0.85" />
      <text
        x="640"
        y="700"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="500"
        fontSize="56"
        fill={theme.palette.ink}
        style={{ letterSpacing: "-0.018em" }}
      >
        Borst Landscape & Design
      </text>
      <text
        x="640"
        y="735"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="16"
        fill={theme.palette.mutedInk}
        style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
      >
        Allendale, NJ &middot; Since 1989
      </text>
    </svg>
  );
}
