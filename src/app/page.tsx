import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/feature-products";
import HeroBanner from "@/components/heroBanner";
import SplitBanner from "@/components/splitBanner";

export default function Home() {
  return (
   <main>
    <CarouselTextBanner />
    <HeroBanner />
    <SplitBanner />
    <FeaturedProducts/>
   </main>
  );
}
