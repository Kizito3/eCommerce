import Items from "@/components/shared/items";
import { Badge } from "../../../components/ui/badge";
import { items2 } from "@/data/data";

export default function BestSelling() {
  return (
    <>
      <Items>This Month</Items>
      <div>
        <div className="flex justify-between items-center font-poppins px-6">
          <h2 className="font-semibold md:text-4xl text-2xl font-poppins my-5 text-black">
            Best Selling Products
          </h2>
          <button className="bg-[#DB4444] h-10 w-32 text-white rounded-md hover:bg-transparent transition-all delay-100 hover:text-black hover:border-[#DB4444] hover:border capitalize">
            view more
          </button>
        </div>
      </div>
      <div className="container mt-6 border border-t-0 border-r-0 border-l-0">
        <div>
          <div className="flex md:flex-row  flex-col justify-center items-center">
            {items2.map((item, index) => (
              <div key={index} className="md:basis-1/4 basis-1/1">
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
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center font-poppins my-12" />
      </div>
    </>
  );
}
