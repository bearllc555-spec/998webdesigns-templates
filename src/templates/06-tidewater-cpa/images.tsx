import type { TemplateTheme } from "../types";

type SvgProps = {
  seed?: number;
  theme: TemplateTheme;
  className?: string;
};

const idFor = (slug: string, kind: string, seed: number) => `svg-${slug}-${kind}-${seed}`;

function Grid({ color, opacity = 0.5 }: { color: string; opacity?: number }) {
  return (
    <g stroke={color} strokeWidth="1" fill="none" opacity={opacity}>
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v-${i}`} x1={80 + i * 60} y1="40" x2={80 + i * 60} y2="740" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`h-${i}`} x1="40" y1={80 + i * 60} x2="780" y2={80 + i * 60} />
      ))}
    </g>
  );
}

function AscendingBars({ accent, ink }: { accent: string; ink: string }) {
  const bars = [
    { x: 220, y: 540, h: 140 },
    { x: 320, y: 480, h: 200 },
    { x: 420, y: 420, h: 260 },
    { x: 520, y: 360, h: 320 },
    { x: 620, y: 300, h: 380 },
  ];
  return (
    <g>
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width="60"
          height={b.h}
          fill={i === bars.length - 1 ? accent : ink}
        />
      ))}
    </g>
  );
}

export function Hero({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "hero", seed);
  return (
    <svg viewBox="0 0 800 800" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A structured grid composition with ascending bars representing measured growth</title>
      <rect width="800" height="800" fill={theme.palette.card} />
      <Grid color={theme.palette.line} />
      <AscendingBars accent={theme.palette.accent} ink={theme.palette.ink} />
      <line x1="200" y1="680" x2="700" y2="680" stroke={theme.palette.ink} strokeWidth="2" />
      <text
        x="200"
        y="730"
        fontFamily="serif"
        fontWeight="600"
        fontSize="32"
        fill={theme.palette.ink}
        style={{ letterSpacing: "-0.012em" }}
      >
        Tidewater
      </text>
      <text
        x="200"
        y="760"
        fontFamily="sans-serif"
        fontSize="14"
        fill={theme.palette.mutedInk}
        style={{ letterSpacing: "0.32em", textTransform: "uppercase" }}
      >
        Partners CPA
      </text>
    </svg>
  );
}

export function Tile({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "tile", seed);
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A structured tile with stacked rectangles</title>
      <rect width="400" height="400" fill={theme.palette.card} />
      <Grid color={theme.palette.line} />
      <rect x="100" y="280" width="40" height="60" fill={theme.palette.ink} />
      <rect x="160" y="220" width="40" height="120" fill={theme.palette.ink} />
      <rect x="220" y="180" width="40" height="160" fill={theme.palette.ink} />
      <rect x="280" y="120" width="40" height="220" fill={theme.palette.accent} />
    </svg>
  );
}

export function Portrait({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "portrait", seed);
  const initials = ["MRE", "JAC", "HP", "DMW"];
  const initial = initials[(seed - 1) % initials.length];
  return (
    <svg viewBox="0 0 600 800" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A partner portrait rendered as a structured monogram</title>
      <rect width="600" height="800" fill={theme.palette.card} />
      <rect x="30" y="30" width="540" height="740" fill="none" stroke={theme.palette.line} strokeWidth="1" />
      <line x1="30" y1="200" x2="570" y2="200" stroke={theme.palette.line} />
      <line x1="30" y1="600" x2="570" y2="600" stroke={theme.palette.line} />
      <text
        x="300"
        y="450"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="600"
        fontSize="180"
        fill={theme.palette.ink}
      >
        {initial}
      </text>
      <line x1="200" y1="500" x2="400" y2="500" stroke={theme.palette.accent} strokeWidth="2" />
    </svg>
  );
}

export function Wide({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "wide", seed);
  return (
    <svg viewBox="0 0 1600 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A wide data band with a four-figure statline</title>
      <rect width="1600" height="400" fill={theme.palette.card} />
      <g stroke={theme.palette.line}>
        <line x1="0" y1="80" x2="1600" y2="80" />
        <line x1="0" y1="320" x2="1600" y2="320" />
        <line x1="400" y1="80" x2="400" y2="320" />
        <line x1="800" y1="80" x2="800" y2="320" />
        <line x1="1200" y1="80" x2="1200" y2="320" />
      </g>
      <g fontFamily="serif" fontWeight="600" fontSize="80" fill={theme.palette.ink}>
        <text x="200" y="220" textAnchor="middle">
          2004
        </text>
        <text x="600" y="220" textAnchor="middle">
          4
        </text>
        <text x="1000" y="220" textAnchor="middle">
          380
        </text>
        <text x="1400" y="220" textAnchor="middle">
          12
        </text>
      </g>
      <g fontFamily="sans-serif" fontSize="14" fill={theme.palette.mutedInk} style={{ letterSpacing: "0.28em", textTransform: "uppercase" }}>
        <text x="200" y="270" textAnchor="middle">
          Founded
        </text>
        <text x="600" y="270" textAnchor="middle">
          Partners
        </text>
        <text x="1000" y="270" textAnchor="middle">
          Clients
        </text>
        <text x="1400" y="270" textAnchor="middle">
          Industries
        </text>
      </g>
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
      <title id={`${id}-t`}>Tidewater Partners CPA template preview</title>
      <desc id={`${id}-d`}>Off-white background, deep navy serif title, muted gold ascending bars, strict grid lines</desc>
      <rect width="1280" height="800" fill={theme.palette.bg} />
      <g stroke={theme.palette.line} strokeWidth="1" opacity="0.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={80 + i * 100} y1="60" x2={80 + i * 100} y2="740" />
        ))}
      </g>
      <g>
        <rect x="240" y="500" width="80" height="180" fill={theme.palette.ink} />
        <rect x="340" y="440" width="80" height="240" fill={theme.palette.ink} />
        <rect x="440" y="380" width="80" height="300" fill={theme.palette.ink} />
        <rect x="540" y="320" width="80" height="360" fill={theme.palette.accent} />
      </g>
      <line x1="240" y1="700" x2="800" y2="700" stroke={theme.palette.ink} strokeWidth="2" />
      <text
        x="700"
        y="540"
        fontFamily="serif"
        fontWeight="600"
        fontSize="84"
        fill={theme.palette.ink}
        style={{ letterSpacing: "-0.012em" }}
      >
        Tidewater
      </text>
      <text
        x="700"
        y="585"
        fontFamily="sans-serif"
        fontSize="22"
        fill={theme.palette.mutedInk}
        style={{ letterSpacing: "0.32em", textTransform: "uppercase" }}
      >
        Partners CPA
      </text>
      <line x1="700" y1="610" x2="900" y2="610" stroke={theme.palette.accent} strokeWidth="2" />
    </svg>
  );
}
