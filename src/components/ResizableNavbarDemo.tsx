"use client";

import PillNav from "@/components/ui/PillNav";
import { isRouteActive } from "@/components/ui/resizable-navbar";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTranslation } from "react-i18next";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { Link, useLocation } from "react-router-dom";
import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import "./chiiko-nav.css";

type NavRouterLinkProps = ComponentPropsWithoutRef<"a"> & { href?: string };

function NavRouterLink({ href, className, children, ...rest }: NavRouterLinkProps) {
  return (
    <Link to={href ?? "/"} className={className} {...rest}>
      {children}
    </Link>
  );
}

const CHIIKO_NAV_VARS: CSSProperties = {
  ["--pn-surface" as string]: "rgba(255, 255, 255, 0.8)",
  ["--pn-blur" as string]: "blur(10px) saturate(1)",
  ["--pn-shadow" as string]:
    "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
};

export function ResizableNavbarDemo() {
  const { t } = useTranslation();
  const { usesSpanishRoutes } = useAppLanguage();
  const location = useLocation();

  const navItems = [
    { name: t("nav.about"), link: usesSpanishRoutes ? "/nosotros" : "/about" },
    { name: t("nav.projects"), link: usesSpanishRoutes ? "/proyectos" : "/projects" },
    { name: t("nav.plans"), link: usesSpanishRoutes ? "/planes" : "/plans" },
  ];

  const pillItems = navItems.map((item) => ({
    label: item.name,
    href: item.link,
  }));

  const activeIndex = pillItems.findIndex((item) =>
    item.href ? isRouteActive(location.pathname, item.href) : false,
  );

  return (
    <div className="navbar-light fixed inset-x-0 top-0 z-50 flex w-full max-w-[100vw] justify-center overflow-x-clip px-3 pt-2 [color-scheme:light] md:px-4 lg:pt-3">
      <div className="chiiko-nav-cluster flex w-full min-w-0 max-w-full items-center gap-1.5 md:inline-flex md:w-auto md:gap-2">
        <div className="chiiko-pill-nav-wrap min-w-0 flex-1 md:flex-none">
        <PillNav
          logo={
            <>
              <img
                src="/logooChiiko.png"
                alt=""
                className="chiiko-logo--icon"
                draggable={false}
              />
              <img
                src="/chiikoLogoNegro.png"
                alt=""
                className="chiiko-logo--full"
                draggable={false}
              />
            </>
          }
          logoHref="/"
          logoAlt={t("nav.home", { defaultValue: "Ir al inicio" })}
          items={pillItems}
          activeIndex={activeIndex}
          linkComponent={NavRouterLink}
          theme="light"
          layout="split"
          itemStyle="pill"
          hoverEffect="fill"
          indicator="dot"
          surface="glass"
          size="md"
          highlightColor="#262626"
          highlightTextColor="#ffffff"
          ariaLabel={t("nav.main", { defaultValue: "Main" })}
          className="chiiko-pill-nav"
          style={CHIIKO_NAV_VARS}
        />
        </div>

        <div
          className="chiiko-nav-bubble shrink-0 pill-nav__surface px-2.5 md:px-4"
          style={CHIIKO_NAV_VARS}
        >
          <LanguageSwitcher variant="bubble" />
          <span className="pill-nav__rim" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
