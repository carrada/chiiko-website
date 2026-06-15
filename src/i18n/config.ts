import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { APP_LANGUAGES, normalizeLanguage } from '@/lib/i18n';
import { i18nResources } from './resources';

i18n.use(initReactI18next).init({
  resources: i18nResources,
  lng: normalizeLanguage(localStorage.getItem('language') || 'es'),
  fallbackLng: 'es',
  supportedLngs: [...APP_LANGUAGES],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
