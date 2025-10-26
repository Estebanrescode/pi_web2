"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/context/cartContext";
import { OrderProvider } from "@/context/orderContext";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <CartProvider>
          <OrderProvider>
            <Suspense fallback={<div className="h-16" />}>
              <Navbar />
            </Suspense>
            <main>{children}</main>
            <Footer />
          </OrderProvider>
        </CartProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
