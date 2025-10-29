import React, { useState } from "react";
const BASE_URL = "https://Mame24150.github.io/daraa-shop";

export default function App() {
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [shape, setShape] = useState("");
  const [stitch, setStitch] = useState("");
  const [highlightedShape, setHighlightedShape] = useState(null);
  const [highlightedModel, setHighlightedModel] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [daraa, setDaraa] = useState(""); // الدراعة
  const [deliveryType, setDeliveryType] = useState(""); // التوصيل أو الحضور
  const [time, setTime] = useState(""); // المدة الزمنية
  const [shapeImageUrl, setShapeImageUrl] = useState("");
  const [modelImageUrl, setModelImageUrl] = useState("");

  const merchantNumber = "20034958"; // ✅ رقم التاجر الجديد

  // رابط GitHub Pages بعد النشر
  const BASE_URL = "https://username.github.io/repo-name"; 

  const handleSendWhatsApp = () => {
    if (!type || !color || !shape || !stitch || !daraa || !deliveryType || !time) {
      return alert("الرجاء اختيار جميع الخيارات قبل الإرسال!");
    }

    const message = `🩵 تفاصيل الطلب:
- الدراعة: ${daraa}
- النوع: ${type}
- اللون: ${color}
- الشكل: ${shape}
- نوع الخياطة: ${stitch}
- طريقة الاستلام: ${deliveryType}
- المدة الزمنية: ${time}

📸 شكل الخنط:
${shapeImageUrl}

🧵 نموذج الخياطة:
${modelImageUrl}`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/222${merchantNumber}?text=${encodedMsg}`, "_blank");
  };

  return (
    <div
      style={{
        fontFamily: "Cairo, sans-serif",
        padding: 20,
        backgroundColor: "#eef6f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          backgroundColor: "#0078b7",
          color: "white",
          padding: 15,
          borderRadius: 10,
          boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="شعار المتجر 1"
          style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }}
        />
        <h1 style={{ textAlign: "center", flex: 1 }}>🩵 💎غـايتـك(𝒢𝒶𝒾𝓉𝒶𝓀)🩵</h1>
        <img
          src={`${process.env.PUBLIC_URL}/logo2.png`}
          alt="شعار المتجر 2"
          style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }}
        />
      </header>

      {/* اختيار الدراعة */}
      <div style={{ flex: 1, maxWidth: 600, margin: "0 auto", background: "white", borderRadius: 10, padding: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <h2>اختر الدراعه(𝓒𝓱𝓸𝓲𝓼𝓲𝓼𝓮𝔃 𝓵𝓪 𝓭𝓻𝓪𝓪ʿ𝓪🧵)</h2>
        <select value={daraa} onChange={(e) => setDaraa(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
          <option value="">-- اختر --</option>
          <option value="دراعة 6م">دراعة 6م(6m)</option>
          <option value="دراعة 7,5م">دراعة 7,5م(7,5m)</option>
          <option value="دراعة 8م">دراعة 8م(8m)</option>
          <option value="دراعة 9م">دراعة 9م(9m)</option>
          <option value="دراعة 9,5م">دراعة 9,5م(9,5m)</option>
          <option value="دراعة 10م">دراعة 10م(10m)</option>
        </select>

        {/* نوع الخنط */}
        <h2>اختر نوع الخنط: (𝓱𝓸𝓲𝓼𝓲𝓼𝓮𝔃 𝓵𝓮 𝓽𝔂𝓹𝓮 𝓭𝓮 𝓴𝓱𝓷𝓪𝓽 ✨)</h2>
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
          <option value="">-- اختر --</option>
          <option value="أزبي">أزبي(Azbi)</option>
          <option value="گازنير">گازنير(Gaz Neire)</option>
          <option value="الباشا">الباشا(Albacha)</option>
          <option value="أفسنيگر">أفسنيگر(Avestyker)</option>
          <option value="السلطان">السلطان(Soultan)</option>
          <option value="الملك">الملك(Almelik)</option>
          <option value="أخنّاط عرض 160م/أجمان/أشگه">أخنّاط عرض 160م/أجمان/أشگه</option>
        </select>

        {/* اللون */}
        <h2>اختر اللون:(𝓼𝓮𝓵𝓮𝓬𝓽𝓲𝓸𝓷𝓷𝓮𝔃 𝓵𝓪 𝓬𝓸𝓾𝓵𝓮𝓾𝓻 🎨)</h2>
        <select value={color} onChange={(e) => setColor(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
          <option value="">-- اختر --</option>
          <option value="أبيض">أبيض(Blanc)</option>
          <option value="أخضر">أخضر(Vert)</option>
          <option value="سيگه">سيگه(Bleu clair)</option>
          <option value="سيگه أبلاه">سيگه أبلاه</option>
        </select>

        {/* اختيار شكل الخنط */}
        <h2>اختر شكل الخنط</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {[...Array(91)].map((_, i) => {
            const isHighlighted = highlightedShape === i;
            return (
              <img
                key={i}
                src={`${BASE_URL}/shapes/${i + 1}.jpg`}
                alt={`شكل ${i + 1}`}
                onClick={() => {
                  setHighlightedShape(i);
                  setShape(`شكل ${i + 1}`);
                  setShapeImageUrl(`${BASE_URL}/shapes/${i + 1}.jpg`);
                  setModalImage(`${BASE_URL}/shapes/${i + 1}.jpg`);
                }}
                style={{
                  width: isHighlighted ? 180 : 100,
                  height: isHighlighted ? 180 : 100,
                  objectFit: "cover",
                  borderRadius: 10,
                  cursor: "pointer",
                  border: shape === `شكل ${i + 1}` ? "3px solid #0078b7" : "1px solid gray",
                  boxShadow: isHighlighted ? "0 0 20px #0078b7" : "none",
                  transition: "0.2s",
                }}
              />
            );
          })}
        </div>
        {shape && <p style={{ marginTop: 10, fontWeight: "bold" }}>✅ الشكل المختار: {shape}</p>}

        {/* نوع الخياطة */}
        <h2>اختر نوع الخياطة:(𝓒𝓱𝓸𝓲𝓼𝓲𝓼𝓮𝔃 𝓵𝓮 𝓽𝔂𝓹𝓮 𝓭𝓮 𝓬𝓸𝓾𝓽𝓾𝓻𝓮 ✂)</h2>
        <select value={stitch} onChange={(e) => setStitch(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
          <option value="">-- اختر --</option>
          <option value="داموا وتقلاگ">داموا وتقلاگ</option>
          <option value="سيمبل">سيمبل</option>
          <option value="لحبيل">لحبيل</option>
          <option value="أخياطة للأيدي">أخياطة للأيدي</option>
        </select>

        {/* نماذج الخياطة */}
        <h2 style={{ textAlign: "center", fontFamily: "'Pinyon Script', cursive", fontSize: "28px", color: "#0078b7", marginBottom: "20px" }}>
          ✨ نماذج من الخياطة ✨ <br />
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: "24px" }}>(𝓜𝓸𝓭𝑒̀𝓵𝑒𝓼 𝓭𝓮 𝓬𝓸𝓾𝓽𝓾𝓻𝓮 🧶)</span>
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {[...Array(50)].map((_, i) => {
            const isHighlighted = highlightedModel === i;
            return (
              <img
                key={i}
                src={`${BASE_URL}/shapes/lolo/${i + 1}.jpg`}
                alt={`نموذج ${i + 1}`}
                onClick={() => {
                  setHighlightedModel(i);
                  setModelImageUrl(`${BASE_URL}/shapes/lolo/${i + 1}.jpg`);
                  setModalImage(`${BASE_URL}/shapes/lolo/${i + 1}.jpg`);
                }}
                style={{
                  width: isHighlighted ? 180 : 100,
                  height: isHighlighted ? 180 : 100,
                  objectFit: "cover",
                  borderRadius: "15px",
                  cursor: "pointer",
                  border: highlightedModel === i ? "3px solid #0078b7" : "1px solid #ccc",
                  boxShadow: isHighlighted ? "0 0 20px #0078b7" : "none",
                  transition: "all 0.3s ease",
                }}
              />
            );
          })}
        </div>

        {/* طريقة الاستلام */}
        <h2>طريقة استلام الطلب: (𝓜𝓮́𝓽𝓱𝓸𝓭𝓮 𝓭𝓮 𝓵𝓲𝓿𝓻𝓪𝓲𝓼𝓸𝓷 🚚)</h2>
        <select value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
          <option value="">-- اختر --</option>
          <option value="سوف يأتي لاستلامه بنفسه">سوف استلمه بنفسي</option>
          <option value="يريد التوصيل">اريد التوصيل</option>
        </select>

        {/* المدة الزمنية */}
        <h2>حدد المدة الزمنية (بالساعات أو الأيام): (𝓓𝓮́𝓽𝓮𝓻𝓶𝓲𝓷𝓮𝔃 𝓵𝓮 𝓭𝓮́𝓵𝓪𝓲 ⏰)</h2>
        <input type="text" placeholder="مثلاً: خلال 3 أيام" value={time} onChange={(e) => setTime(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 20 }} />

        {/* زر الإرسال */}
        <button onClick={handleSendWhatsApp} style={{ backgroundColor: "#0078b7", color: "#fff", padding: "12px 20px", borderRadius: 5, border: "none", cursor: "pointer", width: "100%", fontSize: 16 }}>
          🛒 أرسل الطلب للتاجر عبر WhatsApp
        </button>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", marginTop: 30, padding: 15, backgroundColor: "#0078b7", color: "white", borderRadius: 10, boxShadow: "0 3px 6px rgba(0,0,0,0.2)" }}>
        📞 رقم التاجر للتواصل: <span style={{ fontWeight: "bold", fontSize: 18 }}>{merchantNumber}</span>
      </footer>

      {/* نافذة تكبير الصورة */}
      {modalImage && (
        <div onClick={() => setModalImage(null)} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 999, cursor: "pointer" }}>
          <img src={modalImage} alt="تكبير الشكل" style={{ maxWidth: "80%", maxHeight: "80%", borderRadius: 10 }} />
        </div>
      )}
    </div>
  );
}
