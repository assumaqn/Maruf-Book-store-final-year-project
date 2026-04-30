function RevenuChart() {
  return (
    <div className="w-full bg-slate-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      {/* Left Content */}
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-slate-700 font-semibold text-sm">
            Monthly Revenue
          </h3>
          <p className="text-slate-400 text-sm">
            Overall sales performance for the current period.
          </p>
        </div>

        <div className="mt-4">
          <p className="text-blue-600 text-lg font-semibold">$42,580.00</p>
          <p className="text-green-600 text-sm font-medium mt-1">
            ↑ +12.5% from last month
          </p>
        </div>
      </div>

      {/* Right Chart */}
      <div className="w-full md:w-[40%] h-32 bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center">
        {/* Placeholder chart (you can replace with recharts or chart.js) */}
        <svg viewBox="0 0 200 80" className="w-full h-full" fill="none">
          <path
            d="M0,50 C40,40 60,30 100,35 C140,40 150,20 200,10"
            stroke="#2563eb"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

export default RevenuChart;
