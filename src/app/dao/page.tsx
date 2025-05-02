// 'use client';

// import { useEffect, useState } from 'react';
// import { fetchDAOData } from './fetchDAO';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import Link from 'next/link';
// gsap.registerPlugin(ScrollTrigger);

// export default function DAODashboard() {
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const [DAOData, setDAOData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchDAOData().then(data => {
//       setDAOData(data.dao);
//       setLoading(false);

//       setTimeout(() => {
//         gsap.from(".stats-container", { y: 50, opacity: 0, duration: 1, stagger: 0.2 });
//         gsap.to(".scroll-dot", { y: 8, repeat: -1, duration: 1.5, ease: "power2.inOut", yoyo: true });
//         gsap.from(".proposal-card", {
//           y: 100,
//           opacity: 0,
//           duration: 0.4,
//           scrollTrigger: {
//             trigger: ".proposals-container",
//             start: "top center+=5",
//             end: "top center-=100",
//             scrub: 0.5
//           }
//         });
//         gsap.to(".fade-on-scroll", {
//           scrollTrigger: {
//             trigger: "body",
//             start: "top top",
//             end: "+=200",
//             scrub: true
//           },
//           opacity: 0,
//           y: 30
//         });
//       }, 0);
//     });
//   }, []);

//   return (
//     <div className="relative w-full flex flex-col items-center justify-start mt-10 md:mt-20 min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-black-600 to-gray-800">
//       <Link href="/">
//         <a className="text-white text-sm underline mb-4">← Back to Home</a>
//         </Link>
//         <Link href="/">
//       <a className="text-white text-sm underline mb-4">← Back to Home</a>
//       </Link>

//       <div className="w-full text-center px-4 mb-10 md:px-[5%] pt-6 md:pt-8 mt-6 md:mt-10 font-bold text-2xl md:text-4xl text-white">
//         <h2>DAO Dashboard</h2>
//         <p className="text-gray-400 text-base font-medium mt-2">Real-time statistics and proposals</p>
//       </div>
//       <div className="inline-flex items-center px-4 sm:px-5 sm:py-2.5
//                         bg-gradient-to-r from-orange-500/20 to-orange-600/10
//                         hover:from-orange-500/30 hover:to-orange-600/20
//                         border border-orange-500/40 hover:border-orange-400/60
//                         rounded-lg text-orange-400 hover:text-orange-300
//                         shadow-sm hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]
//                         transition-all duration-300 text-sm sm:text-base">
//         <a href="https://admin.daohaus.club/#/molochv3/0xa/0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a">
//             <h2>Visit the DAO</h2>
//         </a>
//       </div>

//       {loading ? (
//         <div className="flex flex-col items-center justify-center mt-20 text-white">
//           <div className="loading-spinner mb-4" />
//           <p>Loading DAO data...</p>
//         </div>
//       ) : (
//         <div className="w-full max-w-5xl px-4 md:px-8 py-10 md:py-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stats-container">
//             <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
//               <h3 className="text-lg font-semibold text-orange-400 mb-2">Members</h3>
//               <p className="text-2xl font-bold">{DAOData.activeMemberCount}</p>
//             </div>
//             <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
//               <h3 className="text-lg font-semibold text-orange-400 mb-2">Total Shares</h3>
//               <p className="text-2xl font-bold">{DAOData.totalShares}</p>
//             </div>
//             <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
//               <h3 className="text-lg font-semibold text-orange-400 mb-2">Proposals</h3>
//               <p className="text-2xl font-bold">{DAOData.proposalCount}</p>
//             </div>
//             <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
//               <h3 className="text-lg font-semibold text-orange-400 mb-2">Active Proposals</h3>
//               <p className="text-2xl font-bold">{DAOData.activeProposals}</p>
//             </div>
//           </div>

//           <div className="mt-20">
//             <h2 className="text-3xl font-bold text-white fade-on-scroll mb-4 mb-5 md:space-y-15 text-center">Proposals</h2>

//             <div className="proposals-container space-y-10">
//               {DAOData.proposals.length > 0 ? (
//                 // eslint-disable-next-line @typescript-eslint/no-unused-vars
//                 DAOData.proposals.map((proposal: any) => (
//                   <div className="proposal-card rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-white shadow-xl" key={proposal.id}>
//                     <h2 className="text-xl font-bold text-orange-400 mb-2">{proposal.title}</h2>
//                     <p className="text-gray-300 mb-4">{proposal.description}</p>
//                     <div className="flex flex-col gap-2">
//                       <div className="text-sm text-gray-400">ID: {proposal.id}</div>
//                       <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
//                         <div className={`absolute top-0 left-0 h-full ${proposal.status === 'Failed' ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${proposal.progress}%` }}></div>
//                       </div>
//                       <div className="text-sm text-gray-300">
//                         Quorum: {Math.round(proposal.progress)}% ({proposal.quorum.current} / {proposal.quorum.required} votes)
//                       </div>
//                       <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
//                         <span>Status: <span className={proposal.status === 'Failed' ? 'text-red-400' : 'text-green-400'}>{proposal.status}</span></span>
//                         <span>Created: {proposal.createdAt}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center text-white text-lg">No active proposals at the moment.</div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { fetchDAOData } from "./fetchDAO";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function DAODashboard() {
  interface DAOData {
    activeMemberCount: number;
    totalShares: number;
    proposalCount: number;
    activeProposals: number;
    proposals: Array<{
      id: string;
      title: string;
      description: string;
      status: string;
      progress: number;
      quorum: {
        current: number;
        required: number;
      };
      createdAt: string;
    }>;
  }

  const [daoData, setDaoData] = useState<DAOData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDAOData().then((data) => {
      setDaoData(data.dao as DAOData);
      setLoading(false);

      setTimeout(() => {
        gsap.from(".stats-container", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        });
        gsap.to(".scroll-dot", {
          y: 8,
          repeat: -1,
          duration: 1.5,
          ease: "power2.inOut",
          yoyo: true,
        });
        gsap.from(".proposal-card", {
          y: 100,
          opacity: 0,
          duration: 0.4,
          scrollTrigger: {
            trigger: ".proposals-container",
            start: "top center+=5",
            end: "top center-=100",
            scrub: 0.5,
          },
        });
        gsap.to(".fade-on-scroll", {
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "+=200",
            scrub: true,
          },
          opacity: 0,
          y: 30,
        });
      }, 0);
    });
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-start mt-10 md:mt-20 min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-black-600 to-gray-800">
      <Link href="/">
        <a className="text-white text-sm underline mb-4">← Back to Home</a>
      </Link>

      <div className="w-full text-center px-4 mb-10 md:px-[5%] pt-6 md:pt-8 mt-6 md:mt-10 font-bold text-2xl md:text-4xl text-white">
        <h2>DAO Dashboard</h2>
        <p className="text-gray-400 text-base font-medium mt-2">
          Real-time statistics and proposals
        </p>
      </div>
      <div
        className="inline-flex items-center px-4 sm:px-5 sm:py-2.5 
                        bg-gradient-to-r from-orange-500/20 to-orange-600/10
                        hover:from-orange-500/30 hover:to-orange-600/20
                        border border-orange-500/40 hover:border-orange-400/60
                        rounded-lg text-orange-400 hover:text-orange-300 
                        shadow-sm hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]
                        transition-all duration-300 text-sm sm:text-base"
      >
        <a href="https://admin.daohaus.club/#/molochv3/0xa/0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a">
          <h2>Visit the DAO</h2>
        </a>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center mt-20 text-white">
          <div className="loading-spinner mb-4" />
          <p>Loading DAO data...</p>
        </div>
      ) : (
        <div className="w-full max-w-5xl px-4 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stats-container">
            <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Members
              </h3>
              <p className="text-2xl font-bold">
                {daoData?.activeMemberCount || 0}
              </p>
            </div>
            <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Total Shares
              </h3>
              <p className="text-2xl font-bold">{daoData?.totalShares || 0}</p>
            </div>
            <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Proposals
              </h3>
              <p className="text-2xl font-bold">
                {daoData?.proposalCount || 0}
              </p>
            </div>
            <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Active Proposals
              </h3>
              <p className="text-2xl font-bold">
                {daoData?.activeProposals || 0}
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white fade-on-scroll mb-4 md:space-y-15 text-center">
              Proposals
            </h2>

            <div className="proposals-container space-y-10">
              {daoData && daoData.proposals.length > 0 ? (
                daoData.proposals.map((proposal) => (
                  <div
                    className="proposal-card rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-white shadow-xl"
                    key={proposal.id}
                  >
                    <h2 className="text-xl font-bold text-orange-400 mb-2">
                      {proposal.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{proposal.description}</p>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm text-gray-400">
                        ID: {proposal.id}
                      </div>
                      <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full ${proposal.status === "Failed" ? "bg-red-500" : "bg-green-500"}`}
                          style={{ width: `${proposal.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-300">
                        Quorum: {Math.round(proposal.progress)}% (
                        {proposal.quorum.current} / {proposal.quorum.required}{" "}
                        votes)
                      </div>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                        <span>
                          Status:{" "}
                          <span
                            className={
                              proposal.status === "Failed"
                                ? "text-red-400"
                                : "text-green-400"
                            }
                          >
                            {proposal.status}
                          </span>
                        </span>
                        <span>Created: {proposal.createdAt}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-white text-lg">
                  No active proposals at the moment.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
