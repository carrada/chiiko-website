"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Pinterest",
    thumbnail: "/fotosnosotros/Pinterest.png",
  },
  {
    title: "Chiiko 01",
    thumbnail: "/fotosnosotros/photo_2026-04-18_11-17-35.jpg",
  },
  {
    title: "Chiiko 02",
    thumbnail: "/fotosnosotros/photo_2026-04-18_11-17-18.jpg",
  },
  {
    title: "Chiiko 03",
    thumbnail: "/fotosnosotros/photo_2026-04-18_11-17-21.jpg",
  },
  {
    title: "Chiiko 04",
    thumbnail: "/fotosnosotros/photo_2026-04-18_11-17-23.jpg",
  },
  {
    title: "Chiiko 05",
    thumbnail: "/fotosnosotros/photo_2026-04-18_11-17-26.jpg",
  },
  {
    title: "Chiiko 06",
    thumbnail: "/fotosnosotros/photo_2026-04-18_11-17-29.jpg",
  },
  {
    title: "Chiiko 07",
    thumbnail: "/fotosnosotros/photo_2026-04-18_11-17-31.jpg",
  },
  {
    title: "Chiiko 08",
    thumbnail: "/fotosnosotros/photo_2026-04-18_11-17-35.jpg",
    objectPosition: "center 12%",
  },
  {
    title: "Chiiko 09",
    thumbnail: "/fotosnosotros/photo_2026-04-18_11-17-37.jpg",
  },
];
