import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => (
  <aside className="hidden md:flex flex-col bg-gray-800 text-white w-56 min-h-screen p-6">
    <NavLink to="/" className="mb-4 font-bold text-xl">
      Home
    </NavLink>
    <NavLink to="/about" className="mb-2 hover:underline">
      About
    </NavLink>
    <NavLink to="/contact" className="mb-2 hover:underline">
      Contact
    </NavLink>
  </aside>
);

export default Sidebar;
