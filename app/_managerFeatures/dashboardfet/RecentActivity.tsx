import { MdEdit, MdShoppingCart, MdPersonAdd } from "react-icons/md";

const activities = [
  {
    id: 1,
    user: "Sarah Jenkins",
    action: "updated stock for",
    target: "Atomic Habits",
    time: "2 minutes ago",
    icon: <MdEdit />,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    id: 2,
    user: "New Bulk Order",
    action: "received from",
    target: "Central Library",
    time: "45 minutes ago",
    icon: <MdShoppingCart />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    user: "Marcus Wright",
    action: "was added as",
    target: "Inventory Manager",
    time: "3 hours ago",
    icon: <MdPersonAdd />,
    color: "bg-[#0d4d5d] text-white",
  },
];

function RecentActivity() {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-10">Recent Activity</h2>

      <div className="relative space-y-8">
        {activities.map((item, index) => (
          <div key={item.id} className="relative flex gap-6">
            {/* The Vertical Line Connector */}
            {index !== activities.length - 1 && (
              <div className="absolute left-5 top-10 w-1 h-10 bg-slate-100" />
            )}

            {/* Icon Circle */}
            <div
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg ${item.color}`}
            >
              {item.icon}
            </div>

            {/* Activity Text */}
            <div className="flex flex-col justify-center">
              <p className="text-[15px] text-slate-600">
                <span className="text-sm text-gary-800">{item.user}</span>{" "}
                {item.action}{" "}
                <span className="text-sm text-gary-800">{item.target}</span>
              </p>
              <span className="text-xs text-gary-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
