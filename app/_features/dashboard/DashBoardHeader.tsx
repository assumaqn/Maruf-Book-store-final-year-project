import Image from "next/image";

export function DashBoardHeader() {
  return (
    <div className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-white  backdrop-blur-md border-b border-slate-200  shadow-sm flex justify-between items-center px-10 z-40">
      <div className="flex items-center gap-4">
        <h1 className="font-h3 text-h3 text-gray-800 ">Dashboard</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative flex items-center gap-3 cursor-pointer active:opacity-70">
          <Image
            height={400}
            width={400}
            className="w-8 h-8 rounded-full object-cover border border-slate-200"
            alt="professional portrait of a bookstore manager in a clean modern office setting with soft natural lighting"
            src="/profile.png"
          />
          <span className="font-body-sm font-semibold text-on-surface">
            Kumneger G.
          </span>
        </div>
      </div>
    </div>
  );
}
