// src/app/layout.tsx
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/context/cartContext";
import { OrderProvider } from "@/context/orderContext"; // Nuevo

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
      <html lang="es">
        <body className={urbanist.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CartProvider>
              <OrderProvider> {/* Nuevo */}
                <Navbar />
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