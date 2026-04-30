import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

function StockOutForm() {
  return (
    <div className="flex justify-center items-center  p-5">
      {/* Main Card Container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border-l-2 border-[#0d4d5d]">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
          <FaShoppingCart size={21} />
          <h2 className="text-xl font-semibold text-gray-700 ">Remove Stock</h2>
        </div>

        <form className="space-y-6">
          {/* Search Book Field */}
          <div className="space-y-2">
            <label className="block text-xs  text-gray-700 uppercase tracking-wider">
              Search Book
            </label>
            <div className="relative">
              <FaSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={12}
              />
              <input
                type="text"
                placeholder="Title, ISBN, or Author..."
                className="w-full bg-slate-100 border-none rounded-lg  py-2 pl-10 pr-4 text-gray-700 placeholder:text-gray-400  placeholder:text-sm "
              />
            </div>
          </div>

          {/* Quantity Field */}
          <div className="space-y-2">
            <label className="block text-xs text-gray-700 uppercase tracking-wider">
              Quantity
            </label>
            <input
              type="number"
              defaultValue="1"
              className="w-full bg-slate-100 border-none rounded-lg py-3 px-4 text-slate-700 placeholder:text-gray-400  placeholder:text-sm"
            />
          </div>

          {/* Removal Reason Field */}
          <div className="space-y-2">
            <label className="block text-xs  text-gray-700 uppercase tracking-wider">
              Removal Reason / Notes
            </label>
            <textarea
              placeholder="Reason for removal (e.g., Sold, Damaged, Return to Publisher)..."
              className="w-full bg-slate-100 border-none rounded-lg py-3 px-4 text-slate-700 placeholder:text-gray-400  placeholder:text-sm resize-none"
            ></textarea>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full bg-slate-500 text-white cursor-pointer py-2 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors mt-4 shadow-md"
          >
            <FaDownload size={16} className="rotate-180" />
            {/* Mimics the 'out' icon in image_e19c1e.png */}
            <span className="text-sm">Stock Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default StockOutForm;
