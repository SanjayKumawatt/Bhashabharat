import React from 'react';
import modelImage from '../assets/Pakistani-Wedding-Dress-Summer-Collection.webp'; 

const MissionSection = () => {
  return (
    <section className="font-serif py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        
        {/* Left Side: Image */}
        <div className="lg:w-1/2 relative w-full">
          {/* Decorative Dark Background Shape */}
          <div className="absolute top-[-20px] left-[-40px] w-3/4 h-[120%] bg-[#381e1e] z-10 hidden lg:block"></div>
          
          <div className="relative z-20 shadow-xl">
            <img 
              src={modelImage} 
              alt="Model showcasing Indian handloom and handicrafts" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="lg:w-1/2 w-full text-center lg:text-left pt-6 lg:pt-0">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-500 mb-2">
            BHASHA BHARAT
          </p>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Our Mission:
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Our mission is to popularize and promote Indian handloom and handicrafts on a global scale. We work tirelessly to bridge the gap between skilled artisans and potential buyers, providing a platform for artisans to showcase their craftsmanship and for customers to access a wide range of authentic Indian products.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            We are committed to maintaining the highest standards of moral and ethical integrity in our business practices. Through collaboration and support from our customers, we strive to uplift and empower the artisans, ensuring sustainable livelihoods and the preservation of India's rich cultural heritage.
          </p>
          
          <button className="bg-[#4b3737] hover:bg-[#332727] text-white font-bold py-2 sm:py-3 px-6 sm:px-8 uppercase tracking-wider text-sm transition duration-300">
            SHOP ALL
          </button>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;
