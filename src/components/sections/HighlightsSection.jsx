import {
  HiOutlineCircleStack,
  HiOutlineServerStack,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

const highlights = [
  {
    title: "REST API Development",
    description:
      "Designed and built internal APIs with Node.js and Express to support business workflows, production integration, and system operations.",
    icon: HiOutlineServerStack,
  },
  {
    title: "Database Design",
    description:
      "Designed MSSQL schemas, relationships, and CRUD-based flows for internal systems such as stock, calibration, and equipment tracking.",
    icon: HiOutlineCircleStack,
  },
  {
    title: "Workflow Automation",
    description:
      "Connected systems and reduced manual work using Node-RED and Power Automate for data flow and notification processes.",
    icon: HiOutlineCog6Tooth,
  },
];

export default function HighlightsSection() {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-full border border-border bg-background">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}