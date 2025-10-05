// ./Components/Layout/AppLayout.jsx

import React, { useState } from "react"; // 👈 useState इंपोर्ट किया गया
import { Outlet } from "react-router-dom";
import Header from "../Header"; // मान लो यह Header.jsx है
import FooterSection from "../Footer"; // मान लो यह Footer.jsx है
import CartDrawer from "../CartDrawer"; // 👈 CartDrawer कंपोनेंट इंपोर्ट करें (पाथ एडजस्ट करें)


function AppLayout() {
    // 💡 Cart Drawer की स्थिति मैनेज करने के लिए State
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Cart Drawer को बंद करने का फंक्शन
    const closeCart = () => setIsCartOpen(false);

    return (
        // 1. HEADER: onCartClick प्रॉप पास करें
        <div>
            <Header onCartClick={() => setIsCartOpen(true)} />
            
            <main>
                <Outlet />
            </main>
            
            <FooterSection />
            
            {/* 2. CART DRAWER: State के आधार पर दिखाएँ */}
            <CartDrawer
                isOpen={isCartOpen}
                onClose={closeCart} // ड्रॉअर बंद करने के लिए फंक्शन
            />
        </div>
    );
}

export default AppLayout;