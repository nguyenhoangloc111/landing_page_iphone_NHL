import React, { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="social-float-container">
      {/* Cụm Icon mạng xã hội */}
      <div className="social-links">
        <a href="tel:0909xxxxxx" className="social-btn" title="Gọi điện"><i className="bi bi-telephone-fill"></i></a>
        <a href="https://zalo.me/..." className="social-btn zalo" title="Zalo"><i className="bi bi-chat-dots-fill"></i></a>
        <a href="https://facebook.com/..." className="social-btn fb" title="Facebook"><i className="bi bi-facebook"></i></a>
      </div>

      {/* Nút Cuộn trang */}
      <div className="scroll-progress-container" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <svg className="progress-circle" width="50" height="50">
          <circle cx="25" cy="25" r="20" className="bg-circle" />
          <circle cx="25" cy="25" r="20" className="progress-bar" style={{ strokeDashoffset: 126 - (126 * scrollProgress) / 100 }} />
        </svg>
        <span className="arrow">↑</span>
      </div>

      <style>{`
        .social-float-container { position: fixed; bottom: 30px; right: 30px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; align-items: center; }
        
        .social-links { display: flex; flex-direction: column; gap: 10px; margin-bottom: 10px; }
        
        .social-btn { 
          width: 40px; height: 40px; border-radius: 50%; background: #8f734b; color: white;
          display: flex; align-items: center; justify-content: center; text-decoration: none;
          transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .social-btn:hover { transform: scale(1.1); background: #5a5245; }
        .social-btn.zalo { background: #0068ff; }
        .social-btn.fb { background: #1877f2; }

        .scroll-progress-container { cursor: pointer; width: 50px; height: 50px; position: relative; display: flex; align-items: center; justify-content: center; }
        .arrow { position: absolute; font-size: 18px; color: #8f734b; pointer-events: none; }
        .progress-circle { transform: rotate(-90deg); }
        .bg-circle { fill: none; stroke: #eee; stroke-width: 4; }
        .progress-bar { fill: none; stroke: #8f734b; stroke-width: 4; stroke-dasharray: 126; transition: stroke-dashoffset 0.1s linear; }
      `}</style>
    </div>
  );
}