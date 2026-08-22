export default function Hero() {
  return (
    <section className="relative bg-black w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden opacity-60">
        <img
          src="/hero.png"
          alt="About Alliance Sourcing BD"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] text-white font-[syne] font-bold leading-tight tracking-tight">
            About Alliance Sourcing BD
          </h1>

          {/* Page Subtitle */}
          <p className="text-gray-200 font-[inter] text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-5 max-w-2xl leading-relaxed">
            Your premier partner in seamless garment sourcing and global
            manufacturing excellence, bridging the gap between design and
            production.
          </p>
        </div>
      </div>
    </section>
  );
}
