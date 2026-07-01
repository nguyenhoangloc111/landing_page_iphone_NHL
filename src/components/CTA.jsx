import React, { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });
    // Giả lập API
    setTimeout(() => {
      setStatus({
        loading: false,
        success: true,
        message: "Đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất.",
      });
      setFormData({ name: "", email: "", phone: "" });
    }, 1200);
  };

  return (
    <section id="register" className="container py-5 my-5 text-center" style={{ maxWidth: "650px" }}>
      {/* TIÊU ĐỀ: Bỏ AOS phức tạp */}
      <h2 className="display-5 fw-bold mb-4">Đăng ký nhận thông tin</h2>

      <div className="p-4 p-md-5 rounded-4 main-cta-card" 
           style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
        
        <h3 className="h4 fw-bold mb-3">Sẵn sàng nâng cấp?</h3>
        <p className="mb-4 text-muted" style={{ fontSize: "15px" }}>
          Đăng ký để nhận thông tin sớm nhất về iPhone 17 Pro Max.
        </p>

        <form onSubmit={handleSubmit} className="text-start">
          <div className="mb-3">
            <input type="text" name="name" value={formData.name} onChange={handleChange}
                   className="form-control py-3" placeholder="Họ và tên" required />
          </div>
          <div className="mb-3">
            <input type="email" name="email" value={formData.email} onChange={handleChange}
                   className="form-control py-3" placeholder="Email" required />
          </div>
          <div className="mb-4">
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                   className="form-control py-3" placeholder="Số điện thoại" required />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-3 fw-bold" disabled={status.loading}>
            {status.loading ? "Đang xử lý..." : "Đăng ký ngay"}
          </button>
        </form>

        {status.message && (
          <div className="mt-4 alert alert-success border-0">{status.message}</div>
        )}
      </div>

      <style>{`
        /* Tối ưu hóa CSS: Chỉ dùng hiệu ứng nhẹ cho Desktop */
        @media (min-width: 769px) {
          .main-cta-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .main-cta-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
        }
        
        /* Mobile: Tắt hoàn toàn transition phức tạp để giảm tải GPU */
        @media (max-width: 768px) {
          .main-cta-card { transition: none !important; }
        }
      `}</style>
    </section>
  );
}