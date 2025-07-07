(exports.id = 704),
  (exports.ids = [704]),
  (exports.modules = {
    4: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => r });
      let r = (0, s(2907).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call the default export of \"/Users/kodi/Desktop/Crypto-soc-site/src/components/Navbar.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "/Users/kodi/Desktop/Crypto-soc-site/src/components/Navbar.tsx",
        "default",
      );
    },
    1135: () => {},
    3518: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => j });
      var r = s(687),
        o = s(3210),
        a = s(1860),
        i = s(2941),
        n = s(2192),
        l = s(5019),
        c = s(7052),
        d = s(8403),
        m = s(8313),
        x = s(3931);
      let h = [
          { text: "Home", path: "/", icon: n.A, isDropdown: !1 },
          {
            text: "Whitepaper",
            path: "/whitepaper",
            icon: l.A,
            isDropdown: !1,
          },
          { text: "DAO", path: "/dao", icon: c.A, isDropdown: !1 },
          { text: "History", path: "/history", icon: d.A, isDropdown: !1 },
          {
            text: "Support us",
            path: "mailto:UCCryptoSocDAO@protonmail.com",
            icon: m.A,
            isDropdown: !1,
          },
          {
            text: "Contact",
            icon: x.A,
            path: "mailto:UCCryptoSocDAO@protonmail.com",
            isDropdown: !1,
          },
        ],
        p = (e) => !0 === e.isDropdown,
        g = () => {
          let e = [];
          return (
            h.forEach((t) => {
              p(t)
                ? t.sections?.forEach((t) => {
                    t.items.forEach((s) => {
                      e.push({
                        title: s.title,
                        path: s.path,
                        icon: s.icon,
                        section: t.title,
                        hasSubItems: s.hasSubItems,
                        subItems: s.subItems,
                      });
                    });
                  })
                : e.push({ title: t.text, path: t.path || "#", icon: t.icon });
            }),
            e
          );
        };
      var b = s(5814),
        u = s.n(b);
      let v = ({ item: e }) =>
          e.hasSubItems && e.subItems?.length
            ? (0, r.jsxs)("div", {
                className: "relative group/subdropdown",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex items-start gap-3 p-3 rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] group/item",
                    children: [
                      (0, r.jsx)("span", {
                        className: "text-orange-400 mt-1 flex-shrink-0",
                        children: (0, o.createElement)(e.icon, { size: 20 }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, r.jsx)("span", {
                                className:
                                  "text-white block group-hover/item:text-orange-400 transition-colors text-base",
                                children: e.title,
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-sm transition-transform duration-300 group-hover/subdropdown:rotate-180",
                                children: "▾",
                              }),
                            ],
                          }),
                          (0, r.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute left-0 top-full w-full min-w-[220px] bg-black/95 backdrop-blur-md  border border-orange-500/30 rounded-xl p-2 opacity-0 invisible  group-hover/subdropdown:opacity-100 group-hover/subdropdown:visible transform  translate-y-2 group-hover/subdropdown:translate-y-0 transition-all duration-300 shadow-xl shadow-orange-900/30 z-50 ml-8",
                    children: e.subItems?.map((e, t) =>
                      r.jsx(
                        "a",
                        {
                          href: e.path,
                          className:
                            "block py-2 px-3 my-1 rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]",
                          children: r.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              r.jsx("span", {
                                className: "text-orange-400 flex-shrink-0",
                                children: o.createElement(e.icon, { size: 16 }),
                              }),
                              r.jsxs("div", {
                                children: [
                                  r.jsx("span", {
                                    className:
                                      "text-white block hover:text-orange-400 transition-colors text-sm",
                                    children: e.title,
                                  }),
                                  r.jsx("span", {
                                    className: "text-xs text-gray-400",
                                    children: e.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              })
            : (0, r.jsxs)("a", {
                href: e.path,
                className:
                  "flex items-start gap-3 p-3 rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] group/item",
                children: [
                  (0, r.jsx)("span", {
                    className: "text-orange-400 mt-1 flex-shrink-0",
                    children: (0, o.createElement)(e.icon, { size: 20 }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex-1",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "text-white block group-hover/item:text-orange-400 transition-colors text-base",
                        children: e.title,
                      }),
                      (0, r.jsx)("span", {
                        className: "text-sm text-gray-400",
                        children: e.description,
                      }),
                    ],
                  }),
                ],
              }),
        f = ({ text: e, link: t, icon: s, dropdownContent: a }) =>
          a
            ? (0, r.jsxs)("div", {
                className: "relative group",
                children: [
                  (0, r.jsxs)("button", {
                    className:
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300  hover:text-white hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] font-medium text-base",
                    children: [
                      s &&
                        (0, r.jsx)("span", {
                          className: "text-orange-400",
                          children: (0, o.createElement)(s, { size: 20 }),
                        }),
                      e,
                      (0, r.jsx)("span", {
                        className:
                          "text-sm transition-transform duration-300 group-hover:rotate-180",
                        children: "▾",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute right-0 top-full w-[600px] bg-black/95 backdrop-blur-md  border border-orange-500/30 rounded-xl p-4 opacity-0 invisible  group-hover:opacity-100 group-hover:visible transform  translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl shadow-orange-900/30 z-50",
                    children: a,
                  }),
                ],
              })
            : (0, r.jsxs)("a", {
                href: t || "#",
                className:
                  "px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10  transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]  font-medium flex items-center gap-2 text-base whitespace-nowrap",
                children: [
                  s &&
                    (0, r.jsx)("span", {
                      className: "text-orange-400",
                      children: (0, o.createElement)(s, { size: 18 }),
                    }),
                  e,
                ],
              }),
        y = ({ item: e }) => {
          let [t, s] = (0, o.useState)(!1);
          return e.hasSubItems && e.subItems?.length
            ? (0, r.jsxs)("div", {
                className: "group/mobile-sub relative",
                children: [
                  (0, r.jsxs)("button", {
                    onClick: () => s(!t),
                    className:
                      "w-full px-4 py-2 rounded-lg text-gray-400 hover:text-white  hover:bg-orange-500/10 transition-colors text-xs sm:text-sm flex items-center justify-between",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, o.createElement)(e.icon, {
                            size: 16,
                            className: "text-orange-400",
                          }),
                          e.title,
                        ],
                      }),
                      (0, r.jsx)("span", {
                        className: `text-xs transition-transform duration-300 ${t ? "rotate-180" : ""}`,
                        children: "▾",
                      }),
                    ],
                  }),
                  t &&
                    (0, r.jsx)("div", {
                      className: "pl-8 border-l border-orange-500/30 ml-4 mt-1",
                      children: e.subItems?.map((e, t) =>
                        r.jsxs(
                          "a",
                          {
                            href: e.path,
                            className:
                              "block px-4 py-2 rounded-lg text-gray-400 hover:text-white  hover:bg-orange-500/10 transition-colors text-xs flex items-center gap-2",
                            children: [
                              o.createElement(e.icon, {
                                size: 14,
                                className: "text-orange-400",
                              }),
                              e.title,
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                ],
              })
            : (0, r.jsxs)("a", {
                href: e.path,
                className:
                  "block px-4 py-2 rounded-lg text-gray-400 hover:text-white  hover:bg-orange-500/10 transition-colors text-xs sm:text-sm flex items-center gap-2",
                children: [
                  (0, o.createElement)(e.icon, {
                    size: 16,
                    className: "text-orange-400",
                  }),
                  e.title,
                ],
              });
        },
        j = () => {
          let [e, t] = (0, o.useState)(!1),
            s = g(),
            n = s.filter(
              (e) =>
                e.section &&
                ["Crypto Basics", "Advanced Topics"].includes(e.section),
            ),
            l = s.filter((e) => !e.section);
          return (0, r.jsxs)("nav", {
            className:
              "fixed top-0 left-0 right-0 bg-black backdrop-blur-md z-50 border-b border-orange-500/20 shadow-lg shadow-zinc-900/50",
            children: [
              (0, r.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, r.jsxs)("div", {
                  className: "flex items-center h-25 md:h-18 lg:h-25",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-1 items-center justify-between min-[1200px]:justify-between ",
                      children: [
                        (0, r.jsx)("div", {
                          className: "text-center flex-shrink-0 mx-2 md:mx-4",
                          children: (0, r.jsx)(u(), {
                            href: "/",
                            children: (0, r.jsx)("img", {
                              src: "../images/Crypto-soc-Logo.png",
                              alt: "Crypto Soc Logo",
                              className:
                                "h-20 md:h-20 mx-auto hover:border-orange-400",
                            }),
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:space-x-2 lg:space-x-3 flex-shrink-0",
                          children: h.map((e, t) =>
                            (0, r.jsx)(
                              f,
                              {
                                text: e.text,
                                icon: e.icon,
                                link: p(e) ? void 0 : e.path,
                                dropdownContent:
                                  p(e) && e.sections
                                    ? (0, r.jsx)("div", {
                                        className: "grid grid-cols-2 gap-6",
                                        children: e.sections.map((e, t) =>
                                          (0, r.jsxs)(
                                            "div",
                                            {
                                              children: [
                                                (0, r.jsx)("h3", {
                                                  className:
                                                    "text-orange-400 font-semibold mb-3 pl-2 text-base",
                                                  children: e.title,
                                                }),
                                                (0, r.jsx)("div", {
                                                  className: "space-y-1",
                                                  children: e.items.map(
                                                    (e, t) =>
                                                      (0, r.jsx)(
                                                        v,
                                                        { item: e },
                                                        t,
                                                      ),
                                                  ),
                                                }),
                                              ],
                                            },
                                            t,
                                          ),
                                        ),
                                      })
                                    : void 0,
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "min-[1200px]:hidden flex-shrink-0",
                      children: (0, r.jsx)("button", {
                        onClick: () => t(!e),
                        className:
                          "p-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10 transition-colors",
                        "aria-label": e ? "Close menu" : "Open menu",
                        children: e
                          ? (0, r.jsx)(a.A, { size: 24 })
                          : (0, r.jsx)(i.A, { size: 24 }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className: `${e ? "block" : "hidden"} min-[1200px]:hidden bg-black/95 backdrop-blur-md`,
                children: (0, r.jsxs)("div", {
                  className: "px-4 pt-2 pb-4 space-y-1",
                  children: [
                    l.find((e) => "Home" === e.title) &&
                      (0, r.jsxs)("a", {
                        href: l.find((e) => "Home" === e.title)?.path,
                        className:
                          "block px-4 py-2 rounded-lg text-gray-300 hover:text-white  hover:bg-orange-500/10 transition-colors text-sm sm:text-base flex items-center gap-3",
                        children: [
                          (0, o.createElement)(
                            l.find((e) => "Home" === e.title).icon,
                            { className: "text-orange-400" },
                          ),
                          "Home",
                        ],
                      }),
                    n.length > 0 &&
                      (0, r.jsxs)("div", {
                        className: "px-4 py-2",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "font-medium text-orange-400 mb-2 text-sm sm:text-base flex items-center gap-2",
                            children: [
                              (0, o.createElement)(
                                h.find((e) => "Learn" === e.text).icon,
                                { className: "text-orange-400" },
                              ),
                              "Learn",
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "pl-4 space-y-2",
                            children: n.map((e, t) =>
                              (0, r.jsx)(y, { item: e }, t),
                            ),
                          }),
                        ],
                      }),
                    l
                      .filter((e) => "Home" !== e.title)
                      .map((e, t) =>
                        (0, r.jsxs)(
                          "a",
                          {
                            href: e.path,
                            className:
                              "block px-4 py-2 rounded-lg text-gray-300 hover:text-white  hover:bg-orange-500/10 transition-colors text-sm sm:text-base flex items-center gap-3",
                            children: [
                              (0, o.createElement)(e.icon, {
                                size: 18,
                                className: "text-orange-400",
                              }),
                              e.title,
                            ],
                          },
                          t,
                        ),
                      ),
                  ],
                }),
              }),
            ],
          });
        };
    },
    5160: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 6346, 23)),
        Promise.resolve().then(s.t.bind(s, 7924, 23)),
        Promise.resolve().then(s.t.bind(s, 5656, 23)),
        Promise.resolve().then(s.t.bind(s, 2480, 23)),
        Promise.resolve().then(s.t.bind(s, 8243, 23)),
        Promise.resolve().then(s.t.bind(s, 8827, 23)),
        Promise.resolve().then(s.t.bind(s, 2763, 23)),
        Promise.resolve().then(s.t.bind(s, 7173, 23));
    },
    5432: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 6444, 23)),
        Promise.resolve().then(s.t.bind(s, 6042, 23)),
        Promise.resolve().then(s.t.bind(s, 8170, 23)),
        Promise.resolve().then(s.t.bind(s, 9477, 23)),
        Promise.resolve().then(s.t.bind(s, 9345, 23)),
        Promise.resolve().then(s.t.bind(s, 2089, 23)),
        Promise.resolve().then(s.t.bind(s, 6577, 23)),
        Promise.resolve().then(s.t.bind(s, 1307, 23));
    },
    5725: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 5814, 23)),
        Promise.resolve().then(s.t.bind(s, 6533, 23)),
        Promise.resolve().then(s.bind(s, 3518));
    },
    8042: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => f, metadata: () => v });
      var r = s(7413),
        o = s(8152),
        a = s.n(o),
        i = s(997),
        n = s.n(i);
      s(1135);
      var l = s(3353),
        c = s(5868),
        d = s(6378),
        m = s(6262),
        x = s(343),
        h = s(3384),
        p = s(4536),
        g = s.n(p);
      let b = () =>
        (0, r.jsxs)("footer", {
          className:
            "relative bg-black py-12 px-6 border-t border-orange-500/20 backdrop-blur-md",
          children: [
            (0, r.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none",
            }),
            (0, r.jsx)("div", {
              className: "max-w-6xl mx-auto relative z-10",
              children: (0, r.jsxs)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10",
                children: [
                  (0, r.jsxs)("div", {
                    className: "text-center md:text-left",
                    children: [
                      (0, r.jsxs)(g(), {
                        href: "/",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "relative w-40 h-auto mx-auto md:mx-0 mb-4",
                            children: (0, r.jsx)("img", {
                              src: "/images/Crypto-soc-Logo.png",
                              alt: "CNZ Logo",
                              className: "object-contain w-full",
                            }),
                          }),
                          (0, r.jsxs)("h3", {
                            className: "text-white font-bold text-xl mb-4",
                            children: [
                              "UC CryptoSociety ",
                              (0, r.jsx)("span", {
                                className: "text-orange-400",
                                children: "DAO",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("p", {
                        className: "text-gray-400 text-sm mb-4",
                        children:
                          "UC Crypto Soc, summoned as New Zealand’s first university DAO in 2024, empowers and unites the University of Canterbury’s Bitcoin, crypto and blockchain student body through decentralized governance, educational events and collaboration with the broader NZ industry.",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "flex justify-center md:justify-start gap-4 mb-6",
                        children: [
                          { href: "https://x.com/UCCryptoSoc", Icon: l.A },
                          {
                            href: "https://www.facebook.com/cryptosocUC",
                            Icon: c.A,
                          },
                          {
                            href: "https://www.instagram.com/uccryptosociety",
                            Icon: d.A,
                          },
                          {
                            href: "https://nz.linkedin.com/in/uc-crypto-society-dao-ba48aa2b8",
                            Icon: m.A,
                          },
                        ].map(({ href: e, Icon: t }, s) =>
                          (0, r.jsxs)(
                            "a",
                            {
                              href: e,
                              className:
                                "text-orange-400 hover:text-orange-300 transition-colors",
                              "aria-label": t.name,
                              children: [
                                (0, r.jsx)(t, { size: 20 }),
                                (0, r.jsx)("span", {
                                  className: "sr-only",
                                  children: t.name,
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: " mx-auto",
                    children: [
                      (0, r.jsx)("h3", {
                        className:
                          "text-white font-semibold text-base mb-4 hover:text-orange-400",
                        children: (0, r.jsx)("a", {
                          href: "https://forms.gle/PNwbQMwCjct81psm9",
                          children: "Join Us",
                        }),
                      }),
                      (0, r.jsx)("h3", {
                        className:
                          "text-white font-semibold text-base mb-4 hover:text-orange-400",
                        children: (0, r.jsx)("a", {
                          href: "mailto:UCCryptoSocDAO@protonmail.com",
                          children: "Sponsor Us",
                        }),
                      }),
                      (0, r.jsx)("h3", {
                        className:
                          "text-white font-semibold text-base mb-4 hover:text-orange-400",
                        children: (0, r.jsx)("a", {
                          href: "mailto:UCCryptoSocDAO@protonmail.com",
                          children: "Contact Us",
                        }),
                      }),
                      (0, r.jsx)("h3", {
                        className:
                          "text-white font-semibold text-base mb-4 hover:text-orange-400",
                        children: (0, r.jsx)("a", {
                          href: "mailto:UCCryptoSocDAO@protonmail.com",
                          children: "Media Enquiries",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-6 text-center",
                    children: [
                      (0, r.jsx)("h3", {
                        className: "text-white font-semibold text-base",
                        children: "Industry Partners",
                      }),
                      (0, r.jsx)("div", {
                        className: "w-40 h-16 relative",
                        children: (0, r.jsx)(h.default, {
                          src: "/images/HorizontalCNZ.png",
                          alt: "Community",
                          fill: !0,
                          className: "object-contain",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "w-40 h-14 relative",
                        children: (0, r.jsx)(h.default, {
                          src: "/images/Blockchain-NZ-logo-removebg-preview.png",
                          alt: "BlockchainNZ",
                          fill: !0,
                          className: "object-contain",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "w-32 h-14 relative",
                        children: (0, r.jsx)(h.default, {
                          src: "/images/Web3NZ-logo.png",
                          alt: "Web3NZ",
                          fill: !0,
                          className: "object-contain",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "text-center md:text-left",
                    children: [
                      (0, r.jsxs)("h3", {
                        className:
                          "text-white font-semibold text-base mb-4 flex justify-center md:justify-start items-center gap-2",
                        children: [
                          (0, r.jsx)(x.A, {
                            size: 16,
                            className: "text-orange-400",
                          }),
                          "Mailing List",
                        ],
                      }),
                      (0, r.jsx)("p", {
                        className: "text-gray-400 text-sm mb-4",
                        children: "Join our mailing list to stay connected.",
                      }),
                      (0, r.jsx)("a", {
                        href: "https://forms.gle/NnDzMxTgXacUQTqV6",
                        children: (0, r.jsx)("button", {
                          className:
                            "w-full px-4 py-2 bg-orange-400 hover:bg-orange-500 transition-all rounded-md text-black font-semibold text-sm hover:shadow-[0_0_10px_rgba(255,165,0,0.3)]",
                          children: "Subscribe",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      var u = s(4);
      let v = {
        title: "University of Canterbury Crypto Society DAO",
        description:
          "UC Crypto Society | University of Canterbury's Bitcoin, Crypto & Blockchain DAO Society  - Advancing Adoption, Knowledge and Community at UC.",
        robots:
          "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL("https://uccryptosoc.org.nz/"),
        alternates: { canonical: "https://uccryptosoc.org.nz/" },
        openGraph: {
          locale: "en_US",
          type: "website",
          title: "University of Canterbury Crypto Society DAO",
          description:
            "UC Crypto Society | University of Canterbury's Bitcoin, Crypto & Blockchain Society - Advancing Adoption, Knowledge and Community at UC.",
          url: "https://uccryptosoc.org.nz/",
          siteName: "UC Crypto Society",
          images: [
            {
              url: "/images/Crypto-soc-Logo.png",
              secureUrl: "/images/Crypto-soc-Logo.png",
              width: 1200,
              height: 630,
              alt: "UC Crypto Society Logo",
              type: "image/png",
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title:
            "UC Crypto Society - University of Canterbury Bitcoin, Crypto & Blockchain Society",
          description:
            "UC Crypto Society | University of Canterbury's Bitcoin, Crypto & Blockchain Society - Advancing Adoption, Knowledge and Community at UC.",
          creator: "@CNZ_DAO",
          images: ["/images/Crypto-soc-Logo.png"],
        },
        authors: [{ name: "UC Crypto Society" }],
        other: {
          "article:published_time": "2024-01-01T00:00:00+13:00",
          "article:modified_time": "2024-03-21T00:00:00+13:00",
          "twitter:label1": "Organization",
          "twitter:data1": "UC Crypto Society",
          "twitter:label2": "Location",
          "twitter:data2": "University of Canterbury, New Zealand",
        },
      };
      function f({ children: e }) {
        return (0, r.jsxs)("html", {
          lang: "en",
          children: [
            (0, r.jsxs)("head", {
              children: [
                (0, r.jsx)("link", {
                  rel: "icon",
                  href: "/favicon-32x32.png",
                  sizes: "32x32",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  href: "/logo-192x192.png",
                  sizes: "192x192",
                }),
                (0, r.jsx)("link", {
                  rel: "apple-touch-icon",
                  href: "/apple-touch-icon.png",
                }),
              ],
            }),
            (0, r.jsx)("body", {
              className: `${a().variable} ${n().variable} antialiased bg-dark`,
              children: (0, r.jsxs)("div", {
                className: "relative w-full min-h-screen bg-dark text-white",
                children: [(0, r.jsx)(u.default, {}), e, (0, r.jsx)(b, {})],
              }),
            }),
          ],
        });
      }
    },
    8109: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 4536, 23)),
        Promise.resolve().then(s.t.bind(s, 9603, 23)),
        Promise.resolve().then(s.bind(s, 4));
    },
  });
