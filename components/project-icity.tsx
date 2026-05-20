
"use client"
import { useLang } from "@/lib/lang-context"

const content = {
  en: {
    eyebrow: "02 — NEW CAIRO • FIFTH SETTLEMENT",
    name: "iCity New Cairo",
    subtitle: "Mountain View • 500 Acres • Egypt's First Smart City",
    desc: "Egypt's first fully integrated smart city. 500 acres divided into 5 distinct islands, each with its own identity. 4D architectural design with a 15km corniche and car-free zones.",
    details: [{ label: "Area", value: "500 Acres — 5 Islands" }, { label: "Location", value: "Fifth Settlement — Ring Road" }, { label: "Units", value: "Apartments • Villas • Commercial" }, { label: "Green Space", value: "88% Open & Landscaped" }],
    features: ["15km Corniche", "iDrive Zone", "Lagoon Beach Park", "HeartWork Hub", "Smart City", "5 Districts"],
    wa: "I'm interested in iCity New Cairo by Mountain View",
  },
  ar: {
    eyebrow: "02 — القاهرة الجديدة • التجمع الخامس",
    name: "iCity القاهرة الجديدة",
    subtitle: "ماونتن فيو • ٥٠٠ فدان • أول مدينة ذكية في مصر",
    desc: "أول مدينة ذكية متكاملة في مصر والشرق الأوسط. ٥ جزر مستقلة بهوية مختلفة على ٥٠٠ فدان في التجمع الخامس.",
    details: [{ label: "المساحة", value: "٥٠٠ فدان — ٥ جزر" }, { label: "الموقع", value: "التجمع الخامس — Ring Road" }, { label: "الوحدات", value: "شقق • فيلات • تجاري" }, { label: "المساحات الخضراء", value: "٨٨٪ مفتوح وخضراء" }],
    features: ["كورنيش ١٥ كم", "iDrive Zone", "Lagoon Beach Park", "HeartWork Hub", "مدينة ذكية", "٥ جزر"],
    wa: "أنا مهتم بمشروع iCity القاهرة الجديدة من ماونتن فيو",
  },
}

const images = ["https://prod-images.nawy.com/processed/compound_image/image/12377/default.webp","https://prod-images.nawy.com/processed/compound_image/image/12376/default.webp","https://prod-images.nawy.com/processed/compound_image/image/12374/default.webp","https://prod-images.nawy.com/processed/compound_image/image/12375/default.webp","https://prod-images.nawy.com/processed/compound_image/image/12366/default.webp","https://prod-images.nawy.com/processed/compound_image/image/12367/default.webp"]

export default function ProjectIcity() {
  const { lang } = useLang()
  const isAr = lang === "ar"
  const c = content[lang]
  const phone = "+201111136040"
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(c.wa)}`
  const flip = false

  return (
    <section id="icity" className="bg-background" dir={isAr ? "rtl" : "ltr"}>
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
          <div className="absolute bottom-8 left-8 text-white/20 text-7xl font-black italic leading-none select-none">02</div>
        </div>

        {/* Text */}
        <div className={`flex flex-col justify-center px-8 lg:px-14 py-16 `}>
          <div className="w-8 h-0.5 bg-primary mb-6" />
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">MOUNTAIN VIEW</p>
          <h3 className="text-4xl font-black mb-1 leading-none text-foreground">{c.name}</h3>
          <p className="text-xs tracking-widest uppercase mb-8 text-muted-foreground">{c.subtitle}</p>
          <p className="text-sm leading-relaxed mb-8 text-muted-foreground">{c.desc}</p>

          {/* Details */}
          <div className="mb-8 space-y-0">
            {c.details.map((d: any, i: number) => (
              <div key={i} className="flex justify-between py-3 border-b border-border">
                <span className="text-sm font-bold text-foreground">{d.value}</span>
                <span className="text-xs text-muted-foreground">{d.label}</span>
              </div>
            ))}
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {c.features.map((f: string, i: number) => (
              <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-primary/10 text-primary border border-primary/20">{f}</span>
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
