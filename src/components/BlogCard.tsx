import { Link } from "react-router-dom";
import { getBlogPostPath } from "@/data/blog";

interface BlogCardProps {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  readMore: string;
}

export function BlogCard({
  slug,
  image,
  title,
  excerpt,
  category,
  date,
  readTime,
  readMore,
}: BlogCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg">
      <Link to={getBlogPostPath(slug)} className="block overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs md:text-sm text-neutral-500 font-light">
          <span className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-700">
            {category}
          </span>
          <span>{date}</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-black mb-3 leading-snug">
          <Link to={getBlogPostPath(slug)} className="hover:opacity-70 transition-opacity">
            {title}
          </Link>
        </h2>

        <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-6 flex-1">
          {excerpt}
        </p>

        <Link
          to={getBlogPostPath(slug)}
          className="inline-flex items-center text-sm md:text-base font-medium text-black hover:text-[#E4007C] transition-colors"
        >
          {readMore} →
        </Link>
      </div>
    </article>
  );
}
