 

import React, { useState } from "react";

export default function App() {
  // المنتجات الأساسية (يمكن تركها فارغة لأننا سنختار حسب التخصيص)
  const [cart, setCart] = useState([]);

  // حالات خيارات المنتج
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [shape, setShape] = useState("");
  const [stitch, setStitch] = useState("");
  const [model, setModel] = useState("");

  // مثال: أسعار حسب نوع الخنّاط
  const prices = {
    azbi: 3500,
    gaznir: 4200,
    basha: 5000,
    afsninger: 4800,
    other: 4000,
  };

  const handleAddToCart = () => {
    if (!type || !color || !shape || !stitch) {
      return alert("الرجاء اختيار جميع الخيارات قبل الإضافة للسلة!");
    }

    const price = prices[type] || prices["other"];
    const productName = `${type} - ${color} - ${stitch} - ${shape}`;

    const newProduct = { id: Date.now(), name: productName, price, qty: 1 };
    setCart([...cart, newProduct]);

    // إعادة تعيين الخيارات بعد الإضافة
    setType(""); setColor(""); setShape(""); setStitch(""); setModel("");
  };

  const updateQty = (id, qty) => {
    setCart(cart.map(item => item.id === id ? {...item, qty} : item).filter(item => item.qty > 0));
  };

  const checkout = () => {
    if (cart.length === 0) return alert("السلة فارغة!");
    let summary = "تفاصيل الطلب:\n";
    cart.forEach(item => summary += `- ${item.name} × ${item.qty} = ${item.price * item.qty} MRU\n`);
    summary += `\nالمجموع الكلي: ${cart.reduce((a,b)=>a+b.price*b.qty,0)} MRU`;
    alert(summary + "\n\n✅ تم إرسال الطلب، سنتواصل معك قريبًا!");
    setCart([]);
  };

  return (
    <div style={{ fontFamily: "Cairo, sans-serif", padding: "20px", backgroundColor: "#f8fafc" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#0078b7" }}>🩵 متجر الدراعة الموريتانية 🩵</h1>
      </header>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* قسم خيارات المنتج */}
        <div style={{ flex: 3, background: "white", borderRadius: 10, padding: 15, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>اختر نوع الخنّاط:</h2>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="">-- اختر --</option>
            <option value="azbi">أزبي</option>
            <option value="gaznir">گازنير</option>
            <option value="basha">الباشا</option>
            <option value="afsninger">أفسنيگر</option>
            <option value="other">أخنّاط عرض 160م/أجمان/أشگه</option>
          </select>

          <h2>اختر اللون:</h2>
          <select value={color} onChange={e => setColor(e.target.value)}>
            <option value="">-- اختر --</option>
            <option value="white">أبيض</option>
            <option value="green">أخضر</option>
            <option value="sigeh">سيگه</option>
            <option value="sigehMixed">سيگه أبلاه</option>
          </select>

          <h2>اختر الشكل:</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {[...Array(92)].map((_, i) => (
              <img 
                key={i}
                src={`shapes/${i+1}.jpg`} 
                alt={`شكل ${i+1}`}
                onClick={() => setShape(`شكل ${i+1}`)}
                style={{ width: 60, margin: 5, cursor: "pointer", border: shape === `شكل ${i+1}` ? "2px solid blue" : "1px solid gray" }}
              />
            ))}
          </div>

          <h2>اختر نوع الخياطة:</h2>
          <select value={stitch} onChange={e => setStitch(e.target.value)}>
            <option value="">-- اختر --</option>
            <option value="damwa">داموا وتقلاگ</option>
            <option value="simple">سيمبل</option>
            <option value="lahbeel">لحبيل</option>
            <option value="handmade">أخياطة للأيدي</option>
          </select>

          <h2>نماذج من الخياطة:</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {/* ضع صور النماذج هنا */}
          </div>

          <button onClick={handleAddToCart} style={{ marginTop: 10, backgroundColor: "#0078b7", color: "#fff", padding: "8px 12px", borderRadius: 5 }}>🛒 أضف إلى السلة</button>
        </div>

        {/* قسم السلة */}
        <div style={{ flex: 1, background: "white", borderRadius: "10px", padding: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>🛍️ السلة ({cart.length})</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map(item => (
              <li key={item.id} style={{ borderBottom: "1px solid #eee", padding: "5px 0" }}>
                {item.name} × 
                <input type="number" min="1" value={item.qty} style={{ width: "40px", margin: "0 5px" }} onChange={e=>updateQty(item.id, parseInt(e.target.value))} />
                = {item.price*item.qty} MRU
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>المجموع: {cart.reduce((a,b)=>a+b.price*b.qty,0)} MRU</p>
          <button onClick={checkout} style={{ width: "100%", backgroundColor: "#00993f", color: "white", padding: "8px", borderRadius: "5px", marginTop: "10px" }}>إتمام الطلب</button>
        </div>
      </div>
    </div>
  );
}