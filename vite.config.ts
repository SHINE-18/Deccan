import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Direct copy of images if needed
try {
  const pDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(pDir)) fs.mkdirSync(pDir, { recursive: true });

  const sigDir = path.resolve(__dirname, 'public/Images/Signature');
  if (fs.existsSync(sigDir)) {
    const sigFiles = [
      { src: 'ChatGPT Image Jul 31, 2026, 04_15_59 PM.png', dest: 'sig-1.png' },
      { src: 'ChatGPT Image Jul 31, 2026, 04_17_50 PM.png', dest: 'sig-2.png' },
      { src: 'ChatGPT Image Jul 31, 2026, 04_20_47 PM.png', dest: 'sig-3.png' },
      { src: 'ChatGPT Image Jul 31, 2026, 04_45_58 PM.png', dest: 'sig-4.png' },
      { src: 'ChatGPT Image Jul 31, 2026, 04_50_11 PM.png', dest: 'sig-5.png' },
      { src: 'WBxJ3qin8yeN6rGQ4kSLed0T7xY.png.png', dest: 'sig-6.png' },
    ];
    sigFiles.forEach(({ src, dest }) => {
      const srcFile = path.join(sigDir, src);
      const destFile = path.join(pDir, dest);
      if (fs.existsSync(srcFile) && !fs.existsSync(destFile)) {
        fs.copyFileSync(srcFile, destFile);
      }
    });
  }
} catch (err) {
  console.log('Image copy note:', err);
}

function syncProductImagesPlugin() {
  const copyImages = () => {
    const srcBase = path.resolve(__dirname, 'products image - Copy');
    const destBase = path.resolve(__dirname, 'public/products');
    if (!fs.existsSync(srcBase)) return;
    if (!fs.existsSync(destBase)) {
      fs.mkdirSync(destBase, { recursive: true });
    }
    const mappings = [
      // msala ->
      { folder: 'msala', index: 0, filename: 'black-pepper.png' },
      { folder: 'msala', index: 1, filename: 'turmeric-powder.png' },
      { folder: 'msala', index: 2, filename: 'cumin-powder.png' },
      { folder: 'msala', index: 3, filename: 'coriander-powder.png' },
      { folder: 'msala', index: 4, filename: 'red-chilli-powder.png' },
      // hydrabadi masala
      { folder: 'hydrabadi masala', index: 0, filename: 'biryani-masala.png' },
      { folder: 'hydrabadi masala', index: 1, filename: 'tandoori-masala.png' },
      { folder: 'hydrabadi masala', index: 2, filename: 'mutton-masala.png' },
      // Signature
      { folder: 'Signature', index: 0, filename: 'wagyu-tataki-umami.png' },
      { folder: 'Signature', index: 1, filename: 'truffle-edamame-silk.png' },
      { folder: 'Signature', index: 2, filename: 'king-crab-delight.png' },
      { folder: 'Signature', index: 3, filename: 'toro-sashimi-azure.png' },
      // paste
      { folder: 'paste', index: 0, filename: 'tikka-masala-paste.png' },
      { folder: 'paste', index: 1, filename: 'green-curry-paste.png' },
      { folder: 'paste', index: 2, filename: 'vindaloo-paste.png' },
      { folder: 'paste', index: 3, filename: 'truffle-tagliatelle.png' },
    ];
    mappings.forEach(({ folder, index, filename }) => {
      const folderPath = path.join(srcBase, folder);
      if (!fs.existsSync(folderPath)) return;
      const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
      if (files[index]) {
        const srcFile = path.join(folderPath, files[index]);
        const destFile = path.join(destBase, filename);
        fs.copyFileSync(srcFile, destFile);
      }
    });

    // Copy generated hero and section images
    const generatedMappings = [
      {
        src: 'C:\\Users\\shine\\.gemini\\antigravity-ide\\brain\\644e3858-bb27-42c6-b0b4-b75b07301e60\\hero_spice_jar_1785764331524.png',
        dest: path.resolve(__dirname, 'public/hero-spice-jar.png')
      },
      {
        src: 'C:\\Users\\shine\\.gemini\\antigravity-ide\\brain\\644e3858-bb27-42c6-b0b4-b75b07301e60\\heritage_lifestyle_1785764345530.png',
        dest: path.resolve(__dirname, 'public/heritage-lifestyle.png')
      },
      {
        src: 'C:\\Users\\shine\\.gemini\\antigravity-ide\\brain\\644e3858-bb27-42c6-b0b4-b75b07301e60\\reserve_experience_1785764359760.png',
        dest: path.resolve(__dirname, 'public/reserve-experience.png')
      }
    ];

    generatedMappings.forEach(({ src, dest }) => {
      if (fs.existsSync(src)) {
        try {
          fs.copyFileSync(src, dest);
        } catch (err) {
          console.error('Failed copying image:', err);
        }
      }
    });
  };

  // Run copy immediately when plugin initializes
  copyImages();

  return {
    name: 'sync-product-images',
    // Run once during the initial build/startup
    buildStart() {
      copyImages();
    },
    // Run when the dev server starts (for vite dev)
    configureServer() {
      copyImages();
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    syncProductImagesPlugin(),
    react(),
  ],
  server: {
    watch: {
      ignored: [
        '**/premium-web-builder/**',
        '**/*.png',
        '**/*.md',
        '**/.git/**',
      ],
    },
  },
})
