import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { milestones, stats } from "@/data/projects";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import group from "@/assets/about/group.jpg";
import Vision from "@/components/Vision";

const values = [
  { icon: Target, title: "Excellence", text: "Delivering superior quality and embracing innovation in every project." },
  { icon: Eye, title: "Sustainability", text: "Building with respect for the environment and future generations." },
  { icon: Heart, title: "Responsibility", text: "Ensuring safety, integrity, and ethical practices at all times." },
  { icon: Award, title: "Partnership", text: "Creating long-term value through collaboration and client focus." }
];

export default function About() {
  return (
    <div data-testid="about-page" className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-5"
          >
            About · Since 1998
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black text-neutral-900 text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.95] max-w-5xl"
          >
            Engineering integrity.<br />
            <span className="text-[#E11D2E]">Built to endure.</span>
          </motion.h1>
        </div>
      </section>


      {/* Story */}
      <section className="py-24 lg:py-32 bg-[#F7F7F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 text-justify items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-5"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-[11px] uppercase tracking-[0.32em] text-[#E11D2E] font-semibold mb-6"
              >
                MESSAGE FROM OUR CEO
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 90 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="h-[2px] bg-[#E11D2E] mb-8"
              />

              <div className="space-y-6 text-neutral-600 text-[15px] lg:text-[17px] leading-[1.9]">
                {[
                  `I would like to start with the story of SEC which is told through our projects, our employees and our commitment to the community around us. We started as a small group of engineers who were inspired to succeed. Since those days, SEC has thrived due to what we have always believed in — our clients deserve the very best.`,

                  `Our success is due to an unwavering commitment to provide our clients with their own unique opportunities to succeed. We ensure that we exceed expectations by delivering tailored solutions, dependable execution and long-term value.`,

                  `We have worked hard on recruiting a professional team of engineers and technical personnel. Our team has surpassed all difficulties by staying resilient and understanding the market. We believe in strong values of honesty, integrity and work ethics.`,

                  `I would like to extend my sincerest appreciation for our clients’ trust and support of SEC over the years and hereby promise to devote all our resources and capabilities to further their success through maintaining our commitment to excellence.`
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-10 border-l-2 border-[#E11D2E] pl-5"
              >
                <h4 className="font-heading text-xl text-neutral-900 font-semibold">
                  Eng. HANY ABDEL FATTAH
                </h4>

                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mt-1">
                  Chief Executive Officer
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7"
            >
              <div className="relative">

                {/* Accent border */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="absolute -top-5 -left-5 w-full h-full border border-[#E11D2E]/20"
                />

                {/* Image wrapper */}
                <div className="relative overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.18)] bg-white">

                  <motion.img
                    src={group}
                    alt="SEC Team"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4 }}
                    className="w-full h-auto object-contain"
                  />

                  {/* soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>

                  {/* Floating card */}
                  {/* Floating card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-6 left-6 bg-white/92 backdrop-blur-md px-6 py-4 shadow-2xl border-l-2 border-[#E11D2E]"
                  >
                    <div className="flex items-center gap-5">

                      <div>
                        <h3 className="font-heading text-3xl lg:text-4xl font-black text-neutral-900 leading-none">
                          25+
                        </h3>

                        <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 mt-1">
                          Years
                        </p>
                      </div>

                      <div className="w-px h-12 bg-neutral-300"></div>

                      <div>
                        <p className="font-heading text-base lg:text-lg text-neutral-900 leading-snug max-w-[220px]">
                          Delivering trusted engineering and construction excellence.
                        </p>
                      </div>

                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision */}

      <Vision ></Vision>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[#F4F5F7] blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-overline mb-5">Our Values</p>
          <h2 className="font-heading text-neutral-900 text-4xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl">
            Built on trust, driven by excellence
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="bg-white p-10 group hover:bg-neutral-50 transition-colors duration-500"
                data-testid={`value-card-${i}`}
              >
                <v.icon className="w-9 h-9 text-[#E11D2E] mb-6" strokeWidth={1.4} />
                <h3 className="font-heading text-neutral-900 text-xl">{v.title}</h3>
                <p className="text-neutral-600 mt-3 text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-heading font-black text-neutral-900 text-4xl lg:text-6xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-[0.18em] mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
