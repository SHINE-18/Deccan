import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pngPath = path.resolve(__dirname, '../public/chef_arvind_signature.png');
const svgPath = path.resolve(__dirname, '../public/chef_arvind_signature.svg');

const b64 = fs.readFileSync(pngPath).toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 85" width="169" height="85" fill="none">
  <defs>
    <filter id="gold-glow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#CFA556" flood-opacity="0.3" />
    </filter>
  </defs>
  <image href="data:image/png;base64,${b64}" width="169" height="85" filter="url(#gold-glow)" />
</svg>`;

fs.writeFileSync(svgPath, svgContent);
console.log('Successfully created:', svgPath);
