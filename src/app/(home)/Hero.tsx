"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ✅ Sliding background with continuous scrolling
const SlidingBackground = () => {
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per image

    return () => clearInterval(interval);
  });

  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-black">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={images[currentIndex]}
            className="absolute inset-0 w-full h-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 2,
              ease: [0.4, 0, 0.2, 1],
              x: {
                type: "spring",
                stiffness: 100,
                damping: 30,
              },
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                sizes="100vw"
                className="object-cover w-full h-full opacity-40"
                priority
              />
              {/* Grey overlay */}
              <div className="absolute inset-0 bg-gray-900/50" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Hero = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-between m-0 mt-20 p-0 min-h-[80vh] lg:min-h-screen">
      {/* 🔁 Background Slider */}
      <SlidingBackground />

      {/* 🔤 Foreground Content */}
      <div className="w-full flex flex-col justify-center items-center text-center px-8 md:px-[5%] pt-20 md:mt-20 relative z-10 bg-transparent">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 font-bold leading-tight relative z-20"
        >
          University of Canterbury <br />
          Bitcoin, Crypto & Blockchain Society
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={slideUp}
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300 relative z-20"
        >
          - Advancing Adoption, Knowledge and Community at UC -
        </motion.p>
        <div className="text-center z-20">
          <Link
            href="/whitepaper"
            className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 
                        bg-gradient-to-r from-orange-500/20 to-orange-600/10
                        hover:from-orange-500/30 hover:to-orange-600/20
                        border border-orange-500/40 hover:border-orange-400/60
                        rounded-lg text-orange-400 hover:text-orange-300 
                        shadow-sm hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] 
                        transition-all duration-300 text-sm sm:text-base"
          >
            <span>- Whitepaper -</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
