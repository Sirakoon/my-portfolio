import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section className="mt-14">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Selected frontend showcases and internal tool concepts.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            {/* <img
              src={project.image}
              alt={project.title}
              className="aspect-[16/10] w-full object-cover object-top"
            /> */}

            <div className="p-5">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-border px-3 py-1 text-xs">
                  {project.type}
                </span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-600">
                  {project.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
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
          </article>
        ))}
      </div>
    </section>
  );
}