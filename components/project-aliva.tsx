
"use client"
import { useLang } from "@/lib/lang-context"

const content = {
  en: {
    eyebrow: "03 — MOSTAKBAL CITY • EAST CAIRO",
    name: "Aliva",
    subtitle: "Mountain View • 640 Acres • 7 Residential Zones",
    desc: "The largest compound in Mostakbal City. 640 acres with 7 residential zones. Middle East's first navigable artificial river — 8 acres you can kayak through. Designed by The Lighthouse Firm using AI systems.",
    details: [{ label: "Area", value: "640 Acres — 7 Zones" }, { label: "Location", value: "Mostakbal City — East Cairo" }, { label: "Units", value: "Apartments • iVillas • Villas" }, { label: "Highlight", value: "8-Acre Navigable River" }],
    features: ["8-Acre River + Kayaking", "Lagoon Beach Park", "Farmer's Market", "River Park", "Club Park", "AI Smart Systems"],
    wa: "I'm interested in Aliva by Mountain View",
  },
  ar: {
    eyebrow: "03 — مدينة المستقبل • شرق القاهرة",
    name: "أليفا",
    subtitle: "ماونتن فيو • ٦٤٠ فدان • ٧ مناطق سكنية",
    desc: "أكبر كمبوند في مدينة المستقبل على ٦٤٠ فدان. نهر اصطناعي بالقوارب — الأول في الشرق الأوسط. ٧ مناطق سكنية بهوية مختلفة.",
    details: [{ label: "المساحة", value: "٦٤٠ فدان — ٧ مناطق" }, { label: "الموقع", value: "مدينة المستقبل — شرق القاهرة" }, { label: "الوحدات", value: "شقق • iVillas • فيلات مستقلة" }, { label: "المميز", value: "نهر ٨ فدان بالقوارب" }],
    features: ["نهر ٨ فدان + قوارب", "Lagoon Beach Park", "Farmer's Market", "River Park", "Club Park", "أنظمة ذكاء اصطناعي"],
    wa: "أنا مهتم بمشروع أليفا من ماونتن فيو",
  },
}

const images = ["https://prod-images.nawy.com/processed/compound_image/image/6330/default.webp","https://prod-images.nawy.com/processed/compound_image/image/6327/default.webp","https://prod-images.nawy.com/processed/compound_image/image/6329/default.webp","https://prod-images.nawy.com/processed/compound_image/image/6330/default.webp","https://prod-images.nawy.com/processed/compound_image/image/6327/default.webp","https://prod-images.nawy.com/processed/compound_image/image/6329/default.webp"]

export default function ProjectAliva() {
  const { lang } = useLang()
  const isAr = lang === "ar"
  const c = content[lang]
  const phone = "+201111136040"
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(c.wa)}`
  const flip = true

  return (
    <section id="aliva" className="bg-primary/5" dir={isAr ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex items-end justify-between border-b border-border">
        <div>
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">{c.eyebrow}</p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-none">{c.name}</h2>
          <p className="text-muted-foreground text-sm mt-2 tracking-wide">{c.subtitle}</p>
        </div>
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="hidden md:block text-xs font-bold tracking-widest uppercase border-b border-primary text-primary pb-0.5 hover:opacity-70 transition-opacity">
          {isAr ? "استفسر الآن ←" : "Enquire Now →"}
        </a>
      </div>

      {/* Content */}
      <div className={`grid lg:grid-cols-2 min-h-[85vh] ${flip ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
        {/* Image */}
        <div className="relative overflow-hidden min-h-[50vw] lg:min-h-0">
          <img src={images[0]} alt={c.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white/20 text-7xl font-black italic leading-none select-none">03</div>
        </div>

        {/* Text */}
        <div className={`flex flex-col justify-center px-8 lg:px-14 py-16 bg-foreground text-white`}>
          <div className="w-8 h-0.5 bg-primary mb-6" />
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">MOUNTAIN VIEW</p>
          <h3 className="text-4xl font-black mb-1 leading-none text-white">{c.name}</h3>
          <p className="text-xs tracking-widest uppercase mb-8 text-white/40">{c.subtitle}</p>
          <p className="text-sm leading-relaxed mb-8 text-white/60">{c.desc}</p>

          {/* Details */}
          <div className="mb-8 space-y-0">
            {c.details.map((d: any, i: number) => (
              <div key={i} className="flex justify-between py-3 border-b border-white/10">
                <span className="text-sm font-bold text-white">{d.value}</span>
                <span className="text-xs text-white/40">{d.label}</span>
              </div>
            ))}
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {c.features.map((f: string, i: number) => (
              <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-white/10 text-blue-300 border border-white/10">{f}</span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-primary/90 transition-colors">
              {isAr ? "واتساب" : "WhatsApp"}
            </a>
            <a href={`tel:${phone}`}
              className="border border-primary text-primary px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-primary hover:text-white transition-colors">
              {isAr ? "اتصل الآن" : "Call Now"}
            </a>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-6 gap-0.5 h-48">
        {images.map((src: string, i: number) => (
          <div key={i} className="overflow-hidden">
            <img src={src} alt={`${c.name} ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  )
}
