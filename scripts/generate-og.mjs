import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const siteHostname = 'eamz.netlify.app';

const svgBuffer = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1c1917"/>
  <rect x="60" y="320" width="1080" height="4" fill="#f79b23"/>
  <text x="60" y="200" font-family="Inter, system-ui, sans-serif" font-size="64" font-weight="700" fill="#f79b23">Eliezer A Meza</text>
  <text x="60" y="280" font-family="Inter, system-ui, sans-serif" font-size="28" font-weight="400" fill="#f7f7f1">Full-Stack Engineer · Fintech, ERP</text>
  <text x="60" y="380" font-family="monospace" font-size="18" fill="#f7f7f1">${siteHostname}</text>
</svg>
`);

try {
  await sharp(svgBuffer)
    .png()
    .toFile(join(publicDir, 'og.png'));
  console.log('✓ og.png generated successfully');
} catch (err) {
  console.error('Failed to generate og.png:', err.message);
  process.exit(1);
}
