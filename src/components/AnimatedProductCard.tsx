"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

interface AnimatedProductCardProps {
  product: Product;
  index: number;
}

export default function AnimatedProductCard({ product, index }: AnimatedProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="product-card relative overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative p-4">
        {/* Product Image */}
        <motion.div
          className="relative overflow-hidden rounded-lg mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={200}
            className="w-full h-48 object-contain"
          />

          {/* Overlay buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full text-[#42b6b7] hover:bg-[#42b6b7] hover:text-white transition-colors"
            >
              <Eye className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full text-[#42b6b7] hover:bg-[#42b6b7] hover:text-white transition-colors"
            >
              <Heart className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full text-[#42b6b7] hover:bg-[#42b6b7] hover:text-white transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-bold text-sm mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-xs text-gray-600 mb-2">{product.category}</p>
          <p className="text-xs text-gray-500 mb-4 line-clamp-2">{product.description}</p>

          <div className="flex justify-between items-center">
            <motion.span
              className="text-sm font-bold text-[#42b6b7]"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {product.price}
            </motion.span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#42b6b7] text-xs hover:underline"
            >
              ⟐ Compare
            </motion.button>
          </div>
        </motion.div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 border-2 border-[#42b6b7] rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
