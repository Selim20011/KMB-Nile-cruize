import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { _ as Camera, a as ShieldCheck, b as Anchor, c as Music, d as Mail, f as Lock, g as ChevronDown, h as Facebook, i as Ship, l as MessageCircle, m as Heart, n as UserCheck, o as Quote, p as Instagram, r as Sparkles, s as Phone, t as Utensils, u as MapPin, v as Calendar, y as Cake } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-JT-vsZYW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-Bq7ADMRK.jpeg";
var birthday_default = "/assets/birthday-dev4RKR5.jpeg";
var cruise1_default = "/assets/cruise1-XDOMKP91.mp4";
var cruise2_default = "/assets/cruise2-DE86wRdu.mp4";
var cruise3_default = "/assets/cruise3-Coxi4z1-.mp4";
var cruise4_default = "/assets/cruise4-BviaurYo.mp4";
var cruise5_default = "/assets/cruise5-DBfs_xKN.mp4";
var videos = [
	cruise1_default,
	cruise2_default,
	cruise3_default,
	cruise4_default,
	cruise5_default
];
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants: {
			hidden: {
				opacity: 0,
				y: 40
			},
			show: {
				opacity: 1,
				y: 0,
				transition: {
					duration: .9,
					delay,
					ease: [
						.22,
						1,
						.36,
						1
					]
				}
			}
		},
		children
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 text-gold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-12 bg-gradient-to-r from-gold to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] uppercase tracking-[0.35em] font-semibold",
			children
		})]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 40);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	const links = [
		["About", "#about"],
		["Services", "#services"],
		["Gallery", "#gallery"],
		["Locations", "#locations"],
		["Contact", "#contact"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: 1,
			delay: .2
		},
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass shadow-luxe" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-3 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "KMB Marine",
								className: "h-10 w-10 rounded-full object-cover ring-1 ring-gold/40 group-hover:ring-gold transition-all duration-300"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg text-ivory tracking-wide group-hover:text-gold transition-colors duration-300",
								children: "KMB Marine"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[9px] uppercase tracking-[0.35em] text-gold/70",
								children: "Egypt Nile Cruise"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden md:flex items-center gap-8",
						children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href,
							className: "relative text-xs uppercase tracking-[0.25em] text-ivory/75 hover:text-gold transition-colors duration-300 group",
							children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" })]
						}, href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold/90 to-gold px-6 py-2.5 text-[10px] uppercase tracking-[0.3em] text-navy-deep font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.03] transition-all duration-300",
							children: "Reserve"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setMobileOpen(!mobileOpen),
							className: "md:hidden flex flex-col gap-1.5 p-2",
							"aria-label": "Menu",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-px w-6 bg-ivory transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-px w-4 bg-gold transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-px w-6 bg-ivory transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}` })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				transition: { duration: .3 },
				className: "md:hidden mt-2 glass rounded-2xl px-6 py-6 flex flex-col gap-5",
				children: [links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					onClick: () => setMobileOpen(false),
					className: "text-sm uppercase tracking-[0.2em] text-ivory/80 hover:text-gold transition-colors",
					children: label
				}, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:+201155003537",
					className: "mt-2 flex items-center gap-2 text-sm text-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5" }), " 01155003537"]
				})]
			}) })]
		})
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative h-[100svh] w-full overflow-hidden bg-navy-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					opacity
				},
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						preload: "auto",
						className: "h-full w-full object-cover",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: videos[0],
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--navy-deep)_90%)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "relative z-10 h-full flex flex-col items-center justify-center px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .6
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Luxury Nile Experiences · Est. Egypt" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 40
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1.2,
							delay: .8,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-8 font-display text-ivory text-[15vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.95] tracking-tight text-balance relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gold/5 blur-[120px] rounded-full -z-10 pointer-events-none" }),
							"KMB ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic gold-text",
								children: "Marine"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-light",
								children: "Cruise"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1.2,
							delay: 1.4
						},
						className: "mt-10 max-w-xl text-ivory/75 text-base sm:text-lg font-light leading-relaxed text-balance",
						children: "Where unforgettable moments meet the timeless beauty of the Nile."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1.7
						},
						className: "mt-12 flex flex-col sm:flex-row gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "group relative overflow-hidden rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-navy-deep font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:scale-[1.03] transition-all duration-500",
							children: "Book Your Cruise"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "group relative overflow-hidden rounded-full border border-gold/45 px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-ivory hover:text-navy-deep hover:bg-gold hover:scale-[1.03] transition-all duration-500",
							children: "Explore Services"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 2.2,
					duration: 1
				},
				className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-ivory/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-[0.4em]",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4 animate-float-down" })]
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative bg-ivory py-32 md:py-48",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-6 order-2 lg:order-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative group p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-2xl border border-gold/25 translate-x-4 translate-y-4 -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: birthday_default,
								alt: "KMB luxury cruise interior at night",
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy-deep/20 transition-all duration-500 group-hover:bg-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/20" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline flex-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase tracking-[0.4em] text-navy/60",
						children: "Est · Cairo"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6 order-1 lg:order-2 lg:pl-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Our Story" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-navy-deep text-balance",
							children: [
								"A private world ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic gold-text",
									children: "afloat"
								}),
								" on the Nile."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 text-navy/70 text-lg leading-relaxed max-w-lg font-light",
							children: "KMB Marine crafts premium private Nile experiences — designed for the celebrations, gatherings and quiet evenings that deserve to be remembered."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-navy/60 leading-relaxed max-w-lg font-light",
							children: "From our berths in Maadi and Mamsha Ahl Misr, we redefine luxury cruising through discreet service, considered interiors, and a devotion to detail."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .4,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid grid-cols-3 gap-8 max-w-md",
							children: [
								["12+", "Years"],
								["2", "Locations"],
								["1.2k+", "Events"]
							].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl text-navy-deep",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[10px] uppercase tracking-[0.3em] text-navy/50",
								children: l
							})] }, l))
						})
					})
				]
			})]
		})
	});
}
var services = [
	{
		icon: Cake,
		title: "Birthdays",
		desc: "Cinematic setups on the Nile with customized theme styling, premium cakes, professional photography, and live entertainment.",
		highlights: [
			"Custom Theme Decor",
			"High-fidelity DJ & Audio",
			"Luxury Catering & Cakes"
		]
	},
	{
		icon: Heart,
		title: "Wedding Plans",
		desc: "Bespoke wedding and engagement planning. Stunning floral setups, high-fidelity sound, and sunset backdrops for your special day.",
		highlights: [
			"Sunset Stage Setup",
			"Florals & Entrance Arches",
			"Photo & Video Packages"
		]
	},
	{
		icon: Calendar,
		title: "Annual Events",
		desc: "Premium hosting for annual corporate milestones, private family reunions, and signature seasonal celebrations.",
		highlights: [
			"Private Chartered Cruising",
			"Custom Executive Menus",
			"Tailored Event Schedules"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative bg-navy-deep py-32 md:py-48 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--gold)_10%,transparent),transparent_60%)] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Our Services" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-8 font-display text-5xl md:text-7xl text-ivory leading-[1.05] text-balance",
						children: [
							"Every occasion, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic gold-text",
								children: "reimagined"
							}),
							"."
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid sm:grid-cols-1 md:grid-cols-3 gap-8",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative h-full overflow-hidden rounded-2xl border border-gold/15 bg-navy/20 backdrop-blur-md p-8 lg:p-10 min-h-[400px] flex flex-col justify-between transition-all duration-500 hover:border-gold/40 hover:-translate-y-2 hover:shadow-luxe",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 bg-gold/5 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "w-6 h-6 text-gold transition-transform duration-500 group-hover:scale-110",
										strokeWidth: 1.2
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl text-ivory tracking-wide",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-ivory/55 font-light leading-relaxed",
										children: s.desc
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2.5",
									children: s.highlights.map((hl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2.5 text-xs text-ivory/70 font-light",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-1 rounded-full bg-gold/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hl })]
									}, hl))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold/80 transition-colors group-hover:text-gold font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquire Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block transition-transform duration-300 group-hover:translate-x-1",
									children: "→"
								})]
							})
						]
					})
				}, s.title))
			})]
		})]
	});
}
function VideoShowcase() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-navy-deep py-32 md:py-48 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Cinematic Reel" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-8 font-display text-5xl md:text-7xl text-ivory leading-[1.05] text-balance max-w-2xl",
							children: [
								"Nights on the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic gold-text",
									children: "Nile"
								}),
								"."
							]
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: videos.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActive(i),
								className: `h-px transition-all duration-500 ${active === i ? "w-16 bg-gold" : "w-8 bg-ivory/20"}`,
								"aria-label": `Video ${i + 1}`
							}, i))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 relative aspect-[16/10] md:aspect-[21/9] rounded-xl overflow-hidden bg-black shadow-luxe border border-gold/20 glow-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.video, {
								initial: {
									opacity: 0,
									scale: 1.05
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: { opacity: 0 },
								transition: {
									duration: 1.2,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								className: "absolute inset-0 h-full w-full object-cover",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
									src: videos[active],
									type: "video/mp4"
								})
							}, active)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/20 pointer-events-none" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-5 gap-3",
					children: videos.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(i),
						className: `group relative aspect-video overflow-hidden rounded-sm transition-all ${active === i ? "ring-1 ring-gold" : "opacity-50 hover:opacity-100"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							muted: true,
							loop: true,
							playsInline: true,
							preload: "metadata",
							className: "h-full w-full object-cover",
							onMouseEnter: (e) => e.currentTarget.play(),
							onMouseLeave: (e) => e.currentTarget.pause(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
								src,
								type: "video/mp4"
							})
						})
					}, i))
				})
			]
		})
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "relative bg-ivory py-32 md:py-48",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Moments" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-8 font-display text-5xl md:text-7xl text-navy-deep leading-[1.05] text-balance",
							children: [
								"A gallery of ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic gold-text",
									children: "golden hours"
								}),
								"."
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-navy/60 max-w-sm font-light",
						children: "Fragments from evenings we've hosted — the light, the laughter, the water."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-4",
				children: [
					{
						type: "video",
						src: cruise2_default,
						span: "row-span-2"
					},
					{
						type: "image",
						src: birthday_default,
						span: ""
					},
					{
						type: "video",
						src: cruise3_default,
						span: ""
					},
					{
						type: "video",
						src: cruise4_default,
						span: "row-span-2"
					},
					{
						type: "video",
						src: cruise1_default,
						span: ""
					},
					{
						type: "video",
						src: cruise5_default,
						span: ""
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					className: it.span,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative h-full w-full overflow-hidden rounded-sm bg-navy-deep",
						children: [
							it.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: it.src,
								alt: "KMB Marine gallery",
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								muted: true,
								loop: true,
								playsInline: true,
								preload: "metadata",
								className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110",
								onMouseEnter: (e) => e.currentTarget.play(),
								onMouseLeave: (e) => {
									e.currentTarget.pause();
									e.currentTarget.currentTime = 0;
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
									src: it.src,
									type: "video/mp4"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all duration-500" })
						]
					})
				}, i))
			})]
		})
	});
}
var features = [
	{
		icon: Ship,
		label: "Luxury Boats"
	},
	{
		icon: UserCheck,
		label: "Professional Crew"
	},
	{
		icon: Sparkles,
		label: "Premium Decoration"
	},
	{
		icon: Music,
		label: "Live Music"
	},
	{
		icon: Camera,
		label: "Photography"
	},
	{
		icon: Utensils,
		label: "Luxury Catering"
	},
	{
		icon: Lock,
		label: "Private Events"
	},
	{
		icon: ShieldCheck,
		label: "Safety First"
	},
	{
		icon: Phone,
		label: "24/7 Support"
	}
];
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-navy-deep py-32 md:py-48 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><path d=%22M0 30h60M30 0v60%22 stroke=%22%23D4AF37%22 stroke-width=%220.5%22/></svg>')]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Why KMB" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-8 font-display text-5xl md:text-6xl text-ivory leading-[1.05] text-balance",
							children: [
								"A standard of ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic gold-text",
									children: "quiet"
								}),
								" excellence."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-ivory/60 text-sm leading-relaxed font-light",
							children: "Crafting unmatched memories afloat the Nile with world-class hospitality, absolute privacy, and meticulous attention to detail."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-5",
				children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative bg-navy/20 backdrop-blur-sm border border-gold/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center min-h-[160px] justify-center transition-all duration-500 hover:border-gold/35 hover:-translate-y-1 hover:shadow-gold/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-full border border-gold/15 bg-gold/5 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
								className: "w-5 h-5 text-gold transition-all duration-500 group-hover:scale-110",
								strokeWidth: 1.2
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 font-display text-base md:text-lg text-ivory tracking-wide",
							children: f.label
						})]
					})
				}, f.label))
			})]
		})]
	});
}
function Locations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "locations",
		className: "relative bg-ivory py-32 md:py-48",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Our Marinas" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-8 font-display text-5xl md:text-7xl text-navy-deep leading-[1.05] text-balance",
						children: [
							"Two homes on ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic gold-text",
								children: "the river"
							}),
							"."
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid md:grid-cols-2 gap-8",
				children: [{
					name: "Maadi",
					tag: "Flagship Marina",
					desc: "Anchored in Cairo's most storied riverside district — a discreet arrival, a private cruise.",
					map: "https://www.google.com/maps?q=Maadi,Cairo,Egypt&output=embed"
				}, {
					name: "Mamsha Ahl Misr",
					tag: "ممشى أهل مصر",
					desc: "Central Cairo's celebrated promenade — a majestic setting for celebrations that deserve an audience.",
					map: "https://www.google.com/maps?q=Mamsha+Ahl+Misr,Cairo,Egypt&output=embed"
				}].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative bg-gradient-to-b from-navy to-navy-deep text-ivory rounded-2xl border border-gold/15 overflow-hidden shadow-luxe transition-all duration-500 hover:border-gold/45",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-[16/10] w-full overflow-hidden bg-navy relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: b.map,
								loading: "lazy",
								title: b.name,
								className: "h-full w-full grayscale contrast-125 opacity-50 group-hover:opacity-85 group-hover:grayscale-0 transition-all duration-700"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent pointer-events-none" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 md:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "w-4 h-4",
										strokeWidth: 1.5
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-[0.4em]",
										children: b.tag
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-4xl",
									children: b.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-ivory/60 font-light leading-relaxed",
									children: b.desc
								})
							]
						})]
					})
				}, b.name))
			})]
		})
	});
}
var quotes = [
	{
		name: "Nour A.",
		role: "Engagement · Zamalek",
		text: "Every detail felt considered. The crew disappeared into the evening — exactly what luxury should feel like."
	},
	{
		name: "Karim H.",
		role: "Corporate Gala",
		text: "KMB elevated our brand's evening beyond anything we had imagined. Cinematic from arrival to farewell."
	},
	{
		name: "Layla M.",
		role: "Birthday · 26",
		text: "The most beautiful night of my life. The boat, the lights, the service — flawless."
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((x) => (x + 1) % quotes.length), 6500);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-ivory py-32 md:py-48 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-6 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Client Voices" })
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-8 font-display text-center text-5xl md:text-6xl text-navy-deep leading-[1.05] text-balance",
							children: [
								"Words from the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic gold-text",
									children: "river"
								}),
								"."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center mb-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-16 w-16 items-center justify-center rounded-full border border-gold/25 bg-gold/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
										className: "w-7 h-7 text-gold",
										strokeWidth: 1
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: -20
									},
									transition: {
										duration: .8,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-2xl md:text-4xl text-navy-deep leading-snug italic text-balance max-w-3xl mx-auto",
										children: [
											"“",
											quotes[i].text,
											"”"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-12 flex flex-col items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-navy text-lg tracking-wide",
												children: quotes[i].name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-navy/50 text-xs uppercase tracking-[0.35em]",
												children: quotes[i].role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex gap-1 mt-1",
												children: [...Array(5)].map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-gold text-sm",
													children: "★"
												}, s))
											})
										]
									})]
								}, i)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 flex justify-center gap-3",
								children: quotes.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setI(idx),
									className: `transition-all duration-500 rounded-full ${i === idx ? "w-8 h-2 bg-gold" : "w-2 h-2 bg-navy/20 hover:bg-gold/40"}`
								}, idx))
							})
						]
					})
				]
			})
		]
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative h-[90svh] min-h-[600px] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				className: "absolute inset-0 h-full w-full object-cover",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: videos[3],
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 h-full flex flex-col items-center justify-center px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Reserve" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-8 font-display text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl",
							children: [
								"Your luxury journey ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic gold-text",
									children: "starts here"
								}),
								"."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-lg text-ivory/70 font-light",
							children: "Speak with a private cruise concierge — reservations open for the coming season."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .4,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-col sm:flex-row gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-navy-deep font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500",
									children: "Book Now"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+201155003537",
									className: "inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold transition-all duration-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5" }), " Call Us"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/201155003537",
									className: "inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold transition-all duration-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-3.5 h-3.5" }), " WhatsApp"]
								})
							]
						})
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy-deep text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: logo_default,
										alt: "KMB",
										className: "h-14 w-14 rounded-full object-cover ring-1 ring-gold/40"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-gold/5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl tracking-wide",
									children: "KMB Marine Cruise"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[9px] uppercase tracking-[0.4em] text-gold/60 mt-1",
									children: "Egypt Nile Cruise · Est. Cairo"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-sm text-ivory/45 font-light leading-relaxed text-sm",
								children: "Private luxury cruises on the Nile — for celebrations that deserve a river and moments that deserve to be remembered forever."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex gap-3",
								children: [
									{
										Icon: Instagram,
										label: "Instagram",
										href: "#"
									},
									{
										Icon: Facebook,
										label: "Facebook",
										href: "#"
									},
									{
										Icon: MessageCircle,
										label: "WhatsApp",
										href: "https://wa.me/201155003537"
									},
									{
										Icon: Mail,
										label: "Email",
										href: "mailto:hello@kmbmarine.com"
									}
								].map(({ Icon, label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									"aria-label": label,
									className: "h-10 w-10 rounded-full border border-ivory/10 flex items-center justify-center text-ivory/50 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "w-4 h-4",
										strokeWidth: 1.5
									})
								}, label))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3 md:col-start-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] uppercase tracking-[0.4em] text-gold mb-6",
							children: "Navigate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: [
								["About", "#about"],
								["Services", "#services"],
								["Gallery", "#gallery"],
								["Locations", "#locations"],
								["Contact", "#contact"]
							].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: h,
								className: "text-sm text-ivory/60 hover:text-gold transition-colors duration-300 flex items-center gap-2 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" }), l]
							}) }, h))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[9px] uppercase tracking-[0.4em] text-gold mb-6",
								children: "Get In Touch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-4 text-sm text-ivory/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "w-3.5 h-3.5 text-gold mt-0.5 shrink-0",
											strokeWidth: 1.5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Maadi · Mamsha Ahl Misr, Cairo" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "w-3.5 h-3.5 text-gold shrink-0",
											strokeWidth: 1.5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+201155003537",
											className: "hover:text-gold transition-colors duration-300",
											children: "01155003537"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											className: "w-3.5 h-3.5 text-gold shrink-0",
											strokeWidth: 1.5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:hello@kmbmarine.com",
											className: "hover:text-gold transition-colors duration-300",
											children: "hello@kmbmarine.com"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/201155003537",
								className: "mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-navy-deep font-semibold transition-all duration-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-3.5 h-3.5" }), " WhatsApp Us"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-ivory/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-ivory/40 uppercase tracking-[0.25em]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" KMB Marine Cruise"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, { className: "w-3 h-3 text-gold" }), " Crafted on the Nile"]
					})]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-ivory text-navy-deep overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoShowcase, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locations, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Home as component };
