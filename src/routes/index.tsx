import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Anchor, Cake, Heart, Wine, Briefcase, Users, Camera, Sunset,
  Ship, UserCheck, Sparkles, Music, Utensils, Lock, ShieldCheck, Phone,
  MapPin, Quote, ChevronDown, MessageCircle, Instagram, Facebook, Mail,
} from "lucide-react";

import logo from "@/assets/kmb/logo.jpeg.asset.json";
import birthday from "@/assets/kmb/birthday.jpeg.asset.json";
import v1 from "@/assets/kmb/cruise1.mp4.asset.json";
import v2 from "@/assets/kmb/cruise2.mp4.asset.json";
import v3 from "@/assets/kmb/cruise3.mp4.asset.json";
import v4 from "@/assets/kmb/cruise4.mp4.asset.json";
import v5 from "@/assets/kmb/cruise5.mp4.asset.json";

const videos = [v1.url, v2.url, v3.url, v4.url, v5.url];

export const Route = createFileRoute("/")({ component: Home });

/* ---------- utilities ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
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
    <div className="flex items-center gap-4 text-gold">
      <div className="h-px w-10 bg-gold" />
      <span className="text-[11px] uppercase tracking-[0.4em] font-medium">{children}</span>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["About", "#about"], ["Experiences", "#experiences"], ["Gallery", "#gallery"],
    ["Locations", "#locations"], ["Contact", "#contact"],
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
    >
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 transition-all duration-500 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass" : ""}`}>
          <a href="#top" className="flex items-center gap-3 group">
            <img src={logo.url} alt="KMB Marine" className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40" />
            <div className="leading-tight">
              <div className="font-display text-lg text-ivory tracking-wide">KMB Marine</div>
              <div className="text-[9px] uppercase tracking-[0.35em] text-gold/80">Egypt Nile Cruise</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-xs uppercase tracking-[0.25em] text-ivory/80 hover:text-gold transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-navy-deep transition-all">
            Reserve
          </a>
        </div>
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
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <video autoPlay muted loop playsInline preload="auto" className="h-full w-full object-cover">
          <source src={videos[0]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--navy-deep)_90%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
          <SectionLabel>Luxury Nile Experiences · Est. Egypt</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-ivory text-[15vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.95] tracking-tight text-balance"
        >
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
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="group relative overflow-hidden rounded-full bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-navy-deep font-semibold hover:bg-gold-soft transition-colors">
            Book Your Cruise
          </a>
          <a href="#experiences" className="rounded-full border border-ivory/30 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold transition-all">
            Explore Experiences
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={birthday.url} alt="KMB luxury cruise interior at night" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="mt-6 flex items-center gap-6">
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

/* ---------- Experiences ---------- */
const experiences = [
  { icon: Ship, title: "Private Cruises", desc: "Full-boat charters tailored to your vision." },
  { icon: Cake, title: "Birthday Celebrations", desc: "Cinematic staging, bespoke cakes, live entertainment." },
  { icon: Heart, title: "Engagement Parties", desc: "Intimate reveals framed by the river at dusk." },
  { icon: Wine, title: "Romantic Dinners", desc: "Two seats, one river, an unforgettable evening." },
  { icon: Briefcase, title: "Corporate Events", desc: "Elevated hospitality for signature moments." },
  { icon: Users, title: "Family Gatherings", desc: "Warm, private, effortlessly hosted." },
  { icon: Camera, title: "Photography Sessions", desc: "A moving set with the Nile as backdrop." },
  { icon: Sunset, title: "Sunset Cruises", desc: "Golden hour, curated cocktails, calm water." },
];

