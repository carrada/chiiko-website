"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTranslation } from "react-i18next";
import { useAppLanguage } from "@/hooks/useAppLanguage";

export function ResizableNavbarDemo() {
  const { t } = useTranslation();
  const { usesSpanishRoutes } = useAppLanguage();

  const navItems = [
    { name: t("nav.about"), link: usesSpanishRoutes ? "/nosotros" : "/about" },
    { name: t("nav.projects"), link: usesSpanishRoutes ? "/proyectos" : "/projects" },
    { name: t("nav.plans"), link: usesSpanishRoutes ? "/planes" : "/plans" },
  ];

  return (
    <div className="navbar-light [color-scheme:light]">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <LanguageSwitcher />
        </NavBody>
      </Navbar>
    </div>
  );
}
