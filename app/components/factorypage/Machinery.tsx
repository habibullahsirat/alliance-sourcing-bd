export default function Machinery() {
  const machines = [
    {
      id: 1,
      image: "/machine1.png",
      title: "NEEDLE DETECTOR MACHINE",
    },
    {
      id: 2,
      image: "/machine2.png",
      title: "THREAD SUCKING MACHINE",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {machines.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-900"
          >
            {/* Responsive Image Height Container */}
            <div className="w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[687px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Gradient Overlay for Readable Text */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 pt-12">
              <p className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
