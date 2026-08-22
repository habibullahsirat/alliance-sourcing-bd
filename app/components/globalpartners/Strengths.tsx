const strengths = [
  {
    icon: "/vector23.png",
    title: "Long-term collaboration approach",
    text: "Building lasting relationships that grow stronger with every collection",
  },
  {
    icon: "/vector24.png",
    title: "Transparent communication",
    text: "Clear, honest dialogue at every stage of production",
  },
  {
    icon: "/vector27.png",
    title: "Strong quality control system",
    text: "Rigorous standards ensuring excellence in every garment",
  },
  {
    icon: "/vector25.png",
    title: "On-time delivery commitment",
    text: "Meeting deadlines consistently to keep your business running smoothly",
  },
  {
    icon: "/vector26.png",
    title: "Ethical and sustainable sourcing",
    text: "Responsible practices that protect people and planet",
  },
];

export default function Strengths() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 gap-8 sm:gap-12 bg-white border-t border-gray-100">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-[#24201D] mb-3 sm:mb-6 tracking-tight leading-tight">
          What Makes Our Partnerships Strong
        </h2>

        <p className="text-sm sm:text-lg lg:text-xl leading-relaxed text-[#54524F]">
          Our commitment to excellence goes beyond manufacturing. We build
          partnerships on trust, transparency, and shared success.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {strengths.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all duration-300 min-h-[220px]"
          >
            <div>
              {/* Icon Container - Clean white background for contrast */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 mb-6 p-2.5 shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#24201D] mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Body Copy */}
              <p className="text-xs sm:text-sm text-[#54524F] leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
