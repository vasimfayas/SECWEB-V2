import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
  User,
  ArrowUpRight
} from "lucide-react";

export default function ProjectDetail() {
  const { id, slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [active, setActive] = useState(0);
  const [allProjects, setAllProjects] = useState([]);

  // FETCH PROJECT
  useEffect(() => {
    const loadProject = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/project/${id}`
        );

        if (!res.ok) throw new Error();

        const data = await res.json();
        setProject(data);
      } catch (err) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  // FETCH ALL PROJECTS
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setAllProjects(data))
      .catch(() => { });
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;

  if (notFound || !project) {
    return <Navigate to="/projects" replace />;
  }

  // slug validation
  if (project.slug !== slug) {
    return (
      <Navigate to={`/projects/${project.id}/${project.slug}`} replace />
    );
  }

  // ✅ FIX: convert id type safety
  const currentIdx = allProjects.findIndex(
    (p) => Number(p.id) === Number(project.id)
  );

  const safeIdx = currentIdx === -1 ? 0 : currentIdx;

  const prev =
    allProjects.length > 0
      ? allProjects[
      (safeIdx - 1 + allProjects.length) % allProjects.length
      ]
      : null;

  const next =
    allProjects.length > 0
      ? allProjects[(safeIdx + 1) % allProjects.length]
      : null;

  const gallery =
    project.images?.length > 0
      ? project.images.map((img) => img.image_path)
      : [project.card_img];
  console.log(gallery);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.img
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={`${import.meta.env.VITE_API_URL}/storage/${gallery[active]}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-scrim"></div>

        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#E11D2E] mb-8 text-xs uppercase tracking-[0.2em] font-heading"
              data-testid="back-to-projects"
            >
              <ArrowLeft className="w-4 h-4" /> All Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-white font-heading font-semibold border border-white/40 px-3 py-1 bg-black/30 backdrop-blur-sm">
                {project.category?.category}
              </span>
              <h1 className="font-heading font-black text-white text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.92] mt-6 max-w-4xl">
                {project.title}
              </h1>
              <p className="text-white/85 text-lg lg:text-2xl font-heading mt-4 tracking-tight">{project.summary}</p>
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
                className={`w-16 h-16 lg:w-20 lg:h-20 overflow-hidden border-2 transition-all ${active === i ? "border-[#E11D2E]" : "border-white/30 opacity-60 hover:opacity-100"
                  }`}
                data-testid={`gallery-thumb-${i}`}
              >
                <img src={`${import.meta.env.VITE_API_URL}/storage/${g}`} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Info Strip */}
      <section className="border-y border-neutral-200 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200">
          {[
            { icon: MapPin, label: "Location", value: project.location },
            { icon: Calendar, label: "Completed Year", value: project.completed_year },
            { icon: Briefcase, label: "Consultant", value: '' },
            { icon: User, label: "Client", value: '' }
          ].map((item) => (
            <div key={item.label} className="p-6 lg:p-10" data-testid={`info-${item.label.toLowerCase()}`}>
              <item.icon className="w-5 h-5 text-[#E11D2E] mb-4" />
              <p className="text-overline mb-2">{item.label}</p>
              <p className="text-neutral-900 text-sm lg:text-base font-medium leading-snug">{item.value}</p>
              {/* CLIENT IMAGE */}

              {item.label === "Client" && project.client?.img && (

                <img

                  src={`${import.meta.env.VITE_API_URL}/storage/${project.client.img}`}

                  alt={project.client.name}

                  className="mt-4 h-12 object-contain"

                />

              )}
              {/* CLIENT IMAGE */}

              {item.label === "Consultant" && project.consultant?.img && (

                <img

                  src={`${import.meta.env.VITE_API_URL}/storage/${project.consultant.img}`}

                  alt={project.consultant.name}

                  className="mt-4 h-12 object-contain"

                />

              )}
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-overline mb-5">Project Brief</p>
            <h2 className="font-heading text-neutral-900 text-3xl lg:text-5xl tracking-tight leading-[1.1] mb-10">
              Engineering a landmark of permanence.
            </h2>
            <p className="text-neutral-700 text-lg leading-relaxed">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      {/* Stats */}
      <section className="py-24 lg:py-32 bg-[#F4F5F7] blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-overline mb-5 text-center">By The Numbers</p>
          <h2 className="font-heading text-neutral-900 text-3xl lg:text-5xl tracking-tight text-center mb-16">
            Project metrics.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

            {/* 1. Project Code */}
            <div className="text-center md:text-left border-l-0 md:border-l-2 md:border-[#E11D2E] md:pl-6">
              <div className="font-heading font-black text-neutral-900 text-3xl lg:text-5xl tracking-tight">
                {project.project_code || "N/A"}
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-[0.18em] mt-2">
                Project Code
              </div>
            </div>

            {/* 2. Size */}
            <div className="text-center md:text-left border-l-0 md:border-l-2 md:border-[#E11D2E] md:pl-6">
              <div className="font-heading font-black text-neutral-900 text-3xl lg:text-5xl tracking-tight">
                {project.size || "N/A"}
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-[0.18em] mt-2">
                Size
              </div>
            </div>

            {/* 3. Dummy */}
            <div className="text-center md:text-left border-l-0 md:border-l-2 md:border-[#E11D2E] md:pl-6">
              <div className="font-heading font-black text-neutral-900 text-3xl lg:text-5xl tracking-tight">
                {project.duration || 0} Days
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-[0.18em] mt-2">
                Duration
              </div>
            </div>

            {/* 4. Dummy */}
            <div className="text-center md:text-left border-l-0 md:border-l-2 md:border-[#E11D2E] md:pl-6">
              <div className="font-heading font-black text-neutral-900 text-3xl lg:text-5xl tracking-tight">
                100%
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-[0.18em] mt-2">
                Completion
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">

          {/* PREV */}
          {prev ? (
            <Link
              to={`/projects/${prev.id}/${prev.slug}`}
              className="group p-10 lg:p-16 border-r-0 md:border-r border-b md:border-b-0 border-neutral-200 hover:bg-neutral-50 transition-colors"
              data-testid="prev-project"
            >
              <p className="text-overline mb-3 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" /> Previous
              </p>
              <p className="font-heading text-neutral-900 text-2xl lg:text-3xl group-hover:text-[#E11D2E] transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div className="p-10 lg:p-16 border-r border-neutral-200 opacity-50">
              No Previous Project
            </div>
          )}

          {/* NEXT */}
          {next ? (
            <Link
              to={`/projects/${next.id}/${next.slug}`}
              className="group p-10 lg:p-16 text-right hover:bg-neutral-50 transition-colors"
              data-testid="next-project"
            >
              <p className="text-overline mb-3 flex items-center gap-2 justify-end">
                Next <ArrowRight className="w-3 h-3" />
              </p>
              <p className="font-heading text-neutral-900 text-2xl lg:text-3xl group-hover:text-[#E11D2E] transition-colors">
                {next.title}
              </p>
            </Link>
          ) : (
            <div className="p-10 lg:p-16 text-right opacity-50">
              No Next Project
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-neutral-900 text-3xl lg:text-5xl tracking-tight leading-[1.1]">
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