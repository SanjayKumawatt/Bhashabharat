// ./Pages/Sarees.jsx

import React, { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// 💡 NOTES: यहाँ इमेजेस के सही पाथ्स का उपयोग हो रहा है
import product1 from "../src/assets/Products/product1.webp";
import product2 from "../src/assets/Products/product2.webp";
import product3 from "../src/assets/Products/product3.webp";
import product4 from "../src/assets/Products/product4.webp";
import product5 from "../src/assets/Products/product5.webp";
import product6 from "../src/assets/Products/product6.webp";
import product7 from "../src/assets/Products/product7.webp";
import product8 from "../src/assets/Products/product8.webp";


// ----------------------------------------------------
// 1. DUMMY DATA (अब यह डेटा एक्सपोर्ट हो रहा है)
// ----------------------------------------------------
export const dummyProducts = [
    {
        id: 1, name: "BHASHABHARAT BEAUTIFUL INDIAN ETHNIC WEAR", description: "Elite Elegance: madhuvan Pattu Tussar",
        price: "8,999.00", originalPrice: "9,999.00", image: product1, rating: 5, reviews: 1, isSale: true
    },
    {
        id: 2, name: "BHASHABHARAT BEAUTIFUL INDIAN ETHNIC WEAR", description: "Kini-Glam: Madhuvan Silk Saree",
        price: "8,999.00", originalPrice: "9,999.00", image: product2, rating: 5, reviews: 1, isSale: true
    },
    {
        id: 3, name: "BHASHABHARAT BEAUTIFUL INDIAN ETHNIC WEAR", description: "kini aanaya ropo: madhuvan madhuveeran",
        price: "8,999.00", originalPrice: "9,999.00", image: product3, rating: 5, reviews: 1, isSale: true
    },
    {
        id: 4, name: "BHASHABHARAT BEAUTIFUL INDIAN ETHNIC WEAR", description: "Ae dil tumhare sang: madhuvan Tussar",
        price: "8,999.00", originalPrice: "9,999.00", image: product4, rating: 5, reviews: 1, isSale: true
    },
    {
        id: 5, name: "BHASHABHARAT BEAUTIFUL INDIAN ETHNIC WEAR", description: "Royal Tussar: Traditional motifs",
        price: "8,999.00", originalPrice: "9,999.00", image: product5, rating: 5, reviews: 1, isSale: true
    },
    {
        id: 6, name: "BHASHABHARAT BEAUTIFUL INDIAN ETHNIC WEAR", description: "Classic Tussar: Handwoven charm",
        price: "8,999.00", originalPrice: "9,999.00", image: product6, rating: 5, reviews: 1, isSale: true
    },
    {
        id: 7, name: "BHASHABHARAT BEAUTIFUL INDIAN ETHNIC WEAR", description: "Modern Tussar: Geometric patterns",
        price: "8,999.00", originalPrice: "9,999.00", image: product7, rating: 5, reviews: 1, isSale: true
    },
    {
        id: 8, name: "BHASHABHARAT BEAUTIFUL INDIAN ETHNIC WEAR", description: "Vibrant Tussar: Festive collection",
        price: "8,999.00", originalPrice: "9,999.00", image: product8, rating: 5, reviews: 1, isSale: true
    },
];

// ----------------------------------------------------
// 2. PRODUCT CARD COMPONENT
// ----------------------------------------------------
const ProductCard = ({ product }) => (
    <div className="group text-left relative">
        {/* Image */}
        <div className="relative overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
            {product.isSale && product.originalPrice && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                    Save ₹{(parseFloat(product.originalPrice.replace(/,/g, '')) - parseFloat(product.price.replace(/,/g, ''))).toLocaleString('en-IN')}
                </span>
            )}
        </div>

        {/* Details */}
        <div className="mt-3 text-sm">
            <p className="text-xs text-gray-500 uppercase leading-tight mb-0.5">{product.name}</p>
            <h3 className="font-semibold text-gray-800 leading-tight mb-1">{product.description}</h3>
            <div className="flex items-center space-x-2 text-base">
                <span className="text-red-600 font-bold">₹{product.price}</span>
                {product.originalPrice && (<span className="text-gray-500 line-through text-xs">₹{product.originalPrice}</span>)}
            </div>
            <div className="flex items-center text-xs mt-1">
                {[...Array(5)].map((_, i) => (<Star key={i} size={12} fill={i < product.rating ? "#AE9A4D" : "none"} stroke="#AE9A4D" strokeWidth={1} />))}
                <span className="ml-1 text-gray-600">({product.reviews})</span>
            </div>
        </div>
    </div>
);

// ----------------------------------------------------
// 3. FILTER GROUP COMPONENT
// ----------------------------------------------------
const FilterGroup = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-b border-gray-200 py-4 last:border-b-0">
            <button
                className="w-full flex justify-between items-center text-base font-medium text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {isOpen && <div className="mt-3 text-sm space-y-2">{children}</div>}
        </div>
    );
};


