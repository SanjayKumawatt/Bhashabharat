// ./Pages/dupattas.jsx

import React, { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import dup1 from "../src/assets/DuppataProduct/dup1.webp"
import dup2 from "../src/assets/DuppataProduct/dup2.webp"
import dup3 from "../src/assets/DuppataProduct/dup3.webp"
import dup4 from "../src/assets/DuppataProduct/dup4.webp"
import dup5 from "../src/assets/DuppataProduct/dup5.webp"
import dup6 from "../src/assets/DuppataProduct/dup6.webp"
import dup7 from "../src/assets/DuppataProduct/dup7.webp"
import dup8 from "../src/assets/DuppataProduct/dup8.webp"
import dup9 from "../src/assets/DuppataProduct/dup9.webp"
import dup10 from "../src/assets/DuppataProduct/dup10.webp"
import dup11 from "../src/assets/DuppataProduct/dup11.webp"



// ----------------------------------------------------
// 1. DUMMY DATA FOR DUPATTAS (कुल 11 प्रोडक्ट्स)
// ----------------------------------------------------
export const dummyDupattas = [
    {
        id: 11,
        name: "BHASHABHARAT",
        description: "Handwoven Tussar Silk Dupatta Natural Colour",
        price: "2,000.00",
        originalPrice: "2,500.00",
        image: dup1,
        rating: 4, reviews: 4, isSale: false
    },
    {
        id: 12,
        name: "BHASHABHARAT",
        description: "Sleek Silk Dupatta Black Handwoven With White Border",
        price: "2,950.00",
        originalPrice: "3,500.00",
        image: dup2,
        rating: 0, reviews: 0, isSale: true
    },
    {
        id: 13,
        name: "BHASHABHARAT",
        description: "Silver Colour Border Raw Natural Tussar Silk Dupatta",
        price: "2,950.00",
        originalPrice: null,
        image: dup3,
        rating: 0, reviews: 0, isSale: false
    },
    {
        id: 14,
        name: "BHASHABHARAT",
        description: "Red & Golden Border Raw Natural Tussar Silk Dupatta",
        price: "2,950.00",
        originalPrice: null,
        image: dup4,
        rating: 0, reviews: 0, isSale: false
    },
    // ------------------------------------
    // ✅ 7 नए प्रोडक्ट्स जोड़े गए
    // ------------------------------------
    {
        id: 15,
        name: "BHASHABHARAT",
        description: "Maroon Silk Printed Dupatta",
        price: "1,800.00",
        originalPrice: null,
        image: dup5,
        rating: 5, reviews: 1, isSale: false
    },
    {
        id: 16,
        name: "BHASHABHARAT",
        description: "Eco-Chic Handloom Dupatta Green",
        price: "2,200.00",
        originalPrice: null,
        image: dup6,
        rating: 0, reviews: 0, isSale: false
    },
    {
        id: 17,
        name: "BHASHABHARAT",
        description: "Traditional Patola Style Dupatta",
        price: "3,500.00",
        originalPrice: "4,000.00",
        image: dup7,
        rating: 5, reviews: 2, isSale: true
    },
    {
        id: 18,
        name: "BHASHABHARAT",
        description: "Zari Border Tussar Dupatta",
        price: "2,700.00",
        originalPrice: null,
        image: dup8,
        rating: 0, reviews: 0, isSale: false
    },
    {
        id: 19,
        name: "BHASHABHARAT",
        description: "Ombre Effect Silk Stole",
        price: "1,900.00",
        originalPrice: null,
        image: dup9,
        rating: 0, reviews: 0, isSale: false
    },
    {
        id: 20,
        name: "BHASHABHARAT",
        description: "Contrast Pallu Dupatta",
        price: "2,100.00",
        originalPrice: null,
        image: dup10,
        rating: 0, reviews: 0, isSale: false
    },
    {
        id: 21,
        name: "BHASHABHARAT",
        description: "Festive Khadi Dupatta",
        price: "1,500.00",
        originalPrice: null,
        image: dup11,
        rating: 0, reviews: 0, isSale: false
    },
];

// ----------------------------------------------------
// 2. PRODUCT CARD COMPONENT (Same as before)
// ----------------------------------------------------
const ProductCard = ({ product }) => (
    // ... (ProductCard का पूरा कोड यहाँ)
    <div className="group text-left relative">
        <div className="relative overflow-hidden">
            <img
                src={product.image}
                alt={product.description}
                className="w-full h-auto object-cover"
            />
            {product.isSale && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                    SALE
                </span>
            )}
        </div>

        {/* Product Details */}
        <div className="mt-3 text-sm">
            <p className="text-xs text-gray-500 uppercase leading-tight mb-0.5">{product.name}</p>
            <h3 className="font-semibold text-gray-800 leading-tight mb-1">{product.description}</h3>

            {/* Price, Reviews, etc. */}
            <div className="flex items-center space-x-2 text-base">
                <span className="text-red-600 font-bold">₹{product.price}</span>
                {product.originalPrice && (
                    <span className="text-gray-500 line-through text-xs">₹{product.originalPrice}</span>
                )}
            </div>
            <div className="flex items-center text-xs mt-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < product.rating ? "#AE9A4D" : "none"} stroke="#AE9A4D" strokeWidth={1} />
                ))}
                <span className="ml-1 text-gray-600">({product.reviews})</span>
            </div>
        </div>
    </div>
);

