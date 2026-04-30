import { IoMdAdd } from "react-icons/io";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { TbReport } from "react-icons/tb";

function ShortCutButtons() {
  return (
    <div className="flex gap-8 items-center">
      <button className="bg-[#0F4C5C] justify-self-end cursor-pointer text-white px-2 py-1 rounded-lg flex items-center gap-2 hover:opacity-90">
        <span className="material-symbols-outlined text-lg">
          <IoMdAdd />
        </span>
        Add Book
      </button>
      <button className="bg-[#0F4C5C] justify-self-end cursor-pointer text-white px-2 py-1 rounded-lg flex items-center gap-2 hover:opacity-90">
        <span className="material-symbols-outlined text-lg">
          <MdOutlineLibraryAdd />
        </span>
        Add Stock
      </button>
      <button className="bg-[#0F4C5C] justify-self-end cursor-pointer text-white px-2 py-1 rounded-lg flex items-center gap-2 hover:opacity-90">
        <span className="material-symbols-outlined text-lg">
          <TbReport />
        </span>
        Report
      </button>
    </div>
  );
}

export default ShortCutButtons;
