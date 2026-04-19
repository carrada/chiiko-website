"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Link, useLocation } from "react-router-dom";

import React, { useRef, useState } from "react";

// Helper function to detect equivalent routes across languages
const getRouteType = (pathname: string): string | null => {
  // Map routes to their type regardless of language
  const routeMap: { [key: string]: string } = {
    '/nosotros': 'about',
    '/about': 'about',
    '/planes': 'plans',
    '/plans': 'plans',
    '/contacto': 'contact',
    '/contact': 'contact',
  };
  return routeMap[pathname] || null;
};

const isRouteActive = (currentPath: string, itemPath: string): boolean => {
  // Direct match
  if (currentPath === itemPath) return true;
  // Check if they are equivalent routes in different languages
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
  visible?: boolean;
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
  visible?: boolean;
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [navY, setNavY] = useState<number>(0);
  const prevScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    
    // Detect scroll direction and move navbar accordingly
    const difference = latest - prevScrollY.current;
    
    if (difference > 0) {
      // Scrolling down - move navbar down
      setNavY(prev => Math.min(prev + difference * 0.15, 15));
    } else {
      // Scrolling up - move navbar back up
      setNavY(prev => Math.max(prev + difference * 0.15, 0));
    }
    
    prevScrollY.current = latest;
  });

  return (
    <motion.div
      ref={ref}
      style={{ y: navY }}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-0 z-40 w-full flex justify-center px-4", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-60 flex w-auto min-w-[320px] lg:min-w-[400px] flex-row items-center justify-center gap-2 lg:gap-3 rounded-full bg-transparent px-3 py-1 lg:px-4 lg:py-2 overflow-visible dark:bg-transparent",
        visible && "lg:bg-white/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const location = useLocation();

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-row items-center justify-start gap-2 lg:gap-3 text-base lg:text-base font-medium text-zinc-600 transition duration-200 hover:text-zinc-800",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isRoute = item.link.startsWith('/');
        const isActive = isRoute && isRouteActive(location.pathname, item.link);
        const showSpotlight = isActive || hovered === idx;
        
        const commonProps = {
          onMouseEnter: () => setHovered(idx),
          onClick: onItemClick,
          className: "relative px-2 py-1 lg:px-3 lg:py-1 text-neutral-600 dark:text-neutral-300",
          key: `link-${idx}`,
        };
        
        return isRoute ? (
          <Link
            {...commonProps}
            to={item.link}
          >
            {showSpotlight && (
              <motion.div
                layoutId={isActive ? `active-${idx}` : "hovered"}
                className="absolute inset-0 h-full w-full rounded-full bg-neutral-800"
              />
            )}
            <span className={cn("relative z-20", showSpotlight && "text-white")}>{item.name}</span>
          </Link>
        ) : (
          <a
            {...commonProps}
            href={item.link}
          >
            {showSpotlight && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-neutral-800"
              />
            )}
            <span className={cn("relative z-20", showSpotlight && "text-white")}>{item.name}</span>
          </a>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-4 py-3 lg:hidden rounded-2xl",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
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
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
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
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center px-2 py-1 cursor-pointer transition-transform hover:scale-110 focus:outline-none flex-shrink-0"
      aria-label="Ir al inicio"
    >
      {/* Favicon en móviles */}
      <img
        src="/logooChiiko.png"
        alt="chiikö"
        className="md:hidden w-6 h-6"
      />
      {/* Logo normal en desktop */}
      <img
        src="/chiikoLogoNegro.png"
        alt="Chiiko Logo"
        className="hidden md:block w-[65px] h-[65px]"
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
    secondary: "bg-transparent shadow-none dark:text-white",
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
