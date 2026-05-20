const partners = [
  "FOREVER 21",
  "Buckle",
  "Beauty Fit",
  "FOREVER 21",
  "FOREVER 21",
  "FOREVER 21",
  "FOREVER 21",
  "FOREVER 21",
];

export default function Partners() {
  return (
    <>
      {/* PARTNERS SECTION */}
      <section className="flex flex-col items-center px-16 py-28 gap-12 bg-[#F2F2F2]">
        <div className="flex flex-col items-center gap-3 text-center max-w-4xl">
          <h2 className="text-[60px] leading-[72px] font-medium tracking-tight text-[#24201D]">
            Explore Our Partners
          </h2>

          <p className="text-xl text-[#54524F] leading-[30px]">
            Alliance Sourcing BD links international clients with reliable
            production in Bangladesh, driven by trust, compliance, and
            efficiency.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-3 p-3 bg-[#EFEFEF]">
          <button className="px-6 py-3 bg-[#0A66C2] text-white text-lg">
            All Clients
          </button>

          <button className="px-6 py-3 bg-white text-black text-lg">USA</button>

          <button className="px-6 py-3 bg-white text-black text-lg">
            Europe
          </button>

          <button className="px-6 py-3 bg-white text-black text-lg">
            Japan
          </button>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[200px] h-[130px] bg-white border border-black/20"
            >
              <span className="text-3xl font-bold tracking-wide">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
