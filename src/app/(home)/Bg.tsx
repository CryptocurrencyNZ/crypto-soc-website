"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// Award details
interface Award {
  title: string;
  description: string;
  image: string;
  year: string;
  organizer: string;
}

const awards: Award[] = [
  {
    title: "Web3 Company of the Year 2024",
    description:
      "Recognized for our outstanding contribution to the Web3 ecosystem in New Zealand.",
    image: "/images/photo1.jpg",
    year: "2024",
    organizer: "Web3NZ Awards",
  },
  {
    title: "Web3 Education Institution of the Year 2024",
    description:
      "Awarded for excellence in cryptocurrency education and empowering New Zealanders with blockchain knowledge.",
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

const BgPhotos = () => {
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
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[70vh] flex">
      {/* Background Image Side (Left side on desktop) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0">
          {awards.map((award, index: number) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex && !isTransitioning ? "opacity-100" : "opacity-0"}`}
            >
              <div className="absolute top-0 left-0 w-1/2 lg:w-1/2 h-full">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 50vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Subtle gradient on the right side of the background */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default BgPhotos;
