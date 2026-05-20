"use client"
import { useState, useEffect } from "react"
import { Phone } from "lucide-react"
import { useLang } from "@/lib/lang-context"

const nav = {
  en: [{ name: "iCity", id: "icity" }, { name: "Aliva", id: "aliva" }, { name: "Jirian", id: "jirian" }, { name: "About", id: "about" }, { name: "Contact", id: "contact" }],
  ar: [{ name: "iCity", id: "icity" }, { name: "أليفا", id: "aliva" }, { name: "جيريان", id: "jirian" }, { name: "عن الشركة", id: "about" }, { name: "تواصل", id: "contact" }],
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggle } = useLang()
  const isAr = lang === "ar"

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header dir={isAr ? "rtl" : "ltr"} className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/98 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className={`text-base font-black tracking-widest uppercase transition-colors ${scrolled ? "text-primary" : "text-white"}`}>Mountain View</span>
          <span className={`text-xs font-semibold transition-colors ${scrolled ? "text-muted-foreground" : "text-white/50"}`}>DMG • {isAr ? "منذ ٢٠٠٥" : "SINCE 2005"}</span>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          {nav[lang].map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollTo(e, item.id)}
              className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? "text-foreground/60 hover:text-primary" : "text-white/70 hover:text-white"}`}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button onClick={toggle}
            className={`text-xs font-black tracking-widest px-3 py-1.5 border transition-all ${scrolled ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-white/40 text-white hover:bg-white/10"}`}>
            {isAr ? "EN" : "AR"}
          </button>
          <a href="tel:+201111136040" className={`hidden sm:block text-sm font-black transition-colors ${scrolled ? "text-foreground" : "text-white"}`} dir="ltr">01111136040</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}
            className="hidden sm:block bg-primary text-white px-5 py-2 text-xs font-black tracking-widest uppercase hover:bg-primary/90 transition-colors">
            {isAr ? "احجز الآن" : "Book Now"}
          </a>
          <a href="tel:+201111136040" className="sm:hidden bg-primary text-white p-2.5"><Phone className="w-5 h-5" /></a>
        </div>
      </div>
    </header>
  )
}
