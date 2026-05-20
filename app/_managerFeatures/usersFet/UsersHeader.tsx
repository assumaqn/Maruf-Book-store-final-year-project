import { IoMdPersonAdd } from "react-icons/io";

function UsersHeader() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <h2 className="text-2xl text-gray-900 font-semibold">Users</h2>
        <p className="text-sm text-gray-700">
          Manage bookstore administrators, managers and staff members.
        </p>
      </div>
      <button className="bg-[#0F4C5C] h-8 px-3 cursor-pointer text-white rounded-md flex items-center gap-1.5 hover:opacity-90 text-xs">
        <IoMdPersonAdd size={14} />
        Add user
      </button>
    </div>
  );
}

export default UsersHeader;
