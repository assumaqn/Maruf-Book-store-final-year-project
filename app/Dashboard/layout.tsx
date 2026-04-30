import { IoCalendarOutline } from "react-icons/io5";
import { MdDashboard, MdFileUpload, MdOutlineInventory2 } from "react-icons/md";
import SideNavigation from "../_components/SideNavigation";
import { DashBoardHeader } from "../_features/dashboard/DashBoardHeader";
import { ReactNode } from "react";

const navLinks: { href: string; name: string; icon: ReactNode }[] = [
  {
    href: "/dashboard",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    href: "/dashboard/booking",
    name: "Booking",
    icon: <IoCalendarOutline />,
  },

  {
    href: "/dashboard/stockin",
    name: "Stock In",
    icon: <MdOutlineInventory2 />,
  },
  {
    href: "/dashboard/stockout",
    name: " Sign Out",
    icon: <MdFileUpload />,
  },
];
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[12rem_1fr] min-h-screen">
      <SideNavigation navLinks={navLinks} />

      <div className="flex flex-col ">
        <DashBoardHeader />

        <main className="flex-1  bg-gray-50 p-10">{children}</main>
      </div>
    </div>
  );
}
