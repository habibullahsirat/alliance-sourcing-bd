// export default function AllServices() {
//   return (
//     <div className="mt-20">
//       <div className="text-center">
//         <p className="font-semibold text-[16px]">Why</p>
//         <div>
//           <h2 className="font-[500] text-[60px] mt-8">What sets us apart</h2>
//           <p className="font-[400] mt-8 text-[20px]">
//             We stand behind every garment
//           </p>
//         </div>
//       </div>
//       {/* cards */}
//       <div className="m-[16px] px-[8px] py-[16px]">
//         <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-[32px]">
//           {/* Card */}
//           <div className="flex flex-col h-[300px] justify-between bg-[#F2F2F2] rounded-[16px] px-[16px] py-[16px]">
//             <div className="w-[40px] h-[32px]">
//               <img
//                 src="/Vector1.png"
//                 alt="Quality assurance icon"
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             <div className="mt-auto">
//               <h5 className="text-[32px] leading-[38px] font-medium text-black mb-[12px] max-w-[220px]">
//                 Quality assurance
//               </h5>

//               <p className="text-[18px] leading-[28px] text-black max-w-[260px]">
//                 Rigorous testing at every production stage
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col h-[300px] bg-gray-100 rounded-[16px] px-[8px] py-[16px]">
//             <div className="w-[40px] h-[32px]">
//               <img src="../../public/Vector2.png" alt="" />
//             </div>
//             <div className="my-auto">
//               <h5 className="text-3xl">Quality Assurance</h5>
//               <p className="text-lg">
//                 Rigorous testing at every production stage
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col h-[300px] bg-gray-100 rounded-[16px] px-[8px] py-[16px]">
//             <div className="w-[40px] h-[32px]">
//               <img src="../../public/Vector3.png" alt="" />
//             </div>
//             <div className="my-auto">
//               <h5 className="text-3xl">Quality Assurance</h5>
//               <p className="text-lg">
//                 Rigorous testing at every production stage
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col h-[300px] bg-gray-100 rounded-[16px] px-[8px] py-[16px]">
//             <div className="w-[40px] h-[32px]">
//               <img src="../../public/Vector4.png" alt="" />
//             </div>
//             <div className="my-auto">
//               <h5 className="text-3xl">Quality Assurance</h5>
//               <p className="text-lg">
//                 Rigorous testing at every production stage
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
const services = [
  {
    id: 1,
    image: "/Vector1.png",
    title: "Quality assurance",
    description: "Rigorous testing at every production stage",
  },
  {
    id: 2,
    image: "/Vector2.png",
    title: "Ethical sourcing",
    description: "Fair wages and safe working conditions",
  },
  {
    id: 3,
    image: "/Vector3.png",
    title: "On-time delivery",
    description: "Your deadlines are our commitments",
  },
  {
    id: 4,
    image: "/Vector4.png",
    title: "Global network",
    description: "Connected across Bangladesh and beyond",
  },
];

export default function AllServices() {
  return (
    <div className="mt-20">
      {/* Heading */}
      <div className="text-center">
        <p className="font-semibold text-[16px]">Why</p>

        <div>
          <h2 className="font-[500] text-[60px] mt-8">What sets us apart</h2>

          <p className="font-[400] mt-8 text-[20px]">
            We stand behind every garment
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="m-[16px] px-[8px] py-[16px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[32px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col h-[300px] bg-[#F2F2F2] rounded-[16px] px-[16px] py-[16px]"
            >
              {/* Icon */}
              <div className="w-[40px] h-[32px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h5 className="text-[32px] leading-[38px] font-medium text-black mb-[12px] max-w-[220px]">
                  {service.title}
                </h5>

                <p className="text-[18px] leading-[28px] text-black max-w-[260px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
