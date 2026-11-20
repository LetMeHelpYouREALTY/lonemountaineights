import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { circlePortrait } from './portrait.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const iconsDir = path.join(root, 'public/images/icons');

const TILE_COLOR = '#1e3a8a';
const PNG_OPTIONS = { compressionLevel: 9, palette: true, quality: 90, effort: 10 };

const circleIcon = (size) => circlePortrait(size, { png: PNG_OPTIONS });

/** Opaque square tile: iOS and Android launchers apply their own corner masks. */
async function tileIcon(size) {
  const inner = Math.round(size * 0.86);
  const offset = Math.round((size - inner) / 2);
  return sharp({ create: { width: size, height: size, channels: 3, background: TILE_COLOR } })
    .composite([{ input: await circlePortrait(inner), left: offset, top: offset }])
    .png(PNG_OPTIONS)
    .toBuffer();
}

/** ICO container with PNG-encoded entries, which every current browser reads. */
function toIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size % 256, 0);
    entry.writeUInt8(size % 256, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });
  return Buffer.concat([header, ...entries, ...images.map(({ data }) => data)]);
}

async function main() {
  await writeFile(path.join(iconsDir, 'favicon.png'), await circleIcon(192));
  await writeFile(path.join(iconsDir, 'favicon-32.png'), await circleIcon(32));
  await writeFile(path.join(iconsDir, 'favicon-180.png'), await tileIcon(180));
  await writeFile(path.join(iconsDir, 'icon-192.png'), await tileIcon(192));
  await writeFile(path.join(iconsDir, 'icon-512.png'), await tileIcon(512));

  const icoImages = await Promise.all(
    [16, 32, 48].map(async (size) => ({ size, data: await circleIcon(size) }))
  );
  await writeFile(path.join(root, 'src/app/favicon.ico'), toIco(icoImages));

  console.log('Wrote favicons and app icons from the agent portrait');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
