import SideNavigation from "../_components/SideNavigation";
import { DashBoardHeader } from "../_features/dashboard/DashBoardHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] min-h-screen">
      <SideNavigation />

      <div className="flex flex-col w-full">
        <DashBoardHeader />

        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
