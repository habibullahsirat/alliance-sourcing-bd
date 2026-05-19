// export default function Services() {
//   return (
//     <section className="w-full bg-[#f5f5f5] px-20 py-24">
//       <div className="grid grid-cols-2 gap-24">
//         {/* Left Side */}
//         <div className="flex flex-col">
//           <span className="text-[28px] font-medium text-black mb-6">
//             Process
//           </span>

//           <h2 className="text-[96px] leading-[0.95] font-normal tracking-[-4px] text-black max-w-[520px]">
//             How we work
//           </h2>

//           <button className="mt-16 w-fit border border-[#d9d9d9] rounded-[10px] px-10 py-5 text-[32px] text-black hover:bg-black hover:text-white transition-colors duration-300">
//             Discuss
//           </button>
//         </div>

//         {/* Right Side */}
//         <div className="relative pl-24">
//           {/* Vertical Line */}
//           {/* <div className="absolute left-[42px] top-20 h-[14%] w-px bg-[#d7d7d7]" /> */}

//           <div className="space-y-24">
//             {/* Item 1 */}
//             <div className="relative flex gap-10">
//               <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#f5f5f5]">
//                 <img
//                   src="../../public/vector5.png"
//                   alt="Consultation"
//                   className="h-12 w-12"
//                 />
//               </div>

//               <div className="absolute left-[20px] top-20 h-[100%] w-px bg-[#d7d7d7]" />

//               <div>
//                 <h3 className="text-[48px] font-normal tracking-[-1px] text-black">
//                   Consultation
//                 </h3>

//                 <p className="mt-4 max-w-[700px] text-[28px] leading-[1.5] text-[#2c2c2c]">
//                   We listen to your needs and understand your specifications
//                 </p>
//               </div>
//             </div>

//             {/* Item 2 */}
//             <div className="relative flex gap-10">
//               <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#f5f5f5]">
//                 <img
//                   src="../../public/vector6.png"
//                   alt="Supplier match"
//                   className="h-12 w-12"
//                 />
//               </div>

//               <div className="absolute left-[20px] top-20 h-[100%] w-px bg-[#d7d7d7]" />

//               <div>
//                 <h3 className="text-[48px] font-normal tracking-[-1px] text-black">
//                   Supplier match
//                 </h3>

//                 <p className="mt-4 max-w-[700px] text-[28px] leading-[1.5] text-[#2c2c2c]">
//                   We match you with manufacturers who meet your standards
//                 </p>
//               </div>
//             </div>

//             {/* Item 3 */}
//             <div className="relative flex gap-10">
//               <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#f5f5f5]">
//                 <img
//                   src="../../public/vector7.png"
//                   alt="Order management"
//                   className="h-12 w-12"
//                 />
//               </div>

//               <div className="absolute left-[20px] top-20 h-[100%] w-px bg-[#d7d7d7]" />

//               <div>
//                 <h3 className="text-[48px] font-normal tracking-[-1px] text-black">
//                   Order management
//                 </h3>

//                 <p className="mt-4 max-w-[760px] text-[28px] leading-[1.5] text-[#2c2c2c]">
//                   We negotiate terms and oversee production from start to finish
//                 </p>
//               </div>
//             </div>

//             {/* Item 4 */}
//             <div className="relative flex gap-10">
//               <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#f5f5f5]">
//                 <img
//                   src="../../public/vector8.png"
//                   alt="Quality check"
//                   className="h-12 w-12"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-[48px] font-normal tracking-[-1px] text-black">
//                   Quality check
//                 </h3>

//                 <p className="mt-4 max-w-[760px] text-[28px] leading-[1.5] text-[#2c2c2c]">
//                   Every batch is tested against your specifications and
//                   standards
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Services() {
  return (
    <div className="bg-white min-h-screen font-sans flex items-center justify-center p-8 md:p-24 select-none">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 items-start">
        {/* Left Section - Stays locked to the left */}
        <div className="md:col-span-6 flex flex-col items-start justify-start pt-2">
          <span className="text-sm font-semibold tracking-wide text-gray-900 mb-4 block">
            Process
          </span>
          <h2 className="text-5xl md:text-[72px] font-normal tracking-tight text-gray-900 mb-10 leading-[1.1]">
            How we work
          </h2>
          <button className="px-7 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200 shadow-sm">
            Discuss
          </button>
        </div>

        {/* Right Section - Locked to the extreme right edge */}
        <div className="md:col-span-6 relative flex flex-col space-y-16 pl-4 md:pl-0 w-full max-w-xl md:justify-self-end">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-[1px] bg-gray-200 z-0"></div>

          {/* Step 1: Consultation */}
          <div className="flex items-start space-x-8 relative z-10">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              <img src="../../public/vector5.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-normal text-gray-900 mb-2 tracking-tight">
                Consultation
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-md font-normal opacity-90">
                We listen to your needs and understand your specifications
              </p>
            </div>
          </div>

          {/* Step 2: Supplier Match */}
          <div className="flex items-start space-x-8 relative z-10">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              <img src="../../public/vector6.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-normal text-gray-900 mb-2 tracking-tight">
                Supplier match
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-md font-normal opacity-90">
                We match you with manufacturers who meet your standards
              </p>
            </div>
          </div>

          {/* Step 3: Order Management */}
          <div className="flex items-start space-x-8 relative z-10">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              <img src="../../public/vector7.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-normal text-gray-900 mb-2 tracking-tight">
                Order management
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-md font-normal opacity-90">
                We negotiate terms and oversee production from start to finish
              </p>
            </div>
          </div>

          {/* Step 4: Quality Check */}
          <div className="flex items-start space-x-8 relative z-10">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              <img src="../../public/vector8.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-normal text-gray-900 mb-2 tracking-tight">
                Quality check
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-md font-normal opacity-90">
                Every batch is tested against your specifications and standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
