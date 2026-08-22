export default function Hero() {
  return (
    <section className="relative bg-black w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden opacity-60">
        <img
          src="/hero.png"
          alt="Manufacturing Facilities"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] text-white font-[syne] font-bold leading-tight tracking-tight">
            Our Manufacturing Excellence
          </h1>

          {/* Subtitle / Description */}
          <p className="text-gray-200 font-[inter] text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-5 max-w-2xl leading-relaxed">
            State-of-the-art facilities meeting the highest global ethical and
            quality standards through innovation and precision.
          </p>
        </div>
      </div>
    </section>
  );
}
