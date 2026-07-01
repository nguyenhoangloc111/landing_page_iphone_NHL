import React from "react";

// Cấu trúc dữ liệu hình ảnh được import
import iphoneImage1 from "../assets/2mn.jpg";
import iphoneImage2 from "../assets/camera1.png";
import iphoneImage3 from "../assets/240hz.jpg";

const IPHONE_FEATURES = [
  {
    imgSrc: iphoneImage1,
    badge: "Công nghệ 2nm",
    title: "Chip A19 Pro siêu phân luồng",
    desc: "Bộ vi xử lý thương mại đầu tiên trên thế giới được chế tạo trên tiến trình 2nm. Tích hợp bộ tăng tốc AI chuyên biệt giúp xử lý mượt mà mọi tác vụ Apple Intelligence thế hệ mới trực tiếp trên thiết bị mà không tốn tài nguyên đám mây.",
  },
  {
    imgSrc: iphoneImage2,
    badge: "Bước tiến lịch sử",
    title: "Hệ thống thấu kính lỏng 100MP",
    desc: "Không còn cụm camera lồi cồng kềnh. Thấu kính lỏng biến thiên tiêu cự vật lý bằng dòng điện siêu vi, cho phép thay đổi tức hiện thời từ chụp siêu cận (Macro) sang zoom quang học 10x sắc nét tuyệt đối.",
  },
  {
    imgSrc: iphoneImage3,
    badge: "Borderless 240Hz",
    title: "Màn hình vô cực không viền",
    desc: "Công nghệ tấm nền ẩn camera dưới màn hình hoàn hảo. Tần số quét ProMotion biến thiên thông minh từ 1Hz đến 240Hz tùy thuộc vào nội dung hiển thị, mang lại độ mượt mà vô song nhưng vẫn tiết kiệm pin tối đa.",
  },
];

// ... (Giữ nguyên các import)

export default function Features() {
  return (
    <section id="features" className="container py-5 my-5">
      {/* Tiêu đề: Hiệu ứng trượt xuống và phóng to nhẹ */}
      <div
        className="row justify-content-center text-center mb-5"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="col-12 col-md-8">
          <h2
            className="display-5 fw-bold mb-3 tracking-tight dynamic-neon-title"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Tương lai nằm trong tay bạn.
          </h2>
          <p
            className="fs-6 opacity-75"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Khám phá những công nghệ đột phá cốt lõi giúp tái định nghĩa hoàn
            toàn tiêu chuẩn của một chiếc điện thoại thông minh cao cấp.
          </p>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {IPHONE_FEATURES.map((feature, index) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            key={index}
            // Combo animation: Mỗi card lật lên từ phía dưới
            data-aos="flip-up"
            data-aos-duration="1200"
            data-aos-delay={index * 200} // Tăng delay để tạo hiệu ứng cascade
            data-aos-anchor-placement="top-bottom"
          >
            <div
              className="feature-card h-100 p-4 p-md-5 d-flex flex-column align-items-start justify-content-between position-relative overflow-hidden rounded-4 animate-feature-card"
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.transform = "translateY(-8px) rotate(1deg)"; // Thêm xoay nhẹ khi hover
                card.style.borderColor = "rgba(197, 160, 89, 0.35)";
                card.style.boxShadow =
                  "0 30px 60px rgba(139, 115, 85, 0.12), 0 0 40px rgba(244, 239, 225, 0.6)";
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = "translateY(0) rotate(0deg)";
                card.style.borderColor = "rgba(234, 226, 201, 0.6)";
                card.style.boxShadow = "0 15px 35px rgba(139, 115, 85, 0.06)";
              }}
            >
              {/* Nội dung bên trong: Dùng thêm AOS cho từng phần tử nhỏ */}
              <div
                className="w-100 position-relative"
                style={{ zIndex: 2 }}
                data-aos="fade-up"
                data-aos-delay={300 + index * 200}
              >
                <span
                  className="badge rounded-pill px-3 py-2 mb-4 fw-medium"
                  style={{
                    fontSize: "12px",
                    background: "var(--surface-2)",
                    color: "var(--accent)",
                  }}
                >
                  {feature.badge}
                </span>

                <div
                  className="ratio ratio-16x9 rounded-3 overflow-hidden mb-4 border"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <img
                    src={feature.imgSrc}
                    alt={feature.title}
                    className="w-100 h-100 feature-img"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />
                </div>

                <h3 className="h4 fw-bold mb-3">{feature.title}</h3>
                <p
                  className="mb-0 text-start"
                  style={{
                    fontSize: "14.5px",
                    lineHeight: "1.6",
                    color: "var(--text-muted)",
                  }}
                >
                  {feature.desc}
                </p>
              </div>

              <div
                className="mt-4 pt-2 small d-flex align-items-center gap-1 style-arrow"
                data-aos="fade-right"
                data-aos-delay={500 + index * 200}
              >
                Xem thêm <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* ... giữ nguyên CSS của bạn ... */
        .animate-feature-card {
           transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease !important;
        }
      `}</style>
    </section>
  );
}
