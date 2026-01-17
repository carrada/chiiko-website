import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { t } = useTranslation();

  const navLinks = [
    { label: t('nav.projects'), href: '#proyectos' },
    { label: t('nav.method'), href: '#metodo' },
    { label: t('nav.services'), href: '#servicios' },
    { label: t('nav.contact'), href: 'mailto:hola@chiiko.mx' },
  ];

  return (
    <footer className="w-full bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 tablet:px-6 md:px-8 py-16 tablet:py-18 md:py-24">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 tablet:gap-14 md:gap-20">
          {/* Brand Column */}
          <div className="flex flex-col">
            <img
              src="/chiikoLogoNegro.png"
              alt="chiikö"
              className="h-16 tablet:h-20 md:h-24 object-contain w-fit mb-1 md:mb-2"
            />
            <p className="text-xs tablet:text-xs md:text-sm text-gray-600 leading-snug font-light max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation Column */}
          <nav className="flex flex-col space-y-2 md:space-y-3">
            <ul className="space-y-2 md:space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-sm md:text-base text-gray-600 font-light transition-opacity duration-200 hover:text-gray-900 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Column */}
          <div className="flex flex-col space-y-2 md:space-y-3">
            <address className="not-italic space-y-2 md:space-y-3">
              <div>
                <a
                  href="mailto:hola@chiiko.mx"
                  className="text-sm md:text-base text-gray-600 font-light transition-opacity duration-200 hover:text-gray-900 block"
                >
                  hola@chiiko.mx
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
          <div className="flex gap-6 md:gap-8 items-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-opacity duration-200 hover:text-gray-900 hover:opacity-70"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-opacity duration-200 hover:text-gray-900 hover:opacity-70"
              aria-label="Instagram"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-10a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.5-5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
