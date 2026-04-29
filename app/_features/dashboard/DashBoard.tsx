import SideNavigation from "@/app/_components/SideNavigation";
import DashBoardBody from "./DashBoardBody";

function DashBoard() {
  return (
    <div className="flex justify-between items-center gap-4">
      <SideNavigation />
      <DashBoardBody />
    </div>
  );
}

export default DashBoard;
