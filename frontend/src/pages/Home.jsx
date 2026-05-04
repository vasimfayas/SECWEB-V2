import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Building2, Home as HomeIcon, Construction, HardHat, Ruler, Leaf, ArrowUpRight } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { projects, services, stats } from "@/data/projects";

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

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://images.unsplash.com/photo-1758261785728-24fc44937941?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBza3lzY3JhcGVyJTIwY3JhbmVzfGVufDB8fHx8MTc3NzgxNDQwN3ww&ixlib=rb-4.1.0&q=85"
          data-testid="hero-video"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-crane-in-construction-site-4158-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-scrim z-10"></div>
        <div className="absolute inset-0 grain-overlay z-10 pointer-events-none"></div>

        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full"
        >
          <motion.div variants={heroItem} className="flex items-center gap-4 mb-8">
            <span className="divider-gold"></span>
            <span className="text-overline">Engineering · Construction · Delivery</span>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-heading font-black text-white text-5xl sm:text-6xl lg:text-8xl tracking-[-0.04em] leading-[0.92] max-w-5xl"
          >
            Building the
            <br />
            <span className="text-[#E11D2E]">Architecture</span>
            <br />
            of Tomorrow.
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-8 max-w-xl text-base lg:text-lg text-white/75 leading-relaxed"
          >
            Shannon Engineering is a global design–build firm delivering precision-engineered commercial,
            residential and infrastructure assets across 22 countries.
          </motion.p>

          <motion.div variants={heroItem} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.2em]"
              data-testid="hero-view-projects"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.2em] border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all"
              data-testid="hero-contact-us"
            >
              Contact Us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-[0.4em] uppercase font-heading">Scroll</span>
          <ArrowDown className="w-4 h-4 scroll-indicator" />
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="bg-[#0A1128] border-y border-white/5 py-6 overflow-hidden">
        <div className="marquee-track flex gap-16 whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-16 items-center flex-shrink-0">
              {["ISO 9001", "LEED Platinum", "BREEAM Outstanding", "ISO 45001", "BIM Level 3", "Net-Zero 2030"].map((c, i) => (
                <span key={`${k}-${i}`} className="font-heading text-2xl text-white/30 tracking-tight uppercase">
                  {c} <span className="text-[#E11D2E] mx-8">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-[#050A1F] py-24 lg:py-32">
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
                src="https://images.unsplash.com/photo-1706581324170-d847716c4512?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcnMlMjB3b3JraW5nJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHx8fDE3Nzc4MTQ0MDZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Engineers on site"
                className="w-full h-full object-cover"
                data-testid="about-teaser-image"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#E11D2E] text-[#0A1128] p-6 lg:p-8 max-w-[260px]">
              <div className="font-heading font-black text-5xl">26+</div>
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
            <h2 className="font-heading font-bold text-white text-4xl lg:text-6xl tracking-tight leading-[1.05]">
              We build assets that <span className="text-[#E11D2E]">stand the test of time.</span>
            </h2>
            <p className="mt-8 text-white/70 text-base lg:text-lg leading-relaxed">
              Founded in 1998, Shannon Engineering has delivered over 520 landmark projects across commercial,
              residential and civil infrastructure. Our integrated design–build model fuses structural rigor
              with sustainability, technology and craftsmanship.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label} className="border-l-2 border-[#E11D2E] pl-4">
                  <div className="font-heading font-black text-white text-3xl lg:text-4xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-[0.18em] mt-1">{s.label}</div>
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
      <section className="bg-[#0A1128] py-24 lg:py-32 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-overline mb-5">What We Do</p>
              <h2 className="font-heading font-bold text-white text-4xl lg:text-6xl tracking-tight leading-[1.05] max-w-2xl">
                Six disciplines.<br />One integrated practice.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#E11D2E] font-heading uppercase text-sm tracking-[0.2em] transition-all"
              data-testid="home-services-cta"
            >
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="service-card group bg-[#0A1128] p-10 border border-transparent cursor-default"
                  data-testid={`service-card-${i}`}
                >
                  <div className="flex items-start justify-between">
                    <Icon className="w-10 h-10 text-[#E11D2E]" strokeWidth={1.4} />
                    <span className="text-white/30 font-heading text-xs">0{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-white mt-8">{s.title}</h3>
                  <p className="text-white/60 mt-3 text-sm leading-relaxed">{s.short}</p>
                  <div className="service-detail">
                    <p className="text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4">{s.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-[#050A1F] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-overline mb-5">Selected Work</p>
              <h2 className="font-heading font-bold text-white text-4xl lg:text-6xl tracking-tight leading-[1.05]">
                Featured Projects.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#E11D2E] font-heading uppercase text-sm tracking-[0.2em]"
              data-testid="home-projects-cta"
            >
              All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={i % 3 === 0 ? "md:col-span-2" : ""}
              >
                <Link
                  to={`/projects/${p.slug}`}
                  className="project-card relative block overflow-hidden aspect-[16/10] group"
                  data-testid={`featured-project-${p.slug}`}
                >
                  <img src={p.image} alt={p.title} className="project-card-img w-full h-full object-cover" />
                  <div className="absolute inset-0 project-card-overlay" />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#E11D2E] font-heading font-semibold border border-[#E11D2E]/40 px-3 py-1 bg-black/30 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight">{p.title}</h3>
                        <p className="text-white/70 text-sm mt-1">{p.location} · {p.year}</p>
                      </div>
                      <div className="w-12 h-12 border border-[#E11D2E] flex items-center justify-center text-[#E11D2E] group-hover:bg-[#E11D2E] group-hover:text-[#0A1128] transition-all flex-shrink-0">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0A1128] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center"
        >
          <p className="text-overline mb-6">Let's Build</p>
          <h2 className="font-heading font-black text-white text-4xl lg:text-7xl tracking-[-0.03em] leading-[0.95]">
            Have a vision?
            <br />
            <span className="text-[#E11D2E]">We engineer it.</span>
          </h2>
          <p className="mt-8 text-white/70 max-w-xl mx-auto text-lg">
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
