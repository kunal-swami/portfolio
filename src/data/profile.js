// ─────────────────────────────────────────────────────────
// Core profile data. Edit this file to update the site copy.
// Source of truth: Kunal_Swami_PM.pdf (APM / Product Management positioning).
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Kunal Swami",
  initials: "KS",
  role: "Product Builder & APM",
  headline: "Product Management | Product Strategy & Analytics",
  tagline:
    "I turn funnel insights into shipped products—driving 0-to-1 discovery, writing PRDs, running pricing & retention A/B experiments, and partnering with Design and Engineering.",
  location: "Gurgaon, India",
  email: "kunalswamirankawat@gmail.com",
  phone: "+91 90246 85944",
  resumeUrl: "/Kunal_Swami_Resume.pdf",
  photo: {
    portrait: "/profile-portrait.jpg",
    square: "/profile-square.jpg",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/kunalswamii/",
    github: "https://github.com/kunal-swami",
  },
  currentRole: {
    title: "Product Strategy & Execution",
    company: "Physics Wallah",
  },

  // Professional summary framed for Associate Product Manager (APM) & Product roles.
  summary:
    "Product Management professional with 2+ years of experience driving 0-to-1 product discovery, PRDs, experimentation, and growth initiatives across consumer tech. Drove problem discovery and co-shaped product requirements for PW Talk's scenario-based AI roleplay redesign, while leading subscription pricing A/B experiments and retention initiatives. I translate funnel insights into actionable feature requirements, define success metrics, and collaborate with PMs, Design, and Engineering through Agile sprint execution and launch. Backed by product case studies on Ola and Zomato covering 0-to-1 strategy, RICE prioritization, unit economics, and metric design.",

  // About Me: reframed around Product Management, PRDs, discovery, and cross-functional execution.
  bio: [
    "I operate at the intersection of product strategy, user discovery, and experimentation. At Physics Wallah in Gurgaon, I partnered with Product, Design, and Engineering on PW Talk—diagnosing user friction across ~60% of AI speaking sessions, co-shaping the PRD and success metrics for our scenario-based roleplay redesign, and leading subscription pricing A/B experiments that unlocked a 5–6% revenue lift and cut churn by 10%.",
    "Whether I'm acting as product liaison for an engineering pod, prioritizing roadmap bets with RICE, or digging into SQL and Python funnels to uncover why 68–70% of cancellations happen in the first 15 minutes, my focus is always on shipping the right product solution—from problem discovery and PRD writing all the way to go-to-market rollout.",
  ],

  // `suffix` is appended after the animated number, so value 5 + suffix "–6%" reads "5–6%".
  heroStats: [
    { value: 5, suffix: "–6%", label: "revenue lift via pricing A/B test & GTM rollout", trend: "up" },
    { value: 10, suffix: "%", label: "churn reduction via AI roleplay PRD & redesign", trend: "up" },
    { value: 50, suffix: "+", label: "product KPIs & roadmap metrics owned", trend: "flat" },
  ],
  aboutStats: [
    { label: "Experience", value: "2+ yrs", note: "Product discovery, strategy & growth" },
    { label: "Education", value: "B.Tech, NSUT Delhi", note: "2020 – 2024" },
    { label: "Focus", value: "0→1 · PRDs · Experimentation", note: "User insights to shipped product" },
  ],
};

