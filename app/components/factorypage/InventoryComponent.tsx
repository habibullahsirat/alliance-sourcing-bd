export default function InventoryComponent() {
  const cuttingMachineryData = [
    ["01", 'Cutting Machine 10"', "KM", "03"],
    ["02", 'Cutting Machine 8"', "KM", "03"],
    ["03", 'Cutting Machine 8"', "Open", "01"],
    ["04", "Band Knife Machine", "Open", "01"],
    ["05", "End Cutting Machine", "Eastman", "02"],
    ["06", "Fabric Inspection Machine", "Open", "01"],
    ["07", "Fusing Machine (Medium) HP-650", "Open", "02"],
    ["08", "Drill Machine", "Open", "02"],
    ["09", "Numbering Machine", "Open", "05"],
  ];

  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 w-full bg-white">
      {/* Main Header */}
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-tight">
          Our Machinery Inventory
        </h1>
      </div>

      <div className="w-full max-w-7xl">
        {/* Sub Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-gray-800 mb-6 sm:mb-8 lg:mb-10">
          Cutting Machinery
        </h2>

        {/* Responsive Table Wrapper with Horizontal Scroll */}
        <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full border-collapse min-w-[600px] text-left text-sm sm:text-base">
            <thead className="bg-gray-100 text-gray-900">
              <tr>
                <th className="px-4 sm:px-6 py-4 font-semibold w-16 sm:w-24">
                  SL No.
                </th>
                <th className="px-4 sm:px-6 py-4 font-semibold">
                  Machine Name
                </th>
                <th className="px-4 sm:px-6 py-4 font-semibold">Brand</th>
                <th className="px-4 sm:px-6 py-4 font-semibold text-center w-24 sm:w-32">
                  Quantity
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-800 divide-y divide-gray-200">
              {cuttingMachineryData.map(([sl, machine, brand, qty], index) => (
                <tr
                  key={sl}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                >
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-medium text-gray-500">
                    {sl}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-medium text-gray-900">
                    {machine}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-gray-600">
                    {brand}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-center font-semibold text-gray-900">
                    {qty}
                  </td>
                </tr>
              ))}

              {/* Summary Row */}
              <tr className="bg-gray-100 font-semibold border-t-2 border-gray-300 text-gray-900">
                <td colSpan={2} className="hidden sm:table-cell"></td>
                <td
                  colSpan={2}
                  className="px-4 sm:px-6 py-4 text-left sm:text-right sm:col-span-1"
                >
                  Total Cutting Machinery
                </td>
                <td className="px-4 sm:px-6 py-4 text-center text-blue-600 text-base sm:text-lg">
                  20
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
