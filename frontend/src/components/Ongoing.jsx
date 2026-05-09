import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Building2, Home as HomeIcon, Construction, HardHat, Ruler, Leaf, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function Ongoing() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/api/products`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
            });

    }, []);
    const featured = projects.slice(0, 4);
    return (

        < section className="bg-white py-24 lg:py-32" >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
                    <div>
                        <p className="text-overline mb-5">Selected Work</p>
                        <h2 className="font-heading font-bold text-neutral-900 text-4xl lg:text-6xl tracking-tight leading-[1.05]">
                            Ongoing Projects.
                        </h2>
                    </div>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#E11D2E] font-heading uppercase text-sm tracking-[0.2em]"
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
                                to={`/projects/`}
                                className="project-card relative block overflow-hidden aspect-[16/10] group"
                                data-testid={`featured-project`}
                            >
                                <img
                                    src={`${import.meta.env.VITE_API_URL}/storage/${p.card_img}`}
                                    alt={p.title}
                                    className="project-card-img w-full h-full object-cover"
                                />         < div className="absolute inset-0 project-card-overlay" />
                                <div className="absolute top-6 left-6">
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-white font-heading font-semibold border border-white/40 px-3 py-1 bg-black/30 backdrop-blur-sm">
                                        {p.category?.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                                    <div className="flex items-end justify-between gap-4">
                                        <div>
                                            <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight">{p.title}</h3>
                                            <p className="text-white/80 text-sm mt-1">{p.location} · {p.year}</p>
                                        </div>
                                        <div className="w-12 h-12 border border-[#E11D2E] flex items-center justify-center text-[#E11D2E] bg-white/10 backdrop-blur-sm group-hover:bg-[#E11D2E] group-hover:text-white transition-all flex-shrink-0">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}