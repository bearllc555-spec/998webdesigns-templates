import type { TemplateTheme } from "../types";

type SvgProps = {
  seed?: number;
  theme: TemplateTheme;
  className?: string;
};

const idFor = (slug: string, kind: string, seed: number) => `svg-${slug}-${kind}-${seed}`;

function ChevronPattern({ color, opacity = 0.6 }: { color: string; opacity?: number }) {
  return (
    <g stroke={color} strokeWidth="3" fill="none" opacity={opacity}>
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => {
          const x = col * 140 + 40;
          const y = row * 80 + 40;
          return (
            <polyline
              key={`${row}-${col}`}
              points={`${x},${y + 40} ${x + 60},${y} ${x + 120},${y + 40}`}
            />
          );
        }),
      )}
    </g>
  );
}

function RoofSilhouette({ color }: { color: string }) {
  return (
    <g fill={color}>
      <polygon points="100,500 400,260 700,500 700,640 100,640" />
      <rect x="320" y="500" width="80" height="140" fill="#15171A" opacity="0.65" />
      <rect x="180" y="540" width="60" height="60" fill="#15171A" opacity="0.65" />
      <rect x="520" y="540" width="60" height="60" fill="#15171A" opacity="0.65" />
    </g>
  );
}

export function Hero({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "hero", seed);
  return (
    <svg viewBox="0 0 800 800" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>An industrial composition with a roof silhouette over a chevron pattern</title>
      <rect width="800" height="800" fill={theme.palette.bg} />
      <ChevronPattern color={theme.palette.line} opacity={1} />
      <RoofSilhouette color={theme.palette.ink} />
      <line x1="100" y1="640" x2="700" y2="640" stroke={theme.palette.accent} strokeWidth="6" />
      <text
        x="400"
        y="730"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="48"
        fill={theme.palette.accent}
        style={{ letterSpacing: "0.2em" }}
      >
        IRONCLAD
      </text>
    </svg>
  );
}

export function Tile({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "tile", seed);
  const labels = ["01", "02", "03", "04", "05", "06"];
  const label = labels[(seed - 1) % labels.length];
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A numbered industrial tile</title>
      <rect width="400" height="400" fill={theme.palette.card} />
      <ChevronPattern color={theme.palette.line} />
      <text
        x="200"
        y="240"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="180"
        fill={theme.palette.accent}
      >
        {label}
      </text>
      <line x1="120" y1="290" x2="280" y2="290" stroke={theme.palette.accent} strokeWidth="6" />
    </svg>
  );
}

export function Portrait({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "portrait", seed);
  return (
    <svg viewBox="0 0 600 800" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A crew member silhouette in a hard-hat against an industrial backdrop</title>
      <rect width="600" height="800" fill={theme.palette.bg} />
      <ChevronPattern color={theme.palette.line} />
      <g fill={theme.palette.ink}>
        <path d="M 200 280 Q 300 220 400 280 L 400 320 L 200 320 Z" />
        <rect x="240" y="320" width="120" height="240" />
        <rect x="180" y="360" width="60" height="160" />
        <rect x="360" y="360" width="60" height="160" />
      </g>
      <rect x="240" y="320" width="120" height="20" fill={theme.palette.accent} />
    </svg>
  );
}

export function Wide({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "wide", seed);
  return (
    <svg viewBox="0 0 1600 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A wide stat band with three figures separated by chevrons</title>
      <rect width="1600" height="400" fill={theme.palette.card} />
      <ChevronPattern color={theme.palette.line} />
      <g fill={theme.palette.accent}>
        <text x="200" y="220" fontFamily="sans-serif" fontWeight="900" fontSize="140">
          39
        </text>
        <text x="700" y="220" fontFamily="sans-serif" fontWeight="900" fontSize="140">
          4,200
        </text>
        <text x="1240" y="220" fontFamily="sans-serif" fontWeight="900" fontSize="140">
          100%
        </text>
      </g>
      <g fill={theme.palette.ink}>
        <text x="200" y="280" fontFamily="sans-serif" fontSize="22" style={{ letterSpacing: "0.2em" }}>
          YEARS
        </text>
        <text x="700" y="280" fontFamily="sans-serif" fontSize="22" style={{ letterSpacing: "0.2em" }}>
          ROOFS
        </text>
        <text x="1240" y="280" fontFamily="sans-serif" fontSize="22" style={{ letterSpacing: "0.2em" }}>
          LOCAL
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
      <title id={`${id}-t`}>Ironclad Roofing template preview</title>
      <desc id={`${id}-d`}>Charcoal background, safety-orange accent, bold uppercase title, chevron pattern, roof silhouette</desc>
      <rect width="1280" height="800" fill={theme.palette.bg} />
      <ChevronPattern color={theme.palette.line} />
      <g transform="translate(80 100) scale(1.2)">
        <RoofSilhouette color={theme.palette.ink} />
      </g>
      <line x1="200" y1="660" x2="800" y2="660" stroke={theme.palette.accent} strokeWidth="8" />
      <text
        x="80"
        y="740"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="120"
        fill={theme.palette.ink}
        style={{ letterSpacing: "0.02em" }}
      >
        IRONCLAD
      </text>
      <text
        x="900"
        y="740"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="40"
        fill={theme.palette.accent}
        style={{ letterSpacing: "0.18em" }}
      >
        SINCE 1987
      </text>
    </svg>
  );
}
