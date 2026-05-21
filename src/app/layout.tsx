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
} from "next/font/google";
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

const fontVariables = [
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
].join(" ");

export const metadata: Metadata = {
  title: "Template library | 998 web designs",
  description:
    "A library of handcrafted templates. Pick a starting point. We customize it to your business in 5 to 7 days. $998, once.",
  metadataBase: new URL("https://998webdesigns-templates.vercel.app"),
  openGraph: {
    title: "Template library | 998 web designs",
    description:
      "Six handcrafted templates. Six visual languages. Pick one, we customize it to your business in 5 to 7 days.",
    url: "https://998webdesigns-templates.vercel.app",
    siteName: "998 web designs",
    type: "website",
  },
  robots: { index: false, follow: false },
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
