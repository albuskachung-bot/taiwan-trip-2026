import Image from "next/image";
import { MapPinned, Sparkles } from "lucide-react";
import { Countdown } from "./components/Countdown";
import { TodayHighlightCard } from "./components/TodayHighlightCard";
import { WeatherCard } from "./components/WeatherCard";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <section className="relative min-h-[28rem] overflow-hidden rounded-md bg-ink shadow-soft">
        <Image
          alt="台灣旅遊首頁視覺"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          src="/taiwan-hero.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,32,51,0.78),rgba(23,32,51,0.36)_54%,rgba(23,32,51,0.16))]" />
        <div className="relative flex min-h-[28rem] flex-col justify-between p-5 text-white sm:p-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/16 px-3 py-1.5 text-xs font-bold backdrop-blur">
            <Sparkles aria-hidden="true" className="h-4 w-4 text-sun" />
            2026 台灣之旅
          </div>

          <div className="max-w-xl">
            <p className="mb-3 text-sm font-bold text-white/78">出發日 2026/08/21</p>
            <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              台灣四天三夜旅遊
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/82 sm:text-base">
              從台北、桃園到新竹台中，整理行程、交通、住宿與行前注意事項。
            </p>
          </div>

          <div className="rounded-md bg-white/12 p-3 backdrop-blur-md sm:max-w-lg">
            <Countdown />
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        <WeatherCard />
        <div className="lg:col-span-2">
          <TodayHighlightCard />
        </div>

        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:col-span-3">
          <div className="flex items-center gap-2 text-sea">
            <MapPinned aria-hidden="true" className="h-5 w-5" />
            <h2 className="font-black text-ink">旅程範圍</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            台北、新竹、台中、桃園；每日以凱撒趣淘漫旅台北作為住宿據點。
          </p>
        </article>
      </section>
    </div>
  );
}
