import React from "react";
import naari from "../assets/3Naari.webp";

function Imagee() {
  return (
    <div className="w-full py-8 flex justify-center">
      <img 
        src={naari} 
        alt="Naari Collection" 
        className="w-full max-w-6xl h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  );
}

export default Imagee;
