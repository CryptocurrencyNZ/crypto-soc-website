"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const timelineEvents = [
    {
      year: "2018: Founding the UC Crypto Society",
      points: [
        "Founded at the University of Canterbury by Dean Franklet and other students passionate about Bitcoin, cryptocurrency, Blockchain, web3 and DeFi.",
        "Established as a traditional USCA affiliated club to educate and unite students.",
        "Founders laid the early foundations, Facebook page and initial presence at UC.",
      ],
      imagePlaceholder: "/images/2018.jpg",
    },
    {
      year: "2019-2020: Building Momentum",
      points: [
        "Led by Charlie Kavanagh and Andrew Franklet, focusing on education, community and merchant adoption.",
        "Charlie becomes the first Kiwi to accept Bitcoin payments in the Gelato business.",
        "Events hosted with Blueblock and Blockchain NZ, developing industry tendrils.",
        "Awareness on campus continues to rise as Bitcoin becomes increasingly mainstream.",
      ],
      imagePlaceholder: "/images/2020.jpg",
    },
    {
      year: "2021-2022: Enduring Through Volatility",
      points: [
        "Led by Huge Reeves, focusing on social gatherings, education and fortnightly meetups.",
        "Axia Labs's James Waugh and Callum Gladstone execute crypto careers events. ",
        "Dogecoin reaches parity with New Zealand Dollar during 2021 all time highs.",
      ],
      imagePlaceholder: "/images/2021.jpg",
    },
    {
      year: "2023: Pivoting to Decentralization",
      points: [
        "Annexed by Harry Satoshi, growth focus, infrastructure, and decentralization.",
        "Primary objectives center around expansion, recruitment, community and education.",
        "Weekly social core contributor meetings held surrounding plotting and education. ",
        "Collaborative events with the UC Investment Society, Easy Crypto, and Binance NZ.",
        "Industry ties expanded, formal sponsorship activated alongside treasury management.",
        "At the 2023 AGM, core contributors voted to adopt a decentralized, democratic structure, setting the stage for DAO transition.",
      ],
      imagePlaceholder: "/images/2023.jpg",
    },
    {
      year: "2024: Summoning New Zealand's First University DAO",
      points: [
        "Whitepaper constructed, peer reviewed and published, replacing archaic, centralized, bureaucratic/lineal hierarchical former USCA affiliation approved constitution. ",
        "Transformed into New Zealand's first university club DAO, first in the Southern Hemisphere, second worldwide, built on Ethereum's Layer 2 (Optimism) using DAOHaus. ",
        "Token gated on-chain voting activates decentralized governance for key decisions.",
        "Gnosis multisig safe established as treasury.",
        "USCA rejects new DAO structure. 1890's UCSA club affiliation policy mandates hierarchical, centralized top down leadership power structure. ",
        "Epic ideological battle ensues for months, UC Crypto Soc ultimately wins approval, re-gaining access to facilities and re-affiliation, thus becoming the first decentralized on-chain club at University of Canterbury, New Zealand, and the Southern Hemisphere. ",
        "Major events hosted in collaboration with Cryptocurrency NZ & Crypto Consulting NZ. ",
        "Careers industry event held with Binance NZ. ",
        "Regular meetups help to continue DAO, education and community development. ",
        "UC Crypto Society wins 'Academic Institution of the year at Web3NZ + Blockchain 2024 awards. '",
      ],
      imagePlaceholder: "/images/2024.jpg",
    },
    {
      year: "2025: Spreading the Word of Bitcoin & DeFi",
      points: [
        "Club led as a decentralized collective, ",
        "Proposals continue to shape club decision making, onboarding and form.",
        <>
          Core developers Invited by UC Business school to teach the practical
          laboratory sessions of{" "}
          <Link
            href="https://courseinfo.canterbury.ac.nz/GetCourseDetails.aspx?course=INFO363&occurrence=25S1(C)&year=2025"
            className="text-orange-400 hover:text-orange-300"
          >
            INFO-363
          </Link>{" "}
          (S1) UC
        </>,
        "UC Crypto DAO core contributors journey to 2025 Web3NZ Hackathon to develop the NZ P2P Crypto Marketplace v.2, winning the award for best UX and design. ",
        "DAO website is created in under 3 hours in a marathon effort by 3 legends. ",
        "UC Crypto Soc DAO members vote to exclusively accept payments in crypto. ",
      ],
      imagePlaceholder: "/images/2025.jpg",
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center justify-start mt-10 md:mt-20 min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-black-600 to-gray-800">
      {/* Header */}
      <div className="w-full text-center px-4 md:px-[5%] pt-6 md:pt-8 mt-6 md:mt-10 font-bold text-2xl md:text-4xl text-white">
        <h2>Crypto Society DAO History</h2>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl px-4 md:px-8 py-10 md:py-20">
        {/* Vertical Line - visible only on desktop */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-0 bg-gradient-to-b from-orange-300 to-red-700 hidden md:block"
          style={{
            width: "4px",
            top: "24px",
            bottom: "24px",
          }}
        />

        {/* Vertical Line - mobile */}
        <div
          className="absolute left-8 md:hidden z-0 bg-gradient-to-b from-orange-300 to-red-700"
          style={{
            width: "4px",
            top: "24px",
            bottom: "24px",
          }}
        />

        {/* Timeline Events */}
        <div className="relative z-10">
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center mb-16 md:mb-32 last:mb-0"
              >
                {/* Mobile Timeline Event */}
                <div className="md:hidden flex flex-col w-full space-y-4">
                  {/* Right side (text) moved up */}
                  <div className="pl-16">
                    <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-4 shadow-xl w-full">
                      <h3 className="text-xl font-semibold text-orange-400 mb-3">
                        {event.year}
                      </h3>
                      <ul className="space-y-2">
                        {event.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="orange"
                              stroke="#f97316"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mt-1 mr-2 flex-shrink-0"
                            >
                              <circle cx="12" cy="12" r="6" />
                            </svg>
                            <span className="text-gray-300 text-sm">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image + dot below text */}
                  <div className="pl-1.5 pt-2">
                    <div className="w-6  h-6 bg-orange-500 rounded-full border-2 border-white shadow-lg mb-2" />
                  </div>
                  <div className="pl-16 mx-auto pt-2">
                    <Image
                      src={event.imagePlaceholder}
                      alt={`UC Crypto Society DAO ${event.year} event`}
                      className="w-[240px] h-[160px] object-cover rounded-xl border border-orange-400/50 shadow-lg"
                      width={240}
                      height={160}
                    />
                  </div>
                </div>

                {/* Desktop Timeline Event - Hidden on Mobile */}
                <div className="hidden md:flex md:items-center w-full">
                  {/* Left Side */}
                  <div className="w-1/2 pr-8 md:pr-12 flex justify-end">
                    {isLeft ? (
                      // Text content on left
                      <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-4 md:p-6 shadow-xl w-full max-w-md">
                        <h3 className="text-2xl font-semibold text-orange-400 text-center mb-4">
                          {event.year}
                        </h3>
                        <ul className="mt-4 space-y-3">
                          {event.points.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="orange"
                                stroke="#f97316"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mt-1 mr-3 flex-shrink-0"
                              >
                                <circle cx="12" cy="12" r="6" />
                              </svg>
                              <span className="text-gray-300 text-base">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      // Image on left
                      <div className="rounded-xl overflow-hidden shadow-lg border border-orange-400/50 w-full max-w-md">
                        <Image
                          src={event.imagePlaceholder}
                          alt={`UC Crypto Society DAO ${event.year} event`}
                          className="w-full h-auto object-cover"
                          width={240}
                          height={160}
                        />
                      </div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-lg" />
                  </div>

                  {/* Right Side */}
                  <div className="w-1/2 pl-8 md:pl-12">
                    {!isLeft ? (
                      // Text content on right
                      <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-4 md:p-6 shadow-xl w-full max-w-md">
                        <h3 className="text-2xl font-semibold text-center text-orange-400 mb-4">
                          {event.year}
                        </h3>
                        <ul className="mt-4 space-y-3">
                          {event.points.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="orange"
                                stroke="#f97316"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mt-1 mr-3 flex-shrink-0"
                              >
                                <circle cx="12" cy="12" r="6" />
                              </svg>
                              <span className="text-gray-300 text-base">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      // Image on right
                      <div className="rounded-xl overflow-hidden shadow-lg border border-orange-400/50 w-full max-w-md">
                        <Image
                          src={event.imagePlaceholder}
                          alt={`UC Crypto Society DAO ${event.year} event`}
                          className="w-full h-auto object-cover"
                          width={240}
                          height={160}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
