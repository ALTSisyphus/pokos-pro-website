// @ts-check

import { defineConfig, fontProviders } from 'astro/config';

/**
 * Конфигурация Astro для сайта «Покос ПРО».
 *
 * Editorial Brutalist использует:
 * - Oswald — display/section headings;
 * - Roboto — основной текст;
 * - IBM Plex Mono — метки, цифры и технические данные.
 */
export default defineConfig({
  fonts: [
    {
      name: 'Oswald',
      cssVariable: '--font-oswald',
      provider: fontProviders.google(),
      weights: [500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic'],
      fallbacks: ['Arial Narrow', 'Arial', 'sans-serif'],
    },
    {
      name: 'Roboto',
      cssVariable: '--font-roboto',
      provider: fontProviders.google(),
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic'],
      fallbacks: ['Arial', 'sans-serif'],
    },
    {
      name: 'IBM Plex Mono',
      cssVariable: '--font-ibm-plex-mono',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic'],
      fallbacks: ['Courier New', 'monospace'],
    },
  ],
});
