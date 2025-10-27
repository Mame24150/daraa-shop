import React, { useState } from "react";

export default function App() {
  const products = [
    { id: 1, name: "دراعة تقليدية فاخرة", price: 3500, image: "https://via.placeholder.com/250x250.png?text=دراعة+1" },
    { id: 2, name: "دراعة عصرية", price: 4200, image: "https://via.placeholder.com/250x250.png?text=دراعة+2" },
    { id: 3, name: "دراعة ملكية", price: 5200, image: "https://via.placeholder.com/250x250.png?text=دراعة+3" },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : item));
    } else {
      setCart([...cart, {...product, qty: 1}]);
    }
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

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: 3 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {products.map(p => (
              <div key={p.id} style={{ background: "white", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", padding: "10px", width: "230px", textAlign: "center" }}>
                <img src={p.image} alt={p.name} style={{ width: "100%", borderRadius: "8px" }} />
                <h3>{p.name}</h3>
                <p style={{ color: "#555" }}>السعر: {p.price} MRU</p>
                <button onClick={() => addToCart(p)} style={{ backgroundColor: "#0078b7", color: "white", border: "none", padding: "8px 10px", borderRadius: "5px", cursor: "pointer" }}>🛒 أضف إلى السلة</button>
              </div>
            ))}
          </div>
        </div>

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