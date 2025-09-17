"use client";

import Link from "next/link";

export default function AccesoriosBanner() {
  return (
    <section className="w-full h-[70vh] relative">
      {/* Imagen de fondo */}
      <div
        className="relative w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('/BannerAccesorios.png')",
          backgroundPosition: "center 20%",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido */}
        <div className="relative z-10 px-6">
          <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">
            Accesorios
          </h2>
          <Link
            href="/accesorios"
            className="
              inline-block px-8 py-3 font-semibold rounded-lg shadow-md transition-all
              bg-orange-500 hover:bg-orange-600 text-white
              dark:bg-violet-500 dark:hover:bg-violet-600
            "
          >
            Ver Accesorios
          </Link>
        </div>
      </div>
    </section>
  );
}
