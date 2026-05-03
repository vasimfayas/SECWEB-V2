import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Briefcase, User, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [active, setActive] = useState(0);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(currentIdx - 1 + projects.length) % projects.length];
  const next = projects[(currentIdx + 1) % projects.length];

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div data-testid="project-detail-page" className="bg-[#050A1F]">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <motion.img
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={gallery[active]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="project-hero-image"
        />
        <div className="absolute inset-0 hero-scrim"></div>

        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#D4AF37] mb-8 text-xs uppercase tracking-[0.2em] font-heading"
              data-testid="back-to-projects"
            >
              <ArrowLeft className="w-4 h-4" /> All Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-heading font-semibold border border-[#D4AF37]/40 px-3 py-1 bg-black/30 backdrop-blur-sm">
                {project.category}
              </span>
              <h1 className="font-heading font-black text-white text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.92] mt-6 max-w-4xl">
                {project.title}
              </h1>
              <p className="text-white/80 text-lg lg:text-2xl font-heading mt-4 tracking-tight">{project.summary}</p>
            </motion.div>
          </div>
        </div>

        {/* Carousel thumbs */}
        {gallery.length > 1 && (
          <div className="absolute bottom-6 right-6 lg:right-8 flex gap-3 z-10">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-16 h-16 lg:w-20 lg:h-20 overflow-hidden border-2 transition-all ${
                  active === i ? "border-[#D4AF37]" : "border-white/20 opacity-60 hover:opacity-100"
                }`}
                data-testid={`gallery-thumb-${i}`}
              >
                <img src={g} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Info Strip */}
      <section className="border-y border-white/5 bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {[
            { icon: MapPin, label: "Location", value: project.location },
            { icon: Calendar, label: "Year", value: project.year },
            { icon: Briefcase, label: "Scope", value: project.scope },
            { icon: User, label: "Client", value: project.client }
          ].map((item, i) => (
            <div key={item.label} className="p-6 lg:p-10" data-testid={`info-${item.label.toLowerCase()}`}>
              <item.icon className="w-5 h-5 text-[#D4AF37] mb-4" />
              <p className="text-overline mb-2">{item.label}</p>
              <p className="text-white text-sm lg:text-base font-medium leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-overline mb-5">Project Brief</p>
            <h2 className="font-heading text-white text-3xl lg:text-5xl tracking-tight leading-[1.1] mb-10">
              Engineering a landmark of permanence.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32 bg-[#0A1128] blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-overline mb-5 text-center">By The Numbers</p>
          <h2 className="font-heading text-white text-3xl lg:text-5xl tracking-tight text-center mb-16">
            Project metrics.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {project.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-center md:text-left border-l-0 md:border-l-2 md:border-[#D4AF37] md:pl-6"
                data-testid={`project-stat-${i}`}
              >
                <div className="font-heading font-black text-white text-4xl lg:text-6xl tracking-tight">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-white/55 uppercase tracking-[0.18em] mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
          <Link
            to={`/projects/${prev.slug}`}
            className="group p-10 lg:p-16 border-r-0 md:border-r border-b md:border-b-0 border-white/5 hover:bg-[#0A1128] transition-colors"
            data-testid="prev-project"
          >
            <p className="text-overline mb-3 flex items-center gap-2"><ArrowLeft className="w-3 h-3" /> Previous</p>
            <p className="font-heading text-white text-2xl lg:text-3xl group-hover:text-[#D4AF37] transition-colors">{prev.title}</p>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="group p-10 lg:p-16 text-right hover:bg-[#0A1128] transition-colors"
            data-testid="next-project"
          >
            <p className="text-overline mb-3 flex items-center gap-2 justify-end">Next <ArrowRight className="w-3 h-3" /></p>
            <p className="font-heading text-white text-2xl lg:text-3xl group-hover:text-[#D4AF37] transition-colors">{next.title}</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050A1F] text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-white text-3xl lg:text-5xl tracking-tight leading-[1.1]">
            Plan a similar project?
          </h2>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2 mt-8 px-8 py-4 text-xs uppercase tracking-[0.2em]"
            data-testid="project-cta-contact"
          >
            Talk to our engineers <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
