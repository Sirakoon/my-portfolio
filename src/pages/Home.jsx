import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
// import ProjectsSection from "../components/sections/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <HeroSection />
        <SkillsSection />
        {/* <ProjectsSection /> */}
        <ExperienceSection />
      </main>

      <Footer />
    </div>
  );
}