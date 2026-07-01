import React from "react";

const SPEC_DETAILS = [
  { label: "Màn hình", value: "6.9 inch, Super Retina XDR OLED, thiết kế không viền hoàn hảo, HDR10, Dolby Vision" },
  { label: "Tần số quét", value: "ProMotion biến thiên thông minh từ 1Hz đến 240Hz" },
  { label: "Bộ vi xử lý", value: "Apple A19 Pro (tiến trình 2nm) với 6 nhân CPU, 8 nhân GPU và 32 nhân Neural Engine" },
  { label: "Hệ thống Camera", value: "Camera chính 100MP (Thấu kính lỏng), Ultra-wide 48MP, Telephoto 48MP hỗ trợ Zoom quang học 10x" },
  { label: "Chất liệu vỏ", value: "Titanium cấp độ 5 kết hợp mặt lưng kính mờ vát cong ma trận" },
  { label: "Bộ nhớ trong", value: "256GB | 512GB | 1TB | 2TB" },
  { label: "Kết nối", value: "Băng tần siêu rộng 6G Ready, Wi-Fi 7 (802.11be), Bluetooth 5.4, Ultra-Wideband v3" },
  { label: "Bảo mật", value: "Biometric AI (Cảm biến FaceID ẩn dưới màn hình & Vân tay siêu âm cạnh viền)" },
];

export default function Specifications() {
  return (
    <section id="specifications" className="container py-5 my-5">
      <div className="row g-5 align-items-start">
        {/* Cột trái */}
        <div className="col-12 col-lg-5 sticky-lg-top" style={{ top: "120px" }}>
          <div className="p-4 p-md-5 rounded-4 cream-box-container">
            <span className="display-6 fw-bold mb-3 d-block premium-gradient-text">Thông số kỹ thuật</span>
            <h2 className="display-4 fw-black mb-3" style={{ fontWeight: 800 }}>Sức mạnh<br />Đơn giản hóa.</h2>
            <p className="mb-5 text-muted">Mọi linh kiện trên iPhone 17 Pro Max đều được tối ưu hóa cho hiệu năng đỉnh cao trong thân máy mỏng nhẹ.</p>
            
            <div className="row g-4 pt-4 border-top">
              <div className="col-6">
                <div className="display-4 fw-black" style={{ color: "#8f734b" }}>2nm</div>
                <p className="small fw-bold mt-1">Kiến trúc 2nm đầu tiên</p>
              </div>
              <div className="col-6">
                <div className="display-4 fw-black" style={{ color: "#8f734b" }}>240Hz</div>
                <p className="small fw-bold mt-1">Tần số quét siêu mượt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cột phải */}
        <div className="col-12 col-lg-7">
          {SPEC_DETAILS.map((spec, index) => (
            <div key={index} className="row py-4 px-3 style-spec-row">
              <div className="col-12 col-sm-4 fw-bold mb-1" style={{ opacity: 0.6 }}>{spec.label}</div>
              <div className="col-12 col-sm-8 fw-semibold">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cream-box-container { background: var(--surface-2); border: 1px solid var(--border); }
        .premium-gradient-text {
          background: linear-gradient(90deg, #1d1d1f, #8f734b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .style-spec-row { border-bottom: 1px solid rgba(143, 115, 75, 0.15); transition: 0.3s; }

        /* Chỉ áp dụng hiệu ứng hover phức tạp trên màn hình lớn */
        @media (min-width: 992px) {
          .style-spec-row:hover { background-color: var(--surface); box-shadow: inset 3px 0 0 0 #8f734b; }
        }

        /* Mobile Optimization */
        @media (max-width: 768px) {
          .display-4 { font-size: 2.5rem !important; }
          .style-spec-row { padding: 1.5rem 0 !important; }
        }
      `}</style>
    </section>
  );
}