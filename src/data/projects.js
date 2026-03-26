export const projects = [
  {
    id: "calibration-system",
    title: "Calibration Tracking System",
    image: `${import.meta.env.BASE_URL}projects/calibration.png`,
    type: "Internal Engineering System",
    status: "Concept Design",
    description:
      "A calibration tracking system concept built to improve equipment due-date visibility, status monitoring, and follow-up workflows for internal engineering operations.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MSSQL",
      "REST API",
      "Dashboard UI",
    ],
    problem:
      "Calibration follow-up was often managed through spreadsheets and manual checks, making overdue items harder to track and increasing the risk of missed due dates.",
    solution:
      "Designed a centralized workflow for calibration records, equipment status, due-date tracking, and filterable monitoring views to support faster follow-up.",
    backend:
      "Planned backend structure for calibration records, equipment master data, due-date logic, status-based queries, and future notification integration.",
    role:
      "Designed the system concept, user flow, dashboard structure, and backend-oriented data model for calibration tracking.",
    impact: [
      "Improves visibility of calibration due dates and equipment status",
      "Reduces reliance on spreadsheet-based follow-up",
      "Shows practical backend workflow thinking for internal operations",
    ],
    githubUrl: "https://github.com/Sirakoon",
    demoUrl: "",
  },
  {
    id: "trend-defect-dashboard",
    title: "Trend Defect Dashboard",
    image: `${import.meta.env.BASE_URL}projects/trend-defect.png`,
    type: "Production Monitoring Dashboard",
    status: "Concept Design",
    description:
      "A defect monitoring dashboard concept designed to improve visibility of recurring issues, production trends, and reporting readiness across teams.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MSSQL",
      "Chart UI",
      "Data Visualization",
    ],
    problem:
      "Defect data and issue visibility can become fragmented across teams, making it harder to identify recurring patterns and communicate production concerns quickly.",
    solution:
      "Designed a dashboard workflow focused on trend monitoring, issue grouping, historical comparison, and reporting-friendly summary views.",
    backend:
      "Planned backend data flow for defect records, trend aggregation, historical tracking, and reporting queries to support dashboard analysis.",
    role:
      "Designed the dashboard concept, reporting layout, and backend-aware data flow for issue trend monitoring.",
    impact: [
      "Improves visibility of recurring production issues",
      "Supports faster communication through clearer monitoring views",
      "Reflects backend-oriented thinking for analytics and reporting systems",
    ],
    githubUrl: "https://github.com/Sirakoon",
    demoUrl: "",
  },
];