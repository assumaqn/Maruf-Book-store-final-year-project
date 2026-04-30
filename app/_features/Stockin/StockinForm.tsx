import { FaPlus, FaSearch } from "react-icons/fa";

function StockinForm() {
  return (
    <div className=" min-h-screen flex items-center justify-center p-6 col-span-1">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-200 p-6 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-800">
            Add New Stock
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Update your book inventory levels with precision.
          </p>
        </div>

        {/* Select Book */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-gray-500 tracking-wide">
            SELECT BOOK
          </label>

          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <FaSearch className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by title or ISBN..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Selected Tags */}
          <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-md">
              The Great Gatsby
            </span>
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-md">
              1984
            </span>
          </div>
        </div>

        {/* Quantity + Unit */}
        <div className="flex">
          <div className="flex-1">
            <label className="text-xs font-semibold text-gray-500">
              QUANTITY
            </label>
            <input
              type="number"
              defaultValue={1}
              className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            TRANSACTION NOTES
          </label>
          <textarea
            rows={4}
            placeholder="Vendor details, shipping condition, etc."
            className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none resize-none"
          />
        </div>

        {/* Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white py-3 rounded-lg transition">
          <FaPlus className="w-5 h-5" />
          Add Stock
        </button>
      </div>
    </div>
  );
}

export default StockinForm;
