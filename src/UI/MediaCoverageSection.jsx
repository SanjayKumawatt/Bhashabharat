import React from 'react';

const MediaCoverageSection = () => {
  const mediaArticles = [
    {
      type: "Startup",
      title: "[Startup Bharat] Bhagalpur-based ecommerce platform Bhashabharat is stitching a national network of weavers",
      description: "Started in 2017, Bhagalpur, Bihar-based Bhashabharat is looking to popularise and promote traditional textiles, designs and crafts from weavers and craftsmen from different parts of India.",
      author: "By Sindhu Kashyap",
      linkText: "READ MORE",
      darkTheme: true,
    },
    {
      title: "Bhashabharat: Weaving a potpourri of handcrafted sarees from the roots of handloom",
      description: "Bhashabharat was started with the idea of uplifting the incredibly talented artisans hailing from the hometown of the co-founder Shashank Parashar, silk capital Bhagalpur.",
      author: "By Himashu Dixit | 13 December 2021 | 12 min read",
      linkText: "READ MORE",
      darkTheme: false,
    },
  ];

  const DarkCardOverlay = () => (
    <div className="absolute inset-0 bg-black opacity-90 rounded-lg">
      <div className="absolute top-0 left-0 h-1 bg-red-600 w-1/3"></div>
    </div>
  );

  return (
    <section className="bg-gray-50 font-serif py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10 sm:mb-16">
        Our Media Coverage
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Card: Dark Background */}
        <div className="flex flex-col items-center">
          <div className="relative w-full shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="h-64 sm:h-72 md:h-80 w-full bg-gray-900 relative p-4 sm:p-6">
              <DarkCardOverlay />
              <div className="relative z-10 text-white text-left pt-4 sm:pt-6">
                <span className="bg-red-600 text-white text-xs sm:text-sm font-semibold px-2 py-1 uppercase rounded-sm mb-2 inline-block">
                  {mediaArticles[0].type}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold leading-snug mb-3">
                  {mediaArticles[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                  {mediaArticles[0].description}
                </p>
                <p className="text-[10px] sm:text-xs text-red-400 border-b border-red-400 inline-block">
                  {mediaArticles[0].author}
                </p>
                <div className="mt-4 sm:mt-6 text-center">
                  <div className="bg-gray-700 h-1 w-full my-2 sm:my-3"></div>
                  <p className="text-[10px] sm:text-xs text-gray-400">0:00 / 6:57 (Placeholder)</p>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="mt-4 sm:mt-6 text-sm sm:text-base font-semibold text-gray-800 tracking-wider hover:text-red-600 transition-colors duration-200 border-b border-gray-800 hover:border-red-600">
            {mediaArticles[0].linkText}
          </a>
        </div>

        {/* Right Card: Light Background */}
        <div className="flex flex-col items-center">
          <div className="w-full shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-white">
            <div className="p-4 sm:p-6 text-left">
              <h3 className="text-lg sm:text-xl font-bold leading-snug text-gray-800 mb-2 sm:mb-3">
                {mediaArticles[1].title}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-4">
                {mediaArticles[1].author}
              </p>
              <div className="flex space-x-2 mb-2 sm:mb-4">
                <span className="text-blue-500 text-sm sm:text-lg">f</span>
                <span className="text-blue-400 text-sm sm:text-lg">t</span>
                <span className="text-blue-600 text-sm sm:text-lg">in</span>
              </div>
              <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-2 sm:mt-4">
                <div className="h-20 sm:h-24 bg-gray-200"></div>
                <div className="h-20 sm:h-24 bg-gray-200"></div>
                <div className="h-20 sm:h-24 bg-gray-200"></div>
              </div>
            </div>
          </div>
          <a href="#" className="mt-4 sm:mt-6 text-sm sm:text-base font-semibold text-gray-800 tracking-wider hover:text-red-600 transition-colors duration-200 border-b border-gray-800 hover:border-red-600">
            {mediaArticles[1].linkText}
          </a>
        </div>

      </div>
    </section>
  );
};

export default MediaCoverageSection;
