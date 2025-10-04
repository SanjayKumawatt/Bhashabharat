import React from 'react';

// NOTE: Please replace this path with the actual path to your image file.
import modelImage from '../assets/Pakistani-Wedding-Dress-Summer-Collection.webp'; 

const MissionSection = () => {
  return (
    // Outer section container
    <section className="font-serif py-16 px-4 sm:px-6 lg:px-8 bg-white">
      
      {/* Content Container: Centered, max width, uses flex for layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:gap-16">
        
        {/* Left Side: Image and Decorative Elements */}
        <div className="lg:w-1/2 relative pb-10 pr-10 lg:pr-0">
            
          {/* Decorative Dark Background Shape */}
          {/* We use negative margins and absolute positioning to create the overlapping effect */}
          <div className="absolute top-[-40px] left-[-80px] w-3/4 h-[120%] bg-[#381e1e] z-10 hidden lg:block"></div>
          
          {/* Image Container with Shadow */}
          <div className="relative z-20 shadow-xl">
            <img 
              src={modelImage} 
              alt="Model showcasing Indian handloom and handicrafts" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text Content and Button */}
        <div className="lg:w-1/2 pt-12 lg:pt-8 xl:pt-16">
          
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-1">
            BHASHA BHARAT
          </p>
          
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Mission:
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is to popularize and promote Indian handloom and handicrafts on a global scale. We work tirelessly to bridge the gap between skilled artisans and potential buyers, providing a platform for artisans to showcase their craftsmanship and for customers to access a wide range of authentic Indian products.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            We are committed to maintaining the highest standards of moral and ethical integrity in our business practices. Through collaboration and support from our customers, we strive to uplift and empower the artisans, ensuring sustainable livelihoods and the preservation of India's rich cultural heritage.
          </p>
          
          {/* Shop All Button */}
          <button className="bg-[#4b3737] hover:bg-[#332727] text-white font-bold py-3 px-8 uppercase tracking-wider text-sm transition duration-300">
            SHOP ALL
          </button>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;