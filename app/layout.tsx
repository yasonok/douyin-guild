import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "抖音工會招募 | 加入我們",
  description: "加入頂級抖音工會，開啟你的直播事業巔峰。專業團隊支援、豐厚分潤、完整培訓。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
