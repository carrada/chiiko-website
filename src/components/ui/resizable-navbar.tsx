"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { Link, useLocation } from "react-router-dom";

import React, { useState } from "react";
import { getRouteType as getSharedRouteType } from "@/lib/localizedRoutes";

const NAV_BODY_SHADOW =
  "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset";

const PILL_SPRING = {
  type: "spring" as const,
  stiffness: 420,
  damping: 34,
  mass: 0.65,
};

// Helper function to detect equivalent routes across languages
const getRouteType = (pathname: string): string | null => {
  const sharedType = getSharedRouteType(pathname);
  if (sharedType) return sharedType;

  const routeMap: { [key: string]: string } = {
    "/nosotros": "about",
    "/about": "about",
    "/planes": "plans",
    "/plans": "plans",
    "/contacto": "contact",
    "/contact": "contact",
    "/blog": "blog",
    "/politica-cookies": "cookies",
    "/cookie-policy": "cookies",
  };
  return routeMap[pathname] || null;
};

const isRouteActive = (currentPath: string, itemPath: string): boolean => {
  if (currentPath === itemPath) return true;
  const currentType = getRouteType(currentPath);
  const itemType = getRouteType(itemPath);
  return currentType !== null && currentType === itemType;
};

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <div
      className={cn(
        "navbar-light fixed inset-x-0 top-0 z-50 flex w-full justify-center px-4 pt-2 [color-scheme:light] lg:pt-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const NavBody = ({ children, className }: NavBodyProps) => {
  return (
    <div
      style={{ boxShadow: NAV_BODY_SHADOW }}
      className={cn(
        "relative z-60 flex w-auto min-w-[320px] flex-row items-center justify-center gap-2 overflow-visible rounded-full bg-white/80 px-3 py-1 backdrop-blur-[10px] lg:min-w-[400px] lg:gap-3 lg:px-4 lg:py-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const location = useLocation();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <LayoutGroup id="nav-pills">
      <div
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "flex flex-row items-center justify-start gap-2 text-base font-medium lg:gap-3 lg:text-base",
          className,
        )}
      >
        {items.map((item, idx) => {
          const isRoute = item.link.startsWith("/");
          const isActive =
            isRoute && isRouteActive(location.pathname, item.link);
          const isHovered = hovered === idx && !isActive;

          const linkClassName =
            "relative px-2 py-1 lg:px-3 lg:py-1";

          return isRoute ? (
            <Link
              key={`link-${idx}`}
              to={item.link}
              onMouseEnter={() => setHovered(idx)}
              onClick={onItemClick}
              className={linkClassName}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-neutral-800"
                  transition={PILL_SPRING}
                />
              )}
              {isHovered && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full bg-neutral-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                />
              )}
              <motion.span
                className="relative z-20 block"
                animate={{ color: isActive || isHovered ? "#ffffff" : "#525252" }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {item.name}
              </motion.span>
            </Link>
          ) : (
            <a
              key={`link-${idx}`}
              href={item.link}
              onMouseEnter={() => setHovered(idx)}
              onClick={onItemClick}
              className={linkClassName}
            >
              {isHovered && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full bg-neutral-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                />
              )}
              <motion.span
                className="relative z-20 block"
                animate={{ color: isHovered ? "#ffffff" : "#525252" }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {item.name}
              </motion.span>
            </a>
          );
        })}
      </div>
    </LayoutGroup>
  );
};

export const MobileNav = ({ children, className }: MobileNavProps) => {
  return (
    <div
      style={{ boxShadow: NAV_BODY_SHADOW }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-2xl bg-white/80 px-4 py-3 backdrop-blur-[10px] lg:hidden",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose: _onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex flex-shrink-0 cursor-pointer items-center px-2 py-1 transition-transform hover:scale-110 focus:outline-none"
      aria-label="Ir al inicio"
    >
      <img
        src="/logooChiiko.png"
        alt="chiikö"
        className="h-6 w-6 md:hidden"
      />
      <img
        src="/chiikoLogoNegro.png"
        alt="Chiiko Logo"
        className="hidden h-[65px] w-[65px] md:block"
      />
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-8 py-3 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none text-black",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-[#ce4676] hover:bg-[#b93d68] text-white shadow-lg",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
