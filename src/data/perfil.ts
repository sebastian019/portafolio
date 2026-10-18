// Datos personales del sitio, en un solo lugar.

export const perfil = {
  nombre: 'Sebastián Gatica Leiva',
  titular: 'Estudiante de Ingeniería Civil Informática en la PUCV',
  bajada:
    'Me interesa la IA aplicada a finanzas y los sistemas multiagente.',

  sobreMi: [
    'Estudio Ingeniería Civil Informática en la Pontificia Universidad Católica de Valparaíso (PUCV), con egreso proyectado para 2027.',
    'Mi interés principal es la inteligencia artificial aplicada a finanzas, en particular los sistemas multiagente. Mi seminario de título va justamente por ahí. También me atraen la ciberseguridad y la infraestructura.',
  ],

  experiencia: [
    {
      cargo: 'Práctica',
      organizacion: 'Instituto de Investigación y Control (IDIC)',
      periodo: 'Ene – Feb 2025',
      resumen: 'Prototipo local de protección de documentos.',
      puntos: [
        'Comparé alternativas de cifrado midiendo sus tiempos de encriptado y desencriptado.',
        'Implementé marcas de agua para registrar quién abrió y quién guardó un documento.',
        'Implementé control de acceso por niveles de permiso, con usuarios de prueba cargados desde un CSV.',
        'Todo el desarrollo se hizo y se probó en un entorno local.',
      ],
    },
  ],

  aptitudes: [
    { grupo: 'Programación y datos', items: ['Python', 'SQL', 'Excel'] },
    { grupo: 'IA y modelos de lenguaje', items: ['Ollama', 'Claude', 'Gemini', 'NotebookLM'] },
    { grupo: 'Herramientas', items: ['GitHub', 'Alpaca (paper trading)'] },
  ],

  idiomas: [
    { idioma: 'Español', nivel: 'Nativo' },
    { idioma: 'Inglés', nivel: 'En progreso — preparando Cambridge B1 Preliminary (beca PUCV)' },
  ],

  enlaces: {
    correo: 'sebastian.gatica2004@gmail.com',
    github: 'https://github.com/sebastian019?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/sebastián-gatica-leiva-b97296441',
  },

  // CV en PDF: el archivo va en public/cv/ con este nombre exacto. Si no
  // existe al compilar, el botón y el enlace no se muestran (ver utils/cv.ts).
  cv: '/cv/CV-Sebastian-Gatica.pdf',
};

// Enlaces de contacto listos para mostrar (sección Contacto y pie de página).
// `externo: true` => se abre en pestaña nueva con rel="noopener".
// El correo (mailto:) no se abre en pestaña nueva: lo maneja el cliente de correo.
export const contactos = [
  {
    etiqueta: 'Correo',
    icono: 'mail',
    texto: perfil.enlaces.correo,
    href: `mailto:${perfil.enlaces.correo}`,
    externo: false,
  },
  {
    etiqueta: 'GitHub',
    icono: 'github',
    texto: 'github.com/sebastian019',
    href: perfil.enlaces.github,
    externo: true,
  },
  {
    etiqueta: 'LinkedIn',
    icono: 'linkedin',
    texto: 'linkedin.com/in/sebastián-gatica-leiva',
    // encodeURI convierte la "á" a %C3%A1 para que el href sea una URL válida.
    href: encodeURI(perfil.enlaces.linkedin),
    externo: true,
  },
] as const;
