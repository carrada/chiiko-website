const secondaryPrefetchers: Record<string, () => Promise<unknown>> = {
  "/blog": () => import("@/pages/BlogPage"),
};

const prefetched = new Set<string>();

export function prefetchRoute(_path: string) {
  // Main nav routes are eager-loaded; nothing to prefetch on hover.
}

export function prefetchSecondaryRoutes() {
  for (const [path, prefetch] of Object.entries(secondaryPrefetchers)) {
    if (prefetched.has(path)) continue;
    prefetched.add(path);
    void prefetch();
  }
}
