import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const source = path.join(root, 'public/images/agents/dr-jan-duffy.jpg');
const out = path.join(root, 'public/images/icons/favicon.png');

const sizes = [32, 128, 180];

async function main() {
  const meta = await sharp(source).metadata();
  const side = Math.min(meta.width ?? 400, meta.height ?? 400);
  const left = Math.floor(((meta.width ?? side) - side) / 2);
  const top = Math.floor(((meta.height ?? side) - side) / 2);

  const square = await sharp(source)
    .extract({ left, top, width: side, height: side })
    .resize(128, 128, { fit: 'cover' })
    .png()
    .toBuffer();

  await sharp(square).toFile(out);

  for (const size of sizes) {
    if (size === 128) continue;
    const dest = path.join(root, `public/images/icons/favicon-${size}.png`);
    await sharp(square).resize(size, size).png().toFile(dest);
  }

  console.log('Wrote favicon from agent portrait:', out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});