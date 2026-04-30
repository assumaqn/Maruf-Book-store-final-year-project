export default function StockinHeader() {
  return (
    <div className="px-3 py-2 grid grid-cols-3 justify-between gap-10 items-center">
      <div className="flex flex-col items-start gap-2 col-span-2">
        <h2 className="text-lg text-gray-900 font-semibold">
          Stock In History
        </h2>
        <p className="text-sm text-gray-500">
          Real-time overview of incoming inventory assets.
        </p>
      </div>

      <button className="border-[0.5px] text-gary-800  border-gray-400 justify-self-end cursor-pointer  px-2 py-1 rounded-lg flex items-center gap-2 hover:opacity-90">
        Sort
      </button>
    </div>
  );
}
