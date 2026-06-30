import type { BlogPageContent } from "./types";

const body = (paragraphs: string[]) => paragraphs;

export const blogPageContent: BlogPageContent = {
  seoTitle: "Blog | Chiikö",
  seoDescription: "Visitas, proyectos, talleres y comunidad. Crónicas del estudio Chiikö sobre diseño, tecnología y cultura digital.",
  title: "Blog",
  description: "Crónicas del estudio: visitas a Google y Pinterest, proyectos con Sophie Gomez, talleres en la UNAM y patrocinio de Compufest 2026.",
  readMore: "Leer artículo",
  readTimeLabel: "min de lectura",
  backToBlog: "← Volver al blog",
  posts: [
    {
      slug: "google-ecosystem-visit",
      title: "Inspiración en el ecosistema: Visita a Google",
      excerpt: "El diseño de interacción no nace en el aislamiento de una pantalla, sino en la comprensión del ecosistema tecnológico global.",
      category: "Inspiración",
      body: body([
        "El diseño de interacción no nace en el aislamiento de una pantalla, sino en la comprensión del ecosistema tecnológico global.",
        "Este mes tuvimos la oportunidad de visitar las oficinas de Google en la Ciudad de México. Más allá de recorrer el espacio, el objetivo fue empaparnos de su cultura de producto, analizar de cerca cómo abordan la escala en la experiencia de usuario y entender las sutiles transiciones entre sus interfaces físicas y digitales.",
        "Para un estudio boutique como Chiikö, observar los procesos y la filosofía de diseño de uno de los gigantes de la industria no significa querer replicar sus fórmulas, sino extraer aprendizajes sobre consistencia, accesibilidad y rendimiento para aplicarlos, con cuidado artesanal, en los proyectos de nuestros clientes.",
        "Volvemos al estudio con la libreta llena de notas y el enfoque fresco para lo que estamos construyendo.",
      ]),
    },
    {
      slug: "pinterest-visual-culture-visit",
      title: "Curación y cultura visual: Visita a Pinterest",
      excerpt: "Diseñar con intención requiere educar el ojo de forma constante y entender el comportamiento de las audiencias creativas.",
      category: "Cultura visual",
      body: body([
        "Diseñar con intención requiere educar el ojo de forma constante y entender el comportamiento de las audiencias creativas.",
        "Completando nuestro recorrido por los centros de innovación de la Ciudad de México, visitamos las oficinas de Pinterest. Como plataforma, Pinterest es el epicentro de la inspiración y la curación visual en internet; como espacio de trabajo, es un reflejo de esa misma búsqueda estética y atención al detalle.",
        "Nuestra visita estuvo enfocada en entender cómo procesan las tendencias visuales y cómo transforman el comportamiento humano en interfaces intuitivas y fluidas. Para Chiikö, este intercambio es clave: nos ayuda a refinar la dirección de arte de nuestros proyectos y a seguir creando experiencias web que no solo sean técnicamente impecables, sino visualmente memorables y alineadas con la cultura contemporánea.",
        "Regresamos al estudio digital con nuevas perspectivas sobre cómo estructurar la narrativa visual de nuestras próximas entregas.",
      ]),
    },
    {
      slug: "sophie-gomez-digital-identity",
      title: "Artesanía para la escena: Nueva identidad digital para Sophie Gomez",
      excerpt: "Traducir una trayectoria artística a una experiencia digital exige tanta sensibilidad como estructura tipográfica.",
      category: "Proyectos",
      body: body([
        "Traducir una trayectoria artística a una experiencia digital exige tanta sensibilidad como estructura tipográfica.",
        "Nos emociona hacer oficial nuestra colaboración con la actriz Sophie Gomez. En Chiikö hemos comenzado el proceso de diseño y desarrollo de su nuevo espacio oficial y portafolio web (sophiegomez.me).",
        "Trabajar de la mano con perfiles creativos de este nivel nos permite llevar nuestra filosofía de artesanía digital a su máxima expresión. El reto no es construir un sitio web genérico, sino curar un entorno digital minimalista y elegante que capture la esencia de su trabajo frente a las cámaras y en los escenarios. Estamos aplicando los principios del diseño suizo para crear una interfaz donde el ruido visual desaparece, otorgándole el protagonismo absoluto a su talento actoral a través de una jerarquía de la información clara y un cuidado absoluto en los detalles técnicos.",
        "Actualmente nos encontramos en la fase de arquitectura y diseño conceptual. Muy pronto compartiremos el caso de estudio completo de este emocionante proyecto.",
      ]),
    },
    {
      slug: "unam-democratic-design-workshop",
      title: "Fundamentos visuales: El taller de diseño democrático en la Facultad de Ciencias",
      excerpt: "El buen diseño no depende de la complejidad de la herramienta, sino de la claridad de la estructura.",
      category: "Comunidad",
      body: body([
        "El buen diseño no depende de la complejidad de la herramienta, sino de la claridad de la estructura.",
        "Este mes tuvimos el honor de regresar a la Facultad de Ciencias de la UNAM para impartir un taller práctico de diseño y composición. Aunque en Chiikö operamos con herramientas avanzadas y código a medida, creemos firmemente en la democratización del diseño como una habilidad esencial para cualquier disciplina.",
        "El taller estuvo enfocado en dotar a la comunidad estudiantil y científica de las bases estructurales necesarias para comunicar sus ideas de forma clara y efectiva. En lugar de centrarnos en las funciones técnicas de un software como Canva, abordamos los principios universales que transforman un lienzo en blanco en un mensaje potente: jerarquía tipográfica, el uso intencional del espacio en blanco, contraste y balance visual.",
        "Ver cómo estudiantes de distintas áreas de la ciencia aplicaban estas reglas lógicas para estructurar sus proyectos e investigaciones reafirma nuestra filosofía: el diseño es, ante todo, una herramienta para ordenar el caos y facilitar el entendimiento humano.",
      ]),
    },
    {
      slug: "anti-marketing-unam",
      title: "El Anti-Marketing: Relevancia sobre el ruido en la UNAM",
      excerpt: "En un ecosistema digital saturado de contenido genérico, la autenticidad y la intención son las verdaderas ventajas competitivas.",
      category: "Estrategia",
      body: body([
        "En un ecosistema digital saturado de contenido genérico, la autenticidad y la intención son las verdaderas ventajas competitivas.",
        "Impartimos una segunda conferencia en la Facultad de Ciencias de la UNAM enfocada en la estrategia de marca contemporánea, bajo una premisa clara: El Anti-Marketing.",
        "Frente a un auditorio lleno de mentes analíticas, cuestionamos las fórmulas publicitarias tradicionales, el spam algorítmico y las métricas de vanidad que hoy saturan internet. Desde la perspectiva del estudio, compartimos cómo las marcas y los creadores pueden construir una autoridad real y orgánica alejándose de las tácticas agresivas de venta y centrándose, en su lugar, en la creación de valor genuino, el posicionamiento de nicho y la honestidad radical.",
        "Discutir sobre el futuro de la comunicación digital con los estudiantes de Ciencias siempre es un ejercicio refrescante. Nos obliga a contrastar nuestras ideas en el mundo real y a confirmar que la relevancia siempre ganará la batalla contra el ruido.",
      ]),
    },
    {
      slug: "compufest-2026-sponsors",
      title: "Apoyando el talento local: Sponsors Oficiales de Compufest 2026",
      excerpt: "El crecimiento de la industria tecnológica e independiente no ocurre por accidente; se construye apoyando los espacios colectivos.",
      category: "Comunidad",
      body: body([
        "El crecimiento de la industria tecnológica e independiente no ocurre por accidente; se construye apoyando los espacios colectivos.",
        "En Chiikö creemos firmemente en retribuir a la comunidad que nos inspira y nos ve crecer. Por ello, este mes nos sumamos con gran orgullo como patrocinadores oficiales del Compufest 2026, el festival independiente que reúne a desarrolladores, diseñadores y entusiastas de la tecnología de nuestro país.",
        "Para un estudio fundado bajo los principios de la artesanía digital, formar parte de este evento va más allá de colocar nuestro logotipo en una pantalla. Significa respaldar activamente los espacios donde se fomenta la innovación abierta, el desarrollo de software con criterio y el intercambio de ideas sin filtros corporativos. El Compufest representa esa cultura builder con la que nos identificamos plenamente: personas creando herramientas, compartiendo código y cuestionando el statu quo tecnológico.",
        "Fue increíble conectar con tantos creadores y proyectos durante el evento. Nos llevamos una dosis masiva de energía para seguir empujando los límites del diseño y el desarrollo web desde nuestro propio estudio. ¡Nos vemos en la próxima edición!",
      ]),
    }
  ],
};
