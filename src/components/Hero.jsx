import React, { useEffect, useState } from "react";
// Import các ảnh sản phẩm của bạn
import imageIphone1 from "../assets/iphone.webp";
import imageIphone2 from "../assets/iphone_color.webp";
import imageIphone3 from "../assets/iphone_color1.webp";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = [imageIphone1, imageIphone2, imageIphone3];

  // 1. Theo dõi tọa độ chuột để làm hiệu ứng tương tác 3D mượt mà (chỉ desktop)
  useEffect(() => {
    // Disable mouse tracking on mobile to improve performance
    if (window.matchMedia("(max-width: 768px)").matches) return;
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 2. Tự động chuyển ảnh sau mỗi 4 giây
  useEffect(() => {
    const handleNextClick = () => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    };
    const timer = setInterval(handleNextClick, 4000);
    return () => clearInterval(timer);
  }, [images.length]); // Chạy lại timer mỗi khi images thay đổi
  const handlePrev = () => {
    setCurrentIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);
  };

  // Hàm chuyển đến ảnh tiếp theo (Mũi tên phải)
  const handleNext = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  return (
    <section
      className="container text-center d-flex flex-column align-items-center justify-content-center pt-5 position-relative overflow-hidden"
      style={{ minHeight: "95vh" }}
    >
      {/* CSS SYSTEM: Hệ thống chuyển động liên tục và phát sáng đồng bộ */}
      <style>{`
        /* --- HIỆU ỨNG CHỮ GRADIENT CHUYỂN ĐỘNG LIÊN TỤC VÔ HẠN --- */
        .dynamic-neon-title {
          font-weight: 900;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #0b0c10 20%, #00f2fe 45%, #9b51e0 55%, #0b0c10 80%);
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textGlowFlow 8s linear infinite;
        }

        /* --- NHÃN SUBTITLE QUÉT SÁNG --- */
        .tech-subtitle {
          letter-spacing: 0.3em; 
          font-size: 13px;
          background: linear-gradient(90deg, #9b51e0, #00f2fe, #9b51e0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textGlowFlow 4s linear infinite;
        }

        /* --- NÚT BẤM CÔNG NGHỆ CHUYỂN SẮC --- */
        .btn-hero-prime {
          background: linear-gradient(135deg, #00f2fe 0%, #9b51e0 50%, #00f2fe 100%) !important;
          background-size: 200% auto !important;
          box-shadow: 0 4px 20px rgba(0, 242, 254, 0.25), 0 0 30px rgba(155, 81, 224, 0.1);
          animation: textGlowFlow 4s linear infinite;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          fontSize: '15.5px';
        }

        .btn-hero-prime:hover {
          transform: scale(1.06) translateY(-3px) !important;
          box-shadow: 0 12px 30px rgba(0, 242, 254, 0.5), 0 0 40px rgba(155, 81, 224, 0.4);
          filter: brightness(1.1);
        }

        /* --- LINK HOVER CHUYỂN MÀU --- */
        .hero-link-effect {
          color: #005f73;
          transition: all 0.3s ease;
        }
        .hero-link-effect:hover {
          color: #00f2fe !important;
          text-shadow: 0 0 8px rgba(0, 242, 254, 0.4);
        }

        /* --- NÚT ĐIỀU HƯỚNG MŨI TÊN TRÊN CONTAINER --- */
        .slider-arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          z-index: 100;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .slider-arrow-btn:hover {
          background: rgba(0, 242, 254, 0.8);
          color: #fff;
          border-color: #00f2fe;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.5);
          transform: translateY(-50%) scale(1.1);
        }
        
        .slider-arrow-btn.btn-left { left: 20px; }
        .slider-arrow-btn.btn-right { right: 20px; }

        /* Ẩn nhẹ mũi tên khi chuột không ở trong vùng container ảnh để tăng trải nghiệm điện ảnh */
        .slider-wrapper .slider-arrow-btn { opacity: 0.6; }
        .slider-wrapper:hover .slider-arrow-btn { opacity: 1; }

        /* --- KEYFRAMES HOẠT HỌA DIỄN TIẾN --- */
        @keyframes textGlowFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

        /* Overwrite transition của hộp 3D để không xung đột với AOS */
        .interactive-3d-box {
          transition: transform 0.5s cubic-bezier(0.15, 0.85, 0.35, 1), box-shadow 0.3s, border-color 0.3s !important;
        }
      `}</style>

      {/* Ánh sáng Cyber mờ chạy ngầm theo chuột */}
      <div
        className="position-absolute rounded-circle opacity-25"
        style={{
          width: "600px",
          height: "600px",
          top: "15%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          background:
            "radial-gradient(circle, rgba(0, 242, 254, 0.25) 0%, rgba(155, 81, 224, 0.1) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
          transition: "transform 0.4s cubic-bezier(0.15, 0.85, 0.35, 1)",
        }}
      ></div>

      <div
        className="row justify-content-center w-100 position-relative"
        style={{ zIndex: 1 }}
      >
        <div className="col-12 col-lg-10 col-xl-9">
          {/* Nhãn Subtitle công nghệ - Bay từ trên xuống */}
          <p
            className="fw-bold mb-3 text-uppercase tech-subtitle"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Siêu phẩm tương lai
          </p>

          {/* TIÊU ĐỀ CHÍNH - Bay từ dưới lên */}
          <h1
            className="display-3 mb-3 dynamic-neon-title"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            iPhone 17 Pro Max.
            <br />
            Titanium Nguyên Khối.
          </h1>

          {/* Đoạn mô tả ngắn - Bay từ dưới lên trễ hơn */}
          <p
            className="lead mx-auto mb-4 opacity-75 hero-description"
            style={{
              maxWidth: "650px",
              fontSize: "18.5px",
              lineHeight: "1.6",
              color: "var(--text-muted)",
            }}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            Sở hữu Chip A19 Pro kiến trúc 2nm đỉnh cao kết hợp hệ thống Camera
            Thấu Kính Lỏng biến thiên vật lý. Trải nghiệm trí tuệ nhân tạo Apple
            Intelligence toàn diện hơn bao giờ hết.
          </p>

          {/* Khu vực nút tương tác - Xuất hiện sau cùng */}
          <div
            className="d-sm-flex gap-3 justify-content-center align-items-center mb-5"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="600"
          >
            <a
              href="#register"
              className="btn py-3 px-5 fw-bold text-white border-0 rounded-pill mb-3 mb-sm-0 d-block d-sm-inline-block position-relative overflow-hidden btn-hero-prime"
            >
              Đăng ký đặt trước
            </a>

            <a
              href="#features"
              className="btn btn-link text-decoration-none d-inline-flex align-items-center justify-content-center gap-1 py-2 fw-semibold hero-link-effect"
              onMouseOver={(e) => {
                e.currentTarget.querySelector("i").style.transform =
                  "translateX(4px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.querySelector("i").style.transform =
                  "translateX(0)";
              }}
            >
              Tìm hiểu thêm{" "}
              <i
                className="bi bi-chevron-right"
                style={{ fontSize: "11px", transition: "transform 0.3s" }}
              ></i>
            </a>
          </div>
        </div>
      </div>

      {/* KHU VỰC HIỂN THỊ KHUNG ẢNH 3D TƯƠNG TÁC - Phóng to dần lên cực đẹp */}
      <div
        className="w-100 mt-2 position-relative slider-wrapper"
        style={{
          maxWidth: "940px",
          perspective: "1400px",
          zIndex: 2,
        }}
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        {/* Vệt hào quang quét động phía sau khung ảnh */}
        <div
          className="position-absolute start-50 top-50 translate-middle rounded-circle"
          style={{
            width: "100%",
            height: "80%",
            background:
              "radial-gradient(ellipse, rgba(0, 242, 254, 0.15) 0%, rgba(155, 81, 224, 0.05) 50%, transparent 70%)",
            transform: `translate(-50%, -50%) translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
            filter: "blur(60px)",
            zIndex: -1,
            transition: "transform 0.4s ease-out",
          }}
        ></div>

        {/* --- NÚT MŨI TÊN ĐIỀU HƯỚNG SẢN PHẨM --- */}
        <button
          className="slider-arrow-btn btn-left"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <button
          className="slider-arrow-btn btn-right"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <i className="bi bi-chevron-right"></i>
        </button>

        {/* Khối hộp chứa ảnh chuyển động góc nghiêng 3D */}
        <div
          className="rounded-4 overflow-hidden border border-secondary border-opacity-10 p-1 position-relative interactive-3d-box"
          style={{
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(16px)",
            boxShadow:
              "0 30px 70px rgba(0, 0, 0, 0.18), inset 0 1px 1px rgba(255,255,255,0.4)",
            transform: `rotateX(${mousePos.y * -0.1}deg) rotateY(${mousePos.x * 0.1}deg)`,
          }}
        >
          {/* Cửa sổ hiển thị ảnh */}
          <div
            className="position-relative w-100 overflow-hidden rounded-3"
            style={{ height: "500px" }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`iPhone 17 Pro Max View ${index + 1}`}
                className="img-fluid w-100 d-block position-absolute top-0 start-0"
                loading="eager"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  opacity: currentIdx === index ? 1 : 0,
                  transform: currentIdx === index ? "scale(1)" : "scale(1.04)",
                  transition:
                    "opacity 1s ease-in-out, transform 1s ease-in-out",
                  zIndex: currentIdx === index ? 3 : 1,
                }}
              />
            ))}
          </div>

          {/* Thanh điều hướng Dots dạt bóng mờ thủy tinh */}
          <div
            className="position-absolute start-50 translate-middle-x d-flex gap-2"
            style={{
              bottom: "25px",
              zIndex: 99,
              background: "rgba(0, 0, 0, 0.35)",
              padding: "8px 16px",
              borderRadius: "30px",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIdx(index)}
                className="border-0 rounded-circle p-0"
                style={{
                  width: "9px",
                  height: "9px",
                  background:
                    currentIdx === index
                      ? "#00f2fe"
                      : "rgba(255, 255, 255, 0.4)",
                  boxShadow: currentIdx === index ? "0 0 10px #00f2fe" : "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Đổ bóng vật lý dưới chân slider khối */}
        <div
          className="position-absolute start-50 translate-middle-x w-75"
          style={{
            height: "40px",
            background:
              "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.08) 0%, rgba(0,0,0,0) 70%)",
            zIndex: -1,
            bottom: "-25px",
          }}
        ></div>
      </div>
    </section>
  );
}
