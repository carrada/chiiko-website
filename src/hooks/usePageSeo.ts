import { useLocation } from "react-router-dom";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { buildHreflangs, getCanonicalPath } from "@/lib/seo-i18n";

export function usePageSeo() {
  const location = useLocation();
  const { language } = useAppLanguage();

  return {
    hreflangs: buildHreflangs(location.pathname),
    canonicalPath: getCanonicalPath(location.pathname, language),
  };
}
