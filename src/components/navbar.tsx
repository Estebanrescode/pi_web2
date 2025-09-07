"use client";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import Image from "next/image";
import ToggleTheme from "./toggle-theme";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";


const Navbar = () => {
  const router = useRouter()

return (
  <div className="flex items-center justify-between p-2 sm:p-3 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl lg:max-w-7xl">
    {/* Logo más pequeño */}
    <div onClick={() => router.push("/")} className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Logo"
        width={140} // antes 200
        height={30} // antes 40
        className="rounded-full"
      />
    </div>

    {/* Menú desktop */}
    <div className="items-center justify-between hidden sm:flex">
      <MenuList />
    </div>

    {/* Menú móvil */}
    <div className="flex sm:hidden">
      <ItemsMenuMobile />
    </div>

    {/* Iconos y botones */}
    <div className="flex items-center justify-between gap-2 sm:gap-5">
      <ShoppingCart
        strokeWidth={1.5}
        className="w-5 h-5 cursor-pointer"
        onClick={() => router.push("/cart")}
      />
      <Heart
        strokeWidth={1.5}
        className="w-5 h-5 cursor-pointer"
        onClick={() => router.push("/loved-products")}
      />

      <div className="flex items-center gap-2">
        <SignedOut>
          <SignInButton>
            <button className="text-xs sm:text-sm font-medium hover:underline">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-orange-600 dark:bg-violet-600 dark:text-white rounded-full font-medium text-xs sm:text-sm h-7 sm:h-8 px-3 sm:px-4 cursor-pointer">
              Sign up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <ToggleTheme />
    </div>
  </div>
);

}
export default Navbar;