import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import React, { useEffect, useState, Suspense, lazy } from "react";

// Lazy load non-critical components
const Features = lazy(() => import("./components/Features"));
const Specifications = lazy(() => import("./components/Specifications"));
const ProductActions = lazy(() => import("./components/ProductActions"));
const CTA = lazy(() => import("./components/CTA"));
const Footer = lazy(() => import("./components/Footer"));

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Defer AOS initialization to idle time
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        Promise.all([
          import("aos"),
          import("aos/dist/aos.css"),
        ]).then(([AOS]) => {
          AOS.default.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: "ease-in-out",
          });
        });
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        Promise.all([
          import("aos"),
          import("aos/dist/aos.css"),
        ]).then(([AOS]) => {
          AOS.default.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: "ease-in-out",
          });
        });
      }, 2000);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-shell">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Suspense fallback={<div />}>
        <Features />
      </Suspense>
      <Suspense fallback={<div />}>
        <Specifications />
      </Suspense>
      <Suspense fallback={<div />}>
        <ProductActions />
      </Suspense>
      <Suspense fallback={<div />}>
        <CTA />
      </Suspense>
      <ScrollProgress />
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
