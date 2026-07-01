import React, { useState } from "react";

// Import các file ảnh
import imgTitanXam from "../assets/image_titan_xam.png";
import imgTitanVang from "../assets/image_titan_vang.png";
import imgTitanDen from "../assets/image_titan_den.png";

const COLORS = [
  { name: "Titan Xám", hex: "#8e8e93", img: imgTitanXam },
  { name: "Titan Vàng", hex: "#e0d1b8", img: imgTitanVang },
  { name: "Titan Đen", hex: "#434343", img: imgTitanDen },
];
const STORAGE = ["256GB", "512GB", "1TB", "2TB"];

export default function ProductActions() {
  const [selectedColor, setSelectedColor] = useState(COLORS[1]);
  const [selectedStorage, setSelectedStorage] = useState(STORAGE[0]);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const handleAddToCart = () => {
    const newItem = {
      id: Date.now(),
      name: "iPhone 17 Pro Max",
      color: selectedColor.name,
      storage: selectedStorage,
      qty: quantity,
      price: 1199,
    };
    setCartItems([newItem, ...cartItems]);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      setFavoriteList([
        { id: "ip17pm", name: "iPhone 17 Pro Max", color: selectedColor.name },
        ...favoriteList,
      ]);
    } else {
      setFavoriteList(favoriteList.filter((item) => item.id !== "ip17pm"));
    }
  };

  const handleBuyNow = () => {
    alert("Đang chuyển hướng đến trang thanh toán...");
  };

  const handlePrevColor = () => {
    const currentIndex = COLORS.findIndex((c) => c.name === selectedColor.name);
    const prevIndex = currentIndex === 0 ? COLORS.length - 1 : currentIndex - 1;
    setSelectedColor(COLORS[prevIndex]);
  };

  const handleNextColor = () => {
    const currentIndex = COLORS.findIndex((c) => c.name === selectedColor.name);
    const nextIndex = currentIndex === COLORS.length - 1 ? 0 : currentIndex + 1;
    setSelectedColor(COLORS[nextIndex]);
  };

  return (
    <div style={{ background: "var(--bg)", padding: "60px 0" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2
          className="display-6 fw-bold mb-5 tracking-tight text-center dynamic-neon-title"
          style={{ letterSpacing: "-0.03em" }}
        >
          Đăng ký sản phẩm sớm nhất
        </h2>

        <div className="row g-4 justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* CỘT TRÁI */}
          <div className="d-flex">
            <div className="p-4 w-100 cream-box shadow-sm d-flex flex-column justify-content-between">
              <div>
                <h3 className="fw-bold mb-4" style={{ color: "#5a5245", fontSize: "1.5rem" }}>
                  Sản phẩm
                </h3>

                <div className="product-slider-inner">
                  <button className="nav-arrow-btn nav-arrow-left" onClick={handlePrevColor} aria-label="Previous color">
                    <i className="bi bi-chevron-left fs-5"></i>
                  </button>

                  <img
                    key={selectedColor.name}
                    src={selectedColor.img}
                    alt={`iPhone 17 Pro Max ${selectedColor.name}`}
                    className="product-view-img"
                    loading="lazy"
                    decoding="async"
                  />

                  <button className="nav-arrow-btn nav-arrow-right" onClick={handleNextColor} aria-label="Next color">
                    <i className="bi bi-chevron-right fs-5"></i>
                  </button>
                </div>
              </div>

              <div className="mt-3 text-center w-100">
                <h4 className="fw-bold mb-1" style={{ color: "var(--text)", fontSize: "1.25rem" }}>
                  iPhone 17 Pro Max
                </h4>
                <p className="small fw-medium mb-0" style={{ color: "#8f734b" }}>
                  {selectedColor.name} • {selectedStorage}
                </p>
              </div>
            </div>
          </div>

          {/* CỘT GIỮA */}
          <div className="d-flex">
            <div className="p-4 w-100 cream-box shadow-sm d-flex flex-column justify-content-between">
              <div>
                <h3 className="fw-bold mb-4" style={{ color: "#5a5245", fontSize: "1.5rem" }}>
                  Cấu hình
                </h3>

                <div className="mb-4">
                  <span className="small fw-bold d-block mb-2 text-uppercase" style={{ color: "#8f734b" }}>
                    Màu: {selectedColor.name}
                  </span>
                  <div className="d-flex gap-2">
                    {COLORS.map((color) => (
                      <button
                        key={color.name}
                        className="rounded-circle border-0 p-1 btn-hover"
                        style={{
                          width: "38px", height: "38px", backgroundColor: color.hex,
                          outline: selectedColor.name === color.name ? "2px solid #8f734b" : "none",
                          outlineOffset: "2px",
                        }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="small fw-bold d-block mb-2 text-uppercase" style={{ color: "#8f734b" }}>
                    Dung lượng
                  </span>
                  <div className="d-flex flex-wrap gap-2">
                    {STORAGE.map((size) => (
                      <button
                        key={size}
                        className={`btn border-0 rounded-3 px-3 py-2 btn-hover small ${selectedStorage === size ? "text-white" : "text-dark"}`}
                        style={{ backgroundColor: selectedStorage === size ? "#8f734b" : "#e6dfce", fontSize: "0.9rem" }}
                        onClick={() => setSelectedStorage(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <button className="qty-btn" style={{ width: "35px", height: "35px" }} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <span className="fw-bold px-1">{quantity}</span>
                    <button className="qty-btn" style={{ width: "35px", height: "35px" }} onClick={() => setQuantity(quantity + 1)}>+</button>
                    <span className="ms-auto small" style={{ color: "#8f734b" }}>
                      Tổng: <strong>${(1199 * quantity).toLocaleString()}</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column gap-2 mt-3">
                <div className="d-flex gap-2">
                  <button className="btn text-white py-2 rounded-3 btn-hover cta-shimmer flex-grow-1" style={{ background: "#8f734b", fontWeight: "600", fontSize: "0.95rem" }} onClick={handleAddToCart}>
                    Thêm vào giỏ hàng
                  </button>
                  <button className="btn border-0 rounded-3 btn-hover d-flex align-items-center justify-content-center" style={{ width: "50px", background: isFavorite ? "#fce8e8" : "#e6dfce", color: isFavorite ? "#dc3545" : "#8f734b" }} onClick={handleToggleFavorite}>
                    <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"} fs-5`}></i>
                  </button>
                </div>
                <button className="btn btn-dark py-2 rounded-3 btn-hover shadow-lg" style={{ background: "linear-gradient(45deg, #2d2a2e, #5a5245)", fontWeight: "700", fontSize: "0.95rem" }} onClick={handleBuyNow}>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI */}
          <div className="d-flex">
            <div className="p-4 w-100 cream-box shadow-sm d-flex flex-column justify-content-between">
              <div className="d-flex flex-column h-100 justify-content-between">
                <div>
                  <h3 className="fw-bold mb-4" style={{ color: "#5a5245", fontSize: "1.5rem" }}>
                    Trạng thái
                  </h3>
                  <h5 className="fw-bold mb-2" style={{ color: "#8f734b", fontSize: "0.95rem" }}>
                    Giỏ hàng ({cartItems.length})
                  </h5>
                </div>

                <div className="cart-container-wrapper">
                  <div className="cart-inner-scroll">
                    {cartItems.map((item) => (
                      <div key={item.id} className="pop-animation p-3 mb-2 bg-white rounded-3 border-start border-4 shadow-sm" style={{ borderLeftColor: "#8f734b" }}>
                        <div className="d-flex justify-content-between small">
                          <span className="fw-bold">{item.name}</span>
                          <span style={{ color: "#8f734b" }}>${(item.price * item.qty).toLocaleString()}</span>
                        </div>
                        <small className="text-muted" style={{ fontSize: "0.75rem" }}>{item.color} • {item.storage} • x{item.qty}</small>
                      </div>
                    ))}
                    {cartItems.length === 0 && (
                      <div className="text-center w-100 text-muted my-auto py-3">
                        <i className="bi bi-basket3 fs-4 d-block mb-1" style={{ color: "#a6a090" }}></i>
                        <small className="italic" style={{ fontSize: "0.85rem" }}>Chưa có sản phẩm trong giỏ.</small>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-2 border-top" style={{ borderColor: "#e6dfce" }}>
                <h5 className="fw-bold mb-2" style={{ color: "var(--text)", fontSize: "0.95rem" }}>Đã yêu thích</h5>
                <div className="d-flex flex-wrap gap-1">
                  {favoriteList.map((fav) => (
                    <span key={fav.id} className="badge p-2 px-3 rounded-pill pop-animation" style={{ background: "#e6dfce", color: "#5a5245", fontSize: "0.8rem" }}>
                      ♥ {fav.name}
                    </span>
                  ))}
                  {favoriteList.length === 0 && (
                    <small className="text-muted italic" style={{ fontSize: "0.85rem" }}>Chưa có sản phẩm yêu thích.</small>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Giữ nguyên các định nghĩa CSS đã có */
        .dynamic-neon-title {
          font-weight: 900; padding-bottom: 10px; letter-spacing: -0.04em;
          background: linear-gradient(90deg, #1d1d1f, #8f734b, #b59a73, #8f734b, #1d1d1f);
          background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: textGlowFlow 8s ease-in-out infinite;
        }
        @keyframes textGlowFlow { 0% { background-position: 0% center; } 50% { background-position: 100% center; } 100% { background-position: 200% center; } }
        .cream-box { background: var(--surface-2); border: 1px solid var(--border); border-radius: 24px; transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; }
        .cream-box:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(143, 115, 75, 0.12); border-color: #8f734b; }
        .cta-shimmer { position: relative; overflow: hidden; }
        .cta-shimmer::after { content: ""; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); animation: shimmer 2s infinite; }
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        @keyframes popIn { 0% { transform: scale(0.95); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .pop-animation { animation: popIn 0.3s ease-out; }
        .btn-hover { transition: all 0.3s ease; }
        .btn-hover:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(143, 115, 75, 0.2); }
        .qty-btn { width: 40px; height: 40px; border: 1px solid #dcd3c1; background: #fcf9f2; border-radius: 8px; color: #8f734b; }
        .product-slider-inner { position: relative; width: 100%; flex-grow: 1; display: flex; align-items: center; justify-content: center; min-height: 240px; }
        .nav-arrow-btn { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.9); border: 1px solid #e6dfce; color: #5a5245; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; z-index: 2; }
        .nav-arrow-btn:hover { background: #8f734b; color: #fff; box-shadow: 0 4px 10px rgba(143, 115, 75, 0.3); }
        .nav-arrow-left { left: 0px; }
        .nav-arrow-right { right: 0px; }
        .product-view-img { max-width: 85%; max-height: 220px; height: auto; object-fit: contain; mix-blend-mode: multiply; animation: fadeInProduct 0.5s ease-out; }
        @keyframes fadeInProduct { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .cart-container-wrapper { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; min-height: 180px; }
        .cart-inner-scroll { max-height: 220px; overflow-y: auto; padding-right: 5px; width: 100%; }
        .cart-inner-scroll::-webkit-scrollbar { width: 4px; }
        .cart-inner-scroll::-webkit-scrollbar-thumb { background: #e6dfce; border-radius: 4px; }
      `}</style>
    </div>
  );
}