"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Award {
  title: string;
  description: string;
  image: string;
  year: string;
  organizer: string;
}

const awards: Award[] = [
  {
    title: "Web3 Academic Institution of the Year 2024",
    description:
      "Awarded for excellence in cryptocurrency education, empowering Canterbury University Students and the wider community with blockchain knowledge.",
    image: "/images/web3-awards-cryptosoc.jpg",
    year: "2024",
    organizer: "Web3NZ Awards",
  },
  {
    title: "WebNZ Hackathon Best UX Design Award",
    description:
      "Our team's commitment to creating intuitive and engaging blockchain interfaces earned us this prestigious recognition.",
    image: "/images/web3nz-award.jpg",
    year: "2025",
    organizer: "Web3NZ Hackathon",
  },
];

const AwardsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === awards.length - 1 ? 0 : prevIndex + 1,
        );
        setIsTransitioning(false);
      }, 500);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex flex-col lg:flex-row min-h-[70vh]">
      {/* Image Block */}
      <div className="relative w-full lg:w-1/2 h-64 sm:h-96 lg:h-auto">
        {awards.map((award, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex && !isTransitioning ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={award.image}
              alt={award.title}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:block hidden bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Content Block */}
      <div className="relative z-10 w-full lg:w-1/2 ml-auto flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10">
        <div className="max-w-xl mx-auto lg:mx-0">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="text-orange-500 block mt-1">Our Awards</span>
                Industry Recognition
              </h2>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/80 rounded-2xl p-4 backdrop-blur-xl border border-orange-500/30 shadow-[0_0_15px_rgba(255,165,0,0.4)] transform hover:scale-105 transition-transform duration-500">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15C8.70005 15 6.00005 12.3 6.00005 9V3H18V9C18 12.3 15.3 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.25 21H6.75C5.25 21 4.5 20.25 4.5 18.75V17.25C4.5 15.75 5.25 15 6.75 15H17.25C18.75 15 19.5 15.75 19.5 17.25V18.75C19.5 20.25 18.75 21 17.25 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 3H6V9C6 9.6 6.4 11.1 7.2 12.2L4.8 7.8C4.3 6.8 3.5 6.1 3 6V3Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 3H18V9C18 9.6 17.6 11.1 16.8 12.2L19.2 7.8C19.7 6.8 20.5 6.1 21 6V3Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 21V19.5C10.5 18.7 11.2 18 12 18C12.8 18 13.5 18.7 13.5 19.5V21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mt-4">
              Celebrating our achievements in the Web3 and cryptocurrency space
              in New Zealand.
            </p>
          </div>

          {/* Current Award */}
          <div className="mb-8 relative h-[240px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 w-full h-full">
              {awards.map((award, index) => (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    opacity: index === currentImageIndex ? 1 : 0,
                    transform: `translateY(${index === currentImageIndex ? 0 : 30}px)`,
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    pointerEvents:
                      index === currentImageIndex ? "auto" : "none",
                  }}
                >
                  <div className="mb-4 pb-4 border-b border-orange-500/30">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-orange-400 text-xs sm:text-sm mb-2">
                      {award.organizer} · {award.year}
                    </p>
                    <p className="text-gray-300 text-sm">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots & Stats */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 mb-4">
            <div className="flex items-center gap-2">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? "bg-orange-500 w-6" : "bg-gray-500 hover:bg-gray-400"}`}
                  aria-label={`View award ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              {currentImageIndex + 1} of {awards.length} awards
            </div>
          </div>

          {/* Award Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-5">
            <div className="text-center p-2 sm:p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/30">
              <p className="text-lg sm:text-xl font-bold text-orange-400">
                {awards.length}
              </p>
              <p className="text-xs text-gray-300">Awards Won</p>
            </div>
            <div className="text-center p-2 sm:p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/30">
              <p className="text-lg sm:text-xl font-bold text-orange-400">
                2024–25
              </p>
              <p className="text-xs text-gray-300">Award Period</p>
            </div>
            <div className="text-center p-2 sm:p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/30">
              <p className="text-lg sm:text-xl font-bold text-orange-400">
                Web3
              </p>
              <p className="text-xs text-gray-300">Industry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
