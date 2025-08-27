import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/feature-products";
import VistaProducto from "@/components/vista-producto";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <main>
    <CarouselTextBanner />
    <FeaturedProducts/>
    <VistaProducto/>
   </main>
  );
}
