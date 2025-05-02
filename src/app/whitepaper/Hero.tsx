// 'use client'

// const Hero = () => {

//     return (
//         <div className="relative w-full flex flex-col lg:flex-row justify-between m-0 p-0 min-h-[80vh] lg:min-h-screen">

//             {/* 🔤 Foreground Content */}
//             <div className="w-full flex flex-col justify-center items-center text-center px-8 md:px-[5%] pt-4 md:pt-0 relative z-10 bg-transparent">
//             <div className="flex flex-col items-center justify-center">
//                 <iframe
//                     src="/whitepaper.pdf"
//                     title="YouTube video player"
//                     className="absolute inset-0 w-full h-full "
//                     frameBorder="0"></iframe>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero
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
