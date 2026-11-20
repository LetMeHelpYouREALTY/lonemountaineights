import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'public/images/agents/dr-jan-duffy.jpg');

/**
 * Face-centered square inside the 1800×1800 portrait badge. The full badge has
 * decorative rings and dark corners that leave the face unreadable at 16–32px.
 */
const FACE_CROP = { left: 390, top: 240, width: 930, height: 930 };

/** Round, gold-ringed crop of Dr. Jan Duffy's portrait with a transparent background. */
export async function circlePortrait(size, { ringColor = '#d4af37', png = {} } = {}) {
  const r = size / 2;
  const ring = Math.max(1, Math.round(size * 0.06));
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="#fff"/></svg>`
  );
  const border = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r - ring / 2}" fill="none" stroke="${ringColor}" stroke-width="${ring}"/></svg>`
  );
  const face = await sharp(source).extract(FACE_CROP).resize(size, size, { fit: 'cover' }).png().toBuffer();
  return sharp(face)
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }, { input: border }])
    .png(png)
    .toBuffer();
}
