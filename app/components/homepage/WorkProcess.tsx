export default function Services() {
  const steps = [
    {
      id: 1,
      icon: "/vector5.png",
      title: "Consultation",
      description: "We listen to your needs and understand your specifications",
    },
    {
      id: 2,
      icon: "/vector6.1.png",
      title: "Supplier match",
      description: "We match you with manufacturers who meet your standards",
    },
    {
      id: 3,
      icon: "/vector7.png",
      title: "Order management",
      description:
        "We negotiate terms and oversee production from start to finish",
    },
    {
      id: 4,
      icon: "/vector8.png",
      title: "Quality check",
      description:
        "Every batch is tested against your specifications and standards",
    },
  ];

  return (
    <section className="bg-white min-h-screen font-sans flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24 select-none">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-start">
        {/* Left Column (Sticky Header Content) */}
        <div className="md:col-span-6 flex flex-col items-start justify-start md:sticky md:top-28">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 mb-2 sm:mb-4 block">
            Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[72px] font-normal tracking-tight text-gray-900 mb-6 sm:mb-8 md:mb-10 leading-[1.1]">
            How we work
          </h2>
          <button
            type="button"
            className="px-6 sm:px-7 py-2.5 sm:py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-900 hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            Discuss
          </button>
        </div>

        {/* Right Column (Vertical Timeline Process) */}
        <div className="md:col-span-6 relative flex flex-col space-y-8 sm:space-y-12 md:space-y-16 w-full max-w-xl md:justify-self-end mt-4 md:mt-0">
          {/* Timeline Vertical Connecting Line */}
          <div className="absolute left-5 sm:left-[22px] top-5 bottom-5 w-[2px] bg-gray-200 z-0" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-start gap-4 sm:gap-8 relative z-10"
            >
              {/* Icon Circle */}
              <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-white flex items-center justify-center rounded-full border border-gray-200 shadow-sm">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
              </div>

              {/* Text Info */}
              <div className="flex-1 pt-0.5">
                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-1 sm:mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed max-w-md opacity-90">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
