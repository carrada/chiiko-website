import type { BlogPageContent } from "./types";

const body = (paragraphs: string[]) => paragraphs;

export const blogPageContent: BlogPageContent = {
  seoTitle: "Blog | Chiikö",
  seoDescription: "Crônicas do estúdio sobre visitas ao Google e ao Pinterest, o projeto de Sophie Gomez, oficinas na UNAM e o patrocínio do Compufest.",
  title: "Blog",
  description: "Reflexões do estúdio Chiikö sobre design, desenvolvimento e estratégia digital.",
  readMore: "Ler artigo",
  readTimeLabel: "min de leitura",
  backToBlog: "← Voltar ao blog",
  posts: [
    {
      slug: "google-ecosystem-visit",
      title: "Inspiração no ecossistema: visita ao Google",
      excerpt: "Design de interação evolui quando entendemos o ecossistema tecnológico global.",
      category: "Inspiração",
      body: body([
        "Design de interação não nasce isolado atrás de uma tela; ele amadurece ao ler o ecossistema tecnológico como um todo.",
        "Neste mês visitamos os escritórios do Google na Cidade do México para observar como as equipes pensam escala, jornadas de uso e continuidade entre espaços físicos e produtos digitais.",
        "Para um estúdio boutique como a Chiikö, esse contato não serve para copiar fórmulas, e sim para extrair lições de consistência, acessibilidade e desempenho.",
        "Voltamos ao estúdio com critérios mais claros e foco renovado em cada decisão de produto.",
      ]),
    },
    {
      slug: "pinterest-visual-culture-visit",
      title: "Curadoria e cultura visual: visita ao Pinterest",
      excerpt: "Criar com intenção exige treino do olhar e compreensão de públicos criativos.",
      category: "Cultura visual",
      body: body([
        "Projetar com intenção pede treino visual constante e leitura atenta do comportamento de comunidades criativas.",
        "Na nossa rota por polos de inovação na Cidade do México, visitamos o Pinterest, plataforma central de inspiração e curadoria visual na internet.",
        "A visita nos ajudou a entender como tendências visuais se transformam em interfaces fluidas e intuitivas, mantendo clareza e relevância cultural.",
        "De volta à Chiikö, aplicamos esses aprendizados para fortalecer a narrativa visual dos próximos entregáveis.",
      ]),
    },
    {
      slug: "sophie-gomez-digital-identity",
      title: "Artesania para o palco: nova identidade digital de Sophie Gomez",
      excerpt: "Traduzir uma carreira artística para o meio digital exige sensibilidade e estrutura.",
      category: "Projetos",
      body: body([
        "Converter uma trajetória artística em experiência digital requer escuta cuidadosa, organização tipográfica e precisão narrativa.",
        "Estamos felizes em oficializar nossa colaboração com a atriz Sophie Gomez no novo site e portfólio oficial, sophiegomez.me.",
        "Nosso desafio é construir um ambiente minimalista guiado por princípios do design suíço, no qual o ruído visual desaparece e o trabalho dela no palco e na câmera ganha destaque total.",
        "Estamos na fase de arquitetura e concepção, e em breve publicaremos o estudo de caso completo deste projeto.",
      ]),
    },
    {
      slug: "unam-democratic-design-workshop",
      title: "Fundamentos visuais: oficina de design democrático na Faculdade de Ciências",
      excerpt: "Bom design depende de clareza estrutural, não de ferramentas complexas.",
      category: "Comunidade",
      body: body([
        "A qualidade de um projeto visual não depende de programas sofisticados, mas da clareza da estrutura que sustenta a mensagem.",
        "Neste mês voltamos à Faculdade de Ciências da UNAM para conduzir uma oficina prática de composição e comunicação.",
        "Em vez de focar nas funções de programas como Canva, trabalhamos princípios universais: hierarquia tipográfica, uso intencional do espaço em branco, contraste e equilíbrio.",
        "Ver estudantes aplicando essas regras em projetos científicos confirma nossa visão: design é uma ferramenta democrática para organizar ideias e ampliar a compreensão.",
      ]),
    },
    {
      slug: "anti-marketing-unam",
      title: "Anti-Marketing: relevância acima do ruído na UNAM",
      excerpt: "Em ambientes digitais saturados, autenticidade e intenção geram vantagem duradoura.",
      category: "Estratégia",
      body: body([
        "Quando os canais digitais estão lotados de conteúdo genérico, posicionamento autêntico vale mais do que volume.",
        "Na Faculdade de Ciências da UNAM apresentamos uma segunda palestra sobre estratégia de marca contemporânea, guiada por uma premissa clara: Anti-Marketing.",
        "Questionamos métricas de vaidade, saturação algorítmica e táticas agressivas de venda, e mostramos caminhos para construir autoridade orgânica por meio de valor real.",
        "Essas conversas com públicos científicos mantêm nosso pensamento ligado à realidade e reforçam que relevância sempre supera ruído.",
      ]),
    },
    {
      slug: "compufest-2026-sponsors",
      title: "Apoio ao talento local: patrocinadores oficiais do Compufest 2026",
      excerpt: "A cultura tecnológica independente cresce com apoio coletivo.",
      category: "Comunidade",
      body: body([
        "Ecossistemas tecnológicos independentes não se expandem por acaso; eles crescem quando espaços coletivos recebem apoio contínuo.",
        "Na Chiikö nos unimos ao Compufest 2026 como patrocinadores oficiais para fortalecer um encontro que reúne desenvolvedores, designers e entusiastas de tecnologia de todo o país.",
        "Para nós, isso vai além de visibilidade de marca: é compromisso com cultura construtora, troca aberta de conhecimento e desenvolvimento de software com propósito.",
        "Saímos do festival com novas conexões e energia renovada para seguir elevando o nível do design e do desenvolvimento digital.",
      ]),
    }
  ],
};
