export default function Hero() {
  const stats = [
    ["03+", "Regions"],
    ["40+", "Global Clients"],
    ["09+", "Years"],
  ];

  return (
    <section
      className="relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-28 gap-8 sm:gap-12 w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[594px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(10,102,194,0.85) 0%, rgba(0,0,0,0.85) 100%), url('/partners.jpg')",
      }}
    >
      {/* Title & Breadcrumbs */}
      <div className="flex flex-col items-center gap-2 sm:gap-3 text-center z-10 max-w-4xl mx-auto">
        <p className="text-white/80 text-xs sm:text-base tracking-wide">
          Home &gt;{" "}
          <span className="font-semibold text-white">Global Partners</span>
        </p>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-tight">
          Our Global Partners
        </h1>

        <p className="text-sm sm:text-lg lg:text-xl text-white/90 leading-relaxed mt-1 sm:mt-2">
          We connect global fashion brands with top Bangladeshi manufacturers,
          built on a decade of transparency and quality.
        </p>
      </div>

      {/* Stats counter strip */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 lg:gap-16 z-10 mt-2 sm:mt-4 w-full">
        {stats.map(([number, label]) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 sm:gap-2 min-w-[100px] sm:min-w-[140px]"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold leading-none">
              {number}
            </h2>
            <p className="text-xs sm:text-base lg:text-xl text-white/80 font-medium">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
