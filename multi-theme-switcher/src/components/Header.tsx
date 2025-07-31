import React from "react";
import { useTheme, type Theme } from "../context/ThemeContext";

const themes: { label: string; value: Theme }[] = [
  { label: "Theme 1 (Light)", value: "theme1" },
  { label: "Theme 2 (Dark Sidebar)", value: "theme2" },
  { label: "Theme 3 (Colorful Cards)", value: "theme3" },
];

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 shadow-md 
      bg-white dark:bg-gray-900
      {theme === 'theme3' ? 'bg-gradient-to-r from-primary to-pink-400' : ''}
    "
    >
      <div
        className={`text-xl font-bold transition-all text-white ${
          theme === "theme1" ? "font-sans" : theme === "theme2" ? "font-serif" : "font-pacifico text-2xl"
        }`}
      >
        Multi-Theme Switcher
      </div>
      <select
        aria-label="Select Theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
        className="border border-gray-300 rounded p-1 bg-white dark:bg-gray-800 dark:text-white"
      >
        {themes.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
