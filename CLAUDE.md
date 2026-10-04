# Portafolio web de Sebastián Gatica Leiva

Vas a construir mi portafolio web como informático. Trabajamos por etapas: la etapa 1 es la base del sitio + el primer proyecto (mi seminario de título). Después iremos agregando más proyectos y secciones.

**ANTES DE ESCRIBIR CÓDIGO:** propón la estructura de carpetas, el stack y las páginas, y espera mi OK. Si falta algún dato, pregúntamelo; no lo inventes.

## Quién soy
- Sebastián Gatica Leiva, estudiante de Ingeniería Civil Informática en la PUCV (Valparaíso), egreso proyectado 2027.
- Busco práctica profesional. Intereses: IA aplicada a finanzas, sistemas multiagente; también ciberseguridad e infraestructura.
- Experiencia: práctica en el Instituto de Investigación y Control (IDIC), ene-feb 2025. Prototipo local de protección de documentos: comparé alternativas de cifrado midiendo tiempos de encriptado/desencriptado, implementé marcas de agua (quién abrió y quién guardó un documento) y control de acceso por niveles de permiso con usuarios de prueba cargados desde un CSV. Todo en entorno local.
- Herramientas: Python, SQL, GitHub, Excel, Ollama, Claude, Gemini, NotebookLM, Alpaca (paper trading).
- Idiomas: español nativo; inglés en progreso (preparando Cambridge B1 Preliminary, beca PUCV).
- Enlaces: GitHub https://github.com/sebastian019 · Correo sebastian.gatica2004@gmail.com · LinkedIn: TODO (URL del perfil, pendiente) · CV en PDF: TODO.

## Primer proyecto (caso de estudio destacado)
"Sistema de trading con agentes de IA" (seminario de título, en desarrollo desde ago. 2026): sistema multiagente en el que distintos agentes de IA analizan datos de mercado y colaboran para apoyar la toma de decisiones de trading. Se prueba en paper trading con Alpaca, SIN dinero real. Surge de mi interés por el sector financiero.

Crea una página de caso de estudio con estas secciones: contexto y problema, enfoque, arquitectura (con un diagrama simple en SVG; los roles de cada agente los completo yo, déjalos como TODO), tecnologías, estado actual, aprendizajes, próximos pasos.

## Diseño
- Minimalista y elegante. Fondo oscuro cálido (casi negro, no azulado) con un acento naranja. Mucho espacio en blanco, tipografía cuidada, pocas animaciones sutiles.
- El naranja solo en detalles (enlaces, números, subrayados), no en bloques grandes de color.
- NO debe parecer la terminal de VS Code: nada de fuente monoespaciada dominante, ni ventanas de código decorativas, ni verde sobre negro, ni cursor parpadeante.
- Tipografía: una sans moderna para el texto y una opción con carácter para los títulos. Propón y justifica.
- Responsive (celular primero), buen contraste (accesible), carga rápida.

## Secciones de la página principal
Portada (nombre, una línea de quién soy, botones a proyectos y contacto), Proyectos (por ahora solo el del seminario, con la estructura lista para sumar más), Sobre mí, Experiencia, Aptitudes, Contacto.

## Stack
Propón uno simple y estático que se despliegue gratis (Astro es mi sugerencia, con cada proyecto como un archivo Markdown para poder agregar más fácil). Si ves una opción mejor para mí, explícala.

## Reglas
- **Honestidad:** nada de métricas ni logros inventados; todo lo que no sepas va marcado como TODO y me lo preguntas. Aclara siempre que el trading es simulado.
- **Seguridad:** nunca claves de API en el repositorio; usa `.env` (ya está en `.gitignore`) y crea un `.env.example` sin valores reales.
- Código ordenado y comentado donde ayude. Haz un commit de Git claro al terminar cada etapa.
- Al terminar, dime cómo correrlo en local (`npm run dev`) y qué datos te faltan de mí.
