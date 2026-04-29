import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
type TransactionItem = {
  name: string;
  type: "Buy" | "Sell";
  date: string;
  quantity: string;
  status: "Completed" | "Pending";
  image: string;
};
export default function TransactionRow({ item }: TransactionItem) {
  const isSell = item.type === "Sell";
  const isCompleted = item.status === "Completed";

  return (
    <tr className="hover:bg-slate-50/80 transition-colors">
      <td className="px-lg py-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-12 bg-slate-100 rounded overflow-hidden">
            <img
              alt="book name"
              src={item.image}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold">{item.name}</span>
        </div>
      </td>

      <td className="px-lg py-md">
        <span
          className={`text-xs px-2.5 py-0.5 rounded-full border ${
            isSell
              ? "bg-green-50 text-green-700 border-green-100"
              : "bg-blue-50 text-blue-700 border-blue-100"
          }`}
        >
          {item.type}
        </span>
      </td>

      <td className="px-lg py-md text-slate-500">{item.date}</td>
      <td className="px-lg py-md">{item.quantity}</td>

      <td className="px-lg py-md">
        <span
          className={`flex items-center gap-1.5 text-xs font-semibold ${
            isCompleted ? "text-green-700" : "text-amber-600"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isCompleted ? "bg-green-500" : "bg-amber-400"
            }`}
          />
          {item.status}
        </span>
      </td>

      <td className="px-lg py-md text-right">
        <button className="p-1 rounded-full hover:bg-white">
          <span className="material-symbols-outlined">
            <HiDotsVertical />
          </span>
        </button>
      </td>
    </tr>
  );
}
