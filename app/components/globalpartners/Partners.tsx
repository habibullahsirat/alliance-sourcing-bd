import { useState } from "react";

const partnerLogos = [
  { id: 1, src: "/Logo3.png", alt: "Partner Logo 1", region: "USA" },
  { id: 2, src: "/Logo4.png", alt: "Partner Logo 2", region: "Europe" },
  { id: 3, src: "/Logo5.png", alt: "Partner Logo 3", region: "Japan" },
  { id: 4, src: "/Logo3.png", alt: "Partner Logo 4", region: "USA" },
  { id: 5, src: "/Logo3.png", alt: "Partner Logo 5", region: "Europe" },
  { id: 6, src: "/Logo3.png", alt: "Partner Logo 6", region: "Japan" },
  { id: 7, src: "/Logo3.png", alt: "Partner Logo 7", region: "USA" },
  { id: 8, src: "/Logo3.png", alt: "Partner Logo 8", region: "Europe" },
];

export default function Partners() {
  const [activeTab, setActiveTab] = useState("All Clients");

  const filterTabs = ["All Clients", "USA", "Europe", "Japan"];

  const filteredPartners =
    activeTab === "All Clients"
      ? partnerLogos
      : partnerLogos.filter((partner) => partner.region === activeTab);

  return (
    <section className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 gap-8 sm:gap-12 bg-[#F2F2F2] w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-3 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-tight text-[#24201D] leading-tight">
          Explore Our Partners
        </h2>

        <p className="text-sm sm:text-lg lg:text-xl text-[#54524F] leading-relaxed max-w-2xl">
          Alliance Sourcing BD links international clients with reliable
          production in Bangladesh, driven by trust, compliance, and efficiency.
        </p>
      </div>

      {/* Filter Tabs - Horizontal Scroll on Small Screens */}
      <div className="w-full max-w-xl overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 p-2 bg-[#EFEFEF] rounded-lg min-w-max mx-auto">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-medium rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#0A66C2] text-white shadow-xs"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Logo Container - 2 columns on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl mx-auto mt-2">
        {filteredPartners.map((partner) => (
          <div
            key={partner.id}
            className="flex justify-center items-center h-[100px] sm:h-[120px] lg:h-[130px] p-4 bg-white border border-black/10 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-300"
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
