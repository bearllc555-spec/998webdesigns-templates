import type { TemplateTheme } from "../types";

type SvgProps = {
  seed?: number;
  theme: TemplateTheme;
  className?: string;
};

const titleId = (slug: string, kind: string, seed: number) =>
  `svg-${slug}-${kind}-${seed}`;

export function Hero({ seed = 1, theme, className }: SvgProps) {
  const id = titleId(theme.meta.slug, "hero", seed);
  return (
    <svg
      viewBox="0 0 800 1000"
      className={className}
      role="img"
      aria-labelledby={`${id}-t`}
      preserveAspectRatio="xMidYMid slice"
    >
      <title id={`${id}-t`}>An editorial composition of a serif initial and three vertical columns</title>
      <rect width="800" height="1000" fill={theme.palette.card} />
      <line x1="60" y1="120" x2="740" y2="120" stroke={theme.palette.line} strokeWidth="1" />
      <line x1="60" y1="900" x2="740" y2="900" stroke={theme.palette.line} strokeWidth="1" />
      <text
        x="60"
        y="640"
        fontFamily="serif"
        fontWeight="600"
        fontSize="640"
        fill={theme.palette.ink}
        style={{ letterSpacing: "-0.06em" }}
      >
        H
      </text>
      <g stroke={theme.palette.accent} strokeWidth="3" fill="none">
        <line x1="520" y1="200" x2="520" y2="820" />
        <line x1="600" y1="200" x2="600" y2="820" />
        <line x1="680" y1="200" x2="680" y2="820" />
      </g>
      <line x1="520" y1="820" x2="680" y2="820" stroke={theme.palette.accent} strokeWidth="3" />
      <text
        x="60"
        y="960"
        fontFamily="sans-serif"
        fontSize="22"
        fill={theme.palette.mutedInk}
        style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
      >
        Est 1987 &middot; Portsmouth NH
      </text>
    </svg>
  );
}

export function Tile({ seed = 1, theme, className }: SvgProps) {
  const id = titleId(theme.meta.slug, "tile", seed);
  const initials = ["I", "II", "III", "IV", "V", "VI"];
  const roman = initials[(seed - 1) % initials.length];
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-labelledby={`${id}-t`}
    >
      <title id={`${id}-t`}>Roman numeral tile in editorial serif</title>
      <rect width="400" height="400" fill={theme.palette.card} />
      <line x1="40" y1="80" x2="360" y2="80" stroke={theme.palette.line} />
      <line x1="40" y1="320" x2="360" y2="320" stroke={theme.palette.line} />
      <text
        x="200"
        y="240"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="600"
        fontSize="180"
        fill={theme.palette.ink}
      >
        {roman}
      </text>
      <line x1="160" y1="280" x2="240" y2="280" stroke={theme.palette.accent} strokeWidth="2" />
    </svg>
  );
}

export function Portrait({ seed = 1, theme, className }: SvgProps) {
  const id = titleId(theme.meta.slug, "portrait", seed);
  const letters = ["C", "H", "M", "A", "L", "R"];
  const letter = letters[(seed - 1) % letters.length];
  return (
    <svg
      viewBox="0 0 600 800"
      className={className}
      role="img"
      aria-labelledby={`${id}-t`}
    >
      <title id={`${id}-t`}>An attorney portrait represented by a single serif initial framed in hairlines</title>
      <rect width="600" height="800" fill={theme.palette.card} />
      <rect
        x="30"
        y="30"
        width="540"
        height="740"
        fill="none"
        stroke={theme.palette.line}
        strokeWidth="1"
      />
      <rect
        x="120"
        y="160"
        width="360"
        height="460"
        fill={theme.palette.accentSoft}
      />
      <text
        x="300"
        y="510"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="600"
        fontSize="320"
        fill={theme.palette.ink}
      >
        {letter}
      </text>
      <line x1="120" y1="660" x2="480" y2="660" stroke={theme.palette.accent} strokeWidth="2" />
    </svg>
  );
}

export function Wide({ seed = 1, theme, className }: SvgProps) {
  const id = titleId(theme.meta.slug, "wide", seed);
  return (
    <svg
      viewBox="0 0 1600 400"
      className={className}
      role="img"
      aria-labelledby={`${id}-t`}
    >
      <title id={`${id}-t`}>A wide editorial rule bracketed by serif numerals</title>
      <rect width="1600" height="400" fill={theme.palette.card} />
      <text x="120" y="260" fontFamily="serif" fontWeight="600" fontSize="200" fill={theme.palette.ink}>
        1987
      </text>
      <text
        x="1480"
        y="260"
        textAnchor="end"
        fontFamily="serif"
        fontWeight="600"
        fontSize="200"
        fill={theme.palette.ink}
      >
        2026
      </text>
      <line x1="380" y1="200" x2="1240" y2="200" stroke={theme.palette.accent} strokeWidth="3" />
      <circle cx="380" cy="200" r="6" fill={theme.palette.accent} />
      <circle cx="1240" cy="200" r="6" fill={theme.palette.accent} />
      <text
        x="800"
        y="320"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="22"
        fill={theme.palette.mutedInk}
        style={{ letterSpacing: "0.32em", textTransform: "uppercase" }}
      >
        Thirty-nine years of counsel
      </text>
    </svg>
  );
}

export function Thumb({ theme, className }: { theme: TemplateTheme; className?: string }) {
  const id = titleId(theme.meta.slug, "thumb", 0);
  return (
    <svg
      viewBox="0 0 1280 800"
      className={className}
      role="img"
      aria-labelledby={`${id}-t`}
      preserveAspectRatio="xMidYMid slice"
    >
      <title id={`${id}-t`}>Haldwell and Carr template preview, editorial serif composition</title>
      <desc id={`${id}-d`}>Cream background, deep navy serif H initial, three brass columns, hairline rules</desc>
      <rect width="1280" height="800" fill={theme.palette.bg} />
      <line x1="80" y1="100" x2="1200" y2="100" stroke={theme.palette.line} strokeWidth="1" />
      <line x1="80" y1="700" x2="1200" y2="700" stroke={theme.palette.line} strokeWidth="1" />
      <text
        x="80"
        y="540"
        fontFamily="serif"
        fontWeight="600"
        fontSize="520"
        fill={theme.palette.ink}
        style={{ letterSpacing: "-0.06em" }}
      >
        H
      </text>
      <g stroke={theme.palette.accent} strokeWidth="3" fill="none">
        <line x1="820" y1="160" x2="820" y2="640" />
        <line x1="900" y1="160" x2="900" y2="640" />
        <line x1="980" y1="160" x2="980" y2="640" />
      </g>
      <line x1="820" y1="640" x2="980" y2="640" stroke={theme.palette.accent} strokeWidth="3" />
      <text
        x="1100"
        y="540"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="500"
        fontSize="44"
        fill={theme.palette.ink}
      >
        Haldwell &amp; Carr
      </text>
      <text
        x="1100"
        y="580"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="16"
        fill={theme.palette.mutedInk}
        style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
      >
        Est 1987
      </text>
    </svg>
  );
}
