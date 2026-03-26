export const projects = [
  {
    id: "calibration-system",
    title: "Calibration Tracking System",
    image: `${import.meta.env.BASE_URL}projects/calibration.png`,
    type: "Internal Tool Concept",
    status: "Backend-Focused Mockup",
    description:
      "A calibration tracking system concept designed to improve due-date visibility, equipment status management, and follow-up workflows for engineering operations.",
    tech: ["React", "Node.js", "Express", "MSSQL", "Mock Data"],
    problem:
      "Calibration follow-up was often handled through spreadsheets and manual checks, making overdue items harder to track and increasing the risk of missed due dates.",
    backend:
      "Planned backend structure for calibration records, equipment master data, due-date logic, and status-based queries. Designed with CRUD flows and future notification integration in mind.",
    role:
      "Designed the system concept, frontend workflow, dashboard structure, and backend-oriented data flow for calibration tracking.",
    impact: [
      "Improves visibility of calibration status and due dates",
      "Reduces reliance on manual spreadsheet follow-up",
      "Demonstrates practical backend thinking for internal operations",
    ],
    githubUrl: "https://github.com/Sirakoon",
    demoUrl: "",
  },
  {
    id: "trend-defect-dashboard",
    title: "Trend Defect Dashboard",
    image: `${import.meta.env.BASE_URL}projects/trend-defect.png`,
    type: "Monitoring Concept",
    status: "Backend-Focused Mockup",
    description:
      "A defect monitoring dashboard concept built to improve visibility of recurring issues, trend interpretation, and reporting readiness across production teams.",
    tech: ["React", "Node.js", "Express", "MSSQL", "Chart UI"],
    problem:
      "Production defect visibility can become fragmented across teams, making it difficult to identify patterns quickly and communicate issues effectively.",
    backend:
      "Planned backend data flow for issue records, defect trend aggregation, historical tracking, and reporting-friendly queries to support dashboard views.",
    role:
      "Designed the dashboard concept, reporting layout, and backend-aware data structure for issue trend visibility.",
    impact: [
      "Improves recurring issue visibility",
      "Supports faster communication through clearer reporting views",
      "Reflects backend-oriented thinking for monitoring and analytics systems",
    ],
    githubUrl: "https://github.com/Sirakoon",
    demoUrl: "",
  },
];