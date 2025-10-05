import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lgog_180x.webp";
import { Menu, X } from "lucide-react";

function Header({ onCartClick }) {
  const [isOpen, setIsOpen] = useState(false);

  // एक फंक्शन जो मोबाइल मेनू में लिंक पर क्लिक करने पर उसे बंद कर देगा
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // एक फंक्शन कंपोनेंट जो अंडरलाइन इफ़ेक्ट के साथ Link को रेंडर करेगा
  // इससे कोड साफ रहेगा और दोहराव कम होगा
  const NavLink = ({ to, children }) => (
    // 'group' क्लास li पर नहीं, बल्कि Link पर लगाएंगे, और li को relative बनाएंगे
    <li className="relative">
      <Link
        to={to}
        className="group block relative py-1 transition duration-200"
      >
        <span className="relative z-10">{children}</span>

        {/* अंडरलाइन एलिमेंट */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-[#AE9A4D] 
                     w-0 group-hover:w-full transition-all duration-300 ease-in-out"
        ></div>
      </Link>
    </li>
  );

  // Mobile के लिए NavLink
  const MobileNavLink = ({ to, children }) => (
    <li className="relative">
      <Link
        to={to}
        onClick={handleLinkClick} // क्लिक पर मेनू बंद करें
        className="group block relative py-1 transition duration-200"
      >
        <span className="relative z-10">{children}</span>
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-[#AE9A4D] 
                     w-0 group-hover:w-full transition-all duration-300 ease-in-out"
        ></div>
      </Link>
    </li>
  );


  return (
    <div className="bg-[#2B1416] text-[#AE9A4D] sticky top-0 z-50 px-4 sm:px-8 py-3 flex justify-between items-center font-Bitter">

      {/* Logo as Link */}
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16 sm:h-20" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm lg:text-base">
        {/* NavLink कंपोनेंट का इस्तेमाल */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sarees">SAREES</NavLink>
        <NavLink to="/duppata">DUPPATA & STOLE</NavLink>
        <NavLink to="/sale">SALE</NavLink>
        {/* <NavLink to="/instagram">Shop Instagram</NavLink> */}
        <NavLink to="/blogs">Blogs</NavLink>
      </ul>

      {/* Right Menu (Icons/Actions) */}
      <ul className="hidden md:flex gap-8 text-sm lg:text-base list-none">
        {/* Utility Links के लिए भी NavLink का इस्तेमाल */}
        {/* <NavLink to="/search">Search</NavLink> */}
        <NavLink to="/login">Login</NavLink>
        <button onClick={onCartClick} className="hover:transition cursor-pointer">
          Cart
        </button>
      </ul>

      {/* Mobile Hamburger (Same as before) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#2B1416] flex flex-col items-center py-4 gap-4 md:hidden">
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-4 items-center">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/sarees">SAREES</MobileNavLink>
            <MobileNavLink to="/duppata">DUPPATA & STOLE</MobileNavLink>
            <MobileNavLink to="/sale">SALE</MobileNavLink>
            {/* <MobileNavLink to="/instagram">Shop Instagram</MobileNavLink> */}
            <MobileNavLink to="/blogs">Blogs</MobileNavLink>
          </ul>

          {/* Mobile Utility Links */}
          <ul className="flex flex-col gap-3 items-center mt-2 ">
            {/* <MobileNavLink to="/search">Search</MobileNavLink> */}
            <MobileNavLink to="/login">Login</MobileNavLink>
            <button onClick={onCartClick} className="hover:transition cursor-pointer">
              Cart
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;