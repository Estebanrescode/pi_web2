"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

const slides = [
  {
    img: "/banner1.jpg",
    title: "Estilo que marca la calle",
    desc: "Vístete como piensas, camina como sueñas: la ciudad es tu pasarela.",
  },
  {
    img: "/banner2.jpg",
    title: "Actitud y comodidad",
    desc: "No sigas tendencias, créalas. La moda urbana empieza contigo.",
  },
  {
    img: "/banner3.jpg",
    title: "Colección para destacar",
    desc: "Haz que cada momento cuente, tu estilo habla más fuerte que las palabras.",
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full h-[80vh]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[80vh]">
              {/* Imagen adaptada */}
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Capa oscura encima de la imagen */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Contenido encima */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
                  {slide.desc}
                </p>
                <div className="mt-6 flex gap-4">
                  <Button className="bg-white text-black font-semibold hover:bg-gray-200">
                    Comprar Ahora
                  </Button>
                  <Button
                    variant="outline"
                    className="
                      text-gray-800 border-gray-800 hover:bg-gray-200
                      dark:text-white dark:border-white dark:hover:bg-white/20
                    "
                  >
                    Ver Colección
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
