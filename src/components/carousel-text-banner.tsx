"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { link } from "fs";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio en 24 horas",
        description: "Como cliente VIP, recibirás tu pedido en 24 horas. Obten mas informacion y Unete a nuestro programa de fidelidad.",
        link: "#"
    },
    {
        id: 2,
        title: "consigue hasta un 25% de descuento por la compra de 3 prendas",
        description: "50% por compras superiores a 10 prendas.",
        link: "#"
    },
    {
        id: 3,
        title: "Devoluciones y entregas gratuitas",
        description: "Como cliente , tienes envios y devoluciones gratis en un plazo de 5 dias.",
        link: "#"
    }, {
        id: 4,
        title: "Comprar novedades",
        description: "Todas las novedades al 50% de descuento.",
        link: "#"
    },
]
const CarouselTextBanner = () => {
    const router = useRouter();

    return (
        <div className="bg-orange-600 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 3500
                    })
                ]}>
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadown-none border-none bg-transparent">
                                    <CardContent className="flex flex-col jusify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-white">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-white">{description}</p>

                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
export default CarouselTextBanner;