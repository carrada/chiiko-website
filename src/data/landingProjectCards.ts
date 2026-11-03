import type { ProjectSlug } from "@/data/projects";
import { PROJECT_META } from "@/data/projects";

export type LandingProjectCard = {
  id: string;
  slug?: ProjectSlug;
  title?: string;
  image?: string;
  imageFit?: "contain" | "cover";
  link: string;
  backgroundColor: string;
};

const STUDIO_CARD_STYLE: Partial<
  Record<ProjectSlug, Pick<LandingProjectCard, "backgroundColor" | "image" | "imageFit">>
> = {
  veraz: {
    backgroundColor: "#0B0F14",
    image: PROJECT_META.veraz.image,
    imageFit: "cover",
  },
  eamx: {
    backgroundColor: "#5e6e60",
    image: "/eamxlogo.svg",
    imageFit: "contain",
  },
  compufest: {
    backgroundColor: "#00FF00",
    image: "/compufestLogo - Negro.svg",
    imageFit: "contain",
  },
  emicarrada: {
    backgroundColor: "#041737",
    image: "/emicarrada.svg",
    imageFit: "contain",
  },
};

function cardFromSlug(slug: ProjectSlug): LandingProjectCard {
  const meta = PROJECT_META[slug];
  const style = STUDIO_CARD_STYLE[slug] ?? {
    backgroundColor: "#ffffff",
    image: meta.image,
    imageFit: "cover" as const,
  };
  return {
    id: slug,
    slug,
    image: style.image ?? meta.image,
    imageFit: style.imageFit,
    link: meta.websiteUrl ?? "",
    backgroundColor: style.backgroundColor,
  };
}

/** Orden de la sección Proyectos en home (CometCard). */
export const LANDING_PROJECT_CARDS: LandingProjectCard[] = [
  cardFromSlug("veraz"),
  cardFromSlug("eamx"),
  cardFromSlug("compufest"),
  cardFromSlug("emicarrada"),
  {
    id: "sophiegomez",
    title: "Sophie Gómez",
    image: "/sophiegomez.jpg",
    imageFit: "cover",
    link: "https://www.sophiegomez.me",
    backgroundColor: "#f4f4f5",
  },
  {
    id: "calmecac",
    title: "Calmecac México",
    image: "/calmecac.jpg",
    imageFit: "cover",
    link: "https://www.calmecacmexico.org",
    backgroundColor: "#f4f4f5",
  },
  {
    id: "guugul",
    title: "Guugul",
    image: "/guugul.jpg",
    imageFit: "cover",
    link: "https://www.guugul.org",
    backgroundColor: "#f4f4f5",
  },
];
