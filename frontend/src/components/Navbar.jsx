import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const flatLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" }
];

const secGroupLinks = [
  { to: "/sec-group", label: "Sister Companies" },
  { to: "/team", label: "Our Team" }
];

const trailingLinks = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/strategic-partners", label: "Strategic Partners" },
  { to: "/safety", label: "Safety" }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [secOpen, setSecOpen] = useState(false);
  const [secMobileOpen, setSecMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSecOpen(false);
    setSecMobileOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSecOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isHome = location.pathname === "/";
  const overDark = isHome && !scrolled;

  const linkBase = "link-underline font-heading text-sm uppercase tracking-[0.18em] transition-colors";
  const linkInactive = overDark ? "text-white/90 hover:text-white" : "text-neutral-700 hover:text-neutral-900";
  const wordmarkPrimary = overDark ? "text-white" : "text-neutral-900";

  const isSecActive = secGroupLinks.some((l) => location.pathname === l.to);

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

        <nav className="hidden xl:flex items-center gap-7">
          {flatLinks.map((l) => (
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

          {/* SEC Group dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setSecOpen(true)}
              onMouseEnter={() => setSecOpen(true)}
              className={`${linkBase} flex items-center gap-1 ${
                isSecActive ? "text-[#E11D2E] active" : linkInactive
              }`}
              data-testid="nav-link-sec-group"
            >
              SEC Group
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${secOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {secOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setSecOpen(false)}
                  className="absolute top-full left-0 pt-3"
                >
                  <div className="min-w-[240px] bg-white border border-neutral-200 shadow-xl py-2">
                    {secGroupLinks.map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        onClick={() => setSecOpen(false)}
                        className={({ isActive }) =>
                          `block px-5 py-3 font-heading text-sm tracking-tight transition-colors ${
                            isActive
                              ? "text-[#E11D2E] bg-neutral-50"
                              : "text-neutral-800 hover:text-[#E11D2E] hover:bg-neutral-50"
                          }`
                        }
                        data-testid={`nav-dropdown-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {l.label}
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {trailingLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-[#E11D2E] active" : linkInactive}`
              }
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden xl:inline-flex items-center gap-2 btn-gold px-5 py-2.5 text-sm uppercase tracking-[0.18em]"
          data-testid="nav-cta-quote"
        >
          Get a Quote <ArrowUpRight className="w-4 h-4" />
        </Link>

        <button
          className={`xl:hidden p-2 ${overDark ? "text-white" : "text-neutral-900"}`}
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
            className="xl:hidden overflow-hidden bg-white border-t border-neutral-200 max-h-[85vh] overflow-y-auto"
            data-testid="nav-mobile-panel"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-3">
              {flatLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-heading text-2xl tracking-tight py-1 ${isActive ? "text-[#E11D2E]" : "text-neutral-900"}`
                  }
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </NavLink>
              ))}

              {/* Mobile SEC Group accordion */}
              <div className="border-t border-neutral-200 pt-3">
                <button
                  onClick={() => setSecMobileOpen((v) => !v)}
                  className={`flex items-center justify-between w-full font-heading text-2xl tracking-tight py-1 ${
                    isSecActive ? "text-[#E11D2E]" : "text-neutral-900"
                  }`}
                  data-testid="mobile-nav-sec-group"
                >
                  SEC Group
                  <ChevronDown className={`w-5 h-5 transition-transform ${secMobileOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {secMobileOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-5 mt-2 space-y-2 border-l-2 border-[#E11D2E]">
                        {secGroupLinks.map((l) => (
                          <NavLink
                            key={l.to}
                            to={l.to}
                            className={({ isActive }) =>
                              `block font-heading text-lg tracking-tight py-1 ${
                                isActive ? "text-[#E11D2E]" : "text-neutral-700"
                              }`
                            }
                            data-testid={`mobile-nav-dropdown-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {l.label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t border-neutral-200 pt-3 flex flex-col gap-3">
                {trailingLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `font-heading text-2xl tracking-tight py-1 ${isActive ? "text-[#E11D2E]" : "text-neutral-900"}`
                    }
                    data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {l.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `font-heading text-2xl tracking-tight py-1 ${isActive ? "text-[#E11D2E]" : "text-neutral-900"}`
                  }
                  data-testid="mobile-nav-link-contact"
                >
                  Contact
                </NavLink>
              </div>

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
