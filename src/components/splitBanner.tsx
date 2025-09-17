"use client";

import Link from "next/link";

export default function SplitBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full h-[80vh]">
      {/* Imagen izquierda - Camisetas */}
      <div
        className="relative bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('/BannerCamisas.png')",
          backgroundPosition: "center 10%", // mueve la imagen hacia abajo
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-6">
            Camisetas
          </h2>
          <Link
            href="/camisetas"
            className="
              inline-block px-6 py-3 font-semibold rounded-lg shadow-md transition-all
              bg-orange-500 hover:bg-orange-600 text-white
              dark:bg-violet-500 dark:hover:bg-violet-600
            "
          >
            Ver Camisetas
          </Link>
        </div>
      </div>

      {/* Imagen derecha - Buzos */}
      <div
        className="relative bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('/BannerBuzos.png')",
          backgroundPosition: "center 30%", // mueve la imagen hacia abajo
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-6">
            Buzos
          </h2>
          <Link
            href="/buzos"
            className="
              inline-block px-6 py-3 font-semibold rounded-lg shadow-md transition-all
              bg-orange-500 hover:bg-orange-600 text-white
              dark:bg-violet-500 dark:hover:bg-violet-600
            "
          >
            Ver Buzos
          </Link>
        </div>
      </div>
    </section>
  );
}
