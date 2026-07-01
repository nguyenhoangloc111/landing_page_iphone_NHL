import React from "react";

export default function Footer() {
  return (
    <footer
      className="py-5 mt-5 native-footer position-relative overflow-hidden"
      style={{
        /* Hiệu ứng kính mờ xuyên thấu trên nền tối ngả vàng nhẹ */
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        isolation: "isolate",
      }}
    >
      {/* Đèn nền Ambient màu hổ phách/vàng cát dịu nhẹ tạo chiều sâu */}
      <div className="footer-ambient-glow" aria-hidden="true"></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Khối 1: Các cột liên kết phụ hữu ích (Responsive Links) */}
        <div className="row g-4 mb-5" style={{ fontSize: "12.5px" }}>
          <div className="col-6 col-md-3">
            <h6
              className="fw-semibold mb-3 tracking-tight"
              style={{ fontSize: "13.5px", color: "var(--text)" }}
            >
              Khám phá iPhone
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a href="#hero" className="footer-link">
                  iPhone 17 Pro Max
                </a>
              </li>
              <li>
                <a href="#specifications" className="footer-link">
                  iPhone 17 Pro
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  iPhone 17
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Phụ kiện MagSafe
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6
              className="fw-semibold mb-3 tracking-tight"
              style={{ fontSize: "13.5px", color: "var(--text)" }}
            >
              Dịch vụ & Hỗ trợ
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a href="/" className="footer-link">
                  Bảo hành AppleCare+
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Hướng dẫn sử dụng
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Tìm trung tâm bảo hành
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Trạng thái đơn hàng
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6
              className="fw-semibold mb-3 tracking-tight"
              style={{ fontSize: "13.5px", color: "var(--text)" }}
            >
              Chính sách mua hàng
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a href="/" className="footer-link">
                  Thu cũ đổi mới (Trade-in)
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Trả góp 0% qua thẻ
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Chính sách hoàn trả
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Giao hàng tận nơi
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6
              className="fw-semibold mb-3 tracking-tight"
              style={{ fontSize: "13.5px", color: "var(--text)" }}
            >
              Kết nối với chúng tôi
            </h6>
            <div className="d-flex gap-3 fs-5 mt-2">
              <a href="/" className="footer-icon-link" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/" className="footer-icon-link" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="/" className="footer-icon-link" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/" className="footer-icon-link" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Khối 3: Bản quyền và thông tin pháp lý cuối cùng */}
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
          style={{ fontSize: "11.5px", color: "var(--text-muted)" }}
        >
          <div>
            <span className="me-2">
              Bản quyền © 2026 NGUYEN HOANG LOC BTEC FPT.
            </span>
            <span className="d-block d-md-inline opacity-50">
              Thiết kế tối ưu bởi Frontend ReactJS & Bootstrap 5.
            </span>
          </div>
          <div className="d-flex flex-wrap gap-3 list-unstyled mb-0 legal-wrapper">
            <a href="/" className="footer-link-secondary">
              Chính sách bảo mật
            </a>
            <span className="text-white text-opacity-10 d-none d-sm-inline">
              |
            </span>
            <a href="/" className="footer-link-secondary">
              Điều khoản sử dụng
            </a>
            <span className="text-white text-opacity-10 d-none d-sm-inline">
              |
            </span>
            <a href="/" className="footer-link-secondary">
              Sơ đồ trang web
            </a>
          </div>
        </div>
      </div>

      {/* TOÀN BỘ CSS STYLES ĐÃ ĐƯỢC ĐỒNG BỘ MÀU CÁT AMBIENT */}
      <style>{`
        /* 1. Hiệu ứng chuyển động cho các đường link chính */
        .footer-link {
          color: var(--text-muted);
          text-decoration: none;
          opacity: 0.75;
          display: inline-block;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          transform-origin: left;
          will-change: transform, opacity;
        }

        .footer-link:hover {
          color: #f5efe0;
          opacity: 1;
          transform: translateX(4px); /* Trượt nhẹ sang phải tạo cảm giác phản hồi cao cấp */
        }

        /* 2. Hiệu ứng mềm mại cho các Icon mạng xã hội */
        .footer-icon-link {
          color: var(--text);
          opacity: 0.6;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          display: inline-block;
          will-change: transform, opacity;
        }

        .footer-icon-link:hover {
          color: #8f734b; /* Đổi sang màu vàng đồng đặc trưng khi hover */
          opacity: 1;
          transform: translateY(-3px);
        }

        /* 3. Đường link phụ ở chân trang (Legal Links) */
        .footer-link-secondary {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-link-secondary:hover {
          color: #f5efe0;
          text-decoration: underline;
        }

        /* 4. Lớp Đèn nền Ambient màu vàng Desert Titanium dịu mượt ẩn góc phải */
        .footer-ambient-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          bottom: -20%;
          right: -10%;
          background: radial-gradient(circle, rgba(143, 115, 75, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
          filter: blur(70px);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </footer>
  );
}
