import Items from "@/components/shared/items";

export default function Categories() {
  return (
    <>
      <Items>Categories</Items>
      <div className="">
        <h2 className="font-semibold md:text-4xl text-2xl font-poppins my-5 text-black">
          Browse By Category
        </h2>
      </div>
      <div className="flex md:gap-14 gap-6 font-poppins flex-wrap md:px-14 px-5 border border-r-0 border-l-0 border-t-0 mt-10">
        <div className="border p-6 px-10 rounded-md mb-10">
          <div>
            <img src="/phone.png" alt="" />
            <h3>Phones</h3>
          </div>
        </div>
        <div className="border p-6 px-10 rounded-md mb-10">
          <div>
            <img src="/computer.png" alt="" />
            <h3>Phones</h3>
          </div>
        </div>
        <div className="border p-6 px-10 rounded-md mb-10">
          <div>
            <img src="/watch.png" alt="" />
            <h3>Phones</h3>
          </div>
        </div>
        <div className="border p-6 px-10 rounded-md mb-10">
          <div>
            <img src="/computer.png" alt="" />
            <h3>Phones</h3>
          </div>
        </div>
        <div className="border p-6 px-10 rounded-md mb-10">
          <div>
            <img src="/headset.png" alt="" />
            <h3>Phones</h3>
          </div>
        </div>
        <div className="border p-6 px-10 rounded-md mb-10">
          <div>
            <img src="/pad.png" alt="" />
            <h3>Phones</h3>
          </div>
        </div>
      </div>
    </>
  );
}
