import { AlertTriangle, CreditCard, FileCheck2, Pill } from "lucide-react";
import { Checklist } from "../components/Checklist";

export default function InfoPage() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-sm font-black text-leaf">Info</p>
        <h1 className="mt-1 text-3xl font-black tracking-normal text-ink">出發前須知</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          把證件、現金、藥品與網卡注意事項集中在這裡，出發前逐項確認。
        </p>
      </header>

      <section className="rounded-md border border-red-200 bg-red-50 p-5 text-red-900 shadow-sm">
        <div className="flex items-start gap-3">
          <AlertTriangle aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
          <div>
            <h2 className="text-lg font-black">網卡注意</h2>
            <p className="mt-2 text-sm font-bold leading-6">
              ⚠️ 網卡注意：eSIM 須於購買後 30 天內完成安裝與啟用，逾期將無法使用。
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-leaf">
          <FileCheck2 aria-hidden="true" className="h-5 w-5" />
          <h2 className="text-xl font-black text-ink">Check-list</h2>
        </div>
        <Checklist />
      </section>

      <section className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sea">
            <CreditCard aria-hidden="true" className="h-5 w-5" />
            <h2 className="font-black text-ink">付款與現金</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            建議準備少量台幣現金給夜市、交通與臨時支出，信用卡作為主要備用付款方式。
          </p>
        </article>

        <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-coral">
            <Pill aria-hidden="true" className="h-5 w-5" />
            <h2 className="font-black text-ink">個人物品</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            個人藥品、暈車藥、防曬、雨具與行動電源請放在隨身包，長途移動時比較方便。
          </p>
        </article>
      </section>
    </div>
  );
}
