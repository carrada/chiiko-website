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
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.about'), link: "#nosotros" },
    { name: t('nav.plans'), link: "#planes" },
    { name: t('nav.contact'), link: "#contacto" },
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
