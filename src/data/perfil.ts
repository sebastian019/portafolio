// Datos personales del portafolio, en un solo lugar.
// Todo lo marcado como TODO falta confirmarlo: no inventar valores.

export const perfil = {
  nombre: 'Sebastián Gatica Leiva',
  titular: 'Estudiante de Ingeniería Civil Informática en la PUCV',
  bajada:
    'Me interesa la IA aplicada a finanzas y los sistemas multiagente. Busco mi práctica profesional.',

  sobreMi: [
    'Estudio Ingeniería Civil Informática en la Pontificia Universidad Católica de Valparaíso (PUCV), con egreso proyectado para 2027.',
    'Mi interés principal es la inteligencia artificial aplicada a finanzas, en particular los sistemas multiagente. Mi seminario de título va justamente por ahí. También me atraen la ciberseguridad y la infraestructura.',
    'Hoy busco una práctica profesional donde pueda aportar y seguir aprendiendo en estas áreas.',
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

  // Los enlaces en null se muestran como "pendiente" y no son clicables.
  enlaces: {
    correo: 'sebastian.gatica2004@gmail.com' as string | null,
    github: 'https://github.com/sebastian019' as string | null,
    linkedin: null as string | null, // TODO: URL de LinkedIn
    cv: null as string | null, // TODO: p. ej. '/cv/cv-sebastian-gatica.pdf'
  },
};
