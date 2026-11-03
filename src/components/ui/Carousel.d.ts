import type { CSSProperties, ReactNode } from "react";

export type CarouselItem = {
  id?: string | number;
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
  icon?: ReactNode;
};

export type CarouselProps = {
  items?: CarouselItem[] | string[] | ReactNode[];
  baseWidth?: number | string;
  aspectRatio?: number;
  peek?: number;
  gap?: number;
  radius?: number;
  frame?: boolean;
  effect?: "tilt" | "slide" | "scale" | "fade" | "cube";
  indicator?: "dots" | "bars" | "counter" | "none";
  arrows?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  draggable?: boolean;
  round?: boolean;
  initialIndex?: number;
  theme?: "dark" | "light";
  onChange?: (index: number) => void;
  className?: string;
  style?: CSSProperties;
};

declare function Carousel(props: CarouselProps): ReactNode;
export default Carousel;
