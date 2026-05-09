import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Building2, Home as HomeIcon, Construction, HardHat, Ruler, Leaf, ArrowUpRight } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { projects, services, stats } from "@/data/projects";
import home from "@/assets/home/about.png"
import hero1 from "@/assets/home/hero1.webp";
import hero2 from "@/assets/home/hero2.webp";
import hero3 from "@/assets/home/hero3.png";
import hero4 from "@/assets/home/hero4.webp";
import hero5 from "@/assets/home/hero5.webp";
import hero6 from "@/assets/home/hero6.jpeg";
import WhyChooses from "@/components/WhyChooseUs";
import Apitest from "@/components/Ongoing";

const ICONS = { Building2, Home: HomeIcon, Construction, HardHat, Ruler, Leaf };

const heroStagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.4 } }
};
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  const featured = projects.slice(0, 4);
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div data-testid="home-page" className="bg-white">
      {/* HERO (kept dark over video) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

        {/* BACKGROUND SLIDER */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={heroImages[currentSlide]}
              alt="Hero Background"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1 }}
              transition={{
                opacity: { duration: 1.2 },
                scale: { duration: 6 },
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 hero-scrim z-10"></div>

        {/* GRAIN */}
        <div className="absolute inset-0 grain-overlay z-10 pointer-events-none"></div>

        {/* HERO CONTENT */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full"
        >
          <motion.div variants={heroItem} className="flex items-center gap-4 mb-8">
            <span className="divider-gold"></span>
            <span className="text-overline">
              Engineering · Construction · Delivery
            </span>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-heading font-black text-white text-5xl sm:text-6xl lg:text-8xl tracking-[-0.04em] leading-[0.92] max-w-5xl"
          >
            Success
            <br />
            <span className="text-[#E11D2E]">Excellence</span>
            <br />
            Commitment.
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-8 max-w-xl text-base lg:text-lg text-white/80 leading-relaxed"
          >
            Grade A Construction Company Operating in Qatar.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.2em]"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.2em] border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Contact Us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* SLIDER CONTROLS */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative overflow-hidden h-1 rounded-full transition-all duration-500 ${currentSlide === index
                ? "w-20 bg-white/20"
                : "w-8 bg-white/30"
                }`}
            >
              {currentSlide === index && (
                <motion.div
                  key={currentSlide}
                  className="absolute left-0 top-0 h-full bg-[#E11D2E]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] tracking-[0.4em] uppercase font-heading">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 scroll-indicator" />
        </div>
      </section>

      {/* MARQUEE STRIP (light) */}
      <section className="bg-white border-y border-neutral-200 py-6 overflow-hidden">
        <div className="marquee-track flex gap-16 whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-16 items-center flex-shrink-0">
              {["ISO 18001 CERTIFIED", "ISO 14001 CERTIFIED", "ISO 9001 CERTIFIED", "ICV CERTIFIED"].map((c, i) => (
                <span key={`${k}-${i}`} className="font-heading text-2xl text-neutral-400 tracking-tight uppercase">
                  {c} <span className="text-[#E11D2E] mx-8">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={home}
                alt="Engineers on site"
                className="w-full h-full object-cover"
                data-testid="about-teaser-image"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#E11D2E] text-white p-6 lg:p-8 max-w-[260px] shadow-xl">
              <div className="font-heading font-black text-5xl">25+</div>
              <div className="text-xs uppercase tracking-[0.2em] mt-1 font-semibold">Years of precision engineering</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <p className="text-overline mb-5">About Shannon</p>
            <h2 className="font-heading font-bold text-neutral-900 text-4xl lg:text-4xl tracking-tight leading-[1.05]">
              We build assets that <span className="text-[#E11D2E]">stand the test of time.</span>
            </h2>
            <p className="mt-8 text-neutral-600 text-base text-justify lg:text-md leading-relaxed">
              Now, over a decade since its launch; SEC with its achieved governmental, commercial and residential projects has helped urban development plans for some major Arab cities including Sharjah, UAE and Doha, Qatar. SEC’s continuous dedication to Success, Excellence and Commitment to deliver high-end projects in terms of quality & HSE (Health, Safety & Environment) within projects baselines (Time & Cost) has made us the clients’ right choice.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label} className="border-l-2 border-[#E11D2E] pl-4">
                  <div className="font-heading font-black text-neutral-900 text-3xl lg:text-4xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-[0.18em] mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-10 text-[#E11D2E] font-heading uppercase text-sm tracking-[0.2em] hover:gap-4 transition-all"
              data-testid="home-about-cta"
            >
              Discover Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-[#F4F5F7] py-24 lg:py-32 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-overline mb-5">What We Do</p>
              <h2 className="font-heading font-bold text-neutral-900 text-4xl lg:text-6xl tracking-tight leading-[1.05] max-w-2xl">
                Six disciplines.<br />One integrated practice.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#E11D2E] font-heading uppercase text-sm tracking-[0.2em] transition-all"
              data-testid="home-services-cta"
            >
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
            {services.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="service-card group bg-white p-10 border border-transparent cursor-default"
                  data-testid={`service-card-${i}`}
                >
                  <div className="flex items-start justify-between">
                    <Icon className="w-10 h-10 text-[#E11D2E]" strokeWidth={1.4} />
                    <span className="text-neutral-300 font-heading text-xs">0{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-neutral-900 mt-8">{s.title}</h3>
                  <p className="text-neutral-600 mt-3 text-sm leading-relaxed">{s.short}</p>
                  <div className="service-detail">
                    <p className="text-neutral-700 text-sm leading-relaxed border-t border-neutral-200 pt-4">{s.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Apitest ></Apitest>

      <WhyChooses ></WhyChooses>
      {/* CTA (light with red accent) */}
      <section className="relative bg-[#F4F5F7] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-70"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center"
        >
          <p className="text-overline mb-6">Let's Build</p>
          <h2 className="font-heading font-black text-neutral-900 text-4xl lg:text-7xl tracking-[-0.03em] leading-[0.95]">
            Have a vision?
            <br />
            <span className="text-[#E11D2E]">We engineer it.</span>
          </h2>
          <p className="mt-8 text-neutral-600 max-w-xl mx-auto text-lg">
            From feasibility to handover — let's talk about your next landmark project.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center justify-center gap-2 mt-10 px-10 py-5 text-sm uppercase tracking-[0.2em]"
            data-testid="home-final-cta"
          >
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
