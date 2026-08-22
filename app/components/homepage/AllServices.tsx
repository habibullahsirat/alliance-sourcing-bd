const services = [
  {
    id: 1,
    image: "/Vector1.png",
    title: "Quality assurance",
    description: "Rigorous testing at every production stage",
  },
  {
    id: 2,
    image: "/Vector2.png",
    title: "Ethical sourcing",
    description: "Fair wages and safe working conditions",
  },
  {
    id: 3,
    image: "/Vector3.png",
    title: "On-time delivery",
    description: "Your deadlines are our commitments",
  },
  {
    id: 4,
    image: "/Vector4.png",
    title: "Global network",
    description: "Connected across Bangladesh and beyond",
  },
];

export default function AllServices() {
  return (
    <section className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="font-semibold text-sm sm:text-base text-blue-600 uppercase tracking-wider">
          Why
        </p>

        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4 text-gray-900 tracking-tight">
          What sets us apart
        </h2>

        <p className="font-normal mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          We stand behind every garment
        </p>
      </div>

      {/* Grid Cards Container */}
      <div className="mt-8 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between min-h-[260px] sm:min-h-[280px] bg-[#F2F2F2] hover:bg-[#e8e8e8] transition-colors duration-300 rounded-2xl p-6 sm:p-8"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-start">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Container */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl lg:text-2xl font-medium text-black mb-2 leading-tight">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
