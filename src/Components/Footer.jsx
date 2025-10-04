import React from 'react';
import { Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-[#381e1e] font-serif py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative text-white">
      
      {/* Loyalty Points Badge */}
      <div className="absolute bottom-4 left-4 bg-blue-600 text-white font-bold py-2 px-4 text-sm z-10 rounded">
        Loyalty Points
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-gray-700 pb-12">
        
        {/* 1. ABOUT OUR STORE */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
            ABOUT OUR STORE
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Bhasha Bharat: A reflection of unity in diversity, a platform to <strong>preserve existing traditional weaving skills & art</strong> and to <strong>strengthen sustainable livelihood</strong> among weavers and artisans community of India.
          </p>
        </div>

        {/* 2. FOOTER MENU */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
            FOOTER MENU
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            {['Search', 'About us', 'Terms & Conditions', 'Contact Us', 'Blogs'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/ & /g, '').replace(/ /g, '-')}`}
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. NEWSLETTER */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
            NEWSLETTER
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            Subscribe for Latest Offers & Updates!
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your e-mail"
              className="w-full bg-transparent border-b border-gray-600 focus:border-[#d4af37] text-white py-2 pr-10 focus:outline-none placeholder-gray-500 text-sm sm:text-base"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#d4af37]">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* 4. FOLLOW US */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
            FOLLOW US
          </h3>
          <div className="flex space-x-2 sm:space-x-3">
            {[
              { icon: Facebook, link: '#' },
              { icon: Twitter, link: '#' },
              { icon: Instagram, link: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 border border-gray-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#381e1e] transition-colors duration-200 rounded"
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-2 sm:gap-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <p>&copy; BhashaBharat Beautiful Indian Ethnic wear</p>
          <span>•</span>
          <p>Powered by Shopify</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
