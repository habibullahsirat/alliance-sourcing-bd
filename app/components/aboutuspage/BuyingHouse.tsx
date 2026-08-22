export default function BuyingHouse() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 max-w-[1312px] items-center gap-8 md:gap-12 lg:gap-16">
        {/* Image Container */}
        <div className="lg:col-span-6 w-full order-2 lg:order-1">
          <img
            src="/buying-house.png"
            alt="Buying House"
            className="h-[320px] sm:h-[450px] md:h-[550px] lg:h-[640px] w-full rounded-xl object-cover shadow-sm"
          />
        </div>

        {/* Text Content Container */}
        <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
          <span className="mb-3 sm:mb-6 text-sm sm:text-base font-semibold text-blue-600 uppercase tracking-wider">
            Established Excellence
          </span>

          <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal leading-[1.1] lg:leading-[1.08] tracking-tight text-gray-900">
            Professional buying house services
          </h2>

          <p className="mt-4 sm:mt-6 lg:mt-8 max-w-2xl text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#1F1F1F]">
            Founded with a vision to revolutionize the apparel industry,
            Alliance Sourcing BD has grown into a global leader in garment
            sourcing. With decades of collective expertise, we bridge the gap
            between world-class brands and high-quality manufacturing units in
            Bangladesh and beyond.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Our journey is defined by a relentless pursuit of excellence,
            ethical practices, and a deep understanding of the fast-evolving
            fashion landscape. We started as a small team with a big ambition:
            to make international sourcing transparent, efficient, and
            sustainable.
          </p>
        </div>
      </div>
    </section>
  );
}
