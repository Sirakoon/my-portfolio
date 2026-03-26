import { projects } from "../../data/projects";
import {
  HiOutlineFolderOpen,
  HiOutlineExclamationTriangle,
  HiOutlineCircleStack,
  HiOutlineUserCircle,
  HiOutlineWrenchScrewdriver,
  HiOutlineChartBar,
  HiOutlineCodeBracket,
  HiOutlineServerStack,
} from "react-icons/hi2";

export default function ProjectsSection() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <HiOutlineFolderOpen className="h-6 w-6" />
            <h2 className="text-2xl font-semibold uppercase tracking-wide">
              Projects
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Selected internal system concepts with backend-oriented design
            thinking.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="border-b border-border bg-muted/30 lg:border-b-0 lg:border-r">
                <div className="flex min-h-64 items-center justify-center p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-xl border border-border object-cover shadow-sm"
                  />
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs font-medium">
                    <HiOutlineServerStack className="h-4 w-4" />
                    {project.type}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                    <HiOutlineChartBar className="h-4 w-4" />
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <HiOutlineExclamationTriangle className="h-4 w-4" />
                      Problem
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <HiOutlineCircleStack className="h-4 w-4" />
                      Backend Design
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {project.backend}
                    </p>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <HiOutlineUserCircle className="h-4 w-4" />
                      My Role
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <HiOutlineWrenchScrewdriver className="h-4 w-4" />
                      Tech Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <HiOutlineChartBar className="h-4 w-4" />
                      Impact
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      {project.impact.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-accent"
                  >
                    <HiOutlineCodeBracket className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}