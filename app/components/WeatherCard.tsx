import { CloudSun, Wind } from "lucide-react";

type OpenWeatherResponse = {
  weather?: Array<{
    description?: string;
  }>;
  main?: {
    temp?: number;
  };
};

type WeatherResult =
  | {
      status: "ready";
      description: string;
      temperature: number;
    }
  | {
      status: "missing-key" | "error";
      message: string;
    };

async function getTaipeiWeather(): Promise<WeatherResult> {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!apiKey) {
    return {
      status: "missing-key",
      message: "尚未設定天氣 API Key，請加入 NEXT_PUBLIC_WEATHER_API_KEY。"
    };
  }

  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.set("q", "Taipei,TW");
  url.searchParams.set("units", "metric");
  url.searchParams.set("lang", "zh_tw");
  url.searchParams.set("appid", apiKey);

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      return {
        status: "error",
        message: "目前無法取得台北天氣，請稍後再試。"
      };
    }

    const data = (await response.json()) as OpenWeatherResponse;
    const description = data.weather?.[0]?.description;
    const temperature = data.main?.temp;

    if (!description || typeof temperature !== "number") {
      return {
        status: "error",
        message: "天氣資料格式暫時無法辨識。"
      };
    }

    return {
      status: "ready",
      description,
      temperature: Math.round(temperature)
    };
  } catch {
    return {
      status: "error",
      message: "目前無法連線到天氣服務。"
    };
  }
}

export async function WeatherCard() {
  const weather = await getTaipeiWeather();

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sun/18 text-coral">
          <CloudSun aria-hidden="true" className="h-6 w-6" />
        </div>
        <div>
          <div className="flex items-center gap-2 text-leaf">
            <Wind aria-hidden="true" className="h-4 w-4" />
            <h2 className="font-black text-ink">台北即時天氣</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {weather.status === "ready"
              ? `台北今日天氣：${weather.description}，氣溫約 ${weather.temperature}°C。`
              : weather.message}
          </p>
        </div>
      </div>
    </article>
  );
}
