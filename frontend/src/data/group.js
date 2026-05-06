// Mock team data — replace with real team info anytime.
export const leadership = [
  {
    id: "ll-1",
    name: "Aisha Rahman",
    role: "Group Chief Executive Officer",
    bio: "26 years leading global EPC programs across the GCC, EU, and SEA. Civil engineer by training; PhD in structural dynamics, ICE Fellow.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&w=900&q=80",
    tag: "CEO"
  },
  {
    id: "ll-2",
    name: "Marcus Chen",
    role: "Chief Operating Officer",
    bio: "Former lead engineer on three of Asia's tallest towers. Operational excellence specialist, Lean Six Sigma Master Black Belt.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&w=900&q=80",
    tag: "COO"
  },
  {
    id: "ll-3",
    name: "Elena Marchetti",
    role: "Chief Engineering Officer",
    bio: "Heads the structural & civil practice. PE/PEng across 4 jurisdictions. Pioneer in digital-twin construction at scale.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&w=900&q=80",
    tag: "CEng"
  },
  {
    id: "ll-4",
    name: "David Okonkwo",
    role: "Chief Sustainability Officer",
    bio: "Drives net-zero commitments across all delivered assets. Architect of our 2030 carbon roadmap; LEED Fellow.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&w=900&q=80",
    tag: "CSO"
  }
];

