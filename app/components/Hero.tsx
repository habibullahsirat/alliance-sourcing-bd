export default function Hero() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div>
          <img src="../../public/hero.png" alt="Cloth" className="w-full" />
        </div>
        <div className="flex flex-col justify-center absolute inset-0 text-center">
          <p className="font-inter text-white">House of fashion stitching</p>
          <div className="mx-[30%]">
            <h2 className="text-5xl text-white font-syne">
              Your trusted partner in apparel sourcing
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
