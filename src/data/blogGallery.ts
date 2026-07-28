import type { MasonryItem } from "@/components/ui/Masonry";

const BLOG_FOLDERS = {
  "veraz-news-platform-case": "Veraz",
  "google-ecosystem-visit": "VisitaGoogle",
  "pinterest-visual-culture-visit": "Visita Pinterest",
  "sophie-gomez-digital-identity": "Sophie Gomez",
  "unam-democratic-design-workshop": "Taller Canva",
  "anti-marketing-unam": "Anti-Marketing",
  "compufest-2026-sponsors": "Sponsor Compufest",
} as const;

export type BlogGallerySlug = keyof typeof BLOG_FOLDERS;

const BLOG_HERO_FILES: Record<BlogGallerySlug, string> = {
  "veraz-news-platform-case": "inicio.jpg",
  "google-ecosystem-visit": "inicio.jpg",
  "pinterest-visual-culture-visit": "inicio.jpeg",
  "sophie-gomez-digital-identity": "inicio.jpg",
  "unam-democratic-design-workshop": "inicio.jpg",
  "anti-marketing-unam": "inicio.jpg",
  "compufest-2026-sponsors": "inicio.jpeg",
};

// ISO dates parsed from public/blog/<folder>/fecha.txt
export const BLOG_DATES: Record<BlogGallerySlug, string> = {
  "veraz-news-platform-case": "2026-07-28",
  "google-ecosystem-visit": "2026-04-07",
  "pinterest-visual-culture-visit": "2026-01-13",
  "sophie-gomez-digital-identity": "2026-06-29",
  "unam-democratic-design-workshop": "2026-05-07",
  "anti-marketing-unam": "2026-06-25",
  "compufest-2026-sponsors": "2026-04-23",
};

const BLOG_GALLERY_FILES: Record<BlogGallerySlug, string[]> = {
  "veraz-news-platform-case": [
    "10.jpg",
    "17.jpg",
    "5.jpg",
    "6.jpg",
    "Captura desde 2026-07-28 17-20-24.png",
    "Captura desde 2026-07-28 17-20-52.png",
    "Captura desde 2026-07-28 17-21-14.png",
    "¿Cómo funciona Veraz.jpg",
    "estudiantes-vendio-a-mikel-amondarain-la-joya-que-lo-salvo-en-la-copa-libertador-1f968a9b (Copiar).png",
  ],
  "google-ecosystem-visit": [
    "4so.jpeg",
    "GoogleOf.jpg",
    "WhatsApp Image 2026-06-19 at 3.03.18 PM.jpg",
    "WhatsApp Image 2026-06-29 at 3.10.00 PM.jpeg",
    "WhatsApp Image 2026-06-29 at 3.10.01 PM (1).jpeg",
    "WhatsApp Image 2026-06-29 at 3.10.01 PM (2).jpeg",
    "WhatsApp Image 2026-06-29 at 3.10.01 PM (3).jpeg",
    "WhatsApp Image 2026-06-29 at 3.10.01 PM.jpeg",
  ],
  "pinterest-visual-culture-visit": [
    "WhatsApp Image 2026-06-29 at 7.34.09 PM (1).jpeg",
    "WhatsApp Image 2026-06-29 at 7.34.09 PM.jpeg",
    "WhatsApp Image 2026-06-29 at 7.34.10 PM (1).jpeg",
    "WhatsApp Image 2026-06-29 at 7.34.10 PM (2).jpeg",
    "WhatsApp Image 2026-06-29 at 7.34.10 PM.jpeg",
  ],
  "sophie-gomez-digital-identity": [
    "L2650563_edited.jpg",
    "PHOTO-2025-12-13-20-58-23 (1).jpg",
    "SophieGaëlle_-13.jpg",
    "SophieGaëlle_-17.jpg",
    "SophieGaëlle_-2.jpg",
    "SophieGaëlle_-25.jpg",
    "SophieGaëlle_-43.jpg",
    "entry point 5.jpg",
  ],
  "unam-democratic-design-workshop": [
    "10.jpg",
    "17.jpg",
    "19.jpg",
    "5.jpg",
    "7.jpg",
    "_DSC1661.jpg",
    "_DSC1664.jpg",
    "_DSC1668.jpg",
  ],
  "anti-marketing-unam": [
    "10.jpg",
    "5.jpg",
    "7.jpg",
    "WhatsApp Image 2026-06-29 at 3.13.57 PM (1).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.57 PM (2).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.57 PM (3).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.57 PM.jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.58 PM (1).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.58 PM (2).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.58 PM (3).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.58 PM (4).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.58 PM (5).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.58 PM.jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.59 PM (1).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.59 PM (2).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.59 PM (3).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.59 PM (4).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.59 PM.jpeg",
  ],
  "compufest-2026-sponsors": [
    "WhatsApp Image 2026-04-29 at 20.18.17.webp",
    "WhatsApp Image 2026-06-29 at 3.13.56 PM (2).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.56 PM.jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.57 PM (1).jpeg",
    "WhatsApp Image 2026-06-29 at 3.13.57 PM.jpeg",
  ],
};

const MASONRY_HEIGHTS = [520, 380, 440, 300, 360, 480, 420, 340, 560, 400, 500, 320];

function blogAssetPath(folder: string, file: string): string {
  return `/blog/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

export function getBlogHeroImage(slug: BlogGallerySlug): string {
  const folder = BLOG_FOLDERS[slug];
  const file = BLOG_HERO_FILES[slug];
  return blogAssetPath(folder, file);
}

export function getBlogMasonryItems(slug: string): MasonryItem[] {
  if (!(slug in BLOG_GALLERY_FILES)) return [];
  const key = slug as BlogGallerySlug;
  const folder = BLOG_FOLDERS[key];
  const files = BLOG_GALLERY_FILES[key];
  if (!folder || !files?.length) return [];

  return files.map((file, index) => ({
    id: `${slug}-${index}`,
    img: blogAssetPath(folder, file),
    height: MASONRY_HEIGHTS[index % MASONRY_HEIGHTS.length],
  }));
}
