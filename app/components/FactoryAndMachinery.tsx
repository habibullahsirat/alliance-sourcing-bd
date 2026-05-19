export default function FactoryAndMachinery() {
  const features = [
    {
      image: "../../public/vector19.png",
      title: "Knitwear",
      description: "Sweaters, t-shirts, and knit garments made to order.",
    },
    {
      image: "../../public/vector20.png",
      title: "Woven fabrics",
      description: "Cotton, blends, and specialty woven materials in stock.",
    },
    {
      image: "../../public/vector21.png",
      title: "Denim and heavy fabrics",
      description: "Durable denim and canvas for pants and jackets.",
    },
    {
      image: "../../public/vector22.png",
      title: "Accessories and trims",
      description:
        "Buttons, zippers, labels, and finishing materials available.",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-[64px] px-16 py-28 gap-20 w-[1440px] h-[864px] bg-[#FCEADA]">
      {/* MAIN SECTION */}
      <div className="flex w-full h-full gap-16">
        {/* RIGHT CONTENT SECTION */}
        <div className="w-1/2 flex flex-col justify-between">
          {/* Top Text */}
          <div>
            <img src="../../public/vector18.png" alt="" />

            <h1 className="text-[60px] font-[500] mt-2">
              Products and services
            </h1>

            <p className="mt-4">
              We source and manage everything you need for apparel production.
              From raw materials to finished goods, we handle it all.
            </p>
          </div>

          {/* GRID CARDS */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-3">
                {/* icon */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />

                {/* text */}
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-6">
            <button className="border border-gray-200 px-6 py-3 font-[600] rounded-md hover:text-white hover:bg-blue-700 transition">
              Browse
            </button>
          </div>
        </div>

        <div className="w-1/2 h-full">
          <img
            src="../../public/machinary.jpg"
            alt="Catalog"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
