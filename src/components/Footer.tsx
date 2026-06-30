import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { getRouteType as getSharedRouteType } from '@/lib/localizedRoutes';
import { useAppLanguage } from '@/hooks/useAppLanguage';

// Helper function to detect equivalent routes across languages
const getRouteType = (pathname: string): string | null => {
  const sharedType = getSharedRouteType(pathname);
  if (sharedType) return sharedType;

  const routeMap: { [key: string]: string } = {
    '/': 'home',
    '/nosotros': 'about',
    '/about': 'about',
    '/como-trabajamos': 'method',
    '/how-we-work': 'method',
    '/planes': 'plans',
    '/plans': 'plans',
    '/contacto': 'contact',
    '/contact': 'contact',
    '/privacidad': 'privacy',
    '/privacy': 'privacy',
    '/faq': 'faq',
    '/ayuda': 'help',
    '/help': 'help',
    '/terminos': 'terms',
    '/terms': 'terms',
    '/politica-cookies': 'cookies',
    '/cookie-policy': 'cookies',
    '/aviso-legal': 'legal',
    '/legal': 'legal',
    '/blog': 'blog',
  };
  if (pathname.startsWith('/blog/')) return 'blog';
  return routeMap[pathname] || null;
};

const isRouteActive = (currentPath: string, itemPath: string): boolean => {
  if (currentPath === itemPath) return true;
  const currentType = getRouteType(currentPath);
  const itemType = getRouteType(itemPath);
  return currentType !== null && currentType === itemType;
};

export default function Footer() {
  const { t } = useTranslation();
  const location = useLocation();
  const { usesSpanishRoutes } = useAppLanguage();

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: usesSpanishRoutes ? '/nosotros' : '/about' },
    { label: t('nav.method'), href: usesSpanishRoutes ? '/como-trabajamos' : '/how-we-work' },
    { label: t('nav.plans'), href: usesSpanishRoutes ? '/planes' : '/plans' },
    { label: t("nav.blog"), href: "/blog" },
    { label: t('nav.privacy'), href: usesSpanishRoutes ? '/privacidad' : '/privacy' },
    { label: t('nav.faq'), href: '/faq' },
    { label: t('nav.help'), href: usesSpanishRoutes ? '/ayuda' : '/help' },
    { label: t('nav.terms'), href: usesSpanishRoutes ? '/terminos' : '/terms' },
    { label: t('nav.cookies'), href: usesSpanishRoutes ? '/politica-cookies' : '/cookie-policy' },
    { label: t('nav.legal'), href: usesSpanishRoutes ? '/aviso-legal' : '/legal' },
  ];

  const isActive = (href: string) => {
    return isRouteActive(location.pathname, href);
  };

  return (
    <footer className="w-full bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 tablet:px-6 md:px-8 py-16 tablet:py-18 md:py-24">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 tablet:gap-14 md:gap-20 w-full text-left">
          {/* Brand Column */}
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start w-full">
              <img
                src="/chiikologoensvg.svg"
                alt="chiikö"
                className="h-16 tablet:h-20 md:h-40 object-contain object-left mb-1 md:mb-2"
                style={{ marginLeft: '-8px' }}
              />
              <p className="text-xs tablet:text-xs md:text-sm text-gray-600 leading-snug font-light max-w-xs">
                {t('footer.tagline')}
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <nav className="flex flex-col space-y-2 md:space-y-3">
            <ul className="space-y-2 md:space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className={`text-sm md:text-base transition-all duration-200 inline-block ${
                        isActive(link.href)
                          ? 'text-gray-900 font-semibold'
                          : 'text-gray-600 font-light hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={`text-sm md:text-base transition-all duration-200 inline-block ${
                        isActive(link.href)
                          ? 'text-gray-900 font-semibold'
                          : 'text-gray-600 font-light hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Column */}
          <div className="flex flex-col space-y-2 md:space-y-3">
            <address className="not-italic space-y-2 md:space-y-3">
              <div>
                <a
                  href={`mailto:${t('footer.email')}`}
                  className="text-sm md:text-base text-gray-600 font-light transition-opacity duration-200 hover:text-gray-900 block"
                >
                  {t('footer.email')}
                </a>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-600 font-light">
                  {t('footer.location')}
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200" style={{ opacity: 0.15 }}></div>

      <div className="max-w-7xl mx-auto px-4 tablet:px-6 md:px-8 py-8 tablet:py-9 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 tablet:gap-5 md:gap-4">
          {/* Copyright */}
          <p className="text-xs md:text-sm text-gray-500 font-light">
            {t('footer.copyright')}
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 md:gap-6 items-center">
            <a
              href="https://www.instagram.com/chiiko.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
              aria-label="Instagram"
            >
              <img 
                src="/social-icons/icons8-instagram.svg" 
                alt="Instagram" 
                className="w-6 h-6 md:w-7 md:h-7 opacity-60 hover:opacity-100"
              />
            </a>

            <a
              href="https://www.behance.net/chiiko"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
              aria-label="Behance"
            >
              <img 
                src="/social-icons/icons8-behance.svg" 
                alt="Behance" 
                className="w-6 h-6 md:w-7 md:h-7 opacity-60 hover:opacity-100"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/chiiko/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
              aria-label="LinkedIn"
            >
              <img 
                src="/social-icons/icons8-linkedin.svg" 
                alt="LinkedIn" 
                className="w-6 h-6 md:w-7 md:h-7 opacity-60 hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
