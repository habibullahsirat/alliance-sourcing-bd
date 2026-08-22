export default function FactoryComponent() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center gap-4 sm:gap-6">
        {/* Category Label */}
        <p className="text-sm sm:text-base font-semibold text-blue-600 uppercase tracking-wider">
          Own Factory
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-gray-900 leading-tight tracking-tight max-w-3xl">
          The Ways to Keep Business Growing
        </h1>

        {/* Description Paragraph */}
        <p className="text-base sm:text-lg lg:text-[20px] text-gray-600 leading-relaxed max-w-2xl mt-1 sm:mt-2">
          Are you interested to know details about our factory, production
          system and company policy at a glance? Please have a look at the
          provided pdf file.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 w-full sm:w-auto">
          {/* Download Graphic / Button */}
          <button
            type="button"
            className="hover:opacity-90 transition-opacity active:scale-[0.98]"
            aria-label="Download factory details"
          >
            <img
              src="/download.png"
              alt="Download PDF"
              className="w-[150px] sm:w-[174px] h-auto object-contain"
            />
          </button>

          {/* Direct PDF View Button */}
          <button
            type="button"
            className="w-full sm:w-auto min-w-[131px] px-6 py-3 bg-[#0C97D5] hover:bg-[#0a82b8] text-white font-medium rounded-lg transition-all duration-300 shadow-sm active:scale-[0.98] text-base"
          >
            View PDF
          </button>
        </div>
      </div>
    </section>
  );
}
