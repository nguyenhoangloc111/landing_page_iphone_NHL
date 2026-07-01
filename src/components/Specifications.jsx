import React from "react";

// Định nghĩa dữ liệu thông số chi tiết để dễ quản lý và render sạch sẽ
const SPEC_DETAILS = [
  {
    label: "Màn hình",
    value:
      "6.9 inch, Super Retina XDR OLED, thiết kế không viền hoàn hảo, HDR10, Dolby Vision",
  },
  {
    label: "Tần số quét",
    value: "ProMotion biến thiên thông minh từ 1Hz đến 240Hz",
  },
  {
    label: "Bộ vi xử lý",
    value:
      "Apple A19 Pro (tiến trình 2nm) với 6 nhân CPU, 8 nhân GPU và 32 nhân Neural Engine",
  },
  {
    label: "Hệ thống Camera",
    value:
      "Camera chính 100MP (Thấu kính lỏng), Ultra-wide 48MP, Telephoto 48MP hỗ trợ Zoom quang học 10x",
  },
  {
    label: "Chất liệu vỏ",
    value: "Titanium cấp độ 5 kết hợp mặt lưng kính mờ vát cong ma trận",
  },
  { label: "Bộ nhớ trong", value: "256GB | 512GB | 1TB | 2TB" },
  {
    label: "Kết nối",
    value:
      "Băng tần siêu rộng 6G Ready, Wi-Fi 7 (802.11be), Bluetooth 5.4, Ultra-Wideband v3",
  },
  {
    label: "Bảo mật",
    value:
      "Biometric AI (Cảm biến FaceID ẩn dưới màn hình & Vân tay siêu âm cạnh viền)",
  },
];

