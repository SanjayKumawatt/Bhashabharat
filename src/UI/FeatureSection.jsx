import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ShoppingCart, ShoppingBag } from "lucide-react"; // lucide-react icons

const features = [
  {
    icon: <BadgeCheck className="w-12 h-12 text-blue-500" />,
    title: "AUTHENTICITY",
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-purple-500" />,
    title: "HASSLE FREE RETURNS",
  },
  {
    icon: <ShoppingBag className="w-12 h-12 text-yellow-500" />,
    title: "FAIR PRICE SHOPPING",
  },
];

function FeatureSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10, rotate: -2, scale: 1.05 }}
          >
            {/* Icon Animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="mt-4 text-sm font-semibold tracking-wide text-gray-800 uppercase">
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
