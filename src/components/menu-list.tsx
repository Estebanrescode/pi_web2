"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const MenuList = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "";

  return (
    <NavigationMenu viewport={false} className="relative z-50">
      <NavigationMenuList>
        {/* Sección Sobre nosotros (sin cambios) */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">NEONIX</div>
                    <p className="text-sm leading-tight">
                      Vístete a la moda con nuestra ropa urbana
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/catalogo" title="Camisetas">
                Camisetas para todos los gustos y estilos.
              </ListItem>
              <ListItem href="/catalogo" title="Buzos">
                Variedad de buzos con estilos urbanos.
              </ListItem>
              <ListItem href="/catalogo" title="Pantalones">
                Pantalones cómodos y modernos.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Sección Catálogo (modificada) */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Catálogo</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                key="catalogo"
                title="Ver todo el catálogo"
                href="/catalogo"
                isActive={activeCategory === ""}
              >
                Explora todos nuestros productos en un solo lugar
              </ListItem>

              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  isActive={activeCategory === component.value}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Otros enlaces */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/catalogo">Accesorios</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const components: { title: string; href: string; description: string; value: string }[] = [
  {
    title: "Buzos",
    href: "/catalogo?category=buzos",
    value: "buzos",
    description: "Variedad de buzos con estilos urbanos.",
  },
  {
    title: "Camisetas",
    href: "/catalogo?category=camisas",
    value: "camisas", // coincide con productsData
    description: "Camisetas para todos los gustos y estilos.",
  },
  {
    title: "Pantalones",
    href: "/catalogo?category=pantalones",
    value: "pantalones",
    description: "Pantalones cómodos y modernos.",
  },
];

function ListItem({
  title,
  children,
  href,
  isActive,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; isActive?: boolean }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={`flex flex-col gap-1 no-underline p-2 rounded-md ${isActive ? "bg-orange-100 dark:bg-neutral-800" : ""
            }`}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default MenuList;
