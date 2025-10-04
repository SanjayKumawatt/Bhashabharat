import React from 'react';
import { Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react'; 
// Install lucide-react if you haven't: npm install lucide-react

const FooterSection = () => {
  return (
    // Footer container: Uses the dark background color and serif font
    <footer className="bg-[#381e1e] font-serif py-16 px-4 sm:px-6 lg:px-8 relative text-white">
      
      {/* Loyalty Points Badge (positioned absolutely, like in the screenshot) */}
      <div className="absolute bottom-4 left-4 bg-blue-600 text-white font-bold py-2 px-4 text-sm z-10">
        Loyalty Points
      </div>

      {/* Main Grid Layout for the four columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-700 pb-12">
        
        {/* === 1. ABOUT OUR STORE === */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
            ABOUT OUR STORE
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Bhasha Bharat: A reflection of unity in diversity, a platform to **preserve existing traditional weaving skills & art** and to **strengthen sustainable livelihood** among weavers and artisans community of India.
          </p>
        </div>

        {/* === 2. FOOTER MENU === */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
            FOOTER MENU
          </h3>
          <ul className="space-y-3 text-sm">
            {['Search', 'About us', 'Terms & Conditions', 'Contact Us', 'Blogs'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(/ & /g, '').replace(/ /g, '-')}`} 
                   className="text-gray-300 hover:text-[#d4af37] transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* === 3. NEWSLETTER === */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
            NEWSLETTER
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe for Latest Offers & Update!
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your e-mail"
              className="w-full bg-transparent border-b border-gray-600 focus:border-[#d4af37] text-white py-2 pr-10 focus:outline-none placeholder-gray-500"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#d4af37]">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* === 4. FOLLOW US === */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
            FOLLOW US
          </h3>
          <div className="flex space-x-2">
            {/* Social Icons Container with Dark Background */}
            <a href="#" className="w-10 h-10 bg-black/50 border border-gray-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#381e1e] transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-black/50 border border-gray-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#381e1e] transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-black/50 border border-gray-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#381e1e] transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="flex space-x-4">
            <p>&copy; BhashaBharat Beautiful Indian Ethnic wear</p>
            <p>•</p>
            <p>Powered by Shopify</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;