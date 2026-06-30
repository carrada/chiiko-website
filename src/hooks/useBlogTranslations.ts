import { useMemo } from "react";
import { useTranslation } from "react-i18next";
// i18n bundle access via getResourceBundle
import {
  BLOG_POST_META,
  BLOG_SLUGS,
  type BlogPostMeta,
} from "@/data/blog";
import type { BlogPageContent, BlogPostContent } from "@/i18n/locales/blog/types";

export interface LocalizedBlogPost extends BlogPostMeta {
  title: string;
  excerpt: string;
  category: string;
  body: string[];
}

export function useBlogTranslations() {
  const { i18n } = useTranslation();

  const page = useMemo(
    () =>
      i18n.getResourceBundle(i18n.language, "translation")
        .blogPage as BlogPageContent,
    [i18n, i18n.language]
  );

  const posts = useMemo<LocalizedBlogPost[]>(
    () =>
      BLOG_SLUGS.map((slug) => {
        const meta = BLOG_POST_META[slug];
        const content = page.posts.find((p) => p.slug === slug);
        return {
          ...meta,
          title: content?.title ?? slug,
          excerpt: content?.excerpt ?? "",
          category: content?.category ?? "",
          body: content?.body ?? [],
        };
      }),
    [page.posts]
  );

  const getPost = (slug: string | undefined) =>
    posts.find((post) => post.slug === slug);

  const formatDate = (isoDate: string) => {
    const localeMap: Record<string, string> = {
      es: "es-MX",
      en: "en-US",
      fr: "fr-FR",
      de: "de-DE",
      pt: "pt-BR",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      nl: "nl-NL",
      zh: "zh-CN",
    };
    const lang = i18n.language.substring(0, 2);
    return new Intl.DateTimeFormat(localeMap[lang] ?? "es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(isoDate));
  };

  const formatReadTime = (minutes: number) =>
    `${minutes} ${page.readTimeLabel}`;

  return {
    page,
    posts,
    getPost,
    formatDate,
    formatReadTime,
  };
}

export type { BlogPostContent };
