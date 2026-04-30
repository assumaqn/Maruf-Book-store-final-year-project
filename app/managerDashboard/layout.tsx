import SideNavigation from "../_components/SideNavigation";
import { DashBoardHeader } from "../_features/dashboard/DashBoardHeader";

import {
  MdDashboard,
  MdOutlineInventory2,
  MdOutlineCategory,
  MdOutlineAnalytics,
  MdOutlinePeopleAlt,
  MdOutlineAssessment,
  MdOutlineHistory,
} from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md"; // For Stock Out
import { ReactNode } from "react";

export const navLinks: { href: string; name: string; icon: ReactNode }[] = [
  { href: "/dashboard", name: "Dashboard", icon: <MdDashboard size={22} /> },
  {
    href: "/dashboard/booking",
    name: "Booking",
    icon: <IoCalendarOutline size={22} />,
  },
  {
    href: "/dashboard/stockin",
    name: "Stock In",
    icon: <MdOutlineInventory2 size={22} />,
  },
  {
    href: "/dashboard/stockout",
    name: "Stock Out",
    icon: <MdFileUpload size={22} />,
  },
  {
    href: "/dashboard/categories",
    name: "Categories",
    icon: <MdOutlineCategory size={22} />,
  },
  {
    href: "/dashboard/analytics",
    name: "Analytics",
    icon: <MdOutlineAnalytics size={22} />,
  },
  {
    href: "/dashboard/users",
    name: "Users",
    icon: <MdOutlinePeopleAlt size={22} />,
  },
  {
    href: "/dashboard/reports",
    name: "Reports",
    icon: <MdOutlineAssessment size={22} />,
  },
  {
    href: "/dashboard/logs",
    name: "Activity Logs",
    icon: <MdOutlineHistory size={22} />,
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
