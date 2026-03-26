import { projects } from "../../data/projects";
import calibrationImg from "../../assets/images/Calibration.png";
import trendDefectImg from "../../assets/images/Trend Defect.png";

export default function ProjectsSection() {
  return (
    <section className="mt-14">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Selected frontend showcases and internal tool concepts.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="border-b border-border bg-muted/30 lg:border-b-0 lg:border-r">
                <div className="flex flex-wrap items-center justify-center gap-4 my-3">
                  <img
                    src={calibrationImg}
                    alt="Calibration"
                    className="w-full max-w-md rounded-xl border border-border object-cover shadow-sm"
                  />
                  <img
                    src={trendDefectImg}
                    alt="Trend Defect"
                    className="w-full max-w-md rounded-xl border border-border object-cover shadow-sm"
                  />
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-medium">
                    {project.type}
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5">
                  <h4 className="mb-2 text-sm font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}