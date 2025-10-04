// import { defaultMaxListeners } from events";
import React from "react";
import logo from "../assets/lgog_180x.webp"

function Header() {
    return (

        <div className="bg-[#2B1416] flex text-[#AE9A4D] sticky top-0 z-50 justify-between h-27 overflow-hidden px-[3%] items-center" style={{ fontFamily: "Bitter" }} >
            <div>
                <img src={logo} alt="" className="h-20" />
            </div>
            <div >
                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>SAREES</li>
                    <li>DUPPATA & STOLE</li>
                    <li>SALE</li>
                    <li>Shop Instagram</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-5">
                    <li>Search</li>
                    <li>Login</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
}

export default Header;