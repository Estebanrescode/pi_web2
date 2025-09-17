"use client";

import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2">
        <Link href="/catalogo" className="block">
          Ver todo
        </Link>
        <Link href="/catalogo?category=buzos" className="block">
          Buzos
        </Link>
        <Link href="/catalogo?category=camisas" className="block">
          Camisetas
        </Link>
        <Link href="/catalogo?category=pantalones" className="block">
          Pantalones
        </Link>
        <Link href="/catalogo?category=accesorios" className="block">
          Accesorios
        </Link>
        <Link href="/catalogo?category=destacados" className="block">
          Destacados
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
