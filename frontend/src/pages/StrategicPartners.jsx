import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { consultants, clients, partnerStats } from "@/data/group";
import { LogoMark } from "@/components/LogoMark";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function StrategicPartners() {
  return (
    <div data-testid="strategic-partners-page" className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-5"
          >
            Strategic Partners
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black text-neutral-900 text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.95] max-w-5xl"
          >
            We don't <br />
            build <span className="text-[#E11D2E]">alone.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-neutral-600 max-w-2xl text-lg leading-relaxed"
          >
            Trusted consultants who shape our designs. Visionary clients who commission them.
            Together — we engineer landmarks that endure.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200">
          {partnerStats.map((s, i) => (
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

      {/* Consultants */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 lg:mb-16">
            <div>
              <p className="text-overline mb-4">Section 01 · Consultants</p>
              <h2 className="font-heading text-neutral-900 text-3xl lg:text-5xl tracking-tight leading-[1.05] max-w-3xl">
                The specialists we <br />stand alongside.
              </h2>
            </div>
            <span className="text-xs text-neutral-400 uppercase tracking-[0.25em] font-heading">{consultants.length} firms</span>
          </div>

          <PartnerGrid items={consultants} idPrefix="consultant" />
        </div>
      </section>

      {/* Marquee strip — divider */}
      <section className="bg-[#0A1128] py-6 overflow-hidden border-y border-neutral-900">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-12 items-center flex-shrink-0">
              {[...consultants, ...clients].slice(0, 24).map((p, i) => (
                <span key={`${k}-${i}`} className="text-white/35 font-heading text-lg uppercase tracking-[0.25em]">
                  {p.name}
                  <span className="mx-6 text-[#E11D2E]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 lg:py-32 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 lg:mb-16">
            <div>
              <p className="text-overline mb-4">Section 02 · Clients</p>
              <h2 className="font-heading text-neutral-900 text-3xl lg:text-5xl tracking-tight leading-[1.05] max-w-3xl">
                The visionaries who <br />commission the work.
              </h2>
            </div>
            <span className="text-xs text-neutral-400 uppercase tracking-[0.25em] font-heading">{clients.length} clients</span>
          </div>

          <PartnerGrid items={clients} idPrefix="client" surface="bg-white" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-overline mb-6">Build With Us</p>
          <h2 className="font-heading font-black text-neutral-900 text-4xl lg:text-6xl tracking-[-0.03em] leading-[0.95]">
            Become our next <span className="text-[#E11D2E]">partner.</span>
          </h2>
          <p className="mt-6 text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Whether you're a consultant joining our supplier network or a client commissioning your next
            landmark — let's open a conversation.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2 mt-10 px-10 py-5 text-sm uppercase tracking-[0.2em]"
            data-testid="partners-cta"
          >
            Start a Partnership <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const PartnerGrid = ({ items, idPrefix, surface = "bg-white" }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-neutral-200 border border-neutral-200">
    {items.map((p, i) => (
      <motion.div
        key={p.name}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.45, delay: i * 0.025 }}
        className={`${surface} aspect-[5/3] flex items-center justify-center text-neutral-400 hover:text-[#E11D2E] hover:bg-white transition-all duration-500 group cursor-default`}
        data-testid={`${idPrefix}-${i}`}
      >
        <div className="transform transition-transform duration-500 group-hover:scale-110">
          <LogoMark name={p.name} style={p.style} />
        </div>
      </motion.div>
    ))}
  </div>
);
