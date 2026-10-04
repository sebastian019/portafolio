// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// MDX permite usar componentes (como el diagrama de arquitectura) dentro
// de un caso de estudio. Los proyectos simples pueden seguir siendo .md.
export default defineConfig({
  integrations: [mdx()],
  // TODO: definir según el hosting. Para GitHub Pages en un repo "portafolio":
  //   site: 'https://sebastian019.github.io',
  //   base: '/portafolio',
  // Si el repo se llama "sebastian019.github.io", basta con `site` (sin base).
});
