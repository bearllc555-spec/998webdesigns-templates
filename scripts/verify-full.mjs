import { chromium } from "playwright";
const URL = "https://998webdesigns-designs.vercel.app/";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle", timeout: 45000 });
await page.evaluate(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const max = document.documentElement.scrollHeight;
  for (let y = 0; y <= max; y += 1000) { window.scrollTo(0, y); await sleep(150); }
  window.scrollTo(0, 0);
});
await page.waitForFunction(
  () => Array.from(document.images).filter((i) => i.getAttribute("src")).every((i) => i.complete && i.naturalWidth > 0),
  { timeout: 25000 }
).catch(() => {});
await page.waitForTimeout(1500);
const report = await page.evaluate(() => {
  const imgs = Array.from(document.images).filter((i) => (i.getAttribute("src") || "").includes("/thumbs/"));
  const loaded = imgs.filter((i) => i.complete && i.naturalWidth > 0).length;
  return { total: imgs.length, loaded, failed: imgs.length - loaded };
});
console.log(`Total thumb <img>: ${report.total}`);
console.log(`Successfully loaded: ${report.loaded}`);
console.log(`Failed to load: ${report.failed}`);
await page.screenshot({ path: "verify-full.png", fullPage: true, type: "jpeg", quality: 70 });
await browser.close();
console.log("verify-full.png saved");
