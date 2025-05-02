"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Sponsor {
  name: string;
  image: string;
  description: string;
  website: string;
}

const SponsorBanner = () => {
  // We won't need activeCardIndex state anymore since we'll use hover
  // But we'll keep a touch-specific state for mobile devices
  const [touchActiveCard, setTouchActiveCard] = useState<number | null>(null);

  const sponsors: Sponsor[] = [
    {
      name: "Easy Crypto",
      image: "/images/easy-crypto-NZ-logo.png",
      description:
        "New Zealand's most trusted crypto retail platform for buying and selling cryptocurrency, established in 2018.",
      website: "https://easycrypto.com",
    },
    {
      name: "Blockchain NZ",
      image: "/images/Blockchain-NZ-logo-removebg-preview.png",
      description:
        "Leading blockchain advocacy and education industry body in New Zealand, established in 2018.",
      website: "https://blockchain.org.nz",
    },
    {
      name: "Binance NZ",
      image: "/images/nz-l-1.png",
      description:
        "The world's largest cryptocurrency exchange, supporting crypto initiatives across New Zealand.",
      website: "https://www.binance.com/en-NZ",
    },
    {
      name: "Pay It Now",
      image: "/images/PIN_Master Logo_WHITE.png",
      description:
        "Award winning New Zealand digital asset payment processor, technology company, crypto on-and-off ramp, wallet and token.",
      website: "https://payitnow.io/",
    },
    {
      name: "Web3NZ",
      image: "/images/Web3NZ-logo.png",
      description:
        "Open source New Zealand community and industry initiative built to support and connect Kiwi Web3 founders, creators and businesses.",
      website: "https://web3nz.xyz/",
    },
    {
      name: "Crypto Consulting",
      image: "/images/ccnz-logo.png",
      description:
        "New Zealand leading cryptocurrency consulting agency, offering personal help, wallet recovery, scam support and legal services.",
      website: "https://cryptoconsulting.co.nz",
    },
    {
      name: "Cryptocurrency NZ",
      image: "/images/Horizontal Stacked.png",
      description: "UPDATE THIS ",
      website: "https://cryptocurrency.org.nz",
    },
    {
      name: "Axia Labs",
      image: "/images/logoLarge-1-2048x721.png",
      description:
        "NZ blockchain development company creating cutting-edge solutions for decentralized governance, DAOs and digital asset management.",
      website: "https://axialabs.org/",
    },
    {
      name: "Pest Free Token",
      image: "/images/Pest-Free-Token-NZ-Logo.png",
      description:
        "Mission driven Kiwi project leveraging blockchain technology for trapping, monitoring and incentivizing grassroots pest control.",
      website: "https://pestfreetoken.co.nz/",
    },
  ];

  // Set active state for mobile - no toggling off
  const handleCardTouch = (index: number) => {
    setTouchActiveCard(index);
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-16 px-4 overflow-hidden">
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-orange-900/30 to-zinc-900" />

      {/* Decorative gradient elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-zinc-600/20 rounded-full blur-3xl opacity-20" />

      {/* Animated gradient particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 left-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-70 animate-float-slow" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-orange-500 rounded-full opacity-60 animate-float-medium" />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-orange-300 rounded-full opacity-70 animate-float-fast" />
      </div>

      {/* Content with improved container constraints */}
      <div className="relative max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto z-10">
        <h2 className="alegreya text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text alegreya text-transparent">
            Sponsors
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text alegreya text-transparent">
            Partners
          </span>
        </h2>
        <p className="text-orange-100 text-center text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          Proudly supported by New Zealand&apos;s leading Bitcoin, crypto, web3
          and blockchain organizations.
        </p>

        {/* Improved uniform grid layout - adding proper margin at bottom to prevent overlay */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5  mb-10 sm:mb-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="relative group"
              onClick={() => handleCardTouch(index)}
              onTouchEnd={() => handleCardTouch(index)}
            >
              {/* Base card that maintains its size */}
              <div
                className={`
                                relative w-full aspect-video 
                                bg-gradient-to-b from-white/40 to-white/20 rounded-lg backdrop-blur-sm 
                                border border-orange-400/30 hover:border-orange-400/70 
                                transition-all duration-300 p-3 sm:p-4 
                                hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] md:hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]
                                overflow-hidden cursor-pointer z-10
                            `}
              >
                {/* Logo Container with hard bottom shadow */}
                <div className="flex items-center justify-center h-full">
                  <div className="relative w-full h-[60px] sm:h-[70px] md:h-[80px]">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="object-contain filter"
                      style={{
                        filter: "drop-shadow(0 2px 1px rgba(0,0,0,0.5))",
                      }}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      priority={index < 5}
                    />
                  </div>
                </div>
              </div>

              {/* Expanded card that shows on hover (desktop) or touch (mobile) */}
              <div
                className={`
                                absolute top-0 left-0 right-0
                                bg-gradient-to-b from-zinc-900/95 to-black/95
                                rounded-lg border border-orange-400/30
                                transition-all duration-300 ease-in-out
                                shadow-[0_0_20px_rgba(74,222,128,0.4)]
                                z-20
                                
                                /* Desktop hover behavior */
                                opacity-0 group-hover:opacity-100 
                                pointer-events-none group-hover:pointer-events-auto
                                
                                /* Height adjustments - taller on mobile */
                                h-0 group-hover:h-[200px]
                                md:group-hover:h-[210px] lg:group-hover:h-[220px]
                                
                                /* Mobile touch behavior override using state */
                                ${touchActiveCard === index ? "opacity-100 h-[220px] pointer-events-auto" : ""}
                                
                                /* For mobile devices: height adjustments and persist expanded state */
                                @media (max-width: 640px) {
                                    ${touchActiveCard === index ? "opacity-100 h-[220px] pointer-events-auto" : ""}
                                }
                            `}
                style={{ backdropFilter: "blur(3px)" }}
              >
                <div className="text-center flex flex-col items-center w-full h-full p-3 sm:p-4 overflow-y-auto scrollbar-hide">
                  {/* Sponsor name in overlay */}
                  <h3 className="text-orange-300 font-semibold text-sm mb-2">
                    {sponsor.name}
                  </h3>

                  {/* Description with smooth scrolling and no visible scrollbar */}
                  <p className="text-orange-100 text-xs leading-tight mb-3 pr-1 overflow-y-auto scrollbar-hide">
                    {sponsor.description}
                  </p>

                  {/* Visit Website Button - with stopPropagation */}
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1
                                            bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-lg 
                                            hover:from-orange-600 hover:to-orange-700 transition-all duration-300
                                            hover:shadow-[0_0_10px_rgba(74,222,128,0.4)]
                                            w-full justify-center mt-auto"
                    onClick={(e) => {
                      // Prevent the click from propagating to parent (card click)
                      e.stopPropagation();
                    }}
                  >
                    Visit Website
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor CTA */}
        <div className="text-center">
          <Link
            href="mailto:UCCryptoSocDAO@protonmail.com"
            className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 
                        bg-gradient-to-r from-orange-500/20 to-orange-600/10
                        hover:from-orange-500/30 hover:to-orange-600/20
                        border border-orange-500/40 hover:border-orange-400/60
                        rounded-lg text-orange-400 hover:text-orange-300 
                        shadow-sm hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] 
                        transition-all duration-300 text-sm sm:text-base"
          >
            <span>Become a sponsor</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Enhanced gradient decorative lines */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
    </section>
  );
};

export default SponsorBanner;
