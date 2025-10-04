import React from 'react';
import { Truck, Phone, Lock, Mail } from 'lucide-react';

const FeaturesSection = () => {
  const featureItems = [
    {
      icon: Truck,
      title: "FREE SHIPPING ACROSS INDIA",
      content: (
        <>
          For international deliveries, the shipping charges will be extra as per the 
          weight of the order for handcrafted products, it may take 30-35 working 
          days for dispatch from the date of the order. For deliveries outside India, 
          customs duties and local taxes have to be paid by customers to our shipping 
          partner at the time of shipment delivery. The amount of duties and taxes depend 
          on the policies of your destination country.
        </>
      ),
    },
    {
      icon: Phone,
      title: "CUSTOMER SERVICE",
      content: (
        <>
          We are available from Monday to Friday to answer your questions @ 9308885229
        </>
      ),
    },
    {
      icon: Lock,
      title: "SECURE PAYMENT",
      content: (
        <>
          Your payment information is processed securely.
        </>
      ),
    },
    {
      icon: Mail,
      title: "CONTACT US",
      content: (
        <>
          Need to contact us? Just send us an e-mail at <a href="mailto:bhashabnaratcare@gmail.com" className="hover:text-[#d4af37] transition-colors duration-200">bhashabnaratcare@gmail.com</a>
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#381e1e] font-serif py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center text-white">
        {featureItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon */}
            <item.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#d4af37] mb-3 sm:mb-4" />

            {/* Title */}
            <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-wider uppercase mb-2 sm:mb-4">
              {item.title}
            </h3>

            {/* Content */}
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
