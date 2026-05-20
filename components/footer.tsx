"use client"
import { useLang } from "@/lib/lang-context"

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="bg-primary text-white py-8 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4" dir={lang === "ar" ? "rtl" : "ltr"}>
        <span className="text-base font-black tracking-widest uppercase">Mountain View DMG</span>
        <span className="text-xs text-white/30">
          {lang === "ar" ? "© ٢٠٢٦ ماونتن فيو. جميع الحقوق محفوظة | Grandeur Spaces – وكيل معتمد" : "© 2026 Mountain View. All Rights Reserved | Grandeur Spaces – Authorized Agent"}
        </span>
      </div>
    </footer>
  )
}
