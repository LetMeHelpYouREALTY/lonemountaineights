/**
 * On-page portrait for AgentPortrait: run `node scripts/generate-headshot.mjs`.
 * Crops inside the gold ring baked into the 1800×1800 badge, so the component's
 * CSS ring is the only ring and the face fills the circle at 40–176px.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'public/images/agents/dr-jan-duffy.jpg');
const output = path.join(root, 'public/images/agents/dr-jan-duffy-headshot.jpg');

const SIZE = 800;
const CENTER = 900;
/** The photo ends at r≈677 where the gold ring begins. */
const PHOTO_RADIUS = 665;
/** The photo's own pale-green backdrop; fills the corners that rounded-full hides. */
const PHOTO_BACKDROP = { r: 238, g: 254, b: 225, alpha: 1 };

const crop = await sharp(source)
  .extract({
    left: CENTER - PHOTO_RADIUS,
    top: CENTER - PHOTO_RADIUS,
    width: PHOTO_RADIUS * 2,
    height: PHOTO_RADIUS * 2,
  })
  .resize(SIZE, SIZE, { kernel: 'lanczos3' })
  .toBuffer();
const mask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="#fff"/></svg>`,
);
const circle = await sharp(crop).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
const jpeg = await sharp({ create: { width: SIZE, height: SIZE, channels: 4, background: PHOTO_BACKDROP } })
  .composite([{ input: circle }])
  .flatten({ background: PHOTO_BACKDROP })
  .jpeg({ quality: 82, mozjpeg: true })
  .toBuffer();

await writeFile(output, jpeg);
console.log('Wrote', path.relative(root, output));
