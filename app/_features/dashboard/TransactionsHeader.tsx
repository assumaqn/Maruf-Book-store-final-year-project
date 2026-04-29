import { IoFilter } from "react-icons/io5";
export default function TransactionsHeader() {
  return (
    <div className="px-3 py-2 border-b border-slate-100 flex justify-between items-center bg-white">
      <h3 className="font-h3 text-h3 text-on-surface">Recent Transactions</h3>

      <div className="flex gap-2">
        <button className="bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg flex items-center gap-2 hover:bg-slate-100">
          <span className="material-symbols-outlined text-lg">
            <IoFilter />
          </span>
          Filter
        </button>

        <button className="bg-[#0F4C5C] text-white px-2 py-1 rounded-lg flex items-center gap-2 hover:opacity-90">
          <span className="material-symbols-outlined text-lg">+</span>
          New Entry
        </button>
      </div>
    </div>
  );
}
