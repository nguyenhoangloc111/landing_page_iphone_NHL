import React from "react";

export default function Header({ theme, onToggleTheme }) {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark sticky-top py-2 custom-neon-navbar"
      style={{
        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(25px)",
        backgroundColor: "var(--navbar-bg)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "sticky",
        top: 0,
        width: "100%",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 10 }}>
        {/* LOGO: Phát sáng Gradient chuyển màu liên tục */}
        <a
          className="navbar-brand fw-bold d-flex align-items-center gap-2 custom-brand-glow"
          href="/"
        >
          <i className="bi bi-apple"></i>
          <span className="fw-bold fs-6 tracking-wider text-uppercase">
            iPhone 17 Pro Max
          </span>
        </a>

        {/* Nút Hamburger Menu cho Mobile */}
        <button
          className="navbar-toggler border-0 shadow-none custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Danh sách điều hướng */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-md-4 py-3 py-md-0">
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#features">
                Tính năng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#specifications">
                Thông số kỹ thuật
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#gallery">
                Hình ảnh
              </a>
            </li>
          </ul>

          {/* NÚT CTA CHÍNH: Phát sáng cực đỉnh, đổi màu liên tục và Phóng to khi Hover */}
          <div className="d-flex align-items-center gap-2 mt-2 mt-md-0 pt-2 pt-md-0 border-top border-white border-opacity-10 border-md-0">
            <button
              type="button"
              className="btn btn-outline-light btn-sm theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <i
                className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"} me-2`}
              ></i>
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <a
              href="#register"
              className="btn btn-ultimate-cta px-4 py-2 fw-bold w-100 w-md-auto text-center text-uppercase"
            >
              Đặt trước ngay
            </a>
          </div>
        </div>
      </div>

      {/* HỆ THỐNG CSS DYNAMIC ANIMATIONS CHUYỂN ĐỘNG LIÊN TỤC */}
      <style>{`
        /* 1. HIỆU ỨNG VIỀN KHUNG NAV CHẠY ĐỘNG VÔ HẠN */
        .custom-neon-navbar {
          box-shadow: 0 10px 30px var(--shadow), inset 0 -1px 0 rgba(255, 255, 255, 0.05);
        }
        
        /* Đường viền neon chạy dưới chân navbar */
        .custom-neon-navbar::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #00f2fe, #4facfe, #9b51e0, #00f2fe);
          background-size: 300% 100%;
          animation: waveGlowMove 6s linear infinite;
        }
        
        /* 2. LOGO PHÁT SÁNG VÀ BIẾN ĐỔI SẮC ĐỘ */
        .custom-brand-glow {
          background: linear-gradient(135deg, #00f2fe 0%, #9b51e0 50%, #00f2fe 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 8px rgba(0, 242, 254, 0.6));
          animation: waveGlowMove 4s linear infinite;
          transition: transform 0.3s ease;
        }
        
        .custom-brand-glow:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 15px rgba(155, 81, 224, 0.9));
        }

        /* 3. ĐƯỜNG LINK HOVER SÓNG NEON CHẠY TỪ TRÁI SANG PHẢI */
        .custom-nav-link {
          color: var(--nav-link-color) !important;
          font-size: 14px;
          font-weight: 500;
          opacity: 0.75;
          position: relative;
          padding: 6px 0 !important;
          transition: all 0.3s ease;
        }

        .custom-nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(90deg, #00f2fe, #9b51e0);
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        }

        .custom-nav-link:hover {
          opacity: 1 !important;
          color: #00f2fe !important;
          text-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
        }

        .custom-nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        /* 4. SIÊU NÚT BẤM CTA ĐỈNH CAO (ULTIMATE CTA) */
        .btn-ultimate-cta {
          background: linear-gradient(135deg, #00f2fe 0%, #9b51e0 50%, #00f2fe 100%) !important;
          background-size: 200% auto !important;
          color: #ffffff !important;
          font-size: 12.5px;
          letter-spacing: 1px;
          border-radius: 30px;
          border: none;
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.4), 0 0 40px rgba(155, 81, 224, 0.2);
          animation: waveGlowMove 3s linear infinite;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }

        .btn-ultimate-cta:hover {
          transform: scale(1.08) translateY(-1px);
          box-shadow: 0 0 30px rgba(0, 242, 254, 0.8), 0 0 60px rgba(155, 81, 224, 0.6);
          filter: brightness(1.15);
        }
        
        .btn-ultimate-cta:active {
          transform: scale(0.96);
        }

        /* --- CÁC ĐỊNH NGHĨA KEYFRAMES CHUYỂN ĐỘNG --- */
        @keyframes waveGlowMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* 5. TỐI ƯU TRÊN ĐIỆN THOẠI (RESPONSIVE) */
        .theme-toggle-btn {
          border-color: rgba(255,255,255,0.24);
          color: var(--nav-link-color);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .theme-toggle-btn:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.2);
          color: var(--nav-link-color);
        }

        @media (max-width: 767.98px) {
          .navbar-collapse {
            background: var(--surface);
            padding: 10px 20px;
            border-radius: 12px;
            margin-top: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .custom-nav-link {
            font-size: 15px;
            padding: 12px 0 !important;
            display: block;
          }
          
          .btn-ultimate-cta {
            padding: 12px 0 !important;
          }
        }
      `}</style>
    </nav>
  );
}
