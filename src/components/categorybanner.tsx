"use client";

import Link from "next/link";

interface CategoryBannerProps {
  title: string;
  image: string;
  link: string;
  buttonLabel: string;
  position?: string; // 👈 nueva prop opcional
}

export default function CategoryBanner({
  title,
  image,
  link,
  buttonLabel,
  position = "center 50%", // 👈 valor por defecto
}: CategoryBannerProps) {
  return (
    <section className="w-full h-[70vh] relative">
      <div
        className="relative w-full h-full bg-cover bg-no-repeat flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: position, // 👈 aquí aplicamos la prop
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido */}
        <div className="relative z-10 px-6">
          <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">
            {title}
          </h2>
          <Link
            href={link}
            className="inline-block px-8 py-3 font-semibold rounded-lg shadow-md transition-all
              bg-orange-500 hover:bg-orange-600 text-white
              dark:bg-violet-500 dark:hover:bg-violet-600"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
