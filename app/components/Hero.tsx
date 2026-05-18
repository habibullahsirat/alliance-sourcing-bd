export default function Hero() {
  return (
    <div>
      <div className="relative ">
        <div className="w-full h-160 overflow-hidden shrink-0">
          <img
            src="../../public/hero.png"
            alt="Cloth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center absolute inset-0 text-center">
          <div className="mx-[40%] w-[20%]">
            <p className="font-[inter] text-white bg-white/10 backdrop-blur-md rounded-[30px] p-3 mb-6">
              House of fashion stitching
            </p>
          </div>
          <div className="mx-[25%]">
            <h2 className="text-[84px] text-white font-[syne]">
              Your trusted partner in apparel sourcing
            </h2>
            <p className="text-white font-[inter] text-sm mt-5">
              We connect international buyers with reliable manufacturers across
              Bangladesh. From product development to final shipment, we handle
              every detail with precision and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
