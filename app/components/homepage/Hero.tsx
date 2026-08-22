export default function Hero() {
  return (
    <section className="relative bg-black w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="w-full h-[550px] sm:h-[650px] md:h-[720px] lg:h-[800px] overflow-hidden opacity-60">
        <img
          src="/hero.png"
          alt="Cloth Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <span className="font-[inter] text-white text-xs sm:text-sm md:text-base bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10 tracking-wide">
              House of fashion stitching
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-[syne] font-bold leading-[1.1] max-w-4xl tracking-tight">
            Your trusted partner in apparel sourcing
          </h1>

          {/* Description */}
          <p className="text-gray-200 font-[inter] text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 max-w-2xl leading-relaxed">
            We connect international buyers with reliable manufacturers across
            Bangladesh. From product development to final shipment, we handle
            every detail with precision and care.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#0C97D5] hover:bg-[#0a82b8] text-white rounded-md border border-[#0C97D5] text-base sm:text-lg font-medium transition-colors shadow-lg"
            >
              Contact Us
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-gray-100 text-[#0C97D5] rounded-md border border-white text-base sm:text-lg font-medium transition-colors shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
