import { BLOG_DATES, getBlogHeroImage } from "@/data/blogGallery";

export const BLOG_SLUGS = [
  "veraz-news-platform-case",
  "google-ecosystem-visit",
  "pinterest-visual-culture-visit",
  "sophie-gomez-digital-identity",
  "unam-democratic-design-workshop",
  "anti-marketing-unam",
  "compufest-2026-sponsors",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export interface BlogPostMeta {
  slug: BlogSlug;
  image: string;
  date: string;
  readMinutes: number;
}

export const BLOG_POST_META: Record<BlogSlug, BlogPostMeta> = {
  "veraz-news-platform-case": {
    slug: "veraz-news-platform-case",
    image: getBlogHeroImage("veraz-news-platform-case"),
    date: BLOG_DATES["veraz-news-platform-case"],
    readMinutes: 6,
  },
  "google-ecosystem-visit": {
    slug: "google-ecosystem-visit",
    image: getBlogHeroImage("google-ecosystem-visit"),
    date: BLOG_DATES["google-ecosystem-visit"],
    readMinutes: 4,
  },
  "pinterest-visual-culture-visit": {
    slug: "pinterest-visual-culture-visit",
    image: getBlogHeroImage("pinterest-visual-culture-visit"),
    date: BLOG_DATES["pinterest-visual-culture-visit"],
    readMinutes: 4,
  },
  "sophie-gomez-digital-identity": {
    slug: "sophie-gomez-digital-identity",
    image: getBlogHeroImage("sophie-gomez-digital-identity"),
    date: BLOG_DATES["sophie-gomez-digital-identity"],
    readMinutes: 5,
  },
  "unam-democratic-design-workshop": {
    slug: "unam-democratic-design-workshop",
    image: getBlogHeroImage("unam-democratic-design-workshop"),
    date: BLOG_DATES["unam-democratic-design-workshop"],
    readMinutes: 5,
  },
  "anti-marketing-unam": {
    slug: "anti-marketing-unam",
    image: getBlogHeroImage("anti-marketing-unam"),
    date: BLOG_DATES["anti-marketing-unam"],
    readMinutes: 5,
  },
  "compufest-2026-sponsors": {
    slug: "compufest-2026-sponsors",
    image: getBlogHeroImage("compufest-2026-sponsors"),
    date: BLOG_DATES["compufest-2026-sponsors"],
    readMinutes: 5,
  },
};

export function getBlogPostPath(slug: string): string {
  return `/blog/${slug}`;
}

export function getBlogListPath(): string {
  return "/blog";
}
