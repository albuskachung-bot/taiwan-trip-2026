import {
  AlertTriangle,
  Building2,
  FileCheck2,
  Hotel,
  HandCoins,
  MapPin,
  MessageCircle,
  Phone,
  ReceiptText,
  ShoppingBag,
  UserRound
} from "lucide-react";
import { Checklist } from "../components/Checklist";

const hotelAddress = "新北市板橋區中山路一段139號";
const hotelMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  hotelAddress
)}`;

export default function InfoPage() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-sm font-black text-leaf">Info</p>
        <h1 className="mt-1 text-3xl font-black tracking-normal text-ink">行前注意事項</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          出發前逐項確認行李、網卡、聯絡電話與住宿資訊，手機上可直接撥號或開啟地圖。
        </p>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-leaf">
          <FileCheck2 aria-hidden="true" className="h-5 w-5" />
          <h2 className="text-xl font-black text-ink">行李確認清單</h2>
        </div>
        <Checklist />
      </section>

      <section className="mt-5 rounded-lg border border-red-200 bg-red-50 p-5 text-red-900 shadow-sm">
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

      <section className="mt-7">
        <div className="mb-4">
          <p className="text-sm font-black text-leaf">Emergency & Stay</p>
          <h2 className="mt-1 text-2xl font-black tracking-normal text-ink">
            🏨 實用資訊與緊急聯絡
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-leaf/10 text-leaf">
                <UserRound aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-slate-500">
                  Trip Contact
                </p>
                <h3 className="mt-1 text-xl font-black text-ink">主辦人 / 行程負責人</h3>
                <p className="mt-1 text-sm font-bold text-slate-600">嘉聰</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <a
                className="flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 bg-mist/70 px-4 py-3 text-sm font-black text-ink transition hover:border-leaf/40 hover:text-leaf"
                href="tel:+886983161419"
              >
                <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-leaf" />
                <span>
                  聯絡人電話（台灣）
                  <span className="mt-0.5 block font-semibold text-slate-600">
                    +886 983-161-419
                  </span>
                </span>
              </a>

              <a
                className="flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 bg-mist/70 px-4 py-3 text-sm font-black text-ink transition hover:border-leaf/40 hover:text-leaf"
                href="https://wa.me/85290229414"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-leaf" />
                <span>
                  WhatsApp 聯絡（香港）
                  <span className="mt-0.5 block font-semibold text-slate-600">
                    +852 9022-9414
                  </span>
                </span>
              </a>
            </div>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sea/10 text-sea">
                <Hotel aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-slate-500">
                  Hotel
                </p>
                <h3 className="mt-1 text-xl font-black leading-7 text-ink">
                  凱撒趣淘漫旅台北
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Hotel Cham Cham Taipei
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <a
                className="flex min-h-12 items-start gap-3 rounded-lg border border-slate-200 bg-mist/70 px-4 py-3 text-sm font-bold leading-6 text-ink transition hover:border-sea/40 hover:text-sea"
                href={hotelMapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-sea" />
                <span>
                  飯店地址
                  <span className="mt-0.5 block font-semibold text-slate-600">
                    {hotelAddress}
                  </span>
                </span>
              </a>

              <a
                className="flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 bg-mist/70 px-4 py-3 text-sm font-black text-ink transition hover:border-sea/40 hover:text-sea"
                href="tel:0289516686"
              >
                <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-sea" />
                <span>
                  飯店電話
                  <span className="mt-0.5 block font-semibold text-slate-600">
                    02-8951-6686
                  </span>
                </span>
              </a>
            </div>
          </article>
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm">
          <Building2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
          <p>建議將聯絡人與飯店電話先存入手機，抵達台灣後可更快撥打或分享位置。</p>
        </div>
      </section>

      <section className="mt-7">
        <div className="mb-4">
          <p className="text-sm font-black text-leaf">Shopping & Tax Refund</p>
          <h2 className="mt-1 text-2xl font-black tracking-normal text-ink">
            🛍️ 購物與退稅指南
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sun/18 text-coral">
                <ReceiptText aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-slate-500">
                  Receipt
                </p>
                <h3 className="mt-1 text-xl font-black leading-7 text-ink">
                  🧾 什麼是統一發票？
                </h3>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <p>
                台灣沒有香港那種純收據，取而代之的是
                <strong className="font-black text-ink">「統一發票」</strong>。這不僅是購買證明，還能對獎！分為
                <strong className="font-black text-ink">「紙本長條狀」</strong>
                或
                <strong className="font-black text-ink">「電子發票證明聯（像熱感應紙）」</strong>。
              </p>

              <div className="rounded-lg border border-coral/20 bg-coral/10 p-3 text-coral">
                <p className="font-black">重要提醒</p>
                <p className="mt-1 leading-6">
                  請務必妥善保管發票，這是辦理退稅的唯一憑證。若店家問要不要印發票，請一律回答
                  <strong className="font-black text-red-700">「要印」</strong>。
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-leaf/10 text-leaf">
                <HandCoins aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-slate-500">
                  Tax Refund
                </p>
                <h3 className="mt-1 text-xl font-black leading-7 text-ink">
                  💰 外籍旅客退稅教學
                </h3>
              </div>
            </div>

            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
              <div className="flex gap-3">
                <ShoppingBag aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                <p>
                  <strong className="font-black text-ink">條件：</strong>
                  持香港護照或入出境許可證，在貼有「Tax Free」標誌的特約商店，
                  <strong className="font-black text-leaf">同一天內累計消費滿 NT$2,000</strong>
                  即可退稅。
                </p>
              </div>

              <div className="rounded-lg bg-mist/70 p-3">
                <p>
                  <strong className="font-black text-ink">流程：</strong>
                  結帳時請主動出示入台證/護照，請店員開立
                  <strong className="font-black text-ink">「退稅明細申請表」</strong>。
                </p>
              </div>

              <div>
                <p className="font-black text-ink">怎麼退</p>
                <ol className="mt-2 list-decimal space-y-2 pl-5">
                  <li>
                    <strong className="font-black text-ink">現場小額退稅：</strong>
                    若當日消費在
                    <strong className="font-black text-leaf"> NT$48,000 以下</strong>
                    ，部分百貨公司（如林口三井 OUTLET）可直接在服務台退現金。
                  </li>
                  <li>
                    <strong className="font-black text-ink">機場退稅：</strong>
                    若超過金額，請提早到桃園機場，在
                    <strong className="font-black text-coral">「行李託運前」</strong>
                    ，前往機場退稅櫃台或使用自助退稅機（機台會指引）辦理。
                  </li>
                </ol>
              </div>

              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-orange-800">
                <p className="font-black">重要提醒</p>
                <p className="mt-1 leading-6">
                  退稅商品在離境前請勿拆封使用（尤其是藥妝），海關可能會抽查。
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
