function StockOutHeader() {
  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col">
        <p className="text-sm capitalize text-gray-700 ">
          Inventory Management
        </p>
        <h2 className="text-2xl font-semibold  capitalize text-gray-900 ">
          Stock Out
        </h2>
      </div>
      <div>
        <span className="text-xs text-gray-800">
          Last updated: Oct 24, 2023
        </span>
      </div>
    </div>
  );
}

export default StockOutHeader;
