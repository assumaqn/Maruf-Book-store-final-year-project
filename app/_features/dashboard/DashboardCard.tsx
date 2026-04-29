import Card from "@/app/_components/Card";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineLibraryBooks } from "react-icons/md";

function DashboardCard() {
  return (
    <div className="grid grid-cols-3 items-center gap-10">
      <Card
        icon={<MdOutlineLibraryBooks size={21} />}
        tag="Archive"
        amount={15}
        description="Total Books"
      />

      <Card
        icon={<IoMdCheckmarkCircleOutline size={21} />}
        tag="Completed"
        amount={12}
        description="Books Read"
      />

      <Card
        icon={<span className="text-xs text-gray-500">ANNUAL GOAL</span>}
        tag={`40%`}
        amount={24}
        description="Your Goal"
      />
    </div>
  );
}

export default DashboardCard;
