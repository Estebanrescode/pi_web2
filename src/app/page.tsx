import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/feature-products";
import HeroBanner from "@/components/heroBanner";
import SplitBanner from "@/components/splitBanner";
import PromoBanner from "@/components/promobanner";
import AccesoriosBanner from "@/components/accesoriosbanner";

export default function Home() {
  return (
   <main>
  
    <HeroBanner />
    <PromoBanner />
    <SplitBanner />
    <FeaturedProducts/>
    <AccesoriosBanner/>
   </main>
  );
}
