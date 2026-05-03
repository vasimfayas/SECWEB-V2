import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const FILTERS = ["All", "Commercial", "Residential", "Infrastructure"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div data-testid="projects-page" className="bg-[#050A1F]">
      {/* Header */}
      <section className="pt-40 pb-16 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-5"
          >
            Portfolio · 520+ Delivered
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black text-white text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.95] max-w-5xl"
          >
            Selected <span className="text-[#D4AF37]">Projects.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-white/70 max-w-2xl text-lg"
          >
            A curated selection across commercial, residential and infrastructure. Filter by category to
            explore.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 sticky top-[68px] z-40 glass-nav border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-heading font-semibold transition-all border ${
                filter === f
                  ? "bg-[#D4AF37] text-[#0A1128] border-[#D4AF37]"
                  : "bg-transparent text-white/70 border-white/15 hover:border-[#D4AF37] hover:text-white"
              }`}
              data-testid={`filter-${f.toLowerCase()}`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-xs text-white/45 font-heading uppercase tracking-[0.2em] self-center">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <Link
                    to={`/projects/${p.slug}`}
                    className="project-card relative block overflow-hidden aspect-[4/5] group"
                    data-testid={`project-card-${p.slug}`}
                  >
                    <img src={p.image} alt={p.title} className="project-card-img w-full h-full object-cover" />
                    <div className="absolute inset-0 project-card-overlay" />
                    <div className="absolute top-5 left-5">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-heading font-semibold border border-[#D4AF37]/40 px-3 py-1 bg-black/30 backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-end justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-heading text-xl lg:text-2xl font-bold tracking-tight">{p.title}</h3>
                          <p className="text-white/70 text-xs mt-1 uppercase tracking-[0.15em]">{p.location} · {p.year}</p>
                        </div>
                        <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A1128] transition-all flex-shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
