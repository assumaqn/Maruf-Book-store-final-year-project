import LowStockAlerts from "../_managerFeatures/dashboardfet/LowStockAlerts";
import ManagerCard from "../_managerFeatures/dashboardfet/ManagerCard";
import RecentActivity from "../_managerFeatures/dashboardfet/RecentActivity";
import RevenuChart from "../_managerFeatures/dashboardfet/RevenuChart";
import ShortCutButtons from "../_managerFeatures/dashboardfet/ShortCutButtons";
import StockChart from "../_managerFeatures/dashboardfet/StockChart";

function page() {
  return (
    <div className="flex flex-col gap-y-10 justify-center ">
      <ShortCutButtons />
      <div className="flex justify-between gap-12">
        <ManagerCard />
        <ManagerCard />
        <ManagerCard />
      </div>
      <div className="flex gap-5 justify-between">
        <RevenuChart />
        <StockChart />
      </div>
      <div className="flex gap-5 justify-between">
        <LowStockAlerts />
        <RecentActivity />
      </div>
    </div>
  );
}

export default page;
