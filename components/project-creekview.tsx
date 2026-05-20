"use client"
import { useLang } from "@/lib/lang-context"

const content = {
  en: {
    eyebrow: "01 — NEW CAIRO • FIFTH SETTLEMENT",
    name: "Creek View",
    subtitle: "Mountain View • Fifth Settlement • Creekside Smart Living",
    desc: "A new creekside destination in the heart of Fifth Settlement, blending modern living with scenic waterfront landscapes and a fully integrated smart ecosystem. Creek View is designed to bring everything closer — work, leisure, nature, and community.",
    details: [
      { label: "Location", value: "Fifth Settlement — New Cairo" },
      { label: "Starting Price", value: "From EGP 7,500,000" },
      { label: "Units", value: "Apartments • Duplexes • Twin Houses" },
      { label: "Min Area", value: "From 120 m²" },
      { label: "Down Payment", value: "Flexible Payment Plans" },
    ],
    features: ["Creekside Waterfront", "Smart Ecosystem", "Scenic Landscapes", "Fifth Settlement", "Modern Architecture", "Integrated Community"],
    wa: "I'm interested in Creek View Fifth Settlement by Mountain View",
    priceLabel: "Starting From",
    price: "EGP 7,500,000",
    enquire: "Enquire Now →",
    payment: "Flexible Payment Plans Available",
    callBtn: "📞 Call Now",
    waBtn: "💬 WhatsApp",
  },
  ar: {
    eyebrow: "01 — القاهرة الجديدة • التجمع الخامس",
    name: "Creek View",
    subtitle: "ماونتن فيو • التجمع الخامس • معيشة ذكية على ضفاف النهر",
    desc: "وجهة سكنية جديدة في قلب التجمع الخامس تجمع بين الحياة العصرية والمناظر الطبيعية الخلابة على ضفاف المجرى المائي. Creek View يُقرّب كل ما تحتاجه — عمل، ترفيه، طبيعة، ومجتمع متكامل.",
    details: [
      { label: "الموقع", value: "التجمع الخامس — القاهرة الجديدة" },
      { label: "يبدأ السعر من", value: "٧,٥٠٠,٠٠٠ جنيه" },
      { label: "الوحدات", value: "شقق • دوبلكس • توين هاوس" },
      { label: "أدنى مساحة", value: "من ١٢٠ م²" },
      { label: "السداد", value: "خطط سداد مرنة" },
    ],
    features: ["واجهة مائية على المجرى", "منظومة ذكية متكاملة", "مناظر طبيعية خلابة", "التجمع الخامس", "تصميم معماري عصري", "مجتمع متكامل"],
    wa: "أنا مهتم بمشروع Creek View التجمع الخامس من ماونتن فيو",
    priceLabel: "يبدأ السعر من",
    price: "٧,٥٠٠,٠٠٠ جنيه",
    enquire: "استفسر الآن ←",
    payment: "خطط سداد مرنة متاحة",
    callBtn: "📞 اتصل الآن",
    waBtn: "💬 واتساب",
  },
}

const images = [
  "/images/creekview/hero.webp",
  "/images/creekview/gallery-2.webp",
  "/images/creekview/gallery-3.webp",
  "/images/creekview/location-map.webp",
]

const PHONE = "+201111136040"
const CC = "ahmed.a.rahim23@gmail.com"

export default function ProjectCreekView() {
  const { lang } = useLang()
  const isAr = lang === "ar"
  const c = content[lang]
  const waLink = `https://wa.me/${PHONE.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(c.wa)}`

  return (
    <section id="creekview" className="bg-background border-b border-border" dir={isAr ? "rtl" : "ltr"}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex items-end justify-between border-b border-border">
        <div>
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">{c.eyebrow}</p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-none">{c.name}</h2>
          <p className="text-muted-foreground text-sm mt-2 tracking-wide">{c.subtitle}</p>
        </div>
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="hidden md:block text-xs font-bold tracking-widest uppercase border-b border-primary text-primary pb-0.5 hover:opacity-70 transition-opacity">
          {c.enquire}
        </a>
      </div>

      {/* Main content */}
      <div className="grid lg:grid-cols-2 min-h-[85vh]">
        {/* Image */}
        <div className="relative overflow-hidden min-h-[50vw] lg:min-h-0">
          <img
            src={images[0]}
            alt="Creek View Mountain View"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white/20 text-7xl font-black italic leading-none select-none">01</div>
          {/* New badge */}
          <div className="absolute top-6 right-6 bg-primary text-primary-foreground text-xs font-black px-4 py-2 tracking-widest uppercase">
            {isAr ? "✨ إضافة جديدة" : "✨ New Project"}
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center px-8 lg:px-14 py-16 bg-card">
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">MOUNTAIN VIEW DEVELOPMENTS</p>
          <h3 className="text-4xl font-black text-foreground leading-tight mb-2">{c.name}</h3>
          <p className="text-muted-foreground text-xs tracking-widest uppercase mb-6">{isAr ? "التجمع الخامس — القاهرة الجديدة" : "Fifth Settlement — New Cairo"}</p>
          <div className="w-8 h-px bg-primary mb-6" />
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">{c.desc}</p>

          {/* Price highlight */}
          <div className="border border-primary/20 bg-primary/5 p-4 mb-6">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">{c.priceLabel}</p>
            <p className="text-2xl font-black text-primary">{c.price}</p>
            <p className="text-xs text-muted-foreground mt-1">{c.payment}</p>
          </div>

          {/* Details */}
          <div className="mb-6 space-y-0">
            {c.details.map((d, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-border">
                <span className="text-sm font-bold text-foreground">{d.value}</span>
                <span className="text-xs text-muted-foreground">{d.label}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-8">
            {c.features.map((f, i) => (
              <span key={i} className="text-xs font-semibold px-3 py-1.5 border border-primary/20 text-primary bg-primary/5">
                {f}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-3 bg-green-500 text-white text-xs font-black text-center tracking-widest hover:opacity-85 transition-opacity">
              {c.waBtn}
            </a>
            <a href={`tel:${PHONE}`}
              className="flex-1 py-3 border border-primary text-primary text-xs font-black text-center tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors">
              {c.callBtn}
            </a>
          </div>
        </div>
      </div>

      {/* Image strip */}
      <div className="grid grid-cols-3 h-52 gap-0.5">
        {images.slice(1, 4).map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={src}
              alt={`Creek View ${i + 2}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
