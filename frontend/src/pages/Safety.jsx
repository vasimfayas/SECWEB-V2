import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, HeartPulse, Leaf, ArrowUpRight, CheckCircle2, Download } from "lucide-react";
import { shePillars, sheStats, sheCommitments, sheCertifications } from "@/data/group";
import { LogoMark } from "@/components/LogoMark";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const PILLAR_ICONS = { Safety: ShieldCheck, Health: HeartPulse, Environment: Leaf };

export default function Safety() {
  return (
    <div data-testid="safety-page" className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-5"
          >
            Safety, Health & Environment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black text-neutral-900 text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.95] max-w-5xl"
          >
            Zero harm. <br />
            <span className="text-[#E11D2E]">Every day.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-neutral-600 max-w-2xl text-lg leading-relaxed"
          >
            Safety isn't a department — it's the foundation of every weld, every pour, every decision we
            make. From boardroom to hard-hat, our commitment is non-negotiable.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200">
          {sheStats.map((s, i) => (
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

      {/* Three Pillars — vertical-bar layout */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <h2 className="font-heading text-neutral-900 text-4xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl">
              Three pillars. <br />
              <span className="text-[#E11D2E]">One absolute standard.</span>
            </h2>
            <span className="text-xs text-neutral-400 uppercase tracking-[0.25em] font-heading">01 — 03 / Pillars</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {shePillars.map((p, i) => {
              const Icon = PILLAR_ICONS[p.title];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="bg-white p-10 lg:p-12 group hover:bg-neutral-50 transition-colors duration-500 relative"
                  data-testid={`pillar-${p.title.toLowerCase()}`}
                >
                  {/* Vertical accent bar */}
                  <div className="absolute left-0 top-10 bottom-10 w-px bg-[#E11D2E] opacity-30 group-hover:opacity-100 group-hover:w-1 transition-all duration-500"></div>

                  <div className="flex items-start justify-between mb-10">
                    <Icon className="w-12 h-12 text-[#E11D2E]" strokeWidth={1.3} />
                    <span className="text-neutral-300 font-heading text-xs">0{i + 1}</span>
                  </div>

                  <p className="text-overline mb-3">{p.overline}</p>
                  <h3 className="font-heading text-neutral-900 text-3xl lg:text-4xl tracking-tight leading-[1.05]">{p.title}</h3>
                  <p className="mt-5 text-neutral-600 leading-relaxed">{p.body}</p>

                  <ul className="mt-8 space-y-2.5 border-t border-neutral-200 pt-6">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-[#E11D2E] mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitments — vertical timeline */}
      <section className="py-24 lg:py-32 bg-[#F4F5F7] blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-overline mb-5">Roadmap to 2030</p>
            <h2 className="font-heading text-neutral-900 text-4xl lg:text-6xl tracking-tight leading-[1.05]">
              Our public <span className="text-[#E11D2E]">commitments.</span>
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Five binding milestones. Tracked publicly. Audited annually. We don't talk about safety
              and sustainability — we report on it.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-[#E11D2E] font-heading uppercase text-xs tracking-[0.2em] hover:gap-4 transition-all"
              data-testid="safety-statement-download"
            >
              <Download className="w-4 h-4" /> Download SHE Statement (PDF)
            </a>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-neutral-300"></div>
            <ul className="space-y-8">
              {sheCommitments.map((c, i) => (
                <motion.li
                  key={c.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white border-2 border-[#E11D2E] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#E11D2E]"></div>
                  </div>
                  <div className="font-heading font-black text-[#E11D2E] text-2xl tracking-tight">{c.year}</div>
                  <p className="text-neutral-800 text-base lg:text-lg mt-1 leading-relaxed">{c.text}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-overline mb-4">Independently Certified</p>
            <h3 className="font-heading text-neutral-900 text-2xl lg:text-3xl tracking-tight">
              Audited. Verified. Trusted.
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {sheCertifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white aspect-[5/3] flex items-center justify-center text-neutral-500 hover:text-[#E11D2E] transition-colors group"
                data-testid={`safety-cert-${i}`}
              >
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                  <LogoMark name={c.name} style={c.style} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A1128] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(rgba(225,29,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(225,29,46,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}></div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-white text-3xl lg:text-5xl tracking-tight leading-[1.05]">
            Talk to our <span className="text-[#E11D2E]">SHE Director.</span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            Have a question about our safety culture, certifications, or supplier requirements?
            Our SHE leadership team responds within 24 hours.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2 mt-10 px-10 py-5 text-sm uppercase tracking-[0.2em]"
            data-testid="safety-cta"
          >
            Reach Our SHE Team <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
