"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";

const highlights = {
  before:
    "行前準備：先確認航班、護照、網卡啟用期限與機場集合時間。⚠️ 網卡注意：eSIM 須於購買後 30 天內完成安裝與啟用，逾期將無法使用。",
  "2026/08/21":
    "Day 1 重點：10:15 搭乘中華航空 CI602。抵達台灣後直奔兒童新樂園，晚上逛大稻埕迪化街與龍山寺！",
  "2026/08/22":
    "Day 2 重點：10:00 遊覽車準時出發。今晚挑戰新竹城隍廟夜市與台中審計新村、旱溪觀光夜市！",
  "2026/08/23":
    "Day 3 重點：09:30 搭乘遊覽車前往 Xpark 水族館，旁邊就是華泰名品城（免用車）。晚餐西門町肉多多火鍋！",
  "2026/08/24":
    "Day 4 重點：09:30 前往林口三井 OUTLET 血拼，並在饗食天堂用餐（免用車）。請於 15:30 前抵達桃園機場搭乘 CI923。",
  after: "旅途圓滿結束！感謝大家的參與，記得把這四天的精彩照片上傳到共用相簿喔！"
} as const;

function getLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}

function getHighlightByDate(dateKey: string) {
  if (dateKey < "2026/08/21") return highlights.before;
  if (dateKey > "2026/08/24") return highlights.after;

  return highlights[dateKey as keyof typeof highlights] ?? highlights.before;
}

export function TodayHighlightCard() {
  const [highlight, setHighlight] = useState<string | null>(null);

  useEffect(() => {
    setHighlight(getHighlightByDate(getLocalDateKey(new Date())));
  }, []);

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-coral/10 text-coral">
          <CalendarDays aria-hidden="true" className="h-6 w-6" />
        </div>
        <div>
          <h2 className="font-black text-ink">📅 今日重點</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600" aria-live="polite">
            {highlight ?? "正在讀取今日重點..."}
          </p>
        </div>
      </div>
    </article>
  );
}
