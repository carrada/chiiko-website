"use client";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";

export function ResizableNavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Nosotros", link: "#nosotros" },
    { name: "Planes", link: "#planes" },
    { name: "Contacto", link: "#contacto" },
  ];

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
      </NavBody>
    </Navbar>
  );
}
