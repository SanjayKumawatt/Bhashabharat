import React, { useState } from "react";
import logo from "../assets/lgog_180x.webp";
import { Menu, X } from "lucide-react"; // Hamburger icon

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#2B1416] text-[#AE9A4D] sticky top-0 z-50 px-4 sm:px-8 py-3 flex justify-between items-center font-Bitter">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-16 sm:h-20" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm lg:text-base">
        <li>Home</li>
        <li>SAREES</li>
        <li>DUPPATA & STOLE</li>
        <li>SALE</li>
        <li>Shop Instagram</li>
        <li>Blogs</li>
      </ul>

      {/* Right Menu */}
      <div className="hidden md:flex gap-5 text-sm lg:text-base">
        <li>Search</li>
        <li>Login</li>
        <li>Cart</li>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#2B1416] flex flex-col items-center py-4 gap-4 md:hidden">
          <ul className="flex flex-col gap-4 items-center">
            <li>Home</li>
            <li>SAREES</li>
            <li>DUPPATA & STOLE</li>
            <li>SALE</li>
            <li>Shop Instagram</li>
            <li>Blogs</li>
          </ul>
          <ul className="flex flex-col gap-3 items-center mt-2">
            <li>Search</li>
            <li>Login</li>
            <li>Cart</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
