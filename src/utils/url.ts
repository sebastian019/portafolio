// Construye rutas internas respetando el "base" de Astro.
// Necesario si el sitio se publica en un subdirectorio (p. ej. GitHub Pages
// en https://usuario.github.io/nombre-del-repo/).
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
