"use client";

import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

const checklistItems = ["護照", "台幣", "個人藥品", "行動電源", "雨具", "輕便外套"];

export function Checklist() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  return (
    <div className="space-y-3">
      {checklistItems.map((item) => {
        const isChecked = checkedItems.includes(item);
        const Icon = isChecked ? CheckCircle2 : Circle;

        return (
          <button
            className={`flex w-full items-center gap-3 rounded-md border p-4 text-left transition ${
              isChecked
                ? "border-leaf bg-leaf/8 text-ink"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
            }`}
            key={item}
            onClick={() =>
              setCheckedItems((current) =>
                isChecked ? current.filter((value) => value !== item) : [...current, item]
              )
            }
            type="button"
          >
            <Icon
              aria-hidden="true"
              className={`h-5 w-5 shrink-0 ${isChecked ? "text-leaf" : "text-slate-400"}`}
            />
            <span className={`font-bold ${isChecked ? "line-through decoration-leaf/70" : ""}`}>
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
}
