(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [873],
  {
    4326: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => i });
      var a = r(5155),
        s = r(2115);
      async function o() {
        let e =
          "https://gateway-arbitrum.network.thegraph.com/api/09ee157c2e5e6598d352197e957932f6/subgraphs/id/CgH5vtz9CJPdcSmD3XEh8fCVDjQjnRwrSawg71T1ySXW";
        try {
          var t, r;
          let [a, s] = await Promise.all([
              fetch(e, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  query:
                    "\n  query GetProposals($daoAddress: String!) {\n    proposals(where: { dao: $daoAddress }) {\n      id\n      yesVotes\n      noVotes\n      yesBalance\n      noBalance\n      createdAt\n      title\n      description\n      passed\n      votingEnds\n      processed\n      dao {\n        totalShares\n        quorumPercent\n      }\n      votes {\n        id\n        balance\n      }\n    }\n  }\n",
                  variables: {
                    daoAddress: "0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a",
                  },
                }),
              }),
              fetch(e, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  query:
                    '\n{\n  dao(id: "0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a") {\n    id\n    createdAt\n    proposalCount\n    activeMemberCount\n    totalShares\n    proposalOffering\n    profile: records(\n      first: 1\n      orderBy: createdAt\n      orderDirection: desc\n      where: { table: "daoProfile" }\n    ) {\n      createdAt\n      createdBy\n      contentType\n      content\n    }\n  }\n}\n',
                }),
              }),
            ]),
            o = await a.json(),
            n = await s.json();
          if (o.errors || n.errors) throw Error("GraphQL query failed");
          let l = o.data.proposals.map((e) => {
              let t;
              let r = Number(e.yesBalance) + Number(e.noBalance),
                a =
                  (Number(e.dao.totalShares) * Number(e.dao.quorumPercent)) /
                  100,
                s = new Date(1e3 * Number(e.createdAt)),
                o = new Date(1e3 * Number(e.votingEnds));
              return (
                (t =
                  new Date() > o
                    ? r >= a && Number(e.yesBalance) > Number(e.noBalance)
                      ? "Passed"
                      : "Failed"
                    : "Active"),
                {
                  title: e.title || "Proposal #".concat(e.id),
                  description: e.description || "No description provided",
                  id: e.id,
                  progress: Math.min((r / a) * 100, 100),
                  quorum: {
                    current: r,
                    required: a,
                    percent: e.dao.quorumPercent,
                  },
                  status: t,
                  createdAt: s.toLocaleDateString("en-GB"),
                  raw: e,
                }
              );
            }),
            d = n.data.dao;
          return {
            dao: {
              proposals: l.sort((e, t) => {
                let r = new Date(1e3 * Number(e.raw.createdAt));
                return (
                  new Date(1e3 * Number(t.raw.createdAt)).getTime() -
                  r.getTime()
                );
              }),
              activeProposals: d.proposalOffering,
              activeMemberCount: d.activeMemberCount || 0,
              totalShares: Math.floor(Number(d.totalShares || 0) / 1e18),
              proposalCount: d.proposalCount || l.length,
              tokenBalance: "0",
              content:
                (null === (r = d.profile) || void 0 === r
                  ? void 0
                  : null === (t = r[0]) || void 0 === t
                    ? void 0
                    : t.content) || null,
              createdAt: new Date(1e3 * Number(d.createdAt)).toLocaleDateString(
                "en-GB",
              ),
            },
          };
        } catch (e) {
          return (
            console.error("Error fetching DAO data:", e),
            {
              dao: {
                proposals: [],
                activeProposals: 0,
                activeMemberCount: 0,
                totalShares: 0,
                proposalCount: 0,
                tokenBalance: "0",
                content: null,
                createdAt: null,
              },
            }
          );
        }
      }
      var n = r(802),
        l = r(9088),
        d = r(6874),
        c = r.n(d);
      function i() {
        let [e, t] = (0, s.useState)(null),
          [r, l] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            o().then((e) => {
              t(e.dao),
                l(!1),
                setTimeout(() => {
                  n.Ay.from(".stats-container", {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                  }),
                    n.Ay.to(".scroll-dot", {
                      y: 8,
                      repeat: -1,
                      duration: 1.5,
                      ease: "power2.inOut",
                      yoyo: !0,
                    }),
                    n.Ay.from(".proposal-card", {
                      y: 100,
                      opacity: 0,
                      duration: 0.4,
                      scrollTrigger: {
                        trigger: ".proposals-container",
                        start: "top center+=5",
                        end: "top center-=100",
                        scrub: 0.5,
                      },
                    }),
                    n.Ay.to(".fade-on-scroll", {
                      scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "+=200",
                        scrub: !0,
                      },
                      opacity: 0,
                      y: 30,
                    });
                }, 0);
            });
          }, []),
          (0, a.jsxs)("div", {
            className:
              "relative w-full flex flex-col items-center justify-start mt-10 md:mt-20 min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-black-600 to-gray-800",
            children: [
              (0, a.jsx)(c(), {
                href: "/",
                children: (0, a.jsx)("a", {
                  className: "text-white text-sm underline mb-4",
                  children: "← Back to Home",
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-full text-center px-4 mb-10 md:px-[5%] pt-6 md:pt-8 mt-6 md:mt-10 font-bold text-2xl md:text-4xl text-white",
                children: [
                  (0, a.jsx)("h2", { children: "DAO Dashboard" }),
                  (0, a.jsx)("p", {
                    className: "text-gray-400 text-base font-medium mt-2",
                    children: "Real-time statistics and proposals",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "inline-flex items-center px-4 sm:px-5 sm:py-2.5  bg-gradient-to-r from-orange-500/20 to-orange-600/10 hover:from-orange-500/30 hover:to-orange-600/20 border border-orange-500/40 hover:border-orange-400/60 rounded-lg text-orange-400 hover:text-orange-300  shadow-sm hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] transition-all duration-300 text-sm sm:text-base",
                children: (0, a.jsx)("a", {
                  href: "https://admin.daohaus.club/#/molochv3/0xa/0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a",
                  children: (0, a.jsx)("h2", { children: "Visit the DAO" }),
                }),
              }),
              r
                ? (0, a.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center mt-20 text-white",
                    children: [
                      (0, a.jsx)("div", { className: "loading-spinner mb-4" }),
                      (0, a.jsx)("p", { children: "Loading DAO data..." }),
                    ],
                  })
                : (0, a.jsxs)("div", {
                    className: "w-full max-w-5xl px-4 md:px-8 py-10 md:py-20",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stats-container",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white",
                            children: [
                              (0, a.jsx)("h3", {
                                className:
                                  "text-lg font-semibold text-orange-400 mb-2",
                                children: "Members",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-2xl font-bold",
                                children:
                                  (null == e ? void 0 : e.activeMemberCount) ||
                                  0,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white",
                            children: [
                              (0, a.jsx)("h3", {
                                className:
                                  "text-lg font-semibold text-orange-400 mb-2",
                                children: "Total Shares",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-2xl font-bold",
                                children:
                                  (null == e ? void 0 : e.totalShares) || 0,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white",
                            children: [
                              (0, a.jsx)("h3", {
                                className:
                                  "text-lg font-semibold text-orange-400 mb-2",
                                children: "Proposals",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-2xl font-bold",
                                children:
                                  (null == e ? void 0 : e.proposalCount) || 0,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white",
                            children: [
                              (0, a.jsx)("h3", {
                                className:
                                  "text-lg font-semibold text-orange-400 mb-2",
                                children: "Active Proposals",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-2xl font-bold",
                                children:
                                  (null == e ? void 0 : e.activeProposals) || 0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-20",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "text-3xl font-bold text-white fade-on-scroll mb-4 md:space-y-15 text-center",
                            children: "Proposals",
                          }),
                          (0, a.jsx)("div", {
                            className: "proposals-container space-y-10",
                            children:
                              e && e.proposals.length > 0
                                ? e.proposals.map((e) =>
                                    (0, a.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "proposal-card rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-white shadow-xl",
                                        children: [
                                          (0, a.jsx)("h2", {
                                            className:
                                              "text-xl font-bold text-orange-400 mb-2",
                                            children: e.title,
                                          }),
                                          (0, a.jsx)("p", {
                                            className: "text-gray-300 mb-4",
                                            children: e.description,
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "text-sm text-gray-400",
                                                children: ["ID: ", e.id],
                                              }),
                                              (0, a.jsx)("div", {
                                                className:
                                                  "relative w-full h-4 bg-gray-700 rounded-full overflow-hidden",
                                                children: (0, a.jsx)("div", {
                                                  className:
                                                    "absolute top-0 left-0 h-full ".concat(
                                                      "Failed" === e.status
                                                        ? "bg-red-500"
                                                        : "bg-green-500",
                                                    ),
                                                  style: {
                                                    width: "".concat(
                                                      e.progress,
                                                      "%",
                                                    ),
                                                  },
                                                }),
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "text-sm text-gray-300",
                                                children: [
                                                  "Quorum: ",
                                                  Math.round(e.progress),
                                                  "% (",
                                                  e.quorum.current,
                                                  " / ",
                                                  e.quorum.required,
                                                  " ",
                                                  "votes)",
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex justify-between items-center mt-2 text-sm text-gray-400",
                                                children: [
                                                  (0, a.jsxs)("span", {
                                                    children: [
                                                      "Status:",
                                                      " ",
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "Failed" === e.status
                                                            ? "text-red-400"
                                                            : "text-green-400",
                                                        children: e.status,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, a.jsxs)("span", {
                                                    children: [
                                                      "Created: ",
                                                      e.createdAt,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.id,
                                    ),
                                  )
                                : (0, a.jsx)("div", {
                                    className: "text-center text-white text-lg",
                                    children:
                                      "No active proposals at the moment.",
                                  }),
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          })
        );
      }
      n.Ay.registerPlugin(l.u);
    },
    5487: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 4326));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [592, 874, 737, 441, 684, 358], () => t(5487)), (_N_E = e.O());
  },
]);
