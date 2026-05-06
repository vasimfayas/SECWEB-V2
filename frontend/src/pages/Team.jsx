import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { leadership, disciplineHeads, teamStats } from "@/data/group";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function Team() {
  return (
    <div data-testid="team-page" className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-overline mb-5"
            >
              Meet Our Team
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-black text-neutral-900 text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.95]"
            >
              The minds behind <br />
              every <span className="text-[#E11D2E]">milestone.</span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 text-neutral-600 text-base leading-relaxed"
          >
            <div className="border-l-2 border-[#E11D2E] pl-5">
              4,800+ engineers, project managers and craftsmen — partnering across 22 countries to engineer
              assets the world remembers.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200">
          {teamStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-8 lg:p-10"
            >
              <div className="font-heading font-black text-neutral-900 text-4xl lg:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-[0.18em] mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership — magazine-style spread */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-overline mb-5">Group Leadership</p>
              <h2 className="font-heading text-neutral-900 text-4xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl">
                Four partners. <br />One shared standard.
              </h2>
            </div>
            <span className="text-xs text-neutral-400 uppercase tracking-[0.25em] font-heading">01 — 04 / Leadership</span>
          </div>

          {/* Asymmetric magazine grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Featured first leader */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7 md:row-span-2 group"
              data-testid="leader-card-0"
            >
              <LeaderCard leader={leadership[0]} large />
            </motion.div>

            {leadership.slice(1).map((l, i) => (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                className={i === 0 ? "md:col-span-5" : "md:col-span-5 md:col-start-8"}
                data-testid={`leader-card-${i + 1}`}
              >
                <LeaderCard leader={l} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discipline Heads */}
      <section className="py-24 lg:py-32 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-overline mb-5">Discipline Heads</p>
              <h2 className="font-heading text-neutral-900 text-4xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl">
                The engineers behind <span className="text-[#E11D2E]">every line.</span>
              </h2>
            </div>
            <span className="text-xs text-neutral-400 uppercase tracking-[0.25em] font-heading">{disciplineHeads.length} Directors</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {disciplineHeads.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="bg-white group cursor-default"
                data-testid={`discipline-head-${i}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/30 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex flex-wrap gap-1.5">
                      {p.expertise.map((e) => (
                        <span key={e} className="text-[9px] uppercase tracking-[0.2em] border border-white/40 px-2 py-0.5 bg-white/10 backdrop-blur-sm">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-neutral-900 text-lg leading-tight">{p.name}</h3>
                  <p className="text-neutral-500 text-xs uppercase tracking-[0.15em] mt-1">{p.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-overline mb-5">Build With Us</p>
            <h2 className="font-heading text-neutral-900 text-4xl lg:text-6xl tracking-tight leading-[1.05]">
              Want to be on this page next year?
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-neutral-600 mb-8 lg:max-w-md lg:ml-auto leading-relaxed">
              We hire engineers who think like owners. Open roles across 22 countries — from graduate
              structural engineers to senior commercial directors.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.2em]"
              data-testid="team-cta-careers"
            >
              View Open Roles <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const LeaderCard = ({ leader, large = false }) => (
  <div className="relative h-full bg-white border border-neutral-200 group/card overflow-hidden">
    <div className={`relative overflow-hidden ${large ? "aspect-[4/3] lg:aspect-[5/4]" : "aspect-[4/5]"}`}>
      <img
        src={leader.image}
        alt={leader.name}
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-[1.04] transition-all duration-[900ms]"
      />
      <div className="absolute top-4 left-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white font-heading font-semibold border border-white/40 px-3 py-1 bg-black/40 backdrop-blur-sm">
          {leader.tag}
        </span>
      </div>
      <a
        href="#"
        className="absolute top-4 right-4 w-9 h-9 border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-[#E11D2E] hover:border-[#E11D2E]"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
    </div>
    <div className="p-6 lg:p-8">
      <h3 className={`font-heading font-bold text-neutral-900 leading-tight ${large ? "text-3xl lg:text-4xl" : "text-2xl"}`}>
        {leader.name}
      </h3>
      <p className="text-[#E11D2E] text-xs uppercase tracking-[0.2em] mt-2 font-semibold">{leader.role}</p>
      <p className="text-neutral-600 mt-4 text-sm leading-relaxed">{leader.bio}</p>
    </div>
  </div>
);
