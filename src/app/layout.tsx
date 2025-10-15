// src/app/layout.tsx
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/context/cartContext";
import { OrderProvider } from "@/context/orderContext";
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
      <html lang="es" suppressHydrationWarning={true}>
        <body className={urbanist.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CartProvider>
              <OrderProvider>
                {/* ENVUELVE EL NAVBAR EN SUSPENSE */}
                <Suspense fallback={<NavbarFallback />}>
                  <Navbar />
                </Suspense>
                {children}
                <Footer />
              </OrderProvider>
            </CartProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

// Este fallback se muestra mientras carga el Navbar en cliente
function NavbarFallback() {
  return <div className="h-16" />; // altura del navbar
}
