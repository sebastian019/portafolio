# Sebastián Gatica Leiva

Sitio personal: quién soy, experiencia, aptitudes y casos de estudio de mis proyectos. Hecho con [Astro](https://astro.build), 100 % estático.

Publicado en **https://sebastian019.github.io/portafolio/**

## Correr en local

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev       # http://localhost:4321/portafolio/
npm run build     # genera el sitio en dist/
npm run preview   # sirve dist/ para revisarlo antes de publicar
```

## Dónde se edita

| Qué | Archivo |
| --- | --- |
| Datos personales, experiencia, aptitudes y enlaces | `src/data/perfil.ts` |
| Proyectos (uno por archivo, `.md` o `.mdx`) | `src/content/proyectos/` |
| Campos de cada proyecto | `src/content.config.ts` |
| Colores, tipografía y espaciado | `src/styles/global.css` |
| CV en PDF | `public/cv/CV-Sebastian-Gatica.pdf` (si no existe, el botón no aparece) |

Para agregar un proyecto, crea un archivo en `src/content/proyectos/` con el mismo frontmatter que el existente; la tarjeta y su página se generan solas.

## Despliegue

Cada push a `main` publica el sitio en GitHub Pages con el workflow `.github/workflows/deploy.yml`. Requiere activar **Settings → Pages → Source: GitHub Actions** en el repo. La URL base (`site` y `base`) está en `astro.config.mjs`.

No hay claves en el repositorio: si alguna vez se necesitan, van en `.env` (ignorado por Git), con `.env.example` como plantilla sin valores.
