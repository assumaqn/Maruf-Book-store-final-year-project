export default function BookingHeader() {
  return (
    <div className="px-3 py-2 grid grid-cols-3 justify-between gap-10 items-center">
      <div className="flex items-center gap-5 col-span-2">
        <input
          type="search"
          placeholder="search by title ,author"
          className="border-[0.5px] border-gray-200 px-2 py-2 rounded-md w-[50%]"
        />
        <select>
          <option value="all">All Catagories</option>
        </select>
      </div>

      <button className="bg-[#0F4C5C] justify-self-end cursor-pointer text-white px-2 py-1 rounded-lg flex items-center gap-2 hover:opacity-90">
        <span className="material-symbols-outlined text-lg">+</span>
        New Entry
      </button>
    </div>
  );
}
