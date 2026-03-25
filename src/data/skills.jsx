import { 
  HiCommandLine, 
  HiServerStack, 
  HiCircleStack, 
  HiCpuChip, 
  HiShieldCheck 
} from "react-icons/hi2";

export const skills = [
  {
    category: "Frontend",
    icon: <HiCommandLine className="h-4 w-4" />,
    items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Python", "C#"],
  },
  {
    category: "Backend",
    icon: <HiServerStack className="h-4 w-4" />,
    items: ["Node.js", "Express", "REST API"],
  },
  {
    category: "Database",
    icon: <HiCircleStack className="h-4 w-4" />,
    items: ["MSSQL", "MySQL", "PostgreSQL"],
  },
  {
    category: "Automation / Tools",
    icon: <HiCpuChip className="h-4 w-4" />,
    items: ["Node-RED", "Power Automate", "Git", "GitHub"],
  },
  {
    category: "Engineering / QA",
    icon: <HiShieldCheck className="h-4 w-4" />,
    items: ["Testing", "Failure Analysis", "RCA/CAPA", "Validation", "NPI"],
  },
];