"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Home, Info, Plane } from "lucide-react";

const navItems = [
  { href: "/", label: "首頁", icon: Home },
  { href: "/itinerary", label: "行程", icon: CalendarDays },
  { href: "/logistics", label: "交通住宿", icon: Plane },
  { href: "/info", label: "須知", icon: Info }
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/92 px-3 pb-[max(env(safe-area-inset-bottom),0.55rem)] pt-2 shadow-[0_-12px_30px_rgba(23,32,51,0.08)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-14 flex-col items-center justify-center rounded-md px-1 text-[0.72rem] font-semibold transition ${
                isActive
                  ? "bg-leaf text-white shadow-sm"
                  : "text-slate-500 hover:bg-slate-100 hover:text-ink"
              }`}
              href={item.href}
              key={item.href}
            >
              <Icon aria-hidden="true" className="mb-1 h-5 w-5" strokeWidth={2.2} />
              <span className="leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
