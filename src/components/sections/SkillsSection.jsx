import { 
  LuSparkles, LuCpu, LuServer, LuDatabase, LuWrench, LuSettings2, LuTerminal 
} from "react-icons/lu";
import { 
  SiPython, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, 
  SiPostgresql, SiMysql, SiGithub, SiHtml5, SiCss3, SiNodered, SiGit 
} from "react-icons/si";
import { TbBrandCSharp, TbApi, TbSettingsAutomation } from "react-icons/tb";
import { skills } from "../../data/skills.jsx";

// 1. Map สำหรับ Icon ของแต่ละ Item
const itemIconMap = {
  // Frontend & Languages
  "React": <SiReact className="mr-1.5 h-3.5 w-3.5 text-[#61DAFB]" />,
  "JavaScript": <SiJavascript className="mr-1.5 h-3.5 w-3.5 text-[#F7DF1E]" />,
  "Tailwind CSS": <SiTailwindcss className="mr-1.5 h-3.5 w-3.5 text-[#06B6D4]" />,
  "HTML": <SiHtml5 className="mr-1.5 h-3.5 w-3.5 text-[#E34F26]" />,
  "CSS": <SiCss3 className="mr-1.5 h-3.5 w-3.5 text-[#1572B6]" />,
  "Python": <SiPython className="mr-1.5 h-3.5 w-3.5 text-[#3776AB]" />,
  "python": <SiPython className="mr-1.5 h-3.5 w-3.5 text-[#3776AB]" />,
  "C#": <TbBrandCSharp className="mr-1.5 h-4 w-4 text-[#239120]" />,
  
  // Backend
  "Node.js": <SiNodedotjs className="mr-1.5 h-3.5 w-3.5 text-[#339933]" />,
  "Express": <LuServer className="mr-1.5 h-3.5 w-3.5 text-slate-400" />,
  "REST API": <TbApi className="mr-1.5 h-4 w-4 text-blue-400" />,
  
  // Database
  "MSSQL": <LuDatabase className="mr-1.5 h-3.5 w-3.5 text-[#CC2927]" />,
  "MySQL": <SiMysql className="mr-1.5 h-3.5 w-3.5 text-[#4479A1]" />,
  "PostgreSQL": <SiPostgresql className="mr-1.5 h-3.5 w-3.5 text-[#4169E1]" />,
  
  // Tools & Automation
  "Node-RED": <SiNodered className="mr-1.5 h-3.5 w-3.5 text-[#8F0000]" />,
  "Power Automate": <TbSettingsAutomation className="mr-1.5 h-3.5 w-3.5 text-blue-500" />,
  "Git": <SiGit className="mr-1.5 h-3.5 w-3.5 text-[#F05032]" />, // เพิ่ม Git Icon สีส้มมาตรฐาน
  "GitHub": <SiGithub className="mr-1.5 h-3.5 w-3.5 text-foreground" />,
};

// 2. Map สำหรับ Icon ของหมวดหมู่ (Category)
const categoryIconMap = {
  "Frontend": <LuTerminal className="h-4 w-4 text-blue-500" />, // ใช้ LuTerminal แทน LuCode เพื่อความชัวร์
  "Backend": <LuServer className="h-4 w-4 text-green-500" />,
  "Database": <LuDatabase className="h-4 w-4 text-purple-500" />,
  "Automation / Tools": <LuSettings2 className="h-4 w-4 text-orange-500" />,
  "Engineering / QA": <LuWrench className="h-4 w-4 text-red-500" />,
};

export default function SkillsSection() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold uppercase tracking-wide">Skills</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Technical skills, tools, and engineering capabilities.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
          <LuCpu className="h-4 w-4" />
          Capability overview
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skills.map((group) => (
          <div 
            key={group.category} 
            className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full border border-border bg-background shrink-0">
                {categoryIconMap[group.category] || <LuSparkles className="h-4 w-4" />}
              </div>
              <h3 className="text-base font-semibold leading-tight">{group.category}</h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={`${group.category}-${item}`}
                  className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground bg-background/50 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {itemIconMap[item] || null}
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}