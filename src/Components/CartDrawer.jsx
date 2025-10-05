// ./Components/CartDrawer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingCart } from 'lucide-react';

// यह कंपोनेंट दो प्रॉप्स लेता है: isOpen (दिखाने के लिए) और onClose (बंद करने के लिए)
const CartDrawer = ({ isOpen, onClose }) => {
    
    // कार्ट में कोई प्रोडक्ट नहीं है, इसलिए हम खाली अवस्था (Empty State) दिखाएंगे
    const isCartEmpty = true; // बाद में इसे डायनेमिक (dynamic) state से बदलेंगे

    return (
        <>
            {/* 1. OVERLAY (पीछे की स्क्रीन को धुंधला करता है) */}
            <div
                // 'fixed inset-0' पूरे viewport को कवर करता है
                // 'bg-black/50' काला रंग 50% अपारदर्शिता के साथ
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose} // ओवरले पर क्लिक करने पर कार्ट बंद हो जाएगा
            />

            {/* 2. SLIDE-OVER PANEL (कार्ट का मेन कंटेनर) */}
            <div
                // z-50 सबसे ऊपर रहने के लिए
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
                    // isOpen होने पर 0 (right: 0) पर स्लाइड करता है, वरना राइट साइड से बाहर रहता है
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Cart Header */}
                <header className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-[#2B1416] font-serif">
                        Cart
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
                        <X size={24} /> {/* X बटन (बंद करने के लिए) */}
                    </button>
                </header>

                {/* Cart Body */}
                <div className="p-6 flex flex-col h-[calc(100%-60px)] justify-center items-center text-center">
                    
                    {isCartEmpty ? (
                        /* Empty State (तुम्हारे स्क्रीनशॉट के अनुसार) */
                        <>
                            <ShoppingCart size={32} className="text-gray-400 mb-4" />
                            <p className="text-gray-600 mb-6 font-semibold">
                                Your cart is empty
                            </p>
                            
                            {/* Start Shopping Button */}
                            <Link 
                                to="/sarees" // इसे होम या किसी कलेक्शन पेज पर पॉइंट करें
                                onClick={onClose}
                                className="inline-block px-8 py-3 text-white font-semibold tracking-wider bg-[#2B1416] hover:bg-[#3d1a1d] transition"
                            >
                                START SHOPPING
                            </Link>
                        </>
                    ) : (
                        /* Full Cart Content (तुम इसे बाद में जोड़ोगे) */
                        <div className="w-full">
                            {/* ... List of Cart Items, Subtotal, Checkout Button ... */}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer;