import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function ContactComponent() {
  return (
    <section className="flex flex-col items-center w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2 sm:mb-4">
            Reach
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight">
            Contact us
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            We are here to answer your questions and discuss your sourcing
            needs.
          </p>
        </div>

        {/* Info Grid & Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 mt-10 sm:mt-16 lg:mt-20 items-start">
          {/* Contact Details Column */}
          <div className="flex flex-col gap-8 sm:gap-12">
            {/* Email Card */}
            <div>
              <Mail
                className="w-7 h-7 sm:w-9 sm:h-9 text-gray-900 mb-3 sm:mb-5"
                strokeWidth={1.8}
              />

              <h3 className="text-xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-2 sm:mb-3">
                Email
              </h3>

              <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-2">
                Send us a message
              </p>

              <a
                href="mailto:info@alliancesourcingbd.com"
                className="text-base sm:text-xl lg:text-2xl font-medium text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors break-all"
              >
                info@alliancesourcingbd.com
              </a>
            </div>

            {/* Phone Card */}
            <div>
              <Phone
                className="w-7 h-7 sm:w-9 sm:h-9 text-gray-900 mb-3 sm:mb-5"
                strokeWidth={1.8}
              />

              <h3 className="text-xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-2 sm:mb-3">
                Phone
              </h3>

              <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-2">
                Call us directly
              </p>

              <a
                href="tel:+8801700000000"
                className="text-base sm:text-xl lg:text-2xl font-medium text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                +880 1700 000000
              </a>
            </div>

            {/* Office Card */}
            <div>
              <MapPin
                className="w-7 h-7 sm:w-9 sm:h-9 text-gray-900 mb-3 sm:mb-5"
                strokeWidth={1.8}
              />

              <h3 className="text-xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-2 sm:mb-3">
                Office
              </h3>

              <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6">
                Dhaka, Bangladesh
              </p>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base sm:text-xl lg:text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors group"
              >
                Get directions
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Location Map Image */}
          <div className="w-full h-full">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <img
                src="/map.png"
                alt="Office location map"
                className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
