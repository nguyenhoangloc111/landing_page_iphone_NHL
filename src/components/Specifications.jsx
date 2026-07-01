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
                data-aos="fade-left"
                data-aos-delay={Math.min(index * 40, 200)}
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

        .cream-box-container {
          background: var(--surface-2);
          border: 1px solid var(--border);
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .cream-box-container:hover {
          border-color: #8f734b;
          box-shadow: 0 15px 35px rgba(170, 112, 32, 0.06);
        }
        
        .dynamic-neon-title, .luxury-text-shimmer {
          background: linear-gradient(90deg, #1d1d1f, #8f734b, #1d1d1f);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .spec-ambient-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          top: 0;
          left: -15%;
          background: radial-gradient(circle, rgba(244, 238, 224, 0.3) 0%, rgba(250, 246, 235, 0) 60%);
          filter: blur(100px);
          pointer-events: none;
          z-index: -1;
        }

        .style-spec-row {
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
          border-radius: 12px;
          margin-left: -1rem;
          margin-right: -1rem;
          background-color: transparent;
        }

        .style-spec-row:hover {
          background-color: var(--surface); 
          box-shadow: inset 3px 0 0 0 #8f734b; 
          padding-left: 1.5rem !important; 
        }

        .style-spec-row .spec-label,
        .style-spec-row .spec-value {
          transition: color 0.2s ease;
        }

        .style-spec-row:hover .spec-label {
          color: #1d1d1f !important;
          opacity: 0.9 !important; 
        }

        .style-spec-row:hover .spec-value {
          color: #8f734b !important; 
        }

        /* Mobile optimization: Disable heavy effects */
        @media (max-width: 768px) {
          .spec-ambient-glow {
            display: none !important;
          }

          .dynamic-neon-title, .luxury-text-shimmer {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: unset !important;
            color: var(--text) !important;
          }

          .cream-box-container {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
          }

          .cream-box-container:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
          }

          .style-spec-row:hover {
            box-shadow: none !important;
            background-color: transparent !important;
            padding-left: 1rem !important;
          }

          .style-spec-row .spec-label,
          .style-spec-row .spec-value {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
