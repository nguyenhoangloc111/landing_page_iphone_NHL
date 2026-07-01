import React, { useState } from "react";
// Lưu ý: Đảm bảo bạn đã install và init aos ở wrapper/root component (App.js hoặc main.jsx)
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function CTA() {
  // Quản lý trạng thái nhập liệu của form
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  // Quản lý trạng thái xử lý dữ liệu và thông báo kết quả từ API ngoài
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("https://api.example.com/v1/pre-orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          message:
            "Đăng ký nhận thông tin thành công! Chúng tôi sẽ liên hệ sớm nhất khi có lịch mở bán.",
        });
        setFormData({ name: "", email: "", phone: "" });
      } else {
        throw new Error("Máy chủ phản hồi lỗi.");
      }
    } catch (error) {
      setTimeout(() => {
        setStatus({
          loading: false,
          success: true,
          message:
            "✨ [Simulated API Success] Thông tin của bạn đã được ghi nhận vào hệ thống ưu tiên!",
        });
        setFormData({ name: "", email: "", phone: "" });
      }, 1200);
    }
  };

  return (
    <section
      id="register"
      className="container py-5 my-5 text-center"
      style={{ maxWidth: "650px" }}
    >
      {/* CSS STYLES: Tích hợp hiệu ứng Shimmer & AOS Continuous Loop Animations */}
      <style>{`
        .premium-shimmer-main {
          background: linear-gradient(to right, #1d1d1f 0%, #8f734b 50%, #1d1d1f 100%);
          background-size: 100% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          width: 100%;
          transition: all 0.3s ease;
        }

        .premium-shimmer-main:hover {
          letter-spacing: -0.02em !important;
          filter: drop-shadow(0 1px 4px rgba(143, 115, 75, 0.15));
        }

        .premium-shimmer-sub {
          background: linear-gradient(to right, #1d1d1f 0%, #8f734b 50%, #1d1d1f 100%);
          background-size: 100% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
        }

        .main-cta-card:hover .premium-shimmer-sub {
          transform: none;
          filter: brightness(1.05);
        }

        .card-continuous-loop {
          animation: none;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-input::placeholder {
          color: #767679 !important;
          opacity: 0.8;
        }

        /* Mobile optimization: Disable heavy effects */
        @media (max-width: 768px) {
          .premium-shimmer-main {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: unset !important;
            color: var(--text) !important;
            filter: none !important;
          }

          .premium-shimmer-main:hover {
            filter: none !important;
            letter-spacing: normal !important;
          }

          .premium-shimmer-sub {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: unset !important;
            color: var(--text) !important;
          }

          .main-cta-card:hover .premium-shimmer-sub {
            transform: none !important;
            filter: none !important;
          }

          .main-cta-card {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
          }

          .main-cta-card:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
          }
        }
      `}</style>

      {/* TIÊU ĐỀ SECTION - Sử dụng hiệu ứng AOS fade-up */}
      <h2
        data-aos="fade-up"
        data-aos-duration="800"
        className="display-5 fw-bold mb-4 tracking-tight text-center premium-shimmer-main"
        style={{ letterSpacing: "-0.03em" }}
      >
        Đăng ký nhận thông tin mở bán
      </h2>

      {/* CARD CHÍNH - Kết hợp AOS xuất hiện và class chuyển động vĩnh viễn chu kỳ 2s */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
        className="p-5 rounded-4 position-relative overflow-hidden main-cta-card card-continuous-loop"
        style={{
          background:
            "linear-gradient(145deg, var(--surface-2) 0%, var(--surface) 100%)",
          border: "1px solid var(--border)",
          boxShadow:
            "0 20px 40px var(--shadow), 0 0 40px rgba(244, 239, 225, 0.1)",
          transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 25px 50px rgba(139, 115, 85, 0.1)";
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 20px 40px rgba(139, 115, 85, 0.05)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Vệt sáng chạy ngầm màu hổ phách dịu nhẹ (Ambient Light Effect) */}
        <div
          className="position-absolute rounded-circle"
          style={{
            bottom: "-70px",
            left: "-70px",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(234, 213, 163, 0.3) 0%, transparent 70%)",
            filter: "blur(30px)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        ></div>

        {/* TIÊU ĐỀ CARD CON */}
        <h3
          className="display-6 fw-bold mb-3 tracking-tight premium-shimmer-sub"
          style={{ letterSpacing: "-0.02em" }}
        >
          Sẵn sàng nâng cấp?
        </h3>

        <p
          className="mb-4 mx-auto"
          style={{
            maxWidth: "480px",
            fontSize: "15.5px",
            lineHeight: "1.6",
            color: "var(--text-muted)",
            opacity: 0.9,
          }}
        >
          Đăng ký ngay hôm nay để nhận thông báo sớm nhất về ngày mở bán chính
          thức, bảng giá ưu đãi độc quyền và chương trình đặc biệt cho iPhone 17
          Pro Max.
        </p>

        {/* Form đăng ký tối ưu UX */}
        <form
          onSubmit={handleSubmit}
          className="text-start mt-4 position-relative"
          style={{ zIndex: 2 }}
        >
          {/* Ô nhập họ tên */}
          <div className="mb-3" data-aos="fade-up" data-aos-delay="250">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control custom-input py-3 px-4 rounded-3 text-dark"
              placeholder="Họ và tên của bạn"
              required
              style={{
                backgroundColor: "rgba(234, 226, 201, 0.3)",
                borderColor: "rgba(143, 115, 75, 0.15)",
                transition: "all 0.3s ease",
                fontSize: "15px",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#8f734b";
                e.target.style.boxShadow = "0 0 10px rgba(143, 115, 75, 0.2)";
                e.target.style.backgroundColor = "#ffffff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(143, 115, 75, 0.15)";
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = "rgba(234, 226, 201, 0.3)";
              }}
            />
          </div>

          {/* Ô nhập Email */}
          <div className="mb-3" data-aos="fade-up" data-aos-delay="350">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control custom-input py-3 px-4 rounded-3 text-dark"
              placeholder="Địa chỉ Email"
              required
              style={{
                backgroundColor: "rgba(234, 226, 201, 0.3)",
                borderColor: "rgba(143, 115, 75, 0.15)",
                transition: "all 0.3s ease",
                fontSize: "15px",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#8f734b";
                e.target.style.boxShadow = "0 0 10px rgba(143, 115, 75, 0.2)";
                e.target.style.backgroundColor = "#ffffff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(143, 115, 75, 0.15)";
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = "rgba(234, 226, 201, 0.3)";
              }}
            />
          </div>

          {/* Ô nhập Số điện thoại */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="450">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control custom-input py-3 px-4 rounded-3 text-dark"
              placeholder="Số điện thoại liên hệ"
              pattern="[0-9]{10}"
              title="Vui lòng nhập đúng định dạng số điện thoại 10 chữ số"
              required
              style={{
                backgroundColor: "rgba(234, 226, 201, 0.3)",
                borderColor: "rgba(143, 115, 75, 0.15)",
                transition: "all 0.3s ease",
                fontSize: "15px",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#8f734b";
                e.target.style.boxShadow = "0 0 10px rgba(143, 115, 75, 0.2)";
                e.target.style.backgroundColor = "#ffffff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(143, 115, 75, 0.15)";
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = "rgba(234, 226, 201, 0.3)";
              }}
            />
          </div>

          {/* NÚT BẤM GỬI */}
          <button
            type="submit"
            className="btn w-100 py-3 fw-bold text-white border-0 rounded-3 d-flex align-items-center justify-content-center"
            disabled={status.loading}
            style={{
              background: "linear-gradient(135deg, #a1845c 0%, #8f734b 100%)",
              boxShadow: "0 4px 15px rgba(143, 115, 75, 0.2)",
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              fontSize: "16px",
            }}
            onMouseOver={(e) => {
              if (!status.loading) {
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(143, 115, 75, 0.35)";
                e.currentTarget.style.filter = "brightness(1.05)";
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(143, 115, 75, 0.2)";
              e.currentTarget.style.filter = "none";
            }}
            onMouseDown={(e) => {
              if (!status.loading)
                e.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseUp={(e) => {
              if (!status.loading) e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {status.loading ? (
              <span className="d-flex align-items-center justify-content-center gap-2">
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                Đang xử lý thông tin bảo mật...
              </span>
            ) : (
              "Đăng ký giữ chỗ ngay"
            )}
          </button>
        </form>

        {/* TRẠNG THÁI PHẢN HỒI */}
        {status.message && (
          <div
            className={`mt-4 alert text-start border-0 rounded-3`}
            role="alert"
            style={{
              fontSize: "14.5px",
              animation:
                "fadeInUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards",
              lineHeight: "1.5",
              backgroundColor: status.success
                ? "rgba(25, 135, 84, 0.08)"
                : "rgba(220, 53, 69, 0.08)",
              color: status.success ? "#198754" : "#dc3545",
            }}
          >
            <i
              className={`bi ${status.success ? "bi-check-circle-fill" : "bi-exclamation-triangle-fill"} me-2`}
            ></i>
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
}
