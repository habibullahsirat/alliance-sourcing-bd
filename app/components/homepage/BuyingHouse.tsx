export default function BuyingHouse() {
  const features = [
    { id: 1, icon: "/vector9.png", label: "Product development and sampling" },
    {
      id: 2,
      icon: "/vector10.png",
      label: "Supplier selection and evaluation",
    },
    {
      id: 3,
      icon: "/vector11.png",
      label: "Price negotiation and order placement",
    },
  ];

  return (
    <section className="w-full bg-[#FCEADA] px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 max-w-[1312px] items-center gap-8 md:gap-12 lg:gap-16">
        {/* Image Container */}
        <div className="lg:col-span-6 w-full order-2 lg:order-1">
          <img
            src="/buying-house.png"
            alt="Buying House"
            className="h-[320px] sm:h-[450px] md:h-[550px] lg:h-[640px] w-full rounded-xl object-cover shadow-sm"
          />
        </div>

        {/* Content Container */}
        <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
          <span className="mb-3 sm:mb-6 text-sm sm:text-base font-semibold text-black uppercase tracking-wider">
            Services
          </span>

          <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal leading-[1.1] lg:leading-[1.08] tracking-tight text-black">
            Professional buying house services
          </h2>

          <p className="mt-4 sm:mt-6 lg:mt-8 max-w-2xl text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#1F1F1F]">
            We handle the complexity of sourcing so you can focus on your
            business. Our buying house team brings years of experience in
            connecting buyers with the right manufacturers.
          </p>

          {/* Bullet List */}
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col gap-4 sm:gap-6">
            {features.map((item) => (
              <div key={item.id} className="flex items-center gap-3 sm:gap-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base lg:text-[18px] text-[#1F1F1F] font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            type="button"
            className="mt-8 sm:mt-10 lg:mt-12 w-full sm:w-fit rounded-lg border border-[#D4C5B8] bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-base lg:text-[18px] font-medium text-black transition-all duration-300 hover:bg-black hover:text-white active:scale-[0.98] shadow-sm"
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
