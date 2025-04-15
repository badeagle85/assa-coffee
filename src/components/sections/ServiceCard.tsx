"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  imagePath: string;
  isWide?: boolean;
}

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ServiceCard = ({
  title,
  description,
  imagePath,
  isWide = false,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className={`text-center ${isWide ? "md:col-span-2" : ""} group`}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 flex justify-center items-center h-[300px]">
        <Image
          src={imagePath}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-medium">자세히 보기</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
