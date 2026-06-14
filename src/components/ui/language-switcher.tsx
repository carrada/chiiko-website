import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    try {
      localStorage.setItem('language', newLang);
    } catch {
      // Storage may be unavailable in private browsing or when quota is exceeded
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative px-2 py-1 lg:px-3 lg:py-1 text-neutral-600 dark:text-neutral-300 text-sm lg:text-base transition-opacity duration-200 hover:text-gray-900 focus:outline-none"
      aria-label="Toggle language"
    >
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
