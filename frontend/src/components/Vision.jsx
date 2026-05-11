import { motion } from "framer-motion";

const cards = [
    {
        num: "01",
        label: "Vision",
        title: "Market leader in Grade A contracting.",
        body: "To be recognized as a market leader in delivering successful, excellent and committed Grade A contracting services.",
        accent: false,
    },
    {
        num: "02",
        label: "Mission",
        title: "Highest standards. Long-term partnerships.",
        body: "Shannon Engineering Company is dedicated to deliver projects with the highest standards of quality, safety, and innovation. We build long-term partnerships with our clients through reliability, technical excellence, and a strong commitment to our people and community.",
        accent: true,
    },
];

export default function Vision() {
    return (
        <section className="py-24 lg:py-32 bg-[#F4F5F7]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-neutral-200 border border-neutral-200 overflow-hidden rounded-sm">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`relative p-10 lg:p-14 overflow-hidden ${card.accent ? "bg-[#E11D2E]" : "bg-white"
                                }`}
                        >
                            {/* Large muted background number */}
                            <span
                                aria-hidden="true"
                                className={`absolute top-6 right-6 font-heading text-[88px] lg:text-[104px] font-black leading-none select-none pointer-events-none ${card.accent
                                    ? "text-white/10"
                                    : "text-neutral-100"
                                    }`}
                            >
                                {card.num}
                            </span>

                            {/* Overline label */}
                            <p
                                className={`text-xs tracking-[0.25em] uppercase font-medium ${card.accent ? "text-white/60" : "text-neutral-400"
                                    }`}
                            >
                                {card.label}
                            </p>

                            {/* Title */}
                            <h3
                                className={`font-heading mt-5 text-2xl lg:text-3xl font-bold tracking-tight leading-[1.15] ${card.accent ? "text-white" : "text-neutral-900"
                                    }`}
                            >
                                {card.title}
                            </h3>

                            {/* Divider line */}
                            <div
                                className={`mt-6 h-[1px] w-10 ${card.accent ? "bg-white/30" : "bg-neutral-200"
                                    }`}
                            />

                            {/* Body */}
                            <p
                                className={`mt-6 text-[15px] lg:text-base leading-relaxed ${card.accent ? "text-white/80" : "text-neutral-600"
                                    }`}
                            >
                                {card.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}