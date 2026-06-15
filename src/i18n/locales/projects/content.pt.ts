import type { ProjectDetailContent } from "@/data/projectDetails";

export const projectContent = {
  page: {
    title: "Projetos",
    description:
      "Aqui você pode ver nossos últimos projetos e estudos de caso.",
    seoDescription: "Explore nossos projetos e estudos de caso",
    back: "← Voltar aos projetos",
    visitWebsite: "Visitar site",
  },
  labels: {
    services: "Serviços",
    client: "Cliente",
    context: "O Contexto",
    impact: "O Impacto",
    uiComponent: "Componente UI",
    engineering: "Engenharia & Experiência",
  },
  items: {
    eamx: {
      title: "EAMX",
      description:
        "Arquitetura e precisão estrutural levadas ao plano digital.",
      services:
        "Estratégia Digital, Design de Interação, Desenvolvimento Frontend Avançado.",
      client: "EAMX Arquitectos.",
    },
    compufest: {
      title: "Compufest [1]",
      description:
        "O maior evento estudantil de computação e programação da UNAM.",
      services: "Estratégia Digital, Design UI/UX, Desenvolvimento Web.",
      client: "Compufest / Comunidade Estudiantil UNAM.",
    },
    emicarrada: {
      title: "emicarrada.com",
      description:
        "A interseção entre engenharia de software e artesanato digital.",
      services: "Direção de Arte, Desenvolvimento Frontend Avançado, WebGL 3D.",
      client: "Cristopher Carrada.",
    },
    alancrespo_ai: {
      title: "Alan Crespo",
      description:
        "Da academia à liderança global em Inteligência Artificial (Deep Tech).",
      services:
        "Design de Identidade Visual, Estratégia de Posicionamento B2B, Engenharia de Conteúdo.",
      client: "Alan Crespo Murillo.",
    },
  },
  details: {
    eamx: {
      tagline:
        "Arquitetura y precisión estructural llevadas al plano digital.",
      services:
        "Estratégia Digital, Design de Interacción, Desenvolvimento Frontend Avanzado.",
      client: "EAMX Arquitectos.",
      contextTitle: "O Contexto",
      contextParagraphs: [
        "Un estúdio de arquitetura contemporánea que diseña espacios con un rigor milimétrico no puede permitirse un portafolio digital genérico. El reto con EAMX fue traducir su filosofía de trabajo —basada en la estética, la funcionalidad y la durabilidad— a una experiência web.",
        "Necesitaban que su plataforma no solo mostrara sus projetos en una cuadrícula corporativa tradicional, sino que transmitiera inovação pura y dura; querían que el usuário sintiera la espacialidad y el design desde el primer clic.",
      ],
      steps: [
        {
          number: "01",
          title: "Estratégia: Interacción como manifiesto",
          subtitle:
            "Analisamos sua marca, tu mercado y el objetivo real del projeto antes de diseñar.",
          paragraphs: [
            "Desechamos por completo la idea de un site pasivo. La estratégia se centró en construir un entorno sensorial donde la interacción del usuário dictara el ritmo de descubrimiento.",
            "Para un mercado que valora el design por encima de todo, decidimos que cada sección debía comportarse con reglas físicas propias. El objetivo era crear un recorrido lúdico e inmersivo, pero anclado en un rigor estético absoluto que validara la maestría técnica del estúdio frente a clientes de alto perfil.",
          ],
        },
        {
          number: "02",
          title: "Design & Desenvolvimento: Artesanía digital y física aplicada",
          subtitle:
            "Designamos y construimos una experiência clara, rápida y diferenciada.",
          paragraphs: [
            "Llevamos la interfaz al extremo aplicando tipografía monumental y un contraste brutalista. A nivel de engenharia, construimos el sitio utilizando Next.js y un motor de animaciones avanzado para lograr interacciones fluidas que normalmente solo se ven en aplicaciones nativas:",
          ],
          bullets: [
            {
              label: "Exploración reveladora",
              text: 'Implementamos un componente interactivo en el inicio donde el usuário utiliza su cursor como una "linterna", rasgando el lienzo oscuro mediante máscaras SVG para descubrir la verdadera visão del estúdio.',
            },
            {
              label: "Caos controlado (Física 3D)",
              text: "Rompimos la cuadrícula estática. La galeria es un lienzo donde los projetos arquitectónicos flotan; el usuário puede agarrar, arrastrar y soltar las fotografías, las cuales responden con físicas de rebote e inclinación tridimensional.",
            },
            {
              label: "Contexto inmersivo",
              text: "Integramos un sistema de enlaces dinámicos en sus normativas (como certificaciones ISO o ciudades). Al pasar el cursor, se despliegan tarjetas flotantes con previsualizaciones visuales de alta calidad, evitando que el usuário abandone la lectura.",
            },
          ],
        },
        {
          number: "03",
          title: "Entrega & Evolução: Un showroom digital de alta gama",
          subtitle:
            "Publicamos el sitio y lo dejamos listo para crecer, medir y escalar.",
          paragraphs: [
            "El resultado es mucho más que una landing page; es una demostración de capacidad técnica. Cerramos el recorrido con un escenario iluminado dinámicamente que eleva el llamado a la acción, invitando a la conversión de manera teatral.",
            "Entregamos una plataforma robusta y optimizada, capaz de manejar interacciones complejas sin sacrificar milisegundos de carga. El ecosistema digital de EAMX quedó posicionado como una obra de design en sí misma, con una arquitetura de componentes lista para escalar e integrar futuros projetos con la misma espectacularidad.",
          ],
        },
      ],
      impactQuote:
        "Queríamos que nuestra página reflejara la misma obsesión por el detalle y la inovação que ponemos en nuestras obras físicas, pero todas las agências nos ofrecían catálogos aburridos. El time entendió de inmediato que necesitábamos una experiência, no un folleto. Ver cómo los usuários juegan con nuestra galeria y descubren el sitio es exactamente la misma sensación de asombro que buscamos cuando alguien entra a uno de nuestros edifícios. Llevaron nuestra presentación digital al mismo nivel de nuestra arquitetura.",
      impactAttribution: "Dirección de Projetos, EAMX",
    } satisfies ProjectDetailContent,

    compufest: {
      tagline:
        "El evento estudiantil de computação y programação más grande de la UNAM.",
      services: "Estratégia Digital, Design UI/UX, Desenvolvimento Web.",
      client: "Compufest / Comunidade Estudiantil UNAM.",
      contextTitle: "O Contexto",
      contextParagraphs: [
        'Un evento de gran magnitud requiere una presencia digital a su altura. Inicialmente, la visão para Compufest era conservadora: una página estática básica para circular mediante el "boca a boca". Sin embargo, para consolidar un hackathon de primer nivel y atraer a los actores clave de la industria tecnológica, la plataforma debía ser mucho más que un simple folleto digital; debía ser una declaración de intenciones.',
        "Aquí es donde intervenimos para elevar la propuesta, transformando una idea universitaria en una marca digital atractiva para gigantes de la industria y la comunidad de desarrolladores.",
      ],
      steps: [
        {
          number: "01",
          title: "Estratégia: Visión más allá del código",
          subtitle:
            "Analisamos la marca, el mercado y el objetivo real del projeto antes de diseñar.",
          paragraphs: [
            "El reto principal no era solo informar sobre fechas y horarios, sino construir credibilidad inmediata. Identificamos que el público objetivo —estudiantes de engenharia, desarrolladores experimentados y, crucialmente, patrocinadores corporativos de alto perfil— requería una experiência que hablara su mismo idioma técnico.",
            "Cambiamos el rumbo de la estratégia original: en lugar de una página genérica, conceptualizamos un hub digital diseñado específicamente para validar la escala del evento, facilitar el registro masivo y servir como una herramienta de venta infalible para asegurar conferencistas y alianzas estratégicas.",
          ],
        },
        {
          number: "02",
          title: "Design & Desenvolvimento: Estética hacker, engenharia premium",
          subtitle:
            "Designamos y construimos una experiência clara, rápida y diferenciada.",
          paragraphs: [
            'La dirección de arte se basó en el imaginario clásico de la computação, llevado a estándares de design web de alta gama. Implementamos una interfaz oscura (Dark Mode) acentuada con tipografías monoespaciadas y elementos visuales inspirados en arte ASCII y terminales de comandos. Esta estética "raw" y técnica resonó de inmediato con la comunidad de programadores.',
            "A nivel de engenharia, el desenvolvimento se centró en la velocidad, la claridad arquitectónica y la precisión en cada interacción. Construímos una interfaz que no solo es visualmente impactante, sino que maneja la carga de información del hackathon, las agendas y los perfiles de los speakers con una fluidez absoluta, aplicando los principios del design suizo: máxima legibilidad, uso intencional del espacio negativo y eliminación de ruido visual.",
          ],
        },
        {
          number: "03",
          title: "Entrega & Evolução: De la universidad a la industria",
          subtitle:
            "Publicamos el sitio y lo dejamos listo para crecer, medir y escalar.",
          paragraphs: [
            "El lanzamiento del sitio marcó un antes y un después en la organización del Compufest. La plataforma web se convirtió en el motor de crecimiento del evento, permitiendo a los organizadores proyectar una imagen institucional y altamente profesional.",
            "El resultado de esta infraestructura digital fue contundente: el evento logró asegurar el respaldo de patrocinadores de peso internacional (como Google for Education), atrajo a comunidades enteras de tecnología y llenó su panel de conferencistas. El código base entregado no solo sirvió para la edición [1], sino que establece una arquitetura robusta, lista para escalar en futuras iteraciones del festival.",
          ],
        },
      ],
      impactQuote:
        "No teníamos un site para nuestro evento. Simplemente íbamos a generar una página, pasarla de voz en voz y esperar lo mejor. Pero Chiiko nos convenció de no hacerlo y fue de las mejores decisiones que pudimos tomar para el evento. Sin la página nunca hubiéramos conseguido llenar de speakers, comunidades y sponsors ni hubiéramos tenido la base para mostrar el hackathon al mundo. El evento estudiantil de computação y programação más grande de la UNAM también fue gracias a Chiiko.",
      impactAttribution: "Time Organizador, Compufest",
    } satisfies ProjectDetailContent,

    emicarrada: {
      tagline:
        "La interseção entre engenharia de software y artesanato digital.",
      services: "Dirección de Arte, Desenvolvimento Frontend Avanzado, WebGL 3D.",
      client: "Cristopher Carrada.",
      contextTitle: "O Contexto",
      contextParagraphs: [
        "El portafolio de un desarrollador no debe limitarse a enumerar habilidades; debe ser la prueba irrefutable de ellas. El reto de este projeto era construir una identidade visual profunda —anclada en tonos azul marino y acentos naranja— que lograra mezclar el perfil técnico y científico con una presentación editorial moderna y pulida.",
        "No buscábamos un currículum digital estático, sino un ecosistema interactivo que reflejara la precisión de la engenharia de software de alta gama y el cuidado por el detalle del minimalismo estructural.",
      ],
      steps: [
        {
          number: "01",
          title: "Estratégia: Mostrar, no solo contar",
          subtitle:
            "Analisamos la marca, el mercado y el objetivo real del projeto antes de diseñar.",
          paragraphs: [
            "La estratégia principal fue utilizar la interacción como lenguaje narrativo. En lugar de bloques de texto predecibles, decidimos que cada sección del sitio debía invitar al usuário a interactuar con el código.",
            'Definimos una identidade temática coherente que orbita alrededor de la figura del "desarrollador/científico/creador". Los símbolos de esta identidade —las gafas 3D y la terminal de comandos— se convirtieron en los vehículos principales para navegar por la biografía, los servicios y el portafolio, transformando al visitante de un lector pasivo a un usuário activo.',
          ],
        },
        {
          number: "02",
          title: "Design & Desenvolvimento: Arquitetura interactiva",
          subtitle:
            "Designamos y construimos una experiência clara, rápida y diferenciada.",
          paragraphs: [
            "El sitio se construyó bajo una estricta filosofía de rendimiento y fluidez. Desde el preloader SVG animado que da paso a una entrada en cascada de los elementos, cada interacción está orquestada para generar una sensación de construcción en capas.",
            "Implementamos componentes de interfaz avanzados que desafían el layout tradicional:",
          ],
          table: [
            {
              component: "Hero 3D Interactivo",
              description:
                "Un modelo tridimensional de lentes manipulable por el usuário, renderizado en WebGL con físicas de luz y sombra en tiempo real.",
            },
            {
              component: "Terminal Funcional (CLI)",
              description:
                "La biografía y el formulario de contacto no son texto plano; son interfaces de línea de comandos funcionales que responden a inputs reales del usuário.",
            },
            {
              component: "Galería Editorial (Blog)",
              description:
                "Un patrón de navegación inspirado en el design nativo de iOS (Apple Cards Carousel). Las tarjetas se expanden a pantalla completa con efecto backdrop blur.",
            },
            {
              component: "Tarjetas Expansibles",
              description:
                "El portafolio de projetos utiliza animaciones de expansión y desenfoque para revelar arquiteturas tecnológicas sin abandonar la vista principal.",
            },
          ],
        },
        {
          number: "03",
          title: "Entrega & Evolução: Un manifiesto técnico",
          subtitle:
            "Publicamos el sitio y lo dejamos listo para crecer, medir y escalar.",
          paragraphs: [
            "El despliegue final es una plataforma robusta y altamente optimizada que sirve como centro de operaciones para una marca personal. El sitio incorpora una arquitetura modular que permite la integración futura de componentes experimentales (como físicas de gravedad en tarjetas o docks dinámicos).",
            "El resultado es un portafolio que filtra el ruido: atrae a clientes y colaboradores que valoran la excelencia técnica, estableciendo de inmediato un estándar de calidad y confirmando que el design de alto nivel y el código limpio son inseparables.",
          ],
        },
      ],
      impactQuote:
        "Diseñar un portafolio propio es probablemente el reto más complejo para un estúdio. Necesitaba un espacio que no solo documentara mis projetos en tecnología y ciencia, sino que hablara por sí mismo sobre mis estándares de calidad. La decisión de integrar entornos 3D reales y terminales interactivas cambió por completo la percepción de mi perfil. El sitio dejó de ser una simple tarjeta de presentación para convertirse en una demostración en tiempo real de lo que significa la artesanato digital. Ha sido clave para establecer autoridad técnica desde el primer segundo.",
      impactAttribution:
        "Cristopher Carrada, Desenvolvedor de Software e Fundador de Chiiko",
    } satisfies ProjectDetailContent,

    alancrespo_ai: {
      tagline:
        "De la academia al liderança global en Inteligência Artificial (Deep Tech).",
      services:
        "Design de Identidade Visual, Estratégia de Posicionamento B2B, Engenharia de Conteúdo.",
      client: "Alan Crespo Murillo.",
      contextTitle: "O Contexto",
      contextParagraphs: [
        'En una era saturada de algoritmos incomprensibles ("Cajas Negras") y perfiles genéricos, la autoridad técnica de Alan Crespo estaba fragmentada y era invisible para el algoritmo. A pesar de poseer un conocimiento científico profundo, su presencia digital no retenía a la audiencia ni proyectaba su verdadero valor.',
        'El reto no era crear un currículum bonito, sino construir la infraestructura visual y narrativa de una institución. Necesitábamos transformar su perfil para consolidarlo como el referente indiscutible del modelo "Scientist-Founder".',
      ],
      steps: [
        {
          number: "01",
          title: "Estratégia: Del ruido a la autoridad auditable",
          subtitle:
            "Analisamos sua marca, tu mercado y el objetivo real del projeto antes de diseñar.",
          paragraphs: [
            "Identificamos rápidamente que el mercado (C-Levels y tomadores de decisiones) no buscaba motivación ni tutoriales básicos; estaban aterrorizados por el riesgo legal y operativo de implementar mal la IA.",
            'Cambiamos el ángulo por completo. Posicionamos a Alan no como un entusiasta tecnológico, sino como un Asesor de Riesgo Sistémico y Arquitecto de Confianza. La estratégia se centró en la "Caja Blanca" (White Box) y la gobernanza tecnológica, creando un foso defensivo basado en ciencia dura.',
          ],
        },
        {
          number: "02",
          title: 'Design & Desenvolvimento: La estética de la "Caja Blanca"',
          subtitle:
            "Designamos y construimos una experiência clara, rápida y diferenciada.",
          paragraphs: [
            "Tradujimos esta visão estratégica en un ecosistema de marca y conteúdo altamente estructurado:",
            "Identidade Visual de Alto Nivel: Designamos un isotipo poligonal (el colibrí y el cerebro) que refleja precisión técnica y visão sistémica. Implementamos una paleta de colores sofisticada con Naranja Pastel Apagado (#ccb176), Celeste (#93b1cd) y acentos en Rojo Vívido (#ce1125), apoyada en tipografías contundentes (Archivo Black y Garet) para garantizar claridad editorial.",
            "Engenharia de Conteúdo Modular:",
          ],
          bullets: [
            {
              label: "LinkedIn",
              text: 'Desplegamos "Artillería Pesada" dirigida a corporativos, hablando de riesgos legales y arquitetura de sistemas.',
            },
            {
              label: "X (Twitter)",
              text: 'Construímos un laboratorio de debate de "Deep Tech", traduciendo hitos complejos como el Whole Brain Emulation y el Reinforcement Learning para generar fricción intelectual.',
            },
            {
              label: "Instagram",
              text: 'Humanizamos al genio, documentando su "Lifestyle Científico" en conferencias y tableros de ajedrez para construir un estatus aspiracional.',
            },
          ],
        },
        {
          number: "03",
          title: "Entrega & Evolução: Dominando el ecosistema B2B",
          subtitle:
            "Lanzamos el ecosistema y lo dejamos listo para crecer, medir y escalar.",
          paragraphs: [
            "El impacto fue inmediato y exponencial. En solo 30 días, pasamos de una línea plana de inactividad a generar más de 11,300 impresiones orgánicas cruzadas (6.1K en Instagram, 3.2K en LinkedIn y 2K en X) con cero dólares invertidos en publicidad.",
            "El rendimiento técnico superó cualquier estándar de la industria. En X, logramos un Engagement Rate masivo del 13.6% (cuando el promedio de la industria es del 1% al 2%), validando la marca frente a una élite tecnológica de seguidores verificados. Hoy, la infraestructura está lista para la Fase 2: llevar la producción visual a Tokio para posicionar a Alan como un líder de pensamiento global.",
          ],
        },
      ],
      impactQuote:
        "Pasar de la academia y la consultoría privada al ojo público es complejo. Tenía el conocimiento, pero estaba atrapado en mi propia 'Caja Negra'. El time no solo diseñó un logo; auditaron mi discurso, identificaron exactamente qué parte de mi conocimiento técnico tenía un valor de miles de dólares para el mercado corporativo, y lo empaquetaron en una identidade visual impecable. Pasar de ser invisible para el algoritmo a generar debates con la élite tecnológica de X y directivos en LinkedIn en un solo mes es la prueba de que el design estratégico y el conteúdo de alta fricción son la mejor inversión.",
      impactAttribution: "Alan Crespo Murillo, Scientist-Founder",
    } satisfies ProjectDetailContent,
  },
};
