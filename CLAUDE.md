# Portafolio web de Sebastián Gatica Leiva

Vas a construir mi portafolio web como informático. Trabajamos por etapas: la etapa 1 es la base del sitio + el primer proyecto (mi seminario de título). Después iremos agregando más proyectos y secciones.

**ANTES DE ESCRIBIR CÓDIGO:** propón la estructura de carpetas, el stack y las páginas, y espera mi OK. Si falta algún dato, pregúntamelo; no lo inventes.

## Quién soy
- Sebastián Gatica Leiva, estudiante de Ingeniería Civil Informática en la PUCV (Valparaíso), egreso proyectado 2027.
- Intereses: IA aplicada a finanzas, sistemas multiagente; también ciberseguridad e infraestructura.
- Experiencia: práctica en el Instituto de Investigación y Control (IDIC), ene-feb 2025. Prototipo local de protección de documentos: comparé alternativas de cifrado midiendo tiempos de encriptado/desencriptado, implementé marcas de agua (quién abrió y quién guardó un documento) y control de acceso por niveles de permiso con usuarios de prueba cargados desde un CSV. Todo en entorno local.
- Herramientas: Python, SQL, GitHub, Excel, Ollama, Claude, Gemini, NotebookLM, Alpaca (paper trading).
- Idiomas: español nativo; inglés en progreso (preparando Cambridge B1 Preliminary, beca PUCV).
- Enlaces: GitHub https://github.com/sebastian019?tab=repositories · Correo sebastian.gatica2004@gmail.com · LinkedIn https://www.linkedin.com/in/sebastián-gatica-leiva-b97296441 · CV en PDF: TODO.

## Primer proyecto (caso de estudio destacado)
"Sistema de trading con agentes de IA" (seminario de título, desde ago. 2026, estado "En progreso"; repositorio privado). Archivo: `src/content/proyectos/trading-multiagente.mdx`; diagrama en `src/components/ArchitectureDiagram.astro`.

Resumen: tres agentes con roles cerrados (Cuantitativo: régimen de mercado; Percepción: sentimiento y confianza por empresa a partir de noticias, en tres fases buscar → leer → evaluar; Manager: acepta o pide reanalizar), con mensajes JSON validados (Pydantic) y orquestación con LangGraph (supervisor). El LLM solo entrega una señal acotada; los pesos los decide un optimizador convexo (retorno vs. riesgo, solo largos, tope por activo) calibrado con CMA-ES, con veto de seguridad y bitácora en Markdown. Todo corre en local con Llama 3.1 8B vía Ollama (GPU de 8 GB). Se evalúa con backtest sin look-ahead, un conjunto de prueba separado y paper trading con Alpaca. Estructura de la página: Desafío → Arquitectura → Solución y decisiones de diseño → Cómo se evalúa → Estado actual (Hecho / En progreso / Pendiente) → Aprendizajes → Próximos pasos.

**Reglas de contenido de este proyecto:** explicar el qué y el porqué, nunca el cómo exacto (que nadie pueda replicarlo desde la página). PROHIBIDO publicar: fórmulas o ecuaciones, valores de parámetros y umbrales, pesos por fuente, prompts, nombres de fuentes de datos y de tickers, estructura de carpetas o nombres de archivos del repositorio, cifras de resultados, llaves, rutas de mi computador, nombres de profesores y enlace al repositorio. Aclarar siempre que el trading es simulado, que es un proyecto académico en desarrollo y que no es asesoría financiera. Lo que falte (capturas, diagrama final) va como `<Todo>` y se me pregunta.

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