// ----------------------------------------------------
// 3. FILTER GROUP COMPONENT (Same as before)
// ----------------------------------------------------
const FilterGroup = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    // ... (FilterGroup का कोड वही रहेगा)
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
// 4. MAIN DUPATTAS COLLECTION COMPONENT
// ----------------------------------------------------
const DupattasCollection = () => {
    const products = dummyDupattas;

    return (
        <div className="font-serif text-gray-800 bg-white min-h-screen">

            {/* ... Header Description Section ... */}
            <div className="max-w-4xl mx-auto text-center px-4 pt-12 pb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#2B1416]">Silk Dupattas</h1>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Embrace elegance with our exclusive collection of silk dupattas. We offer a diverse range of luxurious, high-quality silk dupatta online. Dive into the richness of our Banarasi silk dupatta, artistically woven to enhance your sophisticated style. Immerse yourself in the unique texture and versatile designs of our handwoven Tussar silk dupatta, available in natural golden colour. Our silk printed dupatta collection lets you celebrate bold patterns while exuding a serene charm. The allure of the Tussar silk dupatta is a testament to timeless Indian craftsmanship. Explore and discover truly arresting silk dupattas online on our reserve today.
                </p>
            </div>

            {/* Main Content Area: Filters + Products */}
            <div className="container mx-auto px-4 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row gap-x-12">

                    {/* A. Sidebar / Filters */}
                    <aside className="w-full md:w-1/4 lg:w-1/5 pr-4 md:pr-0">
                        <h2 className="text-xl font-bold mb-6 text-[#2B1416] border-b pb-4">Filters</h2>

                        <FilterGroup title="AVAILABILITY">
                            <label className="flex items-center space-x-2">
                                {/* अब यह 11 प्रोडक्ट्स दिखाएगा */}
                                <input type="checkbox" className="rounded-none text-gray-700 focus:ring-0" />
                                <span>In stock ({products.length})</span>
                            </label>
                            {/* ... बाकी फिल्टर्स ... */}
                        </FilterGroup>
                    </aside>

                    {/* B. Product Grid */}
                    <main className="w-full md:w-3/4 lg:w-4/5 pt-4 md:pt-0">

                        {/* Top Bar: (x) products, Sort dropdown */}
                        <div className="flex justify-between items-center text-sm mb-6 border-b pb-4">
                            <p className="text-gray-600">
                                {/* अब यह 11 प्रोडक्ट्स दिखाएगा */}
                                <span className="font-semibold text-gray-800">{products.length}</span> products
                            </p>
                            {/* ... Sort dropdown ... */}
                        </div>

                        {/* Product Listing */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                            {products.map(product => (
                                <Link
                                    to={`/dupattas/product/${product.id}`}
                                    key={product.id}
                                >
                                    <ProductCard product={product} />
                                </Link>
                            ))}
                        </div>

                        {/* ... Pagination ... */}
                    </main>
                </div>
            </div>
            {/* ... Floating Loyalty Points Button ... */}
        </div>
    );
};

export default DupattasCollection;