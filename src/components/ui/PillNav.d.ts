import type { CSSProperties, ElementType, ReactNode } from "react";

export type PillNavItem = {
  label: string | ReactNode;
  href?: string;
  icon?: ReactNode;
  ariaLabel?: string;
};

export type PillNavProps = {
  logo?: string | ReactNode;
  logoAlt?: string;
  logoHref?: string;
  items?: PillNavItem[];
  activeHref?: string;
  /** When set (including -1 for no match), route controls the active tab instead of internal click state. */
  activeIndex?: number;
  defaultActiveIndex?: number;
  onItemClick?: (item: PillNavItem, index: number, event: React.MouseEvent) => void;
  linkComponent?: ElementType;
  theme?: "dark" | "light";
  layout?: "split" | "joined";
  itemStyle?: "pill" | "plain";
  hoverEffect?: "fill" | "glide" | "none";
  indicator?: "dot" | "pill" | "none";
  surface?: "glass" | "solid" | "none";
  size?: "sm" | "md" | "lg";
  highlightColor?: string;
  highlightTextColor?: string;
  barColor?: string;
  textColor?: string;
  bounce?: number;
  stretch?: number;
  collapse?: "auto" | "always" | "never";
  onMenuToggle?: (open: boolean) => void;
  intro?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
};

declare function PillNav(props: PillNavProps): ReactNode;
export default PillNav;
