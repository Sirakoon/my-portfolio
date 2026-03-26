import { projects } from "../../data/projects";
import { FiGithub } from "react-icons/fi";
import { HiOutlineArrowUpRight, HiOutlineFolder } from "react-icons/hi2";
import { techIcons } from "../../data/techIcons";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-16">
      <div className="flex items-center gap-2">
        <HiOutlineFolder className="h-6 w-6" />
        <h2 className="text-2xl font-semibold uppercase tracking-wide">
          Projects
        </h2>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        Selected project concepts focused on internal systems, monitoring
        workflows, and backend-aware frontend design.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {project.type}
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur transition hover:bg-accent"
                  >
                    {techIcons[item]}
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">Problem: </span>
                  {project.problem}
                </div>

                {project.solution && (
                  <div>
                    <span className="font-semibold text-foreground">Solution: </span>
                    {project.solution}
                  </div>
                )}

                <div>
                  <span className="font-semibold text-foreground">Backend: </span>
                  {project.backend}
                </div>

                <div>
                  <span className="font-semibold text-foreground">Role: </span>
                  {project.role}
                </div>
              </div>

              <div className="mt-5">
                <h4 className="mb-2 text-sm font-semibold text-foreground">
                  Impact
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.impact.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-accent"
                  >
                    <FiGithub className="h-4 w-4" />
                    GitHub
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    Live Demo
                    <HiOutlineArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}