import { chromium } from "playwright";
const URL = "https://998webdesigns-designs.vercel.app/";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
// Scroll through full page to trigger any lazy network activity.
await page.evaluate(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const max = document.documentElement.scrollHeight;
  for (let y = 0; y <= max; y += 600) { window.scrollTo(0, y); await sleep(180); }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(3000);

const rows = await page.evaluate(() => {
  const imgs = Array.from(document.querySelectorAll('img[src*="/thumbs/"]'));
  return imgs.map((i) => {
    const r = i.getBoundingClientRect();
    return {
      src: i.getAttribute("src"),
      complete: i.complete,
      natural: `${i.naturalWidth}x${i.naturalHeight}`,
      rect: `${Math.round(r.width)}x${Math.round(r.height)}`,
      visibleRect: r.width > 50 && r.height > 50,
    };
  });
});

const broken = rows.filter((r) => !r.complete || r.natural === "0x0");
console.log(`Total thumbs: ${rows.length}`);
console.log(`Broken/empty: ${broken.length}`);
broken.forEach((b) => console.log(`  ${b.src}  complete=${b.complete} natural=${b.natural} rect=${b.rect}`));
console.log("\nAll thumbs (first 20):");
rows.slice(0, 20).forEach((r) => console.log(`  ${r.src.padEnd(48)} complete=${r.complete} natural=${r.natural} rect=${r.rect}`));

await browser.close();
