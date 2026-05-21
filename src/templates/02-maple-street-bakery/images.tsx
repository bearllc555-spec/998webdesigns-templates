import type { TemplateTheme } from "../types";

type SvgProps = {
  seed?: number;
  theme: TemplateTheme;
  className?: string;
};

const idFor = (slug: string, kind: string, seed: number) => `svg-${slug}-${kind}-${seed}`;

function Croissant({ x, y, scale = 1, color }: { x: number; y: number; scale?: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M -60 0 C -40 -45 40 -45 60 0 C 50 25 -50 25 -60 0 Z"
        fill={color}
      />
      <path d="M -45 -8 L -35 -22" stroke="rgba(0,0,0,0.18)" strokeWidth="2" strokeLinecap="round" />
      <path d="M -20 -16 L -12 -28" stroke="rgba(0,0,0,0.18)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 8 -16 L 16 -28" stroke="rgba(0,0,0,0.18)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 30 -10 L 38 -22" stroke="rgba(0,0,0,0.18)" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

function Loaf({ x, y, scale = 1, color }: { x: number; y: number; scale?: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="0" rx="80" ry="42" fill={color} />
      <path d="M -55 -10 L -45 -28" stroke="rgba(0,0,0,0.2)" strokeWidth="3" strokeLinecap="round" />
      <path d="M -20 -22 L -10 -38" stroke="rgba(0,0,0,0.2)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 15 -22 L 25 -38" stroke="rgba(0,0,0,0.2)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 48 -10 L 58 -28" stroke="rgba(0,0,0,0.2)" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function CoffeeCup({ x, y, scale = 1, color, accent }: { x: number; y: number; scale?: number; color: string; accent: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M -45 -25 L -45 25 Q -45 45 -25 50 L 25 50 Q 45 45 45 25 L 45 -25 Z" fill={color} />
      <path d="M 45 -10 Q 70 -10 70 15 Q 70 35 45 35" fill="none" stroke={color} strokeWidth="8" />
      <path
        d="M -25 -50 Q -15 -65 -25 -78"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M 0 -54 Q 10 -70 0 -84"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M 25 -50 Q 35 -65 25 -78"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
    </g>
  );
}

export function Hero({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "hero", seed);
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      role="img"
      aria-labelledby={`${id}-t`}
    >
      <title id={`${id}-t`}>A warm composition of a baker's loaf, a butter croissant, and an espresso cup with rising steam</title>
      <rect width="800" height="800" fill={theme.palette.accentSoft} />
      <Loaf x={260} y={300} scale={1.6} color={theme.palette.accent} />
      <Croissant x={540} y={460} scale={1.4} color={theme.palette.ink} />
      <CoffeeCup x={200} y={580} scale={0.9} color={theme.palette.ink} accent={theme.palette.accent} />
      <path
        d="M 100 110 Q 140 90 180 110 T 260 110"
        fill="none"
        stroke={theme.palette.ink}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 600 700 Q 640 680 680 700"
        fill="none"
        stroke={theme.palette.ink}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function Tile({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "tile", seed);
  const which = seed % 3;
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A small bakery motif tile</title>
      <rect width="400" height="400" fill={theme.palette.accentSoft} />
      {which === 0 && <Croissant x={200} y={210} scale={2} color={theme.palette.accent} />}
      {which === 1 && <Loaf x={200} y={220} scale={1.6} color={theme.palette.accent} />}
      {which === 2 && <CoffeeCup x={200} y={250} scale={1.3} color={theme.palette.ink} accent={theme.palette.accent} />}
    </svg>
  );
}

export function Portrait({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "portrait", seed);
  const initials = ["HR", "MD", "JS", "TC"];
  const initial = initials[(seed - 1) % initials.length];
  return (
    <svg viewBox="0 0 600 800" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A baker portrait shown as initials in a warm illustrated card</title>
      <rect width="600" height="800" fill={theme.palette.card} />
      <rect x="40" y="40" width="520" height="720" fill={theme.palette.accentSoft} />
      <circle cx="300" cy="360" r="160" fill={theme.palette.accent} opacity="0.92" />
      <text
        x="300"
        y="400"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="700"
        fontSize="120"
        fill={theme.palette.accentInk}
      >
        {initial}
      </text>
      <path
        d="M 150 580 Q 220 560 300 580 T 450 580"
        fill="none"
        stroke={theme.palette.ink}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function Wide({ seed = 1, theme, className }: SvgProps) {
  const id = idFor(theme.meta.slug, "wide", seed);
  return (
    <svg viewBox="0 0 1600 400" className={className} role="img" aria-labelledby={`${id}-t`}>
      <title id={`${id}-t`}>A row of bakery motifs across a long banner</title>
      <rect width="1600" height="400" fill={theme.palette.accentSoft} />
      <Loaf x={220} y={220} scale={1.4} color={theme.palette.accent} />
      <Croissant x={560} y={210} scale={1.6} color={theme.palette.ink} />
      <CoffeeCup x={900} y={260} scale={1.3} color={theme.palette.ink} accent={theme.palette.accent} />
      <Loaf x={1240} y={220} scale={1.2} color={theme.palette.accent} />
      <Croissant x={1460} y={220} scale={1.1} color={theme.palette.ink} />
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
      <title id={`${id}-t`}>Maple Street Bakery template preview</title>
      <desc id={`${id}-d`}>Oat milk background, terracotta accent, hand-illustrated loaf, croissant, and steaming coffee cup</desc>
      <rect width="1280" height="800" fill={theme.palette.bg} />
      <rect x="60" y="60" width="1160" height="680" fill={theme.palette.accentSoft} />
      <Loaf x={420} y={360} scale={2} color={theme.palette.accent} />
      <Croissant x={840} y={430} scale={2} color={theme.palette.ink} />
      <CoffeeCup x={280} y={560} scale={1.4} color={theme.palette.ink} accent={theme.palette.accent} />
      <text
        x="640"
        y="700"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="700"
        fontSize="56"
        fill={theme.palette.ink}
        fontStyle="italic"
      >
        Maple Street
      </text>
      <path
        d="M 480 730 Q 580 720 640 730 T 800 730"
        fill="none"
        stroke={theme.palette.accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
