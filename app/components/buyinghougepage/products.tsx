const products = [
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
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/6.png",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/7.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/8.png",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/9.png",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/10.png",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/11.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/12.jpg",
    title: "Supplier selection and evaluation",
  },
  {
    image: "/13.jpg",
    title: "Price negotiation and order placement",
  },
  {
    image: "/14.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/15.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/16.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/k1.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/k2.png",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/k3.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/k4.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/k5.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/k6.png",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/k7.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/k8.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/h1.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/h2.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/11.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/12.jpg",
    title: "Supplier selection and evaluation",
  },
  {
    image: "/13.jpg",
    title: "Price negotiation and order placement",
  },
  {
    image: "/14.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/15.jpg",
    title: "Production follow-up and quality inspection",
  },
  {
    image: "/16.jpg",
    title: "Production follow-up and quality inspection",
  },
];

// export default function ProductsComponent() {
//   return (
//     <>
//       <div></div>
//     </>
//   );
// }

// const products = [
//   {
//     image: "/1.png",
//     title: "Supplier selection and evaluation",
//   },
//   {
//     image: "/2.png",
//     title: "Price negotiation and order placement",
//   },
//   {
//     image: "/3.png",
//     title: "Production follow-up and quality inspection",
//   },
//   {
//     image: "/4.png",
//     title: "Production follow-up and quality inspection",
//   },
//   {
//     image: "/5.png",
//     title: "Production follow-up and quality inspection",
//   },
//   {
//     image: "/6.png",
//     title: "Production follow-up and quality inspection",
//   },
//   {
//     image: "/7.jpg",
//     title: "Production follow-up and quality inspection",
//   },
//   {
//     image: "/8.png",
//     title: "Production follow-up and quality inspection",
//   },
// ];

export default function ProductsComponent() {
  return (
    <div className="w-full px-6 py-8">
      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div key={index} className="flex flex-col rounded-xl overflow-hidden">
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
  );
}
