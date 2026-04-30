const lowStockData = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    stock: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-04g3Nk_kvvtbwCLLFxJ9foBf7D2kXk5yOIsjXgXmsoyl-u1B-vUEMfD1pAgespFt_ya86gIGFt5GXeoX3pN9HvCZ3pa00uAyfrYw-mnXhPY_JM6yLUKgWmUO6lSWHzj-PaSstXe3iVLaMyK3AsKZQSz3DXMQH1knXLPl1fyuTKiR6FWKDen1_5l3VjocMpOykm9LGj8H0phcvwg6qHF_kjCsgV0CHnpZnXW6Y9cpqcMTVRQ_oXmsv56kpv0YRCNJY3OK68muytUF",
    status: "CRITICAL",
  },
  {
    id: 2,
    title: "Thinking Fast and Slow",
    stock: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-04g3Nk_kvvtbwCLLFxJ9foBf7D2kXk5yOIsjXgXmsoyl-u1B-vUEMfD1pAgespFt_ya86gIGFt5GXeoX3pN9HvCZ3pa00uAyfrYw-mnXhPY_JM6yLUKgWmUO6lSWHzj-PaSstXe3iVLaMyK3AsKZQSz3DXMQH1knXLPl1fyuTKiR6FWKDen1_5l3VjocMpOykm9LGj8H0phcvwg6qHF_kjCsgV0CHnpZnXW6Y9cpqcMTVRQ_oXmsv56kpv0YRCNJY3OK68muytUF",
    status: "WARNING",
  },
  {
    id: 3,
    title: "Zero to One",
    stock: 8,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-04g3Nk_kvvtbwCLLFxJ9foBf7D2kXk5yOIsjXgXmsoyl-u1B-vUEMfD1pAgespFt_ya86gIGFt5GXeoX3pN9HvCZ3pa00uAyfrYw-mnXhPY_JM6yLUKgWmUO6lSWHzj-PaSstXe3iVLaMyK3AsKZQSz3DXMQH1knXLPl1fyuTKiR6FWKDen1_5l3VjocMpOykm9LGj8H0phcvwg6qHF_kjCsgV0CHnpZnXW6Y9cpqcMTVRQ_oXmsv56kpv0YRCNJY3OK68muytUF",
    status: "WARNING",
  },
];
function LowStockAlerts() {
  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className=" p-6 border-b border-slate-50">
        <h2 className="text-xl font-bold text-gray-900">Low Stock Alerts</h2>
      </div>

      {/* List items */}
      <div className="divide-y divide-slate-50">
        {lowStockData.map((book) => (
          <div
            key={book.id}
            className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              {/* Book Image Placeholder */}
              <div className="w-12 h-14 bg-slate-200 rounded-md overflow-hidden ">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                <h3 className="text-sm  text-gary-800 leading-tight">
                  {book.title}
                </h3>
                <p className="text-sm  text-gary-700">
                  Stock:{" "}
                  <span className="text-xs text-gray-500">
                    {book?.stock} units remaining
                  </span>
                </p>
              </div>
            </div>

            {/* Status Badge */}
            <span
              className={`
              px-3 py-1 rounded-full text-[10px] font-bold tracking-wider
              ${
                book.status === "CRITICAL"
                  ? "bg-red-100 text-red-500"
                  : "bg-orange-100 text-orange-400"
              }
            `}
            >
              {book.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LowStockAlerts;
