// ./Home.jsx

import React from "react";
// 💡 Link कंपोनेंट को इंपोर्ट करें
import { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../src/Components/Header";
import Slidder from "../src/UI/Slidder";
import topSeller1 from "../src/assets/topSeller1.webp";
import topSeller2 from "../src/assets/topSeller2.jpg";
import FeatureSection from "../src/UI/FeatureSection";
import MissionSection from "../src/UI/MissionSection";
import Imagee from "../src/UI/Naari";
import TestimonialSection from "../src/UI/TestimonialSection";
import FeaturesSection from "../src/UI/FeaturesSection";
import MediaCoverageSection from "../src/UI/MediaCoverageSection";
import FooterSection from "../src/Components/Footer";

import topSellerHover1 from "../src/assets/topSellerHover1.webp";
import topSellerHover2 from "../src/assets/topSellerHover2.webp";


// 💡 1. बेस्ट सेलर प्रोडक्ट्स के लिए डमी डेटा (IDs के साथ)
const bestSellersData = [
    // मान लो ये ID तुम्हारे Sarees.jsx में मौजूद हैं
    { id: 1, image: topSeller1, hoverImage: topSellerHover1 }, 
    { id: 2, image: topSeller2, hoverImage: topSellerHover2 },
    { id: 3, image: topSeller1, hoverImage: topSellerHover1 },
    { id: 4, image: topSeller2, hoverImage: topSellerHover2 },
];

// 💡 2. भागलपुरी प्रोडक्ट्स के लिए डमी डेटा
const bhagalpuriData = [
    { id: 5, image: topSellerHover1, hoverImage: topSeller1 },
    { id: 6, image: topSellerHover2, hoverImage: topSeller2 },
    { id: 7, image: topSellerHover1, hoverImage: topSeller1 },
    { id: 8, image: topSellerHover2, hoverImage: topSeller2 },
];


// ----------------------------------------------------------------------
// 💡 PRODUCT CARD HELPER (रिपीट होने वाले कोड को साफ करने के लिए)
// ----------------------------------------------------------------------
const HomeProductCard = ({ product }) => {
    // Note: React Router Link के अंदर Hover इफेक्ट के लिए useState का इस्तेमाल किया जा सकता है
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Link
            // पूरे कार्ड को Link से रैप किया गया
            to={`/sarees/product/${product.id}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[280px] lg:w-[300px] flex flex-col justify-center items-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Layer (Hover पर इमेज बदल जाएगी) */}
            <img
                src={isHovered ? product.hoverImage : product.image}
                alt="Best Seller"
                className="w-full h-[300px] sm:h-[320px] md:h-[350px] object-cover transition-all duration-300"
            />
            
            <div className="p-5 text-center w-full">
                <h3 className="text-sm font-semibold mb-2">BHASHABHARAT</h3>
                <p className="text-gray-600 mb-3">
                    Pure Tussar Silk Madhubani HandPainted Saree
                </p>
                <p className="text-gray-800 font-semibold mb-2">
                    Sale price: <span className="text-red-500">₹18,000.00</span>
                </p>
                <p className="text-yellow-500 text-lg">⭐⭐⭐⭐</p>
            </div>
            
            {/* Add to Cart बटन (इसे अब भी Link के अंदर एक क्लिकेबल एलिमेंट के रूप में रखें) */}
            <button 
                type="button" 
                className="uppercase text-sm bg-[#2B1416] text-[#ae9b4dee] py-2 sm:py-3 px-4 sm:px-6 rounded mb-3 hover:bg-[#3d1a1d] transition duration-300 hover:text-white"
                // Note: अगर तुम चाहते हो कि यह बटन सीधे कार्ट में ऐड करे, तो तुम्हें
                // इसे Link से बाहर निकालना होगा और event.stopPropagation() का उपयोग करना होगा।
            >
                + add to cart
            </button>
        </Link>
    );
};
// ----------------------------------------------------------------------


function Home() {
    return (
        <div className="bg-[#F5F1EC] min-h-screen">
            <Slidder />
            
            {/* --- SECTION 1: Best Sellers --- */}
            <section id="best-sellers" className="flex flex-col items-center py-20 px-4 sm:px-8">
                <div className="text-center mb-10">
                    <p className="uppercase text-sm mb-4 font-medium text-gray-600">
                        India’s finest craft-based designs
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Best Sellers</h1>
                    <h2 className="text-xl sm:text-2xl font-medium text-gray-700">
                        Madhubani Hand Painted Saree
                    </h2>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
                    {/* HomeProductCard कंपोनेंट का इस्तेमाल करें */}
                    {bestSellersData.map((product) => (
                        <HomeProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* --- SECTION 2: Bhagalpuri Tussar Silk Saree --- */}
            <div className="bg-[#D7C39B] py-20 px-4 sm:px-8">
                <section className="flex flex-col items-center">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Bhagalpuri Tussar Silk Saree</h1>
                        <h2 className="text-xl sm:text-2xl font-medium text-black">(Best Sellers)</h2>
                    </div>

                    {/* Product Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
                        {/* HomeProductCard कंपोनेंट का इस्तेमाल करें */}
                        {bhagalpuriData.map((product) => (
                            <HomeProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>

            <FeatureSection />
            <MissionSection />
            <Imagee />
            <TestimonialSection />
            <MediaCoverageSection />
        </div>
    );
}

export default Home;