import React from 'react';

const TestimonialSection = () => {
  return (
    // Section container with dark background, padding, and serif font
    <section className="bg-[#381e1e] font-serif py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    

      {/* Main content container for centering and max width */}
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Subtitle */}
        <p className="text-sm tracking-widest uppercase text-[#9e7a4b] mb-2">
          READ HERE ABOUT HAPPY CUSTOMERS
        </p>
        
        {/* Main Title */}
        <h2 className="text-4xl font-bold text-[#d4af37] mb-12">
          What Our Customers Say
        </h2>
        
        {/* Testimonial Card/Quote */}
        <div className="relative text-left bg-transparent p-6 sm:p-8 rounded-lg">
          
          {/* Large Quote Mark (decorative) */}
          <span className="absolute top-0 left-0 text-[100px] leading-[0.7] text-[#9e7a4b] opacity-70">
            &ldquo;
          </span>
          
          {/* Testimonial Text */}
          <p className="text-2xl italic leading-relaxed text-[#d4af37] mt-8 mb-6 relative z-10">
            "Highly impressed with BhashaBharat's collection of handloom and handicrafts. 
            The attention to detail and craftsmanship in the products are remarkable. 
            It's wonderful to support a brand that values Indian heritage and empowers local artisans."
          </p>
          
          {/* Customer Name and Location */}
          <p className="text-lg font-semibold text-[#9e7a4b] text-right">
            Neha, Chennai
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="bg-transparent border border-[#d4af37] text-[#d4af37] p-3 hover:bg-[#d4af37] hover:text-[#381e1e] transition-colors duration-300">
            <svg xmlns="http://www.www3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="bg-transparent border border-[#d4af37] text-[#d4af37] p-3 hover:bg-[#d4af37] hover:text-[#381e1e] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;