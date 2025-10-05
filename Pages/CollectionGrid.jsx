import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../src/assets/Sale/img1.webp"
import img3 from "../src/assets/Sale/img3.webp"
import img5 from "../src/assets/Sale/img5.webp"


// ----------------------------------------------------
// DUMMY DATA FOR COLLECTIONS (तुम्हारे स्क्रीनशॉट के अनुसार)
// ----------------------------------------------------
const collections = [
    {
        name: "All",
        link: "/sale/all",
        image: img1, // All Saree Image
        hasImage: true,
    },
    {
        name: "Banarasi Saree",
        link: "/sale/banarasi",
        image: null, // No Image in screenshot
        hasImage: false,
    },
    {
        name: "Bhagalpuri Tussar Silk Saree",
        link: "/sale/bhagalpuri",
        image: img3, // Bhagalpuri Image
        hasImage: true,
    },
    {
        name: "Chanderi Saree",
        link: "/sale/chanderi",
        image: null,
        hasImage: false,
    },
    {
        name: "Cotton Saree",
        link: "/sale/cotton",
        image: img5, // Cotton Saree Image
        hasImage: true,
    },
    {
        name: "Dupattas & Stoles",
        link: "/sale/dupattas-stoles",
        image: null,
        hasImage: false,
    },
    // तुम यहाँ और भी कलेक्शन जोड़ सकते हो
];

// ----------------------------------------------------
// COLLECTIONS CARD COMPONENT
// ----------------------------------------------------
const CollectionCard = ({ collection }) => {
    // अगर इमेज है, तो इमेज के साथ रेंडर करो.
    // अगर इमेज नहीं है, तो ग्रे बैकग्राउंड और टेक्स्ट के साथ रेंडर करो (जैसा स्क्रीनशॉट में है).
    
    return (
        <Link 
            to={collection.link} 
            className="block h-96 w-full overflow-hidden relative cursor-pointer group"
        >
            <div 
                className={`w-full h-full flex items-center justify-center transition duration-500 ease-in-out 
                           ${collection.hasImage 
                               ? 'bg-cover bg-center group-hover:scale-105' 
                               : 'bg-gray-200 dark:bg-gray-700'}`
                           }
                style={collection.hasImage ? { backgroundImage: `url(${collection.image})` } : {}}
            >
                {/* Overlay और Text Container */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span 
                        className={`text-white font-semibold text-lg text-center 
                                    ${collection.hasImage 
                                        ? 'drop-shadow-lg' 
                                        : 'text-gray-600 dark:text-gray-300'}` // No-Image text color
                                    }
                    >
                        {collection.name}
                        {!collection.hasImage && <div className="text-xs mt-1">No image</div>}
                    </span>
                </div>
                
                {/* Hover Effect: केवल इमेज वाले कार्ड्स पर एक हल्का डिमिंग इफेक्ट */}
                {collection.hasImage && (
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity"></div>
                )}
            </div>
        </Link>
    );
};

// ----------------------------------------------------
// MAIN GRID COMPONENT
// ----------------------------------------------------
const CollectionGrid = () => {
    return (
        <div className="font-serif bg-white min-h-screen">
            <div className="container mx-auto px-4 py-16">
                
                {/* Heading */}
                <h2 className="text-3xl font-extrabold text-center mb-12 text-[#2B1416]">
                    Collections
                </h2>

                {/* Grid Layout (3 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <CollectionCard key={index} collection={collection} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollectionGrid;