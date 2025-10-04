import React from 'react';

// NOTE: Ideally, the media card backgrounds (images) would be separate components, 
// but here we are replicating the look using Tailwind for simplicity.

const MediaCoverageSection = () => {
  
  // Data for the two media articles
  const mediaArticles = [
    {
      type: "Startup",
      title: "[Startup Bharat] Bhagalpur-based ecommerce platform Bhashabharat is stitching a national network of weavers",
      description: "Started in 2017, Bhagalpur, Bihar-based Bhashabharat is looking to popularise and promote traditional textiles, designs and crafts from weavers and craftsmen from different parts of India.",
      author: "By Sindhu Kashyap",
      linkText: "READ MORE",
      darkTheme: true, // Use a dark background for the left card
    },
    {
      title: "Bhashabharat: Weaving a potpourri of handcrafted sarees from the roots of handloom",
      description: "Bhashabharat was started with the idea of uplifting the incredibly talented artisans hailing from the hometown of the co-founder Shashank Parashar, silk capital Bhagalpur.",
      author: "By Himashu Dixit | 13 December 2021 | 12 min read",
      linkText: "READ MORE",
      darkTheme: false, // Use a light background for the right card
    },
  ];

  const DarkCardOverlay = () => (
    // This div creates the dark background with the red accent bar for the video/article thumbnail
    <div className="absolute inset-0 bg-black opacity-90 rounded-lg">
      <div className="absolute top-0 left-0 h-1 bg-red-600 w-1/3"></div>
    </div>
  );

  return (
    // Main Section: Light background (off-white) and padding
    <section className="bg-gray-50 font-serif py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Centered Title */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 sm:mb-16">
        Our Media Coverage
      </h2>
      
      {/* Grid Container for the two cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* === Left Card: Dark Background (Simulating a Video Thumbnail) === */}
        <div className="flex flex-col items-center">
          <div className="relative w-full shadow-lg rounded-lg overflow-hidden border border-gray-200">
            
            {/* The actual image/video background is hard to replicate with just color, 
               so we use a placeholder and dark overlay */}
            <div className="h-72 w-full bg-gray-900 relative p-6">
              
              <DarkCardOverlay />
              
              <div className="relative z-10 text-white text-left pt-6">
                
                {/* Startup Tag */}
                <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 uppercase rounded-sm mb-2 inline-block">
                  {mediaArticles[0].type}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold leading-snug mb-4">
                  {mediaArticles[0].title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-300 mb-4">
                  {mediaArticles[0].description}
                </p>
                
                {/* Author */}
                <p className="text-xs text-red-400 border-b border-red-400 inline-block">
                  {mediaArticles[0].author}
                </p>

                {/* Video Player Placeholder */}
                <div className="mt-8 text-center">
                  <div className="bg-gray-700 h-1 w-full my-3"></div>
                  <p className="text-xs text-gray-400">0:00 / 6:57 (Placeholder)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Read More Link */}
          <a href="#" className="mt-6 text-base font-semibold text-gray-800 tracking-wider hover:text-red-600 transition-colors duration-200 border-b border-gray-800 hover:border-red-600">
            {mediaArticles[0].linkText}
          </a>
        </div>


        {/* === Right Card: Light Background (Simulating a Web Article) === */}
        <div className="flex flex-col items-center">
          <div className="w-full shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-white">
            <div className="p-6 text-left">
              
              {/* Title */}
              <h3 className="text-xl font-bold leading-snug text-gray-800 mb-3">
                {mediaArticles[1].title}
              </h3>

              {/* Author/Date Info */}
              <p className="text-xs text-gray-500 mb-4">
                {mediaArticles[1].author}
              </p>
              
              {/* Social Icons Placeholder */}
              <div className="flex space-x-2 mb-4">
                  <span className="text-blue-500 text-lg">f</span>
                  <span className="text-blue-400 text-lg">t</span>
                  <span className="text-blue-600 text-lg">in</span>
              </div>

              {/* Image Grid Placeholder (Using simple div for structure) */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="h-24 bg-gray-200"></div>
                <div className="h-24 bg-gray-200"></div>
                <div className="h-24 bg-gray-200"></div>
              </div>
            </div>
          </div>
          
          {/* Read More Link */}
          <a href="#" className="mt-6 text-base font-semibold text-gray-800 tracking-wider hover:text-red-600 transition-colors duration-200 border-b border-gray-800 hover:border-red-600">
            {mediaArticles[1].linkText}
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default MediaCoverageSection;