import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";
import { items } from "@/data/data";
import * as motion from "motion/react-client";

export default function FlashCarousel() {
  return (
    <div className="container mt-6">
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="text-white bg-black rounded-b-sm py-[0.59rem] text-center hidden group-hover:block transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                >
                  {" "}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    add to cart
                  </motion.button>
                </motion.div>
              </div>
              <div className="font-poppins font-semibold">
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
    </div>
  );
}
