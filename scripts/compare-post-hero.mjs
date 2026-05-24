/**
 * Capture hero + first band region for GardenView vs Borst (desktop + mobile).
 * Usage: node scripts/compare-post-hero.mjs
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "compare");
const CLIP_HEIGHT = 1100;

const TARGETS = [
  {
    name: "gardenview-post-hero",
    url: "https://gardenviewtemplate.webflow.io/home-pages/home-v1",
  },
  {
    name: "borst-post-hero",
    url: "https://998webdesigns-designs.vercel.app/mockups/borst-landscape-design",
  },
];

const VIEWPORTS = [
  { suffix: "desktop", width: 1440, height: 900 },
  { suffix: "mobile", width: 390, height: 844 },
];

async function capture(page, outPath) {
  await page.screenshot({
    path: outPath,
    type: "png",
    clip: { x: 0, y: 0, width: page.viewportSize().width, height: CLIP_HEIGHT },
  });
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    for (const t of TARGETS) {
      const page = await ctx.newPage();
      console.log(`Loading ${t.url} (${vp.suffix})`);
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(2500);
      const outPath = join(OUT, `${t.name}-${vp.suffix}.png`);
      await capture(page, outPath);
      console.log(`Saved ${outPath}`);
      await page.close();
    }
    await ctx.close();
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
