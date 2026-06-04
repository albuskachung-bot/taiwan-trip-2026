import { DayTabsTimeline, type TripDay } from "../components/DayTabsTimeline";

const itineraryDays: TripDay[] = [
  {
    day: 1,
    date: "2026/08/21",
    label: "抵達台灣與台北市區景點",
    items: [
      {
        time: "10:15 - 12:10",
        title: "香港國際機場一號客運大樓 -> 臺灣桃園國際機場",
        detail: "航班：中華航空 CI602",
        type: "flight"
      },
      { title: "臺北市立兒童新樂園", type: "spot" },
      { title: "艋舺龍山寺", type: "spot" },
      { title: "迪化街", type: "spot" },
      { title: "養心茶樓 蔬食飲茶 信義店", type: "meal" },
      { title: "凱撒趣淘漫旅台北", detail: "住宿", type: "hotel" }
    ]
  },
  {
    day: 2,
    date: "2026/08/22",
    label: "新竹、台中夜市與城市散策",
    items: [
      {
        time: "10:00",
        title: "凱撒趣淘漫旅台北出發",
        type: "departure",
        coach: true
      },
      { title: "新竹市城隍廟夜市", type: "spot" },
      { title: "梧棲漁港", type: "spot" },
      { title: "審計新村", type: "spot" },
      { title: "旱溪觀光夜市", type: "spot" },
      { title: "凱撒趣淘漫旅台北", detail: "住宿", type: "hotel" }
    ]
  },
  {
    day: 3,
    date: "2026/08/23",
    label: "桃園水族館與西門火鍋",
    items: [
      {
        time: "09:30",
        title: "凱撒趣淘漫旅台北出發",
        type: "departure",
        coach: true
      },
      { title: "Xpark 水族館", type: "spot" },
      {
        title: "華泰名品城",
        detail: "在 Xpark 旁邊",
        type: "spot",
        noCar: true
      },
      { title: "肉多多火鍋 - 台北西門店", type: "meal" },
      { title: "凱撒趣淘漫旅台北", detail: "住宿", type: "hotel" }
    ]
  },
  {
    day: 4,
    date: "2026/08/24",
    label: "林口購物與回程航班",
    items: [
      {
        time: "09:30",
        title: "凱撒趣淘漫旅台北出發",
        type: "departure",
        coach: true
      },
      { title: "林口三井 OUTLET", type: "spot" },
      {
        title: "饗食天堂 林口三井店",
        detail: "在林口三井",
        type: "meal",
        noCar: true
      },
      {
        time: "15:30 前",
        title: "抵達臺灣桃園國際機場",
        type: "departure"
      },
      {
        time: "18:10 - 20:10",
        title: "臺灣桃園國際機場 -> 香港國際機場",
        detail: "航班：中華航空 CI923",
        type: "flight"
      }
    ]
  }
];

export default function ItineraryPage() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-sm font-black text-leaf">Itinerary</p>
        <h1 className="mt-1 text-3xl font-black tracking-normal text-ink">四天行程時間軸</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          點選 Day 1 到 Day 4 切換每日安排；標示「不用車」的景點可直接步行或就近移動。
        </p>
      </header>

      <DayTabsTimeline days={itineraryDays} />
    </div>
  );
}
