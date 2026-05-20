"use client"
import React, { useState, useEffect, useRef } from "react"

const PHONE = "+201117322733"
const WA = "https://wa.me/201117322733"
const WEB3_KEY = "01674967-9a12-4ca9-90a1-124df08b2463"
const CC_EMAIL = "Info@nurlinebrokerage.com"

const PROJECTS = [
  {
    id: "disney",
    name: "أرض ديزني",
    nameEn: "Disney Land",
    tag: "🔥 إطلاق قريباً",
    location: "الساحل الشمالي",
    price: "تواصل للسعر",
    payment: "قريباً",
    desc: "أول مشروع Palm Hills المرتبط بعالم ديزني في مصر — إطلاق قريباً على الساحل الشمالي. سجّل اهتمامك الآن وكن من أوائل المحجوزين.",
    features: ["موقع استراتيجي","أول مشروع من نوعه","فرصة استثمارية","تصميم عالمي"],
    img: "/images/disney-land.webp",
    coming: true,
  },
  {
    id: "bay",
    name: "Hacienda Bay",
    nameEn: "Hacienda Bay",
    tag: "سيدي عبد الرحمن",
    location: "كيلو 124 — الساحل الشمالي",
    price: "من 13.5 مليون",
    payment: "5% مقدم — 10 سنوات",
    desc: "واحدة من أرقى قرى الساحل الشمالي على مساحة 574 فداناً. شاليهات وتاون هاوس وتوين هاوس وفيلات مباشرة على البحر.",
    features: ["574 فدان","شاطئ خاص","تصميم أوروبي","كيلو 124"],
    units: [
      {type:"شاليه",price:"من 13,500,000 ج"},
      {type:"تاون هاوس",price:"من 25,000,000 ج"},
      {type:"توين هاوس",price:"من 37,326,715 ج"},
      {type:"فيلا",price:"من 40,397,965 ج"},
    ],
    img: "/images/hacienda-bay.webp",
    coming: false,
  },
  {
    id: "waters",
    name: "Hacienda Waters",
    nameEn: "Hacienda Waters",
    tag: "رأس الحكمة",
    location: "كيلو 190 — رأس الحكمة",
    price: "من 10 مليون",
    payment: "2.5% مقدم — 12 سنة",
    desc: "أحدث مشاريع Palm Hills — قلب رأس الحكمة. 161 فداناً مع إطلالة بحر وأقل مقدم في السوق.",
    features: ["161 فدان","مقدم 2.5%","تقسيط 12 سنة","رأس الحكمة"],
    units: [
      {type:"كابينة",price:"من 6,800,000 ج"},
      {type:"شاليه 2 غرفة",price:"من 10,000,000 ج"},
      {type:"شاليه 3 غرف",price:"من 14,000,000 ج"},
      {type:"فيلا",price:"تواصل للسعر"},
    ],
    img: "/images/hacienda-waters.png",
    coming: false,
  },
]

const HERO_IMGS = ["/images/disney-land.webp","/images/hacienda-bay.webp","/images/hacienda-waters.png"]
const STATS = [
  {icon:"🏛",value:"1997",label:"تأسست"},
  {icon:"🌊",value:"3",label:"مشاريع ساحلية"},
  {icon:"📊",value:"LSE",label:"بورصة لندن"},
  {icon:"👥",value:"15,000+",label:"عميل"},
]

