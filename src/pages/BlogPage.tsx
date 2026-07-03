import { useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BlogCard } from "@/components/BlogCard";
import { getBlogListPath } from "@/data/blog";
import { useBlogTranslations } from "@/hooks/useBlogTranslations";
import { usePageSeo } from "@/hooks/usePageSeo";
import {
  buildBreadcrumbSchema,
  generateBlogListSchema,
} from "@/lib/seo";

export default function BlogPage() {
  const { page, posts, formatDate, formatReadTime } = useBlogTranslations();
  const { hreflangs, canonicalPath } = usePageSeo();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogListSchema = generateBlogListSchema(
    posts.map((post) => ({
      title: post.title,
      slug: post.slug,
      datePublished: post.date,
    })),
    getBlogListPath(),
    page.title
  );

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t("nav.home"), path: "/" },
    { name: page.title, path: getBlogListPath() },
  ]);

  return (
    <>
      <SEO
        title={page.seoTitle}
        description={page.seoDescription}
        url={getBlogListPath()}
        canonicalUrl={canonicalPath}
        hreflangs={hreflangs}
        schema={[blogListSchema, breadcrumbSchema]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full min-h-screen bg-white flex flex-col"
      >
        <ResizableNavbarDemo />

        <div className="flex-grow py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
              {page.title}
            </h1>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl font-light leading-relaxed">
              {page.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  image={post.image}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={formatDate(post.date)}
                  readTime={formatReadTime(post.readMinutes)}
                  readMore={page.readMore}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </motion.div>
    </>
  );
}
