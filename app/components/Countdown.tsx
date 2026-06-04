"use client";

import { useEffect, useMemo, useState } from "react";

const departureDate = new Date("2026-08-21T00:00:00+08:00").getTime();

type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemaining() {
  const diff = Math.max(departureDate - Date.now(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

export function Countdown() {
  const [remaining, setRemaining] = useState<RemainingTime | null>(null);
  const units = useMemo(
    () => [
      { label: "天", value: remaining?.days },
      { label: "時", value: remaining?.hours },
      { label: "分", value: remaining?.minutes },
      { label: "秒", value: remaining?.seconds }
    ],
    [remaining]
  );

  useEffect(() => {
    setRemaining(getRemaining());

    const timer = window.setInterval(() => {
      setRemaining(getRemaining());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {units.map((unit) => (
        <div
          className="rounded-md border border-white/70 bg-white/85 px-2 py-3 text-center shadow-sm backdrop-blur"
          key={unit.label}
        >
          <div className="text-2xl font-black tabular-nums text-ink sm:text-3xl">
            {typeof unit.value === "number" ? unit.value.toString().padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-xs font-bold text-slate-500">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
