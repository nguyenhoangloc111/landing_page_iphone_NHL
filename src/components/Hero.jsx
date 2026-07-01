import React, { useState, useEffect } from "react";
import imageIphone1 from "../assets/iphone.webp";
import imageIphone2 from "../assets/iphone_color.webp";
import imageIphone3 from "../assets/iphone_color1.webp";

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = [imageIphone1, imageIphone2, imageIphone3];

  // Tự động chuyển ảnh sau mỗi 4 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero-section py-5 text-center">
      <div className="container">
        {/* Phần Text Nội dung */}
        <div className="position-relative mb-5" style={{ zIndex: 1 }}>
          <p className="fw-bold text-uppercase mb-2" style={{ color: "var(--accent)", letterSpacing: "0.2em" }}>
            Siêu phẩm tương lai
          </p>
          <h1 className="display-3 mb-3 fw-bold">iPhone 17 Pro Max.<br />Titanium Nguyên Khối.</h1>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "600px", color: "var(--text-muted)" }}>
            Sở hữu Chip A19 Pro 2nm và Camera Thấu Kính Lỏng. Trải nghiệm Apple Intelligence đỉnh cao.
          </p>
          <a href="#register" className="btn btn-dark px-5 py-3 rounded-pill fw-bold">
            Đăng ký đặt trước
          </a>
        </div>

        {/* Phần Slider 3D tối ưu Responsive */}
        <div 
          className="w-100 mx-auto interactive-3d-box" 
          style={{ maxWidth: "900px", perspective: "1000px" }}
          onMouseMove={(e) => {
            if (window.innerWidth > 768) {
              const box = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - box.left) / box.width - 0.5;
              const y = (e.clientY - box.top) / box.height - 0.5;
              e.currentTarget.style.transform = `rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
            }
          }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "rotateY(0) rotateX(0)"; }}
        >
          {/* Dùng aspect-ratio thay cho height cứng để tránh trống box khi co nhỏ */}
          <div className="position-relative" style={{ aspectRatio: "16/9", width: "100%" }}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="iPhone 17 Pro Max"
                className="img-slide position-absolute top-0 start-0 w-100 h-100"
                style={{ 
                  objectFit: "contain", 
                  opacity: currentIdx === index ? 1 : 0,
                  transition: "opacity 0.8s ease-in-out"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section { overflow: hidden; background-color: var(--bg-body); color: var(--text-main); }
        
        @media (min-width: 769px) {
          .interactive-3d-box {
            transition: transform 0.4s ease-out;
            will-change: transform;
          }
        }

        .img-slide { will-change: opacity; }
        
        /* Đảm bảo chữ hiển thị tốt trên nền sáng/tối */
        .display-3 { color: var(--text-main); }
      `}</style>
    </section>
  );
}