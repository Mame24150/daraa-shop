import React, { useState } from "react";

export default function App() {
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [shape, setShape] = useState("");
  const [stitch, setStitch] = useState("");
  const [highlighted, setHighlighted] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [daraa, setDaraa] = useState(""); // الدراعة
  const [deliveryType, setDeliveryType] = useState(""); // التوصيل أو الحضور
  const [time, setTime] = useState(""); // المدة الزمنية

  const merchantNumber = "46228085"; // رقم التاجر

  const handleSendWhatsApp = () => {
    if (!type || !color || !shape || !stitch || !daraa || !deliveryType || !time) {
      return alert("الرجاء اختيار جميع الخيارات قبل الإرسال!");
    }

    const message = `🩵 تفاصيل الطلب:\n- الدراعة: ${daraa}\n- النوع: ${type}\n- اللون: ${color}\n- الشكل: ${shape}\n- نوع الخياطة: ${stitch}\n- طريقة الاستلام: ${deliveryType}\n- المدة الزمنية: ${time}\n\n📞 رقم التاجر: ${merchantNumber}`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/222${merchantNumber}?text=${encodedMsg}`, "_blank");
  };

  return (
    <div style={{ fontFamily: "Cairo, sans-serif", padding: 20, backgroundColor: "#eef6f9", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <header style={{ textAlign: "center", marginBottom: 20, backgroundColor: "#0078b7", color: "white", padding: 15, borderRadius: 10, boxShadow: "0 3px 6px rgba(0,0,0,0.2)" }}>
        <h1>🩵 متجر الدراعة الموريتانية 🩵</h1>
      </header>

      {/* قسم الاختيارات */}
      <div style={{ flex: 1 }}>
        <div style={{ maxWidth: 600, margin: "0 auto", background: "white", borderRadius: 10, padding: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          
          {/* اختيار الدراعة */}
          <h2>اختر الدراعة:</h2>
          <select value={daraa} onChange={e => setDaraa(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
            <option value="">-- اختر --</option>
            <option value="دراعة 6م">دراعة 6م</option>
            <option value="دراعة 7,5م">دراعة 7,5م</option>
            <option value="دراعة 8م">دراعة 8م</option>
            <option value="دراعة 9م">دراعة 9م</option>
            <option value="دراعة 9,5م">دراعة 9,5م</option>
            <option value="دراعة 10م">دراعة 10م</option>
          </select>

          <h2>اختر نوع الخنّاط:</h2>
          <select value={type} onChange={e => setType(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
            <option value="">-- اختر --</option>
            <option value="أزبي">أزبي</option>
            <option value="گازنير">گازنير</option>
            <option value="الباشا">الباشا</option>
            <option value="أفسنيگر">أفسنيگر</option>
            <option value="أخنّاط عرض 160م/أجمان/أشگه">أخنّاط عرض 160م/أجمان/أشگه</option>
          </select>

          <h2>اختر اللون:</h2>
          <select value={color} onChange={e => setColor(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
            <option value="">-- اختر --</option>
            <option value="أبيض">أبيض</option>
            <option value="أخضر">أخضر</option>
            <option value="سيگه">سيگه</option>
            <option value="سيگه أبلاه">سيگه أبلاه</option>
          </select>

          <h2>اختر الشكل:</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[...Array(92)].map((_, i) => {
              const isHighlighted = highlighted === i;
              return (
                <img
                  key={i}
                  src={`${process.env.PUBLIC_URL}/shapes/${i+1}.jpg`}
                  alt={`شكل ${i+1}`}
                  onClick={() => { 
                    setHighlighted(i); 
                    setShape(`شكل ${i+1}`); 
                    setModalImage(`${process.env.PUBLIC_URL}/shapes/${i+1}.jpg`);
                  }}
                  style={{
                    width: isHighlighted ? 180 : 100,
                    height: isHighlighted ? 180 : 100,
                    objectFit: "cover",
                    borderRadius: 10,
                    cursor: "pointer",
                    border: shape === `شكل ${i+1}` ? "3px solid #0078b7" : "1px solid gray",
                    boxShadow: isHighlighted ? "0 0 20px #0078b7" : "none",
                    transition: "0.2s",
                  }}
                />
              );
            })}
          </div>
          {shape && <p style={{ marginTop: 10, fontWeight: "bold" }}>✅ الشكل المختار: {shape}</p>}

          <h2>اختر نوع الخياطة:</h2>
          <select value={stitch} onChange={e => setStitch(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
            <option value="">-- اختر --</option>
            <option value="داموا وتقلاگ">داموا وتقلاگ</option>
            <option value="سيمبل">سيمبل</option>
            <option value="لحبيل">لحبيل</option>
            <option value="أخياطة للأيدي">أخياطة للأيدي</option>
          </select>

          {/* اختيار طريقة التسليم */}
          <h2>طريقة استلام الطلب:</h2>
          <select value={deliveryType} onChange={e => setDeliveryType(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
            <option value="">-- اختر --</option>
            <option value="سوف يأتي لاستلامه بنفسه">سوف يأتي لاستلامه بنفسه</option>
            <option value="يريد التوصيل">يريد التوصيل</option>
          </select>

          {/* المدة الزمنية */}
          <h2>حدد المدة الزمنية (بالساعات أو الأيام):</h2>
          <input
            type="text"
            placeholder="مثلاً: خلال 3 أيام"
            value={time}
            onChange={e => setTime(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 20 }}
          />

          <button
            onClick={handleSendWhatsApp}
            style={{ backgroundColor: "#0078b7", color: "#fff", padding: "12px 20px", borderRadius: 5, border: "none", cursor: "pointer", width: "100%", fontSize: 16 }}
          >
            🛒 أرسل الطلب للتاجر عبر WhatsApp
          </button>
        </div>
      </div>

      <footer style={{ textAlign: "center", marginTop: 30, padding: 15, backgroundColor: "#0078b7", color: "white", borderRadius: 10, boxShadow: "0 3px 6px rgba(0,0,0,0.2)" }}>
        📞 رقم التاجر للتواصل: <span style={{ fontWeight: "bold", fontSize: 18 }}>{merchantNumber}</span>
      </footer>

      {/* نافذة تكبير الصورة */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
            cursor: "pointer",
          }}
        >
          <img
            src={modalImage}
            alt="تكبير الشكل"
            style={{ maxWidth: "80%", maxHeight: "80%", borderRadius: 10 }}
          />
        </div>
      )}
    </div>
  );
}