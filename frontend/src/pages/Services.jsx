import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Home as HomeIcon, Construction, HardHat, Ruler, Leaf, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/projects";

const ICONS = { Building2, Home: HomeIcon, Construction, HardHat, Ruler, Leaf };

const checklist = [
  "Integrated design–build delivery",
  "BIM Level 3 collaboration",
  "Net-zero operational targets",
  "Senior partner-led teams"
];

export default function Services() {
  return (
    <div data-testid="services-page" className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-5"
          >
            Capabilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black text-neutral-900 text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.95] max-w-5xl"
          >
            Six disciplines.<br />
            <span className="text-[#E11D2E]">One integrated practice.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-neutral-600 max-w-2xl text-lg leading-relaxed"
          >
            From feasibility through to handover and post-occupancy performance. Every discipline is led
            in-house — no fragmented sub-consultants, no diluted accountability.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {services.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="service-card group bg-white p-10 lg:p-12 border border-transparent cursor-default min-h-[340px]"
                  data-testid={`services-card-${i}`}
                >
                  <div className="flex items-start justify-between">
                    <Icon className="w-12 h-12 text-[#E11D2E]" strokeWidth={1.3} />
                    <span className="text-neutral-300 font-heading text-xs">0{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl text-neutral-900 mt-10 tracking-tight">{s.title}</h3>
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

      {/* Process */}
      <section className="py-24 lg:py-32 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-overline mb-5">Our Process</p>
            <h2 className="font-heading text-neutral-900 text-4xl lg:text-6xl tracking-tight leading-[1.05]">
              From <span className="text-[#E11D2E]">brief</span> to <span className="text-[#E11D2E]">benchmark.</span>
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Five stages, one continuous accountability — from concept feasibility to post-occupancy
              performance verification.
            </p>
            <ul className="mt-8 space-y-3">
              {checklist.map((c) => (
                <li key={c} className="flex items-center gap-3 text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-[#E11D2E]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 mt-10 px-7 py-4 text-xs uppercase tracking-[0.2em]"
              data-testid="services-cta-discuss"
            >
              Discuss Your Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 space-y-px bg-neutral-200">
            {[
              { n: "01", t: "Feasibility & Concept", d: "Site analysis, parametric massing, cost-benefit modeling." },
              { n: "02", t: "Detailed Design", d: "BIM Level 3, structural calcs, MEP coordination, sustainability targets." },
              { n: "03", t: "Procurement & Logistics", d: "Long-lead procurement, prefab strategy, modular planning." },
              { n: "04", t: "Construction & QA", d: "On-site execution with real-time digital twin and weekly EVM reporting." },
              { n: "05", t: "Handover & Performance", d: "Commissioning, training, and 12-month operational performance verification." }
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="bg-white p-8 flex items-start gap-6 hover:bg-neutral-50 transition-colors"
                data-testid={`process-step-${step.n}`}
              >
                <div className="font-heading font-black text-[#E11D2E] text-3xl lg:text-4xl flex-shrink-0">{step.n}</div>
                <div>
                  <h4 className="font-heading text-neutral-900 text-xl">{step.t}</h4>
                  <p className="text-neutral-600 mt-2 text-sm leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
