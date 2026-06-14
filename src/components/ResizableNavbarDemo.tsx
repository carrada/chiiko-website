"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/hooks/useLanguage";

export function ResizableNavbarDemo() {
  const { t, isSpanish } = useLanguage();

  const navItems = [
    { name: t('nav.about'), link: isSpanish ? "/nosotros" : "/about" },
    { name: t('nav.plans'), link: isSpanish ? "/planes" : "/plans" },
    { name: t('nav.contact'), link: isSpanish ? "/contacto" : "/contact" },
  ];

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <LanguageSwitcher />
      </NavBody>
    </Navbar>
  );
}
