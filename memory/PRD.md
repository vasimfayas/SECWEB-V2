# Shannon Engineering — Premium Construction Website

## Original Problem Statement
Build a modern, high-end, animated construction company website for "Shannon Engineering". Ultra modern, premium corporate design, dark + light blended theme, glassmorphism, gold/orange CTAs over dark navy/steel-gray base. Pages: Home (hero video), About (timeline), Services (grid), Projects (filterable gallery), Project Detail (carousel + counters), Contact (floating-label form + map). Smooth scroll animations, sticky blur nav, animated counters, premium loading.

## User Choices
- Brand: **Shannon Engineering**
- Backend: **frontend-only with mocked sample data** (contact form mocked)
- Stack: **React + FastAPI + MongoDB** (backend untouched, all template defaults)
- Hero: **Stock construction video** (mixkit crane site)
- Sample content: **9 realistic projects** across Commercial/Residential/Infrastructure

## Architecture
- Frontend: React 19 + react-router-dom 7 + framer-motion + Tailwind + shadcn/ui + sonner
- Theme: Outfit (heading) + Manrope (body), Dark Navy `#0A1128` / Steel Gray / Gold `#D4AF37` / Orange `#E67E22`
- Animations: framer-motion (staggered hero, scroll-reveals, AnimatedCounter via useInView, AnimatePresence page transitions)
- Backend: untouched FastAPI template (/api/ ping route only — no DB writes from this build)

## User Personas
- **Prospective Client (Developer / Owner)** — evaluating engineering firm credibility, browsing portfolio, requesting a quote
- **Talent / Partner** — researching the firm before applying or partnering
- **Visitor / Press** — exploring company milestones, services, completed projects

## Core Requirements (Static)
1. Premium dark theme with gold/orange accents and glassmorphism nav
2. Hero with auto-playing background video and animated tagline
3. Filterable projects gallery with hover zoom + overlay
4. Project detail page with image gallery, info strip, animated stat counters, prev/next nav
5. Animated milestone timeline + animated stat counters on About
6. Service grid with hover-expansion detail
7. Contact form with floating labels + map embed + animated icon contact cards
8. Smooth page transitions and scroll-reveal animations
9. Fully responsive, mobile-first with hamburger menu
10. Premium 1.7s loading screen on first mount

## Implemented (2026-02)
- ✅ Routing scaffold (`/`, `/about`, `/services`, `/projects`, `/projects/:slug`, `/contact`) with framer-motion AnimatePresence transitions
- ✅ Sticky glass Navbar with scroll-state, mobile hamburger panel
- ✅ Footer with social, navigate, contact columns
- ✅ PageLoader (Shannon brand reveal + gold progress bar, 1.7s)
- ✅ Home: hero video + tagline stagger, marquee certifications strip, asymmetric About teaser with floating "26+ years" badge, services overview (6 cards w/ hover expansion), 4 featured projects bento, final CTA
- ✅ About: hero, story (split image), Mission/Vision cards, vertical milestone timeline (6), 4 values, animated stats grid
- ✅ Services: 6-card grid w/ hover-expansion + 5-step process accordion + checklist
- ✅ Projects: filter (All/Commercial/Residential/Infrastructure), animated grid w/ AnimatePresence layout, 9 projects
- ✅ ProjectDetail: hero w/ gallery thumbnails, info strip (Location/Year/Scope/Client), description, animated stats, prev/next nav, CTA
- ✅ Contact: floating-label form (mocked submit + sonner success toast), animated contact info cards, Google Maps iframe (dark-mode CSS filter)
- ✅ AnimatedCounter (eased rAF), blueprint background, grain overlay, marquee, scroll indicator, gold-shine button effect
- ✅ All `data-testid` coverage for testing
- ✅ Testing agent passed 100% / zero issues

## Backlog (P0/P1/P2)
### P1
- Wire contact form to FastAPI `/api/inquiries` endpoint with MongoDB persistence + admin notification (currently MOCKED)
- Replace placeholder gallery thumbnails on most projects with multi-image sets
- Add `/blog` or `/insights` for SEO content marketing

### P2
- Admin dashboard to manage projects from DB (CMS-lite)
- Per-project case study downloads (PDF)
- Cookie consent banner + analytics integration
- Multilingual (EN/AR/FR) support
- prefers-reduced-motion toggle

## Next Tasks
1. Lead capture: real backend for contact form + email notifications (Resend/SendGrid)
2. SEO: meta tags per route, og:image, sitemap.xml
3. Performance pass: convert hero video to multi-bitrate, lazy-load below-the-fold imagery