/* ── Countdown Timer Component ── */
function Countdown() {
  const [time, setTime] = useState({d:0,h:0,m:0,s:0})
  useEffect(()=>{
    const target = new Date()
    target.setDate(target.getDate() + 7) // 7 days from now
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now())
      setTime({
        d: Math.floor(diff/86400000),
        h: Math.floor((diff%86400000)/3600000),
        m: Math.floor((diff%3600000)/60000),
        s: Math.floor((diff%60000)/1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  },[])
  return (
    <div style={{display:"flex",gap:8,justifyContent:"center",marginBottom:20}}>
      {[{v:time.d,l:"يوم"},{v:time.h,l:"ساعة"},{v:time.m,l:"دقيقة"},{v:time.s,l:"ثانية"}].map((t,i)=>(
        <div key={i} style={{textAlign:"center",minWidth:52}}>
          <div style={{
            background:"rgba(139,26,26,0.1)",border:"1px solid rgba(139,26,26,0.2)",
            padding:"10px 6px",fontSize:"1.4rem",fontWeight:700,color:"#8B1A1A",
            fontFamily:"'Playfair Display',serif",borderRadius:6,
          }}>{String(t.v).padStart(2,"0")}</div>
          <div style={{fontSize:"0.6rem",color:"#8B7355",marginTop:4,letterSpacing:"0.05em"}}>{t.l}</div>
        </div>
      ))}
    </div>
  )
}

/* ── Lead Form ── */
function LeadForm({ subject, variant="light" }: { subject:string; variant?:"light"|"dark"|"glass" }) {
  const [form, setForm] = useState({ name:"", phone:"", project:"" })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},
        body: JSON.stringify({access_key:WEB3_KEY, name:form.name, phone:form.phone, project:form.project, subject, cc:CC_EMAIL}),
      })
      if (res.ok) setSent(true); else setLoading(false)
    } catch { setLoading(false) }
  }

  if (sent) return (
    <div style={{textAlign:"center",padding:"2rem 0"}}>
      <div style={{fontSize:"2.5rem",marginBottom:10}}>✅</div>
      <p style={{fontWeight:700,fontSize:"1rem",color:variant==="dark"?"#fff":"#1a1a1a"}}>تم الإرسال بنجاح!</p>
      <p style={{fontSize:"0.78rem",color:variant==="dark"?"rgba(255,255,255,0.5)":"#8B7355",marginTop:6}}>هنتواصل معاك خلال 24 ساعة</p>
    </div>
  )

  const isDark = variant==="dark" || variant==="glass"
  const inputBg = variant==="glass" ? "rgba(255,255,255,0.08)" : variant==="dark" ? "rgba(255,255,255,0.06)" : "#f8f5f0"
  const inputBorder = variant==="glass" ? "rgba(255,255,255,0.12)" : variant==="dark" ? "rgba(255,255,255,0.1)" : "rgba(139,115,85,0.15)"
  const inputColor = isDark ? "#fff" : "#1a1a1a"
  const placeholderColor = isDark ? "rgba(255,255,255,0.35)" : "#8B7355"

  return (
    <form onSubmit={submit}>
      <style>{`
        .lf-inp::placeholder{color:${placeholderColor}}
        .lf-inp:focus{border-color:#8B1A1A!important;box-shadow:0 0 0 3px rgba(139,26,26,0.08)!important}
      `}</style>
      {[
        {ph:"الاسم الكريم *",key:"name",type:"text"},
        {ph:"رقم الهاتف *",key:"phone",type:"tel"},
      ].map(f=>(
        <input key={f.key} className="lf-inp" type={f.type} placeholder={f.ph}
          value={(form as any)[f.key]}
          onChange={e=>setForm({...form,[f.key]:e.target.value})} required
          style={{
            width:"100%",padding:"14px 16px",marginBottom:10,
            background:inputBg,border:`1px solid ${inputBorder}`,borderRadius:8,
            color:inputColor,fontSize:"0.85rem",outline:"none",
            fontFamily:"'Almarai',sans-serif",transition:"all .2s",
            direction: f.key==="phone" ? "ltr" : "rtl",
          }}/>
      ))}
      <select value={form.project} onChange={e=>setForm({...form,project:e.target.value})}
        style={{
          width:"100%",padding:"14px 16px",marginBottom:16,
          background:inputBg,border:`1px solid ${inputBorder}`,borderRadius:8,
          color:form.project?inputColor:placeholderColor,fontSize:"0.85rem",outline:"none",
          fontFamily:"'Almarai',sans-serif",cursor:"pointer",transition:"all .2s",
        }}>
        <option value="">اختر المشروع</option>
        {PROJECTS.map(p=><option key={p.id} value={p.name} style={{color:"#1a1a1a"}}>{p.coming?"🔥 ":""}{p.name}</option>)}
      </select>
      <button type="submit" disabled={loading} style={{
        width:"100%",padding:"16px",background:"#8B1A1A",color:"#fff",border:"none",
        borderRadius:8,fontWeight:700,fontSize:"0.88rem",cursor:"pointer",
        fontFamily:"'Almarai',sans-serif",letterSpacing:"0.04em",
        transition:"all .2s",opacity:loading?0.7:1,
      }}>
        {loading ? "جاري الإرسال..." : "سجّل الآن — مجاناً"}
      </button>
    </form>
  )
}

