import { chromium } from "playwright";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 1200 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
await page.goto("https://998webdesigns-designs.vercel.app/", { waitUntil: "networkidle" });
await page.evaluate(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const max = document.documentElement.scrollHeight;
  for (let y = 0; y <= max; y += 800) { window.scrollTo(0, y); await sleep(200); }
  window.scrollTo(0, 0);
});
await page.waitForFunction(
  () => Array.from(document.images).filter(i => i.getAttribute("src")).every(i => i.complete && i.naturalWidth > 0),
  { timeout: 30000 }
).catch(() => {});
await page.waitForTimeout(2000);

// Screenshot upper half (first 4 rows) and lower half (rows 9+) separately at full quality
await page.evaluate(() => window.scrollTo(0, 1500));
await page.waitForTimeout(800);
await page.screenshot({ path: "verify-mid.png", fullPage: false, type: "png" });

await page.evaluate(() => window.scrollTo(0, 3000));
await page.waitForTimeout(800);
await page.screenshot({ path: "verify-bottom.png", fullPage: false, type: "png" });

await browser.close();
console.log("verify-mid.png and verify-bottom.png saved");
