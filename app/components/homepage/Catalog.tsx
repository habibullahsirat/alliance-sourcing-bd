export default function Catalog() {
  const features = [
    {
      image: "/vector14.png",
      title: "Knitwear",
      description: "Sweaters, t-shirts, and knit garments made to order.",
    },
    {
      image: "/vector15.png",
      title: "Woven fabrics",
      description: "Cotton, blends, and specialty woven materials in stock.",
    },
    {
      image: "/vector16.png",
      title: "Denim and heavy fabrics",
      description: "Durable denim and canvas for pants and jackets.",
    },
    {
      image: "/vector17.png",
      title: "Accessories and trims",
      description:
        "Buttons, zippers, labels, and finishing materials available.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto my-8 sm:my-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Image Container */}
        <div className="lg:col-span-6 w-full order-2 lg:order-1">
          <img
            src="/catalog.jpg"
            alt="Product Catalog"
            className="w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[600px] object-cover rounded-xl shadow-sm"
          />
        </div>

        {/* Content Container */}
        <div className="lg:col-span-6 flex flex-col justify-between order-1 lg:order-2">
          {/* Header Info */}
          <div>
            <p className="font-semibold text-sm sm:text-base text-blue-600 uppercase tracking-wider">
              Catalog
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] font-medium leading-[1.15] text-gray-900 mt-2">
              Products and services
            </h1>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              We source and manage everything you need for apparel production.
              From raw materials to finished goods, we handle it all.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 lg:mt-10">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10">
            <button
              type="button"
              className="w-full sm:w-auto border border-gray-300 px-6 sm:px-8 py-3 rounded-lg font-semibold text-gray-900 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 active:scale-[0.98] shadow-sm text-sm sm:text-base"
            >
              Browse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
