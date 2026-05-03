import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { milestones, stats } from "@/data/projects";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const values = [
  { icon: Target, title: "Precision", text: "Sub-millimeter tolerances. Zero compromise on structural integrity." },
  { icon: Eye, title: "Transparency", text: "Real-time digital twin reporting and open-book commercial models." },
  { icon: Heart, title: "Sustainability", text: "Whole-life carbon modeled into every decision, from sourcing to handover." },
  { icon: Award, title: "Craftsmanship", text: "Every weld, every pour, every detail — engineered and inspected." }
];

export default function About() {
  return (
    <div data-testid="about-page" className="bg-[#050A1F]">
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
            className="font-heading font-black text-white text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.95] max-w-5xl"
          >
            Engineering integrity.<br />
            <span className="text-[#D4AF37]">Built to endure.</span>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="text-overline mb-5">Our Story</p>
            <h2 className="font-heading text-white text-3xl lg:text-5xl tracking-tight leading-[1.1] mb-8">
              From a small civil practice in Dublin to a global design–build firm.
            </h2>
            <div className="space-y-6 text-white/70 text-base lg:text-lg leading-relaxed">
              <p>
                Shannon Engineering was founded in 1998 by a small group of structural engineers who believed
                that great buildings begin with great engineering — not the other way around. From a single
                office in Dublin, we grew steadily through reputation: bridges that lasted, towers that stood
                straight, schedules that finished on time.
              </p>
              <p>
                Today we operate across 22 countries with a team of over 4,800 engineers, project managers,
                BIM coordinators, and craftsmen. Our integrated practice combines structural, civil, MEP and
                sustainability engineering under one roof, allowing us to deliver complex assets with the
                speed and certainty our clients demand.
              </p>
              <p>
                Every project is led by a senior engineer-partner. Every program is digitally twinned. And
                every asset is benchmarked against operational performance years after handover — because we
                believe the real measure of engineering is what happens after the ribbon is cut.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1694521787162-5373b598945c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcnMlMjB3b3JraW5nJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHx8fDE3Nzc4MTQ0MDZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Shannon engineers on site"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 lg:py-32 bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            { label: "Mission", title: "Engineer assets that outperform their lifetime.", body: "We design and build infrastructure that performs — economically, environmentally, and structurally — beyond its design life." },
            { label: "Vision", title: "Be the most trusted design–build partner globally.", body: "By 2030, we will deliver every project net-zero in operational carbon, with zero safety incidents and zero rework." }
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-[#151C2F] p-10 lg:p-14 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1"
              data-testid={`mission-vision-card-${i}`}
            >
              <p className="text-overline mb-6">{card.label}</p>
              <h3 className="font-heading text-white text-3xl lg:text-4xl tracking-tight leading-[1.1]">{card.title}</h3>
              <p className="mt-6 text-white/70 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-overline mb-5">Milestones</p>
            <h2 className="font-heading text-white text-4xl lg:text-6xl tracking-tight leading-[1.05]">
              Twenty-six years of <span className="text-[#D4AF37]">building.</span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="timeline-line" />
            <div className="space-y-16">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`milestone-${m.year}`}
                >
                  <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-[#D4AF37] rounded-full ring-4 ring-[#050A1F]"></div>
                  <div className="md:w-1/2 md:px-12">
                    <div className="font-heading font-black text-[#D4AF37] text-5xl lg:text-7xl tracking-tight">{m.year}</div>
                    <h3 className="font-heading text-white text-2xl mt-3">{m.title}</h3>
                    <p className="text-white/65 mt-3 leading-relaxed">{m.description}</p>
                  </div>
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[#0A1128] blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-overline mb-5">Our Values</p>
          <h2 className="font-heading text-white text-4xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl">
            Four principles that guide every project.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="bg-[#0A1128] p-10 group hover:bg-[#151C2F] transition-colors duration-500"
                data-testid={`value-card-${i}`}
              >
                <v.icon className="w-9 h-9 text-[#D4AF37] mb-6" strokeWidth={1.4} />
                <h3 className="font-heading text-white text-xl">{v.title}</h3>
                <p className="text-white/65 mt-3 text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-heading font-black text-white text-4xl lg:text-6xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-white/55 uppercase tracking-[0.18em] mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
