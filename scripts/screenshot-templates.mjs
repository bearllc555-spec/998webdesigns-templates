/**
 * Screenshot every template homepage at 1200-wide, full-page, save to public/thumbs/.
 *
 * Run:
 *   1. In one terminal:  npm run dev -- -p 3001
 *   2. In another:       node scripts/screenshot-templates.mjs
 *
 * Re-run after adding new templates to data/templates.ts (script is idempotent — overwrites).
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "thumbs");

const SLUGS = [
  // 57 industry homepages (matches data/templates.ts)
  "barber","beauty-salon","elder-care","gym-and-fitness","medical","pizza-parlor","restaurant","spa-salon","yoga-and-meditation",
  "accounting","consulting","finance","lawyer","real-estate","recruitment",
  "clothing-store","decor-store","fashion-store","jewellery-store","product-showcase",
  "blogger","branding-agency","branding-studio","design-agency","digital-agency","digital-agency-rtl","magazine","photography","web-agency",
  "application","cryptocurrency","data-analysis","ebook","elearning","green-energy","hosting","it-business","marketing","modern-business","seo-agency","startup",
  "conference","hotel-and-resort","music-onepage","travel-agency","wedding-invitation",
  "freelancer","horizontal-portfolio","interactive-portfolio","minimal-portfolio","scattered-portfolio","vertical-portfolio",
  "architecture","business","charity","corporate","logistics",
];

const BASE = process.env.BASE_URL || "http://localhost:3001";

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } });

  let done = 0;
  const failed = [];
  const start = Date.now();

  for (const slug of SLUGS) {
    const page = await ctx.newPage();
    const url = `${BASE}/t/demo-${slug}.html`;
    const out = join(OUT_DIR, `${slug}.jpg`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });

      // Force lazy-load <img>s to fetch by scrolling end-to-end before snap.
      await page.evaluate(async () => {
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        const max = document.documentElement.scrollHeight;
        for (let y = 0; y <= max; y += 800) {
          window.scrollTo(0, y);
          await sleep(120);
        }
        window.scrollTo(0, 0);
      });

      // Wait until every <img> with a src is complete (or timeout after 25s).
      await page.waitForFunction(
        () => {
          const imgs = Array.from(document.images).filter((i) => i.getAttribute("src"));
          if (imgs.length === 0) return true;
          return imgs.every((i) => i.complete && i.naturalWidth > 0);
        },
        { timeout: 25000 }
      ).catch(() => { /* proceed even if some images timed out */ });

      await page.waitForTimeout(800);
      await page.screenshot({ path: out, type: "jpeg", quality: 78, fullPage: true });
      done++;
      const ms = Date.now() - start;
      console.log(`  [${String(done).padStart(2, "0")}/${SLUGS.length}] ${slug}  (+${(ms / 1000).toFixed(1)}s)`);
    } catch (err) {
      failed.push({ slug, err: err.message });
      console.log(`  [FAIL] ${slug}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  console.log(`\nFinished in ${((Date.now() - start) / 1000).toFixed(1)}s`);
  console.log(`Success: ${done}/${SLUGS.length}`);
  if (failed.length) {
    console.log(`Failed:`);
    failed.forEach((f) => console.log(`  ${f.slug}: ${f.err}`));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
