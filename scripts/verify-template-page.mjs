/**
 * Open a specific template demo page in headless Chrome, log every failed request,
 * and take a screenshot. Default: beauty-salon (which appeared broken in the thumb).
 */
import { chromium } from "playwright";

const SLUG = process.env.SLUG || "beauty-salon";
const URL = process.env.URL || `https://998webdesigns-designs.vercel.app/t/demo-${SLUG}.html`;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 } });
const page = await ctx.newPage();

const failed = [];
page.on("requestfailed", (r) => failed.push({ url: r.url(), err: r.failure()?.errorText, method: r.method() }));
const responses = [];
page.on("response", (r) => {
  if (r.status() >= 400) responses.push({ url: r.url(), status: r.status() });
});

console.log("Navigating to", URL);
await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(2000);

await page.screenshot({ path: `verify-${SLUG}.png`, fullPage: false, type: "png" });

console.log(`\nFailed/4xx-5xx responses on ${SLUG}: ${responses.length + failed.length}`);
responses.slice(0, 25).forEach((r) => console.log(`  [${r.status}] ${r.url}`));
failed.slice(0, 25).forEach((r) => console.log(`  [ERR ${r.err}] ${r.url}`));

await browser.close();
console.log(`\nScreenshot saved: verify-${SLUG}.png`);
