import DashboardCard from "../_features/dashboard/DashboardCard";
import TransactionsCard from "../_features/dashboard/TransactionsCard";

function page() {
  return (
    <div className="flex flex-col gap-y-10 justify-center ">
      <DashboardCard />
      <TransactionsCard />
    </div>
  );
}

export default page;
