import Items from "@/components/shared/items";
import Hero from "./components/hero";
import FlashCarousel from "@/components/flash-carousel";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-20">
        <Items>Today's</Items>
      </div>
      <FlashCarousel />
    </div>
  );
}
