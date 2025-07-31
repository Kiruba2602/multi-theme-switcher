import React from "react";
import { useTheme } from "../context/ThemeContext";

const About: React.FC = () => {
  const { theme } = useTheme();

  let btnClass = "";
  let headingClass = "";
  let paraClass = "";
  if (theme === "theme1") {
    headingClass = "text-3xl font-bold font-sans mb-4";
    btnClass =
      "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline focus:ring-2 focus:ring-blue-400";
    paraClass = "mb-6 font-sans";
  } else if (theme === "theme2") {
    headingClass = "text-4xl font-serif font-extrabold mb-4";
    btnClass =
      "bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded focus:outline focus:ring-2 focus:ring-gray-400";
    paraClass = "mb-6 font-serif";
  } else {
    headingClass = "text-4xl font-pacifico mb-4";
    btnClass =
      "bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-3xl font-pacifico focus:outline focus:ring-2 focus:ring-primary";
    paraClass = "mb-6 font-pacifico text-lg";
  }

  return (
    <section>
      <h1 className={headingClass}>About Us</h1>
      <p className={paraClass}>This is a sample About page describing the app and its features.</p>
      <button className={btnClass}>Learn More</button>
    </section>
  );
};

export default About;
