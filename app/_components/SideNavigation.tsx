import Link from "next/link";
import { GoSignOut } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";

function SideNavigation() {
  return (
    <aside className="fixed left-0 top-0  w-65 bg-[#0F4C5C] dark:bg-slate-950 border-r border-white/10 shadow-2xl flex flex-col h-full z-50">
      <div className="text-white text-xl font-extrabold tracking-tight px-6 py-8 font-h1">
        Maruf-Books
      </div>
      <nav className="flex-1 space-y-2">
        <Link
          className="bg-white/10 text-white rounded-full mx-4 px-4 py-3 flex items-center gap-3 font-body-sm font-medium tracking-tight active:scale-95 duration-150"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="dashboard">
            <MdDashboard />
          </span>
          Dashboard
        </Link>
        <Link
          className="text-white/60 hover:text-white mx-4 px-4 py-3 flex items-center gap-3 transition-all font-body-sm font-medium tracking-tight hover:bg-white/5 active:scale-95 duration-150"
          href="#"
        >
          <span
            className="material-symbols-outlined"
            data-icon="calendar_today"
          >
            <IoCalendarOutline />
          </span>
          Booking
        </Link>
        <Link
          className="text-white/60 hover:text-white mx-4 px-4 py-3 flex items-center gap-3 transition-all font-body-sm font-medium tracking-tight hover:bg-white/5 active:scale-95 duration-150"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="inventory_2">
            <MdOutlineInventory2 />
          </span>
          Stock In
        </Link>
        <Link
          className="text-white/60 hover:text-white mx-4 px-4 py-3 flex items-center gap-3 transition-all font-body-sm font-medium tracking-tight hover:bg-white/5 active:scale-95 duration-150"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="upload_file">
            <MdFileUpload />
          </span>
          Stock Out
        </Link>
      </nav>
      <div className="mt-auto pb-8">
        <Link
          className="text-white/60 hover:text-white mx-4 px-4 py-3 flex items-center gap-3 transition-all font-body-sm font-medium tracking-tight hover:bg-white/5 active:scale-95 duration-150"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="logout">
            <GoSignOut />
          </span>
          Sign Out
        </Link>
      </div>
    </aside>
  );
}

export default SideNavigation;
