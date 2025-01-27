import Items from "@/components/shared/items";
import Hero from "./components/hero";
import FlashCarousel from "@/pages/home/components/flash-carousel";
import CountDown from "./components/count-down";
import Categories from "./components/categories";
import BestSelling from "./components/best-selling";
import SpeakerCategory from "./components/speaker-category";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-20">
        <Items>Today's</Items>
        <div className="flex md:items-center md:gap-20 items-start flex-col md:flex-row">
          <h2 className="font-semibold md:text-4xl text-2xl font-poppins my-5 text-black">
            Flash Sales
          </h2>
          <CountDown days={3} hours={23} minutes={19} seconds={59} />
        </div>
      </div>
      <FlashCarousel />
      <div className="mt-20">
        <Categories />
      </div>
      <div className="mt-20 font-poppins">
        <BestSelling />
      </div>
      <SpeakerCategory />
    </>
  );
}
