import { SiNodered } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";

const tags = [
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "MSSQL", icon: <PiFileSqlDuotone />, color: "text-blue-500" },
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Node-RED", icon: <SiNodered />, color: "text-red-500" },
  { name: "Power Automate" },
];

export const experiences = [
  {
    company: "Delta Electronics (Thailand)",
    location: "Bangpoo, Samut Prakarn",
    overallPeriod: "December 2023 – Present",
    roles: [
      {
        title: "BACKEND DEVELOPER (INTERNAL SYSTEMS)",
        period: "December 2023 – Present",
        tags: [tags[0], tags[1], tags[2], tags[3], tags[4], tags[5]],
        bullets: [
          "Built internal web applications for stock, calibration due-date tracking, equipment borrowing, and NG board monitoring",
          "Designed MSSQL schema (tables, keys, indexing where applicable) and implemented CRUD flows",
          "Developed RESTful APIs (Node.js/Express) for production detection integration and internal services",
          "Implemented authentication/authorization and role-based access",
          "Automated workflow/integration using Node-RED and Power Automate (data flow + notifications)",
        ],
        impact: [
          "Decreased issue response time by integrating real-time monitoring system",
          "Improved calibration due-date compliance through automated notification workflow",
          "Reduced manual Excel tracking by ~6 hours/week by implementing web dashboard",
        ],
      },
      {
        title: "PRODUCT ENGINEER / FAILURE ANALYSIS (PE/FA)",
        period: "December 2023 – Present",
        tags: ["Testing", "RCA/CAPA", "Validation", "NPI", "Failure Analysis"],
        bullets: [
          "Designed and implemented automated test jigs and validation programs for automotive power systems",
          "Evaluated and verified engineering design changes and factory process alterations",
          "Verified TS (Test Specification) and TE test items to ensure compliance with customer requirements",
          "Executed test plans and prepared comprehensive test reports",
          "Performed functional, performance, and regression testing of products",
          "Consolidated and tracked product trial issues during NPI and mass production",
          "Identified, reported, and monitored failures via issue tracking log",
          "Conducted root cause analysis (RCA) and supported corrective/preventive actions (CAPA)",
          "Performed benchmark testing of automotive power train systems including: bench functional integration, test execution & instrumentation measurement, incident reporting and failure investigation",
        ],
      },
    ],
  },
  {
    company: "Quanta Thailand",
    location: "Banbueng, Chonburi",
    overallPeriod: "June 2022 – November 2023",
    roles: [
      {
        title: "TEST ENGINEER",
        period: "June 2022 – November 2023",
        tags: ["Testing", "Regression", "ICT", "Fixture", "Flow improvement"],
        bullets: [
          "Debugged ICT test programs and modified test flow based on BOM changes",
          "Supported fixture/machine setup and improved daily maintenance workflow",
          "Coordinated cross-team issue triage and production incident handling",
        ],
      },
    ],
  },
];