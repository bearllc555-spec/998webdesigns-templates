// Downloads the curated Unsplash photo set into public/templates/<slug>/<name>.jpg
// Each entry: { slug, name, photoId, w, h, descr }
// Stable URLs of the form https://images.unsplash.com/photo-<id>?w=<w>&h=<h>&q=80&auto=format&fit=crop
import { mkdir, writeFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const photos = [
  // ---- Haldwell Law ----
  { slug: "haldwell-law", name: "hero", id: "1554224155-6726b3ff858f", w: 1600, h: 1200, desc: "Empty wood-paneled conference room with leather chairs" },
  { slug: "haldwell-law", name: "library", id: "1481627834876-b7833e8f5570", w: 1600, h: 1200, desc: "Antique law library bookshelf" },
  { slug: "haldwell-law", name: "attorney-1", id: "1560250097-0b93528c311a", w: 800, h: 1000, desc: "Senior male attorney portrait" },
  { slug: "haldwell-law", name: "attorney-2", id: "1573496359142-b8d87734a5a2", w: 800, h: 1000, desc: "Female attorney portrait" },
  { slug: "haldwell-law", name: "attorney-3", id: "1556157382-97eda2d62296", w: 800, h: 1000, desc: "Female attorney portrait" },
  { slug: "haldwell-law", name: "attorney-4", id: "1507003211169-0a1dd7228f2d", w: 800, h: 1000, desc: "Male attorney portrait" },

  // ---- Maple Street Bakery ----
  { slug: "maple-street-bakery", name: "hero", id: "1509440159596-0249088772ff", w: 1600, h: 1200, desc: "Fresh sourdough bread loaves" },
  { slug: "maple-street-bakery", name: "croissant", id: "1555507036-ab1f4038808a", w: 1200, h: 900, desc: "Almond croissant on parchment" },
  { slug: "maple-street-bakery", name: "coffee", id: "1495474472287-4d71bcdd2085", w: 1200, h: 1500, desc: "Espresso being poured" },
  { slug: "maple-street-bakery", name: "baker-1", id: "1517433367423-c7e5b0f35086", w: 800, h: 1000, desc: "Female baker shaping dough" },
  { slug: "maple-street-bakery", name: "baker-2", id: "1556909114-f6e7ad7d3136", w: 800, h: 1000, desc: "Male baker portrait" },
  { slug: "maple-street-bakery", name: "baker-3", id: "1573497019418-b400bb3ab074", w: 800, h: 1000, desc: "Friendly barista portrait" },
  { slug: "maple-street-bakery", name: "interior", id: "1554118811-1e0d58224f24", w: 1600, h: 1100, desc: "Warm bakery interior" },

  // ---- Northwind Dental ----
  { slug: "northwind-dental", name: "hero", id: "1606811971618-4486d14f3f99", w: 1600, h: 1200, desc: "Modern dental operatory" },
  { slug: "northwind-dental", name: "smile", id: "1494790108377-be9c29b29330", w: 1200, h: 1500, desc: "Smiling young adult" },
  { slug: "northwind-dental", name: "dentist-1", id: "1559839734-2b71ea197ec2", w: 800, h: 1000, desc: "Female dentist in scrubs" },
  { slug: "northwind-dental", name: "dentist-2", id: "1612531386530-97286d97c2d2", w: 800, h: 1000, desc: "Male dentist portrait" },
  { slug: "northwind-dental", name: "hygienist", id: "1622253692010-333f2da6031d", w: 800, h: 1000, desc: "Hygienist portrait" },
  { slug: "northwind-dental", name: "team", id: "1576091160550-2173dba999ef", w: 1600, h: 1100, desc: "Friendly clinic team" },

  // ---- Ironclad Roofing ----
  { slug: "ironclad-roofing", name: "hero", id: "1582268611958-ebfd161ef9cf", w: 1600, h: 1200, desc: "Suburban house with new roof" },
  { slug: "ironclad-roofing", name: "crew", id: "1607400201515-c2c41c07d307", w: 1600, h: 1100, desc: "Roofing crew at work" },
  { slug: "ironclad-roofing", name: "worker", id: "1581094288338-2314dddb7ece", w: 800, h: 1000, desc: "Construction worker portrait" },
  { slug: "ironclad-roofing", name: "tools", id: "1572177812156-58036aae439c", w: 1200, h: 900, desc: "Construction tools on workbench" },
  { slug: "ironclad-roofing", name: "before", id: "1597047084897-51e81819a499", w: 1600, h: 900, desc: "House with old roof" },
  { slug: "ironclad-roofing", name: "after", id: "1605276374104-dee2a0ed3cd6", w: 1600, h: 900, desc: "House with fresh new roof" },

  // ---- Quietfield Yoga ----
  { slug: "quietfield-yoga", name: "hero", id: "1545205597-3d9d02c29597", w: 1600, h: 1200, desc: "Calm yoga pose in soft light" },
  { slug: "quietfield-yoga", name: "studio", id: "1518611012118-696072aa579a", w: 1600, h: 1100, desc: "Empty wood-floor yoga studio" },
  { slug: "quietfield-yoga", name: "teacher-1", id: "1571388208497-71bedc66e932", w: 800, h: 1000, desc: "Female yoga teacher portrait" },
  { slug: "quietfield-yoga", name: "teacher-2", id: "1599901860904-17e6ed7083a0", w: 800, h: 1000, desc: "Male yoga teacher in pose" },
  { slug: "quietfield-yoga", name: "teacher-3", id: "1506126613408-eca07ce68773", w: 800, h: 1000, desc: "Yoga teacher leading class" },
  { slug: "quietfield-yoga", name: "teacher-4", id: "1591291621164-2c6367723315", w: 800, h: 1000, desc: "Senior female yoga teacher portrait" },
  { slug: "quietfield-yoga", name: "class", id: "1599447421416-3414500d18a5", w: 1600, h: 1100, desc: "Quiet yoga class scene" },

  // ---- Tidewater CPA ----
  { slug: "tidewater-cpa", name: "hero", id: "1497366216548-37526070297c", w: 1600, h: 1200, desc: "Modern professional office interior" },
  { slug: "tidewater-cpa", name: "partner-1", id: "1560250097-0b93528c311a", w: 800, h: 1000, desc: "Male partner portrait" },
  { slug: "tidewater-cpa", name: "partner-2", id: "1573496359142-b8d87734a5a2", w: 800, h: 1000, desc: "Female partner portrait" },
  { slug: "tidewater-cpa", name: "partner-3", id: "1580489944761-15a19d654956", w: 800, h: 1000, desc: "Female partner portrait" },
  { slug: "tidewater-cpa", name: "partner-4", id: "1556157382-97eda2d62296", w: 800, h: 1000, desc: "Male partner portrait" },
  { slug: "tidewater-cpa", name: "meeting", id: "1556761175-5973dc0f32e7", w: 1600, h: 1100, desc: "Partners meeting at conference table" },
];

async function fetchPhoto(p) {
  const dir = path.join(root, "public", "templates", p.slug);
  await mkdir(dir, { recursive: true });
  const outPath = path.join(dir, `${p.name}.jpg`);
  if (existsSync(outPath)) {
    const s = await stat(outPath);
    if (s.size > 30000) return { ...p, ok: true, size: s.size, skipped: true };
  }
  const url = `https://images.unsplash.com/photo-${p.id}?w=${p.w}&h=${p.h}&q=80&auto=format&fit=crop`;
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) return { ...p, ok: false, reason: `HTTP ${res.status}` };
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 30000) return { ...p, ok: false, reason: `too small (${buf.length}b)` };
    await writeFile(outPath, buf);
    return { ...p, ok: true, size: buf.length };
  } catch (e) {
    return { ...p, ok: false, reason: e.message };
  }
}

const results = await Promise.all(photos.map(fetchPhoto));
const failures = results.filter((r) => !r.ok);
const total = results.reduce((acc, r) => acc + (r.size ?? 0), 0);
console.log(`OK: ${results.length - failures.length}/${photos.length}, total: ${(total / 1024 / 1024).toFixed(2)} MB`);
if (failures.length) {
  console.log("\nFAILURES:");
  for (const f of failures) console.log(`  ${f.slug}/${f.name}.jpg  id=${f.id}  -> ${f.reason}`);
}
