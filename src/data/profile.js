// ─────────────────────────────────────────────────────────
// Core profile data. Edit this file to update the site copy.
// Source of truth: Kunal_Swami_PM.pdf (latest resume).
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Kunal Swami",
  initials: "KS",
  role: "Product Analyst",
  headline: "Product Management | Product Strategy & Analytics",
  tagline:
    "I turn funnel data into product decisions: what to build, what to test and what to ship.",
  location: "Gurgaon, India",
  email: "kunalswamirankawat@gmail.com", // from resume; the old site used ksrankawat06@gmail.com
  phone: "+91 90246 85944",
  resumeUrl: "/Kunal_Swami_Resume.pdf",
  photo: {
    portrait: "/profile-portrait.jpg",
    square: "/profile-square.jpg",
  },
  social: {
    linkedin: "https://linkedin.com/in/ksrankawat06",
    github: "https://github.com/ksrankawat06",
  },
  currentRole: {
    title: "Product Analyst",
    company: "Physics Wallah",
  },

  // Professional summary, from the resume, shown where the site shows the summary.
  summary:
    "Product Analyst with 2+ years of experience driving product discovery, experimentation and growth across consumer tech. Drove problem discovery and co-shaped product requirements for PW Talk's scenario-based AI roleplay redesign, while leading subscription pricing A/B experiments and retention initiatives. I translate funnel insights into feature requirements, define success metrics, and work with PMs, Design and Engineering through launch. Backed by product case studies on Ola and Zomato covering 0-to-1 strategy, RICE prioritization, experimentation and metric design.",

  // About Me: kept close to the original. Only the tense and the product framing changed.
  bio: [
    "I'm a product analyst who spent the last year and a half at Physics Wallah in Gurgaon, working on the dashboards, experiments and analysis that product and leadership teams used to make weekly calls on product and revenue. Before that, I spent time at Hindustan Times turning raw audience and engagement data into decisions their editorial and marketing teams could actually act on.",
    "My day-to-day sat at the intersection of SQL, Python and product tooling: pulling data out of internal systems, finding where users drop off, and packaging it into something a non-technical stakeholder can read in ten seconds. I care less about the tool and more about whether the number on the screen changes what someone does next.",
  ],

  // `suffix` is appended after the animated number, so value 5 + suffix "–6%" reads "5–6%".
  heroStats: [
    { value: 5, suffix: "–6%", label: "revenue lift from pricing A/B test", trend: "up" },
    { value: 10, suffix: "%", label: "reduction in subscription churn", trend: "up" },
    { value: 50, suffix: "+", label: "core KPIs defined", trend: "flat" },
  ],
  aboutStats: [
    { label: "Experience", value: "2+ yrs", note: "Product analytics & growth" },
    { label: "Education", value: "B.Tech, NSUT Delhi", note: "2020 – 2024" },
    { label: "Focus", value: "Product · Experiments · Metrics", note: "Decisions from data" },
  ],
};

export const experience = [
  {
    id: "pw",
    company: "Physics Wallah",
    role: "Product Analyst",
    location: "Gurgaon",
    period: "May 2025 — Aug 2026",
    current: false,
    summary:
      "Product discovery, experimentation and retention for PW Talk, working with the Product Manager, Design and Engineering.",
    highlights: [
      "Product discovery and strategy: found an unmet need in Riva's open-ended speaking experience despite it taking ~60% of tracked interaction time, diagnosed an expectation gap and prioritized guided, goal-based practice.",
      "Monetization and experimentation: designed and ran a subscription pricing A/B test (Rs 199 to Rs 249), tracked guardrail metrics and presented go-to-market rollout plans, unlocking a 5–6% revenue lift.",
      "Product strategy and execution: partnered with the Product Manager on the scenario-based roleplay redesign, driving problem discovery through funnel analysis, co-shaping feature requirements and success metrics for the PRD, and working with Design and Engineering through launch to reduce subscription churn by 10%.",
      "Engagement risk detection and retention: used funnel analysis to find that 68–70% of cancellations happened within 15 minutes, and defined requirements for automated next-best-action reactivation journeys to improve revenue and CLV.",
      "Cross-functional and agile delivery: acted as product liaison for an engineering pod, managing sprint cycles, backlog grooming and user story creation against quarterly product goals.",
      "Roadmap and execution: ran user research and competitive teardowns to find engagement gaps, defined 50+ core KPIs, and worked with engineering and stakeholders to turn data into quarterly roadmaps and feature prioritization.",
    ],
    stack: ["SQL", "Python", "Metabase", "MoEngage", "AppsFlyer", "Jira", "Figma"],
  },
  {
    id: "ht",
    company: "Hindustan Times",
    role: "Data Analyst",
    location: "New Delhi",
    period: "Aug 2024 — Apr 2025",
    current: false,
    summary:
      "Growth and go-to-market analysis, and automated reporting for cross-functional teams.",
    highlights: [
      "Growth and GTM strategy: directed go-to-market targeting by analysing user segmentation and conversion funnels for 35,000+ users, finding high-performing segments that improved lead-generation efficiency by 18%.",
      "Operational scalability: deployed automated infrastructure that removed 3 hours of daily manual work and improved data visibility across teams.",
      "Performance analytics: built cross-functional dashboards and analysed audience segments, conversion and campaign performance to improve targeting and decisions.",
    ],
    stack: ["SQL", "Power BI", "Excel"],
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
    type: "Case study",
    context:
      "Group orders on Zomato hit friction at every stage of the journey, from discovery and cart to checkout and the post-order experience.",
    metrics: [
      { value: "6", label: "opportunities RICE-prioritized" },
      { value: "2", label: "solutions proposed" },
    ],
    contribution:
      "Mapped the end-to-end ordering journey, prioritized six opportunities with RICE, and proposed a multi-restaurant cart and integrated bill splitting. Built an A/B testing framework and a metric hierarchy covering successful orders, cart conversion, items per cart, payment errors, cancellations and delivery guardrails.",
    tags: ["User Journey Analysis", "RICE", "A/B Testing", "Metric Design"],
    links: [],
  },
  {
    id: "ola-daily-2035",
    title: "Ola Daily: 2035 Commute Product Strategy",
    type: "0-to-1 strategy",
    context:
      "Urban two-wheeler commuters need a reliable daily commute, and past shuttle attempts like Uber Shuttle in India failed on ridership, permits and fallback.",
    metrics: [
      { value: "190M", label: "addressable segment (assumption-based)" },
      { value: "Rs 38 vs Rs 56", label: "cost vs revenue per seat-trip" },
      { value: "54", label: "trips to break even" },
    ],
    contribution:
      "Defined a monthly multimodal pass with a guaranteed shuttle seat and an automatic backup ride. Evaluated six options on cost, scalability, reliability, operational control and regulatory risk, and chose a pre-committed-demand shuttle pass. Set a north star metric (Daily On-Time Commuters) with five driver metrics, guardrails and stop rules, and a phased 2027–35 rollout starting with employer-led pilots.",
    tags: ["Product Vision", "Competitive Analysis", "North Star Metric", "Unit Economics", "GTM"],
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
    title: "Data Analytics & BI Tools",
    skills: [
      "SQL",
      "Power BI",
      "Metabase",
      "MoEngage",
      "AppsFlyer",
      "Excel",
      "Google Sheets",
    ],
  },
  {
    id: "technical",
    title: "Technical Skills",
    skills: [
      "Python",
      "SQL (CTEs, Window Functions, Query Optimization)",
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
