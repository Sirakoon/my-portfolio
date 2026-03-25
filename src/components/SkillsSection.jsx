
const skills = {
  "Backend": ["Node.js", "Express", "REST API", "MSSQL"],
  "Frontend": ["React", "Tailwind CSS", "Vite"],
  "Automation": ["Node-RED", "Power Automate"],
  "Engineering": ["Testing/FA", "RCA/CAPA", "NPI", "Validation"],
}

export function SkillsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold uppercase tracking-wide">Skills</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="rounded-2xl border border-border bg-card p-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span key={skill} className="rounded-full border border-border px-2.5 py-1 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}