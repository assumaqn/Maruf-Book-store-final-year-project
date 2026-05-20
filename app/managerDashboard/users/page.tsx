import UsersHeader from "@/app/_managerFeatures/usersFet/UsersHeader";
import UserTable from "@/app/_managerFeatures/usersFet/UsersTable";

function page() {
  return (
    <div className="flex flex-col gap-12">
      <UsersHeader />
      <UserTable />
    </div>
  );
}

export default page;
