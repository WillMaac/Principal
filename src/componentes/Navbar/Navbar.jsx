import React, { useState } from "react";
import menuIcon from "../../assets/nav/menu.png";
import closeIcon from "../../assets/nav/close.png";

export function NavBar () {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" relative  w-full z-50 px-3 py-4 flex justify-between items-center text-white">
      <a href="/" className="text-2xl font-bold">Anderson</a>
      <div className="md:hidden">
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="Icone do menu"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <ul className={`flex-col md:flex-row md:flex gap-10 text-2xl absolute z md:static right-6 top-16 bg-transparent md:bg-transparent rounded-lg px-6 py-4 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ${menuOpen ? "flex" : "hidden"}`}>
        <li><a href="#home" className="hover:text-green-400">Home</a></li>
        <li><a href="#sobre" className="hover:text-green-400">Sobre</a></li>
        <li><a href="#projetos" className="hover:text-green-400">Projetos</a></li>
        <li><a href="#contatos" className="hover:text-green-400">Contatos</a></li>
      </ul>
    </nav>
  );
};
export default NavBar