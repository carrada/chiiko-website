"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";

export function ResizableNavbarDemo() {
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
