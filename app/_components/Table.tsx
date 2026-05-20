type TableProps<T> = {
  columns: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

function Table<T>({ columns, data, renderRow }: TableProps<T>) {
  return (
    <div className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="text-left px-6 py-4 font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-slate-700 text-sm">
          {data.map((item, i) => (
            <tr key={i} className="border-t border-gray-200 hover:bg-slate-50">
              {renderRow(item)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
