import WorkProcess from "../homepage/WorkProcess";

const fivePocket = [
  { image: "/1.png", title: "Men’s Five Pocket TRS" },
  { image: "/2.png", title: "Men’s Five Pocket TRS" },
  { image: "/3.png", title: "Men’s Five Pocket TRS" },
  { image: "/4.png", title: "Men’s Five Pocket TRS" },
];

const ladiesDresses = [
  { image: "/5.png", title: "Ladies Dresses" },
  { image: "/6.png", title: "Ladies Dresses" },
  { image: "/7.jpg", title: "Ladies Dresses" },
  { image: "/8.png", title: "Ladies Dresses" },
];

const girlsDenim = [
  { image: "/9.png", title: "Girls Wide Leg Jegging" },
  { image: "/10.png", title: "Girls Wide Leg And Paper Bag" },
  { image: "/11.jpg", title: "Premium Heavyweight Hoodie" },
  { image: "/12.jpg", title: "Streetwear Oversized Hoodie" },
];

const jeggings = [
  { image: "/13.jpg", title: "Stretch Fit Denim Jeggings" },
  { image: "/14.jpg", title: "High-Waist Slim Jeggings" },
  { image: "/15.jpg", title: "Comfort Flex Jeggings" },
  { image: "/16.jpg", title: "Streetwear Oversized Hoodie" },
];

const tShirt = [
  { image: "/k1.jpg", title: "Classic Cotton Crew T-Shirt" },
  { image: "/k2.png", title: "Premium Soft Touch V-Neck T-Shirt" },
  { image: "/k3.jpg", title: "Pique Polo Shirt" },
  { image: "/k4.jpg", title: "Urban Style Graphic T-Shirt" },
];

const polo = [
  { image: "/k5.jpg", title: "Classic Piqué Polo Shirt" },
  { image: "/k6.png", title: "Premium Soft Touch V-Neck T-Shirt" },
  { image: "/k7.jpg", title: "Sport Dry Polo Shirt" },
  { image: "/k8.jpg", title: "Urban Style Graphic T-Shirt" },
];

const hoodie = [
  { image: "/h1.jpg", title: "Classic Pullover Hoodie" },
  { image: "/h2.jpg", title: "Zipper Front Fleece Hoodie" },
  { image: "/11.jpg", title: "Premium Heavyweight Hoodie" },
  { image: "/12.jpg", title: "Streetwear Oversized Hoodie" },
];

const displayDresses = (name: string, dresses: typeof fivePocket) => {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-12 py-4 sm:py-6 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 px-1">
        {name}
      </h2>

      {/* 2 items per row on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {dresses.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            <div className="w-full h-[180px] sm:h-[260px] md:h-[320px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#F8FAFC] py-3 sm:py-4 px-2 sm:px-3 text-center flex-1 flex items-center justify-center">
              <p className="text-xs sm:text-base lg:text-lg font-medium text-[#1a2238] leading-tight sm:leading-snug">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ProductsComponent() {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      {/* Main Header */}
      <div className="text-center px-4 max-w-3xl mx-auto mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-gray-900 tracking-tight leading-tight">
          Product Expertise
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mt-3 sm:mt-4 leading-relaxed">
          We specialize in a wide array of textile categories, ensuring the
          right technical expertise for every product type.
        </p>
      </div>

      {/* Category: Woven */}
      <div className="my-6 sm:my-10">
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-8 border-b pb-4 max-w-7xl mx-auto px-4">
          Woven
        </h2>
        {displayDresses("Five pocket twill", fivePocket)}
        {displayDresses("Ladies Dress & Jackets", ladiesDresses)}
        {displayDresses("Girls Denim", girlsDenim)}
        {displayDresses("Jeggings", jeggings)}
      </div>

      {/* Category: Knitwear */}
      <div className="my-6 sm:my-10">
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-8 border-b pb-4 max-w-7xl mx-auto px-4">
          Knitwear
        </h2>
        {displayDresses("T-Shirt", tShirt)}
        {displayDresses("Polo", polo)}
        {displayDresses("Hoodie", hoodie)}
        {displayDresses("Jeggings", jeggings)}
      </div>

      <WorkProcess />
    </section>
  );
}
