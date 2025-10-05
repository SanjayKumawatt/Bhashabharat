// ./Components/Footer.jsx (Updated and Responsive)

import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, ArrowRight, ChevronDown } from 'lucide-react'; // ChevronDown इंपोर्ट किया गया
import { NavLink } from 'react-router-dom';

// ----------------------------------------------------
// FOOTER MENU DATA
// ----------------------------------------------------
const footerNavItems = [
    { title: "Home", to: "/" },
    { title: "SAREES", to: "/sarees" },
    { title: "DUPPATA & STOLE", to: "/dupattas" }, // /dupattas रूट का उपयोग करें
    { title: "SALE", to: "/sale" },
    { title: "Blogs", to: "/blogs" },
];

// ----------------------------------------------------
// ACCORDION ITEM (मोबाइल के लिए)
// ----------------------------------------------------
const FooterAccordionItem = ({ title, children }) => {
    // हर सेक्शन के लिए ओपन/क्लोज स्टेट
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700 py-4 lg:py-0 lg:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                // मोबाइल पर फुल-विड्थ बटन, डेस्कटॉप पर छिपा हुआ
                className="w-full flex justify-between items-center text-lg lg:text-xl font-semibold uppercase tracking-wider text-[#d4af37] lg:mb-6 lg:pointer-events-none"
            >
                <span className="lg:hidden">{title}</span>
                {/* Chevron आइकन केवल मोबाइल/टैबलेट पर दिखाएँ */}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 lg:hidden ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                
                {/* डेस्कटॉप पर हेडिंग दोबारा रेंडर करें */}
                <h3 className="hidden lg:block text-lg lg:text-xl font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
                    {title}
                </h3>
            </button>
            
            {/* कंटेंट: मोबाइल पर स्टेट के हिसाब से खुलेगा/बंद होगा, डेस्कटॉप पर हमेशा दिखेगा */}
            <div className={`transition-all duration-300 ease-in-out overflow-hidden lg:max-h-full 
                            ${isOpen ? 'max-h-64' : 'max-h-0 lg:max-h-full'}`}
            >
                {children}
            </div>
        </div>
    );
};


// ----------------------------------------------------
// MAIN FOOTER COMPONENT
// ----------------------------------------------------
const FooterSection = () => {
    return (
        <footer className="bg-[#381e1e] font-serif py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative text-white">

            {/* Loyalty Points Badge */}
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white font-bold py-2 px-4 text-sm z-10 rounded">
                Loyalty Points
            </div>

            {/* Main Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-gray-700 pb-12">

                {/* 1. ABOUT OUR STORE (हमेशा ओपन) */}
                <div className="lg:col-span-1">
                    <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider text-[#d4af37] mb-6">
                        ABOUT OUR STORE
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                        Bhasha Bharat: A platform to <strong>preserve existing traditional weaving skills & art</strong> and to <strong>strengthen sustainable livelihood</strong> among weavers and artisans community of India.
                    </p>
                </div>

                {/* 2. FOOTER MENU (Accordion on Mobile, Grid on Desktop) */}
                <FooterAccordionItem title="FOOTER MENU">
                    <ul className="flex flex-col gap-3 text-gray-300 pt-2 lg:pt-0">
                        {footerNavItems.map(item => (
                            <li key={item.title}>
                                <NavLink 
                                    to={item.to} 
                                    className="hover:text-[#d4af37] transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </FooterAccordionItem>

                {/* 3. NEWSLETTER (Accordion on Mobile) */}
                <FooterAccordionItem title="NEWSLETTER">
                    <p className="text-sm sm:text-base text-gray-300 mb-4 pt-2 lg:pt-0">
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
                </FooterAccordionItem>

                {/* 4. FOLLOW US (Accordion on Mobile) */}
                <FooterAccordionItem title="FOLLOW US">
                    <div className="flex space-x-3 pt-2 lg:pt-0">
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
                </FooterAccordionItem>
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