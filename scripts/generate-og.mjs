import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const siteHostname = (process.env.BASE_URL || 'https://eamz.netlify.app').replace(/^https?:\/\//, '');

const svgBuffer = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1c1917"/>
  <rect x="60" y="320" width="1080" height="4" fill="#f79b23"/>
  <text x="60" y="200" font-family="Inter, system-ui, sans-serif" font-size="64" font-weight="700" fill="#f79b23">Eliezer A Meza</text>
  <text x="60" y="280" font-family="Inter, system-ui, sans-serif" font-size="28" font-weight="400" fill="#f7f7f1">Full-Stack Engineer · Fintech, ERP</text>
  <text x="60" y="380" font-family="monospace" font-size="18" fill="#f7f7f1">${siteHostname}</text>
</svg>
`);

const iconSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#1c1917"/>
  <text x="256" y="300" font-family="Inter, system-ui, sans-serif" font-size="220" font-weight="700" fill="#f79b23" text-anchor="middle">EM</text>
</svg>
`);

const icons = [
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

try {
  await sharp(svgBuffer)
    .png()
    .toFile(join(publicDir, 'og.png'));
  console.log('✓ og.png generated successfully');

  for (const { name, size } of icons) {
    await sharp(iconSvg)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, name));
    console.log(`✓ ${name} generated successfully`);
  }
} catch (err) {
  console.error('Failed to generate images:', err.message);
  process.exit(1);
}
