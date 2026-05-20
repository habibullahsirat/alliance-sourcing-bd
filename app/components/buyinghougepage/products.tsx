const wooven = [
  {
    image: "/1.png",
    title: "Men’s Five Pocket TRS",
  },
  {
    image: "/2.png",
    title: "Men’s Five Pocket TRS",
  },
  {
    image: "/3.png",
    title: "Men’s Five Pocket TRS",
  },
  {
    image: "/4.png",
    title: "Men’s Five Pocket TRS",
  },
  {
    image: "/5.png",
    title: "Ladies Dresses",
  },
  {
    image: "/6.png",
    title: "Ladies Dresses",
  },
  {
    image: "/7.jpg",
    title: "Ladies Dresses",
  },
  {
    image: "/8.png",
    title: "Ladies Dresses",
  },
  {
    image: "/9.png",
    title: "Girls Wide Leg Jegging",
  },
  {
    image: "/10.png",
    title: "Girls Wide Leg And Paper Bag ",
  },
  {
    image: "/11.jpg",
    title: "Premium Heavyweight Hoodie",
  },
  {
    image: "/12.jpg",
    title: "Streetwear Oversized Hoodie",
  },
  {
    image: "/13.jpg",
    title: "Stretch Fit Denim Jeggings",
  },
  {
    image: "/14.jpg",
    title: "High-Waist Slim Jeggings",
  },
  {
    image: "/15.jpg",
    title: "Comfort Flex Jeggings",
  },
  {
    image: "/16.jpg",
    title: "Streetwear Oversized Hoodie",
  },
];

const knitwear = [
  {
    image: "/k1.jpg",
    title: "Classic Cotton Crew T-Shirt",
  },
  {
    image: "/k2.png",
    title: "Premium Soft Touch V-Neck T-Shirt",
  },
  {
    image: "/k3.jpg",
    title: "Pique Polo Shirt",
  },
  {
    image: "/k4.jpg",
    title: "Urban Style Graphic T-Shirt",
  },
  {
    image: "/k5.jpg",
    title: "Classic Piqué Polo Shirt",
  },
  {
    image: "/k6.png",
    title: "Premium Soft Touch V-Neck T-Shirt",
  },
  {
    image: "/k7.jpg",
    title: "Sport Dry Polo Shirt",
  },
  {
    image: "/k8.jpg",
    title: "Urban Style Graphic T-Shirt",
  },
  {
    image: "/h1.jpg",
    title: "Classic Pullover Hoodie",
  },
  {
    image: "/h2.jpg",
    title: "Zipper Front Fleece Hoodie",
  },
  {
    image: "/11.jpg",
    title: "Premium Heavyweight Hoodie",
  },
  {
    image: "/12.jpg",
    title: "Streetwear Oversized Hoodie",
  },
  {
    image: "/13.jpg",
    title: "Stretch Fit Denim Jeggings",
  },
  {
    image: "/14.jpg",
    title: "High-Waist Slim Jeggings",
  },
  {
    image: "/15.jpg",
    title: "Comfort Flex Jeggings",
  },
  {
    image: "/16.jpg",
    title: "Streetwear Oversized Hoodie",
  },
];

export default function ProductsComponent() {
  return (
    <div>
      <div className="text-center mt-[10%]">
        <h1 className="text-[60px]">Product Expertise</h1>
        <p className="font-[20px]">
          We specialize in a wide array of textile categories, ensuring the
          right technical expertise for every product type.
        </p>
      </div>

      <div>
        <h1 className="text-center text-[60px] mt-[5%]">Wooven</h1>
        <div className="w-full px-6 py-8">
          <div>
            <h2 className="text-[32px]">Five Pocket Twill</h2>
            {/* Main Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wooven.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl overflow-hidden"
                >
                  {/* Top Text */}
                  {/* <p className="text-[#0b1736] text-[28px] font-semibold px-4 pt-4 pb-2">
              Five Pocket Twill
            </p> */}
                  {/* Image */}
                  <div className="w-full h-[320px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Bottom Title */}
                  <div className="bg-[#f2f2f2] py-4 px-3 text-center">
                    <p className="text-[20px] font-medium text-[#1a2238] leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-[60px] mt-[5%]">Knitwear</h1>
        <div className="w-full px-6 py-8">
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {knitwear.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl overflow-hidden"
              >
                {/* Top Text */}
                {/* <p className="text-[#0b1736] text-[28px] font-semibold px-4 pt-4 pb-2">
              Five Pocket Twill
            </p> */}
                {/* Image */}
                <div className="w-full h-[320px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom Title */}
                <div className="bg-[#f2f2f2] py-4 px-3 text-center">
                  <p className="text-[20px] font-medium text-[#1a2238] leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
