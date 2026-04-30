import SideNavigation from "../_components/SideNavigation";
import { DashBoardHeader } from "../_features/dashboard/DashBoardHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[12rem_1fr] min-h-screen">
      <SideNavigation />

      <div className="flex flex-col ">
        <DashBoardHeader />

        <main className="flex-1  bg-gray-50 p-10">{children}</main>
      </div>
    </div>
  );
}
