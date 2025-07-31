import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AnimatedContainer from "./components/AnimatedContainer";
import Sidebar from "./components/SideBar";

const ThemedApp: React.FC = () => {
  const { theme } = useTheme();

  // Per-theme backgrounds; extra responsiveness via Tailwind
  const themeClass =
    theme === "theme1"
      ? "bg-white text-gray-900 font-sans"
      : theme === "theme2"
      ? "bg-gray-900 text-white font-serif"
      : "bg-gradient-to-br from-pink-200 via-pink-100 to-orange-100 text-gray-900 font-pacifico";

  // For layout, theme2 uses flex-row with sidebar (on desktop)
  const layoutClass = theme === "theme2" ? "md:flex-row" : "flex-col";

  return (
    <div className={`min-h-screen pt-16 transition-all duration-500 flex ${layoutClass} ${themeClass}`}>
      {theme === "theme2" && <Sidebar />}
      <div className="flex-1 pt-0 md:pt-16">
        <Header />
        <AnimatedContainer>
          <main className="p-4 max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </AnimatedContainer>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ThemedApp />
      </Router>
    </ThemeProvider>
  );
};

export default App;
