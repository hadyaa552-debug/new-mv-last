"use client"
import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"
import { useLang } from "@/lib/lang-context"

const t = {
  en: {
    eyebrow: "Mountain View • DMG",
    h1: ["Experience", "Happiness"],
    desc: "Three extraordinary communities — Egypt's first smart city, the largest compound in Mostakbal City, and the first city on the Nile.",
    tags: ["New Cairo", "Mostakbal City", "Sheikh Zayed", "On The Nile"],
    stats: [{ v: "2005", l: "Founded" }, { v: "2,540", l: "Total Acres" }, { v: "20+", l: "Years" }],
  },
  ar: {
    eyebrow: "ماونتن فيو • DMG",
    h1: ["اختبر", "السعادة"],
    desc: "ثلاثة مجتمعات استثنائية — أول مدينة ذكية في مصر، أكبر كمبوند في المستقبل، وأول مدينة على النيل.",
    tags: ["القاهرة الجديدة", "مدينة المستقبل", "الشيخ زايد", "على النيل"],
    stats: [{ v: "2005", l: "التأسيس" }, { v: "2,540", l: "إجمالي الفدادين" }, { v: "+20", l: "سنة خبرة" }],
  },
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const { lang } = useLang()
  const isAr = lang === "ar"
  const c = t[lang]

  useEffect(() => { setVisible(true) }, [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="absolute inset-0">
        <img src="https://prod-images.nawy.com/processed/compound_image/image/11804/default.webp" alt="Mountain View" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{background: isAr ? "linear-gradient(to left, rgba(27,59,111,0.9) 40%, rgba(27,59,111,0.5) 70%, rgba(0,0,0,0.1) 100%)" : "linear-gradient(to right, rgba(27,59,111,0.9) 40%, rgba(27,59,111,0.5) 70%, rgba(0,0,0,0.1) 100%)"}} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-8 h-px bg-white/60" />
              <span className="text-white/60 text-xs font-bold tracking-widest uppercase">{c.eyebrow}</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none mb-4">
              {c.h1[0]}<br/><span className="text-blue-300">{c.h1[1]}</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">{c.desc}</p>
            <div className={`flex flex-wrap gap-3 mb-10 ${isAr ? "flex-row-reverse" : ""}`}>
              {c.tags.map((tag, i) => (
                <span key={i} className="border border-white/20 text-white/60 px-4 py-1.5 text-xs font-semibold">{tag}</span>
              ))}
            </div>
            <div className={`grid grid-cols-3 gap-0 border-t border-white/10 pt-8 ${isAr ? "text-right" : "text-left"}`}>
              {c.stats.map((s, i) => (
                <div key={i} className={`${isAr ? "border-l" : "border-r"} border-white/10 ${isAr ? "pl-6 last:border-l-0 last:pl-0 ml-6 last:ml-0" : "pr-6 last:border-r-0 last:pr-0 mr-6 last:mr-0"}`}>
                  <div className="text-3xl font-black text-blue-300">{s.v}</div>
                  <div className="text-xs text-white/40 mt-1 tracking-wide uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
