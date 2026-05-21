/**
 * Replace every `https://placehold.co/WxH` reference in `public/t/*.html` with a
 * seeded picsum.photos URL of the same dimensions. Deterministic per template +
 * per image slot, so the same template always shows the same image set.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const T_DIR = join(__dirname, "..", "public", "t");

// Match `placehold.co/W` or `placehold.co/WxH` (with optional protocol)
const PH_RE = /(https?:)?\/\/placehold\.co\/(\d+)(?:x(\d+))?/g;

const files = (await readdir(T_DIR)).filter((f) => f.endsWith(".html"));
console.log(`Scanning ${files.length} HTML files in /public/t...`);

let totalReplacements = 0;
let filesTouched = 0;

for (const fname of files) {
  const path = join(T_DIR, fname);
  let html = await readFile(path, "utf8");
  // Slug = remove leading 'demo-' and trailing '.html' if present
  const slug = fname.replace(/^demo-/, "").replace(/\.html$/, "");
  let n = 0;
  const newHtml = html.replace(PH_RE, (_, _proto, w, h) => {
    const W = w;
    const H = h || w;
    n++;
    return `https://picsum.photos/seed/${slug}-${n}/${W}/${H}`;
  });
  if (n > 0) {
    await writeFile(path, newHtml, "utf8");
    filesTouched++;
    totalReplacements += n;
    console.log(`  ${fname}  ${n} URLs replaced`);
  }
}

console.log(`\nDone. ${totalReplacements} placeholder URLs across ${filesTouched} files.`);
