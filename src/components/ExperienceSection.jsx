import {
  HiBuildingOffice2,
  HiBriefcase,
  HiCalendarDays,
  HiMapPin,
  HiChartBarSquare,
  HiWrenchScrewdriver,
  HiShieldCheck,
  HiBugAnt,
} from "react-icons/hi2";
import { SiNodered } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";

const tags = [
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <FaNodeJs />, color: "text-green-500"  },
  { name: "MSSQL", icon: <PiFileSqlDuotone />, color: "text-blue-500" },
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Node-RED", icon: <SiNodered />, color: "text-red-500" },
  { name: "Power Automate" },
];

const experiences = [
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

export function ExperienceSection() {
  return (
    <section className="mt-16">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold uppercase tracking-wide">
            Experience
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Roles, responsibilities, and impact delivered.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
          <HiBriefcase className="h-4 w-4" />
          Timeline view
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-8 relative">
        <div className="absolute left-[14px] top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const isRight = idx % 2 === 1;

            return (
              <div key={exp.company} className="relative">
                {/* Dot */}
                <div className="absolute left-[14px] top-6 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2">
                  <div className="grid place-items-center h-9 w-9 rounded-full border border-border bg-background shadow-sm">
                    {exp.company.includes("Delta") ? (
                      <HiBuildingOffice2 className="h-4 w-4" />
                    ) : (
                      <HiWrenchScrewdriver className="h-4 w-4" />
                    )}
                  </div>
                </div>

                {/* Layout */}
                <div className="pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10">
                  {/* Left column */}
                  <div className="sm:col-span-1">
                    {!isRight && <ExperienceCard exp={exp} />}
                  </div>

                  {/* Right column */}
                  <div className="sm:col-span-1">
                    {isRight && <ExperienceCard exp={exp} />}
                  </div>

                  {/* Mobile: แสดงทุกใบในคอลัมน์เดียว */}
                  <div className="sm:hidden">
                    <ExperienceCard exp={exp} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  return (
    <div className="rounded-2xl border border-border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{exp.company}</h3>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <HiMapPin className="h-4 w-4" />
            {exp.location}
          </p>
        </div>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <HiCalendarDays className="h-4 w-4" />
          {exp.overallPeriod}
        </p>
      </div>

      <div className="mt-6 space-y-8">
        {(exp.roles ?? []).map((role) => (
          <div
            key={role.title}
            className="rounded-xl border border-border bg-background/40 p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h4 className="font-semibold">{role.title}</h4>
              <span className="text-xs text-muted-foreground">
                {role.period}
              </span>
            </div>

            {role.tags?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {role.tags.map((tag) => {
                  const isString = typeof tag === "string";

                  const key = isString ? tag : tag.name;
                  const name = isString ? tag : tag.name;
                  const icon = isString ? null : tag.icon;
                  const color = isString ? "text-muted-foreground" : (tag.color || "text-muted-foreground");

                  return (
                    <span
                      key={key}
                      className={`inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs ${color}`}
                    >
                      {icon && <span className="text-base">{icon}</span>}
                      {name}
                    </span>
                  );
                })}
              </div>
            )}


            {role.bullets?.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {role.impact?.length > 0 && (
              <div className="mt-5">
                <p className="flex items-center gap-2 text-sm font-medium">
                  <HiChartBarSquare className="h-4 w-4" />
                  Impact
                </p>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {role.impact.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}