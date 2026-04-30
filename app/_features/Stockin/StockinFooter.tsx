import { FaAccusoft, FaBook, FaDartLang } from "react-icons/fa6";

const stat = [
  {
    icon: <FaBook size={21} />,
    name: "Total Catalog",
    numeber: "12,482",
  },
  {
    icon: <FaAccusoft size={21} />,
    name: "Monthly Restocks",
    numeber: "842",
  },
  {
    icon: <FaDartLang size={21} />,
    name: "Pending Orders",
    numeber: "14",
  },
];

function StockinFooter() {
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

export default StockinFooter;
