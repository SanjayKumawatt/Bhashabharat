// ./Pages/EmptyCollection.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const EmptyCollection = () => {
    // URL से कलेक्शन का नाम निकालने के लिए
    const location = useLocation();
    
    // '/sale/banarasi' से 'Banarasi' नाम निकालें
    const pathSegments = location.pathname.split('/');
    // अंतिम सेगमेंट को टाइटल बनाने के लिए इस्तेमाल करें (e.g., 'banarasi' -> 'Banarasi Saree')
    const collectionName = pathSegments[pathSegments.length - 1]
                            .replace(/-/g, ' ')
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ');
                            
    // Breadcrumb के लिए
    const breadcrumbName = collectionName.includes('Saree') || collectionName.includes('Stoles') ? collectionName : collectionName + ' Collection';

    return (
        <div className="font-serif text-gray-800 bg-white min-h-screen flex flex-col">
            
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 px-4 pt-4 ml-auto mr-auto max-w-6xl w-full">
                <Link to="/" className="hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <span className="capitalize">{breadcrumbName}</span>
            </div>

            {/* Main Content (Centered) */}
            <div className="flex flex-col items-center justify-center flex-grow py-20">
                
                {/* Dynamic Title (e.g., Banarasi Saree) */}
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-16 text-[#2B1416] capitalize">
                    {breadcrumbName}
                </h1>
                
                {/* Empty Collection Message */}
                <div className="text-center mt-8">
                    <h2 className="text-xl font-semibold mb-2">Empty collection</h2>
                    <p className="text-gray-600 mb-6">
                        This collection does not contain any products.
                    </p>
                    
                    {/* Shop Now Button */}
                    <Link to="/sarees" 
                          className="inline-block px-8 py-3 text-white font-semibold tracking-wider bg-[#2B1416] hover:bg-[#3d1a1d] transition"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>

            {/* Loyalty Points Button (Optional, but included for completeness) */}
            <div className="fixed bottom-4 left-4 z-40">
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-lg">
                    Loyalty Points
                </button>
            </div>
        </div>
    );
};

export default EmptyCollection;