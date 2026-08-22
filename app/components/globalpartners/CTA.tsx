export default function CTA() {
  return (
    <section
      className="flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 min-h-[300px] sm:min-h-[335px] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/buying-house.png')",
      }}
    >
      <div className="flex flex-col items-center text-center gap-6 sm:gap-8 max-w-3xl mx-auto">
        {/* Header & Description */}
        <div className="flex flex-col items-center gap-3 sm:gap-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-tight">
            Become Our Partner
          </h2>

          <p className="text-sm sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
            Scaling your supply chain starts with the right alliance. Let’s
            discuss your next collection.
          </p>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#0C97D5] hover:bg-[#0a82b8] border border-[#0C97D5] rounded-lg text-white text-base sm:text-lg font-medium transition-all duration-300 shadow-md active:scale-[0.98]"
        >
          Contact Sourcing
        </button>
      </div>
    </section>
  );
}
