export default function FactoryAndMachinery() {
  const features = [
    {
      image: "/vector19.png",
      title: "Garment production support",
      description:
        "Full-scale manufacturing with quality control at each stage.",
    },
    {
      image: "/vector20.png",
      title: "Machinery supply and installation",
      description: "We source and install equipment tailored to your needs.",
    },
    {
      image: "/vector21.png",
      title: "Maintenance and technical support",
      description: "Our team keeps machines running smoothly year-round.",
    },
    {
      image: "/vector22.png",
      title: "Production optimization",
      description: "We improve efficiency and reduce waste on every line.",
    },
  ];

  return (
    <section className="bg-[#FCEADA] py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 w-full my-8 sm:my-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Content Container */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          {/* Header Info */}
          <div>
            <div className="w-10 h-10 mb-2">
              <img
                src="/vector18.png"
                alt="Capability Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] font-medium leading-[1.15] text-gray-900 mt-2">
              Factory and machinery capabilities
            </h1>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              We work with modern facilities equipped for precision production.
              Our network includes mills and factories with the latest
              technology.
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
              className="w-full sm:w-auto border border-gray-300 bg-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-gray-900 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 active:scale-[0.98] shadow-sm text-sm sm:text-base"
            >
              Details
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="lg:col-span-6 w-full">
          <img
            src="/machinary.jpg"
            alt="Factory Machinery"
            className="w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[600px] object-cover rounded-xl shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
