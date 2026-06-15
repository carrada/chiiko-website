"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTranslation } from "react-i18next";

export function ResizableNavbarDemo() {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  const navItems = [
    { name: t('nav.home'), link: "/" },
    { name: t('nav.projects'), link: "/proyectos" },
    { name: t('nav.plans'), link: isSpanish ? "/planes" : "/plans" },
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