export const experience = [
  {
    id: "pw",
    company: "Physics Wallah",
    role: "Product Analyst (Product Strategy & Execution)",
    location: "Gurgaon",
    period: "May 2025 — Aug 2026",
    current: false,
    summary:
      "Owned problem discovery, PRD co-shaping, pricing A/B experimentation, and Agile pod delivery for PW Talk alongside Product, Design, and Engineering.",
    highlights: [
      "Product discovery & strategy: identified an unmet need in Riva's open-ended speaking experience despite ~60% of tracked interaction time; diagnosed an expectation gap and prioritized guided, goal-based practice flows.",
      "Monetization & experimentation: designed and executed a subscription pricing A/B test (Rs 199 vs Rs 249), tracked guardrail metrics, and presented go-to-market rollout plans—unlocking a 5–6% revenue lift.",
      "Product strategy & PRD execution: partnered with the Product Manager on the scenario-based AI roleplay redesign—driving problem discovery through funnel analysis, co-shaping feature requirements and success metrics for the PRD, and collaborating with Design and Engineering through launch to reduce subscription churn by 10%.",
      "Engagement risk detection & retention: isolated via funnel analysis that 68–70% of cancellations occurred within 15 minutes, and defined product requirements for automated next-best-action reactivation journeys to boost revenue and CLV.",
      "Cross-functional & Agile delivery: acted as product liaison for an engineering pod, managing sprint cycles, backlog grooming, and user story creation to align technical execution with quarterly product goals.",
      "Roadmap & prioritization: conducted user research and competitive teardowns to uncover engagement gaps; defined 50+ core KPIs and collaborated with engineering and stakeholders to translate insights into quarterly product roadmaps.",
    ],
    stack: ["PRDs", "RICE", "A/B Testing", "Jira", "Figma", "MoEngage", "AppsFlyer", "SQL", "Python", "Metabase"],
  },
  {
    id: "ht",
    company: "Hindustan Times",
    role: "Data Analyst (Growth & GTM)",
    location: "New Delhi",
    period: "Aug 2024 — Apr 2025",
    current: false,
    summary:
      "Directed go-to-market segmentation, funnel optimization, and automated analytics workflows across cross-functional product and business teams.",
    highlights: [
      "Growth & GTM strategy: directed Go-to-Market targeting by analysing user segmentation and conversion funnels across 35,000+ users, identifying high-intent segments that improved lead-generation efficiency by 18%.",
      "Operational scalability: deployed automated reporting infrastructure that eliminated 3 hours of daily manual overhead, improving cross-functional alignment and data visibility.",
      "Performance & cohort analytics: built cross-functional dashboards and analysed audience segments, conversion funnels, and campaign performance to guide targeting and product decisions.",
    ],
    stack: ["GTM Strategy", "Funnel Analysis", "SQL", "Power BI", "Excel"],
  },
];

// ── Product case studies & PRDs ─────────────────────────
// Every figure below is from the resume. Add `links` (for example the
// Ola Daily PDF) as { label: "View PDF", href: "..." } and they appear
// automatically.
export const caseStudies = [
  {
    id: "zomato-group-ordering",
    title: "Zomato Product Teardown: Improving Group Ordering",
    type: "Product Case Study & PRD",
    context:
      "Group orders on Zomato hit friction at every stage of the journey, from discovery and cart to checkout and post-order bill splitting.",
    metrics: [
      { value: "6", label: "opportunities RICE-prioritized" },
      { value: "2", label: "0-to-1 features proposed" },
    ],
    contribution:
      "Mapped the end-to-end ordering journey to diagnose group-ordering drop-offs, prioritized six product opportunities using RICE, and designed two solutions: a multi-restaurant cart and native bill splitting. Architected an A/B testing framework and metric hierarchy covering primary conversion metrics alongside payment, cancellation, and delivery TAT guardrails.",
    tags: ["Problem Discovery", "RICE Prioritization", "Solution Design", "A/B Testing", "Metric Hierarchy"],
    links: [],
  },
  {
    id: "ola-daily-2035",
    title: "Ola Daily: 2035 Commute Product Strategy",
    type: "0-to-1 Product Strategy",
    context:
      "Urban two-wheeler commuters need a reliable daily commute, and past shuttle attempts like Uber Shuttle in India failed on ridership, permits, and lack of fallback rides.",
    metrics: [
      { value: "190M", label: "addressable segment (assumption-based)" },
      { value: "Rs 38 vs Rs 56", label: "cost vs revenue per seat-trip" },
      { value: "54", label: "trips to break even" },
    ],
    contribution:
      "Defined a 0-to-1 monthly multimodal pass with a guaranteed shuttle seat and automatic backup ride. Evaluated six solution options across cost, scalability, reliability, operational control, and regulatory risk to select a pre-committed-demand shuttle pass. Established North Star Metric (Daily On-Time Commuters), five driver metrics, guardrails, unit economics, and a phased 2027–35 GTM rollout starting with employer-led pilots.",
    tags: ["0-to-1 Product Vision", "Competitive Strategy", "North Star Metric", "Unit Economics", "Go-to-Market"],
    links: [],
  },
];

