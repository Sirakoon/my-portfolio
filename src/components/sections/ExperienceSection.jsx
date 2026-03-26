import {
  HiBuildingOffice2,
  HiBriefcase,
  HiCalendarDays,
  HiMapPin,
  HiChartBarSquare,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import { experiences } from "../../data/experiences.jsx";

export default function ExperienceSection() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold uppercase tracking-wide">
            Experience
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Roles, responsibilities, and impact delivered.
          </p>
        </div>

        <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
          <HiBriefcase className="h-4 w-4" />
          Timeline view
        </div>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-3.5 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const isRight = idx % 2 === 1;

            return (
              <div key={exp.company} className="relative">
                <div className="absolute left-3.5top-6 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2">
                  <div className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background shadow-sm">
                    {exp.company.includes("Delta") ? (
                      <HiBuildingOffice2 className="h-4 w-4" />
                    ) : (
                      <HiWrenchScrewdriver className="h-4 w-4" />
                    )}
                  </div>
                </div>

                <div className="pl-12 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0">
                  <div className="hidden sm:block">
                    {!isRight && <ExperienceCard exp={exp} />}
                  </div>

                  <div className="hidden sm:block">
                    {isRight && <ExperienceCard exp={exp} />}
                  </div>

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
    <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
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
                  const color = isString
                    ? "text-muted-foreground"
                    : (tag.color || "text-muted-foreground");

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
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
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
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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