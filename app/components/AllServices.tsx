export default function AllServices() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="font-semibold">Why</p>
        <div>
          <h2 className="font-[500] text-6xl mt-8">What sets us apart</h2>
          <p className="font-[400] mt-8">We stand behind every garment</p>
        </div>
      </div>
      {/* cards */}
      <div className="m-[16px] px-[8px] py-[16px]">
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-[32px]">
          {/* Card */}
          <div className="flex flex-col h-[300px] bg-gray-100 rounded-[16px] px-[8px] py-[16px]">
            <div className="w-[40px] h-[32px]">
              <img src="../../public/Vector1.png" alt="" />
            </div>
            <div className="my-auto">
              <h5 className="text-3xl">Quality Assurance</h5>
              <p className="text-lg">
                Rigorous testing at every production stage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
