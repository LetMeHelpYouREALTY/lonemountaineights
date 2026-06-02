/**
 * Generates public/images/og/og-image.png (1200×630) for Open Graph / Twitter cards.
 * Run: node scripts/generate-og-image.mjs
 */
import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const W = 1200;
const H = 630;

const overlaySvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.15"/>
      <stop offset="55%" stop-color="#1e3a8a" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.88"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#f4e4a6"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  <rect x="0" y="0" width="10" height="${H}" fill="url(#gold)"/>
  <rect x="72" y="392" width="220" height="5" rx="2" fill="url(#gold)"/>
  <text x="72" y="108" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="700" fill="#ffffff">Lone Mountain Heights</text>
  <text x="72" y="178" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="600" fill="#d4af37">Homes for Sale · Las Vegas 89129</text>
  <text x="72" y="238" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#f8fafc">Dr. Jan Duffy · Real Estate Expert</text>
  <text x="72" y="286" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#cbd5e1">Berkshire Hathaway HomeServices Nevada Properties</text>
  <text x="72" y="340" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#e2e8f0">Exclusive listings · Market insights · Personalized service</text>
  <rect x="72" y="430" width="420" height="52" rx="8" fill="#d4af37"/>
  <text x="92" y="465" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#1e3a8a">Schedule your private consultation →</text>
  <text x="72" y="548" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#d4af37">lonemountainheights.com</text>
  <text x="420" y="548" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#ffffff">702-222-1964</text>
</svg>
`;

const bgPath = join(root, 'public/images/hero/Lone_Mountain.jpg');
const outPath = join(root, 'public/images/og/og-image.png');

await sharp(bgPath)
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .modulate({ brightness: 1.05, saturation: 1.08 })
  .composite([{ input: Buffer.from(overlaySvg), top: 0, left: 0 }])
  .png({ compressionLevel: 9 })
  .toFile(outPath);

console.log(`OG image written: ${outPath} (${W}x${H})`);
