import type { CSSProperties, ReactNode } from "react";

export type CardSwapItem = {
  title?: string;
  image?: string;
  icon?: ReactNode;
  alt?: string;
  backgroundColor?: string;
};

export type CardSwapHandle = {
  next: () => void;
  prev: () => void;
};

export type CardSwapProps = {
  items?: CardSwapItem[];
  children?: ReactNode;
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  depth?: number;
  skewAmount?: number;
  visibleCards?: number;
  delay?: number;
  autoplay?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  speed?: number;
  bounce?: number;
  parallax?: number;
  hoverSpread?: number;
  dim?: number;
  cardRadius?: number;
  intro?: boolean;
  theme?: "dark" | "light";
  onCardClick?: (index: number) => void;
  onChange?: (index: number) => void;
  className?: string;
  ref?: React.Ref<CardSwapHandle>;
};

export declare const Card: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & { customClass?: string }
>;

declare const CardSwap: React.ForwardRefExoticComponent<CardSwapProps>;
export default CardSwap;
