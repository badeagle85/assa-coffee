import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "AHSSA - Partner for Café Needs",
  description: "카페 창업부터 운영까지, 당신의 카페 파트너 AHSSA",
  keywords: ["카페", "창업", "컨설팅", "커피", "베이커리", "프랜차이즈"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKr.className}>
      <body>
        <Navigation />
        <main className="min-h-screen bg-white pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
