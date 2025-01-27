export default function SpeakerCategory() {
  return (
    <>
      <div className="bg-black font-poppins px-10 py-6">
        <div className="flex items-center justify-between md:flex-row flex-col gap-10">
          <div className="text-white">
            <p className="text-[#00ff66] mb-5">categories</p>
            <h1 className="md:text-5xl text-2xl font-semibold mb-5">
              Enhance Your Music Experience
            </h1>
            <button className="bg-[#00ff66] h-10 w-32 text-white hover:bg-transparent transition-all delay-100 hover:text-white hover:border-[#00ff66] hover:border capitalize">
              Buy Now
            </button>
          </div>
          <div>
            <img src="/JBL.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
