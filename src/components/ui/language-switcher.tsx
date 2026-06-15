import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
  APP_LANGUAGES,
  LANGUAGE_LABELS,
  LANGUAGE_NAMES,
  normalizeLanguage,
  type AppLanguage,
} from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/localizedRoutes";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLang = normalizeLanguage(i18n.language);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const switchLanguage = (newLang: AppLanguage) => {
    if (newLang === currentLang) {
      setOpen(false);
      return;
    }
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    const scrollY = window.scrollY;
    navigate(getLocalizedPath(location.pathname, newLang), {
      replace: true,
      state: { preserveScroll: true, scrollY },
    });
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-0.5 px-1.5 py-0.5 lg:px-2 lg:py-1 text-xs lg:text-sm font-bold text-black transition-colors hover:text-neutral-700 focus:outline-none"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{LANGUAGE_LABELS[currentLang]}</span>
        <IconChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
          stroke={2}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-full z-50 mt-2 min-w-[9rem] overflow-hidden rounded-lg border border-neutral-200 bg-white py-1 shadow-lg"
        >
          {APP_LANGUAGES.map((lang) => (
            <li key={lang} role="option" aria-selected={currentLang === lang}>
              <button
                type="button"
                onClick={() => switchLanguage(lang)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-xs lg:text-sm transition-colors hover:bg-neutral-50",
                  currentLang === lang
                    ? "font-bold text-black"
                    : "font-normal text-neutral-600"
                )}
              >
                <span>{LANGUAGE_NAMES[lang]}</span>
                <span className="text-neutral-400">{LANGUAGE_LABELS[lang]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
