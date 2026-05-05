import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#F4F5F7] border-t border-neutral-200 pt-20 pb-8" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Shannon Engineering" className="h-14 w-14 object-contain" />
            <div className="leading-none">
              <div className="font-heading font-bold text-neutral-900 text-xl">SHANNON</div>
              <div className="text-[11px] tracking-[0.3em] text-[#E11D2E] font-semibold">ENGINEERING</div>
            </div>
          </div>
          <p className="text-neutral-600 max-w-md leading-relaxed">
            Engineering tomorrow's landmarks today. We design, build and deliver structurally precise,
            sustainable assets across commercial, residential and infrastructure sectors.
          </p>
          <div className="flex items-center gap-3 mt-8">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-neutral-300 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#E11D2E] hover:border-[#E11D2E] transition-all"
                aria-label="social link"
                data-testid={`footer-social-${i}`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-overline mb-6">Navigate</p>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" }
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-neutral-700 hover:text-[#E11D2E] transition-colors inline-flex items-center gap-1 font-body"
                  data-testid={`footer-link-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-overline mb-6">Contact</p>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#E11D2E] mt-1 flex-shrink-0" />
              <span>Level 24, One Maritime Square, London EC3N 4AB, United Kingdom</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#E11D2E] flex-shrink-0" />
              <a href="mailto:hello@shannoneng.com" className="hover:text-[#E11D2E] transition-colors">hello@shannoneng.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#E11D2E] flex-shrink-0" />
              <a href="tel:+442071234567" className="hover:text-[#E11D2E] transition-colors">+44 20 7123 4567</a>
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 text-[#E11D2E] font-heading uppercase text-xs tracking-[0.2em] hover:gap-3 transition-all"
            data-testid="footer-cta-start"
          >
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© {year} Shannon Engineering. All rights reserved.</p>
        <p className="font-heading uppercase tracking-[0.25em]">Designed · Engineered · Delivered</p>
      </div>
    </footer>
  );
};
