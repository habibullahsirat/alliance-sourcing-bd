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
    <section className="flex flex-col items-center gap-6 sm:gap-10 lg:gap-16 px-3 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-16 md:py-20 lg:py-28 w-full bg-white">
      {/* Main Header */}
      <div className="text-center max-w-3xl">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-tight">
          Our Machinery Inventory
        </h1>
      </div>

      <div className="w-full max-w-7xl">
        {/* Sub Header */}
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium text-center text-gray-800 mb-4 sm:mb-8 lg:mb-10">
          Cutting Machinery
        </h2>

        {/* Clean Responsive Table Container */}
        <div className="w-full rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
          <table className="w-full border-collapse text-left text-xs sm:text-base">
            <thead className="bg-gray-100 text-gray-900">
              <tr>
                <th className="px-2 sm:px-6 py-3 sm:py-4 font-semibold w-12 sm:w-24 text-center sm:text-left">
                  SL
                </th>
                <th className="px-2 sm:px-6 py-3 sm:py-4 font-semibold">
                  Machine Name
                </th>
                <th className="px-2 sm:px-6 py-3 sm:py-4 font-semibold">
                  Brand
                </th>
                <th className="px-2 sm:px-6 py-3 sm:py-4 font-semibold text-center w-16 sm:w-32">
                  Qty
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-800 divide-y divide-gray-200">
              {cuttingMachineryData.map(([sl, machine, brand, qty], index) => (
                <tr
                  key={sl}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                >
                  <td className="px-2 sm:px-6 py-3 sm:py-4 font-medium text-gray-500 text-center sm:text-left">
                    {sl}
                  </td>
                  <td className="px-2 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 leading-tight">
                    {machine}
                  </td>
                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-gray-600">
                    {brand}
                  </td>
                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold text-gray-900">
                    {qty}
                  </td>
                </tr>
              ))}

              {/* Fixed 4-Column Total Summary Row */}
              <tr className="bg-gray-100 font-semibold border-t-2 border-gray-300 text-gray-900">
                <td
                  colSpan={3}
                  className="px-3 sm:px-6 py-3.5 sm:py-4 text-right"
                >
                  Total Cutting Machinery
                </td>
                <td className="px-2 sm:px-6 py-3.5 sm:py-4 text-center text-blue-600 font-bold text-sm sm:text-lg">
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