export const disciplineHeads = [
  {
    name: "Priya Subramaniam",
    role: "Director, Structural Engineering",
    expertise: ["High-rise", "Seismic", "Long-span"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=srgb&fm=jpg&w=700&q=80"
  },
  {
    name: "Tomás Vega",
    role: "Director, Civil Infrastructure",
    expertise: ["Tunneling", "Bridges", "Marine"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&w=700&q=80"
  },
  {
    name: "Hannah Lindqvist",
    role: "Director, Project Management",
    expertise: ["EVM", "Risk", "PMC"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=srgb&fm=jpg&w=700&q=80"
  },
  {
    name: "Karim El-Sayed",
    role: "Director, MEP Systems",
    expertise: ["BMS", "Net-zero", "Smart"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&w=700&q=80"
  },
  {
    name: "Yuki Tanaka",
    role: "Director, Digital Construction",
    expertise: ["BIM L3", "AI", "Robotics"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&w=700&q=80"
  },
  {
    name: "Nina Petrova",
    role: "Director, Sustainability",
    expertise: ["Whole-life", "LEED", "BREEAM"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=srgb&fm=jpg&w=700&q=80"
  },
  {
    name: "Rashid Al-Mansoori",
    role: "Director, Commercial",
    expertise: ["FIDIC", "Cost", "Contracts"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&w=700&q=80"
  },
  {
    name: "Sophia Adeyemi",
    role: "Director, HSE",
    expertise: ["Zero-harm", "ISO 45001", "Wellbeing"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=srgb&fm=jpg&w=700&q=80"
  }
];

export const teamStats = [
  { value: 4800, suffix: "+", label: "Engineers Worldwide" },
  { value: 22, suffix: "", label: "Countries Active" },
  { value: 18, suffix: "+", label: "Disciplines Practiced" },
  { value: 12, suffix: " yrs", label: "Avg. Leadership Tenure" }
];

// SEC Group sister companies (placeholders — replace with real info)
export const sisterCompanies = [
  {
    n: "01",
    sector: "Civil & Building",
    name: "SEC Construction",
    monogram: "SEC|C",
    description: "Tier-1 design–build contractor for towers, mixed-use, hospitality and institutional assets across EMEA and APAC.",
    stats: [
      { v: "$2.1B", l: "Annual Revenue" },
      { v: "180+", l: "Projects" },
      { v: "12", l: "Countries" }
    ],
    image: "https://images.unsplash.com/photo-1758261785728-24fc44937941?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85"
  },
  {
    n: "02",
    sector: "Heavy Civil & Transit",
    name: "SEC Infrastructure",
    monogram: "SEC|I",
    description: "Bridges, tunnels, metros, ports and aviation. Specialized in TBM-driven works and seismic-resilient structures.",
    stats: [
      { v: "$1.6B", l: "Annual Revenue" },
      { v: "44", l: "Active Programs" },
      { v: "9", l: "TBMs Operational" }
    ],
    image: "https://images.unsplash.com/photo-1556459537-3f2228eb9490?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85"
  },
  {
    n: "03",
    sector: "Real Estate Development",
    name: "SEC Real Estate",
    monogram: "SEC|R",
    description: "Master-developer of mixed-use districts and residential portfolios. Asset light operator backed by long-cycle institutional capital.",
    stats: [
      { v: "14M", l: "sqft Pipeline" },
      { v: "$680M", l: "AUM" },
      { v: "5", l: "Districts" }
    ],
    image: "https://images.unsplash.com/photo-1777464725685-23c1f81842b5?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85"
  },
  {
    n: "04",
    sector: "Advisory & PMC",
    name: "SEC Consultants",
    monogram: "SEC|A",
    description: "Owner's representation, project management, cost consulting, due diligence and lender's technical advisory across complex programs.",
    stats: [
      { v: "$26B", l: "Programs Advised" },
      { v: "640+", l: "Engagements" },
      { v: "32", l: "Countries" }
    ],
    image: "https://images.unsplash.com/photo-1706581324170-d847716c4512?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85"
  },
  {
    n: "05",
    sector: "Energy & Net-Zero",
    name: "SEC Sustainable",
    monogram: "SEC|S",
    description: "Photovoltaic, GSHP, mass-timber and circular-economy retrofits. Engineering whole-life carbon out of the built environment.",
    stats: [
      { v: "1.8M", l: "Tonnes CO₂e Saved" },
      { v: "92", l: "Retrofits Delivered" },
      { v: "100%", l: "Net-Zero by 2030" }
    ],
    image: "https://images.unsplash.com/photo-1694521787162-5373b598945c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85"
  }
];

export const groupStats = [
  { value: 5, suffix: "", label: "Group Companies" },
  { value: 4.8, suffix: "B", label: "Combined Revenue ($)" },
  { value: 8200, suffix: "+", label: "Group Employees" },
  { value: 38, suffix: "", label: "Countries Reached" }
];

// Strategic Partners — Consultants & Clients (placeholders, replace logos later)
// Each entry uses a typographic style to render a unique-looking "logo mark".
// styles: serif | sans-bold | mono | italic | wide | dotted | slash | underline
export const consultants = [
  { name: "ARCHWORKS", style: "wide" },
  { name: "Aetheria", style: "serif" },
  { name: "AXIS·LAB", style: "dotted" },
  { name: "BLOK", style: "sans-bold" },
  { name: "Cantilever", style: "italic" },
  { name: "CIVIC/CO", style: "slash" },
  { name: "DELTA", style: "wide" },
  { name: "engineworks", style: "mono" },
  { name: "Foundry & Co", style: "serif" },
  { name: "Helix", style: "italic" },
  { name: "JANUS", style: "sans-bold" },
  { name: "lattice.studio", style: "mono" },
  { name: "MERIDIAN", style: "wide" },
  { name: "Northstar", style: "serif" },
  { name: "OBELISK", style: "underline" },
  { name: "Praxis", style: "italic" },
  { name: "RIGOR", style: "sans-bold" },
  { name: "Saltworks", style: "serif" },
  { name: "TENSO", style: "wide" },
  { name: "vector·design", style: "dotted" }
];

export const clients = [
  { name: "AXIS CAPITAL", style: "sans-bold" },
  { name: "Bayfield Group", style: "serif" },
  { name: "Concord", style: "italic" },
  { name: "DUNAS", style: "wide" },
  { name: "Estuary Living", style: "serif" },
  { name: "FORTRESS", style: "sans-bold" },
  { name: "Granite Holdings", style: "italic" },
  { name: "HORIZON", style: "underline" },
  { name: "Imperial Estates", style: "serif" },
  { name: "Lendlease·X", style: "dotted" },
  { name: "Lumen Urban", style: "italic" },
  { name: "MARINA PIER", style: "wide" },
  { name: "Meridian Holdings", style: "serif" },
  { name: "NEXUS", style: "sans-bold" },
  { name: "Orion Properties", style: "italic" },
  { name: "QUARTZ", style: "underline" },
  { name: "Regalia REIT", style: "serif" },
  { name: "STELLAR", style: "wide" },
  { name: "Vertex Capital", style: "italic" },
  { name: "ZENITH·DEV", style: "slash" }
];

export const partnerStats = [
  { value: 200, suffix: "+", label: "Trusted Partners" },
  { value: 26, suffix: " yrs", label: "Average Relationship" },
  { value: 92, suffix: "%", label: "Repeat Engagement" },
  { value: 38, suffix: "", label: "Countries Served" }
];

// Safety, Health & Environment
export const shePillars = [
  {
    title: "Safety",
    overline: "Zero Harm",
    body: "Every site is engineered for zero-harm outcomes — from PPE to permit-to-work to digital site monitoring. Our LTIFR is in the lowest decile of the industry.",
    bullets: ["ISO 45001 certified", "Behaviour-Based Safety", "Real-time incident reporting", "Permit-to-work digital workflows"]
  },
  {
    title: "Health",
    overline: "People First",
    body: "Mental wellbeing, fatigue management, ergonomic design, and on-site occupational health professionals are non-negotiables across our programs.",
    bullets: ["On-site OH professionals", "Fatigue & wellness programs", "EAP for all staff & contractors", "Heat-stress protocols"]
  },
  {
    title: "Environment",
    overline: "Built Responsibly",
    body: "Every project is benchmarked against whole-life carbon, circular-economy and biodiversity-net-gain targets — verified by third-party auditors.",
    bullets: ["ISO 14001 certified", "Whole-life carbon modeling", "Biodiversity net-gain", "Zero-waste-to-landfill targets"]
  }
];

export const sheStats = [
  { value: 3.2, suffix: "M", label: "Safe Man-Hours (2024)" },
  { value: 0.12, suffix: "", label: "LTIFR (per 200k hrs)" },
  { value: 100, suffix: "%", label: "ISO 45001 Coverage" },
  { value: 38, suffix: "%", label: "Carbon Reduction vs. Baseline" }
];

export const sheCommitments = [
  { year: "2025", text: "100% paperless permit-to-work across all active sites." },
  { year: "2026", text: "AI-enabled real-time hazard detection on every Tier-1 site." },
  { year: "2027", text: "Zero-waste-to-landfill across all owned operations." },
  { year: "2028", text: "Embodied-carbon disclosure for every delivered asset." },
  { year: "2030", text: "Net-zero operational carbon — Group-wide." }
];

export const sheCertifications = [
  { name: "ISO 45001", style: "wide" },
  { name: "ISO 14001", style: "wide" },
  { name: "ISO 9001", style: "wide" },
  { name: "ISO 50001", style: "wide" },
  { name: "OHSAS·18001", style: "dotted" },
  { name: "BSI Verified", style: "serif" },
  { name: "RoSPA Gold", style: "italic" },
  { name: "BREEAM AP", style: "sans-bold" }
];
