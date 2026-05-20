export default function ThankYou() {
  return (
    <main dir="rtl" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem", fontFamily:"Cairo,sans-serif", background:"#F8F5F0" }}>
      <div style={{ textAlign:"center", maxWidth:400 }}>
        <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>✅</div>
        <h1 style={{ fontSize:"1.8rem", fontWeight:700, marginBottom:"0.5rem", color:"#1C1917" }}>تم الإرسال!</h1>
        <p style={{ color:"#6B6560", marginBottom:"2rem", fontSize:"0.9rem" }}>سيتواصل معك فريقنا خلال ٢٤ ساعة</p>
        <div style={{ border:"1px solid rgba(28,25,23,0.1)", padding:"20px", marginBottom:"20px", textAlign:"right" }}>
          <a href="tel:+201117322733" style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #eee", textDecoration:"none", color:"#1C1917" }}>
            <span style={{ fontWeight:700 }} dir="ltr">01117322733</span>
            <span style={{ fontSize:"0.75rem", color:"#6B6560" }}>اتصال مباشر</span>
          </a>
          <a href="https://wa.me/201117322733" target="_blank" rel="noopener noreferrer" style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", textDecoration:"none" }}>
            <span style={{ fontWeight:700, color:"#25D366" }}>واتساب</span>
            <span style={{ fontSize:"0.75rem", color:"#6B6560" }}>رد فوري</span>
          </a>
        </div>
        <a href="/" style={{ display:"inline-block", background:"#8B1A1A", color:"white", padding:"12px 32px", fontWeight:700, fontSize:"0.85rem", textDecoration:"none" }}>
          العودة للرئيسية
        </a>
      </div>
    </main>
  )
}
