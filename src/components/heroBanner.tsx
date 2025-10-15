"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "./ui/button";



const slides = [
  {
    img: "https://res.cloudinary.com/ddzetix8t/image/upload/banner1_hldnk7",
    title: "Estilo que marca la calle",
    desc: "Vístete como piensas, camina como sueñas: la ciudad es tu pasarela.",
  },
  {
    img: "https://res.cloudinary.com/ddzetix8t/image/upload/banner2_jhfjju",
    title: "Actitud y comodidad",
    desc: "No sigas tendencias, créalas. La moda urbana empieza contigo.",
  },
  {
    img: "https://res.cloudinary.com/ddzetix8t/image/upload/banner3_o8galc",
    title: "Colección para destacar",
    desc: "Haz que cada momento cuente, tu estilo habla más fuerte que las palabras.",
  },
  {
    img: "https://res.cloudinary.com/ddzetix8t/image/upload/banner4-envio_ecbxaj",
    title: "Tu Próximo Look, Ya en Camino",
    desc: "Desde nuestra tienda hasta tu hogar, nos aseguramos de que cada envío llegue perfecto y a tiempo.",
  },
  {
    img: "https://res.cloudinary.com/ddzetix8t/image/upload/BannerDescuentos_aemhr4",
    title: "Descuentos que no puedes dejar pasar",
    desc: "Aprovecha nuestras ofertas exclusivas y renueva tu estilo sin gastar de más.",
  },
  {
    img: "https://res.cloudinary.com/ddzetix8t/image/upload/BannerDevoluciones_i7esin",
    title: "Devoluciones sin complicaciones",
    desc: "Compra con confianza sabiendo que si no es lo que esperabas, te lo ponemos fácil.",
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full h-[60vh]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[60vh] overflow-hidden">
              {/* Imagen adaptada */}
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.img})` }}
              />
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority
                className="object-contain"
              />

              {/* Capa oscura encima de la imagen */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Contenido encima */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
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
