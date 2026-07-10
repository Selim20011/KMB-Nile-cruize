import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Anchor, Cake, Heart, Camera,
  Ship, UserCheck, Sparkles, Music, Utensils, Lock, ShieldCheck, Phone,
  MapPin, Quote, ChevronDown, MessageCircle, Instagram, Facebook, Mail,
  Calendar,
} from "lucide-react";

import logo from "@/assets/kmb/logo.jpeg";
import birthday from "@/assets/kmb/birthday.jpeg";
import v1 from "@/assets/kmb/cruise1.mp4";
import v2 from "@/assets/kmb/cruise2.mp4";
import v3 from "@/assets/kmb/cruise3.mp4";
import v4 from "@/assets/kmb/cruise4.mp4";
import v5 from "@/assets/kmb/cruise5.mp4";

const videos = [v1, v2, v3, v4, v5];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={`${className} transform-gpu`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-gold">
      <div className="h-px w-12 bg-gradient-to-r from-gold to-transparent" />
      <span className="text-[10px] uppercase tracking-[0.35em] font-semibold">{children}</span>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["About", "#about"], ["Services", "#services"], ["Gallery", "#gallery"],
    ["Locations", "#locations"], ["Contact", "#contact"],
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-5"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass shadow-luxe" : ""}`}>
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              <img src={logo} alt="KMB Marine" className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40 group-hover:ring-gold transition-all duration-300" />
              <div className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg text-ivory tracking-wide group-hover:text-gold transition-colors duration-300">KMB Marine</div>
              <div className="text-[9px] uppercase tracking-[0.35em] text-gold/70">Egypt Nile Cruise</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="relative text-xs uppercase tracking-[0.25em] text-ivory/75 hover:text-gold transition-colors duration-300 group">
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold/90 to-gold px-6 py-2.5 text-[10px] uppercase tracking-[0.3em] text-navy-deep font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.03] transition-all duration-300">
              Reserve
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
              <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px w-4 bg-gold transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 glass rounded-2xl px-6 py-6 flex flex-col gap-5"
            >
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMobileOpen(false)} className="text-sm uppercase tracking-[0.2em] text-ivory/80 hover:text-gold transition-colors">
                  {label}
                </a>
              ))}
              <a href="tel:+201155003537" className="mt-2 flex items-center gap-2 text-sm text-gold">
                <Phone className="w-3.5 h-3.5" /> 01155003537
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-navy-deep">
      <motion.div style={{ y, opacity }} className="absolute inset-0 transform-gpu">
        <video autoPlay muted loop playsInline preload="auto" className="h-full w-full object-cover">
          <source src={videos[0]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--navy-deep)_90%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center transform-gpu">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
          <SectionLabel>Luxury Nile Experiences · Est. Egypt</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-ivory text-[15vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.95] tracking-tight text-balance relative"
        >
          <div className="absolute inset-0 bg-gold/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
          KMB <span className="italic gold-text">Marine</span>
          <br />
          <span className="italic font-light">Cruise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-10 max-w-xl text-ivory/75 text-base sm:text-lg font-light leading-relaxed text-balance"
        >
          Where unforgettable moments meet the timeless beauty of the Nile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-5"
        >
          <a href="#contact" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-navy-deep font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:scale-[1.03] transition-all duration-500">
            Book Your Cruise
          </a>
          <a href="#services" className="group relative overflow-hidden rounded-full border border-gold/45 px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-ivory hover:text-navy-deep hover:bg-gold hover:scale-[1.03] transition-all duration-500">
            Explore Services
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-ivory/60"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-float-down" />
      </motion.div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="relative bg-ivory py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative group p-4">
            <div className="absolute inset-0 rounded-2xl border border-gold/25 translate-x-4 translate-y-4 -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
              <img src={birthday} alt="KMB luxury cruise interior at night" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-navy-deep/20 transition-all duration-500 group-hover:bg-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="hairline flex-1" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-navy/60">Est · Cairo</span>
          </div>
        </Reveal>

        <div className="lg:col-span-6 order-1 lg:order-2 lg:pl-10">
          <Reveal><SectionLabel>Our Story</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-navy-deep text-balance">
              A private world <span className="italic gold-text">afloat</span> on the Nile.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-navy/70 text-lg leading-relaxed max-w-lg font-light">
              KMB Marine crafts premium private Nile experiences — designed for the celebrations, gatherings and quiet evenings that deserve to be remembered.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-navy/60 leading-relaxed max-w-lg font-light">
              From our berths in Maadi and Mamsha Ahl Misr, we redefine luxury cruising through discreet service, considered interiors, and a devotion to detail.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-md">
              {[["12+", "Years"], ["2", "Locations"], ["1.2k+", "Events"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl text-navy-deep">{n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-navy/50">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const services = [
  { 
    icon: Cake, 
    title: "Birthdays", 
    desc: "Cinematic setups on the Nile with customized theme styling, premium cakes, professional photography, and live entertainment.",
    highlights: ["Custom Theme Decor", "High-fidelity DJ & Audio", "Luxury Catering & Cakes"]
  },
  { 
    icon: Heart, 
    title: "Wedding Plans", 
    desc: "Bespoke wedding and engagement planning. Stunning floral setups, high-fidelity sound, and sunset backdrops for your special day.",
    highlights: ["Sunset Stage Setup", "Florals & Entrance Arches", "Photo & Video Packages"]
  },
  { 
    icon: Calendar, 
    title: "Annual Events", 
    desc: "Premium hosting for annual corporate milestones, private family reunions, and signature seasonal celebrations.",
    highlights: ["Private Chartered Cruising", "Custom Executive Menus", "Tailored Event Schedules"]
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-navy-deep py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--gold)_10%,transparent),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>Our Services</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-7xl text-ivory leading-[1.05] text-balance">
              Every occasion, <span className="italic gold-text">reimagined</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-gold/15 bg-navy/20 backdrop-blur-md p-8 lg:p-10 min-h-[400px] flex flex-col justify-between transition-all duration-500 hover:border-gold/40 hover:-translate-y-2 hover:shadow-luxe">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 bg-gold/5 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                    <s.icon className="w-6 h-6 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.2} />
                  </div>
                  <div className="mt-8">
                    <h3 className="font-display text-2xl text-ivory tracking-wide">{s.title}</h3>
                    <p className="mt-3 text-sm text-ivory/55 font-light leading-relaxed">{s.desc}</p>
                  </div>
                  <ul className="mt-6 space-y-2.5">
                    {s.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-2.5 text-xs text-ivory/70 font-light">
                        <div className="h-1 w-1 rounded-full bg-gold/70" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold/80 transition-colors group-hover:text-gold font-medium">
                  <span>Inquire Service</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Video Showcase (cinematic carousel) ---------- */
function VideoShowcase() {
  const [active, setActive] = useState(0);
  return (
    <section className="relative bg-navy-deep py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal><SectionLabel>Cinematic Reel</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl text-ivory leading-[1.05] text-balance max-w-2xl">
                Nights on the <span className="italic gold-text">Nile</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex gap-2">
              {videos.map((_, i) => (
                <button
                  key={i} onClick={() => setActive(i)}
                  className={`h-px transition-all duration-500 ${active === i ? "w-16 bg-gold" : "w-8 bg-ivory/20"}`}
                  aria-label={`Video ${i + 1}`}
                />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 relative aspect-[16/10] md:aspect-[21/9] rounded-xl overflow-hidden bg-black shadow-luxe border border-gold/20 glow-gold">
            <AnimatePresence mode="wait">
              <motion.video
                key={active}
                initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                autoPlay muted loop playsInline preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={videos[active]} type="video/mp4" />
              </motion.video>
            </AnimatePresence>
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 pointer-events-none" />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-5 gap-3">
          {videos.map((src, i) => (
            <button
              key={i} onClick={() => setActive(i)}
              className={`group relative aspect-video overflow-hidden rounded-sm transition-all ${active === i ? "ring-1 ring-gold" : "opacity-50 hover:opacity-100"}`}
            >
              <video muted loop playsInline preload="none" className="h-full w-full object-cover" onMouseEnter={e => e.currentTarget.play()} onMouseLeave={e => e.currentTarget.pause()}>
                <source src={src} type="video/mp4" />
              </video>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery (masonry with hover-play videos + image) ---------- */
function Gallery() {
  const items = [
    { type: "video", src: v2, span: "row-span-2" },
    { type: "image", src: birthday, span: "" },
    { type: "video", src: v3, span: "" },
    { type: "video", src: v4, span: "row-span-2" },
    { type: "video", src: v1, span: "" },
    { type: "video", src: v5, span: "" },
  ];
  return (
    <section id="gallery" className="relative bg-ivory py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal><SectionLabel>Moments</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl text-navy-deep leading-[1.05] text-balance">
                A gallery of <span className="italic gold-text">golden hours</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-navy/60 max-w-sm font-light">Fragments from evenings we've hosted — the light, the laughter, the water.</p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.06} className={it.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-sm bg-navy-deep">
                {it.type === "image" ? (
                  <img src={it.src} alt="KMB Marine gallery" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                ) : (
                  <video
                    muted loop playsInline preload="none"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    onMouseEnter={e => e.currentTarget.play()}
                    onMouseLeave={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  >
                    <source src={it.src} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why choose ---------- */
const features = [
  { icon: Ship, label: "Luxury Boats" },
  { icon: UserCheck, label: "Professional Crew" },
  { icon: Sparkles, label: "Premium Decoration" },
  { icon: Music, label: "Live Music" },
  { icon: Camera, label: "Photography" },
  { icon: Utensils, label: "Luxury Catering" },
  { icon: Lock, label: "Private Events" },
  { icon: ShieldCheck, label: "Safety First" },
  { icon: Phone, label: "24/7 Support" },
];

function WhyChoose() {
  return (
    <section className="relative bg-navy-deep py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><path d=%22M0 30h60M30 0v60%22 stroke=%22%23D4AF37%22 stroke-width=%220.5%22/></svg>')]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-4">
          <Reveal><SectionLabel>Why KMB</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-6xl text-ivory leading-[1.05] text-balance">
              A standard of <span className="italic gold-text">quiet</span> excellence.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-ivory/60 text-sm leading-relaxed font-light">
              Crafting unmatched memories afloat the Nile with world-class hospitality, absolute privacy, and meticulous attention to detail.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.04}>
              <div className="group relative bg-navy/20 backdrop-blur-sm border border-gold/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center min-h-[160px] justify-center transition-all duration-500 hover:border-gold/35 hover:-translate-y-1 hover:shadow-gold/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/15 bg-gold/5 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
                  <f.icon className="w-5 h-5 text-gold transition-all duration-500 group-hover:scale-110" strokeWidth={1.2} />
                </div>
                <div className="mt-4 font-display text-base md:text-lg text-ivory tracking-wide">{f.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Locations ---------- */
function Locations() {
  const branches = [
    {
      name: "Maadi", tag: "Flagship Marina",
      desc: "Anchored in Cairo's most storied riverside district — a discreet arrival, a private cruise.",
      map: "https://www.google.com/maps?q=Maadi,Cairo,Egypt&output=embed",
    },
    {
      name: "Mamsha Ahl Misr", tag: "ممشى أهل مصر",
      desc: "Central Cairo's celebrated promenade — a majestic setting for celebrations that deserve an audience.",
      map: "https://www.google.com/maps?q=Mamsha+Ahl+Misr,Cairo,Egypt&output=embed",
    },
  ];
  return (
    <section id="locations" className="relative bg-ivory py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>Our Marinas</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-7xl text-navy-deep leading-[1.05] text-balance">
              Two homes on <span className="italic gold-text">the river</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {branches.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.15}>
              <div className="group relative bg-gradient-to-b from-navy to-navy-deep text-ivory rounded-2xl border border-gold/15 overflow-hidden shadow-luxe transition-all duration-500 hover:border-gold/45">
                <div className="aspect-[16/10] w-full overflow-hidden bg-navy relative">
                  <iframe
                    src={b.map} loading="lazy" title={b.name}
                    className="h-full w-full grayscale contrast-125 opacity-50 group-hover:opacity-85 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 text-gold">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                    <span className="text-[10px] uppercase tracking-[0.4em]">{b.tag}</span>
                  </div>
                  <h3 className="mt-4 font-display text-4xl">{b.name}</h3>
                  <p className="mt-4 text-ivory/60 font-light leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const quotes = [
  { name: "Nour A.", role: "Engagement · Zamalek", text: "Every detail felt considered. The crew disappeared into the evening — exactly what luxury should feel like." },
  { name: "Karim H.", role: "Corporate Gala", text: "KMB elevated our brand's evening beyond anything we had imagined. Cinematic from arrival to farewell." },
  { name: "Layla M.", role: "Birthday · 26", text: "The most beautiful night of my life. The boat, the lights, the service — flawless." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % quotes.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative bg-ivory py-32 md:py-48 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal><div className="flex justify-center"><SectionLabel>Client Voices</SectionLabel></div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-center text-5xl md:text-6xl text-navy-deep leading-[1.05] text-balance">
            Words from the <span className="italic gold-text">river</span>.
          </h2>
        </Reveal>
        <div className="mt-20 relative">
          <div className="flex justify-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/25 bg-gold/5">
              <Quote className="w-7 h-7 text-gold" strokeWidth={1} />
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-display text-2xl md:text-4xl text-navy-deep leading-snug italic text-balance max-w-3xl mx-auto">
                &ldquo;{quotes[i].text}&rdquo;
              </p>
              <div className="mt-12 flex flex-col items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="font-display text-navy text-lg tracking-wide">{quotes[i].name}</div>
                <div className="text-navy/50 text-xs uppercase tracking-[0.35em]">{quotes[i].role}</div>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-gold text-sm">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-12 flex justify-center gap-3">
            {quotes.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)}
                className={`transition-all duration-500 rounded-full ${i === idx ? "w-8 h-2 bg-gold" : "w-2 h-2 bg-navy/20 hover:bg-gold/40"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="contact" className="relative h-[90svh] min-h-[600px] w-full overflow-hidden">
      <video autoPlay muted loop playsInline preload="none" className="absolute inset-0 h-full w-full object-cover">
        <source src={videos[3]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center transform-gpu">
        <Reveal><SectionLabel>Reserve</SectionLabel></Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-8 font-display text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
            Your luxury journey <br /><span className="italic gold-text">starts here</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 max-w-lg text-ivory/70 font-light">Speak with a private cruise concierge — reservations open for the coming season.</p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="#" className="rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-navy-deep font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500">Book Now</a>
            <a href="tel:+201155003537" className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold transition-all duration-500">
              <Phone className="w-3.5 h-3.5" /> Call Us
            </a>
            <a href="https://wa.me/201155003537" className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold transition-all duration-500">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={logo} alt="KMB" className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/40" />
              <div className="absolute inset-0 rounded-full bg-gold/5" />
            </div>
            <div>
              <div className="font-display text-2xl tracking-wide">KMB Marine Cruise</div>
              <div className="text-[9px] uppercase tracking-[0.4em] text-gold/60 mt-1">Egypt Nile Cruise · Est. Cairo</div>
            </div>
          </div>
          <p className="mt-8 max-w-sm text-ivory/45 font-light leading-relaxed text-sm">
            Private luxury cruises on the Nile — for celebrations that deserve a river and moments that deserve to be remembered forever.
          </p>
          <div className="mt-8 flex gap-3">
            {([
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: Facebook, label: "Facebook", href: "#" },
              { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/201155003537" },
              { Icon: Mail, label: "Email", href: "mailto:hello@kmbmarine.com" },
            ] as { Icon: React.ElementType; label: string; href: string }[]).map(({ Icon, label, href }) => (
              <a key={label} href={href} aria-label={label}
                className="h-10 w-10 rounded-full border border-ivory/10 flex items-center justify-center text-ivory/50 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300">
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 md:col-start-7">
          <div className="text-[9px] uppercase tracking-[0.4em] text-gold mb-6">Navigate</div>
          <ul className="space-y-3">
            {[["About", "#about"], ["Services", "#services"], ["Gallery", "#gallery"], ["Locations", "#locations"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                  <span className="inline-block h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="text-[9px] uppercase tracking-[0.4em] text-gold mb-6">Get In Touch</div>
          <ul className="space-y-4 text-sm text-ivory/60">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
              <span>Maadi · Mamsha Ahl Misr, Cairo</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={1.5} />
              <a href="tel:+201155003537" className="hover:text-gold transition-colors duration-300">01155003537</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={1.5} />
              <a href="mailto:hello@kmbmarine.com" className="hover:text-gold transition-colors duration-300">hello@kmbmarine.com</a>
            </li>
          </ul>
          <a href="https://wa.me/201155003537" className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-navy-deep font-semibold transition-all duration-300">
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
          </a>
        </div>
      </div>
      <div className="border-t border-ivory/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-ivory/40 uppercase tracking-[0.25em]">
          <div>© {new Date().getFullYear()} KMB Marine Cruise</div>
          <div className="flex items-center gap-2"><Anchor className="w-3 h-3 text-gold" /> Crafted on the Nile</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <main className="bg-ivory text-navy-deep overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <VideoShowcase />
      <Gallery />
      <WhyChoose />
      <Locations />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
