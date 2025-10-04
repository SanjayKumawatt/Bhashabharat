import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="bg-[#381e1e] font-serif py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Subtitle */}
        <p className="text-xs sm:text-sm tracking-widest uppercase text-[#9e7a4b] mb-2">
          READ HERE ABOUT HAPPY CUSTOMERS
        </p>
        
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-8 sm:mb-12">
          What Our Customers Say
        </h2>
        
        {/* Testimonial Card */}
        <div className="relative text-left bg-transparent p-4 sm:p-6 md:p-8 rounded-lg">
          
          {/* Large Quote Mark */}
          <span className="absolute top-0 left-0 text-[60px] sm:text-[80px] md:text-[100px] leading-[0.7] text-[#9e7a4b] opacity-70">
            &ldquo;
          </span>
          
          {/* Testimonial Text */}
          <p className="text-lg sm:text-xl md:text-2xl italic leading-relaxed text-[#d4af37] mt-8 mb-4 sm:mb-6 relative z-10">
            "Highly impressed with BhashaBharat's collection of handloom and handicrafts. 
            The attention to detail and craftsmanship in the products are remarkable. 
            It's wonderful to support a brand that values Indian heritage and empowers local artisans."
          </p>
          
          {/* Customer Name */}
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#9e7a4b] text-right">
            Neha, Chennai
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8 sm:mt-12">
          <button className="bg-transparent border border-[#d4af37] text-[#d4af37] p-2 sm:p-3 hover:bg-[#d4af37] hover:text-[#381e1e] transition-colors duration-300 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="bg-transparent border border-[#d4af37] text-[#d4af37] p-2 sm:p-3 hover:bg-[#d4af37] hover:text-[#381e1e] transition-colors duration-300 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
