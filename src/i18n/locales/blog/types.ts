export interface BlogPostContent {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  body: string[];
}

export interface BlogPageContent {
  seoTitle: string;
  seoDescription: string;
  title: string;
  description: string;
  readMore: string;
  readTimeLabel: string;
  backToBlog: string;
  posts: BlogPostContent[];
}
