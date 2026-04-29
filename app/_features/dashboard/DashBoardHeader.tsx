import Image from "next/image";

export function DashBoardHeader() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 shadow-sm flex justify-between items-center px-10">
      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-4">
        <Image
          height={40}
          width={40}
          className="w-8 h-8 rounded-full object-cover border"
          alt="profile"
          src="/profile.png"
        />
        <span className="text-sm font-medium">Kumneger G.</span>
      </div>
    </header>
  );
}
