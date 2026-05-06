import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { sisterCompanies, groupStats } from "@/data/group";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function SECGroup() {
  return (
    <div data-testid="sec-group-page" className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-5"
          >
            SEC Group · Sister Companies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black text-neutral-900 text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.95] max-w-5xl"
          >
            An ecosystem of <br />
            <span className="text-[#E11D2E]">engineering excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-neutral-600 max-w-2xl text-lg leading-relaxed"
          >
            Five specialized companies under one accountable group — each a category leader, together a
            full-spectrum partner from feasibility to operations.
          </motion.p>
        </div>
      </section>

      {/* Group stats */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200">
          {groupStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-8 lg:p-10"
            >
              <div className="font-heading font-black text-neutral-900 text-4xl lg:text-5xl">
                <span className="text-[#E11D2E]">$</span>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-[0.18em] mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Companies — alternating full-width pillars */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20 lg:space-y-32">
          {sisterCompanies.map((c, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
                data-testid={`sister-company-${c.n}`}
              >
                {/* Image side */}
                <div className="lg:col-span-7 relative">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128]/40 to-transparent"></div>
                    {/* Floating monogram mark */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-sm border-l-2 border-[#E11D2E]">
                      <div className="font-heading font-black text-neutral-900 text-base tracking-tight">{c.monogram}</div>
                    </div>
                    <div className="absolute bottom-6 right-6 font-heading font-black text-white text-7xl lg:text-9xl leading-none opacity-30">
                      {c.n}
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-5">
                  <p className="text-overline mb-4">
                    {c.n} · {c.sector}
                  </p>
                  <h3 className="font-heading font-bold text-neutral-900 text-3xl lg:text-5xl tracking-tight leading-[1.05]">
                    {c.name}
                  </h3>
                  <p className="mt-6 text-neutral-600 text-base lg:text-lg leading-relaxed">{c.description}</p>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {c.stats.map((s) => (
                      <div key={s.l} className="border-l-2 border-[#E11D2E] pl-3">
                        <div className="font-heading font-black text-neutral-900 text-xl lg:text-2xl">{s.v}</div>
                        <div className="text-[10px] text-neutral-500 uppercase tracking-[0.18em] mt-1 leading-tight">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-10 text-[#E11D2E] font-heading uppercase text-xs tracking-[0.2em] hover:gap-4 transition-all"
                    data-testid={`sister-link-${c.n}`}
                  >
                    Visit {c.monogram} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#F4F5F7] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-70"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center"
        >
          <p className="text-overline mb-6">One Group · Five Specialisms</p>
          <h2 className="font-heading font-black text-neutral-900 text-4xl lg:text-6xl tracking-[-0.03em] leading-[0.95]">
            Need more than one discipline? <br />
            <span className="text-[#E11D2E]">We orchestrate the group.</span>
          </h2>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2 mt-10 px-10 py-5 text-sm uppercase tracking-[0.2em]"
            data-testid="sec-group-cta"
          >
            Talk to SEC Group <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
