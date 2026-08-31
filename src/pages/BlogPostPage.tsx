import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Masonry from "@/components/ui/Masonry";
import { getBlogListPath, getBlogPostPath } from "@/data/blog";
import { getBlogMasonryItems } from "@/data/blogGallery";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useBlogTranslations } from "@/hooks/useBlogTranslations";
import { usePageSeo } from "@/hooks/usePageSeo";
import {
  buildBreadcrumbSchema,
  generateBlogPostingSchema,
  SITE_NAME,
  toAbsoluteUrl,
} from "@/lib/seo";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { page, getPost, formatDate, formatReadTime } = useBlogTranslations();
  const { language } = useAppLanguage();
  const { hreflangs, canonicalPath } = usePageSeo();
  const { t } = useTranslation();
  const post = getPost(slug);
  const masonryItems = slug ? getBlogMasonryItems(slug) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to={getBlogListPath()} replace />;
  }

  const postPath = getBlogPostPath(post.slug);
  const blogPostingSchema = generateBlogPostingSchema(
    {
      title: post.title,
      description: post.excerpt,
      slug: post.slug,
      image: post.image,
      datePublished: post.date,
      section: post.category,
    },
    language
  );
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t("nav.home"), path: "/" },
    { name: page.title, path: getBlogListPath() },
    { name: post.title, path: postPath },
  ]);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={postPath}
        canonicalUrl={canonicalPath}
        hreflangs={hreflangs}
        ogType="article"
        ogImage={toAbsoluteUrl(post.image)}
        ogImageAlt={post.title}
        publishedTime={post.date}
        articleSection={post.category}
        articleAuthor={SITE_NAME}
        schema={[blogPostingSchema, breadcrumbSchema]}
      />

      <div className="w-full min-h-screen bg-white flex flex-col">
        <article className="flex-grow py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to={getBlogListPath()}
              className="inline-block text-gray-500 hover:text-black mb-8 transition-colors font-light"
            >
              {page.backToBlog}
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-neutral-500 font-light">
              <span className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-700">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{formatReadTime(post.readMinutes)}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              {post.title}
            </h1>

            <img
              src={post.image}
              alt=""
              className="w-full rounded-2xl mb-10 object-cover max-h-[28rem]"
            />

            <div className="space-y-6 text-base md:text-lg text-neutral-700 font-light leading-relaxed">
              {post.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {masonryItems.length > 0 && (
            <div className="max-w-6xl mx-auto mt-20 px-0">
              <Masonry
                items={masonryItems}
                ease="power3.out"
                duration={0.4}
                stagger={0.03}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.97}
                blurToFocus={false}
                colorShiftOnHover={false}
              />
            </div>
          )}
        </article>

        <Footer />
      </div>
    </>
  );
}
