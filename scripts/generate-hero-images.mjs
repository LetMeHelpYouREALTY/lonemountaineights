/**
 * Generates the back-page hero photos in src/assets/images/ (static imports give next/image
 * intrinsic size and a blur placeholder).
 *   - lone-mountain-peak.jpg: the neighborhood's namesake peak, from public/images/hero/Lone_Mountain.jpg
 *   - bhhs-nevada-summerlin-office.jpg: brokerage photo from BHHS Nevada Properties' own blog post
 *     "BHHS Summerlin Office Officially Opens!" (2024-04-30)
 * Run: node scripts/generate-hero-images.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src/assets/images');
const WIDTH = 2400;

const BHHS_OFFICE_URL =
  'https://blog.bhhsnv.com/wp-content/uploads/2024/05/Front1-1-copyBLACK-1-scaled.jpg';

async function fetchImage(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (generate-hero-images)' } });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

function toJpeg(pipeline) {
  return pipeline
    .resize({ width: WIDTH, withoutEnlargement: true, kernel: 'lanczos3' })
    .jpeg({ quality: 80, mozjpeg: true, chromaSubsampling: '4:2:0' });
}

await mkdir(outDir, { recursive: true });

const jobs = [
  {
    file: 'lone-mountain-peak.jpg',
    // Midday desert haze flattens the original; lift contrast and color slightly.
    pipeline: toJpeg(
      sharp(join(root, 'public/images/hero/Lone_Mountain.jpg'))
        .modulate({ saturation: 1.12 })
        .linear(1.1, -12),
    ),
  },
  {
    file: 'bhhs-nevada-summerlin-office.jpg',
    pipeline: toJpeg(sharp(await fetchImage(BHHS_OFFICE_URL))),
  },
];

for (const { file, pipeline } of jobs) {
  const info = await pipeline.toFile(join(outDir, file));
  console.log(`${file}: ${info.width}×${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
}
