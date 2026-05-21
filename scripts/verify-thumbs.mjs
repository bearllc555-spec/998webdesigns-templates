/**
 * Open the live gallery in a headless browser, screenshot it, and check whether
 * the thumbnail images are actually visible (computed display/height/loaded).
 * Run: node scripts/verify-thumbs.mjs
 */
import { chromium } from "playwright";

const URL = process.env.URL || "https://998webdesigns-templates.vercel.app/";
const SCREENSHOT = process.env.OUT || "verify-thumbs.png";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
const page = await ctx.newPage();

const consoleErrors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});
const failedRequests = [];
page.on("requestfailed", (req) => {
  failedRequests.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`);
});

console.log("Navigating to", URL);
await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(2000); // give images time to load

const report = await page.evaluate(() => {
  const imgs = Array.from(document.querySelectorAll('img[src*="/thumbs/"]'));
  const cards = Array.from(document.querySelectorAll('a[href*="/t/demo-"]'));
  const cardBoxes = cards.slice(0, 3).map((c) => {
    const r = c.getBoundingClientRect();
    const div = c.querySelector(":scope > div");
    const drect = div?.getBoundingClientRect();
    return { href: c.getAttribute("href"), width: r.width, height: r.height, innerDivH: drect?.height || 0 };
  });
  const imgInfo = imgs.slice(0, 3).map((i) => {
    const r = i.getBoundingClientRect();
    return {
      src: i.getAttribute("src"),
      naturalW: i.naturalWidth,
      naturalH: i.naturalHeight,
      renderW: r.width,
      renderH: r.height,
      complete: i.complete,
      currentSrc: i.currentSrc,
    };
  });
  return {
    imgCount: imgs.length,
    cardCount: cards.length,
    cardBoxes,
    imgInfo,
    bodyHeight: document.body.scrollHeight,
    viewportH: window.innerHeight,
  };
});

await page.screenshot({ path: SCREENSHOT, fullPage: false, type: "png" });

await browser.close();

console.log("\n=== Verification report ===");
console.log("img elements found:", report.imgCount);
console.log("card <a> elements found:", report.cardCount);
console.log("body scroll height:", report.bodyHeight);
console.log("\nFirst 3 cards:");
report.cardBoxes.forEach((b, i) => {
  console.log(`  [${i}] href=${b.href}  cardW=${b.width.toFixed(0)}  cardH=${b.height.toFixed(0)}  innerDivH=${b.innerDivH.toFixed(0)}`);
});
console.log("\nFirst 3 images:");
report.imgInfo.forEach((im, i) => {
  console.log(`  [${i}] src=${im.src}`);
  console.log(`      natural=${im.naturalW}x${im.naturalH}  rendered=${im.renderW.toFixed(0)}x${im.renderH.toFixed(0)}  complete=${im.complete}`);
});

if (consoleErrors.length) {
  console.log("\nConsole errors:");
  consoleErrors.forEach((e) => console.log("  " + e));
}
if (failedRequests.length) {
  console.log("\nFailed requests:");
  failedRequests.forEach((r) => console.log("  " + r));
}

// Verdict
const firstImg = report.imgInfo[0];
const ok = firstImg && firstImg.renderH > 10 && firstImg.naturalH > 0 && firstImg.complete;
console.log("\nVERDICT:", ok ? "PASS — thumbnails are visible" : "FAIL — thumbnails are NOT visible");
console.log("Screenshot saved to:", SCREENSHOT);
process.exit(ok ? 0 : 2);
