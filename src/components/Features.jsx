import React from "react";

// Import ảnh của bạn (đảm bảo đường dẫn chính xác)
import iphoneImage1 from "../assets/2mn.jpg";
import iphoneImage2 from "../assets/camera1.png";
import iphoneImage3 from "../assets/240hz.jpg";

const IPHONE_FEATURES = [
  { imgSrc: iphoneImage1, badge: "Công nghệ 2nm", title: "Chip A19 Pro siêu phân luồng", desc: "Bộ vi xử lý thương mại đầu tiên trên thế giới được chế tạo trên tiến trình 2nm. Tích hợp bộ tăng tốc AI chuyên biệt giúp xử lý mượt mà mọi tác vụ Apple Intelligence thế hệ mới trực tiếp trên thiết bị mà không tốn tài nguyên đám mây." },
  { imgSrc: iphoneImage2, badge: "Bước tiến lịch sử", title: "Hệ thống thấu kính lỏng 100MP", desc: "Không còn cụm camera lồi cồng kềnh. Thấu kính lỏng biến thiên tiêu cự vật lý bằng dòng điện siêu vi, cho phép thay đổi tức hiện thời từ chụp siêu cận (Macro) sang zoom quang học 10x sắc nét tuyệt đối." },
  { imgSrc: iphoneImage3, badge: "Borderless 240Hz", title: "Màn hình vô cực không viền", desc: "Công nghệ tấm nền ẩn camera dưới màn hình hoàn hảo. Tần số quét ProMotion biến thiên thông minh từ 1Hz đến 240Hz tùy thuộc vào nội dung hiển thị, mang lại độ mượt mà vô song nhưng vẫn tiết kiệm pin tối đa." },
];

export default function Features() {
  return (
    <section id="features" className="container py-5 my-5">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12 col-md-8">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "var(--text-main)" }}>Tương lai nằm trong tay bạn.</h2>
          <p className="fs-6 opacity-75" style={{ color: "var(--text-muted)" }}>Khám phá những công nghệ đột phá cốt lõi.</p>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {IPHONE_FEATURES.map((feature, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="feature-card h-100 p-4 p-md-5 d-flex flex-column align-items-start position-relative rounded-4 border" 
                 style={{ 
                   background: "var(--card-bg)", 
                   borderColor: "var(--border)" 
                 }}>
              
              {/* Badge với nền tự động thay đổi */}
              <span className="badge rounded-pill px-3 py-2 mb-4 fw-medium" 
                    style={{ fontSize: "12px", background: "var(--border)", color: "var(--text-main)" }}>
                {feature.badge}
              </span>

              <div className="ratio ratio-16x9 rounded-3 overflow-hidden mb-4 bg-secondary">
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-100 h-100"
                  loading="lazy" 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className="h4 fw-bold mb-3" style={{ color: "var(--text-main)" }}>{feature.title}</h3>
              <p className="mb-0 text-start" style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--text-muted)" }}>
                {feature.desc}
              </p>

              <div className="mt-4 pt-2 small d-flex align-items-center gap-1" style={{ color: "var(--accent)" }}>
                Xem thêm <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        @media (min-width: 769px) {
          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          }
        }
      `}</style>
    </section>
  );
}