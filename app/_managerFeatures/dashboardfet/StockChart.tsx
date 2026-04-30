function StockChart() {
  const data = [
    { name: "Fiction", value: 40, color: "#0f4c5c" },
    { name: "Technology", value: 25, color: "#118ab2" },
    { name: "Business", value: 20, color: "#56cfe1" },
    { name: "Others", value: 15, color: "#cbd5e1" },
  ];

  return (
    <div className="w-full bg-slate-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left Side */}
      <div className="flex flex-col gap-4">
        <h3 className="text-slate-700 font-semibold text-sm">
          Stock by Categories
        </h3>

        {/* Donut Chart */}
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
            {data.map((item, index) => {
              const offset = data
                .slice(0, index)
                .reduce((acc, cur) => acc + cur.value, 0);

              return (
                <circle
                  key={item.name}
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth="4"
                  strokeDasharray={`${item.value} ${100 - item.value}`}
                  strokeDashoffset={-offset}
                />
              );
            })}
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-slate-800 text-lg font-bold">182k</span>
            <span className="text-slate-400 text-xs font-semibold uppercase">
              Units
            </span>
          </div>
        </div>
      </div>

      {/* Right Legend */}
      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-slate-600 text-sm">
              {item.name} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockChart;
