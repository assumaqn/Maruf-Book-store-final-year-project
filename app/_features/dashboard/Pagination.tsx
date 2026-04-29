export default function Pagination() {
  return (
    <div className="px-lg py-md border-t border-slate-100 bg-white flex justify-between items-center">
      <span className="text-slate-500 text-sm">
        Showing 4 of 120 transactions
      </span>

      <div className="flex gap-2">
        <button
          disabled
          className="p-2 border rounded-lg hover:bg-slate-50 disabled:opacity-50"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <button className="p-2 border rounded-lg hover:bg-slate-50">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