// ── Projects ────────────────────────────────────────────
// Existing projects, kept as they were. They are not on the latest
// resume, so no outcome numbers are claimed. Add `outcomes:
// [{ value, label }]` to any project only where you have real data.
export const projects = [
  {
    id: "sales-dashboard",
    title: "Sales Analytics Dashboard",
    category: "SQL + Power BI",
    description:
      "Leadership needed one view of sales trends, product performance and customer demographics instead of raw transaction tables.",
    highlights: [
      "SQL scripts to clean, aggregate and structure large datasets, including customer processing and date-dimension modelling.",
      "Dynamic Power BI dashboards visualising sales trends, product performance and customer demographics.",
      "An end-to-end workflow from raw data to reporting.",
    ],
    outcomes: [],
    stack: ["SQL", "Power BI", "Data Modelling"],
    links: [],
  },
  {
    id: "airfare-prediction",
    title: "Airfare Prediction Model",
    category: "Python · Machine Learning",
    description:
      "Flight ticket prices vary widely, and it is not obvious what drives them: airline, number of stops or time of day.",
    highlights: [
      "Data cleaning, preprocessing and feature engineering with Pandas and NumPy on a real flight-price dataset.",
      "Box plots and density graphs in Matplotlib and Seaborn to analyse price variation across airlines and stops.",
      "Identified pricing trends by time of day and flagged outliers.",
    ],
    outcomes: [],
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    links: [],
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Risk Analysis",
    category: "Python · Exploratory Data Analysis",
    description:
      "Finding the strongest early indicators of diabetes risk in a predictive-health dataset.",
    highlights: [
      "Data cleaning, EDA and correlation analysis to uncover key predictors like glucose, BMI and age.",
      "Distribution plots and heatmaps to identify patterns and relationships in the data.",
      "Findings packaged for decision-making rather than left as raw notebook output.",
    ],
    outcomes: [],
    stack: ["Python", "Pandas", "NumPy", "Seaborn"],
    links: [],
  },
];

// ── Skills ──────────────────────────────────────────────
// Only skills listed on the resume. Plain strings, rendered as pills.
export const skillGroups = [
  {
    id: "strategy",
    title: "Product Strategy & Management",
    skills: [
      "Product Strategy",
      "Roadmap Planning",
      "Go-to-Market Strategy",
      "Monetization Strategy",
      "Competitive Analysis",
      "Stakeholder Management",
    ],
  },
  {
    id: "discovery",
    title: "Product Discovery & Execution",
    skills: [
      "Product Discovery",
      "User Research",
      "PRDs",
      "User Stories",
      "RICE Prioritization",
      "Agile / Scrum",
      "Backlog Grooming",
      "User Journey Optimization",
      "Jira",
      "Figma",
    ],
  },
  {
    id: "analytics",
    title: "Product Analytics & Experimentation",
    skills: [
      "A/B Testing",
      "Hypothesis Testing",
      "Funnel Analysis",
      "Cohort Analysis",
      "Retention & Churn Analysis",
      "Engagement Metrics (DAU/WAU/MAU)",
      "Metric Hierarchies",
      "Primary & Guardrail Metrics",
      "North Star Metrics",
      "User Segmentation",
    ],
  },
  {
    id: "bi",
    title: "Product & BI Tools",
    skills: [
      "Jira",
      "Figma",
      "MoEngage",
      "AppsFlyer",
      "Power BI",
      "Metabase",
      "Excel",
      "Google Sheets",
    ],
  },
  {
    id: "technical",
    title: "Data & AI Product Skills",
    skills: [
      "SQL (CTEs, Window Functions, Query Optimization)",
      "Python",
      "LLM Product Workflows",
      "Prompt Design",
      "Evaluation Metrics for AI Conversation Features",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "Netaji Subhash University of Technology (NSUT), New Delhi",
  period: "2020 — 2024",
  score: "6.02 CGPA",
};

export const certifications = [
  {
    id: "msft-linkedin",
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn Learning",
    note: "Python, SQL, Power BI and Excel",
  },
  {
    id: "maven",
    title: "Data Analysis with Python and Pandas",
    issuer: "Maven Analytics",
    note: "Python and Pandas for real-world analysis",
  },
];

// Navigation order is unchanged. Case studies live inside the Projects section.
export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];