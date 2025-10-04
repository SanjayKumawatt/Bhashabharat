import React from "react";
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

import topSellerHover1 from "../src/assets/topSellerHover1.webp"
import topSellerHover2 from "../src/assets/topSellerHover2.webp"


function Home() {
    return (
        <div className="bg-[#F5F1EC] min-h-screen">
            <Header />
            <Slidder />
            {/* Best Sellers Section */}
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

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
                    {[topSeller1, topSeller2, topSeller1, topSeller2].map((product, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[280px] lg:w-[300px] flex flex-col justify-center items-center"
                        >
                            <img
                                src={product}
                                alt="Best Seller"
                                className="w-full h-[300px] sm:h-[320px] md:h-[350px] object-cover"
                            />
                            <div className="p-5 text-center">
                                <h3 className="text-sm font-semibold mb-2">BHASHABHARAT</h3>
                                <p className="text-gray-600 mb-3">
                                    Pure Tussar Silk Madhubani HandPainted Saree
                                </p>
                                <p className="text-gray-800 font-semibold mb-2">
                                    Sale price: <span className="text-red-500">₹18,000.00</span>
                                </p>
                                <p className="text-yellow-500 text-lg">⭐⭐⭐⭐</p>
                            </div>
                            <button className="uppercase text-sm bg-[#2B1416] text-[#ae9b4dee] py-2 sm:py-3 px-4 sm:px-6 rounded mb-3">
                                + add to cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Best Sellers Section 2 */}
            <div className="bg-[#D7C39B] py-20 px-4 sm:px-8">
                <section className="flex flex-col items-center">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Bhagalpuri Tussar Silk Saree</h1>
                        <h2 className="text-xl sm:text-2xl font-medium text-black">(Best Sellers)</h2>
                    </div>

                    {/* Product Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
                        {[topSellerHover1, topSellerHover2, topSellerHover1, topSellerHover2].map((product, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[280px] lg:w-[300px] flex flex-col justify-center items-center"
                            >
                                <img
                                    src={product}
                                    alt="Best Seller"
                                    className="w-full h-[300px] sm:h-[320px] md:h-[350px] object-cover"
                                />
                                <div className="p-5 text-center">
                                    <h3 className="text-sm font-semibold mb-2">BHASHABHARAT</h3>
                                    <p className="text-gray-600 mb-3">
                                        Pure Tussar Silk Madhubani HandPainted Saree
                                    </p>
                                    <p className="text-gray-800 font-semibold mb-2">
                                        Sale price: <span className="text-red-500">₹18,000.00</span>
                                    </p>
                                    <p className="text-yellow-500 text-lg">⭐⭐⭐⭐</p>
                                </div>
                                <button className="uppercase text-sm bg-[#2B1416] text-[#ae9b4dee] py-2 sm:py-3 px-4 sm:px-6 rounded mb-3">
                                    + add to cart
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <FeatureSection />
            <MissionSection />
            <Imagee />
            <TestimonialSection />
            <MediaCoverageSection />
            <FeaturesSection />
            <FooterSection />
        </div>
    );
}

export default Home;
