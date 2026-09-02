// @ts-check

import {
  defineConfig,
  fontProviders,
} from 'astro/config';

/**
 * Конфигурация Astro для сайта «Покос ПРО».
 *
 * Назначение:
 * - определять базовые параметры проекта;
 * - регистрировать глобальные шрифты;
 * - настраивать внешних провайдеров ресурсов.
 */
export default defineConfig({
  fonts: [
    {
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      provider: fontProviders.google(),

      weights: [
        500,
        600,
        700,
      ],

      styles: [
        'normal',
      ],

      subsets: [
        'latin',
        'cyrillic',
      ],

      fallbacks: [
        'Arial',
        'sans-serif',
      ],
    },

    {
      name: 'Roboto',
      cssVariable: '--font-roboto',
      provider: fontProviders.google(),

      weights: [
        400,
        500,
        700,
      ],

      styles: [
        'normal',
      ],

      subsets: [
        'latin',
        'cyrillic',
      ],

      fallbacks: [
        'Arial',
        'sans-serif',
      ],
    },
  ],
});