export default function Specifications() {
  return (
    <section
      id="specifications"
      className="container py-5 my-5 position-relative spec-container"
      style={{ isolation: "isolate" }}
    >
      {/* Lớp phông nền Ambient Glow khuếch tán dịu nhẹ */}
      <div className="spec-ambient-glow" aria-hidden="true"></div>

      <div className="row g-5 align-items-start">
        {/* Cột trái: Tiêu đề & Các con số ấn tượng (Dùng AOS fade-right trượt từ trái sang) */}
        <div
          className="col-12 col-lg-5 sticky-lg-top spec-left-sticky"
          style={{ top: "120px", zIndex: 2 }}
        >
          <div
            className="p-4 p-md-5 rounded-4 cream-box-container"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <span
              className="display-6 fw-bold mb-3 d-block tracking-tight premium-gradient-text dynamic-neon-title"
              style={{ letterSpacing: "-0.02em", paddingBottom: "10px" }}
            >
              Thông số kỹ thuật
            </span>

            {/* Tiêu đề lớn chính với hiệu ứng sóng màu Luxury */}
            <h2
              className="display-4 fw-black tracking-tight luxury-text-shimmer mb-3"
              style={{ fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              Sức mạnh mạnh mẽ.
              <br />
              Đơn giản hóa.
            </h2>

            {/* Đoạn văn mô tả */}
            <p
              className="mb-5 fw-medium"
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "var(--text-muted)",
              }}
            >
              Mọi linh kiện, từng bảng mạch trên iPhone 17 Pro Max đều được tối
              ưu hóa để mang lại hiệu năng đỉnh cao nhất trong một thân máy mỏng
              nhẹ không tưởng.
            </p>

            {/* Khối Big Stats - Zoom nhẹ lên khi cuộn đến */}
            <div
              className="row g-4 pt-4 spec-stats-wrapper"
              style={{ borderTop: "1px solid rgba(143, 115, 75, 0.2)" }}
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <div className="col-6 stat-item">
                <div
                  className="display-4 fw-black tracking-tight luxury-text-shimmer"
                  style={{ fontWeight: 800 }}
                >
                  2nm
                </div>
                <p
                  className="small fw-bold mt-1 mb-0"
                  style={{ color: "var(--text-muted)", opacity: 0.8 }}
                >
                  Kiến trúc vi xử lý đầu tiên trên thế giới
                </p>
              </div>
              <div className="col-6 stat-item">
                <div
                  className="display-4 fw-black tracking-tight luxury-text-shimmer"
                  style={{ fontWeight: 800 }}
                >
                  240Hz
                </div>
                <p
                  className="small fw-bold mt-1 mb-0"
                  style={{ color: "var(--text-muted)", opacity: 0.8 }}
                >
                  Tần số quét màn hình siêu mượt mà
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cột phải: Bảng liệt kê thông số chi tiết (Từng dòng trượt mượt mà bằng fade-left kèm delay) */}
        <div className="col-12 col-lg-7">
          <div className="ps-lg-4 spec-right-list">
            {SPEC_DETAILS.map((spec, index) => (
              <div
                key={index}
                className="row py-4 px-3 align-items-start style-spec-row"
                /* --- CẤU HÌNH AOS CHO TỪNG DÒNG THÔNG SỐ --- */
                data-aos="fade-left"
                data-aos-delay={index * 80} // Tạo hiệu ứng xếp hàng thác nước (staggered) cực kỳ mượt mà
                data-aos-trigger-hidden="true"
                style={{
                  borderBottom: "1px solid rgba(234, 226, 201, 0.5)",
                }}
              >
                {/* Tên thông số (Nhãn) */}
                <div
                  className="col-12 col-sm-4 fw-bold mb-2 mb-sm-0 spec-label"
                  style={{
                    fontSize: "15.5px",
                    letterSpacing: "-0.01em",
                    color: "var(--text-muted)",
                    opacity: 0.6,
                  }}
                >
                  {spec.label}
                </div>

                {/* Giá trị thông số */}
                <div
                  className="col-12 col-sm-8 fw-semibold spec-value"
                  style={{
                    fontSize: "16.5px",
                    lineHeight: "1.5",
                    color: "var(--text)",
                  }}
                >
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOÀN BỘ CSS STYLES ĐƯỢC TINH GỌN VÀ TỐI ƯU HOÁ VỚI AOS */}
      <style>{`
        .spec-container {
          overflow: visible;
        }

        /* Khối box trái: màu trắng ngả vàng ấm cao cấp */
        .cream-box-container {
          background: var(--surface-2);
          border: 1px solid var(--border);
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .cream-box-container:hover {
          border-color: #8f734b;
          box-shadow: 0 20px 40px rgba(170, 112, 32, 0.08);
        }
        
        /* Dải màu chuyển động tuần hoàn đồng bộ tông màu Warm Luxury */
        .dynamic-neon-title, .luxury-text-shimmer {
          background: linear-gradient(90deg, #1d1d1f, #8f734b, #b59a73, #8f734b, #1d1d1f);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textGlowFlow 6s ease-in-out infinite;
        }

        @keyframes textGlowFlow {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 200% center; }
        }
        
        /* Đèn nền Ambient khuếch tán dải màu Desert ấm dịu */
        .spec-ambient-glow {
          position: absolute;
          width: 750px;
          height: 750px;
          top: -10%;
          left: -20%;
          background: radial-gradient(circle, rgba(244, 238, 224, 0.6) 0%, rgba(250, 246, 235, 0) 70%);
          filter: blur(120px);
          pointer-events: none;
          z-index: -1;
          animation: ambientPulseSpec 12s ease-in-out infinite alternate;
        }

        @keyframes ambientPulseSpec {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          100% { transform: translate(40px, -20px) scale(1.08); opacity: 0.9; }
        }

        /* Định vị cấu trúc hàng bảng thông số */
        .style-spec-row {
          will-change: transform, opacity;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1) !important;
          border-radius: 14px;
          margin-left: -1rem;
          margin-right: -1rem;
          background-color: rgba(0, 0, 0, 0);
        }

        /* --- HIỆU ỨNG HOVER BẢNG THÔNG SỐ SẴN CÓ --- */
        .style-spec-row:hover {
          background-color: var(--surface); 
          box-shadow: inset 4px 0 0 0 #8f734b; 
          padding-left: 1.5rem !important; 
        }

        .style-spec-row .spec-label,
        .style-spec-row .spec-value {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .style-spec-row:hover .spec-label {
          color: #1d1d1f !important;
          opacity: 0.9 !important; 
        }

        .style-spec-row:hover .spec-value {
          transform: translateX(6px); 
          color: #8f734b !important; 
        }
      `}</style>
    </section>
  );
}
