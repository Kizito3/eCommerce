import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "../../../components/ui/badge";
import { items } from "@/data/data";

export default function FlashCarousel() {
  return (
    <div className="container mt-6 border border-t-0 border-r-0 border-l-0">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="flex">
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/4 basis-1/1">
              <div className="bg-[#f5f5f5] py-10 w-[270px] h-[235px] group">
                <div className="relative">
                  <div className="absolute -top-7 left-4">
                    <Badge variant="destructive">{item.discount}</Badge>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-7 right-4 flex flex-col gap-2">
                    {item.images.map((src, idx) => (
                      <img key={idx} src={src} alt="" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={item.productImage} alt="" className="" />
                </div>
                <div className="">
                  <button className="text-white w-full bg-black rounded-b-sm py-[0.59rem] text-center hidden group-hover:block transition-opacity duration-300 opacity-0 group-hover:opacity-100 animate-slide-in">
                    add to cart
                  </button>
                </div>
              </div>
              <div className="font-poppins font-semibold mt-5">
                <p>{item.description}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-[#DB4444] font-semibold">{item.price}</p>
                  <p className="text-gray-400 line-through text-sm">
                    {item.discountedPrice}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
          <div className="relative">
            <div className="absolute -top-80 right-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </div>
      </Carousel>
      <div className="flex justify-center items-center font-poppins my-12">
        <button className="bg-[#DB4444] h-10 w-48 text-white rounded-md hover:bg-transparent transition-all delay-100 hover:text-black hover:border-[#DB4444] hover:border capitalize">
          view all product
        </button>
      </div>
    </div>
  );
}
