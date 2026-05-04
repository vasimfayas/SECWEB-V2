import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Mocked submission for now (frontend-only as requested)
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Inquiry received. Our team will respond within 24 hours.", {
      description: `Thanks ${form.name || "—"}, we've logged your project brief.`
    });
    setForm({ name: "", email: "", company: "", phone: "", message: "" });
    setSending(false);
  };

  return (
    <div data-testid="contact-page" className="bg-[#050A1F]">
      {/* Header */}
      <section className="pt-40 pb-16 blueprint-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-5"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black text-white text-5xl lg:text-8xl tracking-[-0.03em] leading-[0.95] max-w-4xl"
          >
            Let's <span className="text-[#E11D2E]">build</span><br />
            something that lasts.
          </motion.h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 space-y-2"
            data-testid="contact-form"
          >
            <p className="text-overline mb-2">Project Brief</p>
            <h2 className="font-heading text-white text-3xl lg:text-4xl tracking-tight mb-10">
              Tell us about your vision.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                { name: "name", label: "Full Name *", type: "text", required: true },
                { name: "email", label: "Email Address *", type: "email", required: true },
                { name: "company", label: "Company / Organization", type: "text" },
                { name: "phone", label: "Phone", type: "tel" }
              ].map((f) => (
                <div key={f.name} className="relative">
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleChange}
                    required={f.required}
                    placeholder=" "
                    className="floating-input"
                    data-testid={`contact-input-${f.name}`}
                  />
                  <label className="floating-label">{f.label}</label>
                </div>
              ))}
            </div>

            <div className="relative pt-2">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder=" "
                rows={5}
                className="floating-input resize-none"
                data-testid="contact-input-message"
              />
              <label className="floating-label">Project Brief / Message *</label>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-gold inline-flex items-center gap-2 mt-8 px-8 py-4 text-xs uppercase tracking-[0.2em] disabled:opacity-60"
              data-testid="contact-submit"
            >
              {sending ? "Sending..." : "Send Inquiry"} <Send className="w-4 h-4" />
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-overline mb-2">Reach Us</p>
            <h2 className="font-heading text-white text-3xl lg:text-4xl tracking-tight mb-10">
              London · Singapore · Dubai
            </h2>

            <ul className="space-y-7">
              {[
                { icon: MapPin, label: "Headquarters", value: "Level 24, One Maritime Square\nLondon EC3N 4AB, United Kingdom" },
                { icon: Mail, label: "Email", value: "hello@shannoneng.com", href: "mailto:hello@shannoneng.com" },
                { icon: Phone, label: "Phone", value: "+44 20 7123 4567", href: "tel:+442071234567" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/shannon-engineering", href: "#" }
              ].map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 border border-white/15 flex items-center justify-center text-[#E11D2E] flex-shrink-0 group-hover:border-[#E11D2E] group-hover:bg-[#E11D2E] group-hover:text-[#0A1128] transition-all duration-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-overline mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-[#E11D2E] transition-colors whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white whitespace-pre-line leading-snug">{item.value}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 p-6 border border-white/10 bg-[#0A1128]">
              <p className="text-overline mb-3">Office Hours</p>
              <p className="text-white/75 text-sm">Mon — Fri · 09:00 to 18:30 (GMT)</p>
              <p className="text-white/55 text-xs mt-1">24/7 emergency line for active projects</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-[16/7] overflow-hidden border border-white/10" data-testid="map-embed">
            <iframe
              title="Shannon Engineering Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0824499716387!2d-0.07849268422956687!3d51.51137951799637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035c91a9b51b%3A0x46b9d5fc5d72c7a5!2sCity%20of%20London%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
