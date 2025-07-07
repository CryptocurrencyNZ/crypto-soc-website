"use client";

const Hero = () => {
  return (
    <div className="mt-20 relative w-full flex justify-center items-center bg-black min-h-screen">
      {/* Responsive iframe container */}
      <div className="w-full max-w-6xl h-[90vh] px-4">
        <iframe
          src="/whitepaper.pdf"
          title="Whitepaper PDF"
          className="w-full h-full border border-gray-700 rounded-md"
          style={{ backgroundColor: "black" }}
        />
      </div>
    </div>
  );
};

export default Hero;
