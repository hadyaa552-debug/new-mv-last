"use client"
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLang } from "@/lib/lang-context"

const t = {
  en: { title: "Contact Sales Team", sub: "Our consultant will reach you within 24 hours", name: "Full Name *", phone: "Phone Number *", project: "Select Project *", btn: "Send Request", sending: "Sending...", projects: ["iCity – New Cairo", "Aliva – Mostakbal City", "Jirian – Sheikh Zayed", "Multiple Projects"] },
  ar: { title: "تواصل مع قسم المبيعات", sub: "سيتواصل معك مستشارنا خلال ٢٤ ساعة", name: "الاسم الكريم *", phone: "رقم الهاتف *", project: "المشروع المهتم به *", btn: "إرسال الطلب", sending: "جاري الإرسال...", projects: ["iCity – القاهرة الجديدة", "أليفا – مدينة المستقبل", "جيريان – الشيخ زايد", "أكثر من مشروع"] },
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { lang } = useLang()
  const isAr = lang === "ar"
  const c = t[lang]
  const [formData, setFormData] = useState({ name: "", phone: "", project: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "01674967-9a12-4ca9-90a1-124df08b2463",
          name: formData.name, phone: formData.phone,
          project: formData.project || "Not specified",
          subject: "New Lead – Mountain View",
          cc: "ahmed.a.rahim23@gmail.com",
        }),
      })
      if (res.ok) { router.push("/thank-you") }
      else throw new Error()
    } catch { setLoading(false) }
  }

  return (
    <Card className="shadow-2xl border-0 bg-white" dir={isAr ? "rtl" : "ltr"}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-black text-foreground">{c.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{c.sub}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input placeholder={c.name} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className={`h-11 ${isAr ? "text-right" : ""}`} />
          <Input type="tel" placeholder={c.phone} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-11" dir="ltr" />
          <Select value={formData.project} onValueChange={(v) => setFormData({ ...formData, project: v })}>
            <SelectTrigger className={`h-11 bg-white border border-input ${isAr ? "text-right" : ""}`}>
              <SelectValue placeholder={c.project} />
            </SelectTrigger>
            <SelectContent>
              {c.projects.map((p, i) => <SelectItem key={i} value={p}>{p}</SelectItem>)}
            </SelectContent>
          </Select>
          <Button type="submit" disabled={loading} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black text-sm tracking-widest uppercase">
            {loading ? c.sending : c.btn}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
