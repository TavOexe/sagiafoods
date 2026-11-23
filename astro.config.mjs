// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio propio (public/CNAME): se sirve desde la raíz, por eso no hay `base`.
export default defineConfig({
  site: 'https://sagiafoods.pe',
  integrations: [sitemap()],
  // Fuente instalada como paquete npm (@fontsource-variable): Astro la sirve desde el propio dominio,
  // sin depender de Google Fonts ni de la red durante el build.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2'],
            weight: '200 800',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
