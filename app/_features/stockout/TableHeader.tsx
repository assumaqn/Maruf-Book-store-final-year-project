import { IoFilter } from "react-icons/io5";
function TableHeader() {
  return (
    <div className="px-3 py-3 border-b border-slate-100 flex justify-between items-center bg-white rounded-t-md mt-4">
      <h3 className="font-h3 text-md text-gray-700">Stock Out History</h3>

      <div className="flex gap-2">
        <button className="bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg flex items-center gap-2 hover:bg-slate-100">
          <span className="material-symbols-outlined text-lg">
            <IoFilter size={16} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default TableHeader;
