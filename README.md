# Portafolio — Sebastián Gatica Leiva

Sitio estático hecho con [Astro](https://astro.build). Sin JavaScript de framework: solo HTML, CSS y un script mínimo para animaciones sutiles.

## Correr en local

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # genera el sitio estático en dist/
npm run preview   # sirve dist/ para revisarlo antes de publicar
```

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre, bio, experiencia, aptitudes, idiomas, enlaces | `src/data/perfil.ts` |
| Proyectos (uno por archivo) | `src/content/proyectos/*.md` o `*.mdx` |
| Esquema del frontmatter de proyectos | `src/content.config.ts` |
| Diagrama de arquitectura del seminario (roles de agentes) | `src/components/ArchitectureDiagram.astro` |
| Colores, tipografía y espaciado | `src/styles/global.css` (variables en `:root`) |
| Fondo decorativo (degradados, puntos, formas) | `src/components/BackgroundDecor.astro` |
| Animación pixel art de la portada (sprites como texto) | `src/components/PixelScene.astro` |

## Agregar un proyecto

1. Crea `src/content/proyectos/mi-proyecto.md` con este frontmatter:

   ```yaml
   ---
   titulo: Nombre del proyecto
   resumen: Una o dos frases.
   tipo: Proyecto personal
   inicio: 2026-01-01
   estado: En desarrollo   # En desarrollo | Terminado | Pausado
   tecnologias: [Python, SQL]
   orden: 2                # menor = aparece primero
   ---
   ```

2. Escribe el contenido en Markdown. Usa `.mdx` si necesitas componentes (como `<Todo>` o un diagrama).
3. La tarjeta en la portada y la página `/proyectos/mi-proyecto/` se generan solas.

## Contenido pendiente

Lo que falta se marca con `TODO`: en el código como comentario y en las páginas con el componente `<Todo>`. Para encontrarlo todo, busca `TODO` en `src/`.

## Secretos

El sitio no necesita claves por ahora. Si en algún momento hacen falta, van en `.env` (ignorado por Git), y en `.env.example` solo se declaran los nombres, sin valores reales.

## Despliegue

`.github/workflows/deploy.yml` publica en GitHub Pages en cada push a `main`. Para activarlo:

1. Define `site` (y `base`, si corresponde) en `astro.config.mjs`.
2. En GitHub, ve a **Settings → Pages → Source** y elige **GitHub Actions**.