function Experiences() {
  return (
    <section id="experiences" className="relative bg-navy-deep py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--gold)_10%,transparent),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>Curated Experiences</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-7xl text-ivory leading-[1.05] text-balance">
              Every occasion, <span className="italic gold-text">reimagined</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 rounded-sm overflow-hidden">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <div className="group relative h-full bg-navy-deep p-8 lg:p-10 min-h-[240px] flex flex-col justify-between transition-all duration-500 hover:bg-navy">
                <e.icon className="w-7 h-7 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" strokeWidth={1.2} />
                <div>
                  <h3 className="font-display text-2xl text-ivory">{e.title}</h3>
                  <p className="mt-2 text-sm text-ivory/50 font-light leading-relaxed">{e.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
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
          <div className="mt-16 relative aspect-[16/10] md:aspect-[21/9] rounded-sm overflow-hidden bg-black shadow-luxe">
            <AnimatePresence mode="wait">
              <motion.video
                key={active}
                initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                autoPlay muted loop playsInline
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
              <video muted loop playsInline preload="metadata" className="h-full w-full object-cover" onMouseEnter={e => e.currentTarget.play()} onMouseLeave={e => e.currentTarget.pause()}>
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
    { type: "video", src: v2.url, span: "row-span-2" },
    { type: "image", src: birthday.url, span: "" },
    { type: "video", src: v3.url, span: "" },
    { type: "video", src: v4.url, span: "row-span-2" },
    { type: "video", src: v1.url, span: "" },
    { type: "video", src: v5.url, span: "" },
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
                    muted loop playsInline preload="metadata"
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
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal><div className="flex justify-center"><SectionLabel>Why KMB</SectionLabel></div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-7xl text-ivory leading-[1.05] text-balance">
              A standard of <span className="italic gold-text">quiet</span> excellence.
            </h2>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-px bg-gold/10">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.04}>
              <div className="group relative bg-navy-deep p-10 md:p-14 flex flex-col items-center text-center min-h-[220px] justify-center transition-colors duration-500 hover:bg-navy">
                <f.icon className="w-8 h-8 text-gold transition-all duration-500 group-hover:scale-110" strokeWidth={1.2} />
                <div className="mt-6 font-display text-xl md:text-2xl text-ivory">{f.label}</div>
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
              <div className="group relative bg-navy-deep text-ivory rounded-sm overflow-hidden shadow-luxe">
                <div className="aspect-[16/10] w-full overflow-hidden bg-navy">
                  <iframe
                    src={b.map} loading="lazy" title={b.name}
                    className="h-full w-full grayscale contrast-125 opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="p-10">
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
    <section className="relative bg-navy-deep py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal><div className="flex justify-center"><SectionLabel>Voices</SectionLabel></div></Reveal>
        <div className="mt-16 relative min-h-[280px]">
          <Quote className="mx-auto w-12 h-12 text-gold" strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="mt-10"
            >
              <p className="font-display text-2xl md:text-4xl text-ivory leading-snug italic text-balance">
                &ldquo;{quotes[i].text}&rdquo;
              </p>
              <div className="mt-10">
                <div className="text-gold text-sm tracking-widest">{quotes[i].name}</div>
                <div className="text-ivory/40 text-xs uppercase tracking-[0.3em] mt-2">{quotes[i].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {quotes.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)}
              className={`h-px transition-all duration-500 ${i === idx ? "w-12 bg-gold" : "w-6 bg-ivory/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="contact" className="relative h-[90svh] min-h-[600px] w-full overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src={videos[3]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
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
          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <a href="#" className="rounded-full bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-navy-deep font-semibold hover:bg-gold-soft transition-colors">Book Now</a>
            <a href="tel:+201000000000" className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold transition-all">
              <Phone className="w-3.5 h-3.5" /> Call Us
            </a>
            <a href="https://wa.me/201000000000" className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold transition-all">
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
    <footer className="bg-navy-deep text-ivory border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="KMB" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" />
            <div>
              <div className="font-display text-xl">KMB Marine Cruise</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-gold/70">Egypt Nile Cruise</div>
            </div>
          </div>
          <p className="mt-8 max-w-sm text-ivory/50 font-light leading-relaxed">
            Private luxury cruises on the Nile — for celebrations that deserve a river.
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-6">Navigate</div>
          <ul className="space-y-3 text-sm text-ivory/70">
            {[["About", "#about"], ["Experiences", "#experiences"], ["Gallery", "#gallery"], ["Locations", "#locations"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-6">Contact</div>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li>Maadi · Mamsha Ahl Misr</li>
            <li><a href="tel:+201000000000" className="hover:text-gold">+20 100 000 0000</a></li>
            <li><a href="mailto:hello@kmbmarine.com" className="hover:text-gold">hello@kmbmarine.com</a></li>
          </ul>
          <div className="mt-8 flex gap-3">
            {[Instagram, Facebook, MessageCircle, Mail].map((Ic, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full border border-ivory/15 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Ic className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
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

/* ---------- Page ---------- */
function Home() {
  return (
    <main className="bg-ivory text-navy-deep overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Experiences />
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
