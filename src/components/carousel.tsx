import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselSlide() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          {" "}
          <div className="bg-[#000] md:h-[400px] h-[280px] flex md:justify-between justify-center md:text-start text-center items-center md:px-20 px-6 text-white font-poppins">
            <div className="md:text-start text-center">
              <div className="flex items-center gap-4 mb-4 md:pl-0 pl-12">
                <img src="Apple.png" alt="" />
                <p className="">iPhone 14 Series</p>
              </div>
              <h1 className="md:text-5xl text-3xl font-semibold w-[294px] font-poppins">
                Up to 10% off Voucher
              </h1>
              <p className="text-sm flex gap-2 items-center md:pl-0 pl-28 underline mt-4 cursor-pointer">
                Shop Now{" "}
                <span className="">
                  <ArrowRight />
                </span>
              </p>
            </div>
            <div className="md:block hidden">
              <img src="/hero.png" alt="" />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          {" "}
          <div className="bg-[#000] md:h-[400px] h-[280px] flex md:justify-between justify-center md:text-start text-center items-center md:px-20 px-6 text-white font-poppins">
            <div className="md:text-start text-center">
              <div className="flex items-center gap-4 mb-4 md:pl-0 pl-12">
                <img src="Apple.png" alt="" />
                <p className="">iPhone 15 Series</p>
              </div>
              <h1 className="md:text-5xl text-3xl font-semibold w-[294px] font-poppins">
                Up to 10% off Voucher
              </h1>
              <p className="text-sm flex gap-2 items-center md:pl-0 pl-28 underline mt-4 cursor-pointer">
                Shop Now{" "}
                <span className="">
                  <ArrowRight />
                </span>
              </p>
            </div>
            <div className="md:block hidden">
              <img src="/hero.png" alt="" />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          {" "}
          <div className="bg-[#000] md:h-[400px] h-[280px] flex md:justify-between justify-center md:text-start text-center items-center md:px-20 px-6 text-white font-poppins">
            <div className="md:text-start text-center">
              <div className="flex items-center gap-4 mb-4 md:pl-0 pl-12">
                <img src="Apple.png" alt="" />
                <p className="">iPhone 16 Series</p>
              </div>
              <h1 className="md:text-5xl text-3xl font-semibold w-[294px] font-poppins">
                Up to 10% off Voucher
              </h1>
              <p className="text-sm flex gap-2 items-center md:pl-0 pl-28 underline mt-4 cursor-pointer">
                Shop Now{" "}
                <span className="">
                  <ArrowRight />
                </span>
              </p>
            </div>
            <div className="md:block hidden">
              <img src="/hero.png" alt="" />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="hidden md:flex">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
