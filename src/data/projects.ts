export interface Project {
  slug: string;
  title: string;
  description: string;
  services: string;
  client: string;
  image: string;
  websiteUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "eamx",
    title: "EAMX",
    description:
      "Arquitectura y precisión estructural llevadas al plano digital.",
    services:
      "Estrategia Digital, Diseño de Interacción, Desarrollo Frontend Avanzado.",
    client: "EAMX Arquitectos.",
    image: "/EAMX.png",
    websiteUrl: "https://eamx-website.vercel.app/",
  },
  {
    slug: "compufest",
    title: "Compufest [1]",
    description:
      "El evento estudiantil de computación y programación más grande de la UNAM.",
    services: "Estrategia Digital, Diseño UI/UX, Desarrollo Web.",
    client: "Compufest / Comunidad Estudiantil UNAM.",
    image: "/COMPUFEST.png",
    websiteUrl: "https://www.compufest.cc/",
  },
  {
    slug: "emicarrada",
    title: "emicarrada.com",
    description:
      "La intersección entre ingeniería de software y artesanía digital.",
    services: "Dirección de Arte, Desarrollo Frontend Avanzado, WebGL 3D.",
    client: "Cristopher Carrada.",
    image: "/EMICARRADA.png",
    websiteUrl: "https://www.emicarrada.com/",
  },
  {
    slug: "alancrespo_ai",
    title: "Alan Crespo",
    description:
      "De la academia al liderazgo global en Inteligencia Artificial (Deep Tech).",
    services:
      "Diseño de Identidad Visual, Estrategia de Posicionamiento B2B, Ingeniería de Contenido.",
    client: "Alan Crespo Murillo.",
    image: "/ALANCRESPOMURILLO.png",
  },
];

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectPath(slug: string, lang: "es" | "en"): string {
  return lang === "en" ? `/projects/${slug}` : `/proyectos/${slug}`;
}
