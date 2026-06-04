import {
  BedDouble,
  Bus,
  CircleCheck,
  Clock,
  Coffee,
  Droplets,
  Hotel,
  PlaneTakeoff,
  ShowerHead,
  Utensils,
  Wifi
} from "lucide-react";

const flights = [
  {
    code: "CI602",
    route: "香港國際機場一號客運大樓 -> 臺灣桃園國際機場",
    date: "2026/08/21",
    time: "10:15 - 12:10"
  },
  {
    code: "CI923",
    route: "臺灣桃園國際機場 -> 香港國際機場",
    date: "2026/08/24",
    time: "18:10 - 20:10"
  }
];

const hotelBenefits = [
  { label: "客房內咖啡包 / 茶包", icon: Coffee },
  { label: "客房內衛浴均乾濕分離、免治馬桶", icon: ShowerHead },
  { label: "客房樓層均設置有免費飲水機", icon: Droplets },
  { label: "免費使用客房內 WIFI 寬頻網路", icon: Wifi }
];

export default function LogisticsPage() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-sm font-black text-leaf">Logistics</p>
        <h1 className="mt-1 text-3xl font-black tracking-normal text-ink">交通住宿</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          航班、專屬遊覽車接駁與住宿資訊集中整理。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {flights.map((flight) => (
          <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm" key={flight.code}>
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-sea/10 text-sea">
                <PlaneTakeoff aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-slate-500">
                  中華航空
                </p>
                <h2 className="mt-1 text-2xl font-black text-ink">{flight.code}</h2>
              </div>
            </div>
            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="font-bold text-slate-500">航線</dt>
                <dd className="mt-1 font-semibold leading-6 text-ink">{flight.route}</dd>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock aria-hidden="true" className="h-4 w-4 text-coral" />
                <span className="font-bold">
                  {flight.date}・{flight.time}
                </span>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <section className="mt-4 rounded-md border border-leaf/20 bg-ink p-5 text-white shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/12 text-sun">
            <Bus aria-hidden="true" className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-normal text-white/60">
              Transportation
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">
              全程安排專屬遊覽車接駁
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/76">
              Day 2 至 Day 4 由飯店出發的跨區行程皆以專屬遊覽車移動，集合與上車地點以飯店為主。
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-leaf/10 text-leaf">
            <Hotel aria-hidden="true" className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-normal text-slate-500">Hotel</p>
            <h2 className="mt-1 text-2xl font-black text-ink">凱撒趣淘漫旅台北</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              四天三夜住宿據點，每日行程多由此出發與返回。
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 rounded-md bg-mist p-3 text-sm font-bold text-slate-700">
            <BedDouble aria-hidden="true" className="h-4 w-4 text-leaf" />
            住宿日期：2026/08/21 - 2026/08/24
          </div>
          <div className="flex items-center gap-2 rounded-md bg-sun/18 p-3 text-sm font-black text-ink">
            <Utensils aria-hidden="true" className="h-4 w-4 text-coral" />
            每日皆包含飯店早餐
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-2 text-leaf">
            <CircleCheck aria-hidden="true" className="h-5 w-5" />
            <h3 className="font-black text-ink">住宿房客禮遇項目</h3>
          </div>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {hotelBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <li
                  className="flex items-start gap-3 rounded-md border border-slate-200 bg-mist/60 p-3 text-sm font-semibold leading-6 text-slate-700"
                  key={benefit.label}
                >
                  <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                  <span>{benefit.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
