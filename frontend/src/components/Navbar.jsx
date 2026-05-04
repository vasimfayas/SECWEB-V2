import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Home page has dark video hero — when not scrolled there, use white text on transparent.
  const isHome = location.pathname === "/";
  const overDark = isHome && !scrolled;

  const linkBase = "link-underline font-heading text-sm uppercase tracking-[0.18em] transition-colors";
  const linkInactive = overDark ? "text-white/90 hover:text-white" : "text-neutral-700 hover:text-neutral-900";
  const wordmarkPrimary = overDark ? "text-white" : "text-neutral-900";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        overDark ? "bg-transparent py-5" : "glass-nav py-3"
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo-link">
          <img
            src="/logo.png"
            alt="Shannon Engineering"
            className="h-12 w-12 lg:h-14 lg:w-14 object-contain"
          />
          <div className="leading-none hidden sm:block">
            <div className={`font-heading font-bold text-lg tracking-tight ${wordmarkPrimary}`}>SHANNON</div>
            <div className="text-[10px] tracking-[0.3em] text-[#E11D2E] font-semibold">ENGINEERING</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-[#E11D2E] active" : linkInactive}`
              }
              data-testid={`nav-link-${l.label.toLowerCase()}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 btn-gold px-5 py-2.5 text-sm uppercase tracking-[0.18em]"
          data-testid="nav-cta-quote"
        >
          Get a Quote <ArrowUpRight className="w-4 h-4" />
        </Link>

        <button
          className={`lg:hidden p-2 ${overDark ? "text-white" : "text-neutral-900"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-200"
            data-testid="nav-mobile-panel"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-heading text-2xl tracking-tight ${
                      isActive ? "text-[#E11D2E]" : "text-neutral-900"
                    }`
                  }
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 px-5 py-3 mt-4 text-sm uppercase tracking-[0.18em]"
                data-testid="mobile-nav-cta-quote"
              >
                Get a Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
