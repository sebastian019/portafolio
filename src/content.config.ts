// Colección de proyectos: cada archivo .md o .mdx en src/content/proyectos/ es un proyecto.
// Para agregar uno nuevo basta con crear otro archivo con este mismo frontmatter.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    // Contexto corto que se muestra en la tarjeta (p. ej. "Seminario de título").
    tipo: z.string(),
    inicio: z.coerce.date(),
    // "En progreso" se muestra como "En progreso…" con un punto animado.
    estado: z.enum(['En progreso', 'Terminado', 'Pausado']),
    // Fecha de la última actualización del contenido (opcional).
    actualizado: z.coerce.date().optional(),
    tecnologias: z.array(z.string()).default([]),
    // Aviso destacado al inicio del caso de estudio (opcional).
    aviso: z.string().optional(),
    destacado: z.boolean().default(false),
    // Orden en la lista (menor = primero).
    orden: z.number().default(100),
  }),
});

export const collections = { proyectos };
