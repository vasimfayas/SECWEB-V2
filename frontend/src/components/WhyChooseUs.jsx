import { motion } from "framer-motion";

const items = [
    {
        title: "Expertise & Experience",
        desc: "Decades of proven experience in the construction industry, delivering hands-on expertise in every project."
    },
    {
        title: "Quality & Precision",
        desc: "We maintain the highest standards of quality and precision in all engineering and construction work."
    },
    {
        title: "Timely Delivery",
        desc: "Projects are executed and delivered on schedule without compromising quality."
    },
    {
        title: "Client Satisfaction",
        desc: "We focus on trust, communication, and long-term partnerships with our clients."
    }
];

export default function WhyChoose() {
    return (
        <section className="relative bg-gradient-to-b from-white to-neutral-50 py-28 lg:py-36 overflow-hidden">

            {/* subtle background glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#E11D2E]/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">

                {/* LEFT */}
                <div className="lg:col-span-6">

                    {/* HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-overline mb-4">Why Choose Us</p>
                        <h2 className="font-heading text-4xl lg:text-6xl font-bold leading-tight">
                            Built on trust, driven by{" "}
                            <span className="text-[#E11D2E]">excellence</span>
                        </h2>
                        <p className="mt-6 text-neutral-600 max-w-xl">
                            We combine engineering expertise, precision execution, and a commitment to deliver world-class construction solutions.
                        </p>
                    </motion.div>

                    {/* TIMELINE */}
                    <div className="relative border-l border-neutral-200 pl-10 space-y-12">

                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.12 }}
                                className="relative"
                            >

                                {/* DOT */}
                                <span className="absolute -left-[48px] top-1 w-3.5 h-3.5 bg-[#E11D2E] rounded-full shadow-md ring-4 ring-white"></span>

                                {/* CARD */}
                                <div className="group">
                                    <h3 className="font-heading text-xl font-semibold text-neutral-900 group-hover:text-[#E11D2E] transition">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* underline animation */}
                                    <div className="w-0 group-hover:w-20 h-[2px] bg-[#E11D2E] mt-4 transition-all duration-500"></div>
                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* RIGHT VIDEO PANEL */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-6"
                >

                    <div className="relative h-full min-h-[650px] lg:min-h-[750px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">

                        {/* VIDEO */}
                        <iframe
                            className="absolute inset-0 w-full h-full scale-[1.05]"
                            src="https://www.youtube.com/embed/qpmrD94lSqk?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=qpmrD94lSqk"
                            title="Why Choose Us"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />

                        {/* DARK OVERLAY (cinematic look) */}
                        <div className="absolute inset-0 bg-black/35"></div>

                        {/* TEXT OVERLAY */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <p className="text-xs tracking-[0.3em] uppercase text-white/70">
                                Corporate Overview
                            </p>
                            <h3 className="font-heading text-2xl lg:text-3xl font-bold mt-2">
                                Engineering Excellence in Every Project
                            </h3>
                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}