// ----------------------------------------------------
// 4. MAIN COLLECTION COMPONENT (SAREES / ALL)
// ----------------------------------------------------
const Sarees = () => {
    const location = useLocation();
    
    let pageTitle = "Tussar Silk Saree";
    let isAllCollection = false;

    if (location.pathname.includes('/sale/all')) {
        pageTitle = "All";
        isAllCollection = true;
    }
    
    // फ़िलहाल हम डमी प्रोडक्ट्स को सीधे इस्तेमाल कर रहे हैं
    const filteredProducts = dummyProducts;

    return (
        <div className="font-serif text-gray-800 bg-white min-h-screen">

            {/* Header Description Section */}
            <div className="max-w-4xl mx-auto text-center px-4 pt-12 pb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#2B1416]">{pageTitle}</h1>
                
                {/* डिस्क्रिप्शन केवल Tussar Silk Saree पेज पर दिखाएँ */}
                {!isAllCollection && (
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Welcome to our splendid collection of Tussar silk sarees. These sarees are unique blends of tradition and style, perfect for
                        the modern woman. Our range of Tussar sarees includes the best Tussar Ghicha silk sarees, known for their exquisite appeal.
                        Each strand of these sarees is woven with care and precision...
                    </p>
                )}
            </div>

            {/* Main Content Area: Filters + Products */}
            <div className="container mx-auto px-4 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row gap-x-12">

                    {/* A. Sidebar / Filters */}
                    <aside className="w-full md:w-1/4 lg:w-1/5 pr-4 md:pr-0">
                        <h2 className="text-xl font-bold mb-6 text-[#2B1416] border-b pb-4">Filters</h2>
                        
                        <FilterGroup title="AVAILABILITY">
                            <label className="flex items-center space-x-2"><input type="checkbox" className="rounded-none text-gray-700 focus:ring-0" /><span>In stock ({filteredProducts.length})</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" className="rounded-none text-gray-700 focus:ring-0" /><span>Out of stock (0)</span></label>
                        </FilterGroup>

                        <FilterGroup title="PRICE">
                            <div className="flex justify-between text-sm text-gray-600 mb-2"><span>₹1,000</span><span>₹20,000</span></div>
                            <input type="range" min="1000" max="20000" step="100" className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#AE9A4D]" />
                        </FilterGroup>
                        
                        <FilterGroup title="SIZE" defaultOpen={false}><label className="flex items-center space-x-2"><input type="checkbox" className="rounded-none text-gray-700 focus:ring-0" /><span>One Size</span></label></FilterGroup>
                        <FilterGroup title="MATERIAL" defaultOpen={false}><label className="flex items-center space-x-2"><input type="checkbox" className="rounded-none text-gray-700 focus:ring-0" /><span>Tussar Silk</span></label><label className="flex items-center space-x-2"><input type="checkbox" className="rounded-none text-gray-700 focus:ring-0" /><span>Raw Silk</span></label></FilterGroup>
                        <FilterGroup title="COLOR" defaultOpen={false}><div className="flex flex-wrap gap-2"><span className="w-6 h-6 rounded-full bg-red-500 border border-gray-300"></span><span className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></span></div></FilterGroup>
                        <FilterGroup title="MORE FILTERS" defaultOpen={false}><label className="flex items-center space-x-2"><input type="checkbox" className="rounded-none text-gray-700 focus:ring-0" /><span>Option A</span></label></FilterGroup>

                    </aside>

                    {/* B. Product Grid */}
                    <main className="w-full md:w-3/4 lg:w-4/5 pt-4 md:pt-0">

                        {/* Top Bar: (x) products, Sort dropdown */}
                        <div className="flex justify-between items-center text-sm mb-6 border-b pb-4">
                            <p className="text-gray-600"><span className="font-semibold text-gray-800">{filteredProducts.length}</span> products</p>
                            <div className="flex items-center space-x-2">
                                <label htmlFor="sort-by" className="text-gray-600">Sort by</label>
                                <div className="relative">
                                    <select id="sort-by" className="appearance-none bg-white border border-gray-300 text-gray-800 py-1.5 pl-3 pr-8 rounded-none text-sm focus:ring-0 focus:border-gray-400">
                                        <option value="featured">Featured</option><option value="price-asc">Price: Low to High</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
                                </div>
                            </div>
                        </div>

                        {/* Product Listing */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                            {filteredProducts.map(product => (
                                <Link to={`/sarees/product/${product.id}`} key={product.id}>
                                    <ProductCard product={product} />
                                </Link>
                            ))}
                        </div>
                    </main>
                </div>
            </div>

            {/* Floating Loyalty Points Button */}
            <div className="fixed bottom-4 left-4 z-40">
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                    Loyalty Points
                </button>
            </div>
        </div>
    );
};

export default Sarees;