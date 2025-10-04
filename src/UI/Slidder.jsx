import { useEffect, useState } from "react";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";

const slides = [
  {
    image: banner1,
    title: "Craftsmanship meets",
    desc: "DISCOVER THE EXQUISITE CRAFTSMANSHIP OF TUSSAR SILK",
    button: "SHOP NOW",
  },
  {
    image: banner2,
    title: "Bhagalpuri Tussar Silk Sarees",
    desc: "DISCOVER TIMELESS ELEGANCE IN EVERY WEAVE",
    button: "SHOP NOW",
  },
  {
    image: banner3,
    title: "Tussar Ghicha Sarees",
    desc: "EXPERIENCE THE SHEER ELEGANCE AND EFFORTLESS GLAMOUR",
    button: "SHOP NOW",
  },
];

export default function Slidder() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[540px] sm:h-[600px] md:h-[650px] lg:h-[700px] overflow-hidden shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image layer */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Text overlay layer */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white px-4 sm:px-10 lg:px-20 z-20">
            <p className="mb-3 text-sm sm:text-base md:text-lg lg:text-xl">
              {slide.desc}
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              {slide.title}
            </h2>
            <button className="bg-white hover:bg-blue-600 text-black px-5 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base">
              {slide.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
