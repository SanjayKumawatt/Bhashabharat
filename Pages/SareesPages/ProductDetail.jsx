import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Star, Minus, Plus } from 'lucide-react';

// 💡 NOTES: सुनिश्चित करें कि ये इंपोर्ट पाथ्स तुम्हारी फ़ाइल स्ट्रक्चर से मैच करते हैं।
// दोनों कंपोनेंट्स से डेटा एक्सपोर्ट (export) होना ज़रूरी है।
import { dummyProducts } from "../Sarees"; 
import { dummyDupattas } from  "../Dupattas";
// मान लो यह एक सैंपल इमेज है जो थंबनेल्स में इस्तेमाल होगी
import thumbnailImg from '../../src/assets/Products/product1.webp'; 

const ProductDetail = () => {
    const { productId } = useParams(); 
    const location = useLocation(); 

    // ----------------------------------------------------
    // 1. सही डेटा सोर्स चुनें
    // ----------------------------------------------------
    let dataArray = [];
    let collectionPath = '';

    if (location.pathname.includes('/sarees/')) {
        dataArray = dummyProducts;
        collectionPath = '/sarees';
    } else if (location.pathname.includes('/dupattas/')) {
        dataArray = dummyDupattas;
        collectionPath = '/dupattas';
    }
    
    // ID के आधार पर प्रोडक्ट खोजें
    const product = dataArray.find(p => p.id === parseInt(productId));

    // Quantity स्टेट और फ़ंक्शंस
    const [quantity, setQuantity] = useState(1); 
    
    const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    
    // अगर प्रोडक्ट नहीं मिला
    if (!product) {
        return (
            <div className="text-center py-20 font-serif">
                <h2 className="text-3xl font-bold text-red-600">404 - Product Not Found</h2>
                <p className="mt-4 text-lg">The item you are looking for does not exist.</p>
                <Link to={collectionPath || "/"} className="text-blue-600 underline mt-4 block">
                    Go back to Collection
                </Link>
            </div>
        );
    }

    // ------------------------------------------------------------------
    // 2. UI Rendering (तुम्हारे स्क्रीनशॉट के अनुसार)
    // ------------------------------------------------------------------
    const savingAmount = product.originalPrice 
        ? (parseFloat(product.originalPrice.replace(/,/g, '')) - parseFloat(product.price.replace(/,/g, ''))) 
        : 0;

    const formattedSavingAmount = savingAmount.toLocaleString('en-IN');
    
    // Product Details Section
    return (
        <div className="container mx-auto px-4 py-10 font-serif">
            
            {/* Breadcrumb / Home Link */}
            <div className="text-sm text-gray-500 mb-6">
                <Link to="/" className="hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <Link to={collectionPath} className="hover:underline capitalize">{collectionPath.replace('/', '')}</Link>
                <span className="mx-2">/</span>
                <span>{product.description}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                
                {/* Left Column: Image Gallery */}
                <div className="flex flex-col items-center">
                    <img 
                        src={product.image} 
                        alt={product.description} 
                        className="w-full max-w-lg object-cover shadow-lg"
                    />
                    {/* Thumbnail Images */}
                    <div className="flex space-x-2 mt-4 overflow-x-auto w-full justify-center">
                        {/* 5 डमी थंबनेल, तुम इन्हें असली गैलरी इमेजेस से बदल सकते हो */}
                        {[1, 2, 3, 4, 5].map(i => (
                            <img 
                                key={i}
                                src={thumbnailImg} // यहां product.image.thumbnail[i] का इस्तेमाल होगा
                                alt={`Thumb ${i}`} 
                                className="w-16 h-20 object-cover border border-gray-200 hover:border-[#AE9A4D] cursor-pointer" 
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column: Product Info */}
                <div>
                    <p className="text-xs text-gray-500 uppercase">{product.name}</p>
                    <h1 className="text-3xl font-bold mt-1 text-[#2B1416] leading-tight">{product.description}</h1>
                    
                    {/* Price and Sale Tags */}
                    <div className="mt-3">
                        <span className="text-2xl font-bold text-[#2B1416]">Rs. {product.price}</span>
                        {product.originalPrice && (
                            <div className="text-red-600 text-sm mt-1 flex items-center space-x-2">
                                <span className="line-through text-gray-500 text-base">Rs. {product.originalPrice}</span>
                                <span className="font-semibold bg-red-100 px-2 py-0.5 rounded">
                                    SAVE ₹{formattedSavingAmount}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Pay Later/EMI Option */}
                    <div className="mt-4 border-b pb-4">
                       <p className="text-sm text-gray-700">
                           or Pay **Rs. {Math.round(parseFloat(product.price.replace(/,/g, '')) / 3)}.00** now & rest later via 
                           <span className="ml-1 font-bold text-[#2B1416]">@PAYLATER</span>
                       </p>
                    </div>

                    {/* Reviews */}
                    <div className="flex items-center text-sm mt-4 border-b pb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < product.rating ? "#AE9A4D" : "none"} stroke="#AE9A4D" strokeWidth={1.5} />
                        ))}
                        <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                        <span className="ml-4 text-gray-400">|</span>
                        <span className="ml-4 text-gray-600">SKU: {product.id}019</span>
                    </div>

                    {/* Stock and Quantity */}
                    <p className="text-sm mt-4 text-green-600 font-semibold">In stock</p>
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-2">Quantity:</label>
                        <div className="flex items-center border border-gray-300 w-32">
                            <button 
                                onClick={decreaseQuantity}
                                className="p-2 border-r border-gray-300 disabled:opacity-50"
                                disabled={quantity === 1}
                            >
                                <Minus size={16} />
                            </button>
                            <input type="text" value={quantity} readOnly className="w-full text-center border-none focus:ring-0 p-2" />
                            <button onClick={increaseQuantity} className="p-2 border-l border-gray-300">
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 space-y-3">
                        <button 
                            className="w-full py-3 text-[#2B1416] font-bold tracking-wider bg-pink-200 hover:bg-pink-300 transition"
                        >
                            ADD TO CART
                        </button>
                        <button 
                            className="w-full py-3 text-white font-bold tracking-wider bg-[#2B1416] hover:bg-[#3d1a1d] transition"
                        >
                            BUY IT NOW
                        </button>
                    </div>

                    {/* Share Icons */}
                    <div className="mt-6 text-sm text-gray-600 flex items-center space-x-3">
                        <span>SHARE:</span>
                        <span className="text-blue-700 cursor-pointer">F</span>
                        <span className="text-black cursor-pointer">T</span>
                        <span className="text-red-600 cursor-pointer">P</span>
                    </div>
                </div>
            </div>
            
            {/* Floating Loyalty Points Button (Same as collection page) */}
            <div className="fixed bottom-4 left-4 z-40">
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                    Loyalty Points
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;