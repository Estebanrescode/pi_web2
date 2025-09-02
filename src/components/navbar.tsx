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
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl lg:max-w-7xl">
      <div onClick={() => router.push("/")} className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={200} height={40} className="rounded-full" />
      </div>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart strokeWidth={1.5} className="cursor-pointer" onClick={() => router.push("/cart")} />
        <Heart strokeWidth={1.5} className="cursor-pointer" onClick={() => router.push("/loved-products")} />
        
       <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton>
              <button className="text-sm sm:text-base  font-medium hover:underline">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button 
              className="bg-orange-600 dark:bg-violet-600 dark:text-white rounded-full font-medium text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5 cursor-pointer ">
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