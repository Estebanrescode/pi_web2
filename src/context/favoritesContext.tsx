"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/lib/types";

interface FavoritesContextType {
  favoriteItems: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

  const toggleFavorite = (product: Product) => {
    setFavoriteItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isFavorite = (id: number) => favoriteItems.some((item) => item.id === id);

  return (
    <FavoritesContext.Provider value={{ favoriteItems, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  return context;
};


