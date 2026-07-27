// ─────────────────────────────────────────────────────────
// Core profile data. Edit this file to update the site copy —
// no need to touch any component code.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Kunal Swami",
  initials: "KS",
  role: "Business & Data Analyst",
  tagline:
    "I turn messy, scattered data into dashboards and decisions that move the business forward.",
  location: "Gurgaon, India",
  email: "ksrankawat06@gmail.com",
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
    title: "Business & Operations Analyst",
    company: "Physics Wallah",
  },
  bio: [
    "I'm a business and data analyst currently working with Physics Wallah in Gurgaon, where I build the dashboards and analysis that leadership uses to make weekly calls on product and revenue. Before this, I spent six months at Hindustan Times turning raw audience and engagement data into decisions their editorial and marketing teams could actually act on.",
    "My day-to-day sits at the intersection of SQL, Python and BI tooling — pulling data out of internal systems, cleaning it, and packaging it into something a non-technical stakeholder can read in ten seconds. I care less about the tool and more about whether the number on the screen changes what someone does next.",
  ],
  heroStats: [
    { value: 30, suffix: "%", label: "cut in reporting time", trend: "up" },
    { value: 10, suffix: "%", label: "MoM revenue growth driven", trend: "up" },
    { value: 2, suffix: "", label: "companies, real ownership", trend: "flat" },
  ],
  aboutStats: [
    { label: "Experience", value: "1.5+ yrs", note: "Data & Business Analytics" },
    { label: "Education", value: "B.Tech, NSIT Delhi", note: "2020 – 2024" },
    { label: "Focus", value: "SQL · BI · Python", note: "Dashboards & insight" },
  ],
};

export const experience = [
  {
    id: "pw",
    company: "Physics Wallah",
    role: "Business and Operations Analyst",
    location: "Gurgaon",
    period: "Jan 2025 — Present",
    current: true,
    summary:
      "Own the data layer behind product and business decisions for PW Talk, from dashboards to KPI definitions.",
    highlights: [
      "Built and automated interactive dashboards using Metabase, Google Sheets and Python, giving leadership real-time visibility instead of weekly manual reports.",
      "Recommended changes to business and product plans based on data, contributing to 10% month-on-month revenue growth and a better user experience.",
      "Used SQL to extract and analyse large datasets, turning raw tables into business-ready insight.",
      "Partnered with cross-functional teams to define and track KPIs for PW Talk, improving product performance and retention.",
      "Enabled leadership with clear data storytelling — faster decisions, backed by numbers instead of instinct.",
    ],
    stack: ["SQL", "Python", "Metabase", "Google Sheets"],
  },
  {
    id: "ht",
    company: "Hindustan Times",
    role: "Data Analyst Intern",
    location: "New Delhi",
    period: "Jul 2024 — Dec 2024",
    current: false,
    summary:
      "Worked across teams to turn audience data into strategic and editorial decisions.",
    highlights: [
      "Collaborated with cross-functional teams to derive insights for strategic planning and innovation using SQL, Power BI and Excel.",
      "Extracted, cleaned and analysed large datasets to generate actionable insights for decision-making.",
      "Built automated KPI dashboards using SQL, Excel and Power BI, cutting reporting time by 30%.",
      "Conducted audience analysis and engagement tracking to support data-driven marketing, with storytelling dashboards in Power BI for business-critical insight.",
    ],
    stack: ["SQL", "Power BI", "Excel"],
  },
];

export const projects = [
  {
    id: "sales-dashboard",
    title: "Sales Analytics Dashboard",
    category: "SQL + Power BI",
    description:
      "An end-to-end pipeline turning raw transactional data into a dashboard leadership actually opens — sales trends, product performance and customer demographics in one view.",
    highlights: [
      "SQL scripts to clean, aggregate and structure large datasets, including customer processing and date-dimension modelling.",
      "Dynamic Power BI dashboards visualising sales trends, product performance and customer demographics.",
      "An efficient end-to-end workflow from raw data to reporting, built to best-practice standards.",
    ],
    stack: ["SQL", "Power BI", "Data Modelling"],
    links: [],
  },
  {
    id: "airfare-prediction",
    title: "Airfare Prediction Model",
    category: "Python · Machine Learning",
    description:
      "Explored what actually drives flight ticket prices — airline, stops, time of day — through cleaning, feature engineering and visual analysis.",
    highlights: [
      "Data cleaning, preprocessing and feature engineering with Pandas and NumPy on a real flight-price dataset.",
      "Box plots and density graphs in Matplotlib/Seaborn to analyse price variation across airlines and stops.",
      "Identified pricing trends by time of day and flagged outliers to keep the analysis honest.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    links: [],
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Risk Analysis",
    category: "Python · Exploratory Data Analysis",
    description:
      "A predictive-health dataset explored end to end to surface the strongest early indicators of diabetes risk.",
    highlights: [
      "Data cleaning, EDA and correlation analysis to uncover key predictors like glucose, BMI and age.",
      "Distribution plots and heatmaps to identify patterns and relationships in the data.",
      "Findings packaged for data-driven decision-making rather than left as raw notebook output.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Seaborn"],
    links: [],
  },
];

export const skillGroups = [
  {
    id: "analysis",
    title: "Analysis & BI",
    skills: [
      { name: "SQL", level: "Experienced" },
      { name: "Power BI", level: "Experienced" },
      { name: "Excel", level: "Experienced" },
      { name: "Metabase", level: "Intermediate" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Google Sheets", level: "Experienced" },
    ],
  },
  {
    id: "engineering",
    title: "Programming",
    skills: [
      { name: "Python", level: "Experienced" },
      { name: "C++", level: "Intermediate" },
      { name: "Data Structures & Algorithms", level: "Intermediate" },
      { name: "DBMS", level: "Experienced" },
      { name: "Pandas · NumPy", level: "Experienced" },
      { name: "Matplotlib · Seaborn", level: "Intermediate" },
    ],
  },
  {
    id: "operating",
    title: "Working with the business",
    skills: [
      { name: "KPI Definition & Tracking", level: "Experienced" },
      { name: "Stakeholder Communication", level: "Experienced" },
      { name: "Data Storytelling", level: "Experienced" },
      { name: "Project Management", level: "Intermediate" },
      { name: "Business Acumen", level: "Intermediate" },
      { name: "Team Collaboration", level: "Experienced" },
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "Netaji Subhas Institute of Technology (NSIT), New Delhi",
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

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
