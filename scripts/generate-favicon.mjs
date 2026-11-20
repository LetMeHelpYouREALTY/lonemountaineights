import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const source = path.join(root, 'public/images/agents/dr-jan-duffy.jpg');

// dr-jan-duffy.jpg is 1800x1800 with the gold-ring portrait centered at (900, 900);
// the photo ends at r≈677, the gold ring's outer edge sits at r≈795, the black square frame starts beyond r≈850.
const CENTER = 900;
const RADIUS = 800;
const PHOTO_RADIUS = 665;

const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };
const PHOTO_BACKDROP = { r: 238, g: 254, b: 225, alpha: 1 };

/** Square headshot without the ring/frame artwork — avatars (CSS adds the ring) and schema.org Person image. */
async function headshot(size) {
  const crop = await sharp(source)
    .extract({
      left: CENTER - PHOTO_RADIUS,
      top: CENTER - PHOTO_RADIUS,
      width: PHOTO_RADIUS * 2,
      height: PHOTO_RADIUS * 2,
    })
    .resize(size, size, { kernel: 'lanczos3' })
    .toBuffer();
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );
  const circle = await sharp(crop).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: PHOTO_BACKDROP } })
    .composite([{ input: circle }])
    .flatten({ background: PHOTO_BACKDROP })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
}

/** Circular gold-ring portrait with transparent corners. */
async function circlePortrait(size) {
  const crop = await sharp(source)
    .extract({ left: CENTER - RADIUS, top: CENTER - RADIUS, width: RADIUS * 2, height: RADIUS * 2 })
    .resize(size, size, { kernel: 'lanczos3' })
    .toBuffer();
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );
  return sharp(crop).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
}

/** Portrait centered on an opaque square (Apple touch icons and maskable PWA icons can't be transparent). */
async function portraitOnSquare(size, scale) {
  const portrait = await circlePortrait(Math.round(size * scale));
  return sharp({ create: { width: size, height: size, channels: 4, background: WHITE } })
    .composite([{ input: portrait, gravity: 'center' }])
    .flatten({ background: WHITE })
    .png()
    .toBuffer();
}

/** Palette-quantized PNG — photo icons are otherwise 5–10x larger. */
function optimized(png) {
  return sharp(png).png({ palette: true, quality: 90, effort: 10, compressionLevel: 9 }).toBuffer();
}

/** Multi-size .ico with PNG-encoded entries (supported by every current browser). */
function toIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);
  const directory = Buffer.alloc(16 * entries.length);
  let offset = header.length + directory.length;
  entries.forEach(({ size, png }, i) => {
    const at = i * 16;
    directory.writeUInt8(size >= 256 ? 0 : size, at);
    directory.writeUInt8(size >= 256 ? 0 : size, at + 1);
    directory.writeUInt8(0, at + 2);
    directory.writeUInt8(0, at + 3);
    directory.writeUInt16LE(1, at + 4);
    directory.writeUInt16LE(32, at + 6);
    directory.writeUInt32LE(png.length, at + 8);
    directory.writeUInt32LE(offset, at + 12);
    offset += png.length;
  });
  return Buffer.concat([header, directory, ...entries.map((e) => e.png)]);
}

async function main() {
  const out = (p) => path.join(root, p);

  const icon192 = await optimized(await circlePortrait(192));

  // Google Search favicons must be square multiples of 48px.
  await writeFile(out('src/app/icon.png'), icon192);
  await writeFile(out('src/app/apple-icon.png'), await optimized(await portraitOnSquare(180, 1)));

  const icoSizes = [16, 32, 48];
  const icoEntries = await Promise.all(icoSizes.map(async (size) => ({ size, png: await circlePortrait(size) })));
  await writeFile(out('src/app/favicon.ico'), toIco(icoEntries));

  // PWA manifest + schema.org logo.
  await writeFile(out('public/images/icons/favicon.png'), icon192);
  await writeFile(out('public/images/icons/icon-192.png'), icon192);
  await writeFile(out('public/images/icons/icon-512.png'), await optimized(await circlePortrait(512)));
  // Maskable safe zone is the central 80% circle.
  await writeFile(out('public/images/icons/icon-maskable-512.png'), await optimized(await portraitOnSquare(512, 0.8)));

  await writeFile(out('public/images/agents/dr-jan-duffy-headshot.jpg'), await headshot(800));

  console.log('Wrote favicon.ico, icon.png, apple-icon.png, PWA icons and headshot from', path.relative(root, source));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
