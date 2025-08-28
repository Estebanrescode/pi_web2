"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export const MenuList = () => {
  return (
    <NavigationMenu viewport={false} className="relative z-50">
      <NavigationMenuList>
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
                    <div className="mt-4 mb-2 text-lg font-medium">
                        NEONIX
                    </div>
                    <p className="text-sm leading-tight">
                      Vístete a la moda con nuestra ropa urbana
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a tu información, tus pedidos y mucho más
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Sección dedicada a promociones y descuentos especiales
              </ListItem>
              <ListItem href="/" title="Productos destacados">
                Los productos más populares y exclusivos
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Catálogo</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/accesorios">Accesorios</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        </NavigationMenuItem>
        <NavigationMenuItem>
        </NavigationMenuItem>
        <NavigationMenuItem>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Buzos",
    href: "/buzos",
    description: "Variedad de buzos con estilos urbanos.",
  },
  {
    title: "Camisetas",
    href: "/camisetas",
    description: "Camisetas para todos los gustos y estilos.",
  },
  {
    title: "Pantalones",
    href: "/pantalones",
    description: "Pantalones cómodos y modernos.",
  }
];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
export default MenuList;
