import { HiSparkles, HiCpuChip } from "react-icons/hi2";
import { skills } from "../../data/skills";

export default function SkillsSection() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold uppercase tracking-wide">
            Skills
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Technical skills, tools, and engineering capabilities.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
          <HiCpuChip className="h-4 w-4" />
          Capability overview
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm"
          >
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full border border-border bg-background shrink-0">
                <HiSparkles className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold leading-tight">
                {group.category}
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={`${group.category}-${item}`}
                  className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
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