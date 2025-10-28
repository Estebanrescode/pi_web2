import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/context/cartContext";
import { OrderProvider } from "@/context/orderContext";
import { FavoritesProvider } from "@/context/favoritesContext"; // 👈 nuevo
import { Suspense } from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEONIX",
  description: "BIENVENIDO A NEONIX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="es" suppressHydrationWarning>
        <body className={urbanist.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CartProvider>
              <OrderProvider>
                <FavoritesProvider>
                  <Suspense fallback={<NavbarFallback />}>
                    <Navbar />
                  </Suspense>

                  <main>{children}</main>

                  <Footer />
                </FavoritesProvider>
              </OrderProvider>
            </CartProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

/** 🔸 Fallback mientras carga el Navbar en cliente */
function NavbarFallback() {
  return <div className="h-16" />;
}
