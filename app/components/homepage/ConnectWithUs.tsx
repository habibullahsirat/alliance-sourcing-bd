export default function ConnectWithUs() {
  return (
    <section className="relative bg-black w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="w-full h-[400px] sm:h-[480px] md:h-[550px] lg:h-[600px] overflow-hidden opacity-60">
        <img
          src="/hero.png"
          alt="Apparel Sourcing Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 py-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-white font-[syne] font-bold leading-tight tracking-tight">
            Ready to start sourcing?
          </h2>

          {/* Subtitle / Description */}
          <p className="text-gray-200 font-[inter] text-base sm:text-lg md:text-xl mt-3 sm:mt-5 max-w-xl leading-relaxed">
            Let us handle your next apparel order from start to finish.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#0C97D5] hover:bg-[#0a82b8] text-white rounded-md border border-[#0C97D5] text-base sm:text-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md"
            >
              Contact
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white hover:bg-gray-100 text-[#0C97D5] rounded-md border border-white text-base sm:text-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md"
            >
              Learn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
