// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Publicado en GitHub Pages como repo "portafolio":
// https://sebastian019.github.io/portafolio
// MDX permite usar componentes (como el diagrama de arquitectura) dentro
// de un caso de estudio. Los proyectos simples pueden seguir siendo .md.
export default defineConfig({
  site: 'https://sebastian019.github.io',
  base: '/portafolio',
  integrations: [mdx(), sitemap()],
  vite: {
    build: {
      rollupOptions: {
        // Astro marca los MDX con la directiva interna "use astro:head-inject";
        // el empaquetador avisa que podría no preservarse, pero no afecta al
        // sitio. Se silencia solo ese aviso; cualquier otro se sigue mostrando.
        onwarn(warning, warn) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('astro:head-inject')) {
            return;
          }
          warn(warning);
        },
      },
    },
  },
});
