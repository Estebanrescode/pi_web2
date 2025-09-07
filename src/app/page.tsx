import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/feature-products";
import HeroBanner from "@/components/heroBanner";

export default function Home() {
  return (
   <main>
    <CarouselTextBanner />
    <HeroBanner />
    <FeaturedProducts/>
   </main>
  );
}
