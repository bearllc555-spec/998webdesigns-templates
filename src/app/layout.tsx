import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Source_Sans_3,
  Fraunces,
  Inter,
  Manrope,
  Archivo,
  Archivo_Black,
  Cardo,
  Playfair_Display,
  IBM_Plex_Sans,
  Newsreader,
  DM_Serif_Display,
  Lora,
  Spectral,
  Plus_Jakarta_Sans,
  DM_Sans,
  Outfit,
  Bricolage_Grotesque,
  Instrument_Serif,
  Familjen_Grotesk,
} from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  weight: ["400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: ["400"],
  display: "swap",
});

const cardo = Cardo({
  subsets: ["latin"],
  variable: "--font-cardo",
  weight: ["400", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  weight: ["400"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
});

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fontVariables = [
  GeistSans.variable,
  cormorant.variable,
  sourceSans.variable,
  fraunces.variable,
  inter.variable,
  manrope.variable,
  archivo.variable,
  archivoBlack.variable,
  cardo.variable,
  playfair.variable,
  ibmPlex.variable,
  newsreader.variable,
  dmSerifDisplay.variable,
  lora.variable,
  spectral.variable,
  plusJakarta.variable,
  dmSans.variable,
  outfit.variable,
  bricolage.variable,
  instrumentSerif.variable,
  familjenGrotesk.variable,
].join(" ");

export const metadata: Metadata = {
  title: "Design mockups | 998 web designs",
  description:
    "A library of handcrafted design concepts. Pick a starting point. We customize every design and deliver to your business in 5 to 7 days.",
  metadataBase: new URL("https://998webdesigns-designs.vercel.app"),
  openGraph: {
    title: "Design mockups | 998 web designs",
    description:
      "Handcrafted design concepts for small businesses. Pick a starting point — we customize and deliver in 5 to 7 days.",
    url: "https://998webdesigns-designs.vercel.app",
    siteName: "998 web designs",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
