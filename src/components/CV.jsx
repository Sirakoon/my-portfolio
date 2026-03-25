import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ExperienceSection } from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import profilePic from "@/assets/picture.jpg";

function CV() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold">Sirawit Leamlert</h1>
          <AnimatedThemeToggler />
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero Section */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr] md:items-start">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={profilePic}
              alt="Sirawit Leamlert"
              className="h-56 w-56 rounded-2xl object-cover shadow-md"
            />
          </div>

          {/* Intro Text */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Sirawit Leamlert
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Full-Stack Developer / Backend Developer / Internal Systems
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <p>Samut Prakarn, Thailand</p>
                <p>+66 88 7028969</p>
                <p>sirawitkoon47@gmail.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Personal Objectives</h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                Full-Stack Developer with an Electrical Engineering background
                and hands-on experience building internal web applications and
                REST APIs (Node.js, MSSQL). Strong background in testing/FA with
                RCA mindset. Seeking Full-Stack/Backend/Cloud/DevOps roles to
                build reliable services, automate workflows, and improve
                deployment and operations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Education</h2>
              <div className="mt-2 text-muted-foreground">
                <p>Bachelor of Engineer – Electrical Power Engineering</p>
                <p>Burapha University (2017–2020)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Experience Section */}
        <ExperienceSection />

        <footer className="mt-16 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sirawit Leamlert. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default CV;