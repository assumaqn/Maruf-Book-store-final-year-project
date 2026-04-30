import { Stats } from "fs";
import { FaAccusoft, FaBook, FaDartLang } from "react-icons/fa6";

const stat = [
  {
    icon: <FaBook size={21} />,
    name: "Total Titles",
    numeber: "4,281",
  },
  {
    icon: <FaAccusoft size={21} />,
    name: "Active Categories",
    numeber: "12",
  },
  {
    icon: <FaDartLang size={21} />,
    name: "Low Stock Alert",
    numeber: "12 Items",
  },
];

function BookingStats() {
  return (
    <div className="flex justify-between items-center  mt-15">
      {stat.map((item) => (
        <div
          className="flex items-center gap-5  px-5 py-2 bg-white h-25 w-75 shadow-lg rounded-2xl"
          key={item.name}
        >
          <div className="p-3  rounded-full bg-blue-100">{item.icon}</div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-gray-500">{item.name}</p>
            <span className="text-lg font-semibold text-gray-800">
              {item.numeber}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingStats;
