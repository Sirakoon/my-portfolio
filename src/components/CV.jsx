import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ExperienceSection } from "./ExperienceSection";
import profilePic from "@/assets/picture.jpg";

function CV() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Sirawit Leamlert
          </h1>
          <AnimatedThemeToggler duration={350} />
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-5xl px-6 py-10 space-y-16">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Profile Image */}
          <div className="shrink-0">
            <img
              src={profilePic}
              alt="Sirawit"
              className="w-40 h-60 rounded-2xl object-cover border border-border shadow-md"
            />
          </div>

          {/* Intro Text */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-xl font-semibold uppercase">
                Contact Information
              </h2>
              <p className="mt-2 text-muted-foreground">
                Samut Prakarn, Thailand  
                <br />
                +66 88 7028969  
                <br />
                sirawitkoon47@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold uppercase">
                Personal Objectives
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Full-Stack Developer with an Electrical Engineering background
                and hands-on experience building internal web applications and
                REST APIs (Node.js, MSSQL). Strong background in testing/FA with
                RCA mindset. Seeking Full-Stack/Backend/Cloud/DevOps roles to
                build reliable services, automate workflows, and improve
                deployment and operations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold uppercase">
                Education
              </h2>
              <p className="mt-2 text-muted-foreground">
                Bachelor of Engineer – Electrical Power Engineering  
                <br />
                Burapha University (2017–2020)
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <ExperienceSection />
        </section>

      </main>
    </div>
  );
}

export default CV;