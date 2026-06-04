"use client";

import { useState } from "react";
import { BadgeCheck, Bed, Clock, MapPin, Plane, Users } from "lucide-react";

type TransportType = "bus" | "walk" | "none";

export type TimelineItem = {
  time?: string;
  title: string;
  detail?: string;
  location?: string;
  mapsUrl: string;
  type: "meeting" | "flight" | "departure" | "spot" | "meal" | "hotel";
  transport?: TransportType;
};

export type TripDay = {
  day: number;
  date: string;
  label: string;
  items: TimelineItem[];
};

function getIcon(type: TimelineItem["type"]) {
  if (type === "meeting") return Users;
  if (type === "flight") return Plane;
  if (type === "departure") return Clock;
  if (type === "hotel") return Bed;
  if (type === "meal") return BadgeCheck;
  return MapPin;
}

function getTransportBadge(transport: TransportType = "none") {
  if (transport === "bus") {
    return {
      label: "🚌 專屬遊覽車",
      className: "border-leaf/20 bg-leaf/10 text-leaf"
    };
  }

  if (transport === "walk") {
    return {
      label: "🚶 免用車",
      className: "border-orange-200 bg-orange-50 text-orange-700"
    };
  }

  return null;
}

export function DayTabsTimeline({ days }: { days: TripDay[] }) {
  const [activeDay, setActiveDay] = useState(days[0]?.day ?? 1);
  const day = days.find((item) => item.day === activeDay) ?? days[0];

  return (
    <section className="space-y-5">
      <div className="overflow-x-auto pb-1">
        <div className="grid min-w-[22rem] grid-cols-4 rounded-md border border-slate-200 bg-white p-1 shadow-sm">
          {days.map((item) => {
            const isActive = item.day === activeDay;

            return (
              <button
                className={`rounded px-3 py-3 text-left transition ${
                  isActive ? "bg-ink text-white shadow-sm" : "text-slate-500 hover:bg-slate-100"
                }`}
                key={item.day}
                onClick={() => setActiveDay(item.day)}
                type="button"
              >
                <span className="block text-sm font-black">Day {item.day}</span>
                <span className="mt-0.5 block text-[0.7rem] font-semibold">{item.date}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-leaf">{day.date}</p>
        <h2 className="mt-1 text-2xl font-black tracking-normal text-ink">{day.label}</h2>
      </div>

      <ol className="relative ml-3 space-y-4 border-l-2 border-dashed border-slate-200 pl-6">
        {day.items.map((item, index) => {
          const Icon = getIcon(item.type);
          const transportBadge = getTransportBadge(item.transport);

          return (
            <li className="relative" key={`${item.title}-${index}`}>
              <span className="absolute -left-[2.15rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-mist bg-white text-leaf shadow-sm">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    {item.time ? (
                      <p className="mb-1 text-xs font-black uppercase tracking-normal text-coral">
                        {item.time}
                      </p>
                    ) : null}
                    <h3 className="text-base font-black text-ink">
                      <a
                        className="transition hover:text-leaf hover:underline"
                        href={item.mapsUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.title}
                      </a>
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {transportBadge ? (
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-black shadow-sm ${transportBadge.className}`}
                      >
                        {transportBadge.label}
                      </span>
                    ) : null}
                  </div>
                </div>
                {item.detail ? (
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                ) : null}
                {item.location ? (
                  <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-slate-600">
                    <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                    <a
                      className="transition hover:text-leaf hover:underline"
                      href={item.mapsUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.location}
                    </a>
                  </p>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
