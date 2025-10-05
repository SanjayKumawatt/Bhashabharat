// ./Pages/Blogs.jsx

import React from 'react';
import { Link } from 'react-router-dom';

import blog1 from "../src/assets/Blog/blog1.webp"
import blog2 from "../src/assets/Blog/blog2.webp"
import blog3 from "../src/assets/Blog/blog3.webp"
import blog4 from "../src/assets/Blog/blog4.webp"
import blog5 from "../src/assets/Blog/blog5.webp"






// ----------------------------------------------------
// 1. DUMMY BLOG POSTS DATA
// ----------------------------------------------------
const dummyPosts = [
    {
        id: 1,
        title: "Madhubani Sarees: Embracing Age-Old Art in Today's Fashion World",
        snippet: "Dive into the vibrant world of Madhubani art woven into modern sarees. Learn about the history, motifs, and the timeless appeal of these artistic drapes.",
        image:blog1, // Example Image
        link: "/blogs/post-1",
    },
    {
        id: 2,
        title: "Bhagalpuri Silk: The Legacy of a Timeless Indian Fabric",
        snippet: "Discover the craftsmanship and journey of Bhagalpuri silk, known for its unique texture and rich history in Indian handloom traditions.",
        image: blog2,
        link: "/blogs/post-2",
    },
    // The image below the main section is separate content
    {
        id: 3,
        title: "Why Linen Sarees are Perfect for Every Season?",
        snippet: "Exploring the comfort and elegant drape of linen, making it a must-have in every modern wardrobe.",
        image: blog3,
        link: "/blogs/post-3",
    },
    // More posts to fill the page
    {
        id: 4,
        title: "Embrace Your Regal Side: Why Silk Sarees Are Timeless",
        snippet: "A deep dive into the luxury and heritage associated with various types of silk sarees and why they remain essential.",
        image: blog4,
        link: "/blogs/post-4",
    },
    {
        id: 5,
        title: "The Art of Handloom: A Comprehensive Guide to Handcrafted Sarees",
        snippet: "Understanding the intricate weaving techniques, ethical sourcing, and dedication involved in creating handloom masterpieces.",
        image: blog5,
        link: "/blogs/post-5",
    },
    {
        id: 6,
        title: "A Conversation with Madhubani Artist Rema Devi",
        snippet: "An exclusive interview where Rema Devi shares her artistic journey, inspiration, and the future of Madhubani in fashion.",
        image: "https://via.placeholder.com/200x300/DDA0DD/000?text=Saree+6",
        link: "/blogs/post-6",
    },
];

// ----------------------------------------------------
// 2. MAIN BLOG INDEX COMPONENT
// ----------------------------------------------------
const Blogs = () => {
    return (
        <div className="font-serif text-gray-800 bg-white min-h-screen">
            <div className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
                
                {/* Header / Title */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-[#2B1416]">
                    BhashaBharat Blogs
                </h1>

                {/* Blog Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-10">
                    
                    {/* Render Each Blog Post in the Grid */}
                    {dummyPosts.map((post, index) => (
                        <div key={post.id} className="flex flex-col">
                            {/* Layout Logic: 
                                - Index 0 and 1 use a text-first layout (as seen in the top-left of your screenshot)
                                - Others use an image/text structure. 
                                Note: Since the screenshot shows a very unique three-column structure, we'll simplify 
                                it to a standard three-column grid for clean code.
                            */}
                            
                            <Link to={post.link} className="block group">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    // Image is the first item
                                    className="w-full h-auto object-cover mb-4 transition duration-300 group-hover:opacity-80"
                                />
                                <h2 className="text-xl font-bold mb-2 text-[#2B1416] group-hover:underline">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-3">
                                    {post.snippet}
                                </p>
                                <span className="text-sm text-[#AE9A4D] font-semibold hover:text-[#2B1416] transition">
                                    Read More
                                </span>
                            </Link>
                            
                            {/* Add a separator between posts if needed */}
                            {index < dummyPosts.length - 1 && <hr className="my-8 md:hidden" />}

                        </div>
                    ))}
                    
                    {/* Note: The original site's layout is complex (text in column 1, image in column 2, etc.).
                        The simple 3-column grid above is easier to maintain. If you want the exact complex layout,
                        it requires a much more complex structure (e.g., masonry grid or custom alignment). 
                    */}
                    
                </div>
                
                {/* Load More/Pagination */}
                <div className="text-center mt-16">
                    <button className="px-8 py-3 border border-[#2B1416] text-[#2B1416] font-semibold hover:bg-[#2B1416] hover:text-white transition duration-300">
                        Load More Posts
                    </button>
                </div>
            </div>
            
            {/* Floating Loyalty Points Button */}
            <div className="fixed bottom-4 left-4 z-40">
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-lg">
                    Loyalty Points
                </button>
            </div>
        </div>
    );
};

export default Blogs;