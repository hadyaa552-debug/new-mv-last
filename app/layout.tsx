import type { Metadata } from "next"
import { Almarai } from "next/font/google"
import "./globals.css"

const almarai = Almarai({ subsets: ["arabic"], weight: ["300","400","700","800"] })

export const metadata: Metadata = {
  title: "Palm Hills | Hacienda Bay · Hacienda Waters · أرض ديزني",
  description: "مشاريع Palm Hills الساحلية — Hacienda Bay وHacienda Waters وأرض ديزني المرتقب. ساحل شمالي فاخر. تواصل مع Palm Hills Developments.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={almarai.className}>{children}</body>
    </html>
  )
}
