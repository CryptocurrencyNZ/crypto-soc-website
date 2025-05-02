import { Twitter, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-black py-12 px-6 border-t border-orange-500/20 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* 1️⃣ Logo + Description + Socials */}
          <div className="text-center md:text-left">
            <Link href="/">
              <div className="relative w-40 h-auto mx-auto md:mx-0 mb-4">
                <img
                  src="/images/Crypto-soc-Logo.png"
                  alt="CNZ Logo"
                  className="object-contain w-full"
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                UC CryptoSociety <span className="text-orange-400">DAO</span>
              </h3>
            </Link>

            <p className="text-gray-400 text-sm mb-4">
              UC Crypto Soc, summoned as New Zealand’s first university DAO in
              2024, empowers and unites the University of Canterbury’s Bitcoin,
              crypto and blockchain student body through decentralized
              governance, educational events and collaboration with the broader
              NZ industry.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {[
                { href: "https://x.com/UCCryptoSoc", Icon: Twitter },
                {
                  href: "https://www.facebook.com/cryptosocUC",
                  Icon: Facebook,
                },
                {
                  href: "https://www.instagram.com/uccryptosociety",
                  Icon: Instagram,
                },
                {
                  href: "https://nz.linkedin.com/in/uc-crypto-society-dao-ba48aa2b8",
                  Icon: Linkedin,
                },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                  aria-label={Icon.name}
                >
                  <Icon size={20} />
                  <span className="sr-only">{Icon.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2️⃣ Community Links */}
          <div className=" mx-auto">
            <h3 className="text-white font-semibold text-base mb-4 hover:text-orange-400">
              <a href="https://forms.gle/PNwbQMwCjct81psm9">Join Us</a>
            </h3>
            <h3 className="text-white font-semibold text-base mb-4 hover:text-orange-400">
              <a href="mailto:UCCryptoSocDAO@protonmail.com">Sponsor Us</a>
            </h3>
            <h3 className="text-white font-semibold text-base mb-4 hover:text-orange-400">
              <a href="mailto:UCCryptoSocDAO@protonmail.com">Contact Us</a>
            </h3>
            <h3 className="text-white font-semibold text-base mb-4 hover:text-orange-400">
              <a href="mailto:UCCryptoSocDAO@protonmail.com">Media Enquiries</a>
            </h3>
          </div>

          {/* 3️⃣ Sponsor Logos */}
          <div className="flex flex-col items-center gap-6 text-center">
            <h3 className="text-white font-semibold text-base">
              Industry Partners
            </h3>

            <div className="w-40 h-16 relative">
              <Image
                src="/images/HorizontalCNZ.png"
                alt="Community"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-40 h-14 relative">
              <Image
                src="/images/Blockchain-NZ-logo-removebg-preview.png"
                alt="BlockchainNZ"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-14 relative">
              <Image
                src="/images/Web3NZ-logo.png"
                alt="Web3NZ"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 4️⃣ Mailing List */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-base mb-4 flex justify-center md:justify-start items-center gap-2">
              <Mail size={16} className="text-orange-400" />
              Mailing List
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Join our mailing list to stay connected.
            </p>
            <a href="https://forms.gle/NnDzMxTgXacUQTqV6">
              <button className="w-full px-4 py-2 bg-orange-400 hover:bg-orange-500 transition-all rounded-md text-black font-semibold text-sm hover:shadow-[0_0_10px_rgba(255,165,0,0.3)]">
                Subscribe
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
