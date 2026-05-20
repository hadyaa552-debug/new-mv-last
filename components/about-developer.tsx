"use client"
import { useLang } from "@/lib/lang-context"
import { Building2, Award, MapPin, Users } from "lucide-react"

const t = {
  en: {
    eyebrow: "ABOUT US",
    h2: ["Mountain View", "DMG"],
    desc: "Founded in 2005, Mountain View has become one of Egypt's most prominent real estate developers. Known for introducing American-style suburban living to Egypt, pushing boundaries with smart, sustainable, integrated communities.",
    stats: [{ n: "2005", l: "Founded" }, { n: "20+", l: "Projects" }, { n: "1st", l: "Smart City in Egypt" }, { n: "2,540", l: "Total Acres" }],
  },
  ar: {
    eyebrow: "عن الشركة",
    h2: ["ماونتن فيو", "DMG"],
    desc: "تأسست عام ٢٠٠٥ وأصبحت من أبرز شركات التطوير العقاري في مصر. رائدة في تقديم مفهوم الحياة المتكاملة — مشاريع ذكية ومستدامة في القاهرة الجديدة، المستقبل، الشيخ زايد، الساحل الشمالي، والسخنة.",
    stats: [{ n: "٢٠٠٥", l: "سنة التأسيس" }, { n: "+٢٠", l: "مشروع" }, { n: "الأول", l: "مدينة ذكية في مصر" }, { n: "٢٥٤٠", l: "إجمالي الفدادين" }],
  },
}

export default function AboutDeveloper() {
  const { lang } = useLang()
  const isAr = lang === "ar"
  const c = t[lang]

  return (
    <section id="about" className="py-24 bg-primary text-white" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">{c.eyebrow}</p>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              {c.h2[0]}<br/><span className="text-blue-300">{c.h2[1]}</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ icon: Building2, ...c.stats[0] }, { icon: MapPin, ...c.stats[1] }, { icon: Award, ...c.stats[2] }, { icon: Users, ...c.stats[3] }].map((s, i) => (
              <div key={i} className="border border-white/10 p-8">
                <s.icon className="w-8 h-8 text-blue-300 mb-4" />
                <div className="text-3xl font-black mb-1">{s.n}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
