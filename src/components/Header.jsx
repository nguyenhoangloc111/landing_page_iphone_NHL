import React from "react";

export default function Header({ theme, onToggleTheme }) {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark sticky-top custom-navbar"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "var(--navbar-bg)",
        zIndex: 9999,
        position: "sticky",
        top: 0,
        width: "100%",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="/">
          <i style={{ color: "var(--accent)"}} className="bi bi-apple"></i>
          <span className="fs-6 text-uppercase" style={{ color: "var(--accent)"}}>iPhone 17 Pro Max</span>
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-md-4">
            {["Tính năng", "Thông số kỹ thuật", "Hình ảnh"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link custom-nav-link" href={`#${item.toLowerCase().replace(" ", "-")}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
            {/* TOGGLE THEME */}
            <button
              className="btn btn-sm theme-toggle-btn"
              onClick={onToggleTheme}
            >
              <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"} me-1`}></i>
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            
            {/* CTA */}
            <a href="#register" className="btn btn-ultimate-cta px-4 fw-bold text-uppercase">
              Đặt trước
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .custom-nav-link {
          color: var(--nav-link-color) !important;
          font-size: 14px;
          opacity: 0.8;
          transition: 0.3s;
        }
        .custom-nav-link:hover { opacity: 1; color: var(--accent) !important; }

        .btn-ultimate-cta {
          background: var(--accent) !important;
          color: #fff !important;
          font-size: 12px;
          border-radius: 30px;
          transition: 0.3s ease;
          border: none;
        }
        .btn-ultimate-cta:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .theme-toggle-btn {
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-main);
          background: rgba(255,255,255,0.05);
          transition: 0.3s;
        }
        .theme-toggle-btn:hover { background: rgba(255,255,255,0.1); }

        @media (max-width: 767.98px) {
          .navbar-collapse {
            background: var(--surface);
            padding: 15px;
            border-radius: 12px;
            margin-top: 10px;
            border: 1px solid rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </nav>
  );
}