import { DayTabsTimeline, type TripDay } from "../components/DayTabsTimeline";

function mapsSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const itineraryDays: TripDay[] = [
  {
    day: 1,
    date: "2026/08/21",
    label: "抵達台灣與台北市區景點",
    items: [
      {
        time: "07:30",
        title: "集合",
        location: "香港國際機場一號客運大樓 F 行段",
        mapsUrl: mapsSearch("香港國際機場一號客運大樓 F 行段"),
        type: "meeting"
      },
      {
        time: "10:15 - 12:10",
        title: "香港國際機場一號客運大樓 -> 臺灣桃園國際機場",
        detail: "航班：中華航空 CI602",
        mapsUrl: mapsSearch("臺灣桃園國際機場"),
        type: "flight"
      },
      {
        title: "臺北市立兒童新樂園",
        mapsUrl: mapsSearch("臺北市立兒童新樂園"),
        type: "spot",
        transport: "bus"
      },
      {
        title: "艋舺龍山寺",
        mapsUrl: mapsSearch("艋舺龍山寺"),
        type: "spot",
        transport: "bus"
      },
      {
        title: "迪化街",
        mapsUrl: mapsSearch("迪化街"),
        type: "spot",
        transport: "bus"
      },
      {
        title: "養心茶樓 蔬食飲茶 信義店",
        mapsUrl: mapsSearch("養心茶樓 蔬食飲茶 信義店"),
        type: "meal",
        transport: "bus"
      },
      {
        title: "凱撒趣淘漫旅台北",
        detail: "住宿",
        mapsUrl: mapsSearch("凱撒趣淘漫旅台北"),
        type: "hotel",
        transport: "none"
      }
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
        mapsUrl: mapsSearch("凱撒趣淘漫旅台北"),
        type: "departure",
        transport: "none"
      },
      {
        title: "新竹市城隍廟夜市",
        mapsUrl: mapsSearch("新竹市城隍廟夜市"),
        type: "spot",
        transport: "bus"
      },
      {
        title: "梧棲漁港",
        mapsUrl: mapsSearch("梧棲漁港"),
        type: "spot",
        transport: "bus"
      },
      {
        title: "審計新村",
        mapsUrl: mapsSearch("審計新村"),
        type: "spot",
        transport: "bus"
      },
      {
        title: "旱溪觀光夜市",
        mapsUrl: mapsSearch("旱溪觀光夜市"),
        type: "spot",
        transport: "bus"
      },
      {
        title: "凱撒趣淘漫旅台北",
        detail: "住宿",
        mapsUrl: mapsSearch("凱撒趣淘漫旅台北"),
        type: "hotel",
        transport: "none"
      }
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
        mapsUrl: mapsSearch("凱撒趣淘漫旅台北"),
        type: "departure",
        transport: "none"
      },
      {
        title: "Xpark 水族館",
        mapsUrl: mapsSearch("Xpark 水族館"),
        type: "spot",
        transport: "bus"
      },
      {
        title: "華泰名品城",
        detail: "在 Xpark 旁邊",
        mapsUrl: mapsSearch("華泰名品城"),
        type: "spot",
        transport: "walk"
      },
      {
        title: "肉多多火鍋 - 台北西門店",
        mapsUrl: mapsSearch("肉多多火鍋 台北西門店"),
        type: "meal",
        transport: "bus"
      },
      {
        title: "凱撒趣淘漫旅台北",
        detail: "住宿",
        mapsUrl: mapsSearch("凱撒趣淘漫旅台北"),
        type: "hotel",
        transport: "none"
      }
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
        mapsUrl: mapsSearch("凱撒趣淘漫旅台北"),
        type: "departure",
        transport: "none"
      },
      {
        title: "林口三井 OUTLET",
        mapsUrl: mapsSearch("林口三井 OUTLET"),
        type: "spot",
        transport: "bus"
      },
      {
        title: "饗食天堂 林口三井店",
        detail: "在林口三井",
        mapsUrl: mapsSearch("饗食天堂 林口三井店"),
        type: "meal",
        transport: "walk"
      },
      {
        time: "15:30 前",
        title: "抵達臺灣桃園國際機場",
        mapsUrl: mapsSearch("臺灣桃園國際機場"),
        type: "departure",
        transport: "bus"
      },
      {
        time: "18:10 - 20:10",
        title: "臺灣桃園國際機場 -> 香港國際機場",
        detail: "航班：中華航空 CI923",
        mapsUrl: mapsSearch("香港國際機場"),
        type: "flight",
        transport: "none"
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
          點選 Day 1 到 Day 4 切換每日安排；地點名稱可直接開啟 Google Maps 導航。
        </p>
      </header>

      <DayTabsTimeline days={itineraryDays} />
    </div>
  );
}
