import Link from "next/link";
import { ReactNode } from "react";
import { GoSignOut } from "react-icons/go";

function SideNavigation({
  navLinks,
}: {
  navLinks: { href: string; name: string; icon: ReactNode }[];
}) {
  return (
    <aside className="h-screen sticky top-0 w-52 bg-[#0F4C5C] dark:bg-slate-950 border-r border-white/10 shadow-2xl flex flex-col">
      <div className="text-white text-xl font-extrabold px-6 py-8">
        Maruf-Books
      </div>

      <nav className="flex-1 space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white mx-4 px-4 py-3 flex items-center gap-3"
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pb-8">
        <Link href="#" className="text-white/60 mx-4 px-4 py-3 flex gap-3">
          <GoSignOut />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}

export default SideNavigation;
