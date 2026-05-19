export default function Services() {
  return (
    <div className="bg-white min-h-screen font-sans flex items-center justify-center p-8 md:p-16 select-none">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        {/* Left Section */}
        <div className="md:col-span-5 flex flex-col items-start justify-start pt-2">
          <span className="text-sm font-semibold tracking-wide text-gray-900 mb-4 block">
            Process
          </span>
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-gray-900 mb-8 leading-tight">
            How we work
          </h2>
          <button className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200 shadow-sm">
            Discuss
          </button>
        </div>

        {/* Right Section - Timeline */}
        <div className="md:col-span-7 relative flex flex-col space-y-12 pl-10 md:pl-0">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-[1px] bg-gray-200 z-0"></div>

          {/* Step 1: Consultation */}
          <div className="flex items-start space-x-6 relative z-10 group">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              {/* Consultation Custom SVG */}
              <img src="../../public/vector5.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
                Consultation
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg font-light">
                We listen to your needs and understand your specifications
              </p>
            </div>
          </div>

          {/* Step 2: Supplier Match */}
          <div className="flex items-start space-x-6 relative z-10 group">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              {/* Handshake Custom SVG */}
              <img src="../../public/Vector6.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
                Supplier match
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg font-light">
                We match you with manufacturers who meet your standards
              </p>
            </div>
          </div>

          {/* Step 3: Order Management */}
          <div className="flex items-start space-x-6 relative z-10 group">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              {/* Shopping Cart Custom SVG */}
              <img src="../../public/vector7.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
                Order management
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg font-light">
                We negotiate terms and oversee production from start to finish
              </p>
            </div>
          </div>

          {/* Step 4: Quality Check */}
          <div className="flex items-start space-x-6 relative z-10 group">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              {/* Quality Medal Custom SVG */}
              <img src="../../public/Vector8.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
                Quality check
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg font-light">
                Every batch is tested against your specifications and standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