/* ── Main Page ── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [heroIdx, setHeroIdx] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupForm, setPopupForm] = useState({name:"",phone:""})
  const [popupSent, setPopupSent] = useState(false)
  const [popupLoading, setPopupLoading] = useState(false)

  useEffect(()=>{
    setMounted(true)
    const fn = ()=>setScrolled(window.scrollY>60)
    window.addEventListener("scroll",fn)
    const ti = setInterval(()=>setHeroIdx(i=>(i+1)%HERO_IMGS.length),5000)
    return ()=>{window.removeEventListener("scroll",fn);clearInterval(ti)}
  },[])

  useEffect(()=>{
    try {
      if (!sessionStorage.getItem("ph_popup")) {
        const t = setTimeout(()=>{setShowPopup(true);sessionStorage.setItem("ph_popup","1")},4000)
        return ()=>clearTimeout(t)
      }
    } catch{}
  },[])

  const submitPopup = async (e: React.FormEvent) => {
    e.preventDefault(); setPopupLoading(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},
        body: JSON.stringify({access_key:WEB3_KEY, name:popupForm.name, phone:popupForm.phone, subject:"EOI — أرض ديزني Palm Hills", cc:CC_EMAIL}),
      })
      if (res.ok) setPopupSent(true); else setPopupLoading(false)
    } catch { setPopupLoading(false) }
  }

  const scroll = (id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"})

  return (
    <div dir="rtl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#FAFAF7;color:#1a1a1a;font-family:'Almarai',sans-serif;font-size:16px;direction:rtl}

        @keyframes fadeIn{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
        .animate-in{animation:fadeIn .7s ease forwards;opacity:0}
        .delay-1{animation-delay:.15s}.delay-2{animation-delay:.3s}.delay-3{animation-delay:.45s}

        /* Mobile */
        @media(max-width:768px){
          .hero-grid{flex-direction:column!important;padding:80px 16px 32px!important;gap:24px!important}
          .hero-text h1{font-size:2.2rem!important}
          .hero-form-card{position:relative!important;margin-top:0!important}
          .nav-links{display:none!important}
          .nav{padding:0 16px!important;height:56px!important}
          .projects-grid{grid-template-columns:1fr!important}
          .project-detail-grid{grid-template-columns:1fr!important}
          .project-img-wrap{min-height:220px!important}
          .project-info{padding:28px 20px!important}
          .about-grid{grid-template-columns:1fr!important}
          .about-img{min-height:220px!important}
          .about-text{padding:32px 20px!important}
          .contact-grid{grid-template-columns:1fr!important}
          .contact-dark{padding:40px 20px!important}
          .contact-form-wrap{padding:40px 20px!important}
          .footer-inner{flex-direction:column!important;gap:12px!important;text-align:center!important;padding-bottom:80px!important}
          .trust-bar{flex-wrap:wrap!important;justify-content:center!important;gap:16px!important;padding:20px 16px!important}
          .trust-item{min-width:70px!important}
          .float-btns{display:none!important}
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="nav" style={{
        position:"fixed",top:0,left:0,right:0,zIndex:100,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"0 40px",height:64,transition:"all .3s",
        background:scrolled?"rgba(250,250,247,0.97)":"transparent",
        borderBottom:scrolled?"1px solid rgba(0,0,0,0.06)":"none",
        backdropFilter:scrolled?"blur(20px)":"none",
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:24,height:24,background:"#8B1A1A",transform:"rotate(45deg)"}}/>
          <span style={{fontFamily:"'Playfair Display',serif",fontSize:"1.05rem",fontWeight:600,letterSpacing:"0.15em",color:scrolled?"#1a1a1a":"#fff"}}>PALM HILLS</span>
        </div>
        <div className="nav-links" style={{display:"flex",gap:28,alignItems:"center"}}>
          {[["المشاريع","projects"],["Hacienda Bay","bay"],["Hacienda Waters","waters"],["تواصل","contact"]].map(([l,id])=>(
            <button key={id} onClick={()=>scroll(id)} style={{
              background:"none",border:"none",cursor:"pointer",fontSize:"0.75rem",fontWeight:600,
              color:scrolled?"#8B7355":"rgba(255,255,255,0.6)",letterSpacing:"0.06em",transition:"color .2s",
            }}>{l}</button>
          ))}
          <a href={`tel:${PHONE}`} dir="ltr" style={{fontSize:"0.82rem",fontWeight:700,color:scrolled?"#1a1a1a":"#fff",textDecoration:"none"}}>0111 732 2733</a>
          <button onClick={()=>scroll("contact")} style={{
            background:"#8B1A1A",color:"#fff",border:"none",padding:"10px 20px",
            fontWeight:700,fontSize:"0.72rem",letterSpacing:"0.06em",cursor:"pointer",
            fontFamily:"'Almarai',sans-serif",borderRadius:6,transition:"opacity .2s",
          }}>سجّل الآن</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{position:"relative",minHeight:"100vh",overflow:"hidden"}}>
        {/* BG */}
        {mounted && HERO_IMGS.map((img,i)=>(
          <div key={i} style={{position:"absolute",inset:0,transition:"opacity 1.2s",opacity:i===heroIdx?1:0}}>
            <img src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </div>
        ))}
        {!mounted && <div style={{position:"absolute",inset:0,background:"#1a1a1a"}}/>}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(26,26,26,0.92) 0%,rgba(26,26,26,0.6) 60%,rgba(26,26,26,0.45) 100%)"}}/>

        {/* Content */}
        <div className="hero-grid" style={{
          position:"relative",zIndex:10,minHeight:"100vh",
          display:"flex",alignItems:"center",justifyContent:"space-between",
          maxWidth:1200,margin:"0 auto",width:"100%",padding:"100px 40px 60px",gap:48,
        }}>
          {/* Left - Text */}
          <div className="hero-text animate-in" style={{flex:1,maxWidth:560}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:20,padding:"6px 14px",background:"rgba(139,26,26,0.85)",borderRadius:20}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:"#4ade80",animation:"pulse 1.5s infinite"}}/>
              <span style={{fontSize:"0.7rem",fontWeight:700,color:"#fff",letterSpacing:"0.08em"}}>🔥 أرض ديزني — إطلاق قريباً</span>
            </div>

            <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.5rem,5.5vw,4.2rem)",fontWeight:500,color:"#fff",lineHeight:1.05,marginBottom:20}}>
              الساحل الشمالي<br/>
              <span style={{color:"rgba(255,255,255,0.35)",fontStyle:"italic",fontWeight:400}}>بتوقيع</span>{" "}
              <span style={{color:"#C8A97E"}}>Palm Hills</span>
            </h1>

            <p style={{fontSize:"0.92rem",color:"rgba(255,255,255,0.5)",lineHeight:1.9,marginBottom:32,maxWidth:440}}>
              Hacienda Bay · Hacienda Waters · أرض ديزني — سجّل بياناتك دلوقتي واحصل على أفضل سعر وأولوية الحجز.
            </p>

            {/* Project pills */}
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:40}}>
              {PROJECTS.map(p=>(
                <button key={p.id} onClick={()=>scroll(p.id)} style={{
                  border:"1px solid rgba(255,255,255,0.15)",color:"rgba(255,255,255,0.65)",background:"transparent",
                  padding:"9px 18px",fontSize:"0.75rem",fontWeight:600,cursor:"pointer",borderRadius:6,
                  fontFamily:"'Almarai',sans-serif",transition:"all .2s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#8B1A1A";e.currentTarget.style.background="#8B1A1A";e.currentTarget.style.color="#fff"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";e.currentTarget.style.background="transparent";e.currentTarget.style.color="rgba(255,255,255,0.65)"}}>
                  {p.coming?"🔥 ":""}{p.name}
                </button>
              ))}
            </div>

            {/* Stats row */}
            <div style={{display:"flex",gap:0,borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:20}}>
              {STATS.map((s,i)=>(
                <div key={i} style={{paddingLeft:i>0?20:0,marginLeft:i>0?20:0,borderLeft:i>0?"1px solid rgba(255,255,255,0.08)":"none"}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:500,color:"#C8A97E"}}>{s.value}</div>
                  <div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.25)",marginTop:2,letterSpacing:"0.08em"}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="hero-form-card animate-in delay-2" style={{
            width:380,flexShrink:0,
            background:"rgba(255,255,255,0.97)",backdropFilter:"blur(20px)",
            borderRadius:16,overflow:"hidden",
            boxShadow:"0 25px 80px rgba(0,0,0,0.3)",
          }}>
            {/* Form header */}
            <div style={{background:"#8B1A1A",padding:"20px 24px",textAlign:"center"}}>
              <p style={{fontSize:"0.65rem",fontWeight:700,color:"rgba(255,255,255,0.6)",letterSpacing:"0.2em",marginBottom:6}}>عرض لفترة محدودة</p>
              <Countdown />
              <p style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.8)",fontWeight:700}}>سجّل قبل انتهاء العرض</p>
            </div>
            {/* Form body */}
            <div style={{padding:"24px"}}>
              <LeadForm subject="Lead — Palm Hills (Hero V1)" />
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:10}}>
                <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع Palm Hills الساحلية")}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{padding:"12px",background:"#25D366",color:"#fff",fontWeight:700,fontSize:"0.72rem",textAlign:"center",textDecoration:"none",borderRadius:8}}>
                  💬 واتساب
                </a>
                <a href={`tel:${PHONE}`} style={{
                  padding:"12px",border:"1px solid rgba(0,0,0,0.08)",color:"#1a1a1a",fontWeight:700,
                  fontSize:"0.72rem",textAlign:"center",textDecoration:"none",borderRadius:8,transition:"all .2s",
                }}>📞 اتصل</a>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        {mounted && (
          <div style={{position:"absolute",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,zIndex:10}}>
            {HERO_IMGS.map((_,i)=>(
              <button key={i} onClick={()=>setHeroIdx(i)} style={{
                width:i===heroIdx?28:8,height:8,borderRadius:4,
                background:i===heroIdx?"#fff":"rgba(255,255,255,0.3)",
                border:"none",cursor:"pointer",transition:"all .3s",
              }}/>
            ))}
          </div>
        )}
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar" style={{
        display:"flex",justifyContent:"center",gap:40,padding:"24px 40px",
        background:"#fff",borderBottom:"1px solid rgba(0,0,0,0.04)",
      }}>
        {STATS.map((s,i)=>(
          <div key={i} className="trust-item" style={{textAlign:"center"}}>
            <div style={{fontSize:"1.1rem",marginBottom:4}}>{s.icon}</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.2rem",fontWeight:600,color:"#8B1A1A"}}>{s.value}</div>
            <div style={{fontSize:"0.62rem",color:"#8B7355",letterSpacing:"0.06em"}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── PROJECTS OVERVIEW ── */}
      <section id="projects" style={{padding:"60px 40px",background:"#FAFAF7"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <p style={{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.25em",color:"#8B1A1A",marginBottom:8}}>مشاريع PALM HILLS</p>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"2.2rem",fontWeight:500,color:"#1a1a1a"}}>اختار مشروعك على الساحل</h2>
          </div>
          <div className="projects-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {PROJECTS.map(p=>(
              <div key={p.id} onClick={()=>scroll(p.id)} style={{
                background:"#fff",borderRadius:12,overflow:"hidden",cursor:"pointer",
                border:"1px solid rgba(0,0,0,0.04)",transition:"all .3s",
              }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.08)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
                <div style={{position:"relative",height:200,overflow:"hidden"}}>
                  <img src={p.img} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s"}}/>
                  {p.coming && <div style={{position:"absolute",top:12,right:12,background:"#8B1A1A",color:"#fff",padding:"5px 12px",borderRadius:6,fontSize:"0.68rem",fontWeight:700}}>🔥 قريباً</div>}
                </div>
                <div style={{padding:"20px"}}>
                  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.3rem",fontWeight:500,marginBottom:4}}>{p.name}</h3>
                  <p style={{fontSize:"0.78rem",color:"#8B7355",marginBottom:12}}>{p.location}</p>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12,borderTop:"1px solid rgba(0,0,0,0.05)"}}>
                    <div>
                      <div style={{fontSize:"0.65rem",color:"#8B7355"}}>يبدأ من</div>
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.1rem",color:"#8B1A1A",fontWeight:600}}>{p.price}</div>
                    </div>
                    <div style={{width:32,height:32,borderRadius:8,background:"rgba(139,26,26,0.06)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",color:"#8B1A1A"}}>↓</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT DETAILS ── */}
      {PROJECTS.map((p,pi)=>(
        <section key={p.id} id={p.id} style={{background:pi%2===0?"#FAFAF7":"#F4F1EC"}}>
          {/* Header bar */}
          <div style={{
            padding:"20px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",
            borderBottom:"1px solid rgba(0,0,0,0.05)",background:pi%2===0?"#F4F1EC":"#FAFAF7",
          }}>
            <div>
              <p style={{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.2em",color:"#8B1A1A",marginBottom:4}}>PALM HILLS</p>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:500}}>{p.name}</h2>
            </div>
            {p.coming ? (
              <div style={{padding:"8px 20px",border:"1px solid #8B1A1A",color:"#8B1A1A",fontSize:"0.8rem",fontWeight:700,borderRadius:8,animation:"pulse 2s infinite"}}>🔥 إطلاق قريباً</div>
            ) : (
              <div style={{display:"flex",gap:24}}>
                {[{v:p.price,l:"السعر"},{v:p.payment,l:"السداد"}].map((s,i)=>(
                  <div key={i} style={{textAlign:"left"}}>
                    <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.1rem",color:"#8B1A1A"}}>{s.v}</div>
                    <div style={{fontSize:"0.68rem",color:"#8B7355"}}>{s.l}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="project-detail-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:"60vh"}}>
            {/* Image */}
            <div className="project-img-wrap" style={{position:"relative",overflow:"hidden",minHeight:"45vw",order:pi%2===0?1:2}}>
              <img src={p.img} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",inset:0,transition:"transform .7s"}}
                onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.03)")}
                onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}/>
              {p.coming && <div style={{position:"absolute",top:20,right:20,background:"#8B1A1A",color:"#fff",padding:"6px 14px",borderRadius:8,fontSize:"0.7rem",fontWeight:700}}>🔥 قريباً</div>}
            </div>

            {/* Info */}
            <div className="project-info" style={{padding:"48px 44px",display:"flex",flexDirection:"column",justifyContent:"center",order:pi%2===0?2:1}}>
              <p style={{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.2em",color:"#8B1A1A",marginBottom:12}}>PALM HILLS DEVELOPMENTS</p>
              <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:500,marginBottom:6}}>{p.name}</h3>
              <p style={{fontSize:"0.8rem",color:"#8B7355",letterSpacing:"0.1em",marginBottom:20}}>{p.location}</p>
              <div style={{width:32,height:2,background:"#8B1A1A",borderRadius:2,marginBottom:20}}/>
              <p style={{fontSize:"0.92rem",color:"#666",lineHeight:1.9,marginBottom:24}}>{p.desc}</p>

              {/* Features */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:24}}>
                {p.features.map((f,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:8,fontSize:"0.82rem",color:"#555"}}>
                    <div style={{width:6,height:6,borderRadius:"50%",background:"#8B1A1A",flexShrink:0}}/>
                    {f}
                  </div>
                ))}
              </div>

              {/* Units */}
              {p.units && (
                <div style={{marginBottom:24,background:"rgba(139,26,26,0.03)",borderRadius:10,padding:16,border:"1px solid rgba(139,26,26,0.06)"}}>
                  {p.units.map((u,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:i<p.units!.length-1?"1px solid rgba(0,0,0,0.04)":"none"}}>
                      <span style={{fontSize:"0.82rem",fontWeight:600}}>{u.type}</span>
                      <span style={{fontSize:"0.82rem",color:"#8B1A1A",fontWeight:600}}>{u.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <button onClick={()=>scroll("contact")} style={{
                  padding:"14px",background:"#8B1A1A",color:"#fff",border:"none",borderRadius:8,
                  fontWeight:700,fontSize:"0.82rem",cursor:"pointer",fontFamily:"'Almarai',sans-serif",
                }}>سجّل الآن</button>
                <a href={`${WA}?text=${encodeURIComponent(`مرحباً، أنا مهتم بـ ${p.name} من Palm Hills`)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{padding:"14px",background:"#25D366",color:"#fff",borderRadius:8,fontWeight:700,fontSize:"0.82rem",textAlign:"center",textDecoration:"none"}}>
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── ABOUT ── */}
      <section style={{background:"#1a1a1a"}}>
        <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:"50vh"}}>
          <div className="about-img" style={{position:"relative",overflow:"hidden",minHeight:"40vw"}}>
            <img src="/images/palm-hills-aerial.jpg" alt="Palm Hills" style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",inset:0}}/>
          </div>
          <div className="about-text" style={{padding:"56px 48px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <p style={{fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.25em",color:"#C8A97E",marginBottom:12}}>PALM HILLS DEVELOPMENTS</p>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:500,color:"#fff",lineHeight:1.15,marginBottom:16}}>
              أكثر من 55 عاماً<br/>من التميز العقاري
            </h2>
            <div style={{width:32,height:2,background:"#8B1A1A",borderRadius:2,marginBottom:20}}/>
            <p style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.45)",lineHeight:1.9,marginBottom:28}}>
              Palm Hills Developments واحدة من أكبر المطورين العقاريين في مصر والشرق الأوسط. مدرجة في بورصة لندن ومصر مع أكثر من 35 مشروعاً متكاملاً.
            </p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              {[{v:"35+",l:"مشروع"},{v:"55+",l:"سنة خبرة"},{v:"15,000+",l:"عميل"},{v:"LSE",l:"بورصة لندن"}].map((s,i)=>(
                <div key={i} style={{padding:"16px",background:"rgba(255,255,255,0.04)",borderRadius:10,border:"1px solid rgba(255,255,255,0.06)"}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:600,color:"#C8A97E"}}>{s.v}</div>
                  <div style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.3)",marginTop:2}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="contact-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:"60vh"}}>
          <div className="contact-dark" style={{background:"#8B1A1A",padding:"56px 48px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <p style={{fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.25em",color:"rgba(255,255,255,0.5)",marginBottom:12}}>تواصل معنا</p>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"2.2rem",fontWeight:500,color:"#fff",lineHeight:1.15,marginBottom:16}}>
              ابدأ رحلتك<br/>نحو الساحل
            </h2>
            <p style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.55)",lineHeight:1.9,marginBottom:32}}>
              سجّل بياناتك وهنتواصل معاك خلال 24 ساعة بأحدث الأسعار والعروض.
            </p>
            <a href={`tel:${PHONE}`} dir="ltr" style={{
              fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:600,
              color:"#fff",textDecoration:"none",marginBottom:20,
            }}>0111 732 2733</a>
            <div style={{display:"flex",gap:12}}>
              <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع Palm Hills الساحلية")}`}
                target="_blank" rel="noopener noreferrer"
                style={{padding:"12px 24px",background:"#25D366",color:"#fff",fontWeight:700,fontSize:"0.78rem",textDecoration:"none",borderRadius:8}}>
                💬 واتساب
              </a>
              <a href={`tel:${PHONE}`} style={{padding:"12px 24px",border:"1px solid rgba(255,255,255,0.3)",color:"#fff",fontWeight:700,fontSize:"0.78rem",textDecoration:"none",borderRadius:8}}>
                📞 اتصل الآن
              </a>
            </div>
          </div>
          <div className="contact-form-wrap" style={{background:"#F4F1EC",padding:"56px 48px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <p style={{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.2em",color:"#8B1A1A",marginBottom:8}}>سجّل بياناتك</p>
            <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:500,marginBottom:6}}>أحصل على أفضل سعر</h3>
            <p style={{fontSize:"0.78rem",color:"#8B7355",marginBottom:24}}>فريقنا المتخصص في خدمتك</p>
            <LeadForm subject="Lead — Palm Hills (Contact V1)" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#1a1a1a",padding:"20px 40px 80px"}}>
        <div className="footer-inner" style={{display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:18,height:18,background:"#8B1A1A",transform:"rotate(45deg)"}}/>
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:"0.85rem",letterSpacing:"0.15em",color:"#C8A97E"}}>PALM HILLS</span>
          </div>
          <span style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.2)"}}>© 2026 Palm Hills Developments | وكيل معتمد</span>
        </div>
      </footer>

      {/* ── EOI POPUP ── */}
      {showPopup && (
        <div style={{position:"fixed",inset:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(6px)"}}>
          <div style={{background:"#fff",maxWidth:420,width:"100%",borderRadius:16,overflow:"hidden",boxShadow:"0 25px 80px rgba(0,0,0,0.3)"}}>
            <div style={{background:"#8B1A1A",padding:"24px 28px",color:"#fff",position:"relative"}}>
              <button onClick={()=>setShowPopup(false)} style={{position:"absolute",top:12,left:16,background:"none",border:"none",color:"rgba(255,255,255,0.6)",fontSize:"1.2rem",cursor:"pointer"}}>✕</button>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                <span style={{fontSize:"1.2rem"}}>🔥</span>
                <span style={{fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.2em",opacity:0.7}}>إطلاق جديد</span>
              </div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:500,lineHeight:1.15}}>أرض ديزني<br/><span style={{fontWeight:700}}>سجّل للحجز المبكر</span></h2>
            </div>
            <div style={{background:"#1a1a1a",padding:"10px 28px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <div style={{width:7,height:7,borderRadius:"50%",background:"#4ade80",animation:"pulse 1.5s infinite"}}/>
                <span style={{fontSize:"0.68rem",fontWeight:700,color:"#fff"}}>نجمع EOI حالياً</span>
              </div>
              <span style={{fontSize:"0.62rem",color:"rgba(255,255,255,0.35)"}}>Palm Hills</span>
            </div>
            <div style={{padding:"24px 28px"}}>
              {popupSent ? (
                <div style={{textAlign:"center",padding:"2rem 0"}}>
                  <div style={{fontSize:"2.5rem",marginBottom:10}}>✅</div>
                  <p style={{fontWeight:700}}>تم التسجيل!</p>
                  <p style={{fontSize:"0.78rem",color:"#8B7355",marginTop:6}}>هنتواصل معاك قريباً</p>
                  <button onClick={()=>setShowPopup(false)} style={{marginTop:14,padding:"10px 28px",background:"#8B1A1A",color:"#fff",border:"none",fontWeight:700,cursor:"pointer",borderRadius:8,fontFamily:"'Almarai',sans-serif"}}>إغلاق</button>
                </div>
              ) : (
                <form onSubmit={submitPopup}>
                  <style>{`.pop-inp::placeholder{color:#8B7355}.pop-inp:focus{border-color:#8B1A1A!important}`}</style>
                  <p style={{fontSize:"0.78rem",color:"#8B7355",marginBottom:14,lineHeight:1.7}}>سجّل اهتمامك الآن وكن من أوائل المحجوزين</p>
                  {[{ph:"الاسم الكريم *",key:"name"},{ph:"رقم الهاتف *",key:"phone"}].map(f=>(
                    <input key={f.key} className="pop-inp" placeholder={f.ph}
                      value={(popupForm as any)[f.key]}
                      onChange={e=>setPopupForm({...popupForm,[f.key]:e.target.value})} required
                      type={f.key==="phone"?"tel":"text"}
                      style={{
                        width:"100%",padding:"13px 16px",marginBottom:10,background:"#f8f5f0",
                        border:"1px solid rgba(139,115,85,0.15)",borderRadius:8,fontSize:"0.85rem",
                        outline:"none",fontFamily:"'Almarai',sans-serif",transition:"all .2s",
                        direction:f.key==="phone"?"ltr":"rtl",color:"#1a1a1a",
                      }}/>
                  ))}
                  <button type="submit" disabled={popupLoading} style={{
                    width:"100%",padding:"14px",background:"#8B1A1A",color:"#fff",border:"none",borderRadius:8,
                    fontWeight:700,fontSize:"0.82rem",cursor:"pointer",fontFamily:"'Almarai',sans-serif",
                    opacity:popupLoading?0.7:1,
                  }}>{popupLoading?"...":"🔥 سجّل اهتمامك الآن"}</button>
                  <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بأرض ديزني من Palm Hills")}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{display:"block",marginTop:8,padding:"12px",background:"#25D366",color:"#fff",fontWeight:700,fontSize:"0.75rem",textAlign:"center",textDecoration:"none",borderRadius:8}}>
                    💬 واتساب مباشرة
                  </a>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FLOAT BUTTONS */}
      <div className="float-btns" style={{position:"fixed",bottom:80,left:24,zIndex:50,display:"flex",flexDirection:"column",gap:10}}>
        <a href={`tel:${PHONE}`} style={{width:48,height:48,borderRadius:12,background:"#8B1A1A",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(139,26,26,0.3)",textDecoration:"none"}}>
          <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#fff"}}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
        <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع Palm Hills الساحلية")}`}
          target="_blank" rel="noopener noreferrer"
          style={{width:48,height:48,borderRadius:12,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(37,211,102,0.3)",textDecoration:"none"}}>
          <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#fff"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      {/* MOBILE BAR */}
      <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:40,display:"grid",gridTemplateColumns:"1fr 1fr"}}>
        <a href={`tel:${PHONE}`} style={{padding:"16px",background:"#8B1A1A",color:"#fff",fontWeight:700,fontSize:"0.78rem",textAlign:"center",textDecoration:"none"}}>📞 اتصل الآن</a>
        <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع Palm Hills الساحلية")}`}
          target="_blank" rel="noopener noreferrer"
          style={{padding:"16px",background:"#25D366",color:"#fff",fontWeight:700,fontSize:"0.78rem",textAlign:"center",textDecoration:"none"}}>
          💬 واتساب
        </a>
      </div>
    </div>
  )
}
