import { MdOutlineBookmark } from "react-icons/md";

function ManagerCard({
  icon = <MdOutlineBookmark />,
  tag = "Library",
  label = "Total Books",
  value = "12,482",
  unit = "Titles",
}) {
  return (
    <div className="w-full bg-white rounded-xl p-3 shadow-sm  flex flex-col gap-2 ">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div className="text-blue-500 text-md bg-blue-50 p-1 rounded-lg">
          {icon}
        </div>

        <span className="bg-blue-50 text-blue-500 text-[10px] font-semibold uppercase  px-2 py-1 rounded-md">
          {tag}
        </span>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-1">
        <span className="text-gray-800 text-sm ">{label}</span>

        <div className="flex items-baseline gap-2">
          <span className="text-gray-800 text-md font-bold">{value}</span>

          <span className="text-slate-400 text-xs font-semibold uppercase">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ManagerCard;
