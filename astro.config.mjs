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
});
