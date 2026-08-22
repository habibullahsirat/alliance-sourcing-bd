const services = [
  {
    image: "/vector10.png",
    title: "Supplier selection and evaluation",
    description: "We find manufacturers who meet your standards.",
  },
  {
    image: "/vector11.png",
    title: "Price negotiation and order placement",
    description: "We secure the best terms for your orders.",
  },
  {
    image: "/vector13.png",
    title: "Production follow-up and quality inspection",
    description: "We monitor every batch from loom to shipment.",
  },
];

export default function BuyingHouseService() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-8 sm:mt-12">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
        <p className="text-sm sm:text-base font-semibold text-blue-600 uppercase tracking-wider mb-2">
          Services
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal leading-tight text-gray-900">
          Buying house services
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
          We manage every step of your sourcing journey with precision.
        </p>
      </div>

      {/* Responsive Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Featured Card */}
        <div className="bg-[#0C97D5] text-white rounded-xl p-6 flex flex-col justify-between min-h-[300px] sm:min-h-[328px] shadow-sm">
          <div className="w-10 h-10 shrink-0">
            <img
              src="/vector12.png"
              alt="Product Development"
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-medium leading-tight mb-2">
              Product Development and sampling
            </h2>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed">
              We create samples that match your vision exactly.
            </p>
          </div>
        </div>

        {/* Mapped Service Cards */}
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between min-h-[300px] sm:min-h-[328px] hover:border-blue-400 hover:shadow-md transition-all duration-300"
          >
            <div className="w-10 h-10 shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 leading-tight mb-2">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
