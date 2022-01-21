import React from "react";
import logo from "../markdown-icon.png";

function Navbar() {
  return (
    <nav className="bg-gray-800 flex justify-center">
      <div className="flex items-center">
        <img src={logo} className="h-10 my-2" alt="logo" />
        <h1 className="text-neutral-100 text-2xl">Markdown Previewer</h1>
      </div>
    </nav>
  );
}

export default Navbar;
