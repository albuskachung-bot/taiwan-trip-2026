import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BottomNavigation } from "./components/BottomNavigation";

export const metadata: Metadata = {
  title: "台灣四天三夜旅遊",
  description: "2026 年 8 月台灣四天三夜旅遊行程網站"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="zh-Hant">
      <body>
        <div className="mx-auto min-h-screen max-w-5xl pb-24">
          <main>{children}</main>
        </div>
        <BottomNavigation />
      </body>
    </html>
  );
}
