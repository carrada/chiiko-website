import { useEffect } from "react";
import SEO from "@/components/SEO";
import { SEO_METADATA } from "@/constants";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";

function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white">
      <SEO
        title={SEO_METADATA.BLOG.TITLE}
        description={SEO_METADATA.BLOG.DESCRIPTION}
        ogType="website"
      />
      <ResizableNavbarDemo />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <p className="text-lg text-center">Coming soon...</p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
